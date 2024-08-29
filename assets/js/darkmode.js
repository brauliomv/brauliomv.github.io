let toggleBtn = document.getElementById('toggle-btn');//Botón
let sun = document.getElementById('sun');//Elemento que con tiene la imagen del sol
let img = document.getElementById("btnImg");//Imagen
let navbar = document.querySelector('.navbar');
let linkbtns = document.querySelectorAll('.btn');
let wrapper = document.querySelector('.wrapper');
let downloadBtn = document.getElementById('download-btn');
let darkTitles = document.querySelectorAll('.main-title-dark');
let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let hi = document.getElementById('hi');
let socialLinks = document.querySelectorAll('.social-link');
let aboutDescription = document.getElementById('about-description');
let cardsText = document.querySelectorAll('.card-text');
let cards = document.querySelectorAll('.card');
let serviceTitles = document.querySelectorAll('.service-title');
let servicesContent = document.querySelectorAll('.services-content');
let certificationsContent = document.querySelectorAll('.certifications-content');

//Función modo oscuro  
function setDarkMode(){
    sun.style.transform = 'translateX(135%)';
    img.src = "/assets/img/moon.png";

    navbar.classList.add('dark');
    toggleBtn.classList.add('dark');
    linkbtns.forEach(function(linkbtn){
        linkbtn.classList.add('dark');
    });
    wrapper.classList.add('dark');
    downloadBtn.classList.add('dark');

    darkTitles.forEach(function(darkTitle){
        darkTitle.classList.add('dark');
    });

    firstName.classList.add('dark');
    hi.classList.add('dark');

    socialLinks.forEach(function(socialLink){
        socialLink.classList.add('dark');
    });

    aboutDescription.classList.add('dark');

    cardsText.forEach(function(cardText){
        cardText.classList.add('dark');
    });

    cards.forEach(function(card){
        card.classList.add('dark');
    });

    serviceTitles.forEach(function(serviceTitle){
        serviceTitle.classList.add('dark');
    });

    servicesContent.forEach(function(serviceContent){
        serviceContent.classList.add('dark');
    })

    certificationsContent.forEach(function(certificationContent){
        certificationContent.classList.add('dark');
    })

    //Almacenar preferencia en localstorage
    localStorage.setItem('theme', 'dark');
}

//Función modo claro  
function setLightMode(){
    sun.style.transform = '';
    img.src = "/assets/img/sun.png";

    navbar.classList.remove('dark');
    toggleBtn.classList.remove('dark');
    linkbtns.forEach(function(linkbtn){
        linkbtn.classList.remove('dark');
    });
    wrapper.classList.remove('dark');
    downloadBtn.classList.remove('dark');

    darkTitles.forEach(function(darkTitle){
        darkTitle.classList.remove('dark');
    });

    firstName.classList.remove('dark');
    hi.classList.remove('dark');

    socialLinks.forEach(function(socialLink){
        socialLink.classList.remove('dark');
    });
    aboutDescription.classList.remove('dark');

    cardsText.forEach(function(cardText){
        cardText.classList.remove('dark');
    });

    cards.forEach(function(card){
        card.classList.remove('dark');
    });

    serviceTitles.forEach(function(serviceTitle){
        serviceTitle.classList.remove('dark');
    });

    servicesContent.forEach(function(serviceContent){
        serviceContent.classList.remove('dark');
    })

    certificationsContent.forEach(function(certificationContent){
        certificationContent.classList.remove('dark');
    })

    localStorage.setItem('theme','light');
}

//Alternar entre temas
function toggleMode(){
    let currentTheme = localStorage.getItem('theme');
    if(currentTheme === 'dark'){
        setLightMode();
    }else{
        setDarkMode();
    }
}


function applySavedTheme(){
    let savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'dark'){
        setDarkMode();
    }else{
        setLightMode();
    }
}

applySavedTheme();

toggleBtn.addEventListener('click', toggleMode);
