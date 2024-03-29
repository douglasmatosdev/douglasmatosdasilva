import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
    slug: {
        type: 'string',
        resolve: doc => `/${doc._raw.flattenedPath}`
    },
    slugAsParams: {
        type: 'string',
        resolve: doc => doc._raw.flattenedPath // ?.split('/').slice(1).join('/')
    }
}

export const Doc = defineDocumentType(() => ({
    name: 'Doc',
    filePathPattern: `./**/*.mdx`,
    contentType: 'mdx',
    fields: {
        lastModified: {
            type: 'string',
            required: false
        },
        lang: {
            type: 'string',
            required: true
        },
        tags: {
            type: 'string',
            required: true
        },
        title: {
            type: 'string',
            required: true
        },
        description: {
            type: 'string'
        },
        createdAt: {
            type: 'string',
            required: true
        },
        author: {
            type: 'string',
            required: true
        },
        image: {
            type: 'string',
            required: true
        },
        published: {
            type: 'boolean',
            default: true
        }
    },
    computedFields
}))

export default makeSource({
    contentDirPath: 'src/articles',
    documentTypes: [Doc],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypePrettyCode,
                {
                    theme: 'github-dark',
                    onVisitLine(node) {
                        // Prevent lines from collapsing in `display: grid` mode, and allow empty lines to be copy/pasted
                        if (node.children.length === 0) {
                            node.children = [{ type: 'text', value: ' ' }]
                        }
                    },
                    onVisitHighlightedLine(node) {
                        node.properties.className.push('line--highlighted')
                    },
                    onVisitHighlightedWord(node) {
                        node.properties.className.push('word--highlighted')
                    }
                }
            ],
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ['subheading-anchor'],
                        ariaLabel: 'Link to section'
                    }
                }
            ]
        ]
    }
})
