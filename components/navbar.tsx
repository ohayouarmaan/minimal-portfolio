export default function Navbar({ isActive }: {isActive: boolean}) {
    return (
        <nav className={`fixed flex w-full h-[5%] p-7 items-center justify-center top-0 left-0 ${isActive && 'backdrop-blur-lg'}`}>
            <ul className="flex text-white gap-8 items-center justify-center">
                <li>Github</li>
                <li>Discord</li>
                <li>LinkedIn</li>
            </ul>
        </nav>
    )
}