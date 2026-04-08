import { defineStore } from "pinia";

export const useAdminUserStore = defineStore("admin-user", {
  state: () => ({
    list: [
      {
        name: "Mike",
        role: "admin",
        status: "active",
        updatedAt: "9/15/2023, 11:50:24 PM",
      },
      {
        name: "Mike 1",
        role: "admin",
        status: "active",
        updatedAt: "9/15/2023, 11:50:24 PM",
      },
    ],
  }),
  actions: {
    getUser(index) {
      return this.list[index];
    },
    updateUser(index, userData) {
      this.list[index].name = userData.name;
      this.list[index].status = userData.status;
      this.list[index].role = userData.role;
      this.list[index].updatedAt = new Date().toLocaleString();
    },
    removeUser(index) {
      this.list.splice(index, 1);
    },
  },
});
