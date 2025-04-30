"use client";

import React from 'react';
import DashboardLayout from "@/components/layout/DashboardLayout";
import AdultsStatsSection from "@/components/dashboard/AdultsStatsSection";
import { FaArrowLeft, FaUserTie, FaPlus } from "react-icons/fa";
import Link from "next/link";
import DashboardCard from "@/components/dashboard/DashboardCard";

export default function AdultsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center">
            <Link href="/dashboard" className="mr-4 p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <FaArrowLeft className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </Link>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
              <FaUserTie className="w-6 h-6 mr-2 text-indigo-600" />
              Adultos
            </h1>
          </div>

          <div className="flex gap-2">
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
              <FaPlus className="w-4 h-4" />
              Cadastrar Adulto
            </button>
          </div>
        </div>

        {/* Adults Statistics */}
        <AdultsStatsSection />

        {/* Adults List */}
        <DashboardCard title="Lista de Adultos" className="mt-8">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Nome
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Idade
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Gênero
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Projeto
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Situação
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { id: 1, name: "Roberto Silva", age: 42, gender: "Masculino", project: "Grupo de Apoio", situation: "Desempregado" },
                  { id: 2, name: "Carla Santos", age: 35, gender: "Feminino", project: "Oficina de Artes", situation: "Desempregada" },
                  { id: 3, name: "José Oliveira", age: 58, gender: "Masculino", project: "Grupo de Apoio", situation: "Em situação de rua" },
                  { id: 4, name: "Fernanda Costa", age: 29, gender: "Feminino", project: "Oficina de Artes", situation: "Desempregada" },
                  { id: 5, name: "Antônio Ferreira", age: 61, gender: "Masculino", project: "Grupo de Apoio", situation: "Em situação de rua" }
                ].map((adult) => (
                  <tr key={adult.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="px-4 py-3 text-sm text-gray-800 dark:text-white">
                      {adult.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                      {adult.age} anos
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                      {adult.gender}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                      {adult.project}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        adult.situation === "Em situação de rua" 
                          ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400" 
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                      }`}>
                        {adult.situation}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <button className="p-1 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition-colors">
                          Editar
                        </button>
                        <button className="p-1 bg-red-50 text-red-600 rounded hover:bg-red-100 transition-colors">
                          Excluir
                        </button>
                      </div>
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