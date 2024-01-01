import React from 'react'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Paragraph from '@/components/Paragraph'
import { getDictionary } from '@/lib/dictionary'
import { Locale } from '#/i18n.config'
import getBaseUrl from '@/lib/baseUrl'

const Form = dynamic(() => import('./Form'), { ssr: false })

export async function generateMetadata({ params }: { params: { lang: Locale } }): Promise<Metadata> {
    const {
        page: { contact }
    } = await getDictionary(params.lang)
    const title = `${contact.title} // Douglas Matos`
    const image = '/images/random.webp'
    const description = contact.description
    const baseUrl = getBaseUrl()
    const url = `${baseUrl}/${params.lang}`

    return {
        metadataBase: new URL(url),
        title,
        description,
        openGraph: {
            url,
            title,
            description,
            images: `${url}${image}`
        }
    }
}

export default async function Contact({ params }: { params: { lang: Locale } }): Promise<JSX.Element> {
    const {
        page: { contact }
    } = await getDictionary(params.lang)

    return (
        <div className="w-full md:w-6/12 ml-auto mr-auto" title="página de contato">
            <Paragraph>{contact.description}</Paragraph>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight hover:underline" title="titulo envie um email">
                {contact.subtitle}
            </h2>
            <Form lang={params.lang} />
        </div>
    )
}
