export default function getDebugger() {
  const threshold = 200
  const widthThreshold = window.outerWidth - window.innerWidth > threshold
  const heightThreshold = window.outerHeight - window.innerHeight > threshold
  if (window.screen && window.screen.width >= 800) {
    if (widthThreshold || heightThreshold) {
      return 1
    }
  }
  return 0
}
