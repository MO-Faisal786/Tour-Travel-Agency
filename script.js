const searchBtn = document.querySelector("#search-btn");
const searchBar = document.querySelector(".search-bar-container");

const formBtn = document.querySelector("#login-btn");
const loginForm = document.querySelector(".login-form-container");
const formClose = document.querySelector("#form-close");

const menuBtn = document.querySelector("#manu-bar");
const myNav = document.querySelector(".navbar");

const videoBtn = document.querySelectorAll(".vid-btn");

// const Header = document.querySelector(".header");




window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    myNav.classList.remove("active");
    menuBtn.classList.remove("fa-times");
    loginForm.classList.remove('active');
    // Header.style.background = "#333"

}


searchBtn.addEventListener("click", () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});



formBtn.addEventListener("click", () => {
    loginForm.classList.add('active');
});

formClose.addEventListener("click", () => {
    loginForm.classList.remove('active');
});



menuBtn.addEventListener('click', () => {
    myNav.classList.toggle("active");
    menuBtn.classList.toggle("fa-times");
})

videoBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".controls .active").classList.remove("active");
        btn.classList.add("active");
        let src = btn.getAttribute("data-src");
        document.querySelector("#video-slider").src = src;
    })
})

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          991: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
    }
});