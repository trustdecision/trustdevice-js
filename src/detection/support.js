export default function getSupport() {
  let supportLocalStorage = false
  let supportSessionStorage = false
  let supportIndexedDB = false
  try {
    supportLocalStorage = !!window.localStorage
  } catch (e) {
  }
  try {
    supportSessionStorage = !!window.sessionStorage
  } catch (e) {
  }
  try {
    supportIndexedDB = !!window.indexedDB
  } catch (e) {
  }
  return {
    localStorage: supportLocalStorage,
    sessionStorage: supportSessionStorage,
    indexedDB: supportIndexedDB,
  }
}
