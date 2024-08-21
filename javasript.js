document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const likeButtons = document.querySelectorAll('.like-btn');
    const dislikeButtons = document.querySelectorAll('.dislike-btn');
    
    let currentIndex = 0;

    function updateCarouselPosition() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarouselPosition();
    });

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarouselPosition();
    });

    likeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const likeCount = this.querySelector('.like-count');
            likeCount.textContent = parseInt(likeCount.textContent) + 1;
        });
    });

    dislikeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const dislikeCount = this.querySelector('.dislike-count');
            dislikeCount.textContent = parseInt(dislikeCount.textContent) + 1;
        });
    });
});
