<script setup>
import AdminLayout from "@/layouts/AdminLayout.vue";
import { computed, onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

import { useAdminProductStore } from "@/stores/admin/product";
import { useEventStore } from "@/stores/event";

const adminProductStore = useAdminProductStore();
// Event Toast
const eventStore = useEventStore();

// ประการ productId เพื่อรับค่า id จาก params เข้าไปแทนค่าตรง -1
const productId = ref(-1);

const router = useRouter();
// เพื่อใช้ params
const route = useRoute();

// สร้าง function "mode" เพื่อใช้ในการเปลี่ยนหน้า Edit or Add
const mode = computed(() => {
  return productId.value !== -1 ? "Edit" : "Add";
});
// ใช้ reactive เพื่อเก็บค่า
const selectedProduct = reactive({
  name: "",
  imageUrl: "",
  price: "",
  quantity: "",
  about: "",
  status: "",
});
// ตรวจสอบ productId ว่ามีค่าหรือไม่
onMounted(() => {
  // ตรวจสอบว่าใน URL มี parameter id หรือไม่
  if (route.params.id) {
    // ถ้ามี id กำหนดค่า productId ให้เป็น id ที่ได้จาก route จากเดิมเป็น -1
    productId.value = parseInt(route.params.id);
    //ดึงข้อมูลสินค้าจาก store ตาม id ที่ได้มา แล้วนำไปใส่ใน selectedProduct เพื่อให้ form แสดงข้อมูลของสินค้านั้นสำหรับการแก้ไข
    Object.assign(selectedProduct, adminProductStore.getProduct(productId.value));
  }
});

// สร้าง updateProduct()

const updateProduct = () => {
  if (productId.value !== -1) {
    // ถ้า productId.value ไม่เท่ากับ -1 จะเป็น
    // Edit mode
    adminProductStore.updateProduct(productId.value, selectedProduct);
    // alert("Update product completed");

    // use event Toast
    eventStore.popupMessage("info", "Update Product Successful!");
    router.push({ name: "admin-products" });
  } else {
    // ถ้า productId.value เท่ากับ -1 จะเป็น
    // Create or Add mode
    adminProductStore.addProduct(selectedProduct);
    // alert("Add product completed");

    // use event Toast
    eventStore.popupMessage("success", "Update Product Successful!");
    router.push({ name: "admin-products" });
  }
};
</script>

<template>
  <AdminLayout>
    <div class="shadow-2xl p-8 mt-5">
      <div class="text-2xl font-semibold">{{ mode }} Product</div>
      <div class="divider"></div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Input Name -->
        <div>
          <fieldset class="fieldset mx-auto w-full max-w-sm">
            <legend class="fieldset-legend">Name</legend>
            <input type="text" class="input" placeholder="Type here" v-model="selectedProduct.name" />
          </fieldset>
        </div>
        <!-- Input Image -->
        <div>
          <fieldset class="fieldset mx-auto w-full max-w-sm">
            <legend class="fieldset-legend">Image</legend>
            <input type="text" class="input" placeholder="Type here" v-model="selectedProduct.imageUrl" />
          </fieldset>
        </div>
        <!-- Input Price -->
        <div>
          <fieldset class="fieldset mx-auto w-full max-w-sm">
            <legend class="fieldset-legend">Price</legend>
            <input type="text" class="input" placeholder="Type here" v-model="selectedProduct.price" />
          </fieldset>
        </div>
        <!-- Input Quantity -->
        <div>
          <fieldset class="fieldset mx-auto w-full max-w-sm">
            <legend class="fieldset-legend">Quantity</legend>
            <input type="text" class="input" placeholder="Type here" v-model="selectedProduct.quantity" />
          </fieldset>
        </div>
        <!-- Input About -->
        <div>
          <fieldset class="fieldset mx-auto w-full max-w-sm">
            <legend class="fieldset-legend">About</legend>
            <input type="text" class="input" placeholder="Type here" v-model="selectedProduct.about" />
          </fieldset>
        </div>
      </div>
      <div class="divider"></div>
      <div>
        <fieldset class="fieldset-legend">
          <legend class="fieldset-legend">Status</legend>
          <select v-model="selectedProduct.status" class="select">
            <option disabled selected>Pick a status</option>
            <option value="open">Open</option>
            <option value="close">Close</option>
          </select>
        </fieldset>
        <div class="divider"></div>
        <div class="flex justify-end">
          <RouterLink :to="{ name: 'admin-products' }" class="btn btn-ghost">BACK</RouterLink>
          <button class="btn btn-neutral" @click="updateProduct()">{{ mode }}</button>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>
