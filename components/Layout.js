import Navbar from './Navbar'
import DarkMode from './DarkMode'
import DarkModeBtn from './DarkModeBtn'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export default function Layout({ children }) {
    const { theme, setTheme } = useTheme()

    const currentTheme = theme === 'system' ? systemTheme : theme;
       


    return (
        <div className=" flex flex-col space-y-12 items-center justify-start px-8 pb-16 pt-3   max-w-xl mx-auto">
            <DarkModeBtn />
            <Navbar />
            {children}
        </div>
    )
}