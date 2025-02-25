// Run code only after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Toggle Mobile Menu Function
  function toggleMobileMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
  }

  // Attach click event to the mobile toggle button
  const menuButton = document.getElementById("mobile-toggle");
  menuButton.addEventListener("click", toggleMobileMenu);

  // Close the mobile menu when a link is clicked
  const menuLinks = document.querySelectorAll("#menu a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        toggleMobileMenu();
      }
    });
  });
});

// Dark Mode Toggle
// const toggleDarkMode = () => {
//   document.documentElement.classList.toggle("dark");
//   const isDark = document.documentElement.classList.contains("dark");
//   localStorage.setItem("theme", isDark ? "dark" : "light");
// };

document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const topDarkToggle = document.getElementById("dark-mode-toggle");
  const bottomDarkToggle = document.getElementById("dark-mode-toggle-bottom");
  const moonIconTop = document.getElementById("moon-icon");
  const sunIconTop = document.getElementById("sun-icon");
  const moonIconBottom = document.getElementById("moon-icon-bottom");
  const sunIconBottom = document.getElementById("sun-icon-bottom");

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    html.classList.toggle("dark");
    updateIcons();
  };

  // Function to sync the icons across both navbars
  const updateIcons = () => {
    const isDarkMode = html.classList.contains("dark");
    // Top Navbar Icons
    moonIconTop.classList.toggle("hidden", isDarkMode);
    sunIconTop.classList.toggle("hidden", !isDarkMode);
    // Bottom Navbar Icons
    moonIconBottom.classList.toggle("hidden", isDarkMode);
    sunIconBottom.classList.toggle("hidden", !isDarkMode);
  };

  // Attach event listeners
  topDarkToggle.addEventListener("click", toggleDarkMode);
  bottomDarkToggle.addEventListener("click", toggleDarkMode);

  // Initialize icons based on current mode
  updateIcons();
});

// Apply saved theme preference on load
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
  }

  document
    .getElementById("dark-mode-toggle")
    .addEventListener("click", toggleDarkMode);
});

// Add Smooth Scrolling
document.addEventListener("DOMContentLoaded", () => {
  const bottomNav = document.getElementById("bottom-nav");
  const navLinks = {
    home: document.getElementById("nav-home"),
    menu: document.getElementById("nav-menu"),
    search: document.getElementById("nav-search"),
  };

  let lastScrollY = window.scrollY;

  // Scroll Event for hiding/showing the nav bar
  window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
      bottomNav.classList.add("translate-y-full"); // Hide on scroll down
    } else {
      bottomNav.classList.remove("translate-y-full"); // Show on scroll up
    }
    lastScrollY = window.scrollY;

    highlightActiveSection();
  });

  // Smooth Scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
