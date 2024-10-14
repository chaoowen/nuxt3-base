<template>
  <div class="relative">
    <div
      class="w-[96%] min-h-20 ml-auto p-6 pl-10 bg-secondary-lighter rounded-lg card-shadow"
    >
      <p>{{ title }}</p>
      <p class="ubuntu-medium">{{ subtitle }}</p>
      <p class="pt-1">{{ content }}</p>
    </div>
    <div class="leaf-icon">
      <img class="w-5" src="~/assets/images/leaf-2.png" alt="leaf-icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    title: string
    subtitle: string
    content: string
  }

  defineProps<Props>()
</script>

<style scoped>
  .leaf-icon {
    @apply absolute left-0 top-1/2 -translate-y-1/2 z-10;
    @apply w-16 h-16 flex-center bg-secondary rounded-full;
  }

  .card-shadow {
    @apply transitable border-8 border-transparent;
    box-shadow: 2px 2px 8px rgba(194 187 147 / 30%);

    &:hover {
      @apply shadow-none border-secondary-light;
    }
  }
</style>
