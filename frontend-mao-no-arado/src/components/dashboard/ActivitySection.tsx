import React, { memo } from 'react';
import Link from 'next/link';
import { FaUsers, FaHandHoldingHeart, FaBell, FaTasks } from 'react-icons/fa';
import DashboardCard from './DashboardCard';

interface Activity {
  icon: React.ReactNode;
  title: string;
  desc: string;
  time: string;
}

interface ActivitySectionProps {
  activities?: Activity[];
}

// Create a memoized component to prevent unnecessary re-renders
function ActivitySection({ activities = defaultActivities }: ActivitySectionProps) {
  return (
    <DashboardCard
      title="Atividades Recentes"
      headerAction={
        <Link href="/dashboard/notifications" className="text-blue-600 dark:text-blue-400 text-sm hover:underline">
          Ver todas
        </Link>
      }
    >
      <div className="space-y-4">
        {activities.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3 pb-4 border-b border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-full text-blue-600 dark:text-blue-400">
              {item.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800 dark:text-white truncate">
                {item.title}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 truncate">
                {item.desc}
              </p>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}

// Default activities data if none is provided
const defaultActivities: Activity[] = [
  { icon: <FaUsers />, title: "Novo voluntário", desc: "João Silva se cadastrou como voluntário", time: "Hoje" },
  { icon: <FaHandHoldingHeart />, title: "Nova doação", desc: "Doação de R$ 250,00 recebida", time: "Ontem" },
  { icon: <FaBell />, title: "Lembrete de evento", desc: "Mutirão de Sábado às 9h", time: "2 dias atrás" },
  { icon: <FaTasks />, title: "Tarefa concluída", desc: "Relatório mensal enviado", time: "3 dias atrás" }
];

export default memo(ActivitySection);
