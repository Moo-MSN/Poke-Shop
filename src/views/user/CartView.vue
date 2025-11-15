<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
import { useProductStore } from "@/stores/user/Product";

const productStore = useProductStore();
</script>

<template>
  <UserLayout>
    <div class="container max-w-full">
      <div class="divider"></div>
      <h1 class="font-semibold text-3xl ml-20">Shopping Cart</h1>
      <div class="bg-base-300 rounded-box grid h-5 mt-5"></div>

      <div class="grid grid-cols-5 gap-4 justify-items-center-safe mt-3">
        <div>Name</div>
        <div>Unit Price</div>
        <div>Quantity</div>
        <div>Total Price</div>
        <div>Action</div>
      </div>
      <div class="bg-base-300 rounded-box grid h-3 mt-5"></div>

      <section class="justify-center-safe">
        <div class="relative grid grid-cols-5 justify-items-center-safe h-full mt-5 gap-4">
          <div>
            <div class="flex items-center gap-3">
              <div class="avatar">
                <div class="mask mask-squircle h-12 w-12">
                  <img src="https://img.daisyui.com/images/profile/demo/2@94.webp" alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div class="font-bold">Name: Hart Hagerty</div>
                <div class="text-sm opacity-50">About: United States</div>
              </div>
            </div>
          </div>

          <div>฿ 1000</div>
          <div>
            <select class="select">
              <option disabled selected="">Quantity</option>
              <option v-for="quantity in [1, 2, 3, 4, 5]">{{ quantity }}</option>
            </select>
          </div>
          <div>฿ 1000</div>
          <div @click="">Delete</div>
        </div>
      </section>
      <div class="card bg-base-300 rounded-box grid h-3 mt-5"></div>

      <div class="divider"></div>
      <div class="grid justify-end mr-10">
        <div class="text-xl">Summary Pirce: <b class="text-orange-600">฿ 1,000</b></div>
        <RouterLink :to="{ name: 'checkout' }" class="btn btn-accent mt-4">Check Out</RouterLink>
      </div>
    </div>
  </UserLayout>
</template>
