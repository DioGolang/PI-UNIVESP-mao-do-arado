"use client";

import React from 'react';
import DashboardLayout from "@/components/layout/DashboardLayout";
import EventsSection from "@/components/dashboard/EventsSection";
import { FaCalendarPlus, FaDownload } from "react-icons/fa";

export default function EventsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Gerenciamento de Eventos</h1>

          <div className="flex gap-2">
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
              <FaDownload className="w-4 h-4" />
              Exportar
            </button>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
              <FaCalendarPlus className="w-4 h-4" />
              Novo Evento
            </button>
          </div>
        </div>

        {/* Events Calendar Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Calendário de Eventos</h2>
          <div className="h-64 bg-gray-50 dark:bg-gray-900/30 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">Visualização do calendário (simulada)</p>
          </div>
        </div>

        {/* Events List Section */}
        <EventsSection />
      </div>
    </DashboardLayout>
  );
}