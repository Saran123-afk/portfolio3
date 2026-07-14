// ======================
// AOS Animation
// ======================

AOS.init({
    duration: 1000,
    once: false,
    offset: 100,
});

// ======================
// Navbar Active Menu
// ======================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ======================
// Scroll Progress Bar
// ======================

const progress = document.createElement("div");

progress.style.position = "fixed";
progress.style.top = "0";
progress.style.left = "0";
progress.style.height = "4px";
progress.style.background = "#00d9ff";
progress.style.width = "0%";
progress.style.zIndex = "99999";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

    const scroll =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    progress.style.width = (scroll / height) * 100 + "%";

});

// ======================
// Cursor Glow
// ======================

const cursor = document.createElement("div");

cursor.style.width = "18px";
cursor.style.height = "18px";
cursor.style.borderRadius = "50%";
cursor.style.position = "fixed";
cursor.style.background = "#00d9ff";
cursor.style.pointerEvents = "none";
cursor.style.boxShadow = "0 0 20px #00d9ff";
cursor.style.transform = "translate(-50%,-50%)";
cursor.style.zIndex = "99999";

document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

// ======================
// Reveal Animation
// ======================

const reveal = document.querySelectorAll("section");

window.addEventListener("scroll", revealSection);

function revealSection() {

    reveal.forEach(sec => {

        const top = sec.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (top < windowHeight - 120) {

            sec.style.opacity = "1";
            sec.style.transform = "translateY(0px)";

        }

    });

}

reveal.forEach(sec => {

    sec.style.opacity = "0";
    sec.style.transform = "translateY(80px)";
    sec.style.transition = "1s";

});

revealSection();

// ======================
// Button Hover Effect
// ======================

const btn = document.querySelector(".btn");

btn.addEventListener("mousemove", (e) => {

    const x = e.offsetX;
    const y = e.offsetY;

    btn.style.background =
    `radial-gradient(circle at ${x}px ${y}px,#ffffff,#00d9ff)`;

});

btn.addEventListener("mouseleave", () => {

    btn.style.background = "#00d9ff";

});

// ======================
// Smooth Scroll
// ======================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},800);

});

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}

const text="Portfolio Student";

let i=0;

function type(){

if(i<text.length){

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

setTimeout(type,120);

}

}

type();
