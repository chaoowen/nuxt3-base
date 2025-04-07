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

// 添加常量用於標識不同類型的 ScrollTrigger
const ANIMATION_TYPES = {
  ROTATE: 'rotate',
  PARALLAX: 'parallax'
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
  const { target, clockwise } = options
  
  // 只清理旋轉相關的 ScrollTrigger 實例
  try {
    ScrollTrigger.getAll().forEach(st => {
      if (st && st.kill && st.vars && st.vars.id === ANIMATION_TYPES.ROTATE) {
        st.kill()
      }
    })
  } catch (error) {
    console.error('清理旋轉動畫 ScrollTrigger 實例時出錯:', error)
  }
  
  const createdInstances: any[] = []
  
  try {
    // 確保目標元素存在
    const elements: HTMLElement[] = gsap.utils.toArray(target)
    if (elements.length === 0) {
      console.warn(`未找到目標元素: ${target}`)
      return null
    }
    
    // 對每個元素應用旋轉動畫
    elements.forEach((element) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          invalidateOnRefresh: true,
          id: ANIMATION_TYPES.ROTATE, // 添加標識符
        },
      })
      
      tl.to(element, {
        rotation: clockwise ? 720 : -720,
        ease: 'none',
        overwrite: 'auto',
      })
      
      if (tl.scrollTrigger) {
        createdInstances.push(tl.scrollTrigger)
      }
    })
    
    // 返回第一個創建的實例
    return createdInstances.length > 0 ? createdInstances[0] : null
    
  } catch (error) {
    console.error('創建旋轉動畫時出錯:', error)
    return null
  }
}

export const setParallax = () => {
  // 在生產環境移除調試輸出
  const isProduction = process.env.NODE_ENV === 'production'
  // 檢測裝置性能
  const isLowPerformanceDevice = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  
  // 只清理視差相關的 ScrollTrigger 實例
  try {
    ScrollTrigger.getAll().forEach(st => {
      if (st && st.kill && st.vars && st.vars.id === ANIMATION_TYPES.PARALLAX) {
        st.kill()
      }
    })
  } catch (error) {
    console.error('清理視差效果 ScrollTrigger 實例時出錯:', error)
  }
  
  const createdInstances: any[] = []
  
  try {
    const events: HTMLElement[] = gsap.utils.toArray('.parallax')
    const getRatio = (el: any) =>
      window.innerHeight / (window.innerHeight + el.offsetHeight)

    events.forEach((event, i) => {
      const image = event.querySelectorAll('.parallaxImage')
      
      // 跳過沒有圖片的元素
      if (image.length === 0) {
        return
      }
      
      // 根據裝置調整視差強度
      const parallaxFactor = isLowPerformanceDevice ? 0.1 : 0.3
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: event,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.1,
          invalidateOnRefresh: true,
          markers: !isProduction && process.env.NODE_ENV === 'development',
          id: ANIMATION_TYPES.PARALLAX, // 添加標識符
        },
      })

      tl.fromTo(
        image,
        {
          y: () => -window.innerHeight * getRatio(event) * parallaxFactor,
          force3D: true, // 啟用硬體加速
        },
        {
          y: () => window.innerHeight * (1 - getRatio(event)) * parallaxFactor,
          ease: 'none',
          force3D: true, // 啟用硬體加速
        }
      )
      
      if (tl.scrollTrigger) {
        createdInstances.push(tl.scrollTrigger)
      }
    })
  } catch (error) {
    console.error('設置視差效果時出錯:', error)
  }
  
  // 返回創建的實例
  return createdInstances
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
