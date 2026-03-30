<script setup>
import { onMounted } from "vue";
import { RouterLink } from "vue-router";

// import state เข้ามาเพื่อใช้ data ในการ mock ก่อนเชื่อมไป DB
import { useAdminProductStore } from "@/stores/admin/product";

import AdminLayout from "@/layouts/AdminLayout.vue";

// icon
import Trash from "@/components/icons/Trash.vue";
import Edit from "@/components/icons/Edit.vue";

const adminProductStore = useAdminProductStore();

onMounted(() => {
  adminProductStore.loadProduct();
});

// ประกาศ function เพื่อเรียกใช้ removeProduct ใน useAdminProductStore
const removeProduct = (index) => {
  adminProductStore.removeProduct(index);
};
</script>

<template>
  <AdminLayout>
    <div class="flex my-10 items-center justify-between">
      <div class="text-2xl font-semibold">Products</div>
      <RouterLink :to="{ name: 'admin-products-create' }" class="btn btn-neutral btn-xs sm:btn-sm md:btn-md">Add New</RouterLink>
    </div>
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr class="text text-center">
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Status</th>
            <th class="w-50">UpdatedAt</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 --><!-- index ใช้ระบุตำแหน่งข้อมูลในการแก้ไขหรือลบ product -->
          <tr v-for="(product, index) in adminProductStore.list" class="text text-center">
            <th>{{ product.name }}</th>
            <td>
              <img :src="product.imageUrl" class="w-20 mx-auto" />
            </td>
            <td>{{ product.price }}</td>
            <td>{{ product.remainquantity }}/{{ product.quantity }}</td>
            <td>
              <div class="badge" :class="product.status === 'open' ? 'badge-success' : 'badge-error'">
                {{ product.status }}
              </div>
            </td>
            <td class="w-50">{{ product.UpdatedAt }}</td>
            <td>
              <RouterLink :to="{name:'admin-products-update',params:{id:index}}">
                <button class="btn btn-square btn-ghost">
                  <Edit></Edit>
                </button>
              </RouterLink>

              <button class="btn btn-square btn-ghost" @click="removeProduct(index)">
                <Trash></Trash>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </AdminLayout>
</template>
