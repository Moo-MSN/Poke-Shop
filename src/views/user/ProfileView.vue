<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
</script>

<template>
  <UserLayout>
    <div class="max-w-3xl mx-auto border border-base-200 shadow-xl p-8 my-4">
      <div class="text-2xl font-semibold">Your profile ต้องดึงข้อมูลจาก local ในหน้า register</div>
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center">
          <div class="avatar">
            <div class="w-24 rounded-full">
              <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
            </div>
          </div>
          <input type="file" class="file-input file-input-ghost file-input-sm mt-4" />
        </div>
      </div>
      <div class="divider"></div>
      <!-- รอดึงข้อมูลจาก loclastorage -->
      <div class="grid grid-cols-2">
        <div>
          <fieldset class="fieldset">
            <label class="font-semibold">First Name</label>
            <input type="text" class="input" placeholder="Type here" />
          </fieldset>
        </div>
        <div>
          <fieldset class="fieldset">
            <label class=" font-semibold">Last Name</label>
            <input type="text" class="input" placeholder="Type here" />
          </fieldset>
        </div>
        
      </div>
    </div>
  </UserLayout>
</template>
