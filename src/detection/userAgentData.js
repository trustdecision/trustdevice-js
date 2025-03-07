export default function getUserAgentData() {
  return new Promise((resolve) => {
    if (navigator.userAgentData && navigator.userAgentData.getHighEntropyValues) {
      navigator.userAgentData.getHighEntropyValues([
        "architecture",
        "bitness",
        "formFactor",
        "fullVersionList",
        "model",
        "platformVersion",
        "uaFullVersion",
        "wow64"])
        .then((data) => {
          resolve(data)
        })
    }else {
      resolve('')
    }
  })
}
