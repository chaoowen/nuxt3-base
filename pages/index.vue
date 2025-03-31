<template>
  <div class="overflow-hidden">
    <h1>{{ $t('welcome') }}</h1>
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
    setParallax()
  })
</script>
