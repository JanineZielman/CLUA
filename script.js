// https://www.climateandforests2030.org/wp-json/wp/v2/pages?slug=future-signals-and-drivers

async function logJSONData() {
  const sections = await fetch("https://www.climateandforests2030.org/wp-json/wp/v2/posts?categories=10");
  const jsonSections = await sections.json();
  jsonSections.reverse().forEach((element) => {
    // element.classList.add('non-active');
    if (document.getElementById(element.slug)){
      document.getElementById(element.slug).innerHTML = element.content.rendered
    }
  });
}

logJSONData()

const moveContainer = document.getElementById("section-3");



function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

moveContainer.addEventListener("mousemove", (evt) => {
  const links = moveContainer.getElementsByTagName('a');
  const links2 = document.getElementById('section-2').getElementsByTagName('a');
  for (let i = 0; i < links2.length; i++) {
    console.log(links2[i].clientWidth)
    if (i % 2 == 0) {
      links2[i].style.marginLeft = evt.screenY * 0.05  + 'px'
      links2[i].style.marginTop = evt.screenX * 0.05 + 'px'
    } else {
      links2[i].style.marginLeft = evt.screenX * -0.05  + 'px'
      links2[i].style.marginTop = evt.screenY * -0.05   + 'px'
    }
  }
  for (let i = 0; i < links.length; i++) {
    if (i % 2 == 0) {
      links[i].style.marginLeft = evt.screenX * -0.05 + 'px'
      links[i].style.marginTop = evt.screenY * -0.05 + 'px'
    } else {
      links[i].style.marginLeft = evt.screenX * 0.05 + 'px'
      links[i].style.marginTop = evt.screenY * 0.05  + 'px'
    }
  }
});


const scrollContainer = document.getElementById("section-8");

scrollContainer.addEventListener("wheel", (evt) => {
    // if (scrollContainer.scrollLeft < (scrollContainer.scrollWidth - scrollContainer.clientWidth)){
    //   evt.preventDefault();
    //   scrollContainer.scrollLeft += evt.deltaY;
    // }

    // console.log(scrollContainer)
    
    // console.log(scrollContainer.scrollLeft)
    // console.log(scrollContainer.scrollWidth - scrollContainer.clientWidth)
});