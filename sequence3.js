const canvas3 = document.getElementById('canvas3')
const ctx3 = canvas3.getContext('2d')
const heroSequence3 = document.querySelector('.hero-sequence3')
const images3 = []
const frameCount3 = 60

const prepareImages3 = () => {
  for (var i = 0; i < frameCount2; i++) {
    const image = new Image()
    image.src = `./Export-3/230526_CLUAXNoraZeid_Illustration5_GreenFaith${i.toString().padStart(2, '0')}.png`
    images3.push(image)

    if (i === 0) {
      images3[i].onload = () => drawImage3(0)
    }
  }
}

const drawImage3 = frameIndex => {
    ctx3.fillStyle = '#ffffff';
    ctx3.fillRect(0, 0, canvas3.width, canvas3.height)
    ctx3.drawImage(images3[frameIndex], 0, 0)
}

prepareImages3()

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop - heroSequence3.offsetTop
    const maxScrollTop = heroSequence3.scrollHeight - window.innerHeight
    const scrollFraction = scrollTop / maxScrollTop
    const frameIndex = Math.max(0, Math.min(frameCount3 - 1, Math.ceil(scrollFraction * frameCount3)))

    images3[frameIndex].onload = () => drawImage3(frameIndex)
    requestAnimationFrame(() => drawImage3(frameIndex))
})