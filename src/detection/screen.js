export default function getScreen() {
  const {
    height, width, colorDepth, pixelDepth,
  } = window.screen
  return {
    height, width, colorDepth, pixelDepth,
  }
}
