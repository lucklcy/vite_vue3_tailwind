<template>
  <div class="h-14 w-full flex flex-row justify-between items-center">
    <div class="flex flex-row justify-around w-44 h-full items-center px-2 cursor-pointer">
      <div
        class="border-transparent border-0 rounded-full p-2 dark:hover:bg-gray-400/30 hover:bg-gray-100"
      >
        <ExpandIcon width="24" height="24" fill-color="#fff"></ExpandIcon>
      </div>
      <div class="w-32 h-5 dark:fill-white">
        <YoutubeIcon></YoutubeIcon>
      </div>
    </div>
    <div
      class="bg-transparent border rounded-3xl border-gray-800 h-10 px-4 flex flex-row justify-between items-center"
    >
      <input
        type="text"
        placeholder="搜索"
        class="bg-none bg-transparent leading-10 outline-none"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'view-youtube'
}
</script>

<script setup lang="ts">
import ExpandIcon from '../icons/svg/expandIcon.vue'
import YoutubeIcon from '../icons/svg/youtubeIcon.vue'
export interface Props {
  type: string
}

withDefaults(defineProps<Props>(), {
  type: 'new'
})
</script>
