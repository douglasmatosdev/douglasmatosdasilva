import SocialMedias from './SocialMedias'
import { Locale } from '#/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import dynamic from 'next/dynamic'

const LinkI18n = dynamic(() => import('./LinkI18n'), { ssr: false })

interface FooterProps {
    lang: Locale
}
export const Footer = async ({ lang }: FooterProps): Promise<JSX.Element> => {
    const { footer } = await getDictionary(lang)

    return (
        <footer className="flex flex-col items-center h-max px-2 pt-8 pb-8 mt-auto">
            <p className="text-sm md:text-xl">
                &copy; 2023-{new Date().getFullYear()} Douglas Matos. {footer.copy}
            </p>
            <div className="w-full md:max-w-[45%] my-6">
                <SocialMedias />
            </div>
            <div className="text-dmds-3 dark:text-dmds-5 hover:underline">
                <LinkI18n href="/pages/privacy">{footer.policy}</LinkI18n>
            </div>
        </footer>
    )
}
