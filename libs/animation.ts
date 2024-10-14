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

export const runningAnimation = (target: HTMLElement, width: number) => {
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

  // hover 暫停效果
  target.addEventListener('mouseenter', () => {
    tl.pause() // 懸停時暫停動畫
  })

  target.addEventListener('mouseleave', () => {
    tl.resume() // 懸停結束時繼續動畫
  })
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
        trigger: '#top',
        pin: false,
        scrub: 2,
        start: 'top bottom',
        end: 'bottom top',
      },
    })
    .to(target, {
      rotate: clockwise ? '+=720' : '-=720',
      duration: 4,
      ease: 'none',
      delay: delay,
    })
}

export const setParallax = () => {
  const events = gsap.utils.toArray('.parallax')
  const getRatio = (el) =>
    window.innerHeight / (window.innerHeight + el.offsetHeight)

  events.forEach((event, i) => {
    const image = event.querySelectorAll('.parallaxImage')
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: event,
        start: () => (i ? 'top bottom' : 'top top'),
        end: 'bottom top',
        scrub: 0.1,
        invalidateOnRefresh: true,
      },
    })

    tl.fromTo(
      image,
      {
        y: () => (i ? -window.innerHeight * getRatio(event) * 0.3 : 0),
      },
      {
        y: () => window.innerHeight * (1 - getRatio(event)) * 0.3,
        ease: 'none',
      }
    )
  })
}

export const hoverMovingEffect = (target: HTMLElement) => {
  const moveDistance = 20 // 圖片移動的最大距離（根據需要調整）

  // 獲取圖片的寬高和中心點
  const imageRect = target.getBoundingClientRect()
  const imageCenterX = imageRect.left + imageRect.width / 2
  const imageCenterY = imageRect.top + imageRect.height / 2

  // 監聽滑鼠移動事件
  target.addEventListener('mousemove', (event) => {
    // 計算滑鼠相對於圖片中心的距離
    const mouseX = event.clientX
    const mouseY = event.clientY

    const offsetX = (mouseX - imageCenterX) / imageRect.width
    const offsetY = (mouseY - imageCenterY) / imageRect.height

    // 根據滑鼠位置稍微移動圖片，使用 GSAP 平滑移動
    gsap.to(target, {
      x: offsetX * moveDistance,
      y: offsetY * moveDistance,
      duration: 0.3,
      ease: 'power2.out',
    })
  })

  // 當滑鼠離開圖片時，將圖片移回原位
  target.addEventListener('mouseleave', () => {
    gsap.to(target, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: 'power2.out',
    })
  })
}
