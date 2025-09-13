// JavaScript to handle card flip on "See Details" and "Back" button clicks
function flipCard(event) {
    const card = event.target.closest('.menu-card');
    card.classList.add('flip');
  }
  
  function flipBack(event) {
    const card = event.target.closest('.menu-card');
    card.classList.remove('flip');
  }


// javascript that will scrill to menu category selected by user 

  document.addEventListener("DOMContentLoaded", function() {
    const categoryItems = document.querySelectorAll('.category-item');

    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});



// javascript to scroll to top of page 
document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopButton = document.getElementById("scrollToTop");

    // Show or hide the button based on scroll position
    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 300) {
            scrollToTopButton.classList.add("show");
        } else {
            scrollToTopButton.classList.remove("show");
        }
    });

    // Smooth scroll to top when the button is clicked
    scrollToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
