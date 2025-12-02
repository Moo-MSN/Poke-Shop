import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [
        {
        name: "test",
        imageUrl: "/src/components/icons/product pokeball .png",
        quantity: 1,
        about: "testtt",
        status: "open",
        price: 1000,
      }, 
    ],
  }),
  getters:{
    summaryQuantity (state){
      return state.items.reduce((acc, item) => acc + item.quantity,0 ) // เป็น Short cut ของด้านล่าง เขียนได้ 2 แบบ
    },

    summaryPrice (state){
      return state.items.reduce((acc, item) =>{
        return acc + (item.price * item.quantity)
      },0) //
    }
  },
  actions: {
    addToCart(productData) {
        this.items.push(productData)
    },
    updateQuantity(index,quantity) {
        this.items[index].quantity = quantity
    },
    removeItemInCart (index) {
        this.items.splice(index,1)
    },
  },
});
