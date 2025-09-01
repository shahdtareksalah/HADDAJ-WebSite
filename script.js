// === Slider خلفية الـ Hero ===
const hero = document.querySelector(".hero");

// هنا حطي روابط الصور بتاعتك
const images = [
  "images/pexels-fauxels-3184419.jpg",
  "images/pexels-olly-926390 copy.jpg",
  "images/pexels-nappy-936137.jpg"
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
AOS.init({
  duration: 1200,   // مدة الانيميشن
  once: false,      // لو true يحصل مرة واحدة بس
});

// \\\\\\\\\\\
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) { // بعد ما تنزلي 50px
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

