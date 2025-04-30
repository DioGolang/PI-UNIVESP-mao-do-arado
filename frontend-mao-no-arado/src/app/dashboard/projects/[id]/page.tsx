"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardCard, { StatCard } from "@/components/dashboard/DashboardCard";
import { FaUsers, FaChild, FaMoneyBillWave, FaCalendarAlt, FaEdit, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

// Mock data for a single project
const projectData = {
  id: "1",
  name: "Apoio Escolar",
  description: "Programa de apoio escolar para crianças com dificuldades de aprendizagem, oferecendo reforço em diversas disciplinas.",
  owner: "Maria Silva",
  status: "Em andamento",
  progress: 75,
  startDate: "2023-01-15",
  endDate: "2023-12-15",
  volunteers: 8,
  children: 25,
  budget: {
    total: 12000,
    spent: 8000,
    remaining: 4000
  },
  activities: [
    { name: "Aulas de Reforço", schedule: "Segunda e Quarta, 14h-16h", location: "Sala 3" },
    { name: "Oficina de Leitura", schedule: "Terça, 15h-17h", location: "Biblioteca" },
    { name: "Apoio em Matemática", schedule: "Quinta, 14h-16h", location: "Sala 2" }
  ],
  expenses: [
    { description: "Material Didático", amount: 3000, date: "2023-02-10" },
    { description: "Lanche para as crianças", amount: 2500, date: "2023-03-15" },
    { description: "Equipamentos", amount: 2500, date: "2023-04-20" }
  ]
};

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params.id as string;

  // In a real application, you would fetch the project data based on the ID
  // For now, we'll use the mock data
  const project = projectData;

  // Calculate budget percentages
  const spentPercentage = (project.budget.spent / project.budget.total) * 100;
  const remainingPercentage = (project.budget.remaining / project.budget.total) * 100;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header with back button and edit button */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/dashboard/projects" className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              <FaArrowLeft className="w-4 h-4 text-gray-600 dark:text-gray-300" />
            </Link>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{project.name}</h1>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              project.status === "Em andamento" 
                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" 
                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
            }`}>
              {project.status}
            </span>
          </div>

          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
            <FaEdit className="w-4 h-4" />
            Editar Projeto
          </button>
        </div>

        {/* Project Overview */}
        <DashboardCard title="Visão Geral">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {project.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Responsável</p>
              <p className="font-medium text-gray-800 dark:text-white">{project.owner}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Data de Início</p>
              <p className="font-medium text-gray-800 dark:text-white">{new Date(project.startDate).toLocaleDateString('pt-BR')}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Data de Término</p>
              <p className="font-medium text-gray-800 dark:text-white">{new Date(project.endDate).toLocaleDateString('pt-BR')}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Progresso</p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mt-2">
                <div
                  className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </DashboardCard>

        {/* Project Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="Voluntários"
            value={project.volunteers}
            description="Ativos neste projeto"
            icon={<FaUsers className="w-5 h-5" />}
            color="blue"
          />

          <StatCard
            title="Crianças Atendidas"
            value={project.children}
            description="Participantes do projeto"
            icon={<FaChild className="w-5 h-5" />}
            color="green"
          />

          <StatCard
            title="Orçamento Total"
            value={`R$ ${project.budget.total.toLocaleString('pt-BR')}`}
            description={`R$ ${project.budget.spent.toLocaleString('pt-BR')} utilizados (${spentPercentage.toFixed(0)}%)`}
            icon={<FaMoneyBillWave className="w-5 h-5" />}
            color="purple"
          />
        </div>

        {/* Budget Management */}
        <DashboardCard
          title="Gestão de Orçamento"
          headerAction={
            <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-medium transition-colors">
              Adicionar Despesa
            </button>
          }
        >
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Visão Geral do Orçamento</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400">Orçamento Total</p>
                <p className="text-xl font-bold text-gray-800 dark:text-white">R$ {project.budget.total.toLocaleString('pt-BR')}</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400">Utilizado</p>
                <p className="text-xl font-bold text-green-600 dark:text-green-400">R$ {project.budget.spent.toLocaleString('pt-BR')}</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400">Restante</p>
                <p className="text-xl font-bold text-blue-600 dark:text-blue-400">R$ {project.budget.remaining.toLocaleString('pt-BR')}</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Utilização do Orçamento</p>
              <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 dark:bg-green-600" style={{ width: `${spentPercentage}%` }}></div>
              </div>
              <div className="flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-400">
                <span>Utilizado: {spentPercentage.toFixed(0)}%</span>
                <span>Restante: {remainingPercentage.toFixed(0)}%</span>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Despesas Recentes</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Descrição
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Valor
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Data
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {project.expenses.map((expense, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="px-4 py-3 text-sm text-gray-800 dark:text-white">
                      {expense.description}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                      R$ {expense.amount.toLocaleString('pt-BR')}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                      {new Date(expense.date).toLocaleDateString('pt-BR')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DashboardCard>

        {/* Activities */}
        <DashboardCard
          title="Atividades do Projeto"
          headerAction={
            <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-medium transition-colors">
              Adicionar Atividade
            </button>
          }
        >
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Atividade
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Horário
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Local
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {project.activities.map((activity, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="px-4 py-3 text-sm text-gray-800 dark:text-white">
                      {activity.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                      {activity.schedule}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                      {activity.location}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DashboardCard>
      </div>
    </DashboardLayout>
  );
}