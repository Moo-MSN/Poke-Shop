<script setup>
import { ref, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";

import { useAdminOrderStore } from "@/stores/admin/order";

import AdminLayout from "@/layouts/AdminLayout.vue";

const orderId = ref(-1);

// ใช้ let เพราะ products data มีการเปลี่ยนแปลงตาม order
let orderData = ref({
  products: [],
});

const route = useRoute();

const adminOrderStore = useAdminOrderStore();

onMounted(() => {
  if (route.params.id) {
    orderId.value = parseInt(route.params.id);
    orderData.value = adminOrderStore.getOrder(orderId.value);
  }
});
</script>

<template>
  <AdminLayout>
    <div class="shadow-2xl p-8 mt-5">
      <!-- ใส่ +1 เพื่อให้แสดง id เริ่มจาก 1 เพื่อกันสับสน แต่ถ้าต่อ DB อาจจะดึงเป็น id ที่รันจาก DB -->
      <div class="text-2xl font-semibold">Order Detail id: {{ orderId + 1 }}</div>
      <div class="divider"></div>

      <!--ส่วนบน -->
      <div class="grid grid-cols-2 gap-6">
        <!-- Order Data -->
        <div>
          <div class="text font-semibold">Order Data</div>
          <div>{{ orderData.updatedAt }}</div>
        </div>

        <!-- Order Number -->
        <div>
          <div class="text font-semibold">Order Number</div>
          <div>{{ orderData.no }}</div>
        </div>

        <!-- Payment Method -->
        <div>
          <div class="text font-semibold">Payment Method</div>
          <div>{{ orderData.paymentMethod }}</div>
        </div>

        <!-- Order Number -->
        <div>
          <div class="text font-semibold">Address</div>
          <div>{{ orderData.address }}</div>
        </div>
      </div>
      <div class="divider"></div>

      <!-- ส่วนกลาง -->
      <div v-for="product in orderData.products" class="flex items-center my-4">
        <div>
          <img :src="product.imageUrl" class="w-24" />
        </div>
        <div class="flex-1 ml-4">
          <div class="font-semibold">{{ product.name }}</div>
          <div>{{ product.description }}</div>
        </div>
        <div class="flex-1">จำนวน {{ product.quantity }} ชิ้น</div>
        <div>{{ product.price }} ฿</div>
      </div>
      <div class="divider"></div>

      <!-- ส่วนล่าง -->
      <div class="flex justify-between font-semibold">
        <div>ราคาสินค้ารวม</div>
        <div>{{ orderData.totalPrice }} ฿</div>
      </div>
      <div class="flex justify-end mt-4">
        <RouterLink :to="{ name: 'admin-orders' }" class="btn btn-ghost">BACK</RouterLink>
      </div>
    </div>
  </AdminLayout>
</template>
