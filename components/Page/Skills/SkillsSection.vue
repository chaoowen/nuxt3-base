<template>
  <div id="skills" class="relative pt-20">
    <ScrollRotateIcon
      :image="leafImage"
      name="rollingLeaf"
      :isClockWise="false"
      class="w-32 h-32 xl:w-48 xl:h-48 rotate-45 absolute -left-4 xl:left-0 -top-10"
    />
    <div class="flex-center gap-6">
      <TitleText en="Skills" zh="技能樹" className="text-primary-dark" />
    </div>
    <ContentSwiper :images="images" :section="section" />
  </div>
</template>

<script setup lang="ts">
  import leafImage from '~/assets/images/leaf-1.png'

  import imageTool from '~/assets/images/swiper-tool.jpg'
  import imageDevelop from '~/assets/images/swiper-developer.jpg'
  import imageColorful from '~/assets/images/swiper-colorful.jpg'

  import SkillsTool from '~/components/Page/Skills/SkillsTool.vue'
  import SkillsDevelop from '~/components/Page/Skills/SkillsDevelop.vue'
  import SkillsFrontEnd from '~/components/Page/Skills/SkillsFrontEnd.vue'

  const images = [imageTool, imageDevelop, imageColorful]

  const section = [SkillsTool, SkillsDevelop, SkillsFrontEnd]
</script>
