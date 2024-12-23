let index = 0;

function showSlides() {
    let slides = document.querySelectorAll('.slide-item');
    if (index >= slides.length) {
        index = 0;
    }

    let offset = -index * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;

    index++;
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

showSlides();
