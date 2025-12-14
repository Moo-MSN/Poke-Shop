<script setup>
import { RouterView } from "vue-router";
import { onMounted } from "vue";

import { useCartStore } from "./stores/user/cart";

const CartStore = useCartStore();

onMounted(()=>{
  CartStore.loadCart()
})
</script>

<template>
  <RouterView />
</template>
