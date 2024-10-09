import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
}

export const moveTo = (target: string) => {
  gsap.to(window, {
    duration: 0.1,
    scrollTo: { y: target, offsetY: 100 },
    ease: 'slow',
  })
}

export const runningAnimation = (target, width: number) => {
  const tl = gsap.timeline({ repeat: -1 })
  tl.fromTo(
    target,
    {
      x: 400,
    },
    {
      x: -width,
      duration: 10,
      ease: 'none',
    }
  )
}
