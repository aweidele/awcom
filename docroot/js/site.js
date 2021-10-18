var tns=function(){var t=window,e=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},n=window,i=n.cancelAnimationFrame||n.mozCancelAnimationFrame||function(t){clearTimeout(t)};function r(){for(var t,e,n,i=arguments[0]||{},r=1,o=arguments.length;r<o;r++)if(null!==(t=arguments[r]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function o(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function a(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function u(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var s=document.documentElement;function l(t){var e="";return t.fake&&(e=s.style.overflow,t.style.background="",t.style.overflow=s.style.overflow="hidden",s.appendChild(t)),e}function c(t,e){t.fake&&(t.remove(),s.style.overflow=e,s.offsetHeight)}function f(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function d(t){return("insertRule"in t?t.cssRules:t.rules).length}function v(t,e,n){for(var i=0,r=t.length;i<r;i++)e.call(n,t[i],i)}var p="classList"in document.createElement("_"),m=p?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},h=p?function(t,e){m(t,e)||t.classList.add(e)}:function(t,e){m(t,e)||(t.className+=" "+e)},y=p?function(t,e){m(t,e)&&t.classList.remove(e)}:function(t,e){m(t,e)&&(t.className=t.className.replace(e,""))};function g(t,e){return t.hasAttribute(e)}function b(t,e){return t.getAttribute(e)}function x(t){return void 0!==t.item}function w(t,e){if(t=x(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function C(t,e){t=x(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var r=n;r--;)t[i].removeAttribute(e[r])}function M(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function T(t,e){"none"!==t.style.display&&(t.style.display="none")}function E(t,e){"none"===t.style.display&&(t.style.display="")}function L(t){return"none"!==window.getComputedStyle(t).display}function A(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach((function(i){"ms"===i&&"transform"!==t||e.push(i+n)})),t=e}for(var i=document.createElement("fakeelement"),r=(t.length,0);r<t.length;r++){var o=t[r];if(void 0!==i.style[o])return o}return!1}function S(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var N=!1;try{var B=Object.defineProperty({},"passive",{get:function(){N=!0}});window.addEventListener("test",null,B)}catch(t){}var D=!!N&&{passive:!0};function O(t,e,n){for(var i in e){var r=["touchstart","touchmove"].indexOf(i)>=0&&!n&&D;t.addEventListener(i,e[i],r)}}function H(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&D;t.removeEventListener(n,e[n],i)}}function k(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach((function(n){n(e,t)}))}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var I=function(t){t=r({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},t||{});var n=document,s=window,p={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},x={},N=t.useLocalStorage;if(N){var B=navigator.userAgent,D=new Date;try{(x=s.localStorage)?(x.setItem(D,D),N=x.getItem(D)==D,x.removeItem(D)):N=!1,N||(x={})}catch(t){N=!1}N&&(x.tnsApp&&x.tnsApp!==B&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach((function(t){x.removeItem(t)})),localStorage.tnsApp=B)}var R=x.tC?o(x.tC):a(x,"tC",function(){var t=document,e=u(),n=l(e),i=t.createElement("div"),r=!1;e.appendChild(i);try{for(var o,a="(10px * 10)",s=["calc"+a,"-moz-calc"+a,"-webkit-calc"+a],f=0;f<3;f++)if(o=s[f],i.style.width=o,100===i.offsetWidth){r=o.replace(a,"");break}}catch(t){}return e.fake?c(e,n):i.remove(),r}(),N),P=x.tPL?o(x.tPL):a(x,"tPL",function(){var t,e=document,n=u(),i=l(n),r=e.createElement("div"),o=e.createElement("div"),a="";r.className="tns-t-subp2",o.className="tns-t-ct";for(var s=0;s<70;s++)a+="<div></div>";return o.innerHTML=a,r.appendChild(o),n.appendChild(r),t=Math.abs(r.getBoundingClientRect().left-o.children[67].getBoundingClientRect().left)<2,n.fake?c(n,i):r.remove(),t}(),N),W=x.tMQ?o(x.tMQ):a(x,"tMQ",function(){if(window.matchMedia||window.msMatchMedia)return!0;var t,e=document,n=u(),i=l(n),r=e.createElement("div"),o=e.createElement("style"),a="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return o.type="text/css",r.className="tns-mq-test",n.appendChild(o),n.appendChild(r),o.styleSheet?o.styleSheet.cssText=a:o.appendChild(e.createTextNode(a)),t=window.getComputedStyle?window.getComputedStyle(r).position:r.currentStyle.position,n.fake?c(n,i):r.remove(),"absolute"===t}(),N),z=x.tTf?o(x.tTf):a(x,"tTf",A("transform"),N),q=x.t3D?o(x.t3D):a(x,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=u(),r=l(i),o=n.createElement("p"),a=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return a+="transform",i.insertBefore(o,null),o.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(o).getPropertyValue(a),i.fake?c(i,r):o.remove(),void 0!==e&&e.length>0&&"none"!==e}(z),N),F=x.tTDu?o(x.tTDu):a(x,"tTDu",A("transitionDuration"),N),j=x.tTDe?o(x.tTDe):a(x,"tTDe",A("transitionDelay"),N),_=x.tADu?o(x.tADu):a(x,"tADu",A("animationDuration"),N),V=x.tADe?o(x.tADe):a(x,"tADe",A("animationDelay"),N),G=x.tTE?o(x.tTE):a(x,"tTE",S(F,"Transition"),N),Q=x.tAE?o(x.tAE):a(x,"tAE",S(_,"Animation"),N),X=s.console&&"function"==typeof s.console.warn,Y=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],K={};if(Y.forEach((function(e){if("string"==typeof t[e]){var i=t[e],r=n.querySelector(i);if(K[e]=i,!r||!r.nodeName)return void(X&&console.warn("Can't find",t[e]));t[e]=r}})),!(t.container.children.length<1)){var J=t.responsive,U=t.nested,Z="carousel"===t.mode;if(J){0 in J&&(t=r(t,J[0]),delete J[0]);var $={};for(var tt in J){var et=J[tt];et="number"==typeof et?{items:et}:et,$[tt]=et}J=$,$=null}if(Z||function t(e){for(var n in e)Z||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(t),!Z){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var nt=t.animateIn,it=t.animateOut,rt=t.animateDelay,ot=t.animateNormal}var at,ut,st="horizontal"===t.axis,lt=n.createElement("div"),ct=n.createElement("div"),ft=t.container,dt=ft.parentNode,vt=ft.outerHTML,pt=ft.children,mt=pt.length,ht=Hn(),yt=!1;J&&ti(),Z&&(ft.className+=" tns-vpfix");var gt,bt,xt,wt,Ct,Mt,Tt,Et,Lt,At=t.autoWidth,St=Wn("fixedWidth"),Nt=Wn("edgePadding"),Bt=Wn("gutter"),Dt=Rn(),Ot=Wn("center"),Ht=At?1:Math.floor(Wn("items")),kt=Wn("slideBy"),It=t.viewportMax||t.fixedWidthViewportWidth,Rt=Wn("arrowKeys"),Pt=Wn("speed"),Wt=t.rewind,zt=!Wt&&t.loop,qt=Wn("autoHeight"),Ft=Wn("controls"),jt=Wn("controlsText"),_t=Wn("nav"),Vt=Wn("touch"),Gt=Wn("mouseDrag"),Qt=Wn("autoplay"),Xt=Wn("autoplayTimeout"),Yt=Wn("autoplayText"),Kt=Wn("autoplayHoverPause"),Jt=Wn("autoplayResetOnVisibility"),Ut=(Tt=null,Et=Wn("nonce"),Lt=document.createElement("style"),Tt&&Lt.setAttribute("media",Tt),Et&&Lt.setAttribute("nonce",Et),document.querySelector("head").appendChild(Lt),Lt.sheet?Lt.sheet:Lt.styleSheet),Zt=t.lazyload,$t=t.lazyloadSelector,te=[],ee=zt?(Ct=function(){if(At||St&&!It)return mt-1;var e=St?"fixedWidth":"items",n=[];if((St||t[e]<mt)&&n.push(t[e]),J)for(var i in J){var r=J[i][e];r&&(St||r<mt)&&n.push(r)}return n.length||n.push(0),Math.ceil(St?It/Math.min.apply(null,n):Math.max.apply(null,n))}(),Mt=Z?Math.ceil((5*Ct-mt)/2):4*Ct-mt,Mt=Math.max(Ct,Mt),Pn("edgePadding")?Mt+1:Mt):0,ne=Z?mt+2*ee:mt+ee,ie=!(!St&&!At||zt),re=St?Li():null,oe=!Z||!zt,ae=st?"left":"top",ue="",se="",le=St?function(){return Ot&&!zt?mt-1:Math.ceil(-re/(St+Bt))}:At?function(){for(var t=0;t<ne;t++)if(gt[t]>=-re)return t}:function(){return Ot&&Z&&!zt?mt-1:zt||Z?Math.max(0,ne-Math.ceil(Ht)):ne-1},ce=Bn(Wn("startIndex")),fe=ce,de=(Nn(),0),ve=At?null:le(),pe=t.preventActionWhenRunning,me=t.swipeAngle,he=!me||"?",ye=!1,ge=t.onInit,be=new k,xe=" tns-slider tns-"+t.mode,we=ft.id||(wt=window.tnsId,window.tnsId=wt?wt+1:1,"tns"+window.tnsId),Ce=Wn("disable"),Me=!1,Te=t.freezable,Ee=!(!Te||At)&&$n(),Le=!1,Ae={click:Ii,keydown:function(t){t=_i(t);var e=[p.LEFT,p.RIGHT].indexOf(t.keyCode);e>=0&&(0===e?Ke.disabled||Ii(t,-1):Je.disabled||Ii(t,1))}},Se={click:function(t){if(ye){if(pe)return;Hi()}var e=Vi(t=_i(t));for(;e!==tn&&!g(e,"data-nav");)e=e.parentNode;if(g(e,"data-nav")){var n=on=Number(b(e,"data-nav")),i=St||At?n*mt/nn:n*Ht;ki(Re?n:Math.min(Math.ceil(i),mt-1),t),an===n&&(dn&&qi(),on=-1)}},keydown:function(t){t=_i(t);var e=n.activeElement;if(!g(e,"data-nav"))return;var i=[p.LEFT,p.RIGHT,p.ENTER,p.SPACE].indexOf(t.keyCode),r=Number(b(e,"data-nav"));i>=0&&(0===i?r>0&&ji($e[r-1]):1===i?r<nn-1&&ji($e[r+1]):(on=r,ki(r,t)))}},Ne={mouseover:function(){dn&&(Pi(),vn=!0)},mouseout:function(){vn&&(Ri(),vn=!1)}},Be={visibilitychange:function(){n.hidden?dn&&(Pi(),mn=!0):mn&&(Ri(),mn=!1)}},De={keydown:function(t){t=_i(t);var e=[p.LEFT,p.RIGHT].indexOf(t.keyCode);e>=0&&Ii(t,0===e?-1:1)}},Oe={touchstart:Yi,touchmove:Ki,touchend:Ui,touchcancel:Ui},He={mousedown:Yi,mousemove:Ki,mouseup:Ui,mouseleave:Ui},ke=Pn("controls"),Ie=Pn("nav"),Re=!!At||t.navAsThumbnails,Pe=Pn("autoplay"),We=Pn("touch"),ze=Pn("mouseDrag"),qe="tns-slide-active",Fe="tns-slide-cloned",je="tns-complete",_e={load:function(t){li(Vi(t))},error:function(t){e=Vi(t),h(e,"failed"),ci(e);var e}},Ve="force"===t.preventScrollOnTouch;if(ke)var Ge,Qe,Xe=t.controlsContainer,Ye=t.controlsContainer?t.controlsContainer.outerHTML:"",Ke=t.prevButton,Je=t.nextButton,Ue=t.prevButton?t.prevButton.outerHTML:"",Ze=t.nextButton?t.nextButton.outerHTML:"";if(Ie)var $e,tn=t.navContainer,en=t.navContainer?t.navContainer.outerHTML:"",nn=At?mt:$i(),rn=0,on=-1,an=On(),un=an,sn="tns-nav-active",ln="Carousel Page ",cn=" (Current Slide)";if(Pe)var fn,dn,vn,pn,mn,hn="forward"===t.autoplayDirection?1:-1,yn=t.autoplayButton,gn=t.autoplayButton?t.autoplayButton.outerHTML:"",bn=["<span class='tns-visually-hidden'>"," animation</span>"];if(We||ze)var xn,wn,Cn={},Mn={},Tn=!1,En=st?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};At||Sn(Ce||Ee),z&&(ae=z,ue="translate",q?(ue+=st?"3d(":"3d(0px, ",se=st?", 0px, 0px)":", 0px)"):(ue+=st?"X(":"Y(",se=")")),Z&&(ft.className=ft.className.replace("tns-vpfix","")),function(){Pn("gutter");lt.className="tns-outer",ct.className="tns-inner",lt.id=we+"-ow",ct.id=we+"-iw",""===ft.id&&(ft.id=we);xe+=P||At?" tns-subpixel":" tns-no-subpixel",xe+=R?" tns-calc":" tns-no-calc",At&&(xe+=" tns-autowidth");xe+=" tns-"+t.axis,ft.className+=xe,Z?((at=n.createElement("div")).id=we+"-mw",at.className="tns-ovh",lt.appendChild(at),at.appendChild(ct)):lt.appendChild(ct);if(qt){(at||ct).className+=" tns-ah"}if(dt.insertBefore(lt,ft),ct.appendChild(ft),v(pt,(function(t,e){h(t,"tns-item"),t.id||(t.id=we+"-item"+e),!Z&&ot&&h(t,ot),w(t,{"aria-hidden":"true",tabindex:"-1"})})),ee){for(var e=n.createDocumentFragment(),i=n.createDocumentFragment(),r=ee;r--;){var o=r%mt,a=pt[o].cloneNode(!0);if(h(a,Fe),C(a,"id"),i.insertBefore(a,i.firstChild),Z){var u=pt[mt-1-o].cloneNode(!0);h(u,Fe),C(u,"id"),e.appendChild(u)}}ft.insertBefore(e,ft.firstChild),ft.appendChild(i),pt=ft.children}}(),function(){if(!Z)for(var e=ce,n=ce+Math.min(mt,Ht);e<n;e++){var i=pt[e];i.style.left=100*(e-ce)/Ht+"%",h(i,nt),y(i,ot)}st&&(P||At?(f(Ut,"#"+we+" > .tns-item","font-size:"+s.getComputedStyle(pt[0]).fontSize+";",d(Ut)),f(Ut,"#"+we,"font-size:0;",d(Ut))):Z&&v(pt,(function(t,e){t.style.marginLeft=function(t){return R?R+"("+100*t+"% / "+ne+")":100*t/ne+"%"}(e)})));if(W){if(F){var r=at&&t.autoHeight?Vn(t.speed):"";f(Ut,"#"+we+"-mw",r,d(Ut))}r=zn(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),f(Ut,"#"+we+"-iw",r,d(Ut)),Z&&(r=st&&!At?"width:"+qn(t.fixedWidth,t.gutter,t.items)+";":"",F&&(r+=Vn(Pt)),f(Ut,"#"+we,r,d(Ut))),r=st&&!At?Fn(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(r+=jn(t.gutter)),Z||(F&&(r+=Vn(Pt)),_&&(r+=Gn(Pt))),r&&f(Ut,"#"+we+" > .tns-item",r,d(Ut))}else{Z&&qt&&(at.style[F]=Pt/1e3+"s"),ct.style.cssText=zn(Nt,Bt,St,qt),Z&&st&&!At&&(ft.style.width=qn(St,Bt,Ht));r=st&&!At?Fn(St,Bt,Ht):"";Bt&&(r+=jn(Bt)),r&&f(Ut,"#"+we+" > .tns-item",r,d(Ut))}if(J&&W)for(var o in J){o=parseInt(o);var a=J[o],u=(r="",""),l="",c="",p="",m=At?null:Wn("items",o),g=Wn("fixedWidth",o),b=Wn("speed",o),x=Wn("edgePadding",o),w=Wn("autoHeight",o),C=Wn("gutter",o);F&&at&&Wn("autoHeight",o)&&"speed"in a&&(u="#"+we+"-mw{"+Vn(b)+"}"),("edgePadding"in a||"gutter"in a)&&(l="#"+we+"-iw{"+zn(x,C,g,b,w)+"}"),Z&&st&&!At&&("fixedWidth"in a||"items"in a||St&&"gutter"in a)&&(c="width:"+qn(g,C,m)+";"),F&&"speed"in a&&(c+=Vn(b)),c&&(c="#"+we+"{"+c+"}"),("fixedWidth"in a||St&&"gutter"in a||!Z&&"items"in a)&&(p+=Fn(g,C,m)),"gutter"in a&&(p+=jn(C)),!Z&&"speed"in a&&(F&&(p+=Vn(b)),_&&(p+=Gn(b))),p&&(p="#"+we+" > .tns-item{"+p+"}"),(r=u+l+c+p)&&Ut.insertRule("@media (min-width: "+o/16+"em) {"+r+"}",Ut.cssRules.length)}}(),Qn();var Ln=zt?Z?function(){var t=de,e=ve;t+=kt,e-=kt,Nt?(t+=1,e-=1):St&&(Dt+Bt)%(St+Bt)&&(e-=1),ee&&(ce>e?ce-=mt:ce<t&&(ce+=mt))}:function(){if(ce>ve)for(;ce>=de+mt;)ce-=mt;else if(ce<de)for(;ce<=ve-mt;)ce+=mt}:function(){ce=Math.max(de,Math.min(ve,ce))},An=Z?function(){var t,e,n,i,r,o,a,u,s,l,c;Ti(ft,""),F||!Pt?(Ni(),Pt&&L(ft)||Hi()):(t=ft,e=ae,n=ue,i=se,r=Ai(),o=Pt,a=Hi,u=Math.min(o,10),s=r.indexOf("%")>=0?"%":"px",r=r.replace(s,""),l=Number(t.style[e].replace(n,"").replace(i,"").replace(s,"")),c=(r-l)/o*u,setTimeout((function r(){o-=u,l+=c,t.style[e]=n+l+s+i,o>0?setTimeout(r,u):a()}),u)),st||Zi()}:function(){te=[];var t={};t[G]=t[Q]=Hi,H(pt[fe],t),O(pt[ce],t),Bi(fe,nt,it,!0),Bi(ce,ot,nt),G&&Q&&Pt&&L(ft)||Hi()};return{version:"2.9.3",getInfo:er,events:be,goTo:ki,play:function(){Qt&&!dn&&(zi(),pn=!1)},pause:function(){dn&&(qi(),pn=!0)},isOn:yt,updateSliderHeight:hi,refresh:Qn,destroy:function(){if(Ut.disabled=!0,Ut.ownerNode&&Ut.ownerNode.remove(),H(s,{resize:Un}),Rt&&H(n,De),Xe&&H(Xe,Ae),tn&&H(tn,Se),H(ft,Ne),H(ft,Be),yn&&H(yn,{click:Fi}),Qt&&clearInterval(fn),Z&&G){var e={};e[G]=Hi,H(ft,e)}Vt&&H(ft,Oe),Gt&&H(ft,He);var i=[vt,Ye,Ue,Ze,en,gn];for(var r in Y.forEach((function(e,n){var r="container"===e?lt:t[e];if("object"==typeof r&&r){var o=!!r.previousElementSibling&&r.previousElementSibling,a=r.parentNode;r.outerHTML=i[n],t[e]=o?o.nextElementSibling:a.firstElementChild}})),Y=nt=it=rt=ot=st=lt=ct=ft=dt=vt=pt=mt=ut=ht=At=St=Nt=Bt=Dt=Ht=kt=It=Rt=Pt=Wt=zt=qt=Ut=Zt=gt=te=ee=ne=ie=re=oe=ae=ue=se=le=ce=fe=de=ve=me=he=ye=ge=be=xe=we=Ce=Me=Te=Ee=Le=Ae=Se=Ne=Be=De=Oe=He=ke=Ie=Re=Pe=We=ze=qe=je=_e=bt=Ft=jt=Xe=Ye=Ke=Je=Ge=Qe=_t=tn=en=$e=nn=rn=on=an=un=sn=ln=cn=Qt=Xt=hn=Yt=Kt=yn=gn=Jt=bn=fn=dn=vn=pn=mn=Cn=Mn=xn=Tn=wn=En=Vt=Gt=null,this)"rebuild"!==r&&(this[r]=null);yt=!1},rebuild:function(){return I(r(t,K))}}}function Sn(t){t&&(Ft=_t=Vt=Gt=Rt=Qt=Kt=Jt=!1)}function Nn(){for(var t=Z?ce-ee:ce;t<0;)t+=mt;return t%mt+1}function Bn(t){return t=t?Math.max(0,Math.min(zt?mt-1:mt-Ht,t)):0,Z?t+ee:t}function Dn(t){for(null==t&&(t=ce),Z&&(t-=ee);t<0;)t+=mt;return Math.floor(t%mt)}function On(){var t,e=Dn();return t=Re?e:St||At?Math.ceil((e+1)*nn/mt-1):Math.floor(e/Ht),!zt&&Z&&ce===ve&&(t=nn-1),t}function Hn(){return s.innerWidth||n.documentElement.clientWidth||n.body.clientWidth}function kn(t){return"top"===t?"afterbegin":"beforeend"}function In(t){if(null!=t){var e,i,r=n.createElement("div");return t.appendChild(r),i=(e=r.getBoundingClientRect()).right-e.left,r.remove(),i||In(t.parentNode)}}function Rn(){var t=Nt?2*Nt-Bt:0;return In(dt)-t}function Pn(e){if(t[e])return!0;if(J)for(var n in J)if(J[n][e])return!0;return!1}function Wn(e,n){if(null==n&&(n=ht),"items"===e&&St)return Math.floor((Dt+Bt)/(St+Bt))||1;var i=t[e];if(J)for(var r in J)n>=parseInt(r)&&e in J[r]&&(i=J[r][e]);return"slideBy"===e&&"page"===i&&(i=Wn("items")),Z||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function zn(t,e,n,i,r){var o="";if(void 0!==t){var a=t;e&&(a-=e),o=st?"margin: 0 "+a+"px 0 "+t+"px;":"margin: "+t+"px 0 "+a+"px 0;"}else if(e&&!n){var u="-"+e+"px";o="margin: 0 "+(st?u+" 0 0":"0 "+u+" 0")+";"}return!Z&&r&&F&&i&&(o+=Vn(i)),o}function qn(t,e,n){return t?(t+e)*ne+"px":R?R+"("+100*ne+"% / "+n+")":100*ne/n+"%"}function Fn(t,e,n){var i;if(t)i=t+e+"px";else{Z||(n=Math.floor(n));var r=Z?ne:n;i=R?R+"(100% / "+r+")":100/r+"%"}return i="width:"+i,"inner"!==U?i+";":i+" !important;"}function jn(t){var e="";!1!==t&&(e=(st?"padding-":"margin-")+(st?"right":"bottom")+": "+t+"px;");return e}function _n(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function Vn(t){return _n(F,18)+"transition-duration:"+t/1e3+"s;"}function Gn(t){return _n(_,17)+"animation-duration:"+t/1e3+"s;"}function Qn(){if(Pn("autoHeight")||At||!st){var t=ft.querySelectorAll("img");v(t,(function(t){var e=t.src;Zt||(e&&e.indexOf("data:image")<0?(t.src="",O(t,_e),h(t,"loading"),t.src=e):li(t))})),e((function(){vi(M(t),(function(){bt=!0}))})),Pn("autoHeight")&&(t=fi(ce,Math.min(ce+Ht-1,ne-1))),Zt?Xn():e((function(){vi(M(t),Xn)}))}else Z&&Si(),Kn(),Jn()}function Xn(){if(At&&mt>1){var t=zt?ce:mt-1;!function e(){var n=pt[t].getBoundingClientRect().left,i=pt[t-1].getBoundingClientRect().right;Math.abs(n-i)<=1?Yn():setTimeout((function(){e()}),16)}()}else Yn()}function Yn(){st&&!At||(yi(),At?(re=Li(),Te&&(Ee=$n()),ve=le(),Sn(Ce||Ee)):Zi()),Z&&Si(),Kn(),Jn()}function Kn(){if(gi(),lt.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+ai()+"</span>  of "+mt+"</div>"),xt=lt.querySelector(".tns-liveregion .current"),Pe){var e=Qt?"stop":"start";yn?w(yn,{"data-action":e}):t.autoplayButtonOutput&&(lt.insertAdjacentHTML(kn(t.autoplayPosition),'<button type="button" data-action="'+e+'">'+bn[0]+e+bn[1]+Yt[0]+"</button>"),yn=lt.querySelector("[data-action]")),yn&&O(yn,{click:Fi}),Qt&&(zi(),Kt&&O(ft,Ne),Jt&&O(ft,Be))}if(Ie){if(tn)w(tn,{"aria-label":"Carousel Pagination"}),v($e=tn.children,(function(t,e){w(t,{"data-nav":e,tabindex:"-1","aria-label":ln+(e+1),"aria-controls":we})}));else{for(var n="",i=Re?"":'style="display:none"',r=0;r<mt;r++)n+='<button type="button" data-nav="'+r+'" tabindex="-1" aria-controls="'+we+'" '+i+' aria-label="'+ln+(r+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",lt.insertAdjacentHTML(kn(t.navPosition),n),tn=lt.querySelector(".tns-nav"),$e=tn.children}if(tr(),F){var o=F.substring(0,F.length-18).toLowerCase(),a="transition: all "+Pt/1e3+"s";o&&(a="-"+o+"-"+a),f(Ut,"[aria-controls^="+we+"-item]",a,d(Ut))}w($e[an],{"aria-label":ln+(an+1)+cn}),C($e[an],"tabindex"),h($e[an],sn),O(tn,Se)}ke&&(Xe||Ke&&Je||(lt.insertAdjacentHTML(kn(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+we+'">'+jt[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+we+'">'+jt[1]+"</button></div>"),Xe=lt.querySelector(".tns-controls")),Ke&&Je||(Ke=Xe.children[0],Je=Xe.children[1]),t.controlsContainer&&w(Xe,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&w([Ke,Je],{"aria-controls":we,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(w(Ke,{"data-controls":"prev"}),w(Je,{"data-controls":"next"})),Ge=xi(Ke),Qe=xi(Je),Mi(),Xe?O(Xe,Ae):(O(Ke,Ae),O(Je,Ae))),ei()}function Jn(){if(Z&&G){var e={};e[G]=Hi,O(ft,e)}Vt&&O(ft,Oe,t.preventScrollOnTouch),Gt&&O(ft,He),Rt&&O(n,De),"inner"===U?be.on("outerResized",(function(){Zn(),be.emit("innerLoaded",er())})):(J||St||At||qt||!st)&&O(s,{resize:Un}),qt&&("outer"===U?be.on("innerLoaded",di):Ce||di()),si(),Ce?ri():Ee&&ii(),be.on("indexChanged",pi),"inner"===U&&be.emit("innerLoaded",er()),"function"==typeof ge&&ge(er()),yt=!0}function Un(t){e((function(){Zn(_i(t))}))}function Zn(e){if(yt){"outer"===U&&be.emit("outerResized",er(e)),ht=Hn();var i,r=ut,o=!1;J&&(ti(),(i=r!==ut)&&be.emit("newBreakpointStart",er(e)));var a,u,s=Ht,l=Ce,c=Ee,p=Rt,m=Ft,g=_t,b=Vt,x=Gt,w=Qt,C=Kt,M=Jt,L=ce;if(i){var A=St,S=qt,N=jt,B=Ot,D=Yt;if(!W)var k=Bt,I=Nt}if(Rt=Wn("arrowKeys"),Ft=Wn("controls"),_t=Wn("nav"),Vt=Wn("touch"),Ot=Wn("center"),Gt=Wn("mouseDrag"),Qt=Wn("autoplay"),Kt=Wn("autoplayHoverPause"),Jt=Wn("autoplayResetOnVisibility"),i&&(Ce=Wn("disable"),St=Wn("fixedWidth"),Pt=Wn("speed"),qt=Wn("autoHeight"),jt=Wn("controlsText"),Yt=Wn("autoplayText"),Xt=Wn("autoplayTimeout"),W||(Nt=Wn("edgePadding"),Bt=Wn("gutter"))),Sn(Ce),Dt=Rn(),st&&!At||Ce||(yi(),st||(Zi(),o=!0)),(St||At)&&(re=Li(),ve=le()),(i||St)&&(Ht=Wn("items"),kt=Wn("slideBy"),(u=Ht!==s)&&(St||At||(ve=le()),Ln())),i&&Ce!==l&&(Ce?ri():function(){if(!Me)return;if(Ut.disabled=!1,ft.className+=xe,Si(),zt)for(var t=ee;t--;)Z&&E(pt[t]),E(pt[ne-t-1]);if(!Z)for(var e=ce,n=ce+mt;e<n;e++){var i=pt[e],r=e<ce+Ht?nt:ot;i.style.left=100*(e-ce)/Ht+"%",h(i,r)}ni(),Me=!1}()),Te&&(i||St||At)&&(Ee=$n())!==c&&(Ee?(Ni(Ai(Bn(0))),ii()):(!function(){if(!Le)return;Nt&&W&&(ct.style.margin="");if(ee)for(var t="tns-transparent",e=ee;e--;)Z&&y(pt[e],t),y(pt[ne-e-1],t);ni(),Le=!1}(),o=!0)),Sn(Ce||Ee),Qt||(Kt=Jt=!1),Rt!==p&&(Rt?O(n,De):H(n,De)),Ft!==m&&(Ft?Xe?E(Xe):(Ke&&E(Ke),Je&&E(Je)):Xe?T(Xe):(Ke&&T(Ke),Je&&T(Je))),_t!==g&&(_t?(E(tn),tr()):T(tn)),Vt!==b&&(Vt?O(ft,Oe,t.preventScrollOnTouch):H(ft,Oe)),Gt!==x&&(Gt?O(ft,He):H(ft,He)),Qt!==w&&(Qt?(yn&&E(yn),dn||pn||zi()):(yn&&T(yn),dn&&qi())),Kt!==C&&(Kt?O(ft,Ne):H(ft,Ne)),Jt!==M&&(Jt?O(n,Be):H(n,Be)),i){if(St===A&&Ot===B||(o=!0),qt!==S&&(qt||(ct.style.height="")),Ft&&jt!==N&&(Ke.innerHTML=jt[0],Je.innerHTML=jt[1]),yn&&Yt!==D){var R=Qt?1:0,P=yn.innerHTML,z=P.length-D[R].length;P.substring(z)===D[R]&&(yn.innerHTML=P.substring(0,z)+Yt[R])}}else Ot&&(St||At)&&(o=!0);if((u||St&&!At)&&(nn=$i(),tr()),(a=ce!==L)?(be.emit("indexChanged",er()),o=!0):u?a||pi():(St||At)&&(si(),gi(),oi()),u&&!Z&&function(){for(var t=ce+Math.min(mt,Ht),e=ne;e--;){var n=pt[e];e>=ce&&e<t?(h(n,"tns-moving"),n.style.left=100*(e-ce)/Ht+"%",h(n,nt),y(n,ot)):n.style.left&&(n.style.left="",h(n,ot),y(n,nt)),y(n,it)}setTimeout((function(){v(pt,(function(t){y(t,"tns-moving")}))}),300)}(),!Ce&&!Ee){if(i&&!W&&(Nt===I&&Bt===k||(ct.style.cssText=zn(Nt,Bt,St,Pt,qt)),st)){Z&&(ft.style.width=qn(St,Bt,Ht));var q=Fn(St,Bt,Ht)+jn(Bt);!function(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}(Ut,d(Ut)-1),f(Ut,"#"+we+" > .tns-item",q,d(Ut))}qt&&di(),o&&(Si(),fe=ce)}i&&be.emit("newBreakpointEnd",er(e))}}function $n(){if(!St&&!At)return mt<=(Ot?Ht-(Ht-1)/2:Ht);var t=St?(St+Bt)*mt:gt[mt],e=Nt?Dt+2*Nt:Dt+Bt;return Ot&&(e-=St?(Dt-St)/2:(Dt-(gt[ce+1]-gt[ce]-Bt))/2),t<=e}function ti(){for(var t in ut=0,J)t=parseInt(t),ht>=t&&(ut=t)}function ei(){!Qt&&yn&&T(yn),!_t&&tn&&T(tn),Ft||(Xe?T(Xe):(Ke&&T(Ke),Je&&T(Je)))}function ni(){Qt&&yn&&E(yn),_t&&tn&&E(tn),Ft&&(Xe?E(Xe):(Ke&&E(Ke),Je&&E(Je)))}function ii(){if(!Le){if(Nt&&(ct.style.margin="0px"),ee)for(var t="tns-transparent",e=ee;e--;)Z&&h(pt[e],t),h(pt[ne-e-1],t);ei(),Le=!0}}function ri(){if(!Me){if(Ut.disabled=!0,ft.className=ft.className.replace(xe.substring(1),""),C(ft,["style"]),zt)for(var t=ee;t--;)Z&&T(pt[t]),T(pt[ne-t-1]);if(st&&Z||C(ct,["style"]),!Z)for(var e=ce,n=ce+mt;e<n;e++){var i=pt[e];C(i,["style"]),y(i,nt),y(i,ot)}ei(),Me=!0}}function oi(){var t=ai();xt.innerHTML!==t&&(xt.innerHTML=t)}function ai(){var t=ui(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function ui(t){null==t&&(t=Ai());var e,n,i,r=ce;if(Ot||Nt?(At||St)&&(n=-(parseFloat(t)+Nt),i=n+Dt+2*Nt):At&&(n=gt[ce],i=n+Dt),At)gt.forEach((function(t,o){o<ne&&((Ot||Nt)&&t<=n+.5&&(r=o),i-t>=.5&&(e=o))}));else{if(St){var o=St+Bt;Ot||Nt?(r=Math.floor(n/o),e=Math.ceil(i/o-1)):e=r+Math.ceil(Dt/o)-1}else if(Ot||Nt){var a=Ht-1;if(Ot?(r-=a/2,e=ce+a/2):e=ce+a,Nt){var u=Nt*Ht/Dt;r-=u,e+=u}r=Math.floor(r),e=Math.ceil(e)}else e=r+Ht-1;r=Math.max(r,0),e=Math.min(e,ne-1)}return[r,e]}function si(){if(Zt&&!Ce){var t=ui();t.push($t),fi.apply(null,t).forEach((function(t){if(!m(t,je)){var e={};e[G]=function(t){t.stopPropagation()},O(t,e),O(t,_e),t.src=b(t,"data-src");var n=b(t,"data-srcset");n&&(t.srcset=n),h(t,"loading")}}))}}function li(t){h(t,"loaded"),ci(t)}function ci(t){h(t,je),y(t,"loading"),H(t,_e)}function fi(t,e,n){var i=[];for(n||(n="img");t<=e;)v(pt[t].querySelectorAll(n),(function(t){i.push(t)})),t++;return i}function di(){var t=fi.apply(null,ui());e((function(){vi(t,hi)}))}function vi(t,n){return bt?n():(t.forEach((function(e,n){!Zt&&e.complete&&ci(e),m(e,je)&&t.splice(n,1)})),t.length?void e((function(){vi(t,n)})):n())}function pi(){si(),gi(),oi(),Mi(),function(){if(_t&&(an=on>=0?on:On(),on=-1,an!==un)){var t=$e[un],e=$e[an];w(t,{tabindex:"-1","aria-label":ln+(un+1)}),y(t,sn),w(e,{"aria-label":ln+(an+1)+cn}),C(e,"tabindex"),h(e,sn),un=an}}()}function mi(t,e){for(var n=[],i=t,r=Math.min(t+e,ne);i<r;i++)n.push(pt[i].offsetHeight);return Math.max.apply(null,n)}function hi(){var t=qt?mi(ce,Ht):mi(ee,mt),e=at||ct;e.style.height!==t&&(e.style.height=t+"px")}function yi(){gt=[0];var t=st?"left":"top",e=st?"right":"bottom",n=pt[0].getBoundingClientRect()[t];v(pt,(function(i,r){r&&gt.push(i.getBoundingClientRect()[t]-n),r===ne-1&&gt.push(i.getBoundingClientRect()[e]-n)}))}function gi(){var t=ui(),e=t[0],n=t[1];v(pt,(function(t,i){i>=e&&i<=n?g(t,"aria-hidden")&&(C(t,["aria-hidden","tabindex"]),h(t,qe)):g(t,"aria-hidden")||(w(t,{"aria-hidden":"true",tabindex:"-1"}),y(t,qe))}))}function bi(t){return t.nodeName.toLowerCase()}function xi(t){return"button"===bi(t)}function wi(t){return"true"===t.getAttribute("aria-disabled")}function Ci(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Mi(){if(Ft&&!Wt&&!zt){var t=Ge?Ke.disabled:wi(Ke),e=Qe?Je.disabled:wi(Je),n=ce<=de,i=!Wt&&ce>=ve;n&&!t&&Ci(Ge,Ke,!0),!n&&t&&Ci(Ge,Ke,!1),i&&!e&&Ci(Qe,Je,!0),!i&&e&&Ci(Qe,Je,!1)}}function Ti(t,e){F&&(t.style[F]=e)}function Ei(t){return null==t&&(t=ce),At?(Dt-(Nt?Bt:0)-(gt[t+1]-gt[t]-Bt))/2:St?(Dt-St)/2:(Ht-1)/2}function Li(){var t=Dt+(Nt?Bt:0)-(St?(St+Bt)*ne:gt[ne]);return Ot&&!zt&&(t=St?-(St+Bt)*(ne-1)-Ei():Ei(ne-1)-gt[ne-1]),t>0&&(t=0),t}function Ai(t){var e;if(null==t&&(t=ce),st&&!At)if(St)e=-(St+Bt)*t,Ot&&(e+=Ei());else{var n=z?ne:Ht;Ot&&(t-=Ei()),e=100*-t/n}else e=-gt[t],Ot&&At&&(e+=Ei());return ie&&(e=Math.max(e,re)),e+=!st||At||St?"px":"%"}function Si(t){Ti(ft,"0s"),Ni(t)}function Ni(t){null==t&&(t=Ai()),ft.style[ae]=ue+t+se}function Bi(t,e,n,i){var r=t+Ht;zt||(r=Math.min(r,ne));for(var o=t;o<r;o++){var a=pt[o];i||(a.style.left=100*(o-ce)/Ht+"%"),rt&&j&&(a.style[j]=a.style[V]=rt*(o-t)/1e3+"s"),y(a,e),h(a,n),i&&te.push(a)}}function Di(t,e){oe&&Ln(),(ce!==fe||e)&&(be.emit("indexChanged",er()),be.emit("transitionStart",er()),qt&&di(),dn&&t&&["click","keydown"].indexOf(t.type)>=0&&qi(),ye=!0,An())}function Oi(t){return t.toLowerCase().replace(/-/g,"")}function Hi(t){if(Z||ye){if(be.emit("transitionEnd",er(t)),!Z&&te.length>0)for(var e=0;e<te.length;e++){var n=te[e];n.style.left="",V&&j&&(n.style[V]="",n.style[j]=""),y(n,it),h(n,ot)}if(!t||!Z&&t.target.parentNode===ft||t.target===ft&&Oi(t.propertyName)===Oi(ae)){if(!oe){var i=ce;Ln(),ce!==i&&(be.emit("indexChanged",er()),Si())}"inner"===U&&be.emit("innerLoaded",er()),ye=!1,fe=ce}}}function ki(t,e){if(!Ee)if("prev"===t)Ii(e,-1);else if("next"===t)Ii(e,1);else{if(ye){if(pe)return;Hi()}var n=Dn(),i=0;if("first"===t?i=-n:"last"===t?i=Z?mt-Ht-n:mt-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(mt-1,t))),i=t-n)),!Z&&i&&Math.abs(i)<Ht){var r=i>0?1:-1;i+=ce+i-mt>=de?mt*r:2*mt*r*-1}ce+=i,Z&&zt&&(ce<de&&(ce+=mt),ce>ve&&(ce-=mt)),Dn(ce)!==Dn(fe)&&Di(e)}}function Ii(t,e){if(ye){if(pe)return;Hi()}var n;if(!e){for(var i=Vi(t=_i(t));i!==Xe&&[Ke,Je].indexOf(i)<0;)i=i.parentNode;var r=[Ke,Je].indexOf(i);r>=0&&(n=!0,e=0===r?-1:1)}if(Wt){if(ce===de&&-1===e)return void ki("last",t);if(ce===ve&&1===e)return void ki("first",t)}e&&(ce+=kt*e,At&&(ce=Math.floor(ce)),Di(n||t&&"keydown"===t.type?t:null))}function Ri(){fn=setInterval((function(){Ii(null,hn)}),Xt),dn=!0}function Pi(){clearInterval(fn),dn=!1}function Wi(t,e){w(yn,{"data-action":t}),yn.innerHTML=bn[0]+t+bn[1]+e}function zi(){Ri(),yn&&Wi("stop",Yt[1])}function qi(){Pi(),yn&&Wi("start",Yt[0])}function Fi(){dn?(qi(),pn=!0):(zi(),pn=!1)}function ji(t){t.focus()}function _i(t){return Gi(t=t||s.event)?t.changedTouches[0]:t}function Vi(t){return t.target||s.event.srcElement}function Gi(t){return t.type.indexOf("touch")>=0}function Qi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Xi(){return o=Mn.y-Cn.y,a=Mn.x-Cn.x,e=Math.atan2(o,a)*(180/Math.PI),n=me,i=!1,(r=Math.abs(90-Math.abs(e)))>=90-n?i="horizontal":r<=n&&(i="vertical"),i===t.axis;var e,n,i,r,o,a}function Yi(t){if(ye){if(pe)return;Hi()}Qt&&dn&&Pi(),Tn=!0,wn&&(i(wn),wn=null);var e=_i(t);be.emit(Gi(t)?"touchStart":"dragStart",er(t)),!Gi(t)&&["img","a"].indexOf(bi(Vi(t)))>=0&&Qi(t),Mn.x=Cn.x=e.clientX,Mn.y=Cn.y=e.clientY,Z&&(xn=parseFloat(ft.style[ae].replace(ue,"")),Ti(ft,"0s"))}function Ki(t){if(Tn){var n=_i(t);Mn.x=n.clientX,Mn.y=n.clientY,Z?wn||(wn=e((function(){Ji(t)}))):("?"===he&&(he=Xi()),he&&(Ve=!0)),("boolean"!=typeof t.cancelable||t.cancelable)&&Ve&&t.preventDefault()}}function Ji(t){if(he){if(i(wn),Tn&&(wn=e((function(){Ji(t)}))),"?"===he&&(he=Xi()),he){!Ve&&Gi(t)&&(Ve=!0);try{t.type&&be.emit(Gi(t)?"touchMove":"dragMove",er(t))}catch(t){}var n=xn,r=En(Mn,Cn);if(!st||St||At)n+=r,n+="px";else n+=z?r*Ht*100/((Dt+Bt)*ne):100*r/(Dt+Bt),n+="%";ft.style[ae]=ue+n+se}}else Tn=!1}function Ui(n){if(Tn){wn&&(i(wn),wn=null),Z&&Ti(ft,""),Tn=!1;var r=_i(n);Mn.x=r.clientX,Mn.y=r.clientY;var o=En(Mn,Cn);if(Math.abs(o)){if(!Gi(n)){var a=Vi(n);O(a,{click:function t(e){Qi(e),H(a,{click:t})}})}Z?wn=e((function(){if(st&&!At){var t=-o*Ht/(Dt+Bt);t=o>0?Math.floor(t):Math.ceil(t),ce+=t}else{var e=-(xn+o);if(e<=0)ce=de;else if(e>=gt[ne-1])ce=ve;else for(var i=0;i<ne&&e>=gt[i];)ce=i,e>gt[i]&&o<0&&(ce+=1),i++}Di(n,o),be.emit(Gi(n)?"touchEnd":"dragEnd",er(n))})):he&&Ii(n,o>0?-1:1)}}"auto"===t.preventScrollOnTouch&&(Ve=!1),me&&(he="?"),Qt&&!dn&&Ri()}function Zi(){(at||ct).style.height=gt[ce+Ht]-gt[ce]+"px"}function $i(){var t=St?(St+Bt)*mt/Dt:mt/Ht;return Math.min(Math.ceil(t),mt)}function tr(){if(_t&&!Re&&nn!==rn){var t=rn,e=nn,n=E;for(rn>nn&&(t=nn,e=rn,n=T);t<e;)n($e[t]),t++;rn=nn}}function er(t){return{container:ft,slideItems:pt,navContainer:tn,navItems:$e,controlsContainer:Xe,hasControls:ke,prevButton:Ke,nextButton:Je,items:Ht,slideBy:kt,cloneCount:ee,slideCount:mt,slideCountNew:ne,index:ce,indexCached:fe,displayIndex:Nn(),navCurrentIndex:an,navCurrentIndexCached:un,pages:nn,pagesCached:rn,sheet:Ut,isOn:yt,event:t||{}}}X&&console.warn("No slides found in",t.container)};return I}();(()=>{"use strict";const t=document.querySelector("body"),e=document.querySelector(".header_inner button");let n=!1;e.addEventListener("click",(()=>{n?(t.classList.remove("menu_open"),t.classList.add("menu_closed"),n=!1):(t.classList.add("menu_open"),t.classList.remove("menu_closed"),n=!0)}));document.querySelectorAll('a[href^="#"]').forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault(),document.querySelector(e.target.closest("a").getAttribute("href")).scrollIntoView({behavior:"smooth"}),t.classList.remove("menu_open"),t.classList.add("menu_closed")}))}));const i=document.querySelector(".intro");new IntersectionObserver((function(e,n){const[i]=e;i.isIntersecting?t.classList.remove("scrolled"):t.classList.add("scrolled")}),{root:null,threshold:.7}).observe(i);let r,o=window.innerWidth,a=!1;const u=function(t){t<=768&&!a?(r=tns({container:"#portfolio",items:1,responsive:{600:{items:2}},slideBy:"page",mouseDrag:!0,controls:!1,navPosition:"bottom"}),a=!0):t>768&&a&&(r.destroy(),a=!1)};u(o);window.addEventListener("resize",(function(t){o=window.innerWidth,u(o)}))})();