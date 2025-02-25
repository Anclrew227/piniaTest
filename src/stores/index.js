import { ref, computed } from "vue";
import { defineStore } from "pinia";

const defaultList = [
  {
    id: "61bblwnux0tlb1vp3qk",
    title: "Hello Vue.js!",
    tasks: [
      {
        id: "79bcdufvlfdlb1voaq5",
        title: "Vue.js 測試",
        content: "內文區塊",
      },
      {
        id: "4ffywwh2sfelb1vob44",
        title: "Vue.js 測試2",
        content: "內文區塊2",
      },
    ],
  },
  {
    id: "1ix2wxwsldblb1vpa4h",
    title: "Hello Laravel!",
    tasks: [
      {
        id: "zm3frri5a4lb0l8c2e",
        title: "Laravel 測試",
        content: "內文區塊",
      },
      {
        id: "b8ijxyk2o9lb1vnzio",
        title: "Laravel 測試2",
        content: "內文區塊2",
      },
    ],
  },
];

export const useStore = defineStore("store", () => {
  const lists = ref(defaultList);

  const updateListTitle = (cardId = "", title = "") => {
    const card = lists.value.find((list) => list.id === cardId);
    card.title = title;
  };

  // 建立亂數 id
  const uid = () => Math.random().toString(36).substring(2) + Date.now().toString(36);

  // 新增任務
  const addTask = (cardId = "", title = "") => {
    if (!cardId || !title) return;

    const card = lists.value.find((list) => list.id === cardId);
    card.tasks.push({
      id: uid(),
      title,
      content: "",
    });
  };

  return {
    lists,
    updateListTitle,
    addTask,
  };
});
