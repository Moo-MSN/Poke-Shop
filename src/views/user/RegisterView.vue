<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
import { reactive, ref } from "vue";

import { useUserStore } from "@/stores/user/user";
import { useEventStore } from "@/stores/event";
import router from "@/router";

const userStore = useUserStore();
const eventStore = useEventStore();

const userData = reactive({
  imageUrl: null,
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  address: "",
  birthday: "",
  zipcode: "",
});

// ref สำหรับ preview
const previewUrl = ref(null);

// สร้าง state สำหรับ loading
const isLoading = ref(false);

// สร้าง function ในการ handleFile image
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    userData.imageUrl = file; // เก็บ file ลง reactive object
    previewUrl.value = URL.createObjectURL(file); // สร้าง preview url
    console.log("เลือกไฟล์", file.name); // เช่น profile.png
  }
};

// สร้าง function ในการเก็บ value
const register = async () => {
  if (!userData.firstname || !userData.lastname || !userData.email || !userData.password || !userData.address || !userData.birthday || !userData.zipcode) {
    eventStore.popupMessage("error", "กรุณากรอกข้อมูลให้ครบถ้วน");
    return;
  }

  try {
    // เพิ่ม state เริ่ม loading
    isLoading.value = true;

    const formData = new FormData();
    formData.append("firstname", userData.firstname);
    formData.append("lastname", userData.lastname);
    formData.append("email", userData.email);
    formData.append("password", userData.password);
    formData.append("address", userData.address);
    formData.append("birthday", userData.birthday);
    formData.append("zipcode", userData.zipcode);
    // เช็คก่อนว่ามี file image จริง
    if (userData.imageUrl) {
      formData.append("image", userData.imageUrl);
    } else {
      eventStore.popupMessage("error", "กรุณาใส่รูปภาพ Profile");
    }

    console.log(userData);
    // เรียกใช้ registerUser ใน store
    const resule = await userStore.registerUser(formData);

    if (resule.success) {
      // ปิด loading เมื่อ บันทึกลง DB แล้วทำการ setTimeout เพื่่อให้ User เห็นว่ากำลังทำการบันทึกข้อมูล
      setTimeout(() => {
        isLoading.value = false;
        router.push({ name: "login" }).then(() => {
          window.location.reload(); // ทำการ load หน้าเว็ปใหม่
        });
      }, 3200);

      eventStore.popupMessage("info", "Register success!");
    } else {
      // ปิด loading ถ้า error
      isLoading.value = false;
      eventStore.popupMessage("error", "Register failed!");
    }
  } catch (err) {
    console.error("Register failed", err);
  }
};
</script>

<template>
  <UserLayout>
    <form @submit.prevent="register" class="max-w-3xl mx-auto border border-base-200 shadow-xl p-8 my-4">
      <div class="flex text-2xl font-semibold justify-center p-4">Register Form</div>
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center">
          <div class="avatar">
            <div class="w-24 rounded-full">
              <!-- รอใส่รูปจาก DB -->
              <!-- แสดง preview ถ้ามี file ใช้ URL.createObjectURL(userData.imageUrl) เพื่อแสดงรูปที่เลือก -->
              <img v-if="previewUrl" :src="previewUrl" />
              <img v-else src="/src/components/icons/Pokemon avata.png" />
            </div>
          </div>
          <!--รอใส่ imageUrl-->
          <input type="file" class="file-input file-input-ghost file-input-sm mt-4" @change="handleFileUpload($event)" />
        </div>
      </div>
      <div class="divider"></div>
      <div class="grid grid-cols-2 max-w-2xl mx-auto gap-4">
        <!-- First Name -->
        <div>
          <fieldset class="fieldset">
            <label class="font-semibold">First Name</label>
            <input
              v-model="userData.firstname"
              type="text"
              class="input validator"
              required
              placeholder="First Name"
              pattern="[A-Za-z][A-Za-z0-9\-]*"
              minlength="3"
              maxlength="30"
              title="Only letters, numbers or dash"
            />
          </fieldset>
        </div>
        <!-- Last Name -->
        <div>
          <fieldset class="fieldset">
            <label class="font-semibold">Last Name</label>
            <input
              v-model="userData.lastname"
              type="text"
              class="input validator"
              required
              placeholder="First Name"
              pattern="[A-Za-z][A-Za-z0-9\-]*"
              minlength="3"
              maxlength="30"
              title="Only letters, numbers or dash"
            />
          </fieldset>
        </div>
        <!-- Email -->
        <div>
          <fieldset class="fieldset">
            <label class="font-semibold">E-Mail</label>
            <input v-model="userData.email" type="email" class="input validator" required placeholder="mail@site.com" />
          </fieldset>
        </div>
        <!-- Password -->
        <div>
          <fieldset class="fieldset">
            <label class="font-semibold">Password</label>
            <input v-model="userData.password" type="password" class="input" required placeholder="Password" />
          </fieldset>
        </div>
        <!--Date of birth-->
        <div>
          <fieldset class="fieldset">
            <label class="font-semibold">Date of Birth</label>
            <input v-model="userData.birthday" type="date" class="input" />
          </fieldset>
        </div>
        <!-- Address -->
        <div>
          <fieldset class="fieldset">
            <label class="font-semibold">Address</label>
            <input v-model="userData.address" type="text" class="input" />
          </fieldset>
        </div>
        <!-- Zip code-->
        <div>
          <fieldset class="fieldset">
            <label class="font-semibold">Zip Code</label>
            <input v-model="userData.zipcode" type="text" class="input" />
          </fieldset>
        </div>
      </div>

      <!-- Register Button -->
      <div class="flex flex-col mt-5 mx-auto max-w-2xs">
        <button type="submit" class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl" :disabled="isLoading">
          <span v-if="isLoading" class="loading loading-dots loading-lg"></span>
          <span v-else>Register</span>
        </button>
      </div>
    </form>
  </UserLayout>
</template>
