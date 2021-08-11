/** Get sections */
const heroSection = document.querySelector('#header_hero');
const aboutSection = document.querySelector('#about-us');
const videosSection = document.querySelector('#videos');
const contactSection = document.querySelector('#contact-us');
const allSections = Array.from(document.querySelectorAll('section'));

/** Other selectors */
const unorderedList = document.querySelector('.nav_list');
const allLinks = document.querySelectorAll('.nav_link');
let activeLink = document.querySelector('.active');



/** Dynamic Menu */
const dynamicMenu = () => {
    for(const section of allSections) {
        const navLinks = document.createElement('a');
        const list = document.createElement('li');
        navLinks.className = 'nav_link';
        list.className = 'nav_item';
        navLinks.textContent = section.getAttribute('data-nav');
        navLinks.setAttribute('href', `#${section.getAttribute('id')}`);
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
        for(section of allSections) {
            const sec = section.getAttribute('data-nav').split('#')[1];
            const rect = document.getElementById(sec).getBoundingClientRect();

            /** 
             * Gotten from StackOverflow (https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport)
             * Gotten specifically from Leonheess's "The simplest solutions..." response
             * Slightly modified to suit my needs
             */
            const isActive = rect.top <= window.innerHeight && rect.top >= 0;

            if (isActive) {
                removeActiveClasses(sec);
                sec.classList.add('active');
                /** After adding the active class to a section, this stops it from adding the active class to the rest of the section */
                break;
            }
        }

        /** Run function first before scroll listener is triggered */
        startCheck();
        window.addEventListener('scroll', startCheck);
        return;
        
    }
};

checkViewport();
