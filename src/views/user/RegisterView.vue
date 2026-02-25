<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
import { reactive, onMounted } from "vue";

const userData = reactive({
  imageUrl: "",
  firstname: "",
  lastname: "",
  email: "",
  address: "",
  birthday: "",
  zipcode: "",
});

// สร้าง function ในการเก็บ value
const register = () => {
  console.log("users Data",userData)
};
</script>

<template>
  <UserLayout>
    <div class="max-w-3xl mx-auto border border-base-200 shadow-xl p-8 my-4">
      <div class="flex text-2xl font-semibold justify-center p-4">Register Form</div>
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center">
          <div class="avatar">
            <div class="w-24 rounded-full">
              <!-- รอใส่รูปจาก DB -->
              <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
            </div>
          </div>
          <!--รอใส่ imageUrl-->
          <input type="file" class="file-input file-input-ghost file-input-sm mt-4" />
        </div>
      </div>
      <div class="divider"></div>
      <div class="grid grid-cols-2 max-w-2xl mx-auto gap-4">
        <!-- Name -->
        <div>
          <fieldset class="fieldset">
            <label class="font-semibold">First Name</label>
            <input v-model="userData.firstname" type="text" class="input" />
          </fieldset>
        </div>
        <div>
          <fieldset class="fieldset">
            <label class="font-semibold">Last Name</label>
            <input v-model="userData.lastname" type="text" class="input" />
          </fieldset>
        </div>
        <!-- Email -->
        <div>
          <fieldset class="fieldset">
            <label class="font-semibold">E-Mail</label>
            <input v-model="userData.email" type="text" class="input" />
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
      <div class="flex flex-col mt-5 mx-auto max-w-2xs">
        <button class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl" @click="register()">Register</button>
      </div>
    </div>
  </UserLayout>
</template>
