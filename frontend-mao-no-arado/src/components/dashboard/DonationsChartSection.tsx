import React, { memo } from 'react';
import { FaChartLine } from 'react-icons/fa';
import DashboardCard from './DashboardCard';

interface DonationsChartSectionProps {
  className?: string;
}

// Create a memoized component to prevent unnecessary re-renders
function DonationsChartSection({ className = "" }: DonationsChartSectionProps) {
  return (
    <DashboardCard
      title="Resumo de Doações"
      className={className}
      headerAction={
        <select className="text-sm border border-gray-300 rounded-md px-2 py-1 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white">
          <option>Últimos 30 dias</option>
          <option>Últimos 90 dias</option>
          <option>Este ano</option>
        </select>
      }
    >
      <div className="flex items-center justify-center h-64 bg-gray-50 dark:bg-gray-900/30 rounded-lg">
        <div className="flex flex-col items-center text-gray-500 dark:text-gray-400">
          <FaChartLine className="w-12 h-12 mb-3 opacity-50" />
          <p>Gráfico de doações mensais</p>
          <p className="text-sm">(Visualização simulada)</p>
        </div>
      </div>
    </DashboardCard>
  );
}

export default memo(DonationsChartSection);
