import { createRouter, createWebHistory } from "vue-router";
import CartView from "@/views/user/CartView.vue";
import CheckoutView from "@/views/user/CheckoutView.vue";
import HomeView from "@/views/user/HomeView.vue";
import ProfileView from "@/views/user/ProfileView.vue";
import SearchView from "@/views/user/SearchView.vue";
import StoreView from "@/views/user/StoreView.vue";
import SuccessView from "@/views/user/SuccessView.vue";
import RegisterView from "@/views/user/RegisterView.vue";
import UserLoginViwe from "@/views/user/User LoginViwe.vue";

// Admin site //
import AdminLoginViwe from "@/views/admin/Admin LoginViwe.vue";
import AdminDashboard from "@/views/admin/DashboardViwe.vue";

import AdminUserList from "@/views/admin/user/ListViwe.vue";
import AdminUserUpdate from "@/views/admin/user/UpdateViwe.vue";

import AdminProductList from "@/views/admin/product/ListViwe.vue";
import AdminProductUpdate from "@/views/admin/product/UpdateViwe.vue";

import AdminOrderDetail from "@/views/admin/order/DetailViwe.vue";
import AdminOrderList from "@/views/admin/order/ListViwe.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: CheckoutView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/search",
      name: "search",
      component: SearchView,
    },
    {
      path: "/success",
      name: "success",
      component: SuccessView,
    },
    {
      path: "/store",
      name: "store",
      component: StoreView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/login",
      name: "login",
      component: UserLoginViwe,
    },

    // Admin site //
    {
      path: "/admin/login",
      name: "admin-login",
      component: AdminLoginViwe,
    },
    {
      path: "/admin/dashboard",
      name: "admin-dashboard",
      component: AdminDashboard,
    },
    // User
    {
      path: "/admin/users",
      name: "admin-users",
      component: AdminUserList,
    },
    {
      path: "/admin/users/update/:id",
      name: "admin-users-update",
      component: AdminUserUpdate,
    },
    // product
    {
      path: "/admin/products",
      name: "admin-products",
      component: AdminProductList,
    },
    {
      // เราเพิ่มขึ้นมาเพื่อทำการสร้าง Product ใหม่ถ้ามีสินค้าใหม่
      path: "/admin/products/create",
      name: "admin-products-create",
      component: AdminProductUpdate,
    },

    {
      path: "/admin/products/update/:id",
      name: "admin-products-update",
      component: AdminProductUpdate,
    },
    // order
    {
      path: "/admin/orders",
      name: "admin-orders",
      component: AdminOrderList,
    },
    {
      path: "/admin/orders/detail/:id",
      name: "admin-orders-detail",
      component: AdminOrderDetail,
    },
  ],
});

export default router;
