// Load the component
fetch("pagetop/pagetop.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("top-page").innerHTML = data;

    // After loading, customize content based on data attributes in the placeholder
    const container = document.getElementById("top-page");
    const landingTop = container.querySelector("#landing-top");

    // Read data from the <div id="top-page"> attributes
    const bg = container.dataset.bg;
    const title = container.dataset.title;
    const a = container.dataset.a;
    // const a = container.dataset.a;


    // Apply background image + title
    if (bg) landingTop.style.backgroundImage = `url(${bg})`;
    if (title) landingTop.querySelector(".title").textContent = title;
    if (a) landingTop.querySelector("a").textContent = a;
  })
  .catch(error => console.error("Error loading top-page:", error));
