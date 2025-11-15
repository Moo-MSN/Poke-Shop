<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
</script>

<template>
  <UserLayout>
    <div class="hero bg-base-200 min-h ">
      <div class="hero-center">
        <img src="/src/components/icons/pokemon Home.png" />
      </div>
      <div> 
        <RouterLink :to="{name : 'store'}" class=" btn btn-primary mt-75 md:mt-120  font-bold">Go To Store !</RouterLink>
      </div>
    </div>
  </UserLayout>
</template>
