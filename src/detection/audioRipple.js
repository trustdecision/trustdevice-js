export default function getAudioRipple() {
  function audioRipple(resolve, audioRippleTimeOut) {
    const AudioCtxFn = window.OfflineAudioContext
      || window.webkitOfflineAudioContext
    const audioCtx = new AudioCtxFn(1, 4000, 44100)
    const oscillator = audioCtx.createOscillator()
    const analyser = audioCtx.createAnalyser()
    const compressor = audioCtx.createDynamicsCompressor()
    compressor.threshold && (compressor.threshold.value = -50)
    compressor.knee && (compressor.knee.value = 40)
    compressor.ratio && (compressor.ratio.value = 12)
    compressor.reduction && (compressor.reduction.value = -20)
    compressor.attack && (compressor.attack.value = 0)
    compressor.release && (compressor.release.value = 0.25)
    oscillator.type = 'sine'
    oscillator.connect(compressor)
    compressor.connect(analyser)
    analyser.connect(audioCtx.destination)

    function getPeaksSum(bins, n = 20) {
      const peaks = []
      const checkers = [...Array(n + 1)
        .keys()].slice(1)
      const isPeak = i => checkers.every(j => bins[i] > bins[i - j] && bins[i] > bins[i + j])
      for (let i = n; i < bins.length - n; i++) {
        if (isPeak(i)) peaks.push(bins[i])
        // 只取前 13 个峰值
        if (peaks.length === 13) break
      }
      return peaks.reduce((a, b) => Math.abs(a) + Math.abs(b))
    }

    // eslint-disable-next-line func-names
    audioCtx.oncomplete = function () {
      const bins = new Float32Array(analyser.frequencyBinCount)
      analyser.getFloatFrequencyData(bins)
      oscillator.disconnect()
      compressor.disconnect()
      analyser.disconnect()
      const peaksSum = getPeaksSum(bins)
      // 获取到目标值，resolve 之前清理 audioRippleTimeOut
      clearTimeout(audioRippleTimeOut)
      resolve(peaksSum)
    }

    oscillator.start(0)
    audioCtx.startRendering()
  }

  return new Promise((resolve) => {
    if (window.OfflineAudioContext || window.webkitOfflineAudioContext) {
      const audioRippleTimeOut = setTimeout(() => resolve(''), window._fmOpt.timeout || 2000)
      audioRipple(resolve, audioRippleTimeOut)
    } else {
      resolve('')
    }
  })
}
