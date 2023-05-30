export default function getTimezone() {
  const now = new Date()
  now.setDate(1)
  now.setMonth(5)
  const x1 = -now.getTimezoneOffset()
  now.setMonth(11)
  const x2 = -now.getTimezoneOffset()
  return Math.min(x1, x2)
}

export function getTimezoneStr() {
  if (window.Intl && window.Intl.DateTimeFormat
    && (new window.Intl.DateTimeFormat()).resolvedOptions) {
    return ((new window.Intl.DateTimeFormat()).resolvedOptions() || {}).timeZone || ''
  }
  return ''
}
