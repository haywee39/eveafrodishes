
{/* <script> */}
    document.addEventListener("DOMContentLoaded", function() {
        const studentItems = document.querySelectorAll('.student-pro .student-item');

        const handleIntersection = (entries, observer) => {
            entries.forEach(entry => {
                const studentItem = entry.target;
                const stack = studentItem.querySelector('.stack');
                const value = studentItem.querySelector('.value');

                if (entry.isIntersecting) {
                    // Add active class to slide in elements
                    setTimeout(() => {
                        if (stack) stack.classList.add('active');
                    }, 300);

                    setTimeout(() => {
                        if (value) value.classList.add('active');
                    }, 600);
                } else {
                    // Remove active class when out of view
                    if (stack) stack.classList.remove('active');
                    if (value) value.classList.remove('active');
                }
            });
        };

        // Create an Intersection Observer
        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: 0.3 // Trigger when 30% of the element is visible
        });

        // Observe each student item
        studentItems.forEach(item => {
            observer.observe(item);
        });
    });
{/* </script> */}








// TESTIMONIAL ON HOMEPAGE 
// Carousel Logic
const cards = document.querySelectorAll(".testimonial-card");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let current = 0;

// Create dots dynamically
cards.forEach((_, index) => {
  const dot = document.createElement("span");
  if (index === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll("span");

function showSlide(index) {
  cards.forEach(card => card.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  cards[index].classList.add("active");
  dots[index].classList.add("active");
  current = index;
}

prevBtn.addEventListener("click", () => {
  let index = current - 1;
  if (index < 0) index = cards.length - 1;
  showSlide(index);
});

nextBtn.addEventListener("click", () => {
  let index = current + 1;
  if (index >= cards.length) index = 0;
  showSlide(index);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => showSlide(index));
});

// Auto-slide
setInterval(() => {
  let index = current + 1;
  if (index >= cards.length) index = 0;
  showSlide(index);
}, 6000);
