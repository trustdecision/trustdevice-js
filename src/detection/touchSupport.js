export default function getTouchSupport() {
  let touchEvent = false
  try {
    document.createEvent('TouchEvent')
    touchEvent = true
  } catch (e) {}
  return touchEvent
}
