<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

defineProps({
    products: Array,
    addToCart:Function
})

</script>

<template>
  <section class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 m-2">
    <div v-for="product in products" class="card bg-base-100 w-auto shadow-sm">
      <figure>
        <img :src="product.imageUrl" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Poké : {{ product.name }}</h2>
        <p>{{ product.about }}</p>
        <p>price : {{ product.price }} Poké</p>
        <div class="card-actions justify-end">
          <RouterLink :to="{name: 'cart'}" class="btn btn-primary" @click="addToCart(product)" >Add to cart</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
