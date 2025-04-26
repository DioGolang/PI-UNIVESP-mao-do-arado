import Link from "next/link";
import MobileMenu from "./MobileMenu";


const navItems = [
    {label: 'Home', href: '/'},
    {label: 'Sobre Nós', href: '/sobre'},
    {label: 'Programas/Projetos', href: '/projetos'},
    {label: 'Como Ajudar', href: '/ajudar'},
    {label: 'Blog', href: '/blog'},
    {label: 'Notícias', href: '/noticias'},
    {label: 'Eventos', href: '/enventos'},
    {label: 'Contato', href: '/contato'},
    {label: 'Doe Agora', href: '/agora'},
    {label: 'Seja voluntário', href: '/voluntario'},
    {label: 'Entrar', href: '/entrar'},
];

export default function Navbar() {
    return (
        <>
        <nav className="bg-white shadow-md fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold text-blue-600">
                        ONG Logo
                    </Link>

                    {/* Menu items (desktop) */}
                    <ul className="hidden md:flex space-x-7 items-center">
                        {navItems.map((item, idx) => (
                            <li key={idx}>
                                <Link
                                    href={item.href}
                                    className={`text-gray-500 hover:text-blue-600  transition-all duration-300`}
                                    >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <MobileMenu/>
                </div>
            </div>
        </nav>
        </>
    );
}