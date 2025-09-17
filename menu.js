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


// JAVASCRIPT FOR ALLERGY INFO POP-UP 
document.addEventListener("DOMContentLoaded", function() {
    const allergyModal = document.getElementById("allergyModal");
    const closeModal = document.querySelector(".close-modal");
    const closeBtn = document.querySelector(".modal-close-btn");

    // Show the modal when the page loads (or when menu section is opened)
    window.addEventListener("load", function() {
        setTimeout(function() {
            allergyModal.classList.add("show");
            document.body.style.overflow = "hidden"; // Prevent scrolling
        }, 1000); // Show after 1 second
    });

    // Close the modal when the close button is clicked
    closeModal.addEventListener("click", function() {
        allergyModal.classList.remove("show");
        document.body.style.overflow = "auto"; // Re-enable scrolling
    });

    // Close the modal when the "Got it!" button is clicked
    closeBtn.addEventListener("click", function() {
        allergyModal.classList.remove("show");
        document.body.style.overflow = "auto"; // Re-enable scrolling
    });

    // Close the modal when clicking outside the modal content
    allergyModal.addEventListener("click", function(event) {
        if (event.target === allergyModal) {
            allergyModal.classList.remove("show");
            document.body.style.overflow = "auto"; // Re-enable scrolling
        }
    });
});
