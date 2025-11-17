<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
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

    <div class="container max-w-full mt-10 gap-20">
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

      <div class="bg-base-300 rounded-box grid h-2 mt-5"></div>

      <div class="grid grid-cols-4 ml-15 mt-5 items-center gap-4 justify-items-center">
        <div class="text text-2xl">Products Ordered</div>
        <div>Unit Price</div>
        <div>Amount</div>
        <div>Item Subtotal</div>
        <div>
          <div class="avatar" v-for="item in CartStore.items">
            <div class="mask mask-squircle h-12 w-12">
              <img :src="item.imageUrl" />
            </div>
          </div>
          Product Name:
        </div>
        <div>฿ 1000</div>
        <div>1</div>
        <div>฿ 1100</div>
      </div>
      <div class="bg-base-300 rounded-box grid h-2 mt-5"></div>

      <div class="bg-orange-100 h-full p-10 justify-items-end">
        
        <div  class="mr-2">
          <div class="flex align-middle justify-between">
            <div class="mr-5">Merchandise Subtotal :</div>
            <div>฿ 1100</div>
          </div>
          <div class="flex align-middle justify-between">
            <div>Shipping Subtotal :</div>
            <div>฿ 0</div>
          </div>
          <div class="flex align-middle justify-between">
            <div>Total Payment :</div>
            <div class="text-orange-400"><b>฿ 1100</b></div>
          </div>
        </div>
      </div>
      <div class="grid justify-end-safe mr-5">

        <RouterLink :to="{ name: '' }" class="btn btn-accent mt-4">Place Order</RouterLink>
      </div>
      <div class="divider"></div>
    </div>
  </UserLayout>
</template>
