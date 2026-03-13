<script setup>
import { RouterLink, useRoute } from "vue-router";
import { onMounted, ref } from "vue";

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
    <div class="drawer-content">
      <!-- Page content here -->
      <div class="flex lg:hidden items-center justify-center h-screen">
        <label for="my-drawer-3" class="btn btn-xs drawer-button"> Open drawer </label>
      </div>
      <slot></slot>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-base-200 min-h-full w-80 p-4">
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
