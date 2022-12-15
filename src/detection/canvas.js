import md5 from '../utils/md5'

export default function getCanvas() {
  try {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = 120
    canvas.height = 20
    const txt = 'TrustDecisionJS'
    ctx.font = "14px 'Arial'"
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, 120, 20)
    ctx.fillStyle = 'rgba(102, 204, 0, 0.7)'
    ctx.fillText(txt, 2, 15)
    const canvasData = canvas.toDataURL()
    if (canvas.toDataURL()) {
      return md5(canvasData)
    }
    return ''
  } catch (e) {
    return ''
  }
}
