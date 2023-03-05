export default function getDisabledCookie() {
  let status = 0
  if (navigator.cookieEnabled !== undefined) {
    if (navigator.cookieEnabled) {
      status = 0
    } else {
      try {
        document.cookie = 'TDJScookieDemo=test; SameSite=Strict;'
        if (document.cookie.indexOf('TDJScookieDemo=') !== -1) {
          status = 1
        }
        document.cookie = 'TDJScookieDemo=test; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT'
      } catch (e) {
        status = 1
      }
    }
  }
  return status
}
