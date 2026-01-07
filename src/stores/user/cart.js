import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
    checkout: {},
  }),
  getters: {
    summaryQuantity(state) {
      return state.items.reduce((acc, item) => acc + item.quantity, 0); // เป็น Short cut ของด้านล่าง เขียนได้ 2 แบบ
    },

    summaryPrice(state) {
      return state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    },
  },
  actions: {
    loadCart() {
      // เป็น Fuction โหลด ตะกร้า ถ้ามีสินค้าก็จะทำการ parse items กลับมา
      const previousCart = localStorage.getItem("cart-data");
      if (previousCart) {
        this.items = JSON.parse(previousCart);
      }
    },
    addToCart(productData) {
      const findProductIndex = this.items.findIndex((item) => {
        return item.name === productData.name;
      });
      if (findProductIndex < 0) {
        productData.quantity = 1;
        this.items.push(productData);
      } else {
        const currentItem = this.items[findProductIndex];
        this.updateQuantity(findProductIndex, currentItem.quantity + 1);
      }

      localStorage.setItem("cart-data", JSON.stringify(this.items)); //Save data to localstorage
    },
    updateQuantity(index, quantity) {
      this.items[index].quantity = quantity;
      localStorage.setItem("cart-data", JSON.stringify(this.items)); //Save data to localstorage
    },
    removeItemInCart(index) {
      this.items.splice(index, 1);
      localStorage.setItem("cart-data", JSON.stringify(this.items)); //Save data to localstorage
    },
    placeOrder(userData) {
      const orderData = {
        ...userData, // เป็นการใช้ object spread operator (...userData) เพื่อรวมข้อมูลจาก userData เข้ากับ object ใหม่ orderData
        totalPrice: this.summaryPrice,
        paymantMethod: "Credit Cart",
        createdDate: new Date().toLocaleString(),
        orderNumber: `AA ${Math.floor(Math.random() * 90000 + 10000)}`,
      };
      localStorage.setItem("order-data", JSON.stringify(orderData));
    },
    loadCheckout() {
      const orderData = localStorage.getItem("order-data"); // ทำการดึงข้อมูลจาก localstorage 
      if (orderData) { // ทำการเช็คว่ามีข้อมูลไหม ถ้ามีให้ parse ข้อมูลออกมา ถ้าไม่มีก็ทำการกลับไปยังหน้าสินค้า
        this.checkout = JSON.parse(orderData);
      }
    },
  },
});
