import './utils/polyfill'
import 'promise-polyfill/src/polyfill'
import md5 from './utils/md5'
import cookie from './detection/cookie'
import getScreen from './detection/screen'
import getNavigator from './detection/navigator'
import getCanvas from './detection/canvas'
import getMaxTouchPoints from './detection/msMaxTouchPoints'
import getDebugger from './detection/debugger'
import getDisabledCookie from './detection/disabledCookie'
import getTimezone from './detection/timezone'
import getTouchSupport from './detection/touchSupport'
import getGpu from './detection/gpu'
import getSupport from './detection/support'
import getAudioRipple from './detection/audioRipple'
import getFont from './detection/font'

if (!window._fmOpt) {
  console.warn && console.warn('_fmOpt is not defined!')
}
const tasks = [
  {
    name: 'screen',
    active: getScreen,
  },
  {
    name: 'navigator',
    active: getNavigator,
  },
  {
    name: 'canvas',
    active: getCanvas,
  },
  {
    name: 'maxTouchPoints',
    active: getMaxTouchPoints,
  },
  {
    name: 'timezone',
    active: getTimezone,
  },
  {
    name: 'touchSupport',
    active: getTouchSupport,
  },
  {
    name: 'gpu',
    active: getGpu,
  },
  {
    name: 'support',
    active: getSupport,
  },
  {
    name: 'font',
    active: getFont,
  },
]

const riskTasks = [
  {
    name: 'debugger',
    active: getDebugger,
  },
  {
    name: 'disabledCookie',
    active: getDisabledCookie,
  },
]
const tasksAsync = [
  {
    name: 'audioRipple',
    active: getAudioRipple,
  },
]

const result = {
  device_id: '',
  device_risk_label: {
    debugger: 0,
    disabledCookie: 0,
  },
  device_detail: {},
}

const deviceDetail = {}
const deviceRiskLabel = {}

// eslint-disable-next-line array-callback-return
tasks.map((item) => {
  if (item.name === 'navigator' || item.name === 'screen') {
    Object.assign(deviceDetail, item.active())
  } else {
    deviceDetail[item.name] = item.active()
  }
})
Promise.all(tasksAsync.map(item => item.active())).then((results) => {
  results.forEach((item, index) => {
    deviceDetail[tasksAsync[index].name] = item
  })
  const deviceIdCache = cookie.get('B106E2F6056FE017') || ''
  if (deviceIdCache && deviceIdCache.length === 32) {
    result.device_id = deviceIdCache
  } else if (Object.keys(deviceDetail).length !== 0) {
    const deviceId = md5(JSON.stringify(deviceDetail)) || ''
    if (deviceId && deviceId.length === 32) {
      result.device_id = deviceId
      cookie.set('B106E2F6056FE017', deviceId)
    }
  }
  // eslint-disable-next-line array-callback-return
  riskTasks.map((item) => {
    deviceRiskLabel[item.name] = item.active()
  })
  // eslint-disable-next-line camelcase
  result.device_detail = deviceDetail
  result.device_risk_label = deviceRiskLabel
  window._fmOpt.success && window._fmOpt.success(result)
})
