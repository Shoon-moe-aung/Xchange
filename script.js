/*************************************************************
 *  XCHANGE – SCRIPT.JS
 *  Handles: Mobile Navigation, Demo Payment Button
 *************************************************************/

/* ===========================
      MOBILE NAV TOGGLE
=========================== */
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Close menu after clicking any link (better UX)
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

/* ===========================
      PAYMENT PAGE – DEMO BUTTON
=========================== */
const payBtn = document.querySelector(".payment-form .btn-primary");

if (payBtn) {
  payBtn.addEventListener("click", (e) => {
    e.preventDefault();

    alert(
      "🚀 Payment Simulation Only\n\nThis is a prototype for your soft pitch.\nNo real payment is processed."
    );
  });
}

/* ===========================
      SIMPLE FORM VALIDATION (LOGIN)
=========================== */
const loginForm = document.querySelector("#login-form");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = loginForm.querySelector("input[type='email']");
    const password = loginForm.querySelector("input[type='password']");

    if (!email.value || !password.value) {
      alert("⚠️ Please fill in both email and password.");
      return;
    }

    alert("✔ Login successful (demo mode).");
  });
}

/* ===========================
      SCROLL TO TOP (OPTIONAL)
=========================== */
const scrollTopBtn = document.querySelector(".scroll-top");

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}