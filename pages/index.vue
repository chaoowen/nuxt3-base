<template>
  <div class="overflow-hidden">
    <IntroductionSection />
    <IndexCoverMain />
    <SkillsSection />
    <ExperienceSection />
    <IndexCoverAI />
    <CollectionSection />
    <IndexHoverImage />
    <ContactSection />
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
    // 確保 DOM 完全載入後才執行 setParallax
    nextTick(() => {
      setParallax()
    })
  })
</script>
