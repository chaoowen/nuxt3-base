<template>
  <footer class="py-10 bg-gray text-white">
    <div class="container w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm sm:text-center dark:text-gray-400">
        © 2023 chaowen. All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
          <li>
              <a href="#" class="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
              <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
          </li>
          <li>
              <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
          </li>
          <li>
              <a href="#" class="hover:underline">Contact</a>
          </li>
      </ul>
    </div>
</footer>
</template>

<script setup lang="ts">
  // import { LinkHook } from '~/libs/enum'
  // import { moveTo } from '~/libs/animation'

  // interface MenuItem {
  //   label: string
  //   to: string
  // }

  // const menuItems: MenuItem[] = [
  //   { label: 'future.title', to: LinkHook.FUTURE },
  //   { label: 'environment.title', to: LinkHook.ENVIRONMENT },
  //   { label: 'society.title', to: LinkHook.SOCIAL },
  //   { label: 'governance.title', to: LinkHook.GOVERNANCE },
  //   { label: 'location', to: LinkHook.LOCATION },
  // ]

  // const { $date } = useNuxtApp()
  // const currentYear = $date().format('YYYY')
</script>
