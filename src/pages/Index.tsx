
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bell, Menu } from "lucide-react";
import DeliveryMap from "@/components/DeliveryMap";
import CurrentOrderCard from "@/components/CurrentOrderCard";
import MobileNavbar from "@/components/MobileNavbar";

const Index = () => {
  const [activeTab, setActiveTab] = useState("map");
  const [deliveryStatus, setDeliveryStatus] = useState<'ожидание' | 'в пути' | 'доставлен'>('ожидание');

  const handleStartDelivery = () => {
    setDeliveryStatus('в пути');
  };

  const handleCompleteDelivery = () => {
    setDeliveryStatus('доставлен');
  };

  const mockOrder = {
    id: "4231",
    customer: "Иванов Иван",
    address: "ул. Пушкина, д. 10, кв. 15",
    time: "25 мин (осталось)",
    items: ["Большая пицца 'Пепперони'", "Кола 0.5л", "Картофель фри"],
    phone: "+7 (999) 123-45-67",
    status: deliveryStatus
  };

  return (
    <div className="mobile-container min-h-screen bg-background">
      {/* Шапка */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="ml-2 text-xl font-bold">Курьер Плюс</h1>
          </div>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
        </div>
      </header>

      {/* Основное содержимое */}
      <main className="p-4 space-y-4">
        {activeTab === "map" && (
          <>
            <h2 className="text-lg font-semibold mb-2">Текущий маршрут</h2>
            <DeliveryMap 
              onNavigate={handleStartDelivery} 
              onComplete={handleCompleteDelivery} 
            />
            <div className="mt-4">
              <h2 className="text-lg font-semibold mb-2">Текущий заказ</h2>
              <CurrentOrderCard {...mockOrder} />
            </div>
          </>
        )}

        {activeTab === "home" && (
          <div className="flex flex-col items-center justify-center space-y-4 mt-8">
            <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center">
              <span className="text-3xl">👋</span>
            </div>
            <h2 className="text-xl font-bold">Добро пожаловать, Курьер!</h2>
            <p className="text-center text-gray-600">
              Сегодня хороший день для доставки. У вас 6 заказов в очереди.
            </p>
            <Button className="mt-4 bg-purple-600 hover:bg-purple-700">
              Начать смену
            </Button>
          </div>
        )}

        {activeTab === "orders" && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Ваши заказы</h2>
            <CurrentOrderCard {...mockOrder} />
            <div className="opacity-50">
              <CurrentOrderCard 
                {...{
                  ...mockOrder,
                  id: "4232",
                  customer: "Петров Пётр",
                  address: "ул. Ленина, д. 25, кв. 42",
                  status: 'ожидание'
                }} 
              />
            </div>
          </div>
        )}

        {activeTab === "notifications" && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Уведомления</h2>
            <div className="space-y-3">
              <div className="p-3 bg-accent rounded-lg">
                <p className="text-sm font-medium">Новый заказ назначен</p>
                <p className="text-xs text-gray-500">15 минут назад</p>
              </div>
              <div className="p-3 bg-accent rounded-lg">
                <p className="text-sm font-medium">Смена начинается через час</p>
                <p className="text-xs text-gray-500">2 часа назад</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "profile" && (
          <div className="space-y-4">
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center text-3xl">
                👤
              </div>
              <h2 className="mt-2 text-xl font-bold">Михаил Курьеров</h2>
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Онлайн</span>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium">Статистика</h3>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-purple-600">42</span>
                    <span className="text-sm text-gray-500">Доставки</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-purple-600">4.8</span>
                    <span className="text-sm text-gray-500">Рейтинг</span>
                  </div>
                </div>
              </div>
              
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Настройки профиля
              </Button>
            </div>
          </div>
        )}
      </main>

      {/* Мобильная навигация */}
      <MobileNavbar activeTab={activeTab} onChangeTab={setActiveTab} />
    </div>
  );
};

export default Index;
