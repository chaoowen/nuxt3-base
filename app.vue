<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  import { useFlowbite } from '~/composables/useFlowbite'

  onMounted(() => { 
    useFlowbite(() => {
      initFlowbite()
    })
  })
</script>