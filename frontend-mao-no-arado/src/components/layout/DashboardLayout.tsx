"use client";

import { useState, useEffect, useCallback, memo } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/TopBar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

// Memoized Sidebar component to prevent unnecessary re-renders
const MemoizedSidebar = memo(Sidebar);
// Memoized Topbar component to prevent unnecessary re-renders
const MemoizedTopbar = memo(Topbar);

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  // Memoize the resize handler to prevent recreating it on every render
  const handleResize = useCallback(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);

    // Auto-collapse sidebar on mobile
    if (mobile && !sidebarCollapsed) {
      setSidebarCollapsed(true);
    }

    // Hide sidebar completely on very small screens
    if (window.innerWidth < 640) {
      setSidebarVisible(false);
    } else {
      setSidebarVisible(true);
    }
  }, [sidebarCollapsed]);

  // Handle screen size changes
  useEffect(() => {
    // Set initial state
    handleResize();

    // Use a debounced version of the resize handler to reduce the number of updates
    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };

    // Add event listener
    window.addEventListener("resize", debouncedResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", debouncedResize);
      clearTimeout(timeoutId);
    };
  }, [handleResize]);

  // Memoize the toggle sidebar handler to prevent recreating it on every render
  const handleToggleSidebar = useCallback(() => {
    if (isMobile) {
      // On mobile, toggle visibility
      setSidebarVisible(!sidebarVisible);
    } else {
      // On desktop, toggle collapsed state
      setSidebarCollapsed(!sidebarCollapsed);
    }
  }, [isMobile, sidebarVisible, sidebarCollapsed]);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 relative">
      {/* Overlay for mobile when sidebar is open */}
      {isMobile && sidebarVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setSidebarVisible(false)}
        />
      )}

      {/* Sidebar with responsive positioning */}
      <div
        className={`
          ${isMobile ? 'fixed' : 'relative'} 
          ${sidebarVisible ? 'translate-x-0' : '-translate-x-full'}
          transition-transform duration-300 ease-in-out z-30
        `}
      >
        <MemoizedSidebar collapsed={sidebarCollapsed} />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-w-0">
        <MemoizedTopbar onToggleSidebar={handleToggleSidebar} />

        <main className="p-4 md:p-6 flex-grow overflow-auto">
          {children}
        </main>

        {/* Footer could be added here */}
        <footer className="p-4 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
          © {new Date().getFullYear()} Mão no Arado - Todos os direitos reservados
        </footer>
      </div>
    </div>
  );
}
