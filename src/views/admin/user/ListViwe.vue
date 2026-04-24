<script setup>
import { useAdminUserStore } from "@/stores/admin/user";

import AdminLayout from "@/layouts/AdminLayout.vue";

import Table from "@/components/Table.vue";

const adminUserStore = useAdminUserStore();

// สร้าง function ในการ Disable, Enable ของ user
const toggleStatus = (index) => {
  const updateUser = adminUserStore.list[index];
  // if else 1 บรรทัด หมายความว่า updateUser > เป็น active แต่ถ้าไม่ active ให้แสดง inactive
  updateUser.status = updateUser.status === "active" ? "inactive" : "active";
  adminUserStore.updateUser(index, updateUser);
};
</script>

<template>
  <AdminLayout>
    <div class="flex my-10 items-center justify-between">
      <div class="text-2xl font-semibold">Users</div>
    </div>
    <Table :Headers="['Name', 'Role', 'Status', 'Updated At', 'Action']">
      <!-- row 1 --><!-- index ใช้ระบุตำแหน่งข้อมูลในการแก้ไขหรือลบ product -->
      <tr v-for="(user, index) in adminUserStore.list" class="text text-center">
        <th>{{ user.name }}</th>
        <td>{{ user.role }}</td>
        <td>{{ user.status }}</td>
        <td>{{ user.updatedAt }}</td>
        <!-- Action Button -->
        <td>
          <RouterLink :to="{ name: 'admin-users-update', params: { id: index } }" class="btn btn-ghost"> Edit </RouterLink>
          <button class="btn btn-ghost mx-2" @click="toggleStatus(index)">
            <!-- if else 1 บรรทัด หมายความว่า ถ้า status > active ให้แสดง Disable แต่ถ้าไม่ ให้แสดง Enable -->
            {{ user.status === "active" ? "Disable" : "Enable" }}
          </button>
        </td>
      </tr>
    </Table>
  </AdminLayout>
</template>
