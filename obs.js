const imageElements = document.querySelectorAll(".image");
const buttonElement = document.querySelector("button");

const observerSettings = {
    rootMargin: "0px",
};

const observerCallback = (arrayImages, observer) => {
    arrayImages.forEach((image) => {
        if (image.isIntersecting) {
            const photo = image.target;
            photo.classList.add("animation");
        }
    });
};

const obServer = new IntersectionObserver(observerCallback, observerSettings);

imageElements.forEach((image) => {
    obServer.observe(image);
});

buttonElement.addEventListener("click", (event) => {
    imageElements.forEach((image) => {
        obServer.unobserve(image);
        image.classList.add("animation")
    });
});