"use client";

import { useState, useEffect, useCallback, memo } from "react";
import {
    FaBars,
    FaBell,
    FaSun,
    FaMoon,
    FaUserEdit,
    FaCog,
    FaSignOutAlt,
    FaSearch,
    FaEllipsisV
} from "react-icons/fa";
import Image from "next/image";

// Define proper types for props
interface TopbarProps {
    user?: {
        name: string;
        avatar: string;
    };
    onToggleSidebar: () => void;
}

// Memoized notification item component
const NotificationItem = memo(({ notification }: { notification: string }) => (
    <li className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
        {notification}
    </li>
));
NotificationItem.displayName = 'NotificationItem';

function Topbar({ user = { name: "João Silva", avatar: "/img/jose.jpg" }, onToggleSidebar }: TopbarProps) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Memoize event handlers to prevent recreating them on every render
    const toggleTheme = useCallback(() => {
        setIsDarkMode(prev => !prev);
        document.documentElement.classList.toggle("dark");
    }, []);

    const toggleDropdown = useCallback(() => {
        setDropdownOpen(prev => !prev);
    }, []);

    const toggleNotifications = useCallback(() => {
        setNotificationsOpen(prev => !prev);
    }, []);

    const toggleMobileMenu = useCallback(() => {
        setMobileMenuOpen(prev => !prev);
    }, []);

    const openSearch = useCallback(() => {
        setSearchOpen(true);
    }, []);

    const showNotificationsFromMobile = useCallback(() => {
        setMobileMenuOpen(false);
        setNotificationsOpen(true);
    }, []);

    // Define notifications outside the component to prevent recreation on each render
    const notifications = [
        "Novo voluntário inscrito",
        "Doação recebida de R$ 250,00",
        "Novo evento criado: Mutirão de Sábado"
    ];

    // Memoize the resize handler to prevent recreating it on every render
    const handleResize = useCallback(() => {
        setIsMobile(window.innerWidth < 768);

        // Close dropdowns on resize
        if (mobileMenuOpen || searchOpen) {
            setMobileMenuOpen(false);
            setSearchOpen(false);
        }
    }, [mobileMenuOpen, searchOpen]);

    // Handle screen size changes with debouncing
    useEffect(() => {
        // Set initial state
        handleResize();

        // Use a debounced version of the resize handler to reduce the number of updates
        let timeoutId: NodeJS.Timeout;
        const debouncedResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(handleResize, 100);
        };

        // Add event listener
        window.addEventListener("resize", debouncedResize);

        // Clean up
        return () => {
            window.removeEventListener("resize", debouncedResize);
            clearTimeout(timeoutId);
        };
    }, [handleResize]);

    // Memoize the click outside handler to prevent recreating it on every render
    const handleClickOutside = useCallback((event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!target.closest('.dropdown-container')) {
            setDropdownOpen(false);
            setNotificationsOpen(false);
            setMobileMenuOpen(false);
            setSearchOpen(false);
        }
    }, []);

    // Close all dropdowns when clicking outside
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [handleClickOutside]);

    return (
        <header className="w-full flex items-center justify-between px-4 md:px-6 py-3 bg-white dark:bg-gray-900 shadow z-50">
            <div className="flex items-center gap-2 md:gap-4">
                <button
                    className="text-gray-600 dark:text-gray-300 text-xl p-1"
                    onClick={onToggleSidebar}
                    aria-label="Toggle sidebar"
                >
                    <FaBars />
                </button>

                {/* Search input - hidden on mobile unless search is open */}
                <div className={`${isMobile && !searchOpen ? 'hidden' : 'block'} dropdown-container`}>
                    <input
                        type="text"
                        placeholder="Pesquisar..."
                        className="px-3 py-1.5 md:px-4 md:py-2 text-sm rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto"
                    />
                </div>

                {/* Search button - visible only on mobile */}
                {isMobile && !searchOpen && (
                    <button
                        className="text-gray-600 dark:text-gray-300 text-lg p-1"
                        onClick={openSearch}
                        aria-label="Open search"
                    >
                        <FaSearch />
                    </button>
                )}
            </div>

            {/* Desktop actions */}
            <div className="hidden md:flex items-center gap-6 relative dropdown-container">
                <button
                    className="text-gray-600 dark:text-gray-300 text-lg p-1"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                >
                    {isDarkMode ? <FaSun /> : <FaMoon />}
                </button>

                <div className="relative">
                    <button
                        className="text-gray-600 dark:text-gray-300 relative p-1"
                        onClick={toggleNotifications}
                        aria-label="Notifications"
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
                                    <NotificationItem key={idx} notification={note} />
                                ))}
                            </ul>
                            <div className="text-center p-2 border-t border-gray-200 dark:border-gray-600 text-sm text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                                Ver todas
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex items-center gap-3 cursor-pointer" onClick={toggleDropdown}>
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

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center dropdown-container">
                <button
                    className="text-gray-600 dark:text-gray-300 text-lg p-1"
                    onClick={toggleMobileMenu}
                    aria-label="Menu"
                >
                    <FaEllipsisV />
                </button>

                {/* Mobile menu dropdown */}
                {mobileMenuOpen && (
                    <div className="absolute right-2 top-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg w-48 py-2 z-50">
                        <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700 flex items-center gap-2">
                            <Image
                                src={user.avatar}
                                alt="Avatar"
                                width={24}
                                height={24}
                                className="rounded-full object-cover"
                            />
                            <span className="text-sm font-medium text-gray-700 dark:text-white truncate">
                                {user.name}
                            </span>
                        </div>

                        <button
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
                            onClick={toggleTheme}
                        >
                            {isDarkMode ? <FaSun /> : <FaMoon />} {isDarkMode ? "Modo Claro" : "Modo Escuro"}
                        </button>

                        <button
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2"
                            onClick={showNotificationsFromMobile}
                        >
                            <FaBell /> Notificações
                            <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-1.5">
                                {notifications.length}
                            </span>
                        </button>

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

// Export memoized component to prevent unnecessary re-renders
export default memo(Topbar);
