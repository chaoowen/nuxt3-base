enum LinkHook {
  INTRODUCTION = '#introduction',
  SKILLS = '#skills',
  EXPERIENCE = '#experience',
  FUTURE = '#future',
  CONTACT = '#contact',
}

export const navItems = [
  { name: '關於我', to: LinkHook.INTRODUCTION },
  { name: '技能樹', to: LinkHook.SKILLS },
  { name: '經歷', to: LinkHook.EXPERIENCE },
  { name: '願景', to: LinkHook.FUTURE },
  { name: '聯繫我', to: LinkHook.CONTACT },
]
