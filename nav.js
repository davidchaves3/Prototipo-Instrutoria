document.addEventListener("DOMContentLoaded", () => {
  fetch("nav.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("nav-placeholder").innerHTML = html;

      // após inserir o HTML, ativar o toggle do submenu
      document.querySelectorAll(".submenu-toggle").forEach(btn => {
        btn.addEventListener("click", () => {
          const li = btn.closest(".has-submenu");
          const open = li.classList.toggle("open");
          btn.setAttribute("aria-expanded", open);
        });
      });
    })
    .catch(console.error);
});


