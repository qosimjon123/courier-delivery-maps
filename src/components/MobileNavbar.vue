
<template>
  <nav class="mobile-navbar">
    <button 
      class="nav-item" 
      :class="{ active: activeTab === 'map' }"
      @click="$emit('change-tab', 'map')"
    >
      <MapIcon class="nav-icon" />
      <span class="nav-label">Карта</span>
    </button>
    
    <button 
      class="nav-item" 
      :class="{ active: activeTab === 'orders' }"
      @click="$emit('change-tab', 'orders')"
    >
      <PackageIcon class="nav-icon" />
      <span class="nav-label">Заказы</span>
    </button>
    
    <button 
      class="nav-item" 
      :class="{ active: activeTab === 'profile' }"
      @click="$emit('change-tab', 'profile')"
    >
      <UserIcon class="nav-icon" />
      <span class="nav-label">Профиль</span>
    </button>
  </nav>
</template>

<script>
import { 
  Map as MapIcon, 
  Package as PackageIcon, 
  User as UserIcon 
} from 'lucide-vue-next';

export default {
  name: 'MobileNavbar',
  components: {
    MapIcon,
    PackageIcon,
    UserIcon
  },
  props: {
    activeTab: {
      type: String,
      required: true
    }
  },
  emits: ['change-tab']
};
</script>

<style scoped>
.mobile-navbar {
  display: flex;
  justify-content: space-around;
  background-color: white;
  padding: 12px 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 100;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.nav-item.active {
  background-color: #f1e8ff;
  color: #8B5CF6;
}

.nav-item:not(.active) {
  color: #888;
}

.nav-icon {
  width: 20px;
  height: 20px;
  margin-bottom: 4px;
}

.nav-label {
  font-size: 12px;
  font-weight: 500;
}
</style>
