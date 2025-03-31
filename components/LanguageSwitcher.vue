<template>
  <div class="language-switcher relative inline-block">
    <button 
      @click.stop="toggleDropdown"
      ref="buttonRef"
      class="lang-toggle flex items-center gap-2"
      type="button"
    >
      <span class="inline-flex items-center text-primary">
        {{ currentLocale === 'zh-tw' ? $t('language_name.chinese') : $t('language_name.english') }}
      </span>
      <svg class="w-3 h-3 ms-2 text-primary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
      </svg>
    </button>
    
    <Teleport to="body">
      <div 
        v-if="isOpen" 
        ref="dropdownRef"
        class="lang-dropdown shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg"
        :style="dropdownStyle"
      >
        <div class="py-1" role="none">
          <button
            v-for="locale in availableLocales" 
            :key="locale.code"
            @click.stop="switchLanguage(locale.code)"
            :class="{ 'bg-gray-100 dark:bg-gray-700': locale.code === currentLocale }"
            class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-secondary-light dark:hover:bg-gray-700 w-full text-left"
            role="menuitem"
          >
            {{ locale.code === 'zh-tw' ? $t('language_name.chinese') : $t('language_name.english') }}
          </button>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()

const isOpen = ref(false)
const buttonRef = ref(null)
const dropdownRef = ref(null)
const dropdownStyle = ref({
  position: 'fixed',
  top: '0px',
  left: '0px',
  zIndex: 1050,
  minWidth: '120px',
  opacity: 0,
})

const updateDropdownPosition = async () => {
  if (!buttonRef.value || !isOpen.value) return
  
  await nextTick()
  
  if (!dropdownRef.value) return
  
  const buttonRect = buttonRef.value.getBoundingClientRect()
  
  // 計算下拉選單的位置
  let top, left
  
  // 計算是否足夠空間顯示在下方
  if (window.innerHeight - buttonRect.bottom > 150) {
    // 顯示在按鈕下方
    top = buttonRect.bottom + 5
    left = buttonRect.right - 120 // 讓下拉選單右對齊按鈕
  } else {
    // 顯示在按鈕上方
    top = buttonRect.top - 5 - (dropdownRef.value?.offsetHeight || 100)
    left = buttonRect.right - 120
  }
  
  // 確保下拉選單不會超出螢幕
  left = Math.max(10, Math.min(left, window.innerWidth - 130))
  
  dropdownStyle.value = {
    position: 'fixed',
    top: `${top}px`,
    left: `${left}px`,
    zIndex: 1050,
    minWidth: '120px',
    opacity: 1,
  }
}

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
  
  if (isOpen.value) {
    // 打開下拉選單時立即更新位置
    updateDropdownPosition()
  }
}

// 點擊組件外部時關閉下拉選單
const onClickOutside = (event) => {
  if (!isOpen.value) return
  
  if (buttonRef.value && dropdownRef.value && 
      !buttonRef.value.contains(event.target) && 
      !dropdownRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

const currentLocale = computed(() => locale.value)
const availableLocales = computed(() => locales.value)

const switchLanguage = (localeCode) => {
  const path = switchLocalePath(localeCode)
  isOpen.value = false
  if (path) {
    router.push(path)
  }
}

onMounted(() => {
  if (process.client) {
    document.addEventListener('mousedown', onClickOutside)
    window.addEventListener('resize', updateDropdownPosition)
    window.addEventListener('scroll', updateDropdownPosition, true)
  }
})

onBeforeUnmount(() => {
  if (process.client) {
    document.removeEventListener('mousedown', onClickOutside)
    window.removeEventListener('resize', updateDropdownPosition)
    window.removeEventListener('scroll', updateDropdownPosition, true)
  }
})
</script>

<style scoped>
.language-switcher {
  position: relative;
  display: inline-block;
}

.lang-toggle {
  padding: 0.375rem 0.75rem;
  background-color: transparent;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
}

.lang-toggle:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.lang-dropdown {
  transition: all 0.15s ease-out;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.lang-dropdown {
  animation: fadeIn 0.2s ease-out forwards;
}
</style>
