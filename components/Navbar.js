import Link from "next/link";

export default function Navbar() {


    return (
        <nav className="bg-white mt-10 ">
            
            <div className='container mx-auto mt-5 max-w-2xl flex flex-row ml-5 font-semibold text-md underline'>
                <Link href='/' className="active:text-blue-500">Home</Link>
                <Link href='/blog' className="mx-5">Blog</Link>
                <Link href='/projects'>Projects</Link>
            </div>
        </nav>
    )
}