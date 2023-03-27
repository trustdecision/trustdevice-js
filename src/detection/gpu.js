export default function getGpu() {
  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl')
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info')
    const result =  `${gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL)}|${gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)}`
    try {
      gl.getExtension('WEBGL_lose_context')
        .loseContext() // 清除WEBGL
    } catch (e) {
      /* .getExtension may be absent or broken (blocked by extension) */
    }
    return result || ''
  } catch (e) {
    return ''
  }
}
