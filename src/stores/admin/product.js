import { defineStore } from "pinia";
import axios from "axios";

// BaseUrl to DB
const BASE_URL = "http://localhost:8000";

export const useAdminProductStore = defineStore("admin-products", {
  state: () => ({
    list: [],
  }),
  actions: {
    // mokc products ไว้ใน localstorage
    loadProduct() {
      const products = localStorage.getItem("admin-products");
      if (products) {
        this.list = JSON.parse(products);
      }
    },

    /**  async loadProduct() {
      try {
        const res = await axios.get(`${BASE_URL}/products`);
        if (res) {
          this.list = res.data;
        }
      } catch (err) {
        console.error("Error fethcing products", err);
      }
    },*/

    // Mock localstorage
    getProduct(index) {
      return this.list[index];
    },
    // getProduct ต้องใส่ index ด้วยเพื่อทำการระบุตำแหน่งของ product แต่ละตัว
    /** async getProduct(index) {
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
    },*/

    // Mock localstorage
    addProduct(productData) {
      productData.remainquantity = productData.quantity;
      productData.UpdatedAt = new Date().toLocaleString();
      this.list.push(productData);
      localStorage.setItem("admin-products", JSON.stringify(this.list));
    },
    /** async addProduct(productData) {
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
    }, */

    // Mock localstorage
    updateProduct(index, productData) {
      Object.assign(this.list[index], productData, {
        remainquantity : productData.quantity, // รีเซต quantity ให้เท่ากันเมื่อทำการ updateProduct
        UpdatedAt: new Date().toLocaleString(),
      });
      // ใส่ field Data ที่ต้องการ update เหมือนจะใช้ตัวนี้ในการ updateProduct เพราะเรา index เป็น key ในการดึง Data
      /**  this.list[index].name = productData.name;
      this.list[index].imageUrl = productData.imageUrl;
      this.list[index].price = productData.price;
      this.list[index].quantity = productData.quantity;
      this.list[index].remainquantity = productData.remainquantity;
      this.list[index].UpdatedAt = new Date().toLocaleString();*/
      localStorage.setItem("admin-products", JSON.stringify(this.list));
      console.log("Updated list", this.list);
    },

    /** async updateProduct(index, productData) {
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
    },*/

    // Mock localstorage
    removeProduct(index) {
      this.list.splice(index, 1);
      localStorage.setItem("admin-products", JSON.stringify(this.list));
    },

    /** async removeProduct(index) {
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
    },*/
  },
});
