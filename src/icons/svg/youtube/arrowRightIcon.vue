<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="dark:fill-white fill-black"
    viewBox="0 0 16 16"
    :width="width"
    :height="height"
    focusable="false"
    style="pointer-events: none; display: block; width: 100%; height: 100%"
  >
    <path d="M4.97 12.65 9.62 8 4.97 3.35l.71-.71L11.03 8l-5.35 5.35-.71-.7z"></path>
  </svg>
</template>

<script lang="ts">
export default {
  name: 'icon-arrow-right'
}
</script>

<script setup lang="ts">
const props = defineProps({
  width: { type: Number, required: false, default: 16 },
  height: { type: Number, required: false, default: 16 }
})
</script>
