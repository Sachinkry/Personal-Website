import Link from "next/link";

export default function Navbar() {


    return (
        <nav className="bg-white mt-10 ">
            <img src='/pfp-sac.jpg' className="mx-5 h-40 w-40 border-4 border--200" alt="pfp-sachin" />
            <div className='container mx-auto mt-5 max-w-2xl flex flex-row ml-5 font-semibold text-md underline'>
                <Link href='/' className="active:text-blue-500">Home</Link>
                <Link href='/blog' className="mx-5">Blog</Link>
                <Link href='/projects'>Projects</Link>
            </div>
        </nav>
    )
}