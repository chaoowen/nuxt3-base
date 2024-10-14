<template>
  <div class="py-10 flex-center">
    <img
      ref="imageRef"
      :src="image"
      alt="hover-running-image"
      class="w-40 md:w-48 xl:w-56"
    />
  </div>
</template>

<script setup lang="ts">
  import image from '~/assets/images/leaf-3.png'
  import { hoverMovingEffect } from '~/libs/animation'

  const imageRef = ref<HTMLElement | null>(null)

  onMounted(() => {
    if (!imageRef.value) return
    hoverMovingEffect(imageRef.value)
  })
</script>
