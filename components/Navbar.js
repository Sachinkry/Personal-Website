import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();
    const { pathname } = router;

    return (
        <nav className="flex flex-row justify-between w-full ">
            
            <div className="flex flex-row justify-between space-x-3 items-center  h-5 m-0 max-w-4xl w-full dark:text-neutral-300">
                <Link href="/">
                  <p className={`${(pathname === '/') ? 'text-mediumGreen ': 'text-darkGray dark:text-gray-400 '}  font-semibold leading-snug  `}>home</p>
                </Link>
                <Link href="/projects">
                  <p className={`${(pathname === '/projects') ? 'text-mediumGreen ': 'text-darkGray dark:text-gray-400'}   font-semibold leading-snug  `}>projects</p>
                </Link>
                <a href="https://sagepanda.substack.com/">
                  <p className={` text-darkGray font-semibold leading-snug dark:text-gray-400`}>blog</p>
                </a>
                
                <Link href="/writes">
                  <p className={`${(pathname === '/writes') ? 'text-mediumGreen ': 'text-darkGray dark:text-gray-400'} font-semibold leading-snug   `}>threads</p>
                </Link>
            </div>
        </nav>
    )
}