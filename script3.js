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

// const scrollContainer2 = document.getElementById("philanthropy-section-8");

// console.log(scrollContainer2)

// scrollContainer2.addEventListener("wheel", (evt) => {
//     if (scrollContainer2.scrollLeft < (scrollContainer2.scrollWidth - scrollContainer2.clientWidth)){
//       // evt.preventDefault();
//       scrollContainer2.scrollLeft += evt.deltaY;
//     }
// });