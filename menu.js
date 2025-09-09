// JavaScript to handle card flip on "See Details" and "Back" button clicks
function flipCard(event) {
    const card = event.target.closest('.menu-card');
    card.classList.add('flip');
  }
  
  function flipBack(event) {
    const card = event.target.closest('.menu-card');
    card.classList.remove('flip');
  }