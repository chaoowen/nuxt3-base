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
      title: '火焰獅',
      subtitle: '2021/01/01',
      content:
        '火焰獅是一種充滿力量的火屬性虛構寶貝，擁有燃燒般的鬃毛和鋒利的爪子。牠棲息在火山附近，能夠利用熔岩來增強自己的力量。當火焰獅憤怒時，牠的鬃毛會變得更加炙熱，能夠放出高溫的火焰攻擊對手。火焰獅具有極強的戰鬥意志，無論面對多麼強大的敵人，牠總是毫不畏懼。牠的招牌技能是「熔岩衝擊」，能夠瞬間釋放熾熱的火焰來壓制對手。火焰獅適合在困難的環境下作戰，對牠來說，火焰代表著希望與力量。',
    },
    {
      title: '水晶蝶',
      subtitle: '2021/01/01',
      content:
        '水晶蝶是一種優雅且神秘的蟲屬性和冰屬性虛構寶貝，翅膀上覆蓋著晶瑩剔透的冰晶。牠喜歡生活在寒冷的山區，並以冰花為食。水晶蝶能夠釋放冰雪來保護自己，也能用來迷惑對手。牠的翅膀能反射陽光，使牠在空中飛行時看起來像一片飄動的冰霧。水晶蝶擅長使用冰系技能「冰風暴」，能夠召喚強大的暴風雪，來減弱敵人的速度。牠的外表雖然柔弱，但其防禦能力極為強大。',
    },
    {
      title: '火焰雷電水晶蜥',
      subtitle: '2021/01/01',
      content:
        '雷電蜥是一種電屬性與毒屬性的虛構寶貝，牠的身體帶有強烈的靜電，能夠在短時間內爆發出驚人的電擊。牠主要棲息在熱帶叢林和雷雨頻發的地區，吸收雷電作為能量來源。雷電蜥天生具有極快的移動速度，能夠輕易閃避敵人的攻擊。牠的標誌性技能「雷毒閃擊」能夠同時對敵人造成電擊與中毒的雙重傷害，使敵人陷入長期的弱勢狀態。雷電蜥以靈活與強大的電能為特點，通常在戰鬥中占據主動地位。',
    },
  ]
</script>
