import Link from "next/link";
import MobileMenu from "./MobileMenu";
import {FiUser} from "react-icons/fi";
import Image from "next/image";

const navItems = [
    {label: 'Home', href: '/'},
    {label: 'Sobre Nós', href: '/sobre'},
    {label: 'Programas/Projetos', href: '/projetos'},
    {label: 'Como Ajudar', href: '/ajudar'},
    {label: 'Blog', href: '/blog'},
    {label: 'Notícias', href: '/noticias'},
    {label: 'Eventos', href: '/enventos'},
    {label: 'Contato', href: '/contato'},
    {label: 'Doe Agora', href: '/agora', highlight: true, className: 'bg-orange-600 hover:bg-orange-500 rounded-xl px-2 py-1 text-white hover:text-gray-950 transition-all duration-500'},
    {label: 'Seja voluntário', href: '/voluntario', highlight: true, className: 'rounded-xl px-2 py-1 border-2 border-orange-600 text-orange-600 hover:bg-orange-700 hover:text-white transition-all duration-500'},
    {label: 'Entrar', href: '/login', highlight: true, className: 'text-blue-600 px-2 py-1'},
];

export default function Navbar() {
    return (
        <>
            <nav className="bg-white shadow-md w-full z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/img/logotipo.svg"
                                alt="logo"
                                width={80}
                                height={80}
                                className="object-contain"
                            />
                        </Link>

                        {/* Menu items (desktop) */}
                        <ul className="hidden md:flex space-x-7 items-center">
                            {navItems.map((item, idx) => (
                                <li key={idx} className="flex items-center">
                                    {idx === navItems.length - 1 && (
                                        <FiUser className="text-2xl text-blue-500 mr-1" />
                                    )}
                                    <Link
                                        href={item.href}
                                        className={`text-gray-500 hover:text-blue-600 transition-all duration-300 ${item.highlight ? item.className : ''}`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <MobileMenu />
                    </div>
                </div>
            </nav>
        </>
    );
}