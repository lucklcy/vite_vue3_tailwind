<template>
  <div class="flex flex-col justify-start items-start w-full h-full">
    <Header></Header>
    <div class="flex-grow flex flex-row justify-start items-start w-full">
      <LeftMenu></LeftMenu>
      <div class="flex-grow w-full h-full"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'view-youtube-tailwind'
}
</script>

<script setup lang="ts">
import Header from '~/layout/header.vue'
import LeftMenu from '~/layout/leftMenu/index.vue'
</script>
