const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const heroSequence = document.querySelector('.hero-sequence')
const images = []
const frameCount = 123

const prepareImages = () => {
  for (var i = 0; i < frameCount; i++) {
    const image = new Image()
    image.src = `./Export-1/230526_CLUAXNoraZeid_Illustration6_Misinformation${i.toString().padStart(3, '0')}.png`
    images.push(image)

    if (i === 0) {
      images[i].onload = () => drawImage(0)
    }
  }
}

const drawImage = frameIndex => {
    ctx.fillStyle = '#5AC8A9';
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(images[frameIndex], 0, 0)
}

prepareImages()

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop - heroSequence.offsetTop
    const maxScrollTop = heroSequence.scrollHeight - window.innerHeight
    const scrollFraction = scrollTop / maxScrollTop
    const frameIndex = Math.max(0, Math.min(frameCount - 1, Math.ceil(scrollFraction * frameCount)))

    images[frameIndex].onload = () => drawImage(frameIndex)
    requestAnimationFrame(() => drawImage(frameIndex))
})