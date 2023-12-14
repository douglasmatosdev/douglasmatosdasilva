import { FaHome, FaUser } from 'react-icons/fa'

interface MenuContentProps {
    open: boolean
}
export const MenuContent = ({ open }: MenuContentProps): JSX.Element => {

    return (
        <div className='fixed md:w-full md:relative md:top-0 md:right-0 md:bottom-0 md:left-0 md:h-max top-0 -right-full bottom-0 left-full transition-all'>
            <div className={`fixed md:hidden top-0 right-0 bottom-0 ${open ? '-left-full opacity-60' : 'left-0 opacity-0'} bg-black dark:bg-white flex justify-end transition-all duration-700 delay-350`} />
            
            <div className={`md:p-0 md:w-full fixed top-0 md:relative md:top-0 md:right-0 md:bottom-0 md:left-0 md:h-max bottom-0 md:opacity-100 ${open ? 'right-0 opacity-100' : 'right-8/12 opacity-0'} bg-dmds-1 dark:bg-dmds-2 w-8/12 h-screen md:max opacity-1 px-8 pb-8 pt-[100px] transition-all duration-500`}>
                <h1 className='md:hidden font-ranga mt-8 text-5xl text-dmds-2 dark:text-dmds-1 md:text-6xl tracking-tighter'>Douglas Silva</h1>
                <ul className="mt-6 pt-8 border-t dark:border-dmds-5 md:flex md:justify-end md:items-end md:border-none md:border md:m-0 md:p-0">
                    <li className='md:ml-8'>
                        <a href="/" className="mt-6 flex justify-start items-center text-dms-2 dark:text-dmds-4 md:m-0 md:text-2xl md:cursor-pointer md:hover:underline">
                            <FaHome />
                            <span className="ml-6">Home</span>
                        </a>
                    </li>
                    <li className='md:ml-8'>
                        <a href="/" className="mt-6 flex justify-start items-center text-dms-2 dark:text-dmds-4 md:m-0 md:text-2xl md:cursor-pointer md:hover:underline">
                            <FaUser />
                            <span className="ml-6">About</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}