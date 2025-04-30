import React, { memo } from 'react';
import Link from 'next/link';
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaClock } from 'react-icons/fa';
import DashboardCard from './DashboardCard';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  description: string;
}

interface EventsSectionProps {
  events?: Event[];
}

// Create a memoized component to prevent unnecessary re-renders
function EventsSection({ events = defaultEvents }: EventsSectionProps) {
  return (
    <DashboardCard
      title="Próximos Eventos"
      footer={
        <div className="text-center">
          <Link href="/dashboard/events" className="text-blue-600 dark:text-blue-400 text-sm hover:underline">
            Ver todos os eventos
          </Link>
        </div>
      }
    >
      <div className="space-y-4">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              {/* Date box */}
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex flex-col items-center justify-center text-blue-600 dark:text-blue-400">
                <span className="text-sm font-medium">{event.date.split(' ')[0]}</span>
                <span className="text-xl font-bold">{event.date.split(' ')[1]}</span>
              </div>

              {/* Event details */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {event.description}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <FaClock className="mr-1" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-1" />
                    {event.location}
                  </div>
                  <div className="flex items-center">
                    <FaUsers className="mr-1" />
                    {event.attendees} participantes
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex-shrink-0 flex gap-2">
                <Link
                  href={`/dashboard/events/${event.id}`}
                  className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md transition-colors"
                >
                  Detalhes
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}

// Default events data if none is provided
const defaultEvents: Event[] = [
  {
    id: "1",
    title: "Mutirão de Sábado",
    date: "Mai 15",
    time: "09:00 - 12:00",
    location: "Centro Comunitário",
    attendees: 12,
    description: "Mutirão para organização e limpeza do espaço comunitário."
  },
  {
    id: "2",
    title: "Oficina de Artes para Crianças",
    date: "Mai 22",
    time: "14:00 - 16:00",
    location: "Sala Multiuso",
    attendees: 8,
    description: "Atividades artísticas para crianças com necessidades especiais."
  },
  {
    id: "3",
    title: "Reunião de Voluntários",
    date: "Mai 28",
    time: "19:00 - 20:30",
    location: "Sala de Reuniões",
    attendees: 15,
    description: "Planejamento de atividades para o próximo mês."
  }
];

export default memo(EventsSection);
