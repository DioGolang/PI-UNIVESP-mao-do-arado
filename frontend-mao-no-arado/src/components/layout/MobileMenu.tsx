'use client'
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const navItems = [
    {label: 'Home', href: '/'},
    {label: 'Sobre Nós', href: '/sobre'},
    {label: 'Programas/Projetos', href: '/projetos'},
    {label: 'Como Ajudar', href: '/ajudar'},
    {label: 'Blog', href: '/blog'},
    {label: 'Notícias', href: '/noticias'},
    {label: 'Eventos', href: '/enventos'},
    {label: 'Contato', href: '/contato'},
    {label: 'Doe Agora', href: '/agora', highlight: true, className: 'bg-orange-600 rounded-xl px-4 py-2 text-white hover:bg-orange-700'},
    {label: 'Seja voluntário', href: '/voluntario', highlight: true, className: 'text-blue-600'},
    {label: 'Entrar', href: '/entrar', highlight: true, className: 'text-blue-600'},
];

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={`md:hidden`}>
                <button onClick={() => setIsOpen(!isOpen)} className={`text-gray-700 transition`}>
                    {isOpen ? <FiX className="text-5xl" /> : <FiMenu className="text-5xl" />}
                </button>
            </div>

            <div
                className={`z-50 absolute top-0 left-0 h-full md:hidden transition-transform duration-700 ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'} bg-slate-900 bg-opacity-90 px-4 pt-4 space-y-5`}>
                {navItems.map((item, idx) => (
                    <div key={idx}>
                        <Link
                            href={item.href}
                            className={`text-gray-500 hover:text-blue-600 transition-all duration-300 ${item.highlight ? item.className : ''}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}
