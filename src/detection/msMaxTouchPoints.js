export default function getMaxTouchPoints() {
  let maxTouchPoints = 0
  if (typeof navigator.maxTouchPoints !== 'undefined') {
    // eslint-disable-next-line prefer-destructuring
    maxTouchPoints = navigator.maxTouchPoints
  } else if (typeof navigator.msMaxTouchPoints !== 'undefined') {
    maxTouchPoints = navigator.msMaxTouchPoints
  }
  return maxTouchPoints
}
