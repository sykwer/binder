import mojs from "mo-js"

const clapAnimation = (clapButton, countAnime, totalCountAnime) => {
  const duration = 400

  const burst = new mojs.Burst({
    parent: clapButton,
    radius: { 40: 95 },
  })

  const countAnimation = new mojs.Html({
    el: countAnime,
    isShowStart: false,
    isShowEnd: true,
    y: { 0: -30 },
    opacity: { 0: 0.8 },
    duration,
  }).then({
    opacity: { 0.8: 0 },
    y: -80,
    delay: duration / 2,
  })

  const countTotalAnimation = new mojs.Html({
    el: totalCountAnime,
    isShowStart: false,
    isShowEnd: true,
    opacity: { 0: 1 },
    delay: 3 * (duration / 2),
    duration,
    y: { 0: -3 },
  })

  const scaleButton = new mojs.Html({
    el: clapButton,
    duration,
    scale: { 1.3: 1 },
    easing: mojs.easing.out,
  })

  const timeline = new mojs.Timeline()

  timeline.add([
    burst,
    countAnimation,
    countTotalAnimation,
    scaleButton,
  ])

  return timeline
}

export default clapAnimation
