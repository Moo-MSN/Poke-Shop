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
