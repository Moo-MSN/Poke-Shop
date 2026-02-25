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
            <label class="text-base font-semibold">First Name</label>
            <div class="text-base">รอดึงจาก db</div>
          </fieldset>
        </div>
        <div>
          <fieldset class="fieldset">
            <label class="text-base font-semibold">Last Name</label>
            <div class="text-base">รอดึงจาก db</div>
          </fieldset>
        </div>
         <div>
          <fieldset class="fieldset">
            <label class="text-base font-semibold">E-mail</label>
            <div class="text-base">รอดึงจาก db</div>
          </fieldset>
        </div>
         <div>
          <fieldset class="fieldset">
            <label class="text-base font-semibold">Date of Birth</label>
            <div class="text-base">รอดึงจาก db</div>
          </fieldset>
        </div>
         <div>
          <fieldset class="fieldset">
            <label class="text-base font-semibold">Address</label>
            <div class="text-base">รอดึงจาก db</div>
          </fieldset>
        </div>
      </div>
      <div class="flex flex-col mt-5 mx-auto">
        <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl ">Edit Your Profile</button>
      </div>
    </div>
  </UserLayout>
</template>
