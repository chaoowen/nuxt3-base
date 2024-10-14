<template>
  <div class="overflow-hidden">
    <IntroductionSection />
    <IndexCoverMain />
    <SkillsSection />
    <ExperienceSection />
    <IndexCoverAI />
    <CollectionSection />
    <IndexHoverImage />
    <IndexRunning />
  </div>
</template>

<script setup lang="ts">
  import { setParallax } from '~/libs/animation'
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
    setParallax()
  })
</script>
