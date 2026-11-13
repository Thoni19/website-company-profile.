
// AMBIL ELEMEN MENU
const menuButton = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// FUNGSI BUKA / TUTUP MENU
menuButton.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("open");

  menuButton.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

  menuButton.textContent = isOpen ? "Tutup" : "Menu";
});

// TUTUP MENU SAAT LINK DIPILIH
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "Menu";
  });
});

// TAHUN FOOTER OTOMATIS
document.getElementById("year").textContent =
  new Date().getFullYear();
