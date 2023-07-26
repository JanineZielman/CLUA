// https://www.climateandforests2030.org/wp-json/wp/v2/pages?slug=future-signals-and-drivers

async function logJSONData() {
  const sections = await fetch("https://www.climateandforests2030.org/wp-json/wp/v2/posts?categories=10&per_page=100");
  const jsonSections = await sections.json();
  jsonSections.reverse().forEach((element) => {
    // element.classList.add('non-active');
    if (document.getElementById(element.slug)){
      document.getElementById(element.slug).innerHTML = element.content.rendered
    }
    // if(element.slug == 'section-8'){
    //   // console.log(element.content.rendered)
    //   const parser = new DOMParser();
    //   const html = parser.parseFromString(element.content.rendered, 'text/html');
    //   const body = html.body;
    //   // console.log(body.getElementsByClassName("signal"))
    //   Array.from(body.getElementsByClassName("signal")).forEach((signal) => {
    //     console.log(signal)
    //     // var iDiv = document.createElement('div');
    //     signal.className = 'gallery-cell';
    //     // iDiv.appendChild = signal;
    //     document.getElementById('gallery').appendChild(signal);
    //     document.getElementById('gallery').classList.add('js-flickity');
    //   });
    // }

  });
  console.log(jsonSections)
}

logJSONData()



// const scrollContainer = document.getElementById("section-8");

// scrollContainer.addEventListener("wheel", (evt) => {
//     if (scrollContainer.scrollLeft < (scrollContainer.scrollWidth - scrollContainer.clientWidth)){
//       // evt.preventDefault();
//       scrollContainer.scrollLeft += evt.deltaY;
//     }
  
// });