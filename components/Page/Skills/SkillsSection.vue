<template>
  <div id="skills" class="pt-20">
    <div class="flex-center gap-6">
      <ScrollRotateIcon
        :image="leafImage2"
        name="rollingLeaf"
        class="mr-1 w-5 h-5 xl:w-8 xl:h-8 -rotate-45"
      />
      <TitleText en="Skills" zh="技能樹" className="text-primary-dark" />
      <ScrollRotateIcon
        :image="leafImage"
        name="rollingLeaf"
        :is-clock-wise="false"
        class="w-6 h-6 xl:w-10 xl:h-10 rotate-45"
      />
    </div>
    <ContentSwiper :images="images" :section="section" />
  </div>
</template>

<script setup lang="ts">
  import leafImage from '~/assets/images/leaf-1.png'
  import leafImage2 from '~/assets/images/leaf-2.png'

  import imageTool from '~/assets/images/swiper-tool.jpg'
  import imageDevelop from '~/assets/images/swiper-developer.jpg'
  import imageColorful from '~/assets/images/swiper-colorful.jpg'

  import SkillsTool from '~/components/Page/Skills/SkillsTool.vue'
  import SkillsDevelop from '~/components/Page/Skills/SkillsDevelop.vue'
  import SkillsFrontEnd from '~/components/Page/Skills/SkillsFrontEnd.vue'

  const images = [imageTool, imageDevelop, imageColorful]

  const section = [SkillsTool, SkillsDevelop, SkillsFrontEnd]
</script>
