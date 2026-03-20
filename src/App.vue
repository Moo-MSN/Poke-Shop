<script setup>
import { RouterView } from "vue-router";
import { onMounted } from "vue";

import { useCartStore } from "./stores/user/cart";
import { useProductStore } from "./stores/user/product";

const CartStore = useCartStore();
const productStore = useProductStore();

onMounted(async () => {
  CartStore.loadCart();
  await productStore.fetchProduct();
});
</script>

<template>
  <RouterView />
</template>
