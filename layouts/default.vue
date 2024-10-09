<template>
  <div id="top" class="min-h-screen relative flex flex-col">
    <DefaultHeader />
    <div class="relative page-content mb-auto">
      <slot />
      <ToTopButton />
    </div>
    <DefaultFooter />
  </div>
</template>

<style scoped>
  .page-content {
    padding-top: var(--header-height);
  }
</style>
