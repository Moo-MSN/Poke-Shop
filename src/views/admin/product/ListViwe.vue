<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import AdminLayout from "@/layouts/AdminLayout.vue";

// icon
import Trash from "@/components/icons/Trash.vue";
import Edit from "@/components/icons/Edit.vue";

const products = ref([
  {
    name: "test",
    imageUrl: "123",
    price: "111",
    quantity: "20",
    remainquantity: "11",
    status: "open",
    UpdatedAt: new Date().toLocaleString(),
  },
]);
</script>

<template>
  <AdminLayout>
    <div class="flex my-10 items-center justify-between">
      <div class="text-2xl font-semibold">Products</div>
      <button class="btn btn-neutral btn-xs sm:btn-sm md:btn-md">Add New</button>
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
          <!-- row 1 -->
          <tr v-for="product in products" class="text text-center">
            <th>{{ product.name }}</th>
            <td>{{ product.imageUrl }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.remainquantity }}/{{ product.quantity }}</td>
            <td>{{ product.status }}</td>
            <td class="w-50">{{ product.UpdatedAt }}</td>
            <td class="flex gap-2 justify-center">
              <RouterLink >
                <button class="btn btn-square btn-ghost">
                  <Edit></Edit>
                </button>
              </RouterLink>
              <button class="btn btn-square btn-ghost">
                <Trash></Trash>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </AdminLayout>
</template>
