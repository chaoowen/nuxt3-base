<template>
  <footer class="py-10 bg-primary text-white">
    <div
      class="container w-full mx-auto max-w-screen-xl p-4 flex-center flex-col md:flex-row md:justify-between gap-4"
    >
      <span class="text-sm sm:text-center">
        © 2023 chaowen. All Rights Reserved.
      </span>
      <ul class="flex-center flex-wrap gap-8 text-sm">
        <li v-for="navItem in navItems" :key="navItem.name">
          <a :href="navItem.href" class="hover:text-primary-light transitable">
            {{ navItem.name }}
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import { navItems } from '~/libs/enum'

  // const { $date } = useNuxtApp()
  // const currentYear = $date().format('YYYY')
</script>
