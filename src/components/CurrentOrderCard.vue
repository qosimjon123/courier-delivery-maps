
<template>
  <div class="order-card">
    <div class="order-header">
      <div>
        <h2 class="order-id">Заказ {{ order.id }}</h2>
        <div class="order-status">{{ order.status }}</div>
      </div>
      <div class="order-time">
        <ClockIcon class="w-4 h-4 mr-1" />
        {{ order.deliveryTime }}
      </div>
    </div>
    
    <div class="order-content">
      <div class="customer-info">
        <div class="info-row">
          <UserIcon class="w-4 h-4 text-gray-500" />
          <span>{{ order.customer }}</span>
        </div>
        <div class="info-row">
          <MapPinIcon class="w-4 h-4 text-gray-500" />
          <span>{{ order.address }}</span>
        </div>
        <div class="info-row">
          <PhoneIcon class="w-4 h-4 text-gray-500" />
          <span>{{ order.phone }}</span>
        </div>
      </div>
      
      <div class="order-items">
        <div class="order-item" v-for="(item, index) in order.items" :key="index">
          <div class="item-name">{{ item.name }}</div>
          <div class="item-quantity">× {{ item.qty }}</div>
        </div>
      </div>
    </div>
    
    <div class="order-actions">
      <button class="action-btn primary">
        <NavigationIcon class="w-4 h-4" />
        Навигация
      </button>
      <button class="action-btn secondary">
        <PhoneCallIcon class="w-4 h-4" />
        Позвонить
      </button>
      <button class="action-btn secondary">
        <MessageSquareIcon class="w-4 h-4" />
        Написать
      </button>
    </div>
  </div>
</template>

<script>
import { 
  Clock as ClockIcon, 
  User as UserIcon, 
  MapPin as MapPinIcon, 
  Phone as PhoneIcon,
  Navigation as NavigationIcon,
  PhoneCall as PhoneCallIcon,
  MessageSquare as MessageSquareIcon
} from 'lucide-vue-next';

export default {
  name: 'CurrentOrderCard',
  components: {
    ClockIcon,
    UserIcon,
    MapPinIcon,
    PhoneIcon,
    NavigationIcon,
    PhoneCallIcon,
    MessageSquareIcon
  },
  props: {
    order: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.order-card {
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 16px;
  margin-bottom: 16px;
}

.order-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.order-id {
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin: 0;
}

.order-status {
  font-size: 12px;
  color: #8B5CF6;
  font-weight: 500;
}

.order-time {
  font-size: 12px;
  color: #666;
  display: flex;
  align-items: center;
}

.order-content {
  margin-bottom: 16px;
}

.customer-info {
  margin-bottom: 12px;
}

.info-row {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-size: 14px;
  color: #333;
}

.info-row svg {
  margin-right: 8px;
  flex-shrink: 0;
}

.order-items {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 12px;
}

.order-item {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 8px;
}

.order-item:last-child {
  margin-bottom: 0;
}

.item-name {
  color: #333;
}

.item-quantity {
  color: #666;
  font-weight: 500;
}

.order-actions {
  display: flex;
  gap: 8px;
}

.action-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  cursor: pointer;
}

.action-btn.primary {
  background-color: #8B5CF6;
  color: white;
}

.action-btn.secondary {
  background-color: #f5f5f5;
  color: #333;
}
</style>
