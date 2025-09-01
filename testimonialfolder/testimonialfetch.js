


  fetch("testimonialfolder/testimonial.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("testimonial-placeholder").innerHTML = html;
    });
