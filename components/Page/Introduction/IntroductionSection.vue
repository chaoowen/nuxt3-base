<template>
  <div id="introduction" class="relative py-20 space-y-10">
    <div class="flex-center">
      <div class="inline-flex flex-col items-start space-y-2">
        <div class="inline-block text-[3rem] md:text-[4rem] text-primary">
          <p class="ubuntu-medium">
            <span
              v-for="(letter, index) in splitText('Hi There')"
              :key="index"
              class="hover-text"
            >
              {{ letter }}
            </span>
          </p>
          <p class="ubuntu-medium">
            <span
              v-for="(letter, index) in splitText('I‘m ')"
              :key="index"
              class="hover-text"
            >
              {{ letter }}
            </span>
            <span
              v-for="(letter, index) in splitText('Chaowen')"
              :key="index"
              class="text-secondary-dark hover-text"
            >
              {{ letter }}
            </span>
          </p>
        </div>
        <div
          class="inline-block px-4 py-1 ubuntu-medium text-2xl md:text-4xl text-primary bg-secondary rounded-full"
        >
          Front-end Engineer
        </div>
      </div>
    </div>
    <div class="f-container text-primary text-center space-y-2">
      <p>{{ $t('intro.part1') }}</p>
      <p>{{ $t('intro.part2') }}</p>
      <p>{{ $t('intro.part3') }}</p>
    </div>
    <ScrollRotateIcon
      :image="leafImage"
      name="rollingLeaf"
      class="w-20 h-20 md:w-32 md:h-32 xl:w-48 xl:h-48 -rotate-[20deg] absolute -right-4 md:right-4 -bottom-10 z-10"
    />
  </div>
</template>

<script setup lang="ts">
  import leafImage from '~/assets/images/leaf-2.png'

  function splitText(text: string) {
    return text.split('')
  }
</script>

<style scoped>
  .hover-text {
    @apply hover:font-black transitable;
  }
</style>
