<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <UserLayout>
    <div class="flex h-auto">
      <!-- ซ้าย: รูป -->
      <div class="hidden md:flex w-1/2 items-center justify-center bg-gray-100">
        <img src="/src/components/icons/Pokemon Home.png" class="max-w-full h-auto" />
      </div>

      <!-- ขวา: ฟอร์ม -->
      <div class="w-full md:w-1/2 flex items-center justify-center bg-gray-100">
        <div class="max-w-md w-full p-6 bg-white shadow-md rounded">
          <h2 class="text-2xl font-bold mb-4">Login รอทำ logic ฝั่ง backend </h2>
          <form @submit.prevent="handleLogin">
            <input v-model="username" type="text" placeholder="Username" class="input input-bordered w-full mb-3" />
            <input v-model="password" type="password" placeholder="Password" class="input input-bordered w-full mb-3" />
            <button type="submit" class="btn btn-primary w-full">Login</button>
          </form>
          <div class="divider border-gray-300 text-gray-300  ">OR</div>
          <RouterLink :to="{name:'register'}" class="flex items-center justify-center">Register</RouterLink>
        </div>
      </div>
    </div>
  </UserLayout>
</template>
