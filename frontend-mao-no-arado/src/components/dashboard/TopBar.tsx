"use client";

import { useState } from "react";
import {
    FaBars,
    FaBell,
    FaSun,
    FaMoon,
    FaUserEdit,
    FaCog,
    FaSignOutAlt
} from "react-icons/fa";
import Image from "next/image";

export default function Topbar({ user = { name: "João Silva", avatar: "/img/avatar.jpg" }, onToggleSidebar }: any) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle("dark");
    };

    const notifications = [
        "Novo voluntário inscrito",
        "Doação recebida de R$ 250,00",
        "Novo evento criado: Mutirão de Sábado"
    ];

    return (
        <header className="w-full flex items-center justify-between px-6 py-3 bg-white dark:bg-gray-900 shadow z-50">
            <div className="flex items-center gap-4">
                <button className="text-gray-600 dark:text-gray-300 text-xl" onClick={onToggleSidebar}>
                    <FaBars />
                </button>
                <input
                    type="text"
                    placeholder="Pesquisar..."
                    className="px-4 py-2 text-sm rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex items-center gap-8 relative">
                <button className="text-gray-600 dark:text-gray-300 text-lg" onClick={toggleTheme}>
                    {isDarkMode ? <FaSun /> : <FaMoon />}
                </button>

                <div className="relative">
                    <button
                        className="text-gray-600 dark:text-gray-300 relative"
                        onClick={() => setNotificationsOpen(!notificationsOpen)}
                    >
                        <FaBell />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5">
                            {notifications.length}
                        </span>
                    </button>

                    {notificationsOpen && (
                        <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50">
                            <div className="p-3 border-b border-gray-200 dark:border-gray-600 font-semibold text-gray-700 dark:text-gray-100">
                                Notificações
                            </div>
                            <ul className="max-h-60 overflow-y-auto">
                                {notifications.map((note, idx) => (
                                    <li
                                        key={idx}
                                        className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                                    >
                                        {note}
                                    </li>
                                ))}
                            </ul>
                            <div className="text-center p-2 border-t border-gray-200 dark:border-gray-600 text-sm text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                                Ver todas
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-5 cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
                    <Image
                        src={user.avatar}
                        alt="Avatar"
                        width={32}
                        height={32}
                        className="rounded-full object-cover"
                    />
                    <span className="text-sm font-medium text-gray-700 dark:text-white">
                        {user.name}
                    </span>
                </div>

                {dropdownOpen && (
                    <div className="absolute right-0 top-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg w-48 py-2 z-50">
                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2">
                            <FaUserEdit /> Editar Perfil
                        </button>
                        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2">
                            <FaCog /> Configurações
                        </button>
                        <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900 flex items-center gap-2">
                            <FaSignOutAlt /> Sair
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}
