<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
import Product from "@/components/Product.vue";

import { useProductStore } from "@/stores/user/Product";

const productStore = useProductStore();
</script>

<template>
  <UserLayout>
    <div class="container mx-auto">
      <div class="flex justify-center items-center h-30 mb-15">
        <img src="/src/components/icons////pokeball Background Removed.png" />
      </div>

      <div class="flex flex-row justify-center gap-5 p-5">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>

      <!--Product Store-->
      <!-- Move Code to Components for use in store and search page-->
      <Product :products="productStore.list"></Product>
    </div>
    <div class="divider"></div>
  </UserLayout>
</template>
