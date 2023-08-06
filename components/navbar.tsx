import { FaDiscord, FaLinkedin, FaGithub, FaSoundcloud } from "react-icons/fa";
import Link from "next/link";

export default function Navbar({ isActive }: {isActive: boolean}) {
    return (
        <nav 
        style={{
            transition: 'all 0.3s',
        }}
        className={`fixed ${isActive && 'bg-gradient-to-b from-[#222222] to-transparent add-padding'} flex w-full h-[5%] items-center justify-center md:justify-end py-7 z-30 top-0 left-0 md:px-20`}>
            <ul className={`flex text-white gap-9 items-center justify-center`}>
                <li className="text-2xl transition-all hover:scale-125 cursor-pointer">
                    <Link href={'https://discord.gg/nQTjJ3t6Pw'}>
                        <FaDiscord />
                    </Link>
                </li>
                <li className="text-2xl transition-all hover:scale-125 cursor-pointer">
                    <Link href={'https://www.linkedin.com/in/armaan-gupta-1b114a240/'}>
                        <FaLinkedin />
                    </Link>
                </li>
                <li className="text-2xl transition-all hover:scale-125 cursor-pointer">
                    <Link href={'https://github.com/ohayouarmaan/'}>
                        <FaGithub />
                    </Link>
                </li>
                <li className="text-3xl transition-all hover:scale-125 cursor-pointer">
                    <Link href={'https://soundcloud.com/armaan-gupta-54616412/'}>
                        <FaSoundcloud />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}