"use client";

import React from 'react';
import DashboardLayout from "@/components/layout/DashboardLayout";
import ChildrenStatsSection from "@/components/dashboard/ChildrenStatsSection";
import { FaArrowLeft, FaChild, FaPlus } from "react-icons/fa";
import Link from "next/link";
import DashboardCard from "@/components/dashboard/DashboardCard";

export default function ChildrenPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center">
            <Link href="/dashboard" className="mr-4 p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <FaArrowLeft className="w-4 h-4 text-gray-600 dark:text-gray-400" />
            </Link>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
              <FaChild className="w-6 h-6 mr-2 text-blue-600" />
              Crianças
            </h1>
          </div>

          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
              <FaPlus className="w-4 h-4" />
              Cadastrar Criança
            </button>
          </div>
        </div>

        {/* Children Statistics */}
        <ChildrenStatsSection />

        {/* Children List */}
        <DashboardCard title="Lista de Crianças" className="mt-8">
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
                    Projeto
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Autismo
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Deficiência
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {[
                  { id: 1, name: "Ana Silva", age: 8, project: "Apoio Escolar", autistic: true, disabled: false },
                  { id: 2, name: "João Santos", age: 10, project: "Oficina de Artes", autistic: false, disabled: true },
                  { id: 3, name: "Maria Oliveira", age: 6, project: "Apoio Escolar", autistic: false, disabled: false },
                  { id: 4, name: "Pedro Costa", age: 12, project: "Grupo de Apoio", autistic: true, disabled: false },
                  { id: 5, name: "Luiza Ferreira", age: 9, project: "Oficina de Artes", autistic: false, disabled: true }
                ].map((child) => (
                  <tr key={child.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="px-4 py-3 text-sm text-gray-800 dark:text-white">
                      {child.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                      {child.age} anos
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                      {child.project}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        child.autistic 
                          ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400" 
                          : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400"
                      }`}>
                        {child.autistic ? "Sim" : "Não"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        child.disabled 
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" 
                          : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400"
                      }`}>
                        {child.disabled ? "Sim" : "Não"}
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