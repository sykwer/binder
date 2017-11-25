import mojs from "mo-js"

const dummyClapAnimation = (dummyButton) => {
  const scaleButton = new mojs.Html({
    el: dummyButton,
    duration: 400,
    scale: { 1.3: 1 },
    easing: mojs.easing.out,
  })

  const timeline = new mojs.Timeline()

  timeline.add([
    scaleButton,
  ])

  return timeline
}

export default dummyClapAnimation
