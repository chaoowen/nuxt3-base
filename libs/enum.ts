enum LinkHook {
  INTRODUCTION = '#introduction',
  SKILLS = '#skills',
  EXPERIENCE = '#experience',
  COLLECTION = '#collection',
  // FUTURE = '#future',
  CONTACT = '#contact',
}

export const navItems = [
  { name: 'about', to: LinkHook.INTRODUCTION },
  { name: 'skills', to: LinkHook.SKILLS },
  { name: 'experience', to: LinkHook.EXPERIENCE },
  { name: 'collection', to: LinkHook.COLLECTION },
  // { name: '願景', to: LinkHook.FUTURE },
  { name: 'contact', to: LinkHook.CONTACT },
]
