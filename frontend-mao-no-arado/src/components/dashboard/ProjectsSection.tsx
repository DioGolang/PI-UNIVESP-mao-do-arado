import React, { memo } from 'react';
import Link from 'next/link';
import DashboardCard from './DashboardCard';
import { FaUsers, FaChild, FaEye } from 'react-icons/fa';

interface Project {
  id: string;
  name: string;
  owner: string;
  status: string;
  progress: number;
  volunteers?: number;
  children?: number;
  budget?: {
    total: number;
    spent: number;
    remaining: number;
  };
}

interface ProjectsSectionProps {
  projects?: Project[];
}

// Create a memoized component to prevent unnecessary re-renders
function ProjectsSection({ projects = defaultProjects }: ProjectsSectionProps) {
  return (
    <DashboardCard
      title="Projetos Ativos"
      footer={
        <div className="text-center">
          <Link href="/dashboard/projects" className="text-blue-600 dark:text-blue-400 text-sm hover:underline">
            Ver todos os projetos
          </Link>
        </div>
      }
    >
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Nome do Projeto
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Responsável
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Voluntários
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Crianças
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Progresso
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {projects.map((project, idx) => (
              <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="px-4 py-3 text-sm text-gray-800 dark:text-white">
                  {project.name}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  {project.owner}
                </td>
                <td className="px-4 py-3 text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === "Em andamento" 
                      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" 
                      : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                  }`}>
                    {project.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center">
                    <FaUsers className="w-4 h-4 mr-1 text-blue-500" />
                    {project.volunteers || 0}
                  </div>
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center">
                    <FaChild className="w-4 h-4 mr-1 text-green-500" />
                    {project.children || 0}
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">
                  <Link
                    href={`/dashboard/projects/${project.id}`}
                    className="p-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors inline-flex items-center justify-center"
                    title="Ver detalhes"
                  >
                    <FaEye className="w-4 h-4" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardCard>
  );
}

// Default projects data if none is provided
const defaultProjects: Project[] = [
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

export default memo(ProjectsSection);
