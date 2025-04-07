<template>
  <div class="hidden md:flex relative parallax overflow-hidden">
    <div class="w-full h-70 md:h-120 xl:h-160 overflow-hidden">
      <img
        class="parallaxImage w-full h-[110%] object-cover"
        :src="bgImage"
        alt="bg-cover"
      />
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
