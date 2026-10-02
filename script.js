const menuButton = document.querySelector("#menuButton");
const closeButton = document.querySelector("#closeButton");
const menu = document.querySelector("#menu");

const servicesButton = document.querySelector(".dark-button");

const consultationButtons =
    document.querySelectorAll(".gold-button");

const phoneButton =
    document.querySelector(".phone-button");

const whatsappButton =
    document.querySelector(".whatsapp-button");

const menuLinks =
    document.querySelectorAll(".menu a");

const phonebtn = document.getElementById("phonebtn");
const altelP = document.getElementById("altelP");
const beelineP = document.getElementById("beelineP");
const closeP = document.getElementById("closeP");

const whatsappbtn = document.getElementById("whatsappbtn");
const altelW = document.getElementById("altelW");
const beelineW = document.getElementById("beelineW");
const closeW = document.getElementById("closeW");

// ОТКРЫТЬ МЕНЮ

menuButton.addEventListener("click", function() {

    menu.classList.add("active");

});


// ЗАКРЫТЬ МЕНЮ

closeButton.addEventListener("click", function() {

    menu.classList.remove("active");

});


// ЗАКРЫТЬ МЕНЮ ПОСЛЕ НАЖАТИЯ НА ПУНКТ

menuLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        menu.classList.remove("active");

    });

});


// КНОПКА «ҚЫЗМЕТТЕР»

servicesButton.addEventListener("click", function() {

    document.querySelector("#services").scrollIntoView({
        behavior: "smooth"
    });

});


// КНОПКИ «КЕҢЕС АЛУ»

consultationButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        document.querySelector("#contacts").scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ТЕЛЕФОН



phoneButton.addEventListener("click", function() {

    phonebtn.style.display = "block"
    

});

altelP.addEventListener("click", function() {
    window.location.href = "tel:+77022031777";
})

beelineP.addEventListener("click", function() {
    window.location.href = "tel:+77054721777";
})

closeP.addEventListener("click", function() {
    phonebtn.style.display = "none"
})

document.addEventListener("click", function() {
    if (!phonebtn.contains(event.target) && event.target !== phoneButton) {
        phonebtn.style.display = "none"
    }
})
// WHATSAPP

whatsappButton.addEventListener("click", function() {

    whatsappbtn.style.display = "block"

});

altelW.addEventListener("click", function() {
    
    window.open(
        "https://wa.me/77022031777",
        "_blank"
    );
})

beelineW.addEventListener("click", function() {
    window.open(
        "https://wa.me/77054721777",
        "_blank"
    );
})

closeP.addEventListener("click", function() {
    whatsappbtn.style.display = "none"
})

document.addEventListener("click", function() {
    if (!whatsappbtn.contains(event.target) && event.target !== whatsappButton) {
        whatsapp.style.display = "none"
    }
})