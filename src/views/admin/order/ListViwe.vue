<script setup>
import { useAdminOrderStore } from "@/stores/admin/order";

import AdminLayout from "@/layouts/AdminLayout.vue";
import Table from "@/components/Table.vue";

const adminOrderStore = useAdminOrderStore();
</script>

<template>
  <AdminLayout>
    <div class="flex my-10 items-center justify-between">
      <div class="text-2xl font-semibold">Order List</div>
    </div>
    <div class="divider"></div>
    <Table :Headers="['Customer Name', 'Price', 'Status', 'Updated At', 'Action']"> 
      <!-- row 1 --><!-- index ใช้ระบุตำแหน่งข้อมูลในการแก้ไขหรือลบ product --> 
       <tr class="text text-center" v-for="order,index in adminOrderStore.list">
        <th>{{ order.customerName }}</th>
        <td>{{ order.totalPrice }}</td>
        <td>{{ order.status }}</td>
        <td>{{ order.updatedAt }}</td>
        <td>
          <RouterLink class="btn" :to="{name:'admin-orders-detail',params:{id : index}}">
            SEE DETAIL
          </RouterLink>
        </td>
       </tr>
      </Table>
  </AdminLayout>
</template>
