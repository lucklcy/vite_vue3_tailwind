<template>
  <div
    class="flex flex-row justify-start items-center w-[204px] h-10 px-3 cursor-pointer hover:bg-stone-100 dark:hover:bg-slate-100/10 mb-2 border border-none rounded-lg"
  >
    <div class="mr-6">
      <slot name="icon"></slot>
    </div>
    <slot></slot>
    <slot name="status"></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'components-meun-item'
}
</script>

<script setup lang="ts"></script>
