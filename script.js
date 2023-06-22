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