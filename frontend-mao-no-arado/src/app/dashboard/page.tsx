"use client";
import Sidebar from "@/components/dashboard/Sidebar";
import { useState } from "react";
import Topbar from "@/components/dashboard/TopBar";

export default function Dashboard() {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    const handleToggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
    };

    return (
        <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
            <Sidebar collapsed={sidebarCollapsed} />

            <div className="flex-1 flex flex-col gap-3">
                <Topbar onToggleSidebar={handleToggleSidebar} />
                <main className="p-6">
                    <h1 className="text-xl font-bold text-gray-800 dark:text-white">Bem-vindo ao Painel</h1>
                    {/* Conteúdo da página */}
                </main>
            </div>
        </div>
    );
}
