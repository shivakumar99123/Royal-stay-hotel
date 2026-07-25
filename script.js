console.log("Website Loaded Successfully!");
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("show");

});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (
    window.scrollY >= sectionTop &&
    window.scrollY < sectionTop + sectionHeight
) {
    current = section.getAttribute("id");
}


    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

galleryImages.forEach(image => {
    image.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = image.src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});
const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);

    if (checkoutDate <= checkinDate) {
        alert("Check-out date must be after the check-in date.");
        return;
    }
    const room = document.getElementById("room").value;

    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        checkin === "" ||
        checkout === "" ||
        room === ""
    ) {
        alert("Please fill all the fields.");
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number must contain exactly 10 digits.");
        return;
    }

    alert("🎉 Booking Successful!");

    bookingForm.reset();
});
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    if(name === "" || email === "" || message === ""){
        alert("Please fill all the fields.");
        return;
    }

    alert("✅ Message Sent Successfully!");

    contactForm.reset();

});
const hiddenElements = document.querySelectorAll(
".about, .rooms, .amenities, .gallery, .reviews, .booking, .contact"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach(element => {
    element.classList.add("hidden");
    observer.observe(element);
});
const darkBtn = document.getElementById("darkModeBtn");

// Check saved theme when page loads
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    darkBtn.textContent = "☀️";
}

darkBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        darkBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }

});
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.display = "none";
    },1000);

});