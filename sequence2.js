const canvas2 = document.getElementById('canvas2')
const ctx2 = canvas2.getContext('2d')
const heroSequence2 = document.querySelector('.hero-sequence2')
const images2 = []
const frameCount2 = 60

const prepareImages2 = () => {
  for (var i = 0; i < frameCount2; i++) {
    const image = new Image()
    image.src = `./Export-2/230526_CLUAXNoraZeid_Illustration7_Gamification${i.toString().padStart(2, '0')}.png`
    images2.push(image)

    if (i === 0) {
      images2[i].onload = () => drawImage2(0)
    }
  }
}

const drawImage2 = frameIndex => {
    ctx2.fillStyle = '#5AC8A9';
    ctx2.fillRect(0, 0, canvas2.width, canvas2.height)
    ctx2.drawImage(images2[frameIndex], 0, 0)
}

prepareImages2()

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop - heroSequence2.offsetTop
    const maxScrollTop = heroSequence2.scrollHeight - window.innerHeight
    const scrollFraction = scrollTop / maxScrollTop
    const frameIndex = Math.max(0, Math.min(frameCount2 - 1, Math.ceil(scrollFraction * frameCount2)))

    images2[frameIndex].onload = () => drawImage2(frameIndex)
    requestAnimationFrame(() => drawImage2(frameIndex))
})