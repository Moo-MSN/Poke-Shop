<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
import { RouterLink, useRouter } from "vue-router";

import locationPin from "@/components/icons/location pin.vue";
import { useCartStore } from "@/stores/user/cart";

const CartStore = useCartStore();

const payment = () => {
  CartStore.placeOrder()// รอใส่ userformData
  console.log(); // ต้องทำการสร้างข้อมูลที่อยู่ในหน้า Profile ก่อน เพราะเราจะทำการดึง userData มาประกอบกันก่อนส่งข้อมูลไปหน้า success
};
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
              {{ item.quantity }}
            </td>
            <td>{{ item.price * item.quantity }}</td>

            <RouterLink :to="{ name: 'cart' }" class="tab">Edit</RouterLink>
          </tr>
        </tbody>
      </table>

      <div class="bg-base-300 rounded-box grid h-2 mt-5 w-full"></div>
      <!-- กล่องสรุปอยู่ด้านขวา -->
      <div class="flex bg-orange-100 p-8 justify-end">
        <div>
          <div class="grid grid-cols-2 gap-y-2">
            <div>Merchandise Subtotal :</div>
            <div class="text-right">฿ {{ CartStore.summaryPrice }}</div>

            <div>Shipping Subtotal :</div>
            <div class="text-right">฿ 0</div>

            <div>Total Payment :</div>
            <div class="text-orange-400 text-right">
              <b>฿ {{ CartStore.summaryPrice }}</b>
            </div>
          </div>

          <div class="flex justify-end">
            <button class="btn btn-accent mt-4">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  </UserLayout>
</template>
