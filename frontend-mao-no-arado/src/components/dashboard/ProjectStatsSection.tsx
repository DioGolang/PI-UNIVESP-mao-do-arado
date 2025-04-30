"use client";

import React, { memo } from 'react';
import { FaSeedling, FaChartBar } from 'react-icons/fa';
import DashboardCard from './DashboardCard';
import ChildrenStatsSection from './ChildrenStatsSection';
import AdultsStatsSection from './AdultsStatsSection';

interface ProjectStatsSectionProps {
  className?: string;
}

// Create a memoized component to prevent unnecessary re-renders
function ProjectStatsSection({ className = "" }: ProjectStatsSectionProps) {
  return (
    <div className={className}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
          <FaSeedling className="w-6 h-6 mr-2 text-green-600" />
          Estatísticas dos Projetos
        </h1>

        <div className="flex items-center gap-2">
          <select className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-sm">
            <option value="all">Todos os Projetos</option>
            <option value="apoio-escolar">Apoio Escolar</option>
            <option value="oficina-artes">Oficina de Artes</option>
            <option value="grupo-apoio">Grupo de Apoio</option>
          </select>

          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
            <FaChartBar className="w-4 h-4" />
            Gerar Relatório
          </button>
        </div>
      </div>

      <DashboardCard className="mb-6">
        <div className="flex flex-col md:flex-row items-center justify-between p-4">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Resumo dos Projetos</h3>
            <p className="text-gray-600 dark:text-gray-400">Estatísticas gerais de todos os projetos ativos</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projetos Ativos</div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">60</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Crianças</div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">45</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Adultos</div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">19</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Voluntários</div>
            </div>
          </div>
        </div>
      </DashboardCard>

      {/* Children Statistics */}
      <ChildrenStatsSection className="mb-8" />

      {/* Adults Statistics */}
      <AdultsStatsSection />
    </div>
  );
}

export default memo(ProjectStatsSection);
