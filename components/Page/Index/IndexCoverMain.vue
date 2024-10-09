<template>
  <CoverImage
    :bgImage="bgImage"
    :topFrame="bgTopFrame"
    :bottomFrame="bgBottomFrame"
  />
</template>

<script setup lang="ts">
  import bgImage from '~/assets/images/cover-main.jpg'
  import bgTopFrame from '~/assets/images/background/bg-top-right.png'
  import bgBottomFrame from '~/assets/images/background/bg-bottom-left.png'
</script>
