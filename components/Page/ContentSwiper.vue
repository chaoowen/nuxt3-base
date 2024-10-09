<template>
  <div class="f-container pt-8 pb-16 xl:pt-16">
    <div
      class="flex flex-col-reverse md:flex-row xl:items-center gap-10"
      :class="{ 'md:!flex-row-reverse': isReverse }"
    >
      <!-- 文字區塊容器 -->
      <div class="relative w-full md:w-1/2 overflow-hidden">
        <div
          class="transform-group"
          :style="{ transform: `translate3d(-${currentIndex * 100}%, 0, 0)` }"
        >
          <div
            v-for="(item, index) in section"
            :key="index"
            class="w-full flex-shrink-0 flex xl:items-center"
          >
            <component :is="item" />
          </div>
        </div>
      </div>

      <!-- 圖片輪播區塊 -->
      <div class="w-full md:w-1/2 overflow-hidden">
        <div class="relative responsive ratio-1by1">
          <div
            class="transform-group"
            :style="{ transform: `translate3d(-${currentIndex * 100}%, 0, 0)` }"
          >
            <div
              v-for="(image, index) in images"
              :key="index"
              class="w-full flex-shrink-0"
            >
              <img :src="image" class="w-full h-full object-cover" />
            </div>
          </div>
          <button
            @click="prev"
            v-show="currentIndex > 0"
            class="arrow-icon left-0"
          >
            <img
              :src="chevron"
              alt="chevron-icon"
              class="w-1.5 xl:w-2 rotate-180"
            />
          </button>
          <button
            @click="next"
            v-show="currentIndex < images.length - 1"
            class="arrow-icon right-0"
          >
            <img :src="chevron" alt="chevron-icon" class="w-1.5 xl:w-2" />
          </button>
        </div>
        <div
          class="flex xl:hidden justify-end pt-2 text-subtitle-lg"
          :class="{ 'md:!justify-start': isReverse }"
        >
          <span class="text-primary">
            {{ String(currentIndex + 1).padStart(2, '0') }}
          </span>
          <span class="px-2 text-gray-lighter">|</span>
          <span class="text-gray">
            {{ String(section.length).padStart(2, '0') }}
          </span>
        </div>
      </div>
    </div>
    <div
      class="hidden xl:flex justify-end pt-5 text-subtitle-lg"
      :class="{ 'md:!justify-start': isReverse }"
    >
      <span class="text-primary">
        {{ String(currentIndex + 1).padStart(2, '0') }}
      </span>
      <span class="px-2 text-gray-lighter">|</span>
      <span class="text-gray">
        {{ String(section.length).padStart(2, '0') }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { DefineComponent } from 'vue'
  import chevron from '~/assets/icons/chevron.svg'

  interface Props {
    isReverse?: boolean
    images: string[]
    section: DefineComponent[]
  }

  const props = defineProps<Props>()

  const currentIndex = ref(0)

  function next() {
    if (currentIndex.value < props.images.length - 1) {
      currentIndex.value++
    }
  }

  function prev() {
    if (currentIndex.value > 0) {
      currentIndex.value--
    }
  }
</script>

<style scoped>
  .arrow-icon {
    @apply absolute top-1/2 -translate-y-1/2;
    @apply flex-center w-10 h-10 xl:w-12 xl:h-12;
    @apply bg-gray-darker hover:bg-primary;
  }

  .transform-group {
    @apply w-full flex transition-transform duration-500 ease-in-out;
  }
</style>
