<template>
  <div class="p-8">
    <span
      @click="router.push('/youtube/tailwind')"
      class="inline-block px-6 py-2 bg-emerald-400 rounded-3xl text-white cursor-pointer"
      >Tailwind</span
    >
    <span
      class="inline-block px-6 py-2 bg-emerald-400 rounded-3xl text-white ml-4 cursor-pointer"
      @click="router.push('/youtube/less')"
      >Less</span
    >
  </div>
</template>

<script lang="ts">
export default {
  name: 'view-home'
}
</script>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
