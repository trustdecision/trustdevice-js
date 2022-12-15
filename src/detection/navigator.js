export default function getNavigator() {
  const {
    appCodeName,
    appName,
    appVersion,
    deviceMemory,
    doNotTrack,
    hardwareConcurrency,
    language,
    mimeTypes,
    platform,
    plugins,
    product,
    productSub,
    userAgent,
    vendor,
    vendorSub,
    webdriver,
  } = window.navigator
  return {
    appCodeName,
    appName,
    appVersion,
    deviceMemory,
    doNotTrack,
    hardwareConcurrency,
    language,
    // eslint-disable-next-line max-len
    mimeTypes: [...mimeTypes].map(item => ({ description: item.description, suffixes: item.suffixes, type: item.type })),
    platform,
    plugins: [...plugins].map(item => ({
      description: item.description, filename: item.filename, length: item.length, name: item.name,
    })),
    product,
    productSub,
    userAgent,
    vendor,
    vendorSub,
    webdriver,
  }
}
