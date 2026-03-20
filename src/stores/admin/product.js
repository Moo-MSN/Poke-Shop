import { defineStore } from "pinia";
import axios from "axios";
import { Update } from "vite";

// BaseUrl to DB
const BASE_URL = "http://localhost:8000";

export const useAdminProductStore = defineStore("product", {
  state: () => ({
    list: [
      {
        name: "test",
        imageUrl: "123",
        price: "111",
        quantity: "20",
        remainquantity: "11",
        status: "open",
        UpdatedAt: new Date().toLocaleString(),
      },
    ],
  }),
  actions: {
    async loadProduct() {
      try {
        const res = await axios.get(`${BASE_URL}/products`);
        if (res) {
          this.list = res.data;
        }
      } catch (err) {
        console.error("Error fethcing products", err);
      }
    },
    // getProduct ต้องใส่ index ด้วยเพื่อทำการระบุตำแหน่งของ product แต่ละตัว
    async getProduct(index) {
      try {
        // ตรวจสอบว่ามี product ใน list
        if (this.list.length === 0) {
          await this.loadProduct(); // load ก่อนถ้ายังไม่มี
        }
        // ถ้ามี คืนค่าตาม index ที่ส่งมา
        return this.list[index];
      } catch (err) {
        console.error("Error fethcing products", err);
      }
    },
    async addProduct(productData) {
      try {
        // กำหนดให้ quantity = remainquantity เมื่อทำการ update จำนวนสินค้า
        productData.remainquantity = productData.quantity;
        productData.UpdatedAt = new Date().toLocaleString();

        // async กับ DB
        const res = await axios.post(`${BASE_URL}/products`, productData);
        this.list.push(res.data);
      } catch (err) {
        console.error("Error Adding products", err);
      }
    },
    async UpdateProduct(index, productData) {
      try {
        // ใส่ field Data ที่ต้องการ update
        this.list[index].name = productData.name;
        this.list[index].imageUrl = productData.imageUrl;
        this.list[index].price = productData.price;
        this.list[index].quantity = productData.quantity;
        this.list[index].remainquantity = productData.remainquantity;
        this.list[index].UpdatedAt = new Date().toLocaleString();

        // ส่งไป backend โดยใช้ id ของ product
        const res = await axios.put(`${BASE_URL}/products/${this.list[index].id}`, productData);

        // อัปเดต state ด้วยข้อมูลที่ backend ส่งกลับ
        this.list[index] = res.data;
      } catch (err) {
        console.error("Error Updeting products", err);
      }
    },
    async removeProduct(index) {
      try {
        // ดึง id ของ product ที่จะลบ
        const productId = this.list[index].id;

        // เรียก API Delete ไป DB
        const res = await axios.delete(`${BASE_URL}/products/${productId}`);

        // ลบออกจาก Frontend
        this.list.splice(index, 1);
        alert(res.data.message ||"Product removed successfully");
      } catch (err) {
        console.error("Error Remove products", err);
      }
    },
  },
});
