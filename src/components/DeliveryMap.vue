
<template>
  <div class="map-container">
    <div v-if="loading" class="loading-overlay">
      <div class="loading-spinner"></div>
    </div>
    <div ref="mapElement" class="map"></div>
    
    <!-- Панель управления картой -->
    <div class="map-controls">
      <button class="control-btn" @click="centerOnCurrentLocation">
        <img src="/placeholder.svg" alt="Моё местоположение" class="w-5 h-5" />
      </button>
      <button class="control-btn" @click="showRoute">
        <img src="/placeholder.svg" alt="Показать маршрут" class="w-5 h-5" />
      </button>
    </div>
    
    <!-- Информация о маршруте -->
    <div v-if="routeInfo" class="route-info">
      <div class="route-distance">
        <span class="font-bold">{{ routeInfo.distance }}</span>
      </div>
      <div class="route-time">
        <span class="font-bold">{{ routeInfo.time }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watchEffect } from 'vue';

export default {
  name: 'DeliveryMap',
  props: {
    waypoints: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const mapElement = ref(null);
    const loading = ref(true);
    const routeInfo = ref({
      distance: '2.7 км',
      time: '15 минут'
    });
    
    onMounted(() => {
      // Имитация загрузки карты
      setTimeout(() => {
        loading.value = false;
        initMap();
      }, 1000);
    });
    
    const initMap = () => {
      // Здесь будет инициализация карты (Leaflet, Yandex Maps или Google Maps)
      console.log('Инициализация карты с точками:', props.waypoints);
    };
    
    const centerOnCurrentLocation = () => {
      // Центрирование карты на текущем местоположении
      console.log('Центрирование на текущем местоположении');
    };
    
    const showRoute = () => {
      // Показать полный маршрут
      console.log('Показать полный маршрут');
    };
    
    watchEffect(() => {
      // Отслеживаем изменения точек маршрута
      if (props.waypoints.length > 0) {
        console.log('Обновление маршрута на карте');
      }
    });
    
    return {
      mapElement,
      loading,
      routeInfo,
      centerOnCurrentLocation,
      showRoute
    };
  }
};
</script>

<style scoped>
.map-container {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #e5e5e5;
}

.map {
  width: 100%;
  height: 100%;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #8B5CF6;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.map-controls {
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 500;
}

.control-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border: none;
}

.route-info {
  position: absolute;
  top: 16px;
  left: 16px;
  background-color: white;
  border-radius: 8px;
  padding: 8px 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 500;
}

.route-distance {
  font-size: 14px;
  color: #333;
}

.route-time {
  font-size: 14px;
  color: #333;
}
</style>
