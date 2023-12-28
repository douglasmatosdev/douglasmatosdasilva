import React from 'react'
import { Footer } from '@/components/Footer'
import TopPageContent from '@/components/TopPageContent'
import dynamic from 'next/dynamic'

const BreadCrumbs = dynamic(() => import('@/components/BreadCrumbs'), { ssr: false })

interface WrapperPageProps {
    children: React.ReactNode
}
export default function PageLayout({ children }: WrapperPageProps): JSX.Element {
    return (
        <main className="w-full bg-dmds-1 dark:bg-dmds-2 flex flex-col flex-1 md:px-8 md:pt-8">
            <TopPageContent />
            <BreadCrumbs
                homeElement={'Home'}
                separator={<span> | </span>}
                activeClasses="text-amber-500"
                containerClasses="flex py-2 mb-6 bg-gradient-to-r from-gray-200 dark:from-gray-600 to-white"
                listClasses="hover:underline mx-2 font-bold text-dms-4"
                capitalizeLinks
            />
            <section className="w-11/12 md:w-full max-w-[80%] flex-1 h-full ml-auto mr-auto">{children}</section>
            <Footer />
        </main>
    )
}
