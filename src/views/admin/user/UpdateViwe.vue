<script setup>
import AdminLayout from "@/layouts/AdminLayout.vue";
import { useRoute, useRouter } from "vue-router";
import { ref, reactive, onMounted } from "vue";

import { useAdminUserStore } from "@/stores/admin/user";

const adminUserStore = useAdminUserStore();
const route = useRoute();
const router = useRouter();

const userId = ref(-1);
const userData = reactive({});

// ตรวจสอบ productId ว่ามีค่าหรือไม่
onMounted(() => {
  // ตรวจสอบว่าใน URL มี parameter id หรือไม่
  if (route.params.id) {
    // ถ้ามี id กำหนดค่า userId ให้เป็น id ที่ได้จาก route จากเดิมเป็น -1
    userId.value = parseInt(route.params.id);
    //ดึงข้อมูลสินค้าจาก store ตาม id ที่ได้มา แล้วนำไปใส่ใน selectedProduct เพื่อให้ form แสดงข้อมูลของสินค้านั้นสำหรับการแก้ไข
    Object.assign(userData, adminUserStore.getUser(userId.value));
  }
});

// สร้าง updateUser()
const updateUser = () => {
  if (userId.value !== -1) {
    // ถ้า userId.value ไม่เท่ากับ -1 จะเป็น
    adminUserStore.updateUser(userId.value, userData);
    // console.log(userData)
    alert("Update User Completed");
    router.push({ name: "admin-users" });
  }
};
</script>

<template>
  <AdminLayout>
    <div class="shadow-2xl p-8 mt-5">
      <!-- ใส่ +1 เพื่อให้แสดง id เริ่มจาก 1 เพื่อกันสับสน แต่ถ้าต่อ DB อาจจะดึงเป็น id ที่รันจาก DB -->
      <div class="text-2xl font-semibold">Updete User id: {{ userId+1}}</div>
      <div class="divider"></div>
      <div class="grid grid-cols-1 gap-6">
        <!-- Name -->
        <div>
          <fieldset class="fieldset mx-auto w-full max-w-sm">
            <legend class="fieldset-legend">Name</legend>
            <input type="text" class="input" v-model="userData.name" />
          </fieldset>
        </div>
        <!-- Role -->
        <div>
          <fieldset class="fieldset mx-auto w-full max-w-sm">
            <legend class="fieldset-legend">Role</legend>
            <select class="select" v-model="userData.role">
              <option disabled selected>Select Role</option>
              <option value="admin">Admin</option>
              <option value="moderator">Moderator</option>
              <option value="member">Member</option>
            </select>
          </fieldset>
        </div>
        <!-- Status -->
        <div>
          <fieldset class="fieldset mx-auto w-full max-w-sm">
            <legend class="fieldset-legend">Status</legend>
            <select class="select" v-model="userData.status">
              <option disabled selected>Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </fieldset>
        </div>
      </div>
      <div class="divider"></div>
      <div>
        <div class="flex justify-end">
          <RouterLink :to="{ name: 'admin-users' }" class="btn btn-ghost">BACK</RouterLink>
          <button class="btn btn-neutral" @click="updateUser()">Update</button>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>
