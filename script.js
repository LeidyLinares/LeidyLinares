// script.js
const pages = document.querySelectorAll('.page');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentPage = 0;

// Actualizar la visibilidad de las páginas
function updatePages() {
    pages.forEach((page, index) => {
        page.classList.toggle('active', index === currentPage);
    });
    prevBtn.disabled = currentPage === 0;
    nextBtn.disabled = currentPage === pages.length - 1;
}

// Navegar hacia la página anterior
prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        updatePages();
    }
});

// Navegar hacia la página siguiente
nextBtn.addEventListener('click', () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updatePages();
    }
});

// Inicializar
updatePages();

const button1 = document.getElementById("button1");
const popupText1 = document.getElementById("popupText1");

button1.addEventListener("click", () => {
    if (popupText1.style.display === "block") {
        popupText1.style.display = "none";
    } else {
        popupText1.style.display = "block";
    }
});

const button2 = document.getElementById("button2");
const popupText2 = document.getElementById("popupText2");

button2.addEventListener("click", () => {
    if (popupText2.style.display === "block") {
        popupText2.style.display = "none";
    } else {
        popupText2.style.display = "block";
    }
});

const button3 = document.getElementById("button3");
const popupText3 = document.getElementById("popupText3");

button3.addEventListener("click", () => {
    if (popupText3.style.display === "block") {
        popupText3.style.display = "none";
    } else {
        popupText3.style.display = "block";
    }
});

const button4 = document.getElementById("button4");
const popupText4 = document.getElementById("popupText4");

button4.addEventListener("click", () => {
    if (popupText4.style.display === "block") {
        popupText4.style.display = "none";
    } else {
        popupText4.style.display = "block";
    }
});

const button5 = document.getElementById("button5");
const popupText5 = document.getElementById("popupText5");

button5.addEventListener("click", () => {
    if (popupText5.style.display === "block") {
        popupText5.style.display = "none";
    } else {
        popupText5.style.display = "block";
    }
});

const button6 = document.getElementById("button6");
const popupText6 = document.getElementById("popupText6");

button6.addEventListener("click", () => {
    if (popupText6.style.display === "block") {
        popupText6.style.display = "none";
    } else {
        popupText6.style.display = "block";
    }
});

const button7 = document.getElementById("button7");
const popupText7 = document.getElementById("popupText7");

button7.addEventListener("click", () => {
    if (popupText7.style.display === "block") {
        popupText7.style.display = "none";
    } else {
        popupText7.style.display = "block";
    }
});

const button8 = document.getElementById("button8");
const popupText8 = document.getElementById("popupText8");

button8.addEventListener("click", () => {
    if (popupText8.style.display === "block") {
        popupText8.style.display = "none";
    } else {
        popupText8.style.display = "block";
    }
});

const button9 = document.getElementById("button9");
const popupText9 = document.getElementById("popupText9");

button9.addEventListener("click", () => {
    if (popupText9.style.display === "block") {
        popupText9.style.display = "none";
    } else {
        popupText9.style.display = "block";
    }
});

// Seleccionar todas las tarjetas
const cards = document.querySelectorAll('.card');

// Añadir el evento de clic a cada tarjeta
cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});
