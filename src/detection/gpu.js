export default function getGpu() {
  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl')
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
    return `${gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL)}|${gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)}`
  } catch (e) {
    return ''
  }
}
