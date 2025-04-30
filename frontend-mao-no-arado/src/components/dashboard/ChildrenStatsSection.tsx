"use client";

import React from 'react';
import { FaChild, FaHeartbeat, FaBirthdayCake } from 'react-icons/fa';
import { GiAutomaticSas } from 'react-icons/gi';
import { MdAccessible } from 'react-icons/md';
import DashboardCard from './DashboardCard';
import { StatCard } from './DashboardCard';

interface ChildrenStatsSectionProps {
  className?: string;
}

// Mock data - in a real application, this would come from an API or database
const childrenStats = {
  total: 60,
  autistic: 12,
  disabled: 8,
  ageGroups: {
    '0-5': 15,
    '6-10': 25,
    '11-15': 15,
    '16-18': 5
  }
};

export default function ChildrenStatsSection({ className = "" }: ChildrenStatsSectionProps) {
  return (
    <div className={className}>
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Estatísticas de Crianças</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total de Crianças"
          value={childrenStats.total}
          description="Atendidas nos projetos"
          icon={<FaChild className="w-5 h-5" />}
          color="blue"
        />

        <StatCard
          title="Crianças Autistas"
          value={childrenStats.autistic}
          description={`${Math.round((childrenStats.autistic / childrenStats.total) * 100)}% do total`}
          icon={<GiAutomaticSas className="w-5 h-5" />}
          color="purple"
        />

        <StatCard
          title="Crianças com Deficiência"
          value={childrenStats.disabled}
          description={`${Math.round((childrenStats.disabled / childrenStats.total) * 100)}% do total`}
          icon={<MdAccessible className="w-5 h-5" />}
          color="green"
        />

        <StatCard
          title="Saúde Geral"
          value="Boa"
          description="Avaliação média"
          icon={<FaHeartbeat className="w-5 h-5" />}
          color="red"
        />
      </div>

      <div className="mt-6">
        <DashboardCard title="Distribuição por Faixa Etária">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(childrenStats.ageGroups).map(([range, count]) => (
              <div key={range} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <FaBirthdayCake className="w-4 h-4 text-blue-500 mr-2" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{range} anos</span>
                  </div>
                  <span className="text-lg font-bold text-blue-600 dark:text-blue-400">{count}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${(count / childrenStats.total) * 100}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-right">
                  {Math.round((count / childrenStats.total) * 100)}% do total
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>
      </div>
    </div>
  );
}