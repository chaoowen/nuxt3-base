<template>
  <nav ref="nav" class="fixed top-0 left-0 w-full bg-secondary z-40 shadow-md">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto py-1 px-3 md:p-4 transitable"
    >
      <button
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary rounded-lg md:hidden hover:bg-secondary-light transitable"
        @click="toggleNavbar"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        class="w-full md:w-auto max-h-0 md:max-h-10 md:mr-10 transitable overflow-hidden"
        :class="{ 'max-h-[40rem]': navbarExpanded }"
      >
        <ul class="flex flex-col items-center md:flex-row gap-8 md:gap-10 py-8 px-4 md:p-0">
          <li v-for="navItem in navItems" :key="navItem.name">
            <a
              class="block text-primary hover:text-primary-dark transitable hoverable"
              @click="moveTo(navItem.to)"
            >
              {{ navItem.name }}
            </a>
          </li>
          <LanguageSwitcher />
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
  import { navItems } from '~/libs/enum'
  import { moveTo } from '~/libs/animation'
  import { onClickOutside } from '@vueuse/core'

  const navbarExpanded = ref(false)

  const nav = ref(null)
  onClickOutside(nav, (event) => (navbarExpanded.value = false))

  const toggleNavbar = () => {
    navbarExpanded.value = !navbarExpanded.value
  }
</script>
