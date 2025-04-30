"use client";

import React, { useState } from 'react';
import { FaSearch, FaFilter, FaUserPlus, FaEllipsisV } from 'react-icons/fa';
import DashboardCard from './DashboardCard';

interface Volunteer {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
  joinedDate: string;
  skills: string[];
}

interface VolunteerAdminSectionProps {
  volunteers?: Volunteer[];
}

export default function VolunteerAdminSection({ volunteers = defaultVolunteers }: VolunteerAdminSectionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [showDropdown, setShowDropdown] = useState<string | null>(null);

  // Filter volunteers based on search term and status filter
  const filteredVolunteers = volunteers.filter(volunteer => {
    const matchesSearch = volunteer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         volunteer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || volunteer.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleStatusFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusFilter(e.target.value);
  };

  const toggleDropdown = (volunteerId: string) => {
    if (showDropdown === volunteerId) {
      setShowDropdown(null);
    } else {
      setShowDropdown(volunteerId);
    }
  };

  return (
    <DashboardCard
      title="Administração de Voluntários"
      headerAction={
        <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md flex items-center gap-1 transition-colors">
          <FaUserPlus size={14} />
          <span>Novo Voluntário</span>
        </button>
      }
    >
      {/* Search and Filter Bar */}
      <div className="mb-4 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Buscar voluntários..."
            className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
            <FaFilter size={14} />
            <span className="text-sm">Status:</span>
          </div>
          <select
            className="border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-3 py-2"
            value={statusFilter}
            onChange={handleStatusFilterChange}
          >
            <option value="all">Todos</option>
            <option value="active">Ativos</option>
            <option value="inactive">Inativos</option>
            <option value="pending">Pendentes</option>
          </select>
        </div>
      </div>

      {/* Volunteers Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Nome
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Contato
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Função
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Desde
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredVolunteers.length > 0 ? (
              filteredVolunteers.map((volunteer) => (
                <tr key={volunteer.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="px-4 py-3 text-sm text-gray-800 dark:text-white">
                    {volunteer.name}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                    <div>{volunteer.email}</div>
                    <div className="text-xs">{volunteer.phone}</div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                    {volunteer.role}
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      volunteer.status === 'active' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : volunteer.status === 'inactive'
                          ? 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}>
                      {volunteer.status === 'active' ? 'Ativo' :
                       volunteer.status === 'inactive' ? 'Inativo' : 'Pendente'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">
                    {volunteer.joinedDate}
                  </td>
                  <td className="px-4 py-3 text-sm text-right relative">
                    <button
                      className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      onClick={() => toggleDropdown(volunteer.id)}
                    >
                      <FaEllipsisV />
                    </button>

                    {showDropdown === volunteer.id && (
                      <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10 border border-gray-200 dark:border-gray-700">
                        <div className="py-1">
                          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                            Editar
                          </button>
                          <button className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                            Ver detalhes
                          </button>
                          <button className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                            {volunteer.status === 'active' ? 'Desativar' : 'Ativar'}
                          </button>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                  Nenhum voluntário encontrado com os filtros atuais.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </DashboardCard>
  );
}

// Default volunteers data if none is provided
const defaultVolunteers: Volunteer[] = [
  {
    id: "1",
    name: "João Silva",
    email: "joao.silva@email.com",
    phone: "(11) 98765-4321",
    role: "Educador",
    status: "active",
    joinedDate: "Jan 2023",
    skills: ["Educação", "Artes"]
  },
  {
    id: "2",
    name: "Maria Oliveira",
    email: "maria.oliveira@email.com",
    phone: "(11) 91234-5678",
    role: "Coordenadora",
    status: "active",
    joinedDate: "Mar 2022",
    skills: ["Gestão", "Psicologia"]
  },
  {
    id: "3",
    name: "Carlos Santos",
    email: "carlos.santos@email.com",
    phone: "(11) 99876-5432",
    role: "Assistente",
    status: "inactive",
    joinedDate: "Jun 2023",
    skills: ["Administração", "Informática"]
  },
  {
    id: "4",
    name: "Ana Pereira",
    email: "ana.pereira@email.com",
    phone: "(11) 98888-7777",
    role: "Psicóloga",
    status: "pending",
    joinedDate: "Abr 2024",
    skills: ["Psicologia", "Terapia"]
  }
];