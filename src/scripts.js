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
