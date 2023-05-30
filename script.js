// https://www.climateandforests2030.org/wp-json/wp/v2/pages?slug=future-signals-and-drivers

async function logJSONData() {
  const section1 = await fetch("https://www.climateandforests2030.org/wp-json/wp/v2/posts?categories=10");
  const jsonSection1 = await section1.json();
  console.log(jsonSection1);
  jsonSection1.reverse().forEach((element) => {
    // element.classList.add('non-active');
    document.getElementById(element.slug).innerHTML = element.content.rendered
  });
  // document.getElementById('section1').innerHTML = jsonSection1.reverse()[0].content.rendered
}

logJSONData()