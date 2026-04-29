<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

import UserLayout from "@/layouts/UserLayout.vue";
import { useUserStore } from "@/stores/user/user";

const userStore = useUserStore();
const route = useRoute();
const user = ref("");
const previewUrl = ref("");

onMounted(async () => {
  const userId = route.params.id; // ใช้ id จาก route params
  user.value = await userStore.getUserbyId(userId);
  // แสดง image profile ของ  user
  previewUrl.value = user.value?.imageurl;
});
</script>

<template>
  <UserLayout>
    <div class="max-w-3xl mx-auto border border-base-200 shadow-xl p-8 my-4">
      <div class="text-2xl font-semibold">Your profile</div>
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center">
          <div class="avatar">
            <div class="w-24 rounded-full">
              <!-- ถ้ามีรูปจาก DB จะใช้รูปนั้น ถ้าเปลี่ยนไฟล์ใหม่ก็จะ preview -->
              <img :src="previewUrl || '/src/components/icons/default-profile.png'" />
            </div>
          </div>
        </div>
      </div>
      <div class="divider"></div>
      <!-- รอดึงข้อมูลจาก loclastorage -->
      <div class="grid grid-cols-2">
        <div>
          <fieldset class="fieldset">
            <label class="text-base font-semibold">First Name</label>
            <div class="text-base">{{ user.firstname }}</div>
          </fieldset>
        </div>
        <div>
          <fieldset class="fieldset">
            <label class="text-base font-semibold">Last Name</label>
            <div class="text-base">{{ user.lastname }}</div>
          </fieldset>
        </div>
        <div>
          <fieldset class="fieldset">
            <label class="text-base font-semibold">E-mail</label>
            <div class="text-base">{{ user.email }}</div>
          </fieldset>
        </div>
        <div>
          <fieldset class="fieldset">
            <label class="text-base font-semibold">Date of Birth</label>
            <div class="text-base">{{ user.birthday }}</div>
          </fieldset>
        </div>
        <div>
          <fieldset class="fieldset">
            <label class="text-base font-semibold">Address</label>
            <div class="text-base">{{ user.address }}{{ user.zipcode }}</div>
          </fieldset>
        </div>
      </div>
      <div class="flex flex-col mt-5 mx-auto">
        <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Edit Your Profile</button>
      </div>
    </div>
  </UserLayout>
</template>
