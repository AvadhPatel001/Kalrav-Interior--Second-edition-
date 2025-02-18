// Navigation Bar

const menu_btn = document.querySelector('.menu-btn1');
const navbar1 = document.querySelector('.navbar1');
const overlay1 = document.querySelector('.overlay1');

menu_btn.addEventListener("click", () => {
    navbar1.classList.toggle("active");
    overlay1.classList.toggle("active");
})

overlay1.addEventListener("click", () => {
    navbar1.classList.toggle("active");
    overlay1.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    navbar1.classList.remove("active");
    overlay1.classList.remove("active");
}))

// Navigation Bar


// Menu Filter

const liproduct = document.querySelectorAll('.ul li');
const product_items = document.querySelectorAll('.project_items');
liproduct.forEach(li => {
    li.onclick = function () {
        liproduct.forEach(li => {
            li.className = "";
        });
        li.className = "current";

        const value = li.textContent;
        product_items.forEach(img => {
            img.style.display = "none";
            if (img.getAttribute('data-filter') == value || value == "All") {
                img.style.display = "block";
            }
        });
    }
});

// Menu Filter

// Image Popup
document.querySelectorAll('.items img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-imag').style.display = 'block';
        document.querySelector('.popup-imag img').src = image.getAttribute('src');
    }
});
document.querySelector('.popup-imag span').onclick = () => {
    document.querySelector('.popup-imag').style.display = 'none';
}
// Image Popup


// testimonial

const wrapper = document.getElementById('testimonials_div');
let index = 0;
const totalTestimonials = document.querySelectorAll('.testimonial').length;

function updateTestimonials() {
    wrapper.style.transform = `translateX(-${index * 100}%)`;
}

function scrollTestimonialsLeft() {
    index = (index > 0) ? index - 1 : totalTestimonials - 1;
    updateTestimonials();
}

function scrollTestimonialsRight() {
    index = (index < totalTestimonials - 1) ? index + 1 : 0;
    updateTestimonials();
}

// testimonial



// Form

(function () {
    emailjs.init("dcYWOJyWfVEaIqwCr");
})();

function validateForm() {
    let isValid = true;

    // Get input values
    let name = document.getElementById("your_name").value.trim();
    let email = document.getElementById("your_email").value.trim();
    let message = document.getElementById("your_message").value.trim();

    // Error elements
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");

    // Reset errors
    nameError.innerText = "";
    emailError.innerText = "";
    messageError.innerText = "";

    // Name validation
    if (name.length < 3) {
        nameError.innerText = "Name must be at least 3 characters.";
        isValid = false;
    }

    // Email validation
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        emailError.innerText = "Enter a valid email address.";
        isValid = false;
    }

    // Message validation
    if (message.length < 10) {
        messageError.innerText = "Message must be at least 10 characters.";
        isValid = false;
    }

    return isValid;
}

function sendEmail(event) {
    event.preventDefault(); 
    if (!validateForm()) {
        return;
    }

    let name = document.getElementById("your_name").value;
    let email = document.getElementById("your_email").value;
    let message = document.getElementById("your_message").value;

    let params = {
        from_name: name,
        from_email: email,
        message: message
    };

    emailjs.send("service_flfn3n5", "template_f6lx4ye", params)
        .then(function(response) {
            alert("Your form is submited successfully!");
            document.getElementById("contactForm").reset(); 
        }, function(error) {
            alert("Failed to send email: " + JSON.stringify(error));
        });
}

// Form



// WhatsApp message

function redirectToWhatsApp() {
    const phoneNumber = "+919913560209";
    const message = encodeURIComponent("Hello! I'm interested to hire you as Interior Designer.");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.location.href = url;
}

// WhatsApp message