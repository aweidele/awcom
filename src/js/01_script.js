(() => {
  const body = document.querySelector('body');

  // Menu Toggle
  const menuToggle = document.querySelector('.header_inner button');
  let menuOpen = false;

  menuToggle.addEventListener('click',() =>{
    if(menuOpen) {
      body.classList.remove('menu_open');
      body.classList.add('menu_closed');
      menuOpen = false;
    } else {
      body.classList.add('menu_open');
      body.classList.remove('menu_closed');
      menuOpen = true;
    }
  });

  // Navigation Scroll
  const jumpLink = document.querySelectorAll('a[href^="#"]');
  jumpLink.forEach((el)=>{
    el.addEventListener('click',function(e) {
      e.preventDefault();

      document.querySelector(e.target.closest('a').getAttribute('href')).scrollIntoView({behavior: 'smooth'});

      body.classList.remove('menu_open');
      body.classList.add('menu_closed');
    });
  });

  // Menu scrolled style
  const section = document.querySelector('.intro');
  const bodyScroll = function(entries, observer) {
    const [entry] = entries;
    if(entry.isIntersecting) {
      body.classList.remove('scrolled');
    } else {
      body.classList.add('scrolled');
    }
  };
  const sectionObserver = new IntersectionObserver(bodyScroll, {
    root: null,
    threshold: 0.7
  });
  sectionObserver.observe(section);
})();
