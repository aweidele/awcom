(()=>{const e=document.querySelector("body"),t=document.querySelector(".header_inner button");let s=!1;t.addEventListener("click",(()=>{s?(e.classList.remove("menu_open"),e.classList.add("menu_closed"),s=!1):(e.classList.add("menu_open"),e.classList.remove("menu_closed"),s=!0)}));document.querySelectorAll('a[href^="#"]').forEach((t=>{t.addEventListener("click",(function(t){t.preventDefault(),document.querySelector(t.target.closest("a").getAttribute("href")).scrollIntoView({behavior:"smooth"}),e.classList.remove("menu_open"),e.classList.add("menu_closed")}))}));const o=document.querySelector(".intro");new IntersectionObserver((function(t,s){const[o]=t;o.isIntersecting?e.classList.remove("scrolled"):e.classList.add("scrolled")}),{root:null,threshold:.7}).observe(o)})();