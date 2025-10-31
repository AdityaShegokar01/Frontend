// ===== Mobile Menu Toggle =====
const menuToggle = document.getElementById("menuToggle");
const mobileOverlay = document.getElementById("mobileOverlay");
const mobileSidebar = document.getElementById("mobileSidebar");
const closeMenu = document.getElementById("closeMenu");

menuToggle.addEventListener("click", () => {
  mobileOverlay.classList.toggle("opacity-100");
  mobileOverlay.classList.toggle("pointer-events-none");
  mobileSidebar.classList.toggle("translate-x-0");
});

closeMenu.addEventListener("click", () => {
  mobileOverlay.classList.add("opacity-0", "pointer-events-none");
  mobileSidebar.classList.add("-translate-x-full");
});

mobileOverlay.addEventListener("click", () => {
  mobileOverlay.classList.add("opacity-0", "pointer-events-none");
  mobileSidebar.classList.add("-translate-x-full");
});

// ===== Carousel =====
const slides = document.querySelectorAll("#carousel1 .carousel-slide");
const dotsContainer = document.getElementById("carouselDots");
let currentSlide = 0;

slides.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.className = "w-3 h-3 rounded-full bg-white/50";
  dot.addEventListener("click", () => showSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll("button");

function showSlide(i) {
  slides.forEach((s, idx) => s.classList.toggle("active", idx === i));
  dots.forEach((d, idx) => {
    d.className = idx === i ? "w-8 h-3 rounded-full bg-white transition-all" : "w-3 h-3 rounded-full bg-white/50 transition-all";
  });
  currentSlide = i;
}
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
setInterval(nextSlide, 4000);
showSlide(0);

// ===== Feature Slider =====
const featureSlider = document.getElementById("featureSlider");
let featureIndex = 0;
const totalFeatures = featureSlider.children.length;

document.getElementById("prevFeature").addEventListener("click", () => {
  featureIndex = (featureIndex - 1 + totalFeatures) % totalFeatures;
  updateFeatureSlider();
});
document.getElementById("nextFeature").addEventListener("click", () => {
  featureIndex = (featureIndex + 1) % totalFeatures;
  updateFeatureSlider();
});

function updateFeatureSlider() {
  featureSlider.style.transform = `translateX(-${featureIndex * 100}%)`;
}
