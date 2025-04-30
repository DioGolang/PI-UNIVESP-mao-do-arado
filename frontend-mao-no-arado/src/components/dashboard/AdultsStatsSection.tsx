"use client";

import React from 'react';
import { FaUsers, FaUserTie, FaUserAlt, FaHome, FaBriefcase } from 'react-icons/fa';
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs';
import DashboardCard from './DashboardCard';
import { StatCard } from './DashboardCard';

interface AdultsStatsSectionProps {
  className?: string;
}

// Mock data - in a real application, this would come from an API or database
const adultsStats = {
  total: 45,
  gender: {
    male: 20,
    female: 25
  },
  situation: {
    homeless: 8,
    unemployed: 22,
    other: 15
  },
  ageGroups: {
    '18-30': 12,
    '31-45': 18,
    '46-60': 10,
    '60+': 5
  }
};

export default function AdultsStatsSection({ className = "" }: AdultsStatsSectionProps) {
  return (
    <div className={className}>
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Estatísticas de Adultos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total de Adultos"
          value={adultsStats.total}
          description="Atendidos nos projetos"
          icon={<FaUsers className="w-5 h-5" />}
          color="blue"
        />

        <StatCard
          title="Homens / Mulheres"
          value={`${adultsStats.gender.male}/${adultsStats.gender.female}`}
          description={`${Math.round((adultsStats.gender.male / adultsStats.total) * 100)}% / ${Math.round((adultsStats.gender.female / adultsStats.total) * 100)}%`}
          icon={<FaUserAlt className="w-5 h-5" />}
          color="indigo"
        />

        <StatCard
          title="Em Situação de Rua"
          value={adultsStats.situation.homeless}
          description={`${Math.round((adultsStats.situation.homeless / adultsStats.total) * 100)}% do total`}
          icon={<FaHome className="w-5 h-5" />}
          color="red"
        />

        <StatCard
          title="Desempregados"
          value={adultsStats.situation.unemployed}
          description={`${Math.round((adultsStats.situation.unemployed / adultsStats.total) * 100)}% do total`}
          icon={<FaBriefcase className="w-5 h-5" />}
          color="yellow"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Age Distribution */}
        <DashboardCard title="Distribuição por Faixa Etária">
          <div className="space-y-4">
            {Object.entries(adultsStats.ageGroups).map(([range, count]) => (
              <div key={range} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <FaUserTie className="w-4 h-4 text-blue-500 mr-2" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{range} anos</span>
                  </div>
                  <span className="text-lg font-bold text-blue-600 dark:text-blue-400">{count}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${(count / adultsStats.total) * 100}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-right">
                  {Math.round((count / adultsStats.total) * 100)}% do total
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>

        {/* Gender Distribution */}
        <DashboardCard title="Distribuição por Gênero">
          <div className="flex h-full items-center justify-center">
            <div className="w-full max-w-xs">
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <BsGenderMale className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Homens</span>
                </div>
                <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  {adultsStats.gender.male} ({Math.round((adultsStats.gender.male / adultsStats.total) * 100)}%)
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-4 mb-4">
                <div
                  className="bg-blue-600 h-4 rounded-full"
                  style={{ width: `${(adultsStats.gender.male / adultsStats.total) * 100}%` }}
                ></div>
              </div>

              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <BsGenderFemale className="w-5 h-5 text-pink-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Mulheres</span>
                </div>
                <span className="text-lg font-bold text-pink-600 dark:text-pink-400">
                  {adultsStats.gender.female} ({Math.round((adultsStats.gender.female / adultsStats.total) * 100)}%)
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-4">
                <div
                  className="bg-pink-600 h-4 rounded-full"
                  style={{ width: `${(adultsStats.gender.female / adultsStats.total) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </DashboardCard>
      </div>

      {/* Situation Distribution */}
      <div className="mt-6">
        <DashboardCard title="Situação Social">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <FaHome className="w-4 h-4 text-red-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Em Situação de Rua</span>
                </div>
                <span className="text-lg font-bold text-red-600 dark:text-red-400">{adultsStats.situation.homeless}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div
                  className="bg-red-600 h-2 rounded-full"
                  style={{ width: `${(adultsStats.situation.homeless / adultsStats.total) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <FaBriefcase className="w-4 h-4 text-yellow-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Desempregados</span>
                </div>
                <span className="text-lg font-bold text-yellow-600 dark:text-yellow-400">{adultsStats.situation.unemployed}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div
                  className="bg-yellow-600 h-2 rounded-full"
                  style={{ width: `${(adultsStats.situation.unemployed / adultsStats.total) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <FaUserAlt className="w-4 h-4 text-gray-500 mr-2" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Outras Situações</span>
                </div>
                <span className="text-lg font-bold text-gray-600 dark:text-gray-400">{adultsStats.situation.other}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                <div
                  className="bg-gray-600 h-2 rounded-full"
                  style={{ width: `${(adultsStats.situation.other / adultsStats.total) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </DashboardCard>
      </div>
    </div>
  );
}