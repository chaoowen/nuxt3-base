<template>
  <div id="contact" class="f-container py-10 space-y-10">
    <TitleText en="Contact" zh="聯繫我" className="text-primary-dark" />
    <div class="flex-center">
      <div
        class="flex flex-col md:flex-row gap-8 md:gap-16 items-start justify-between"
      >
        <div
          v-for="event in events"
          :key="event.text"
          class="flex-center gap-2"
        >
          <div
            class="w-8 h-8 md:w-10 md:h-10 flex-center bg-secondary rounded-full"
          >
            <img
              :src="event.icon"
              alt="phone-icon"
              class="w-5 h-5 md:w-6 md:h-6"
            />
          </div>
          <a
            v-if="event.link"
            :href="event.link"
            target="_blank"
            class="ubuntu-medium text-primary underline underline-offset-4 hover:text-primary-light"
          >
            {{ event.text }}
          </a>
          <span v-else class="ubuntu-medium text-primary">{{
            event.text
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import phoneIcon from '~/assets/icons/phone.svg'
  import fileIcon from '~/assets/icons/file.svg'
  import mailboxIcon from '~/assets/icons/mail-box.svg'

  const events = [
    {
      icon: phoneIcon,
      text: '0939-264-701',
    },
    {
      icon: fileIcon,
      link: 'https://chaoowen.github.io/nuxt3-base/chaowen-resume.pdf',
      text: '履歷下載',
    },
    {
      icon: mailboxIcon,
      text: 'chanffe@gmail.com',
    },
  ]
</script>
