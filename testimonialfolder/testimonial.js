
document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial");
  let index = 0;

  function showTestimonial(i) {
    testimonials.forEach((t, idx) => {
      t.classList.toggle("active", idx === i);
    });
  }

  // Show first
  showTestimonial(index);

  // Auto-scroll
  setInterval(() => {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
  }, 4000);
});
