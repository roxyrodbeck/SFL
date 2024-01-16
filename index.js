
let reviews = ['"Mr. Fernandez was very professional and efficient. You would not even know the tire balancer even stopped working!"', 
'"Javi has been repairing my machines for years now. I trust him with our repairs. And his family is adorable!"',
'"test quote"',
'"another test quote here"'];
// reviewElement.addEventListener('mouseover', reviewSlides);

let currentIndex = 0;

function reviewSlides() {
    let reviewElement = document.querySelector(".review-insert");

    let randomIndex = Math.floor(Math.random() * reviews.length);

    reviewElement.textContent = reviews[randomIndex];
    
}

reviewSlides();
