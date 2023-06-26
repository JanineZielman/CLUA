const canvas4 = document.getElementById('canvas4')
const ctx4 = canvas4.getContext('2d')
const heroSequence4 = document.querySelector('.hero-sequence4')
const images4 = []
const frameCount4 = 59

const prepareImages4 = () => {
  for (var i = 0; i < frameCount4; i++) {
    const image = new Image()
    image.src = `./Export-4/23607_CLUAXNoraZeid_Illustration2_Signals+Drivers${i.toString().padStart(1, '0')}.png`
    images4.push(image)

    if (i === 0) {
      images4[i].onload = () => drawImage4(0)
    }
  }
}

const drawImage4 = frameIndex => {
    ctx4.fillStyle = '#fff';
    ctx4.fillRect(0, 0, canvas4.width, canvas4.height)
    ctx4.drawImage(images4[frameIndex], 0, 0)
}

prepareImages4()

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop - heroSequence4.offsetTop
    const maxScrollTop = heroSequence4.scrollHeight - window.innerHeight
    const scrollFraction = scrollTop / maxScrollTop
    const frameIndex = Math.max(0, Math.min(frameCount4 - 1, Math.ceil(scrollFraction * frameCount4)))

    images4[frameIndex].onload = () => drawImage4(frameIndex)
    requestAnimationFrame(() => drawImage4(frameIndex))
})