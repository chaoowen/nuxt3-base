<template>
  <div
    v-for="(event, index) in events"
    :key="index"
    class="border-b last:border-none border-secondary-light"
    :class="{ 'border-none': hasBorderClass(index) }"
  >
    <div
      class="event-card flex-center"
      @mouseover="hoverIndex = index"
      @mouseleave="hoverIndex = null"
      @click="handleActiveEvents(event.code)"
    >
      <p class="text-primary md:text-xl" :class="titleStyle">
        {{ event.title }}
      </p>
      <div
        v-html="ArrowIcon"
        class="flex-none icon"
        :class="isActive(event.code) ? 'rotate-180' : ''"
      />
    </div>
    <component
      v-if="event.component"
      :is="event.component"
      class="transition-all duration-400 overflow-hidden"
      :class="
        isActive(event.code)
          ? 'max-h-500 md:max-h-320 pt-5 pb-15'
          : 'max-h-0 p-0 invisible'
      "
    />
    <div
      v-if="event.text"
      class="px-10 transition-all duration-400 overflow-hidden"
      :class="
        isActive(event.code) ? 'max-h-160 py-10' : 'max-h-0 p-0 invisible'
      "
    >
      <ul v-if="Array.isArray(event.text)" class="list-decimal">
        <li v-for="words in event.text" :key="words">{{ words }}</li>
      </ul>
      <p v-else>{{ event.text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import ArrowIcon from '~/assets/icons/arrow.svg?raw'

  interface Props {
    events: {
      title: string
      code: string
      component?: object
      text?: string | string[]
    }[]
    titleStyle?: string
  }

  defineProps<Props>()
  const emits = defineEmits(['change'])

  const activeEvents: Ref<string[]> = ref([])
  const hoverIndex: Ref<null | number> = ref(null)

  const handleActiveEvents = (event: string) => {
    if (activeEvents.value.includes(event)) {
      activeEvents.value = activeEvents.value.filter((item) => item !== event)
    } else {
      activeEvents.value.push(event)
    }
    emits('change')
  }

  const isActive = (event: string) => {
    return activeEvents.value.includes(event)
  }

  const hasBorderClass = (index: number) => {
    return hoverIndex.value !== null &&
      (hoverIndex.value === index || hoverIndex.value - 1 === index)
      ? 'border-none'
      : ''
  }
</script>

<style scoped>
  .event-card {
    @apply relative flex justify-between py-8 pl-6 md:pl-8 pr-4 rounded-lg hoverable;

    :deep(.icon) {
      @apply w-10 h-10 transition;

      svg {
        @apply text-secondary;
      }
    }

    &::before {
      @apply absolute-center -left-3;
      @apply w-3 h-12 rounded-full transition-all bg-secondary;

      content: '';
    }

    &:hover {
      @apply bg-white;

      box-shadow: 4px 4px 12px rgba(194 187 147 / 30%);

      &::before {
        @apply h-24;
      }

      .icon {
        @apply text-gray-darker;
      }
    }
  }
</style>
