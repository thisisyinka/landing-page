/** Get Id names of each section */
const heroSectionID = document.querySelector('#header_hero').id;
const aboutSectionID = document.querySelector('#about-us').id;
const videosSectionID = document.querySelector('#videos').id;
const contactSectionID = document.querySelector('#contact-us').id;

/** Get each Id */
const heroSection = document.querySelector('#header_hero');
const aboutSection = document.querySelector('#about-us');
const videosSection = document.querySelector('#videos');
const contactSection = document.querySelector('#contact-us');
const allSections = document.querySelectorAll('section');

/** Other selectors */
const unorderedList = document.querySelector('.nav_list');
const allLinks = document.querySelectorAll('.nav_link');
let activeLink = document.querySelector('.active');


/** Array to store each navigation item */
const navItems = [
    {
        name: 'Home',
        id: heroSectionID
    },
    {
        name: 'About Us',
        id: aboutSectionID
    },
    {
        name: 'Walkthrough',
        id: videosSectionID
    },
    {
        name: 'Contact Us',
        id: contactSectionID
    }
];

/** Dynamic Menu */
const dynamicMenu = () => {
    for(const item of navItems) {
        const navLinks = document.createElement('a');
        const list = document.createElement('li');
        navLinks.className = 'nav_link';
        list.className = 'nav_item';
        navLinks.textContent = item.name;
        navLinks.setAttribute('href', `#${item.id}`);
        list.appendChild(navLinks);
        unorderedList.appendChild(list);
    }
    return;
}

dynamicMenu();


/** Scroll effect  */
const scrollEffect = () => {
    const allNavLinks = document.querySelectorAll('a');
        for(const navLink of allNavLinks) {
            navLink.addEventListener('click',  function(e) {
                e.preventDefault();
                const links = navLink.getAttribute('href');
                document.querySelector(links).scrollIntoView({ behavior: 'smooth' });
                navLink.classList.add('active');       
            });
        }
    return;
}

scrollEffect();


/** Active state - Adding active class to section */
const checkViewport = () => {
    window.addEventListener('scroll', function() {
        allSections.forEach(sec => {
            const section = sec.getBoundingClientRect();
            if(section.top >= 153 && section.top <= 354) {
                sec.classList.add('active');
            } else {
                sec.classList.remove('active');
            }
        });
    });
    return;
}

checkViewport();
