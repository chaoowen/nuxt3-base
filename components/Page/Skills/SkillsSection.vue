<template>
  <div id="skills" class="pt-20">
    <ContentSwiper :images="images" :section="section" />
  </div>
</template>

<script setup lang="ts">
  import imageTool from '~/assets/images/swiper-tool.jpg'
  import imageDevelop from '~/assets/images/swiper-developer.jpg'
  import imageColorful from '~/assets/images/swiper-colorful.jpg'

  import SkillsTool from '~/components/Page/Skills/SkillsTool.vue'
  import SkillsDevelop from '~/components/Page/Skills/SkillsDevelop.vue'
  import SkillsFrontEnd from '~/components/Page/Skills/SkillsFrontEnd.vue'

  const images = [imageTool, imageDevelop, imageColorful]

  const section = [SkillsTool, SkillsDevelop, SkillsFrontEnd]
</script>
