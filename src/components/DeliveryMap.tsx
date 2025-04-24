
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MapIcon, Navigation, CheckCircle } from "lucide-react";

interface DeliveryMapProps {
  onNavigate: () => void;
  onComplete: () => void;
}

const DeliveryMap: React.FC<DeliveryMapProps> = ({ onNavigate, onComplete }) => {
  const [isNavigating, setIsNavigating] = useState(false);

  const handleNavigate = () => {
    setIsNavigating(true);
    onNavigate();
  };

  return (
    <div className="relative w-full h-[60vh] rounded-lg overflow-hidden bg-gray-200">
      {/* Имитация карты (в реальном приложении здесь будет интеграция карты) */}
      <div className="absolute inset-0 bg-slate-200">
        <div className="w-full h-full flex items-center justify-center">
          <MapIcon className="h-16 w-16 text-gray-400" />
          <span className="sr-only">Карта маршрута</span>
        </div>
        
        {/* Маршрут (упрощенная визуализация) */}
        <div className="absolute top-1/4 left-1/4 w-1/2 border-2 border-dashed border-purple-500 rounded-full h-1/2"></div>
        
        {/* Точки маршрута */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-500 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-purple-500 rounded-full"></div>
      </div>
      
      {/* Контролы карты */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2">
        {!isNavigating ? (
          <Button onClick={handleNavigate} className="bg-purple-600 hover:bg-purple-700">
            <Navigation className="mr-2" />
            Начать навигацию
          </Button>
        ) : (
          <Button onClick={onComplete} className="bg-green-600 hover:bg-green-700">
            <CheckCircle className="mr-2" />
            Завершить доставку
          </Button>
        )}
      </div>
    </div>
  );
};

export default DeliveryMap;
