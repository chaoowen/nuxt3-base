<template>
  <footer class="py-10 bg-primary text-white">
    <div
      class="f-container w-full mx-auto max-w-screen-xl p-4 flex-center flex-col md:flex-row md:justify-between gap-4"
    >
      <span class="text-sm sm:text-center">
        © {{ currentYear }} chaowen. All Rights Reserved.
      </span>
      <ul class="flex-center flex-wrap gap-8 text-sm">
        <li v-for="navItem in navItems" :key="navItem.name">
          <a
            @click="moveTo(navItem.to)"
            class="hover:text-secondary-light transitable hoverable"
          >
            {{ navItem.name }}
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import { navItems } from '~/libs/enum'
  import { moveTo } from '~/libs/animation'

  const currentYear = computed(() => new Date().getFullYear())
</script>
