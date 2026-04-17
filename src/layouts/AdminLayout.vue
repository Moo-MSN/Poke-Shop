<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";

import bars from "@/components/icons/bars.vue";

const route = useRoute();

// สร้าง page เพื่อทำการใช้ในการเรียกหน้า page
const pageData = [
  {
    name: "Dashboard",
    route: "/admin/dashboard",
  },
  {
    name: "Users",
    route: "/admin/users",
  },
  {
    name: "Products",
    route: "/admin/products",
  },
  {
    name: "Orders",
    route: "/admin/orders",
  },
  {
    name: "Logout",
    route: "/admin/login",
  },
];
//
const currentPath = ref("");
onMounted(() => {
  currentPath.value = route.path;
});
</script>

<template>
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content mx-4">
      <!-- Page content here -->
      <div class="lg:hidden">
        <label for="my-drawer-3" class="btn btn-ghost btn-square btn-xs fixed top-4 z-50 drawer-button">
          <!-- component Bars -->
          <bars></bars>
        </label>
      </div>
      <slot></slot>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>

      <!-- เพิ่ม padding-top เพื่อกัน icon ไม่ชน Admin -->
      <ul class="menu bg-base-200 min-h-full w-80 p-4 pt-12">
        <!-- Sidebar content here -->
        <li class="text-xl font-semibold">
          <div>Admin</div>
        </li>
        <li v-for="page in pageData">
          <RouterLink :to="page.route" :class="currentPath === page.route ? 'menu-active' : ''">
            {{ page.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
