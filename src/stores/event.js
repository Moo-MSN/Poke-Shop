import { defineStore } from "pinia";
// alert: false ใช้เพื่อคุมการแสดงของ alert ในหน้าต่างๆ โดยใช้ v-if
export const useEventStore = defineStore("event", {
  state: () => ({
    alert: false,
    data: {},
  }),
  actions: {
    popupMessage(status, message) {
      this.data = { status, message };
      this.alert = true;
      setTimeout(() => {
        this.clearMessage();
      }, 3000);
    },
    clearMessage() {
      this.alert = false;
      this.data = {};
    },
  },
});
