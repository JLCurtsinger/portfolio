
document.addEventListener("DOMContentLoaded", function() {
    // for animation
    var animationElement = document.getElementById('animation');
    setTimeout(function() {
        animationElement.style.opacity = 1;
    }, 600);

    // arrays that contact images for various screen sizes
    const smallImages = [
        'images/bellRockSmall.jpg',
        'images/redwoodsSmall.jpeg'
    ];

    const mediumImages = [
        'images/bellRockWide.jpg',
        'images/redwoodsLarge.jpeg'
    ];

    const largeImages = [
        'images/bellRockWide.jpg',
        'images/redwoodsLarge.jpeg'
    ];

    // function to get screen size and choose image array
    function getScreenSize() {
        const screenWidth = window.innerWidth;

        if (screenWidth <= 768) {
            return smallImages;
        }
        else if (screenWidth > 768 && screenWidth <= 1280) {
            return mediumImages;
        }
        else {
            return largeImages;
        }
    }

    function setBackgroundImage() {
        const images = getScreenSize();
        const randomIndex = Math.floor(Math.random() * images.length);
        const selectedImage = images[randomIndex];
        document.getElementById('contact').style.backgroundImage = `url(${selectedImage})`;
    }

    function debounce(func, delay) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
        };
    }

    // Call the function on page load
    window.onload = setBackgroundImage;

    // Optional: Call the function on window resize to update the background image
    window.onresize = setBackgroundImage;
});