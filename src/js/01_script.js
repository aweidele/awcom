(() => {
  'use strict';

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

  // Smooth Scroll
  const jumpLink = document.querySelectorAll('a[href^="#"]');
  jumpLink.forEach((el)=>{
    el.addEventListener('click',function(e) {
      e.preventDefault();

      const sect = document.querySelector(e.target.closest('a').getAttribute('href'));
      const s1coords = sect.getBoundingClientRect();
      const headerH = document.querySelector('body > header').clientHeight;

      window.scrollTo({
       left: s1coords.left + window.pageXOffset,
       top: s1coords.top + window.pageYOffset - headerH,
       behavior: 'smooth',
     });
      // document.querySelector(e.target.closest('a').getAttribute('href')).scrollIntoView({behavior: 'smooth'});

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
  const scrolledOberver = new IntersectionObserver(bodyScroll, {
    root: null,
    threshold: 0.7
  });
  scrolledOberver.observe(section);

  // Portfolio Carousel
  let windowWidth = window.innerWidth;
  let carousel = false;
  let portfolio;

  const isCarousel = function(w) {
    if(w <= 768 && !carousel) {
      portfolio = tns({
        container: '#portfolio',
        items: 1,
        responsive: {
          600: {
            items: 2
          }
        },
        slideBy: 'page',
        mouseDrag: true,
        controls: false,
        navPosition: 'bottom'
      });
      carousel = true;
    } else if(w > 768 && carousel) {
      portfolio.destroy();
      carousel = false;
    }
  }

  isCarousel(windowWidth);

  const resizeHandler = function(e) {
    windowWidth = window.innerWidth;
    isCarousel(windowWidth);
  }

  window.addEventListener('resize',resizeHandler);

  // const portfolio = tns({
  //   container: '#portfolio',
  //   items: 3,
  //   slideBy: 'page',
  //   autoplay: false
  // });
})();
