import { useState } from 'react';
import { DeliveryMap } from "@/components/DeliveryMap";
import { CurrentOrderCard } from "@/components/CurrentOrderCard";
import { MobileNavbar } from "@/components/MobileNavbar";
import { MapPin, Navigation, Package, Clock, List } from "lucide-react";

// Это React-компонент, но вам нужен Vue.js 
// Данный код предоставлен только для понимания структуры

const Index = () => {
  const [activeTab, setActiveTab] = useState('map');
  
  // Демо-данные для заказа
  const currentOrder = {
    id: "ORD-7829",
    customer: "Антон Петров",
    address: "ул. Ленина, 42, кв. 56",
    phone: "+7 (903) 123-45-67",
    items: [
      { name: "Пицца Маргарита", qty: 1 },
      { name: "Coca-Cola", qty: 2 },
      { name: "Картофель фри", qty: 1 }
    ],
    deliveryTime: "12:30 - 12:45",
    status: "В пути"
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Главный контент */}
      <main className="flex-1 overflow-y-auto">
        {activeTab === 'map' && (
          <div className="relative h-full">
            <DeliveryMap />
            <div className="absolute bottom-20 left-0 right-0 px-4 z-10">
              <CurrentOrderCard order={currentOrder} />
            </div>
          </div>
        )}
        
        {activeTab === 'orders' && (
          <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Заказы</h1>
            <CurrentOrderCard order={currentOrder} />
            {/* Список других заказов */}
          </div>
        )}
        
        {activeTab === 'profile' && (
          <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Профиль курьера</h1>
            {/* Содержимое профиля */}
          </div>
        )}
      </main>
      
      {/* Нижняя навигация */}
      <MobileNavbar activeTab={activeTab} onChangeTab={setActiveTab} />
    </div>
  );
};

export default Index;
