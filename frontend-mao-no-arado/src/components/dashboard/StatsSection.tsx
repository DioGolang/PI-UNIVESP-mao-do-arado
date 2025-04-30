import React, { memo } from 'react';
import { FaUsers, FaHandHoldingHeart, FaCalendarAlt } from 'react-icons/fa';
import { StatCard } from './DashboardCard';

interface StatsSectionProps {
  className?: string;
}

// Create a memoized component to prevent unnecessary re-renders
function StatsSection({ className = "" }: StatsSectionProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      <StatCard
        title="Voluntários"
        value="24"
        description="Ativos este mês"
        icon={<FaUsers className="w-5 h-5" />}
        color="blue"
        trend="up"
        trendValue="12%"
      />

      <StatCard
        title="Doações"
        value="R$ 3.250"
        description="Total recebido este mês"
        icon={<FaHandHoldingHeart className="w-5 h-5" />}
        color="green"
        trend="up"
        trendValue="8%"
      />

      <StatCard
        title="Eventos"
        value="5"
        description="Programados para este mês"
        icon={<FaCalendarAlt className="w-5 h-5" />}
        color="purple"
      />
    </div>
  );
}

export default memo(StatsSection);
