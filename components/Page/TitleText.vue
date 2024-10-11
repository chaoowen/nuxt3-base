<template>
  <div
    class="flex-center gap-3 text-primary text-xl md:text-2xl"
    :class="className"
  >
    <p class="ubuntu-medium text-2xl">{{ en }}</p>
    <p>{{ zh }}</p>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    className?: string
    en: string
    zh: string
  }

  defineProps<Props>()
</script>
