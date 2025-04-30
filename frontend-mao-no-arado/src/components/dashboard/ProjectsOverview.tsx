"use client";

import React from 'react';
import { StatCard } from './DashboardCard';
import { FaUsers, FaChild, FaMoneyBillWave, FaSeedling } from 'react-icons/fa';

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

interface ProjectsOverviewProps {
  projects: Project[];
  className?: string;
}

export default function ProjectsOverview({ projects, className = "" }: ProjectsOverviewProps) {
  // Calculate total statistics
  const totalProjects = projects.length;
  const activeProjects = projects.filter(p => p.status === "Em andamento").length;
  const totalVolunteers = projects.reduce((sum, project) => sum + (project.volunteers || 0), 0);
  const totalChildren = projects.reduce((sum, project) => sum + (project.children || 0), 0);
  const totalBudget = projects.reduce((sum, project) => sum + (project.budget?.total || 0), 0);
  const totalSpent = projects.reduce((sum, project) => sum + (project.budget?.spent || 0), 0);

  // Calculate average volunteers and children per project
  const avgVolunteersPerProject = totalProjects > 0 ? Math.round(totalVolunteers / totalProjects) : 0;
  const avgChildrenPerProject = totalProjects > 0 ? Math.round(totalChildren / totalProjects) : 0;

  // Calculate budget utilization percentage
  const budgetUtilizationPercentage = totalBudget > 0 ? Math.round((totalSpent / totalBudget) * 100) : 0;

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${className}`}>
      <StatCard
        title="Total de Projetos"
        value={totalProjects}
        description={`${activeProjects} projetos ativos`}
        icon={<FaSeedling className="w-5 h-5" />}
        color="blue"
      />

      <StatCard
        title="Voluntários"
        value={totalVolunteers}
        description={`Média de ${avgVolunteersPerProject} por projeto`}
        icon={<FaUsers className="w-5 h-5" />}
        color="green"
      />

      <StatCard
        title="Crianças Atendidas"
        value={totalChildren}
        description={`Média de ${avgChildrenPerProject} por projeto`}
        icon={<FaChild className="w-5 h-5" />}
        color="yellow"
      />

      <StatCard
        title="Orçamento Total"
        value={`R$ ${totalBudget.toLocaleString('pt-BR')}`}
        description={`${budgetUtilizationPercentage}% utilizado até o momento`}
        icon={<FaMoneyBillWave className="w-5 h-5" />}
        color="purple"
      />
    </div>
  );
}