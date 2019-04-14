
    new Waypoint({
        element: document.querySelector('.js-wp-2'),
        handler() {
            this.element.classList.add("animated", "slideInUp");
        },
        offset: '80%'
    });
    const iphone__button = document.querySelector(".iphone__button");
    setTimeout(function () {
        iphone__button.style.transform = "translateY(3px)";
        iphone__button.style.animationDelay = "3s";
    }, 2300);
    setTimeout(function () {
        iphone__button.style.transform = "translateY(0)";
        iphone__button.style.animationDelay = "1s";
    }, 2600);
    setTimeout(function () {
        document.querySelector(".iphone--on").style.opacity = "1";
    }, 2605);
