import md5 from '../utils/md5'

export default function getFont() {
  const fonts = [
    'Helvetica',
    'Arial',
    'Tahoma',
    'PingFang SC',
    'Hiragino Sans GB',
    'Heiti SC',
    'Segoe UI',
    'Microsoft YaHei',
    'WenQuanYi Micro Hei',
    'Roboto',
    'Noto Sans',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Noto Color Emoji',
    'Times New Roman',
    'Verdana',
    'sans-serif-smallcaps',
    'cursive',
    'sans-serif-black',
    'sans-serif-condensed-light',
    'sans-serif-thin',
    'serif-monospace',
    'sans-serif-medium',
    'sans-serif-light',
    'sans-serif-condensed-medium',
    'casual',
  ]

  function Detector() {
    const dtFonts = ['monospace', 'sans-serif', 'serif']
    const testStr = 'ssssssssssslli'
    const testSize = '72px'
    const h = document.getElementsByTagName('body')[0]
    const s = document.createElement('span')
    s.style.fontSize = testSize
    s.style.position = 'absolute'
    s.style.left = '-9999px'
    s.style.lineHeight = 'normal'
    s.innerHTML = testStr
    const defaultWidth = {}
    const defaultHeight = {}
    /* eslint-disable guard-for-in */
    /* eslint-disable no-restricted-syntax */
    for (const index in dtFonts) {
      s.style.fontFamily = dtFonts[index]
      h.appendChild(s)
      defaultWidth[dtFonts[index]] = s.offsetWidth
      defaultHeight[dtFonts[index]] = s.offsetHeight
      h.removeChild(s)
    }
    function detect(font) {
      let detected = false
      for (const index in dtFonts) {
        s.style.fontFamily = `${font},${dtFonts[index]}`
        h.appendChild(s)
        const matched = s.offsetWidth !== defaultWidth[dtFonts[index]]
                        || s.offsetHeight !== defaultHeight[dtFonts[index]]
        h.removeChild(s)
        detected = detected || matched
        if (detect) {
          break
        }
      }
      return detected
    }
    this.detect = detect
  }
  const d = new Detector()
  let fontString = ''
  for (let i = 0; i < fonts.length; i++) {
    if (d.detect(fonts[i])) {
      fontString += fonts[i]
    }
  }
  return md5(fontString)
}
