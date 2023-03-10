import Link from "next/link";
import { useRouter } from "next/router";

function NavLink() {

}

export default function Navbar() {
    const router = useRouter();
    const { pathname } = router;
    console.log(pathname)

    return (
        <nav className="flex flex-row justify-start w-full ">
            
            <div className="flex flex-row space-x-3 items-center  h-5 m-0 max-w-4xl w-full">
                <Link href="/">
                  <p className={`${(pathname === '/') ? 'text-mediumGreen': 'text-darkGray'}  text-lg font-semibold leading-snug underline pr-3 sm:pr-15  `}>home</p>
                </Link>
                <Link href="/builds">
                  <p className={`${(pathname === '/builds') ? 'text-mediumGreen': 'text-darkGray'}  text-lg font-semibold leading-snug underline pr-3 sm:pr-15 `}>builds</p>
                </Link>
                {/* <Link href="/reads"> */}
                  <a className={`  text-lg font-semibold leading-snug underline text-darkGray pr-3 sm:pr-15 `} href='https://curius.app/sachin-kumar-yadav'>reads</a>
                {/* </Link> */}
                <Link href="/writes">
                  <p className={`${(pathname === '/writes') ? 'text-mediumGreen': 'text-darkGray'}  text-lg font-semibold leading-snug underline pr-3 sm:pr-15 `}>writes</p>
                </Link>
            </div>
        </nav>
    )
}