"use client";
import React from 'react';
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatsSection from "@/components/dashboard/StatsSection";
import DonationsChartSection from "@/components/dashboard/DonationsChartSection";
import ActivitySection from "@/components/dashboard/ActivitySection";
import ProjectsSection from "@/components/dashboard/ProjectsSection";
import ProjectStatsSection from "@/components/dashboard/ProjectStatsSection";
import EventsSection from "@/components/dashboard/EventsSection";
import { FaDownload } from "react-icons/fa";

export default function Dashboard() {
    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Bem-vindo ao Painel</h1>

                    <div className="flex gap-2">
                        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
                            <FaDownload className="w-4 h-4" />
                            Exportar Relatório
                        </button>
                    </div>
                </div>

                {/* Stats Cards */}
                <StatsSection />

                {/* Charts and Activity Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Chart */}
                    <DonationsChartSection className="lg:col-span-2" />

                    {/* Recent Activity */}
                    <ActivitySection />
                </div>

                {/* Projects Section */}
                <ProjectsSection />

                {/* Project Statistics Section */}
                <div className="mt-8">
                    <ProjectStatsSection />
                </div>

                {/* Events Preview */}
                <div className="mt-8">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Próximos Eventos</h2>
                    <EventsSection />
                </div>
            </div>
        </DashboardLayout>
    );
}
