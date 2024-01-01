import { getAllPosts } from '@/lib/blog'
import PostPreview from './PostPreview'
import { Locale } from '#/i18n.config'

function getPosts(lang: Locale): Post[] {
    const allPosts = getAllPosts(['createdAt', 'slug', 'title', 'image', 'content', 'description'], lang)

    return allPosts
}

interface LastPostProps {
    amount?: number
    lang: Locale
}
const LastPosts = (props: LastPostProps): JSX.Element => {
    const { amount = 5 } = props

    const allPosts = getPosts(props.lang)

    const lastPosts = allPosts.slice(allPosts.length - amount, allPosts.length)

    const renderAllPosts = (): Iterable<React.ReactNode> => {
        return lastPosts.map((post, index) => {
            return (
                <PostPreview
                    key={index}
                    index={index}
                    href={`/blog/${post.slug}/`}
                    title={post.title}
                    description={post.description}
                    image={post.image}
                    // stats={post.stats}
                    content={post.content}
                />
            )
        })
    }

    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col items-center gap-4 md:flex-row md:items-start md:justify-start md:flex-wrap md:gap-5">
                {renderAllPosts()}
            </div>
        </div>
    )
}

export default LastPosts
