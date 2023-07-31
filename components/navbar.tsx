import { FaDiscord, FaLinkedin, FaGithub, FaSoundcloud } from "react-icons/fa";

export default function Navbar({ isActive }: {isActive: boolean}) {
    return (
        <nav 
        style={{
            transition: 'all 0.3s',
        }}
        className={`fixed ${isActive && 'bg-gradient-to-b from-[#222222] to-transparent add-padding'} flex w-full h-[5%] items-center justify-center md:justify-end py-7 z-30 top-0 left-0 md:px-20`}>
            <ul className={`flex text-white gap-9 items-center justify-center`}>
                <li className="text-2xl transition-all hover:scale-125 cursor-pointer">
                    <FaDiscord />
                </li>
                <li className="text-2xl transition-all hover:scale-125 cursor-pointer">
                    <FaLinkedin />
                </li>
                <li className="text-2xl transition-all hover:scale-125 cursor-pointer">
                    <FaGithub />
                </li>
                <li className="text-3xl transition-all hover:scale-125 cursor-pointer">
                    <FaSoundcloud />
                </li>
            </ul>
        </nav>
    )
}