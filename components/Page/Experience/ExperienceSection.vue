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
      title: '寶可夢',
      code: 'job-3',
      text: '在接案公司工作時，我參與了多個不同行業的前端開發專案，這讓我具備了靈活應對各類需求的能力。我的主要任務是根據客戶需求開發定製化網站和應用，涵蓋電子商務平台、公司官網及小型企業的管理系統。我主要使用 Vue.js 和 Nuxt.js 開發響應式的前端界面，並確保不同瀏覽器和設備下的兼容性。由於接案工作節奏快，我學會了如何有效地管理時間，並同時處理多個項目。我也需要獨立完成前後端 API 的串接，確保專案能夠如期交付，並符合客戶的要求。',
    },
    {
      title: '數碼寶貝',
      code: 'job-2',
      text: '在航空公司擔任前端工程師期間，我參與了公司官網及預訂系統的重構與功能開發，專注於提升用戶預訂航班的流暢度和界面設計的美觀度。我主要使用 Nuxt.js 與 Vue.js 進行開發，並結合了 Tailwind CSS 來確保頁面設計的一致性與響應性。這份工作不僅需要關注用戶體驗，還需要符合航空業的安全性和數據處理標準。我還負責整合第三方 API，如航班動態和支付平台，以確保用戶的數據交互順暢且安全。此外，我還參與了性能優化，縮短頁面加載時間，提高整體用戶滿意度。',
    },
    {
      title: '飛天小女警',
      code: 'job-1',
      text: '在補習班擔任前端工程師期間，我負責開發和維護學生管理系統和線上學習平台。該工作讓我深刻理解了教育科技領域的需求，如提升用戶體驗、開發響應式界面和確保系統穩定性。我的主要技術堆疊是 Vue.js、Tailwind CSS 與 JavaScript，並且專注於設計直觀且易於操作的學習工具，確保學生和老師都能輕鬆使用該平台。我與後端工程師緊密合作，透過 API 完成數據的流暢傳遞。此外，我也負責監控系統的性能，並實施多項優化，提升整體操作效率與用戶體驗。',
    },
  ]
</script>
