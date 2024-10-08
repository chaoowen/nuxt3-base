<template>
  <div class="relative">
    <div class="w-full h-70 md:h-130 xl:h-187 overflow-hidden">
      <img class="w-full h-full object-cover" :src="bgImage" alt="bg-cover" />
    </div>
    <div class="w-full absolute right-0 top-0">
      <img class="w-full" :src="topFrame" alt="bg-frame" />
    </div>
    <div class="w-full absolute right-0 bottom-0">
      <img class="w-full" :src="bottomFrame" alt="bg-frame" />
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    topFrame?: string
    bottomFrame?: string
    bgImage?: string
  }

  defineProps<Props>()
</script>
