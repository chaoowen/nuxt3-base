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
  const events = [
    {
      title: '方客特 前端工程師',
      code: 'job-3',
      date: '2023/10 - 2025/03',
      text: '在接案公司的挑戰除了開發新專案，就是維護既有的龐大舊專案，想辦法在複雜的邏輯中做出新需求調整',
      list: [
        '製作 5 個以上的活動網站，使用 Nuxt3 + Tailwindcss + TypeScript 元件模板，加速開發',
        '製作 1 個 html + sass + JavaScript 切版網站',
        '維護 4 個 PHP Laravel Blade 舊專案',
        '維護 2 個無障礙網站修正問題與過檢測',
        '維護 1 個 Nuxt2 + graphQL 大型網站',
      ],
    },
    // {
    //   title: '星宇航空 前端工程師',
    //   code: 'job-2',
    //   date: '2023/03 - 2023/06',
    //   text: '雖有準時完成專案，但因程式碼思考面與習慣不同，再加上時間限制下不夠有效的溝通而未通過試用期，但這段時間裡我學習了更具元件模組化與架構的想法，我覺得還是很充實，若有機會也想以現在的我再次挑戰',
    //   list: [
    //     '使用元件模板化寫程式',
    //     'clean code 程式碼優化',
    //     '依據使用者需求新增並調整網站功能',
    //   ],
    // },
    {
      title: '台灣知識庫 資訊部專員',
      code: 'job-1',
      date: '2021/10 - 2023/02',
      list: [
        '與同事協作完成 2 個 Nuxt2 架構的約課、購課系統網站',
        '獨立完成 1 個 Nuxt2 架構的線上解題網站',
        'figma 繪製 1 個客服系統網站提案',
        '完成多項前後端不分離專案的 Html 切版 與 JavaScript、jQuery 功能撰寫',
        '自學 Flutter 並完成 2 個 app 畫面切版與功能',
      ],
    },
    {
      title: '秀泰影城 行銷企劃專員',
      code: 'job-0',
      date: '2018/05 - 2021/03',
      text: '作為活動窗口長期與人溝通而有些倦怠，對於行銷提案也感到疲乏，在與工程師溝通網站修改的過程中，開始接觸寫網站，並在自學一段時間確定感興趣後，報名參加轉職課程',
      list: [
        '工程師聯繫窗口，官網與 APP 的內容修改、維護、改版',
        '主導 8 間影城教育訓練使用電視牆軟體，減少15%更新時間',
        '完成 11 項異業合作與提案，協助 Ubereats / 搜賣桌媒體 / LINE Pay 等合作',
        '參與近 20 場首映會、擔任超過 100 場活動的主要窗口、與 6 家新影城開幕活動',
        '開發販售 5 部電影周邊商品、行銷文宣，以及節慶特殊活動與會員活動',
        '社群媒體經營、兼任客服回信超過 1000 件顧客意見',
      ],
    },
  ]
</script>
