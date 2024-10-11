<template>
  <div class="to-top-button" :class="{ 'absolute-position': isAbsolute }">
    <a href="#top" class="w-full h-full flex-center">
      <img
        src="~/assets/icons/chevron.svg"
        alt="to-top-icon"
        class="w-1.5 xl:w-2 -rotate-90"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
  const isAbsolute = ref(false)

  const checkFooterVisibility = () => {
    const footer = document.querySelector('footer')
    if (footer) {
      const footerRect = footer.getBoundingClientRect()
      isAbsolute.value = footerRect.top <= window.innerHeight
    }
  }

  onMounted(() => {
    checkFooterVisibility()
    window.addEventListener('scroll', checkFooterVisibility)
    window.addEventListener('resize', checkFooterVisibility)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', checkFooterVisibility)
    window.removeEventListener('resize', checkFooterVisibility)
  })
</script>

<style scoped>
  .to-top-button {
    @apply fixed z-10 right-6 bottom-6 xl:right-12;
    @apply w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-primary transitable;

    &:hover {
      @apply bg-primary-light;
    }
  }

  .to-top-button.absolute-position {
    position: absolute;
  }
</style>
