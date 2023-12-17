'use client'
import { useState } from 'react'
import { MenuContent } from './MenuContent'
import { IconCross } from './IconCross'
import { IconHamburger } from './IconHamburger'

export const MenuAside = (): JSX.Element => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <MenuContent open={open} />

            <div className="realative md:hidden">
                {open ? <IconCross onClick={() => setOpen(!open)} /> : <IconHamburger onClick={() => setOpen(!open)} />}
            </div>
        </>
    )
}
