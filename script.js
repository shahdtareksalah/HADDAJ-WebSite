// === Slider خلفية الـ Hero ===
const hero = document.querySelector(".hero");

// هنا حطي روابط الصور بتاعتك
const images = [
  "images/Screenshot (173).png",
    "images/Generated Image September 13, 2025 - 12_00PM.png",
    "images/pexels-fauxels-3184639.jpg"
];

let currentImage = 0;

function changeBackground() {
  hero.style.backgroundImage = `url('${images[currentImage]}')`;
  currentImage = (currentImage + 1) % images.length;
}

// أول صورة عند تحميل الصفحة
changeBackground();
// يغير كل 5 ثواني
setInterval(changeBackground, 2000);
// تفعيل مكتبة AOS


// \\\\\\\\\\\
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > this.screen.height-200) { 
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

AOS.init({
  duration: 1000, 
  once: false,      
});

