<template>
  <div class="h-14 w-full flex flex-row justify-between items-center">
    <div class="flex flex-row justify-around w-44 h-full items-center px-2 cursor-pointer">
      <div
        class="border-transparent border-0 rounded-full p-2 dark:hover:bg-gray-400/30 hover:bg-gray-100 h-10 w-10"
      >
        <ExpandIcon></ExpandIcon>
      </div>
      <div class="w-32 h-5 dark:fill-white">
        <YoutubeIcon></YoutubeIcon>
      </div>
    </div>
    <div
      class="bg-transparent border rounded-3xl border-gray-800 h-10 pl-4 flex flex-row justify-between items-center max-w-[640px] flex-grow"
    >
      <input
        type="text"
        placeholder="搜索"
        class="bg-none bg-transparent leading-10 outline-none flex-grow"
      />
      <button
        class="h-full w-16 p-2 border rounded-br-3xl rounded-tr-3xl border-transparent bg-gray-100"
      >
        <SearchIcon></SearchIcon>
      </button>
    </div>
    <div class="flex flex-row justify-between items-center w-40 h-10 px-3">
      <div class="h-full p-2 hover:bg-gray-100 dark:hover:bg-gray-400/30 rounded-full">
        <VedioIcon></VedioIcon>
      </div>
      <div class="h-full p-2 hover:bg-gray-100 dark:hover:bg-gray-400/30 rounded-full">
        <BearIcon></BearIcon>
      </div>
      <div class="bg-user-icon h-7 w-7 rounded-full bg-center bg-no-repeat bg-cover ml-2"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'view-youtube-tailwind'
}
</script>

<script setup lang="ts">
import ExpandIcon from '../icons/svg/expandIcon.vue'
import YoutubeIcon from '../icons/svg/youtubeIcon.vue'
import SearchIcon from '../icons/svg/searchIcon.vue'
import VedioIcon from '../icons/svg/vedioIcon.vue'
import BearIcon from '../icons/svg/bearIcon.vue'
</script>
