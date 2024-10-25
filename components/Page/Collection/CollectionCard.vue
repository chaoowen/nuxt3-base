<template>
  <div class="relative">
    <div
      class="w-[92%] sm:w-[94%] lg:w-[95%] xl:w-[97%] min-h-20 ml-auto p-6 pl-10 rounded-lg card-shadow"
      :class="link ? 'bg-secondary-lighter' : 'bg-gray-lightest'"
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
    <div
      class="leaf-icon w-12 h-12 md:w-16 md:h-16"
      :class="link ? 'bg-secondary' : 'bg-gray-lighter'"
    >
      <img class="w-5" :src="leafIcon" alt="leaf-icon" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import ArrowIcon from '~/assets/icons/arrow.svg?raw'
  import Leaf from '~/assets/images/leaf-1.png'
  import LeafWithLink from '~/assets/images/leaf-2.png'

  interface Props {
    title: string
    subtitle: string
    link?: string
    content?: string
    list?: string[]
  }

  const props = defineProps<Props>()

  const leafIcon = computed(() => (!!props.link ? LeafWithLink : Leaf))
</script>

<style scoped>
  .leaf-icon {
    @apply absolute left-0 top-1/2 -translate-y-1/2 z-10;
    @apply flex-center rounded-full;
  }

  .card-shadow {
    @apply transitable border-8 border-transparent;
    box-shadow: 2px 2px 8px rgba(194 187 147 / 30%);

    &:hover {
      box-shadow: 4px 4px 12px rgba(194 187 147 / 30%);
    }
  }
</style>
