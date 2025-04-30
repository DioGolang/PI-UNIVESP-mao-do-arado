"use client";

import { memo, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    FaHome, FaUsers, FaHandHoldingHeart, FaCalendarAlt, FaChartBar,
    FaFileAlt, FaCog, FaUserCircle, FaSeedling, FaHandshake,
    FaQuestionCircle, FaNewspaper, FaQuoteLeft, FaChild, FaUserTie
} from "react-icons/fa";

interface MenuItem {
    title: string;
    icon: React.ReactNode;
    href: string;
    active?: boolean;
}

interface SidebarProps {
    collapsed: boolean;
}

// Memoized menu item component to prevent unnecessary re-renders
const MenuItem = memo(({ item, isActive, collapsed }: {
    item: MenuItem;
    isActive: boolean;
    collapsed: boolean;
}) => (
    <li className="px-4">
        <Link
            href={item.href}
            className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
                isActive
                    ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-300"
            }`}
        >
            {item.icon && (
                <div className="w-5 h-5 flex-shrink-0 text-lg">
                    {item.icon}
                </div>
            )}
            <span className={`text-sm font-medium transition-all duration-200 ${
                collapsed ? "opacity-0 invisible w-0" : "opacity-100 visible w-auto"
            }`}>
                {item.title}
            </span>
        </Link>
    </li>
));
MenuItem.displayName = 'MenuItem';

// Define menu items outside the component to prevent recreation on each render
const menuItems: MenuItem[] = [
    {title: "Dashboard", icon: <FaHome className="w-5 h-5"/>, href: "/dashboard"},
    {title: "Voluntários", icon: <FaUsers className="w-5 h-5"/>, href: "/dashboard/volunteers"},
    {title: "Doações", icon: <FaHandHoldingHeart className="w-5 h-5"/>, href: "/dashboard/donations"},
    {title: "Projetos", icon: <FaSeedling className="w-5 h-5"/>, href: "/dashboard/projects"},
    {title: "Estatísticas", icon: <FaChartBar className="w-5 h-5"/>, href: "/dashboard/project-stats"},
    {title: "Crianças", icon: <FaChild className="w-5 h-5"/>, href: "/dashboard/children"},
    {title: "Adultos", icon: <FaUserTie className="w-5 h-5"/>, href: "/dashboard/adults"},
    {title: "Eventos", icon: <FaCalendarAlt className="w-5 h-5"/>, href: "/dashboard/events"},
    {title: "Depoimentos", icon: <FaQuoteLeft className="w-5 h-5"/>, href: "/dashboard/testimonials"},
    {title: "Parceiros", icon: <FaHandshake className="w-5 h-5"/>, href: "/dashboard/partners"},
    {title: "Relatórios", icon: <FaChartBar className="w-5 h-5"/>, href: "/dashboard/reports"},
    {title: "Documentos", icon: <FaFileAlt className="w-5 h-5"/>, href: "/dashboard/documents"},
    {title: "Notícias", icon: <FaNewspaper className="w-5 h-5"/>, href: "/dashboard/news"},
    {title: "FAQ", icon: <FaQuestionCircle className="w-5 h-5"/>, href: "/dashboard/faq"}
];

const accountItems: MenuItem[] = [
    {title: "Configurações", icon: <FaCog className="w-5 h-5"/>, href: "/settings"},
    {title: "Perfil", icon: <FaUserCircle className="w-5 h-5"/>, href: "/profile"}
];

const Sidebar = memo(function Sidebar({collapsed}: SidebarProps) {
    const pathname = usePathname();

    // Memoize the isActive check to prevent recalculation on each render
    const isItemActive = useMemo(() => {
        return (href: string) =>
            pathname === href || (href !== '/dashboard' && pathname.startsWith(href));
    }, [pathname]);

    return (
        <aside
            className={`h-screen bg-gray-900 dark:bg-slate-850 shadow-xl overflow-y-auto transition-all duration-300 ${collapsed ? "w-20" : "w-64"} rounded-r-2xl`}>
            <div className="h-19 p-6">
                <Link href="/dashboard" className="flex items-center gap-3">
                    <Image
                        src="/img/logotipo.svg"
                        alt="Logo ONG"
                        width={40}
                        height={40}
                        className="h-10 w-auto"
                    />
                    {!collapsed && (
                        <span className="text-lg font-semibold dark:text-white">
                            Mão no Arado
                        </span>
                    )}
                </Link>
            </div>

            <hr className="h-px mt-0 bg-gradient-to-r from-transparent via-black/40 to-transparent dark:via-white/40"/>

            <div className="items-center block w-full h-full grow">
                <ul className="flex flex-col py-4 space-y-1">
                    {menuItems.map((item, index) => (
                        <MenuItem
                            key={index}
                            item={item}
                            isActive={isItemActive(item.href)}
                            collapsed={collapsed}
                        />
                    ))}

                    {!collapsed && (
                        <li className="px-4 mt-8">
                            <span className="px-4 text-xs font-semibold text-gray-400 uppercase">
                                Conta
                            </span>
                        </li>
                    )}

                    {accountItems.map((item, index) => (
                        <MenuItem
                            key={index}
                            item={item}
                            isActive={pathname === item.href || pathname.startsWith(item.href)}
                            collapsed={collapsed}
                        />
                    ))}
                </ul>
            </div>

            {/* Help box */}
            {!collapsed && (
                <div className="mx-4 mt-auto mb-6">
                    <div className="relative p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                        <div className="flex flex-col items-center">
                            <FaHandHoldingHeart className="w-8 h-8 text-blue-500 mb-2"/>
                            <h6 className="text-sm font-medium dark:text-white">Precisa de ajuda?</h6>
                            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-1">
                                Acesse nossa central de suporte
                            </p>
                            <Link
                                href="/support"
                                className="mt-4 px-4 py-2 text-xs font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors w-full text-center"
                            >
                                Central de Ajuda
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </aside>
    );
});

// Add display name for debugging
Sidebar.displayName = 'Sidebar';

export default Sidebar;
