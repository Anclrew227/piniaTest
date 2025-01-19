<script setup>
import { ref, computed, watch } from "vue";
import AddNewTask from "@/components/AddNewTask.vue";
import TaskItem from "@/components/TaskItem.vue";
import { useFocus } from "@vueuse/core";
import { vOnClickOutside } from "@vueuse/components";
import { useStore } from "@/stores";

const store = useStore();
const { updateListTitle } = store;

const props = defineProps({
  id: String,
  title: String,
  tasks: Array
});

const title = ref(props.title);
const isTitleEditing = ref(false);
const target = ref();
useFocus(target, { initialValue: true });

watch(isTitleEditing, (v) => {
  updateListTitle(props.id, title.value);
});
</script>

<template>
  <div
      class="bg-slate-200 block border rounded-sm p-2 mx-2 border-gray-500 min-w-[300px]"
  >
    <!-- column -->
    <div
        v-if="!isTitleEditing"
        @click="isTitleEditing = true"
        class="text-ellipsis text-lg w-4/5 block overflow-hidden"
    >
      {{ title }}
    </div>
    <textarea
        v-else
        ref="target"
        v-model="title"
        @keydown.enter="isTitleEditing = false"
        v-on-click-outside="() => (isTitleEditing = false)"
        class="border-none h-8 w-full p-1 resize-none overflow-hidden block"
    ></textarea>

    <!-- tasks -->
    <TaskItem></TaskItem>
    <!-- tasks -->

    <!-- add new task -->
    <AddNewTask></AddNewTask> 
    <!-- add new task -->
  </div>
</template>

<style scoped>

</style>