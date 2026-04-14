<script setup>
import { RouterView } from "vue-router";
import { onMounted } from "vue";

import { useCartStore } from "./stores/user/cart";
import { useProductStore } from "./stores/user/product";
import { useEventStore } from "./stores/event";

const CartStore = useCartStore();
const productStore = useProductStore();
// ใช้ Toast ในการบอก admin ว่าการแก้ไขหรืออัพเดตเรียบร้อยแล้ว
const eventStore = useEventStore();

onMounted(async () => {
  CartStore.loadCart();
  await productStore.fetchProduct();
  // Test Toast
  //eventStore.popupMessage("success", "Test Message");
});
</script>

<template>
  <!-- Toast แสดงเฉพาะตอนที่ eventStore.alert เป็น true -->
  <div v-if="eventStore.alert" class="toast">
    <div class="alert" :class="`alert-${eventStore.data.status}`">
      <span>{{ eventStore.data.message }}</span>
    </div>
  </div>

  <RouterView />
</template>
