<template>
  <div class="relative h-20 xl:h-40">
    <div ref="leafRef" class="absolute right-0 -bottom-2 w-24 md:w-32">
      <img :src="leaf" alt="leaf" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useWindowSize } from '@vueuse/core'
  import { runningAnimation } from '~/libs/animation'

  import leaf from '~/assets/images/leaf-4.png'

  const { width } = useWindowSize()
  const leafRef = ref(null)

  onMounted(() => {
    nextTick(() => {
      runningAnimation(leafRef.value, width.value)
    })
  })
</script>
