<template>
  <div id="collection" class="f-container py-10 flex flex-col gap-10">
    <TitleText en="Collection" zh="作品集" className="flex-none flex-col" />
    <div class="space-y-6 md:space-y-12">
      <CollectionCard
        v-for="event in events"
        :key="event.title"
        v-bind="event"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  const { t } = useI18n()

  const events = [
    {
      title: t('collectionContent.goGreen.name'),
      subtitle: t('collectionContent.goGreen.time'),
      link: 'https://gogreen.taiwanexcellence.org/',
      content: t('collectionContent.goGreen.subtitle')
    },
    {
      title: t('collectionContent.flyingV.name'),
      subtitle: t('collectionContent.flyingV.time'),
      link: '',
      content: t('collectionContent.flyingV.subtitle')
    },
    {
      title: t('collectionContent.poya.name'),
      subtitle: t('collectionContent.poya.time'),
      link: '',
      content: t('collectionContent.poya.subtitle')
    },
    {
      title: t('collectionContent.calories.name'),
      subtitle: t('collectionContent.calories.time'),
      link: 'https://aseecalories.org/',
      content: t('collectionContent.calories.subtitle')
    },
    {
      title: t('collectionContent.tkb.name'),
      subtitle: t('collectionContent.tkb.time'),
      link: 'https://www.ynso.com.tw/online/',
      content: t('collectionContent.tkb.subtitle'),
      list: [
        t('collectionContent.tkb.content1'),
        t('collectionContent.tkb.content2'),
        t('collectionContent.tkb.content3'),
        t('collectionContent.tkb.content4'),
      ],
    },
    {
      title: t('collectionContent.wagashi.name'),
      subtitle: t('collectionContent.wagashi.time'),
      link: 'https://tibamef2e.com/tfd102/project/g3/',
      content: t('collectionContent.wagashi.subtitle')
    },
    {
      title: t('collectionContent.lanzi.name'),
      subtitle: t('collectionContent.lanzi.time'),
      link: 'https://chaoowen.github.io/TFD102-07/index.html',
      content: t('collectionContent.lanzi.subtitle')
    },
  ]
</script>
