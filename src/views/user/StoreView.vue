<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
import Product from "@/components/Product.vue";
import { useRouter } from "vue-router";

import { useProductStore } from "@/stores/user/Product";
import { useCartStore } from "@/stores/user/cart";

const productStore = useProductStore();
const CartStore = useCartStore();
const router = useRouter();

const addToCart = (product) => {
  CartStore.addToCart(product);
  router.push({ name: "cart" });
};
</script>

<template>
  <UserLayout>
    <div class="container mx-auto">
      <div class="flex justify-center items-center h-30 mb-15">
        <img src="/src/components/icons////pokeball Background Removed.png" />
      </div>

      <!--Product Store-->
      <!-- Move Code to Components for use in store and search page-->
      <Product :products="productStore.list" :addToCart="addToCart"> </Product>
    </div>
    <div class="divider"></div>
  </UserLayout>
</template>
