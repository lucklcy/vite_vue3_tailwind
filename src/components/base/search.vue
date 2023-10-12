<template>
  <div class="component-base-search"></div>
</template>

<script lang="ts">
export default {
  name: "c-example",
};
</script>

<script setup lang="ts">
export interface Props {
  type: string;
}

withDefaults(defineProps<Props>(), {
  type: "new",
});
</script>

<style lang="less" scoped>
.component-base-search {
  background-color: #fff;
}
</style>
