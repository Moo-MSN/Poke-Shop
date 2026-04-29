import { defineStore } from "pinia";
import axios from "axios";

// BaseUrl to DB
const BASE_URL = "http://localhost:8000";

export const useUserStore = defineStore("users", {
  state: () => ({
    list: [],
  }),
  actions: {
    // ใช้สำหรับ register user ใหม่
    async registerUser(formData) {
      try {
        const res = await axios.post(`${BASE_URL}/users`, formData);
        console.log("User registered", res.data);
        this.list.push(res.data);
        return { success: true, data: res.data }; // ส่ง success กลับ ถ้า push res.data สำเร็จ
      } catch (err) {
        console.error("Error registering user", err);
        return { success: false, error: err };
      }
    },

    // ดึง user จาก list โดย id
    async getUserbyId(id) {
      try {
        const res = await axios.get(`${BASE_URL}/users/${id}`);
        return res.data; // จะได้ user object กลับมา
      } catch (err) {
        console.log("Error fetching user by id", err);
        return null;
      }
    },

    // ใช้สำหรับ update user by id
    async updateUser(id, updatedData) {
      try {
        const res = await axios.put(`${BASE_URL}/users/${id}`, updatedData);
        console.log("User updated", res.data);

        // อัพเดตใน list โดยการหา id
        const index = this.list.findIndex((u) => u.id === id);
        // check index
        if (index !== -1) {
          this.list[index] = res.data;
        }
      } catch (err) {
        console.error("Error updaeting user", err);
      }
    },
  },
});
