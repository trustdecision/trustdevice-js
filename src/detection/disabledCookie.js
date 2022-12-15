export default function getDisabledCookie() {
  let status = 0
  if (navigator.cookieEnabled !== undefined) {
    if (navigator.cookieEnabled) {
      status = 0
    } else {
      status = 1
    }
  }
  return status
}
