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
/*=========================================================
        SCRIPT.JS
        PART 2
=========================================================*/

/* ==========================================
   GIFT BUTTON
========================================== */

const giftButton = document.getElementById("giftButton");
const giftMessage = document.getElementById("giftMessage");

if (giftButton && giftMessage) {

    giftButton.addEventListener("click", () => {

        giftMessage.style.display = "block";

        giftMessage.animate([
            {
                opacity:0,
                transform:"translateY(80px) scale(.8)"
            },
            {
                opacity:1,
                transform:"translateY(0) scale(1)"
            }
        ],{
            duration:900,
            easing:"ease-out",
            fill:"forwards"
        });

        if(typeof confetti==="function"){

            confetti({

                particleCount:180,

                spread:120,

                origin:{y:.6}

            });

        }

    });

}

/* ==========================================
   CAKE CLICK
========================================== */

const cake = document.getElementById("cake");

if(cake){

cake.addEventListener("click",()=>{

cake.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.08)"

},

{

transform:"scale(1)"

}

],{

duration:700

});

if(typeof confetti==="function"){

confetti({

particleCount:250,

spread:180,

origin:{y:.7}

});

}

});

}

/* ==========================================
   HERO IMAGE PARALLAX
========================================== */

const heroImage=document.querySelector(".hero-image img");

window.addEventListener("scroll",()=>{

if(heroImage){

let value=window.scrollY*0.2;

heroImage.style.transform=`translateY(${value}px) scale(1.15)`;

}

});

/* ==========================================
   FLOATING HEARTS
========================================== */

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-40px";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.opacity=".8";

heart.style.pointerEvents="none";

heart.style.zIndex="999";

heart.style.transition="all 8s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform=`translateY(-120vh) rotate(${360+Math.random()*360}deg)`;

heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,2500);

/* ==========================================
   GALLERY HOVER EFFECT
========================================== */

document.querySelectorAll(".gallery-item").forEach(item=>{

item.addEventListener("mouseenter",()=>{

item.style.transform="translateY(-12px) scale(1.03)";

});

item.addEventListener("mouseleave",()=>{

item.style.transform="translateY(0) scale(1)";

});

});

/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements=document.querySelectorAll(

".chapter,.first-date,.instagram-story,.call-section,.video-section,.long-distance,.love-letter,.gallery-section,.reasons,.birthday-section,.gift-section,.music-player,.final-section"

);

function reveal(){

const trigger=window.innerHeight*0.85;

revealElements.forEach(section=>{

const top=section.getBoundingClientRect().top;

if(top<trigger){

section.classList.add("active");

}

});

}

window.addEventListener("scroll",reveal);

reveal();

/* ==========================================
   AUTO PLAY MUSIC
========================================== */

let firstInteraction=false;

window.addEventListener("click",()=>{

if(firstInteraction) return;

firstInteraction=true;

const bg=document.getElementById("backgroundMusic");

if(bg){

bg.volume=.35;

bg.play().catch(()=>{});

}

});

/* ==========================================
   GSAP SCROLL ANIMATIONS
========================================== */

if(typeof gsap!=="undefined"){

gsap.utils.toArray("section").forEach(sec=>{

gsap.from(sec,{

opacity:0,

y:100,

duration:1,

scrollTrigger:{

trigger:sec,

start:"top 80%"

}

});

});

}

/* ==========================================
   TYPEWRITER EFFECT
========================================== */

const title=document.querySelector(".final-content h1");

if(title){

const original=title.innerHTML;

title.innerHTML="";

let i=0;

function typing(){

if(i<original.length){

title.innerHTML+=original.charAt(i);

i++;

setTimeout(typing,60);

}

}

setTimeout(typing,1500);

}
/*=========================================================
        SCRIPT.JS
        PART 3 (FINAL)
=========================================================*/

/* ==========================================
   FIREWORKS
========================================== */

function launchFireworks() {

    if (typeof confetti !== "function") return;

    const duration = 5000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {

        if (Date.now() > animationEnd) {
            clearInterval(interval);
            return;
        }

        confetti({
            particleCount: 25,
            angle: 60,
            spread: 80,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 25,
            angle: 120,
            spread: 80,
            origin: { x: 1 }
        });

    }, 300);

}

/* ==========================================
   FIREWORKS ON BIRTHDAY SECTION
========================================== */

const birthday = document.getElementById("birthday");

if (birthday) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                launchFireworks();

            }

        });

    }, {
        threshold: .6
    });

    observer.observe(birthday);

}

/* ==========================================
   GALLERY LIGHTBOX
========================================== */

const images = document.querySelectorAll(".gallery-item img");

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

lightbox.style.cssText = `
position:fixed;
left:0;
top:0;
width:100%;
height:100%;
background:rgba(0,0,0,.95);
display:none;
justify-content:center;
align-items:center;
z-index:999999;
cursor:pointer;
`;

const lightImage = document.createElement("img");

lightImage.style.cssText = `
max-width:90%;
max-height:90%;
border-radius:20px;
box-shadow:0 0 60px rgba(255,255,255,.15);
`;

lightbox.appendChild(lightImage);

document.body.appendChild(lightbox);

images.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightImage.src = img.src;

    });

});

lightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

/* ==========================================
   CURSOR HEART
========================================== */

document.addEventListener("mousemove", e => {

    const heart = document.createElement("div");

    heart.innerHTML = "❤";

    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.fontSize = "14px";
    heart.style.pointerEvents = "none";
    heart.style.opacity = ".7";
    heart.style.color = "#ff4d8d";
    heart.style.zIndex = "99999";
    heart.style.transition = "all .8s linear";

    document.body.appendChild(heart);

    requestAnimationFrame(() => {

        heart.style.transform = "translateY(-35px) scale(0)";
        heart.style.opacity = "0";

    });

    setTimeout(() => {

        heart.remove();

    }, 800);

});

/* ==========================================
   FLOATING STARS
========================================== */

function createStar() {

    const star = document.createElement("div");

    star.innerHTML = "✦";

    star.style.position = "fixed";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = "-20px";
    star.style.color = "#ffffff";
    star.style.opacity = ".4";
    star.style.fontSize = (8 + Math.random() * 12) + "px";
    star.style.pointerEvents = "none";
    star.style.transition = "8s linear";
    star.style.zIndex = "1";

    document.body.appendChild(star);

    requestAnimationFrame(() => {

        star.style.transform = `translateY(${window.innerHeight + 100}px)`;

    });

    setTimeout(() => {

        star.remove();

    }, 8000);

}

setInterval(createStar, 600);

/* ==========================================
   GIFT MESSAGE EFFECT
========================================== */

if (giftMessage) {

    giftButton.addEventListener("click", () => {

        giftMessage.style.animation = "none";

        void giftMessage.offsetWidth;

        giftMessage.style.animation = "fadeInUp 1s ease";

    });

}

/* ==========================================
   FINAL MESSAGE
========================================== */

setTimeout(() => {

    console.log("❤️ Happy Birthday Shravani ❤️");

}, 3000);

/* ==========================================
   PERFORMANCE
========================================== */

window.addEventListener("beforeunload", () => {

    clearInterval();

});

/* ==========================================
   END
========================================== */

console.log("%c❤️ Happy Birthday Shravani ❤️",
"color:#ff4d8d;font-size:24px;font-weight:bold;");
