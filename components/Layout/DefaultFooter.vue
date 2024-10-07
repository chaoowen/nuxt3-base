<template>
  <footer class="bg-gray-darkest text-white text-xs pb-5">
    <div class="f-container">
      <p>mememe</p>
      <!-- <div
        class="flex-center flex-col gap-15 xl:flex-row xl:justify-between py-15 xl:py-10"
      >
        <a href="https://velosaddles.com/" target="_blank">
          <img
            class="h-12"
            src="~/assets/images/logo/logo-white.svg"
            alt="velo-logo"
          />
        </a>
        <div class="flex-center flex-wrap gap-10">
          <a
            v-for="(item, i) in menuItems"
            :key="i"
            @click="moveTo(item.to)"
            class="block hover:text-gray-light font-medium text-sm hoverable"
          >
            {{ $t(item.label) }}
          </a>
        </div>
      </div> -->
      <!-- <div class="text-center xl:text-right">
        Copyright © {{ currentYear }} VELO. Designed by Fontech
      </div> -->
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
