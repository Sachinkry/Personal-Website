import Navbar from './Navbar'
import DarkModeBtn from './DarkModeBtn'

export default function Layout({ children }) {

    return (
        <div className="flex flex-col space-y-8 items-center justify-start px-6 sm:px-8 pb-16 pt-3 max-w-lg md:max-w-xl mx-auto">
            <DarkModeBtn />
            <Navbar />
            {children}
        </div>
    )
}