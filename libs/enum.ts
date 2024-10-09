enum LinkHook {
  INTRODUCTION = "#introduction",
  SKILLS = "#skills",
  EXPERIENCE = "#experience",
  FUTURE = "#future",
  CONTACT = "#contact",
}

export const navItems = [
  { name: "關於我", href: LinkHook.INTRODUCTION },
  { name: "技能樹", href: LinkHook.SKILLS },
  { name: "經歷", href: LinkHook.EXPERIENCE },
  { name: "願景", href: LinkHook.FUTURE },
  { name: "聯繫我", href: LinkHook.CONTACT },
];
