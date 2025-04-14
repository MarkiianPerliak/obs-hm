const imagesToLoad = document.querySelectorAll('img[data-src]');
const loadAllButton = document.getElementById('loadAllButton');

const loadImage = (img) => {
    img.src = img.dataset.src;
    img.removeAttribute('data-src');
    img.classList.add('loaded');
};

const imgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            loadImage(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, {
    rootMargin: '0px 0px 200px 0px'
});

imagesToLoad.forEach(img => {
    imgObserver.observe(img);
});

loadAllButton.addEventListener('click', () => {
    const remainingImagesToLoad = document.querySelectorAll('img[data-src]');
    remainingImagesToLoad.forEach(img => {
        loadImage(img);
    });
    loadAllButton.disabled = true;
    loadAllButton.innerText = 'Всі зображення завантажено';
});