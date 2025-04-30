"use client";
import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardCard, { StatCard } from "@/components/dashboard/DashboardCard";
import {
    FaPlus,
    FaFilter,
    FaDownload,
    FaSearch,
    FaEllipsisH
} from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

export default function TemplateDashboardSection() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterOpen, setFilterOpen] = useState(false);

    // Sample data - replace with actual data in real implementation
    const items = [
        { id: 1, name: "Item 1", category: "Categoria A", status: "Ativo", date: "10/05/2023" },
        { id: 2, name: "Item 2", category: "Categoria B", status: "Inativo", date: "15/06/2023" },
        { id: 3, name: "Item 3", category: "Categoria A", status: "Ativo", date: "22/07/2023" },
        { id: 4, name: "Item 4", category: "Categoria C", status: "Pendente", date: "05/08/2023" },
        { id: 5, name: "Item 5", category: "Categoria B", status: "Ativo", date: "18/08/2023" },
    ];

    // Filter items based on search term
    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.status.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Status badge color
    const getStatusColor = (status: string) => {
        switch(status.toLowerCase()) {
            case 'ativo':
                return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
            case 'inativo':
                return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
            case 'pendente':
                return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
            default:
                return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
        }
    };

    return (
        <DashboardLayout>
            <div className="space-y-6">
                {/* Page Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Nome da Seção</h1>

                    <div className="flex flex-wrap gap-2">
                        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                            <FaPlus className="w-3.5 h-3.5" /> Novo Item
                        </button>
                        <button
                            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                            onClick={() => setFilterOpen(!filterOpen)}
                        >
                            <FaFilter className="w-3.5 h-3.5" /> Filtros
                        </button>
                        <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                            <FaDownload className="w-3.5 h-3.5" /> Exportar
                        </button>
                    </div>
                </div>

                {/* Filter Section - Toggle visibility */}
                {filterOpen && (
                    <DashboardCard>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Categoria
                                </label>
                                <select className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                                    <option value="">Todas as categorias</option>
                                    <option value="categoria-a">Categoria A</option>
                                    <option value="categoria-b">Categoria B</option>
                                    <option value="categoria-c">Categoria C</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Status
                                </label>
                                <select className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                                    <option value="">Todos os status</option>
                                    <option value="ativo">Ativo</option>
                                    <option value="inativo">Inativo</option>
                                    <option value="pendente">Pendente</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Data
                                </label>
                                <input
                                    type="date"
                                    className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-white rounded-lg text-sm font-medium transition-colors mr-2">
                                Limpar Filtros
                            </button>
                            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors">
                                Aplicar Filtros
                            </button>
                        </div>
                    </DashboardCard>
                )}

                {/* Search and Results */}
                <DashboardCard>
                    {/* Search Bar */}
                    <div className="mb-6">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaSearch className="h-4 w-4 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                placeholder="Buscar itens..."
                                className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Results Table */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead>
                                <tr>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                        Nome
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                        Categoria
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                        Data
                                    </th>
                                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                        Ações
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {filteredItems.length > 0 ? (
                                    filteredItems.map((item) => (
                                        <tr key={item.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                            <td className="px-4 py-3 text-sm text-gray-800 dark:text-white">
                                                {item.name}
                                            </td>
                                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                                                {item.category}
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                                                {item.date}
                                            </td>
                                            <td className="px-4 py-3 text-sm text-right">
                                                <div className="flex justify-end">
                                                    <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                                                        <FaEllipsisH />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={5} className="px-4 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                                            Nenhum item encontrado
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-between mt-6">
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            Mostrando <span className="font-medium">{filteredItems.length}</span> de <span className="font-medium">{items.length}</span> itens
                        </div>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                                Anterior
                            </button>
                            <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                                1
                            </button>
                            <button className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                                2
                            </button>
                            <button className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                                Próximo
                            </button>
                        </div>
                    </div>
                </DashboardCard>

                {/* Help Section */}
                <DashboardCard
                    title="Ajuda e Suporte"
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-100 dark:border-blue-900/30"
                >
                    <div className="text-center py-4">
                        <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">
                            Precisa de ajuda com esta seção?
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-lg mx-auto">
                            Confira nossa documentação detalhada ou entre em contato com o suporte se precisar de assistência adicional.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            <Link
                                href="/dashboard/help"
                                className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                            >
                                Ver Documentação
                            </Link>
                            <Link
                                href="/dashboard/support"
                                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                            >
                                Contatar Suporte
                            </Link>
                        </div>
                    </div>
                </DashboardCard>
            </div>
        </DashboardLayout>
    );
}