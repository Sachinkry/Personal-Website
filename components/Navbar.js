import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();
    const { pathname } = router;

    return (
        <nav className="flex flex-row justify-between w-full ">
            
            <div className="flex flex-row justify-between space-x-3 items-center  h-5 m-0 max-w-4xl w-full">
                <Link href="/">
                  <p className={`${(pathname === '/') ? 'text-mediumGreen': 'text-darkGray'}   font-semibold leading-snug underline pr-3 sm:pr-15  `}>home</p>
                </Link>
                <Link href="/builds">
                  <p className={`${(pathname === '/builds') ? 'text-mediumGreen': 'text-darkGray'}   font-semibold leading-snug underline pr-3 sm:pr-15 `}>builds</p>
                </Link>
                <a href="https://sagepanda.substack.com/">
                  <p className={`underline text-darkGray font-semibold leading-snug`}>blog</p>
                </a>
                
                <Link href="/writes">
                  <p className={`${(pathname === '/writes') ? 'text-mediumGreen': 'text-darkGray'} font-semibold leading-snug underline pr-3 sm:pr-15 `}>threads</p>
                </Link>
            </div>
        </nav>
    )
}