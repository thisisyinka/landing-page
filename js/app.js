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


/** Array to store each navigation item and its id */
const navItems = [
    {
        name: 'Home',
        id: heroSection.id
    },
    {
        name: 'About',
        id: aboutSection.id
    },
    {
        name: 'Walkthrough',
        id: videosSection.id
    },
    {
        name: 'Contact',
        id: contactSection.id
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


/** Clear active class from all links */
const removeActiveClasses = (links) => {
    links.forEach((navLink) => {
        navLink.classList.remove('active');
    });
}

dynamicMenu();


/** Scroll effect  */
const scrollEffect = () => {
    const navLinks = document.querySelectorAll('.nav_link');
        for(const navLink of navLinks) {
            navLink.addEventListener('click',  function(e) {
                e.preventDefault();
                removeActiveClasses(navLinks);
                const links = navLink.getAttribute('href');
                document
                    .querySelector(links)
                    .scrollIntoView({ behavior: 'smooth' });
                navLink.classList.add('active');
            });
        }
    return;
}

scrollEffect();


/** Active state */
const checkViewport = () => {
    const startCheck = () => {
        const navLinks = [...document.querySelectorAll('.nav_link')];
        for (const navLink of navLinks) {
            const link = navLink.getAttribute('href').split('#')[1];
            const rect = document.getElementById(link).getBoundingClientRect();
            
            /** 
             * Gotten from StackOverflow (https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport)
             * Gotten specifically from Leonheess's "The simplest solutions..." response
             * Slightly modified to suit my needs
             */
            const isActive = rect.top <= window.innerHeight && rect.top >= 0;

            if (isActive) {
                removeActiveClasses(navLinks);
                navLink.classList.add('active');
                /** After adding the active class to a link, this stops it from adding the active class to the rest of the links */
                break;
            }
        }
    };

    /** Run function first before scroll listener is triggered */
    startCheck();
    window.addEventListener('scroll', startCheck);
    return;
};

checkViewport();
