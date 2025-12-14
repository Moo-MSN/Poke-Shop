<script setup>
import { ref, onMounted, computed, watch } from "vue";
import { useRoute,useRouter } from "vue-router";

import UserLayout from "@/layouts/UserLayout.vue";
import Product from "@/components/Product.vue";

import { useProductStore } from "@/stores/user/Product";
import { useCartStore } from "@/stores/user/cart";

const searchText = ref("");
const router = useRouter();
const CartStore = useCartStore();

const route = useRoute();
const productStore = useProductStore();

watch(
  () => route.query.q,
  (newSearchText) => {
    searchText.value = newSearchText;
  },
  { immediate: true }
); // immediate: ture เพื่อใช้ในการรันครั้งแรกออกมา

const filterproducts = computed(() => {
  return productStore.filterProducts(searchText.value);
});

const addToCart = (product) =>{
  CartStore.addToCart(product)
  router.push({name:'cart'})
}
</script>

<template>
  <UserLayout>
    <div class="container mx-auto">
      <div class="m-4 mt-10 text-2xl font-semibold">
        Search Result : <b>{{ searchText }}</b>
      </div>
      <Product class="mt-10" :products="filterproducts" :addToCart="addToCart"> </Product>
    </div>
  </UserLayout>
</template>
