/* ============================================
   ComicVerse Hub — Shared JavaScript
   ============================================ */

// ---- Initialization ----
document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initScrollToTop();
  initScrollReveal();
  updateCartBadge();
});

// ============================================
// Cart Utilities
// ============================================
function getCart() {
  try {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(comicId) {
  if (typeof comicsData === "undefined") return;
  const comic = comicsData.find((c) => c.id === comicId);
  if (!comic) return;

  let cart = getCart();
  const existingItem = cart.find((item) => item.id === comicId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: comic.id,
      title: comic.title,
      publisher: comic.publisher,
      character: comic.character,
      genre: comic.genre,
      price: comic.price,
      rating: comic.rating,
      cover: comic.cover,
      quantity: 1,
    });
  }

  saveCart(cart);
  showNotification("Added to cart successfully!");

  // Bump animation on cart badge
  const badge = document.getElementById("cartBadge");
  if (badge) {
    badge.classList.remove("bump");
    void badge.offsetWidth; // Force reflow
    badge.classList.add("bump");
  }
}

function updateCartBadge() {
  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badges = document.querySelectorAll("#cartBadge, .mobile-cart-badge");
  badges.forEach((badge) => {
    badge.textContent = totalItems;
  });
}

// ============================================
// Notifications
// ============================================
let notificationTimer = null;

function showNotification(message) {
  const notification = document.getElementById("notification");
  if (!notification) return;

  if (notificationTimer) clearTimeout(notificationTimer);

  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-icon">✓</span>
      <span class="notification-text">${message || "Added to cart successfully!"}</span>
      <button class="notification-close" onclick="dismissNotification()" aria-label="Close notification">×</button>
    </div>
    <div class="notification-progress"></div>
  `;

  notification.classList.add("show");

  notificationTimer = setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
}

function dismissNotification() {
  const notification = document.getElementById("notification");
  if (notification) notification.classList.remove("show");
  if (notificationTimer) clearTimeout(notificationTimer);
}

// ============================================
// Comic Card Creation
// ============================================
function createComicCard(comic, options) {
  const opts = Object.assign(
    { showQuickAdd: true, animationDelay: 0 },
    options,
  );

  const card = document.createElement("div");
  card.className = "comic-card reveal active";
  if (opts.animationDelay) {
    card.style.transitionDelay = opts.animationDelay + "ms";
  }

  const overlayHTML = opts.showQuickAdd
    ? `<div class="comic-card-overlay">
         <button class="quick-add-btn" onclick="event.stopPropagation(); addToCart('${comic.id}')" aria-label="Add ${comic.title} to cart">
           + Add to Cart
         </button>
       </div>`
    : "";

  card.innerHTML = `
    <div class="comic-card-image">
      <img src="${comic.cover}" alt="${comic.title}" loading="lazy">
      <div class="comic-rating">⭐ ${comic.rating}</div>
      ${overlayHTML}
    </div>
    <div class="comic-card-content">
      <h3>${comic.title}</h3>
      <p class="comic-publisher">${comic.publisher}</p>
      <p class="comic-price">$${comic.price.toFixed(2)}</p>
    </div>
  `;

  card.addEventListener("click", () => {
    window.location.href = "comic-detail.html?id=" + comic.id;
  });

  return card;
}

// ============================================
// Star Rating HTML Helper
// ============================================
function renderStarRating(rating) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.3 && rating - fullStars < 0.8;
  const emptyStars = Math.max(0, 5 - fullStars - (hasHalf ? 1 : 0));

  let html = '<div class="star-rating">';
  for (let i = 0; i < fullStars; i++) {
    html += '<span class="star filled">★</span>';
  }
  if (hasHalf) {
    html += '<span class="star half">★</span>';
  }
  for (let i = 0; i < emptyStars; i++) {
    html += '<span class="star">★</span>';
  }
  html += `<span class="rating-number">${rating}</span></div>`;
  return html;
}

// ============================================
// Mobile Navigation
// ============================================
function initMobileNav() {
  if (!document.querySelector(".mobile-nav-backdrop")) {
    const backdrop = document.createElement("div");
    backdrop.className = "mobile-nav-backdrop";
    backdrop.onclick = closeMobileNav;
    document.body.appendChild(backdrop);
  }
}

function toggleMobileNav() {
  const hamburger = document.querySelector(".hamburger");
  const overlay = document.getElementById("mobileNav");
  const backdrop = document.querySelector(".mobile-nav-backdrop");

  if (!hamburger || !overlay) return;

  const isOpen = hamburger.classList.contains("active");

  if (isOpen) {
    closeMobileNav();
  } else {
    hamburger.classList.add("active");
    hamburger.setAttribute("aria-expanded", "true");
    overlay.classList.add("active");
    if (backdrop) backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeMobileNav() {
  const hamburger = document.querySelector(".hamburger");
  const overlay = document.getElementById("mobileNav");
  const backdrop = document.querySelector(".mobile-nav-backdrop");

  if (hamburger) {
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  }
  if (overlay) overlay.classList.remove("active");
  if (backdrop) backdrop.classList.remove("active");
  document.body.style.overflow = "";
}

// ============================================
// Scroll to Top
// ============================================
function initScrollToTop() {
  const btn = document.getElementById("scrollTopBtn");
  if (!btn) return;

  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 300) {
        btn.classList.add("visible");
      } else {
        btn.classList.remove("visible");
      }
    },
    { passive: true },
  );

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ============================================
// Scroll Reveal (IntersectionObserver)
// ============================================
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");
  if (revealElements.length === 0) return;

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 50px 0px" },
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    // Fallback if IntersectionObserver not supported
    revealElements.forEach((el) => el.classList.add("active"));
  }
}

// ============================================
// Shared Footer HTML
// ============================================
function getFooterHTML() {
  return `
    <div class="footer-divider"></div>
    <div class="footer-container">
      <div class="footer-col">
        <h3 class="footer-logo">ComicVerse</h3>
        <p>Your ultimate destination for discovering and collecting comic books from Marvel, DC, Image, and more.</p>
      </div>
      <div class="footer-col">
        <h3>Quick Links</h3>
        <ul class="footer-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="browse.html">Browse Comics</a></li>
          <li><a href="cart.html">Shopping Cart</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h3>Publishers</h3>
        <ul class="footer-links">
          <li><a href="browse.html?publisher=Marvel">Marvel</a></li>
          <li><a href="browse.html?publisher=DC">DC Comics</a></li>
          <li><a href="browse.html?publisher=Image">Image Comics</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 ComicVerse Hub. All rights reserved.</p>
      <p>A portfolio project showcasing modern web development</p>
    </div>
  `;
}
