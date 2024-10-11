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
      x: 200,
    },
    {
      x: -width,
      duration: 10,
      ease: 'none',
    }
  )
}

interface RotateOptions {
  target: string
  clockwise: boolean
  delay: number
}

export const infiniteRotate = (options: RotateOptions) => {
  const { target, clockwise, delay } = options
  gsap
    .timeline({
      repeat: -1,
      repeatDelay: 0,
      yoyo: true,
      delay: delay,
    })
    .to(target, {
      rotate: clockwise ? '+=432' : '-=432',
      duration: 4,
      ease: 'slow',
    })
}

export const scrollRotate = (options: RotateOptions) => {
  const { target, clockwise, delay } = options
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '#skills',
        pin: false,
        scrub: 2,
        start: 'top center',
        end: 'bottom top',
      },
    })
    .to(target, {
      rotate: clockwise ? '+=432' : '-=432',
      duration: 1,
      ease: 'none',
      delay: delay,
    })
}
