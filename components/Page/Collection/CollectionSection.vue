<template>
  <div id="collection" class="f-container py-10 flex flex-col gap-10">
    <TitleText en="Experience" zh="工作經歷" className="flex-none flex-col" />
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
  const events = [
    {
      title: 'Go Green With Taiwan',
      subtitle: '2024/06 - 2024/06 工作專案',
      link: 'https://gogreen.taiwanexcellence.org/',
      content:
        '專案架構使用 Nuxt3 + Tailwindcss + GSAP 動畫，讓網站看起來更生動',
    },
    {
      title: '募資平台網站畫面調整',
      subtitle: '2024/03 - 2024/05 工作專案',
      link: '',
      content:
        '平台主要使用 PHP Laravel Blade 與部分 Vue 頁面，配合平台既有架構做 Vue & html 的畫面切版',
    },
    {
      title: '寶雅新春活動登錄',
      subtitle: '2024/11 - 2024/12 工作專案',
      link: '',
      content:
        '專案架構使用 Nuxt3 + Tailwindcss + Axios，並串接寶雅 POYA SSO 做會員登錄，並讓會員在網站上可以登錄活動序號、查詢序號紀錄',
    },
    {
      title: '計算卡路里網站',
      subtitle: '2024/01 - 2024/02 工作專案',
      link: 'https://aseecalories.org/',
      content:
        '專案架構使用 Nuxt3 + Tailwindcss + Axios，製作前端畫面讓使用者操作，並串接後端 api 呈現計算結果',
    },
    {
      title: '美語購課網站',
      subtitle: '2022/08 - 2022/10 工作專案',
      link: '',
      content:
        '專案架構使用 Nuxt2 + Node.js + Tailwindcss，三位工程師協作完成的購課與師生課程預約系統',
      list: [
        '頁面切版與 api 資料串接',
        'FB Messanger 與頁面分享功能',
        'Linepay 與信用卡金流串接',
        '登入 Token 與 Refresh Token 實作',
      ],
    },
    {
      title: '美語購課網站',
      subtitle: '2021/12 - 2022/05 工作專案',
      link: 'https://www.ynso.com.tw/online/',
      content:
        '專案架構使用 Nuxt2 + Node.js + Tailwindcss，三位工程師協作完成的購課與師生課程預約系統',
      list: [
        '頁面切版與 api 資料串接',
        'FB Messanger 與頁面分享功能',
        'Linepay 與信用卡金流串接',
        '登入 Token 與 Refresh Token 實作',
      ],
    },
    {
      title: '小春堂和菓子專門店',
      subtitle: '2021/06 - 2021/08 轉職課程｜團隊專題作品',
      link: 'https://tibamef2e.com/tfd102/project/g3/',
      content:
        '此為六人團隊專題作品，小春堂是和菓子專賣店電商網站。除了切版與動畫，還有實際建立資料庫，並透過 Ajax 與 PHP 向 MySQL 資料庫傳送與拿取資料，做到一個完整的前後端串接。',
    },
    {
      title: 'LANZI 懶系酒吧',
      subtitle: '2021/03 - 2021/06 轉職課程｜個人作品',
      link: 'https://chaoowen.github.io/TFD102-07/index.html',
      content:
        '此為首個個人專題作品，學習使用 Adobe XD 做 Logo 與網頁設計，並使用 html / css / JavaScript 做網頁切版與動畫特效製作簡單網站。',
    },
  ]
</script>
