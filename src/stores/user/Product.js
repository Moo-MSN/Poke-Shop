import { defineStore } from "pinia";
import axios from "axios";

// BaseUrl to DB
const BASE_URL = "http://localhost:8000";

export const useProductStore = defineStore("product", {
  state: () => ({
    list: [],
  }),
  actions: {
    async fetchProduct() {
      try {
        const res = await axios.get(`${BASE_URL}/products`);
        //console.log("products", res.data);
        this.list = res.data;
      } catch (err) {
        console.error("Error fethcing products", err);
      }
    },

    filterProducts(searchText) {
      return this.list.filter((Product) => Product.name.includes(searchText)); // เป็นการ loop product แต่ละตัวที่มี name ตรงกับคำ search ออกมาแสดง
    },
  },
});
