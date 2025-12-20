<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
import { RouterLink } from "vue-router";

import { useCartStore } from "@/stores/user/cart";

const CartStore = useCartStore();

const changeQuantity = (event, index) => {
  const newQuantity = parseInt(event.target.value);
  CartStore.updateQuantity(index, newQuantity); // ทำการแปลง String to Numbers
};
</script>

<template>
  <UserLayout>
    <section class="container max-w-full sm:text-xs lg:text-base">
      <div class="divider"></div>
      <h1 class="font-semibold text-2xl ml-20">Shopping Cart</h1>
      <div class="bg-base-300 rounded-box grid h-5 mt-5"></div>

      <div class="text-xl font-semibold mt-5 ml-12" v-if="CartStore.items.length === 0">Cart is Empty !!!</div>

      <div class="m-10" v-else >
        <table class="w-full table-auto text-center">
          <!-- head -->
          <thead class="text-sm font-normal">
            <tr>
              <th>Product image</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody class="text text-sm">
            <!-- row 1 -->
            <tr v-for="(item, index) in CartStore.items">
              <td class="avatar w-24 rounded mt-3">
                <img :src="item.imageUrl" />
              </td>
              <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
              <td>
                <select v-model="item.quantity" class="select w-15" @change="changeQuantity($event, index)">
                  <!--ทำการส่ง Quantity ไป เพื่อเปลี่ยนเป็น String-->
                  <option v-for="quantity in [1, 2, 3, 4, 5]">{{ quantity }}</option>
                </select>
              </td>
              <td>{{ item.price * item.quantity }}</td>
              <td class="tab" @click="CartStore.removeItemInCart(index)">Delete</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="divider"></div>

      <div class="card bg-base-300 rounded-box grid h-3 mt-5"></div>

      <div class="divider"></div>
      <div class="grid justify-end mr-10">
        <div class="text-xl">
          Summary Pirce: <b class="text-orange-600">฿ {{ CartStore.summaryPrice }}</b>
        </div>
        <RouterLink :to="{ name: 'checkout' }" class="btn btn-accent mt-4">Check Out</RouterLink>
      </div>

      
    </section>
    
  </UserLayout>
</template>
