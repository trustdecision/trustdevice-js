export default function getScreen() {
  const {
    availHeight, availWidth, availLeft, availTop, height, width, colorDepth, pixelDepth,
  } = window.screen
  return {
    availHeight, availWidth, availLeft, availTop, height, width, colorDepth, pixelDepth,
  }
}
