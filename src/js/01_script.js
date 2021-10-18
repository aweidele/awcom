(() => {
  const body = document.querySelector('body');
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
})();
