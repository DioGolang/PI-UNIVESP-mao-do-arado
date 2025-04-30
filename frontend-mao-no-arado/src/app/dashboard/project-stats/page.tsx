"use client";

import React from 'react';
import DashboardLayout from "@/components/layout/DashboardLayout";
import ProjectStatsSection from "@/components/dashboard/ProjectStatsSection";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function ProjectStatsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center">
            <Link href="/dashboard" className="mr-4 p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <FaArrowLeft className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </Link>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Estatísticas dos Projetos</h1>
          </div>
        </div>

        {/* Project Statistics */}
        <ProjectStatsSection />
      </div>
    </DashboardLayout>
  );
}