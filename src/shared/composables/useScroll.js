/**
 * Composable para manejar el scroll de la página
 */
import { nextTick } from 'vue'

export function useScroll() {
  /**
   * Scroll suave al top de la página
   */
  const scrollToTop = async (behavior = 'smooth') => {
    await nextTick()
    window.scrollTo({
      top: 0,
      left: 0,
      behavior
    })
  }

  /**
   * Scroll a un elemento específico
   */
  const scrollToElement = async (elementId, behavior = 'smooth') => {
    await nextTick()
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior })
    }
  }

  /**
   * Scroll a una posición específica
   */
  const scrollToPosition = async (top = 0, left = 0, behavior = 'smooth') => {
    await nextTick()
    window.scrollTo({
      top,
      left,
      behavior
    })
  }

  /**
   * Obtener la posición actual del scroll
   */
  const getScrollPosition = () => {
    return {
      top: window.pageYOffset || document.documentElement.scrollTop,
      left: window.pageXOffset || document.documentElement.scrollLeft
    }
  }

  return {
    scrollToTop,
    scrollToElement,
    scrollToPosition,
    getScrollPosition
  }
}

export default useScroll
