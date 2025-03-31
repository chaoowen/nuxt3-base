<template>
  <div id="experience" class="f-container py-20 xl:py-30">
    <div class="flex flex-col xl:flex-row gap-10 md:gap-24 xl:gap-30">
      <TitleText en="Experience" zh="工作經歷" className="flex-none flex-col" />
      <div>
        <ExpansionList :events="events" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { t } = useI18n()
  
  // 輔助函數：從對象格式轉換為數組格式
  const getContentList = (prefix: string, maxItems: number = 10) => {
    const result = []
    for (let i = 1; i <= maxItems; i++) {
      const content = t(`${prefix}.content${i}`)
      // 如果翻譯存在且不是以 content 開頭 (避免回傳翻譯鍵名)，則添加到結果
      if (content && !content.startsWith('content')) {
        result.push(content)
      }
    }
    return result
  }
  
  const events = [
    {
      title: t('experienceContent.fontech.title'),
      code: 'job-3',
      date: t('experienceContent.fontech.time'),
      text: t('experienceContent.fontech.subtitle'),
      list: getContentList('experienceContent.fontech', 5),
    },
    {
      title: t('experienceContent.tkb.title'),
      code: 'job-2',
      date: t('experienceContent.tkb.time'),
      text: t('experienceContent.tkb.subtitle'),
      list: getContentList('experienceContent.tkb', 5),
    },
    {
      title: t('experienceContent.showtime.title'),
      code: 'job-0',
      date: t('experienceContent.showtime.time'),
      text: t('experienceContent.showtime.subtitle'),
      list: getContentList('experienceContent.showtime', 6),
    },
  ]
</script>
