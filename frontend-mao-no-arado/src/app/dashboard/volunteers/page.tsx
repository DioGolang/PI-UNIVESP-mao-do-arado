"use client";

import React from 'react';
import DashboardLayout from "@/components/layout/DashboardLayout";
import VolunteerAdminSection from "@/components/dashboard/VolunteerAdminSection";
import { FaUserPlus, FaChartBar, FaFileAlt } from "react-icons/fa";
import DashboardCard, { StatCard } from "@/components/dashboard/DashboardCard";

export default function VolunteersPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Administração de Voluntários</h1>

          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
              <FaFileAlt className="w-4 h-4" />
              Relatório
            </button>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
              <FaUserPlus className="w-4 h-4" />
              Novo Voluntário
            </button>
          </div>
        </div>

        {/* Volunteer Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="Total de Voluntários"
            value="24"
            description="4 novos este mês"
            icon={<FaUserPlus className="w-5 h-5" />}
            color="blue"
            trend="up"
            trendValue="20%"
          />

          <StatCard
            title="Voluntários Ativos"
            value="18"
            description="75% do total"
            icon={<FaChartBar className="w-5 h-5" />}
            color="green"
          />

          <StatCard
            title="Horas Voluntárias"
            value="156"
            description="Este mês"
            icon={<FaFileAlt className="w-5 h-5" />}
            color="purple"
            trend="up"
            trendValue="12%"
          />
        </div>

        {/* Volunteer Skills Distribution */}
        <DashboardCard title="Distribuição de Habilidades">
          <div className="h-64 bg-gray-50 dark:bg-gray-900/30 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">Gráfico de distribuição de habilidades (simulado)</p>
          </div>
        </DashboardCard>

        {/* Volunteer Administration Section */}
        <VolunteerAdminSection />
      </div>
    </DashboardLayout>
  );
}