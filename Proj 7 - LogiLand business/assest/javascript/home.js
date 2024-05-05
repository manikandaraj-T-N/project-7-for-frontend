// toggle button
document.addEventListener("DOMContentLoaded", function () {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');

    navbarToggle.addEventListener('click', function () {
        navbarMenu.classList.toggle('open');
        navbarToggle.classList.toggle('open');
    });
});



// business counts

document.addEventListener("DOMContentLoaded", function () {

    const counterElement1 = document.querySelector('.package1');
    const counterElement2 = document.querySelector('.clients');
    const counterElement3 = document.querySelector('.county');
    const counterElement4 = document.querySelector('.goods');

    let packageCount = 0;
    let clientsCount = 0;
    let countryCount = 0;
    let goodsCount = 0;

    function updateCounter() {

        if (packageCount < 380000) {
            packageCount += 1900;
            counterElement1.textContent = packageCount;
        }

        if (clientsCount < 68000) {
            clientsCount += 500;
            counterElement2.textContent = clientsCount;
        }

        if (countryCount < 720000) {
            countryCount += 3600;
            counterElement3.textContent = countryCount;
        }

        if (goodsCount < 50000) {
            goodsCount += 500;
            counterElement4.textContent = goodsCount;
        }

        if (packageCount < 380000 || clientsCount < 68000 || countryCount < 720000 || goodsCount < 50000) {
            requestAnimationFrame(updateCounter);
        }
    }
  
    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle scroll event
    function handleScroll() {
        const clientSection = document.querySelector('.business');

        console.log("Is in viewport:", isInViewport(clientSection));

        if (isInViewport(clientSection)) {
            console.log("Calling updateCounter");
            updateCounter();
        }
    }
    window.addEventListener('scroll', handleScroll);

});
