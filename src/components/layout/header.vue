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
    <div class="max-w-[640px] flex-grow flex flex-row justify-start items-center">
      <div
        class="bg-transparent border rounded-3xl border-gray-100 dark:border-gray-400/30 h-10 pl-4 flex flex-row justify-between items-center flex-grow"
      >
        <input
          type="text"
          placeholder="搜索"
          class="bg-none bg-transparent leading-10 outline-none flex-grow text-gray-900 dark:text-gray-300"
        />
        <button
          class="h-full w-16 p-2 border rounded-br-3xl rounded-tr-3xl border-transparent bg-gray-100 dark:bg-gray-400/30"
        >
          <SearchIcon></SearchIcon>
        </button>
      </div>
      <button
        class="border rounded-full border-none bg-gray-400/30 hover:bg-gray-400/50 min-w-fit ml-2 p-2"
      >
        <RecordIcon></RecordIcon>
      </button>
    </div>

    <div class="flex flex-row justify-between items-center w-40 h-10 px-3">
      <div class="h-full p-2 hover:bg-gray-100 dark:hover:bg-gray-400/30 rounded-full min-w-fit">
        <VedioIcon></VedioIcon>
      </div>
      <div class="h-full p-2 hover:bg-gray-100 dark:hover:bg-gray-400/30 rounded-full min-w-fit">
        <BearIcon></BearIcon>
      </div>
      <div
        class="bg-user-icon h-7 w-7 rounded-full bg-center bg-no-repeat bg-cover ml-2 min-w-fit"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'components-layout-header'
}
</script>

<script setup lang="ts">
import ExpandIcon from '@/icons/svg/youtube/expandIcon.vue'
import YoutubeIcon from '@/icons/svg/youtube/youtubeIcon.vue'
import SearchIcon from '@/icons/svg/youtube/searchIcon.vue'
import VedioIcon from '@/icons/svg/youtube/vedioIcon.vue'
import BearIcon from '@/icons/svg/youtube/bearIcon.vue'
import RecordIcon from '@/icons/svg/youtube/recordIcon.vue'
</script>
