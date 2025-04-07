<template>
  <div class="hidden md:flex relative parallax overflow-hidden">
    <div class="w-full h-70 md:h-120 xl:h-160 overflow-hidden">
      <img
        class="parallaxImage w-full h-[110%] object-cover"
        :src="bgImage"
        alt="bg-cover"
      />
    </div>
    <div class="w-full absolute right-0 top-0">
      <img class="w-full" :src="topFrame" alt="bg-frame" />
    </div>
    <div class="w-full absolute right-0 bottom-0">
      <img class="w-full" :src="bottomFrame" alt="bg-frame" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import { setParallax } from '~/libs/animation'

  interface Props {
    topFrame?: string
    bottomFrame?: string
    bgImage?: string
  }

  defineProps<Props>()
  const { locale } = useI18n()
  let parallaxInstances: any[] = []

  // 初始化視差效果
  const initParallax = () => {
    try {
      // 清理舊的實例
      if (parallaxInstances && parallaxInstances.length) {
        parallaxInstances.forEach(instance => {
          if (instance && instance.kill) {
            instance.kill()
          }
        })
      }
      
      // 延遲初始化，確保DOM已完全渲染
      setTimeout(() => {
        parallaxInstances = setParallax() || []
      }, 300)
    } catch (error) {
      console.error('初始化視差效果時出錯:', error)
      parallaxInstances = []
    }
  }

  onMounted(() => {
    // 確保DOM已完全渲染
    setTimeout(() => {
      initParallax()
    }, 300)
  })

  // 監聽語言變更
  watch(() => locale.value, async () => {
    await nextTick()
    // 適當延遲，確保頁面重新計算完成
    setTimeout(initParallax, 300)
  })

  onBeforeUnmount(() => {
    // 組件卸載時清理視差效果
    try {
      parallaxInstances.forEach(instance => {
        if (instance && instance.kill) {
          instance.kill()
        }
      })
    } catch (error) {
      console.error('卸載時清理視差效果出錯:', error)
    }
  })
</script>
