import React,{ useState, useEffect } from 'react'
import { useTheme, systemTheme } from 'next-themes'

export default function DarkMode() {
    const [darkMode, setDarkMode] = useState(false);
    const { theme, setTheme } = useTheme()

    const currentTheme = theme === 'system' ? systemTheme : theme;
       

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    };



    return (
        <div className="flex  flex-row justify-end w-full ">
            <div className={`w-16 flex items-center ${darkMode ? 'justify-end bg-gray-800': ''} ease-in duration-300 px-1 h-8  rounded-2xl drop-shadow-lg bg-white scale-[0.9]`}
            onClick={toggleDarkMode}>
                <div className={`bg-black ease-in duration-800 ${darkMode ? 'hidden': ''}  rounded-2xl p-1 scale-[0.9]`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white b ">
                      <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
                    </svg>

                </div>
                {/* moon */}
                <div  className={`bg-white ${darkMode ? 'block': 'hidden'}   rounded-2xl p-1 scale-[0.9] `}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-800 ">
                      <path fill-rule="evenodd" d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z" clip-rule="evenodd" />
                    </svg>

                </div>

            </div>
        </div>
    )
}