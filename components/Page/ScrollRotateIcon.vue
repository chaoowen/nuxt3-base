<template>
  <div>
    <img
      ref="rotateElement"
      :class="['w-full object-contain', iconName]"
      :src="image"
      :alt="name"
    />
  </div>
</template>

<script setup lang="ts">
  import { scrollRotate } from '~/libs/animation'
  import { useI18n } from 'vue-i18n'

  interface Props {
    image: string
    name?: string
    isClockWise?: boolean
  }
  const props = withDefaults(defineProps<Props>(), {
    name: '',
    isClockWise: true,
  })

  const iconName = computed(() => {
    return `scroll-rotate-icon-${props.name}`
  })

  const { locale } = useI18n()
  let scrollTriggerInstance: any = null

  // 初始化旋轉動畫效果
  const initRotateAnimation = () => {
    try {
      // 清理舊的實例
      if (scrollTriggerInstance && scrollTriggerInstance.kill) {
        scrollTriggerInstance.kill()
        scrollTriggerInstance = null
      }
      
      // 延遲初始化，確保DOM已完全渲染
      setTimeout(() => {
        const selector = `.${iconName.value}`
        if (document.querySelector(selector)) {
          scrollTriggerInstance = scrollRotate({
            target: selector,
            clockwise: props.isClockWise,
            delay: 0,
          }) || null
        }
      }, 300)
    } catch (error) {
      console.error('初始化旋轉動畫時出錯:', error)
      scrollTriggerInstance = null
    }
  }

  onMounted(() => {
    // 確保DOM已完全渲染
    setTimeout(() => {
      initRotateAnimation()
    }, 300)
  })

  // 監聽語言變更
  watch(() => locale.value, async () => {
    await nextTick()
    // 適當延遲，確保頁面重新計算完成
    setTimeout(initRotateAnimation, 300)
  })

  onBeforeUnmount(() => {
    // 組件卸載時清理動畫
    try {
      if (scrollTriggerInstance && scrollTriggerInstance.kill) {
        scrollTriggerInstance.kill()
      }
    } catch (error) {
      console.error('卸載時清理動畫出錯:', error)
    }
  })
</script>
