/* =========================================================
   NAILVA - INDEX PAGE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ---------------------------------------------
       Add shadow to navbar when scrolling
    --------------------------------------------- */

    const navbarArea = document.querySelector(".navbar-area");

    if (navbarArea) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 50) {
                navbarArea.classList.add("navbar-scrolled");
            } else {
                navbarArea.classList.remove("navbar-scrolled");
            }

        });

    }


    /* ---------------------------------------------
       Smooth scroll for internal links
    --------------------------------------------- */

    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    /* ---------------------------------------------
       Simple image loading effect
    --------------------------------------------- */

    const images = document.querySelectorAll("img");

    images.forEach(function (image) {

        image.addEventListener("load", function () {
            image.classList.add("image-loaded");
        });

    });


    /* ---------------------------------------------
       Book Now button
    --------------------------------------------- */

    const bookButton = document.querySelector(".book-button");

    if (bookButton) {

        bookButton.addEventListener("click", function () {

            console.log("Book Now button clicked");

        });

    }


    /* ---------------------------------------------
       Service items
    --------------------------------------------- */

    const serviceItems = document.querySelectorAll(".service-item");

    serviceItems.forEach(function (item) {

        item.addEventListener("mouseenter", function () {
            item.classList.add("service-hover");
        });

        item.addEventListener("mouseleave", function () {
            item.classList.remove("service-hover");
        });

    });

});

/* =========================================================
   SERVICES PAGE
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* -----------------------------------------------------
       Service card hover effect
    ----------------------------------------------------- */

    const serviceCards = document.querySelectorAll(".service-card");

    serviceCards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {
            card.classList.add("active-card");
        });

        card.addEventListener("mouseleave", function () {
            card.classList.remove("active-card");
        });

    });


    /* -----------------------------------------------------
       Service links
    ----------------------------------------------------- */

    const serviceLinks = document.querySelectorAll(".service-link");

    serviceLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            console.log("Service booking selected");

        });

    });

});