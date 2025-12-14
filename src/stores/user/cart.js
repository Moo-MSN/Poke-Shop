import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),
  getters: {
    summaryQuantity(state) {
      return state.items.reduce((acc, item) => acc + item.quantity, 0); // เป็น Short cut ของด้านล่าง เขียนได้ 2 แบบ
    },

    summaryPrice(state) {
      return state.items.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0); 
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
      const findProductIndex = this.items.findIndex (item => {
        return item.name === productData.name
      })
      if (findProductIndex <0 ) {
        productData.quantity = 1
        this.items.push(productData)
      } else {
        const currentItem = this.items[findProductIndex]
        this.updateQuantity(findProductIndex, currentItem.quantity +1)
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
  },
});
