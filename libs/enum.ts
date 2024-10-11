enum LinkHook {
  INTRODUCTION = '#introduction',
  SKILLS = '#skills',
  EXPERIENCE = '#experience',
  COLLECTION = '#collection',
  FUTURE = '#future',
  CONTACT = '#contact',
}

export const navItems = [
  { name: '關於我', to: LinkHook.INTRODUCTION },
  { name: '技能樹', to: LinkHook.SKILLS },
  { name: '經歷', to: LinkHook.EXPERIENCE },
  { name: '作品集', to: LinkHook.COLLECTION },
  { name: '願景', to: LinkHook.FUTURE },
  { name: '聯繫我', to: LinkHook.CONTACT },
]
