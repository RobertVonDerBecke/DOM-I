const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
//nav section
let navBody = document.querySelector('nav');
navBody.style.color = 'green';
let navPre = document.createElement('a')
navPre.textContent = 'Prepend';
let navAppend = document.createElement('a');
navAppend.textContent = 'Append';

let navLinks = navBody.children;
navLinks[0].textContent = siteContent['nav']['nav-item-1'];
navLinks[1].textContent = siteContent['nav']['nav-item-2'];
navLinks[2].textContent = siteContent['nav']['nav-item-3'];
navLinks[3].textContent = siteContent['nav']['nav-item-4'];
navLinks[4].textContent = siteContent['nav']['nav-item-5'];
navLinks[5].textContent = siteContent['nav']['nav-item-6'];
navBody.prepend(navPre)
navBody.append(navAppend)
//cta section
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let ctaText = document.querySelector("h1");
  ctaText.innerHTML = 'DOM<br>Is<br>Awesome';
  ctaText.style.fontSize = '4rem';
  ctaText.style.fontFamily = 'Bangers';

let btn = document.querySelector('button');
btn.textContent = 'Get started';

//main-content
let middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
let topContent = document.querySelector('.top-content').children;

let bottomContent = document.querySelector('.bottom-content').children;
console.log(bottomContent)

//top content
topContent[0].firstElementChild.textContent = siteContent['main-content']['features-h4'];
topContent[0].lastElementChild.textContent = siteContent['main-content']['features-content'];

topContent[1].firstElementChild.textContent = siteContent['main-content']['about-h4'];
topContent[1].lastElementChild.textContent = siteContent['main-content']['about-content'];
console.log(topContent);
//bottom content
bottomContent[0].firstElementChild.textContent = siteContent['main-content']['services-h4'];
bottomContent[0].lastElementChild.textContent = siteContent['main-content']['services-content'];

bottomContent[1].firstElementChild.textContent = siteContent['main-content']['product-h4'];
bottomContent[1].lastElementChild.textContent = siteContent['main-content']['product-content'];

bottomContent[2].firstElementChild.textContent = siteContent['main-content']['vision-h4'];
bottomContent[2].lastElementChild.textContent = siteContent['main-content']['vision-content'];

//contact section

let contact = document.querySelector('.contact').children;
console.log(contact)
contact[0].textContent = siteContent['contact']['contact-h4'];

contact[1].textContent = siteContent['contact']['address'];

contact[2].textContent = siteContent['contact']['phone'];

contact[3].textContent = siteContent['contact']['email'];

//footer
let footer = document.querySelector('footer').children;

footer[0].textContent = siteContent['footer']['copyright'];




