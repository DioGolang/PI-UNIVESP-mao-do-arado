"use client";

import React from 'react';
import DashboardLayout from "@/components/layout/DashboardLayout";
import ProjectsSection from "@/components/dashboard/ProjectsSection";
import ProjectsOverview from "@/components/dashboard/ProjectsOverview";
import { FaPlus, FaFilter, FaSearch } from "react-icons/fa";
import DashboardCard from "@/components/dashboard/DashboardCard";

// Mock project data - in a real application, this would come from an API
const projectsData = [
  {
    id: "1",
    name: "Apoio Escolar",
    owner: "Maria Silva",
    status: "Em andamento",
    progress: 75,
    volunteers: 8,
    children: 25,
    budget: {
      total: 12000,
      spent: 8000,
      remaining: 4000
    }
  },
  {
    id: "2",
    name: "Oficina de Artes",
    owner: "Carlos Santos",
    status: "Planejamento",
    progress: 30,
    volunteers: 5,
    children: 15,
    budget: {
      total: 8000,
      spent: 2000,
      remaining: 6000
    }
  },
  {
    id: "3",
    name: "Grupo de Apoio",
    owner: "Ana Oliveira",
    status: "Em andamento",
    progress: 50,
    volunteers: 6,
    children: 20,
    budget: {
      total: 10000,
      spent: 5000,
      remaining: 5000
    }
  }
];

export default function ProjectsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Gerenciamento de Projetos</h1>

          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
              <FaPlus className="w-4 h-4" />
              Novo Projeto
            </button>
          </div>
        </div>

        {/* Search and Filter Section */}
        <DashboardCard>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Buscar projetos..."
                className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <FaFilter className="w-4 h-4" />
                Filtros
              </button>
              <select className="border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-3 py-2">
                <option>Todos os status</option>
                <option>Em andamento</option>
                <option>Planejamento</option>
                <option>Concluído</option>
              </select>
            </div>
          </div>
        </DashboardCard>

        {/* Projects Overview */}
        <ProjectsOverview projects={projectsData} />

        {/* Projects List */}
        <ProjectsSection projects={projectsData} />
      </div>
    </DashboardLayout>
  );
}
