<template>
  <div>
    <img
      :class="['w-full object-contain', iconName]"
      :src="image"
      :alt="name"
    />
  </div>
</template>

<script setup lang="ts">
  import { scrollRotate } from '~/libs/animation'

  interface Props {
    image: string
    name?: string
    isClockWise?: boolean
  }
  const props = withDefaults(defineProps<Props>(), {
    name: '',
    isClockWise: true,
  })

  const iconName = computed(() => {
    return `scroll-rotate-icon-${props.name}`
  })

  if (process.client) {
    scrollRotate({
      target: `.${iconName.value}`,
      clockwise: props.isClockWise,
      delay: 0,
    })
  }
</script>
