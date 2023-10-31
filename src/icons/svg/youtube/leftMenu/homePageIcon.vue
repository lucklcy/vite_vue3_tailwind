<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    viewBox="0 0 24 24"
    height="24"
    width="24"
    focusable="false"
    class="dark:fill-white fill-black"
    style="pointer-events: none; display: block; width: 100%; height: 100%"
  >
    <template v-if="isActive">
      <g><path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path></g>
    </template>
    <template v-else>
      <path
        d="m12 4.44 7 6.09V20h-4v-6H9v6H5v-9.47l7-6.09m0-1.32-8 6.96V21h6v-6h4v6h6V10.08l-8-6.96z"
      ></path>
    </template>
  </svg>
</template>

<script lang="ts">
export default {
  name: 'icon-home-page'
}
</script>

<script setup lang="ts">
const props = defineProps({
  isActive: { type: Boolean, required: false, default: false }
})
</script>
