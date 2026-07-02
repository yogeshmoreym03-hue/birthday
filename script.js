/*=========================================================
        HAPPY BIRTHDAY WEBSITE
        Script.js
        Part 1
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       AOS
    ========================================== */

    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 80
        });
    }

    /* ==========================================
       LOADER
    ========================================== */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

        }, 1800);

    });

    /* ==========================================
       LENIS SMOOTH SCROLL
    ========================================== */

    if (typeof Lenis !== "undefined") {

        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }

    /* ==========================================
       GSAP HERO
    ========================================== */

    if (typeof gsap !== "undefined") {

        gsap.from(".hero-content h3", {
            y: 80,
            opacity: 0,
            duration: 1
        });

        gsap.from(".hero-content h1", {
            y: 100,
            opacity: 0,
            delay: .3,
            duration: 1.2
        });

        gsap.from(".hero-content p", {
            y: 100,
            opacity: 0,
            delay: .6,
            duration: 1.2
        });

        gsap.from(".btn", {
            scale: .5,
            opacity: 0,
            delay: 1,
            duration: .8
        });

    }

    /* ==========================================
       NAVBAR EFFECT
    ========================================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 100){

            header.style.background = "rgba(0,0,0,.65)";
            header.style.backdropFilter = "blur(25px)";
            header.style.padding = "14px 35px";

        }else{

            header.style.background = "rgba(255,255,255,.05)";
            header.style.padding = "18px 35px";

        }

    });

    /* ==========================================
       MUSIC
    ========================================== */

    const music = document.getElementById("backgroundMusic");
    const musicBtn = document.querySelector(".music-icon");

    let playing = false;

    if(musicBtn && music){

        musicBtn.addEventListener("click",()=>{

            if(!playing){

                music.play();

                playing=true;

                musicBtn.innerHTML='<i class="fa-solid fa-pause"></i>';

            }else{

                music.pause();

                playing=false;

                musicBtn.innerHTML='<i class="fa-solid fa-music"></i>';

            }

        });

    }

    /* ==========================================
       SMOOTH MENU
    ========================================== */

    document.querySelectorAll("nav a").forEach(link=>{

        link.addEventListener("click",(e)=>{

            e.preventDefault();

            const target=document.querySelector(link.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

});
