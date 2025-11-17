<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
import { useCartStore } from "@/stores/user/cart";

const CartStore = useCartStore();
</script>

<template>
  <UserLayout>
    <section class="container max-w-full sm:text-xs lg:text-base">
      <div class="divider"></div>
      <h1 class="font-semibold text-2xl ml-20">Shopping Cart</h1>
      <div class="bg-base-300 rounded-box grid h-5 mt-5"></div>

      <div class="grid grid-cols-5 gap-4 justify-items-center-safe mt-3 ml-2">
        <div>Name</div>
        <div>Unit Price</div>
        <div>Quantity</div>
        <div>Total Price</div>
        <div>Action</div>
      </div>
      <div class="bg-base-300 rounded-box grid h-3 mt-5"></div>

      <section class="justify-center-safe" v-for="(item,index) in CartStore.items">
        <div class="relative grid grid-cols-5 justify-items-center-safe h-full mt-5 gap-4 ml-2">
          <div>
            <div class="flex items-center gap-3">
              <div class="avatar">
                <div class="mask mask-squircle h-12 w-12">
                  <img :src="item.imageUrl" alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div class="font-bold">{{ item.name }}</div>
                <div class="text-sm opacity-50">{{ item.about }}</div>
              </div>
            </div>
          </div>

          <div>฿ {{ item.price }}</div>
          <div>
            <select class="select sm:select-xs xl:select" v-model="item.quantity">
              <option disabled selected="">Quantity</option>
              <option v-for="quantity in [1, 2, 3, 4, 5]">{{ quantity }}</option>
            </select>
          </div>
          <div>฿ 1000</div>
          <div class="tab tabs-sm"  @click ="CartStore.removeItemInCart(index)">Delete</div>
        </div>
        <div class="divider"></div>
      </section>
      <div class="card bg-base-300 rounded-box grid h-3 mt-5"></div>

      <div class="divider"></div>
      <div class="grid justify-end mr-10">
        <div class="text-xl">Summary Pirce: <b class="text-orange-600">฿ 1,000</b></div>
        <RouterLink :to="{ name: 'checkout' }" class="btn btn-accent mt-4">Check Out</RouterLink>
      </div>
    </section>
  </UserLayout>
</template>
