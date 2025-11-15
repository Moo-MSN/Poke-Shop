import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    list: [
      {
        name: "test",
        imageUrl: "/src/components/icons/product pokeball .png",
        quantity: 10,
        about: "testtt",
        status: "open",
        price: 1000,
      },
      {
        name: "test 123",
        imageUrl: "/src/components/icons/product pokeball .png",
        quantity: 10,
        about: "testtt111",
        status: "open",
        price: 1000,
      },
    ],
  }),
  actions: {
    filterProducts (searchText) {
      return this.list.filter (Product => Product.name.includes(searchText)) // เป็นการ loop product แต่ละตัวที่มี name ตรงกับคำ search ออกมาแสดง 
    }
  }
});
