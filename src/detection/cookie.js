const win = window
const doc = document
const nav = window.navigator
let domain
const ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3})/
const points = (win.location.hostname || '').match(/\./g)
const pointsCount = !points ? 0 : points.length
if (ipRegex.exec(win.location.hostname)) {
  domain = win.location.hostname
} else if (pointsCount > 2) {
  domain = `.${win.location.hostname.replace(/^(\w+)\./, '')}`
} else {
  domain = `.${win.location.hostname.replace(/^(?:.+\.)?(\w+\.\w+)$/, '$1')}`
}
const cookie = {
  set(name, value) {
    try {
      if (win.localStorage) {
        localStorage[name] = value
      }
    } catch (e) {
    }
    try {
      if (win.sessionStorage) {
        win.sessionStorage.setItem(name, value)
      }
    } catch (e) {
    }

    if (nav.cookieEnabled) {
      const days = 365 * 1000 * 60 * 60 * 24
      let c = `${name}=${encodeURIComponent(value)}`
      c += `; domain=${domain}; expires=${new Date(new Date().getTime() + days).toGMTString()}; path=/`
      doc.cookie = c
    }
  },
  get(name) {
    let value = ''
    try {
      if (win.localStorage) {
        value = localStorage[name] || ''
        if (value.length === 32) {
          return value
        }
      }
    } catch (e) {
    }
    try {
      if (win.sessionStorage) {
        value = win.sessionStorage.getItem(name) || ''
        if (value.length === 32) {
          return value
        }
      }
    } catch (e) {
    }
    if (nav.cookieEnabled) {
      let start = doc.cookie.indexOf(`${name}=`)
      if (start !== -1) {
        start += name.length + 1
        let end = doc.cookie.indexOf(';', start)
        if (end === -1) { end = doc.cookie.length }
        value = decodeURIComponent(doc.cookie.substring(start, end)) || ''
      }
    }
    return value
  },
}

export default cookie
