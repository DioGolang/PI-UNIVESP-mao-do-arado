import React from 'react';

interface DashboardCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
  headerAction?: React.ReactNode;
}

export default function DashboardCard({
  title,
  children,
  className = "",
  footer,
  headerAction
}: DashboardCardProps) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden ${className}`}>
      {/* Card Header */}
      {(title || headerAction) && (
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          {title && (
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              {title}
            </h2>
          )}
          {headerAction && (
            <div className="flex items-center">
              {headerAction}
            </div>
          )}
        </div>
      )}

      {/* Card Content */}
      <div className="p-6">
        {children}
      </div>

      {/* Card Footer */}
      {footer && (
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-700">
          {footer}
        </div>
      )}
    </div>
  );
}

// Specialized card for stats/metrics
export function StatCard({
  title,
  value,
  description,
  icon,
  color = "blue",
  trend,
  trendValue
}: {
  title: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  color?: "blue" | "green" | "red" | "yellow" | "purple" | "indigo";
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
}) {
  const colorClasses = {
    blue: "text-blue-600 dark:text-blue-400",
    green: "text-green-600 dark:text-green-400",
    red: "text-red-600 dark:text-red-400",
    yellow: "text-yellow-600 dark:text-yellow-400",
    purple: "text-purple-600 dark:text-purple-400",
    indigo: "text-indigo-600 dark:text-indigo-400"
  };

  const trendClasses = {
    up: "text-green-600 dark:text-green-400",
    down: "text-red-600 dark:text-red-400",
    neutral: "text-gray-600 dark:text-gray-400"
  };

  const trendIcons = {
    up: "↑",
    down: "↓",
    neutral: "→"
  };

  return (
    <DashboardCard>
      <div className="flex items-start">
        {icon && (
          <div className={`mr-4 p-3 rounded-full bg-${color}-100 dark:bg-${color}-900/20`}>
            <div className={colorClasses[color]}>
              {icon}
            </div>
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
            {title}
          </h3>
          <div className="flex items-baseline">
            <p className={`text-2xl font-bold ${colorClasses[color]}`}>
              {value}
            </p>
            {trend && trendValue && (
              <span className={`ml-2 text-sm ${trendClasses[trend]}`}>
                {trendIcons[trend]} {trendValue}
              </span>
            )}
          </div>
          {description && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {description}
            </p>
          )}
        </div>
      </div>
    </DashboardCard>
  );
}