<template>
  <CoverImage
    :bgImage="bgImage"
    :topFrame="bgTopFrame"
    :bottomFrame="bgBottomFrame"
  />
</template>

<script setup lang="ts">
  import bgImage from '~/assets/images/cover-ai.png'
  import bgTopFrame from '~/assets/images/background/bg-top-left.png'
  import bgBottomFrame from '~/assets/images/background/bg-bottom-right.png'
</script>