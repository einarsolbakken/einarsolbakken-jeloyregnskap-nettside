//kebabmenu
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const overlay = document.getElementById("overlay");
const body = document.body;

function closeMenu() {
  mobileMenu.classList.remove("opacity-100");
  mobileMenu.classList.add("opacity-0");
  mobileMenu.classList.add("pointer-events-none");

  overlay.classList.add("hidden");

  body.classList.remove("no-scroll");

  menuBtn.setAttribute("aria-expanded", false);
  mobileMenu.setAttribute("aria-hidden", true);
}

menuBtn.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("opacity-100");
  mobileMenu.classList.toggle("opacity-0", !isOpen);
  mobileMenu.classList.toggle("pointer-events-auto", isOpen);
  mobileMenu.classList.toggle("pointer-events-none", !isOpen);

  overlay.classList.toggle("hidden", !isOpen);

  if (isOpen) {
    body.classList.add("no-scroll");
  } else {
    body.classList.remove("no-scroll");
  }

  menuBtn.setAttribute("aria-expanded", isOpen);
  mobileMenu.setAttribute("aria-hidden", !isOpen);
});

overlay.addEventListener("click", () => {
  closeMenu();
});

// Lukk meny når man klikker på et menyvalg
document.querySelectorAll("#mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});


//tjenester
  function toggle(id) {
    const el = document.getElementById(id);
    el.classList.toggle('hidden');
  }


//
tailwind.config = {
    theme: {
      extend: {
        colors: {
          brandBlue: '#0066a1', // Ny farge basert på logoens bakgrunn
        }
      }
    }
  }

//Styrer hvor raskt innhold lastes 
  document.addEventListener("DOMContentLoaded", () => {
    const positions = [
      { x: 50, y: 10 },
      { x: 30, y: 30 },
      { x: 10, y: 50 },
    ];

    ["square1", "square2", "square3"].forEach((id, i) => {
      const el = document.getElementById(id);
      const randX = Math.random() * 300 - 150;
      const randY = Math.random() * 300 - 150;
      const randR = Math.random() * 360;
      el.setAttribute("transform", `translate(${randX}, ${randY}) rotate(${randR})`);
      el.style.opacity = 0;

      setTimeout(() => {
        el.style.transition = "all 1s ease";
        el.setAttribute("transform", `translate(${positions[i].x}, ${positions[i].y}) rotate(0)`);
        el.style.opacity = 1;
      }, i * 300);
    });
  });



//form
   const form = document.getElementById('contactForm');
  const confirmation = document.getElementById('confirmationMessage');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      },
    })
      .then(response => {
        if (response.ok) {
          form.reset();
          form.classList.add('hidden');
          confirmation.classList.remove('hidden');
        } else {
          alert('Noe gikk galt, prøv igjen.');
        }
      })
      .catch(() => alert('Noe gikk galt, prøv igjen.'));
  });


document.addEventListener("DOMContentLoaded", () => {
  const headerSquares = [
    document.getElementById("header-square1"),
    document.getElementById("header-square2"),
    document.getElementById("header-square3"),
  ];

  const originalPositions = [
    { x: 50, y: 10 },
    { x: 30, y: 30 },
    { x: 10, y: 50 },
  ];

  // Sett firkantene i startposisjon (ingen transform, synlig)
  headerSquares.forEach((el, i) => {
    el.setAttribute("transform", `translate(${originalPositions[i].x}, ${originalPositions[i].y}) rotate(0)`);
    el.style.opacity = 1;
  });

  function animateSquares() {
    headerSquares.forEach((el, i) => {
      const randX = Math.random() * 60 - 30;
      const randY = Math.random() * 60 - 30;
      const randR = Math.random() * 360;
      el.style.transition = "transform 0.5s ease, opacity 0.5s ease";
      el.setAttribute("transform", `translate(${randX}, ${randY}) rotate(${randR})`);
      el.style.opacity = 0.6;

      setTimeout(() => {
        el.style.transition = "transform 0.7s ease, opacity 0.7s ease";
        el.setAttribute("transform", `translate(${originalPositions[i].x}, ${originalPositions[i].y}) rotate(0)`);
        el.style.opacity = 1;
      }, 500);
    });
  }

  const headerLogo = document.getElementById("header-logo");
  headerLogo.addEventListener("mouseenter", animateSquares);
});





  

