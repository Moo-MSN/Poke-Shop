<!-- สร้าง Tabel ไว้ใช้กับ back office -->
<script setup>
import { defineProps } from "vue";

defineProps({
  Headers: Array,
});
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table">
      <!-- head -->
      <thead>
        <tr class="text text-center">
          <th v-for="Header in Headers">{{ Header }}</th>
        </tr>
      </thead>
      <tbody>
        <slot></slot>
      </tbody>
    </table>
  </div>
</template>
