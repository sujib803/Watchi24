const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}










var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener('click', toggleItem, false);
}

function toggleItem() {
  var itemClass = this.parentNode.className;
  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = 'accordionItem close';
  }
  if (itemClass == 'accordionItem close') {
    this.parentNode.className = 'accordionItem open';
  }
}











function selectElementByClass(className) {
    return document.querySelector(`.${className}`);
  }

  const sections = [
    selectElementByClass('home'),
    selectElementByClass('about'),
    selectElementByClass('features'),
    selectElementByClass('product'),
    selectElementByClass('testimonial'),
    selectElementByClass('faq'),
    selectElementByClass('contact'),
  ];

  const navItems = {
    home: selectElementByClass('homeNavItem'),
    about: selectElementByClass('aboutNavItem'),
    features: selectElementByClass('featuresNavItem'),
    product: selectElementByClass('productNavItem'),
    testimonial: selectElementByClass('testimonialNavItem'),
    faq: selectElementByClass('faqNavItem'),
    contact: selectElementByClass('contactNavItem'),
  };

  // intersection observer setup
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  function observerCallback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // get the nav item corresponding to the id of the section
        // that is currently in view
        const navItem = navItems[entry.target.id];
        // add 'active' class on the navItem
        navItem.classList.add('active');
        // remove 'active' class from any navItem that is not
        // same as 'navItem' defined above
        Object.values(navItems).forEach((item) => {
          if (item != navItem) {
            item.classList.remove('active');
          }
        });
      }
    });
  }

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  sections.forEach((sec) => observer.observe(sec));