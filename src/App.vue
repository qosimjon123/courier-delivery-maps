
<template>
  <div class="delivery-app">
    <!-- Основной контент -->
    <main class="flex-1 overflow-y-auto">
      <div v-if="activeTab === 'map'" class="relative h-full">
        <DeliveryMap :waypoints="routeWaypoints" />
        <div class="absolute bottom-20 left-0 right-0 px-4 z-10">
          <CurrentOrderCard :order="currentOrder" />
        </div>
      </div>
      
      <div v-if="activeTab === 'orders'" class="p-4">
        <h1 class="text-xl font-bold mb-4">Заказы</h1>
        <CurrentOrderCard :order="currentOrder" />
        <!-- Здесь будет список других заказов -->
      </div>
      
      <div v-if="activeTab === 'profile'" class="p-4">
        <h1 class="text-xl font-bold mb-4">Профиль курьера</h1>
        <!-- Содержимое профиля -->
      </div>
    </main>
    
    <!-- Нижняя навигация -->
    <MobileNavbar :activeTab="activeTab" @change-tab="setActiveTab" />
  </div>
</template>

<script>
import { ref } from 'vue';
import DeliveryMap from './components/DeliveryMap.vue';
import CurrentOrderCard from './components/CurrentOrderCard.vue';
import MobileNavbar from './components/MobileNavbar.vue';

export default {
  name: 'App',
  components: {
    DeliveryMap,
    CurrentOrderCard,
    MobileNavbar
  },
  setup() {
    const activeTab = ref('map');
    
    // Демо-данные для заказа
    const currentOrder = ref({
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
    });
    
    // Точки маршрута для карты
    const routeWaypoints = ref([
      { lat: 55.751244, lng: 37.618423, title: "Ресторан" },
      { lat: 55.763339, lng: 37.565189, title: "Клиент" }
    ]);
    
    const setActiveTab = (tab) => {
      activeTab.value = tab;
    };
    
    return {
      activeTab,
      currentOrder,
      routeWaypoints,
      setActiveTab
    };
  }
};
</script>

<style>
.delivery-app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f9f9fb;
}
</style>
