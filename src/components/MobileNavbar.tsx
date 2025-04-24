
import React from 'react';
import { Home, Map, List, Bell, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => (
  <button
    className={cn(
      "flex flex-col items-center justify-center flex-1 py-2 relative",
      active ? "text-purple-600" : "text-gray-500"
    )}
    onClick={onClick}
  >
    {active && (
      <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-purple-600 rounded-b-lg" />
    )}
    <div className="h-6">{icon}</div>
    <span className="text-xs mt-1">{label}</span>
  </button>
);

const MobileNavbar: React.FC<{ activeTab: string; onChangeTab: (tab: string) => void }> = ({ 
  activeTab, 
  onChangeTab 
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 z-10">
      <div className="flex items-center justify-between">
        <NavItem 
          icon={<Home size={20} />} 
          label="Главная" 
          active={activeTab === 'home'} 
          onClick={() => onChangeTab('home')} 
        />
        <NavItem 
          icon={<Map size={20} />} 
          label="Маршрут" 
          active={activeTab === 'map'} 
          onClick={() => onChangeTab('map')} 
        />
        <NavItem 
          icon={<List size={20} />} 
          label="Заказы" 
          active={activeTab === 'orders'} 
          onClick={() => onChangeTab('orders')} 
        />
        <NavItem 
          icon={<Bell size={20} />} 
          label="Уведомления" 
          active={activeTab === 'notifications'} 
          onClick={() => onChangeTab('notifications')} 
        />
        <NavItem 
          icon={<User size={20} />} 
          label="Профиль" 
          active={activeTab === 'profile'} 
          onClick={() => onChangeTab('profile')} 
        />
      </div>
    </div>
  );
};

export default MobileNavbar;
