<template>
  <div class="relative">
    <div
      class="w-[92%] sm:w-[94%] lg:w-[95%] xl:w-[97%] min-h-20 ml-auto p-6 pl-10 bg-secondary-lighter rounded-lg card-shadow"
    >
      <div class="space-y-2 ubuntu-medium">
        <p class="text-primary">{{ title }}</p>
        <p v-if="subtitle" class="text-sm">{{ subtitle }}</p>
        <p v-if="content" class="text-sm text-gray-dark">{{ content }}</p>
        <ul v-if="list" class="text-sm list-disc pl-6 space-y-1 text-gray-dark">
          <li v-for="words in list" :key="words">{{ words }}</li>
        </ul>
        <a
          v-if="link"
          :href="link"
          target="_blank"
          class="flex items-center justify-end group"
        >
          <p
            class="dotgothic16-regular pb-0.5 text-primary-light transitable group-hover:text-primary"
          >
            前往網站
          </p>
          <div v-html="ArrowIcon" class="-rotate-90 w-8 h-8" />
        </a>
      </div>
    </div>
    <div class="leaf-icon w-12 h-12 md:w-16 md:h-16">
      <img class="w-5" src="~/assets/images/leaf-2.png" alt="leaf-icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import ArrowIcon from '~/assets/icons/arrow.svg?raw'

  interface Props {
    title: string
    subtitle: string
    link?: string
    content?: string
    list?: string[]
  }

  defineProps<Props>()
</script>

<style scoped>
  .leaf-icon {
    @apply absolute left-0 top-1/2 -translate-y-1/2 z-10;
    @apply flex-center bg-secondary rounded-full;
  }

  .card-shadow {
    @apply transitable border-8 border-transparent;
    box-shadow: 2px 2px 8px rgba(194 187 147 / 30%);

    &:hover {
      @apply shadow-none border-secondary-light;
    }
  }
</style>
