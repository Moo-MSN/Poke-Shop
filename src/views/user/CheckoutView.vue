<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
import { RouterLink } from "vue-router";

import locationPin from "@/components/icons/location pin.vue";
import { useCartStore } from "@/stores/user/cart";

const CartStore = useCartStore();
</script>

<template>
  <UserLayout>
    <div class="container max-w-full sm:text-xs lg:text-base">
      <div class="divider"></div>
      <h1 class="font-semibold text-2xl ml-15">Cart | Checkout</h1>
      <div class="bg-base-300 rounded-box grid h-2 mt-5"></div>
    </div>

    <div class="container w-full mt-10 gap-20">
      <div class="flex ml-15">
        <locationPin class="mt-1.5 mr-3"> </locationPin>
        <div class="text text-xl font-semibold">Delivery Address</div>
      </div>

      <div class="flex mt-3 ml-20">
        <h1 class="font-semibold">
          Name:
          <br />
          Phone:
        </h1>

        <address class="ml-15">Address: รอดึงข้อมูลจาก localStorage หน้า Register</address>
      </div>
    </div>
    <div class="bg-base-300 rounded-box grid h-2 mt-5"></div>
    <div class="text-xl font-semibold mt-5 ml-12" v-if="CartStore.items.length === 0">Cart is Empty !!!</div>
    <div class="mt-8" v-else>
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
              <select v-model="item.quantity" class="select w-13" @change="changeQuantity($event, index)">
                <!--ทำการส่ง Quantity ไป เพื่อเปลี่ยนเป็น String-->
                <option v-for="quantity in [1, 2, 3, 4, 5]">{{ quantity }}</option>
              </select>
            </td>
            <td>{{ item.price * item.quantity }}</td>
            <td class="tab" @click="CartStore.removeItemInCart(index)">Delete</td>
          </tr>
        </tbody>
      </table>

      <div class="bg-base-300 rounded-box grid h-2 mt-5 w-full"></div>

      <div class="bg-orange-100 w-full p-10 justify-items-end">
        <div class="mr-2">
          <div class="flex align-middle justify-between">
            <div>Merchandise Subtotal :</div>
            <div>฿ {{ CartStore.summaryPrice }}</div>
          </div>
          <div class="flex align-middle justify-between">
            <div>Shipping Subtotal :</div>
            <div>฿ 0</div>
          </div>
          <div class="flex align-middle justify-between">
            <div>Total Payment :</div>
            <div class="text-orange-400">
              <b>฿ {{ CartStore.summaryPrice }}</b>
            </div>
          </div>
        </div>
        <div class="grid justify-end-safe mr-5">
          <RouterLink :to="{ name: 'success' }" class="btn btn-accent mt-4">Place Order</RouterLink>
        </div>
      </div>
    </div>
  </UserLayout>
</template>
