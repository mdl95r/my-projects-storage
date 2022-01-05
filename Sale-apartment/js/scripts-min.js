"use strict";document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".burger-btn"),e=document.querySelector(".header-nav__list"),s=document.querySelector(".header"),n=document.querySelector(".header-nav"),c=document.querySelector(".up-btn-container"),i=(document.querySelector(".cards-container"),document.querySelector(".card-more-wrap"),document.querySelector(".js-card-more-btn")),o=document.querySelector(".js-sort-price-btn"),r=document.querySelector(".js-sort-price__list"),a=document.querySelector(".js-sort-room-btn"),l=document.querySelector(".js-sort-room__list"),d=document.querySelector(".js-sort-price-increase"),u=document.querySelector(".js-sort-price-decrease"),m=document.querySelector(".js-sort-room-increase"),v=document.querySelector(".js-sort-room-decrease"),_=document.querySelector(".cards-list"),f=document.querySelectorAll(".cards-item"),y=document.querySelector(".js-main-content__title"),L=document.querySelector("body"),b=document.querySelector(".js-modal-blackout"),p=document.querySelector(".js-modal"),h=document.querySelector(".js-main-content__title-bottom");let S,q,g,j,k;window.onload=function(t,e){let s,n=f.length;const c=new XMLHttpRequest;c.open(t,e),c.onload=function(){200!=this.status?alert(this.status+": "+this.statusText):(q=JSON.parse(this.responseText),s=q.length,S=n+s,y.innerHTML=`Найдено ${S} ${function(t,e){let s=(t=Math.abs(t)%100)%10;return t>10&&t<20?e[2]:s>1&&s<5?e[1]:1==s?e[0]:e[2]}(S,["квартира","квартиры","квартир"])}`,j=function(t){let e=0;return g=function(){let s=18*e++;return t.slice(s,s+18)}}(q))},c.send()}("GET","js/card.json"),document.addEventListener("click",function(t){const e=t.target;if(e.classList.contains("cards-item__status-btn")){const t=e.closest(".cards-item"),i=t.querySelector(".cards-item__title").innerText,o=t.querySelector(".cards-item__price").innerText,r=t.dataset.id;L.classList.add("body-lock"),b.classList.add("modal-blackout_active"),p.classList.add("modal_active"),s=i,n=o,c=r,$.textContent=s,x.textContent=n,C.value=c}var s,n,c}),_.addEventListener("click",function(t){const e=t.target;e&&e.classList.contains("cards-item__favorites")&&e.classList.toggle("cards-item__favorites--fav"),e&&e.classList.contains("cards-item__favorites--fav")?e.setAttribute("data-fav",!0):e.removeAttribute("data-fav",!0)}),i.addEventListener("click",function(t){k=document.documentElement.scrollTop,t.preventDefault();const e=document.querySelectorAll(".cards-item"),s=j();e.length==S&&(i.remove(),h.classList.add("main-content__title-bottom_show")),s.forEach(function(t){const e=_.appendChild(document.createElement("li"));e.className="cards-item",function(t,e){for(let s in e)t.setAttribute(s,e[s])}(e,{"data-price":`${t.dataPrice}`,"data-room":`${t.dataRoom}`,"data-id":`${t.dataId}`}),e.innerHTML=`\n\n\n\n            <article class="cards-item__wrapper">\n\n\n\n              <div class="cards-item__header">\n\n\n\n                <button class="cards-item__favorites"></button>\n\n\n\n                <div class="cards-item__img-wrap">\n\n\n\n                  <picture>\n\n\n\n                    <source srcset="${t.imageWebp}" type="image/webp">\n\n\n\n                    <img class="cards-item__img" src="${t.image}" alt="${t.imageAlt}">\n\n\n\n                  </picture>\n\n\n\n                </div>\n\n\n\n              </div>\n\n\n\n              <div class="cards-item__body">\n\n\n\n                <h3 class="cards-item__title">${t.title}</h3>\n\n\n\n                <div class="cards-item__specification">\n\n\n\n                  <span class="cards-item__apartment-decoration">${t.decor}</span>\n\n\n\n                  <div class="cards-item__measure-wrap">\n\n\n\n                    <span class="cards-item__measure">${t.measure}</span>\n\n\n\n                    <span class="cards-item__measure-title">площадь</span>\n\n\n\n                  </div>\n\n\n\n                  <div class="cards-item__floor-wrap">\n\n\n\n                    <span class="cards-item__floor">${t.floor}</span>\n\n\n\n                    <span class="cards-item__floor-title">этаж</span>\n\n\n\n                  </div>\n\n\n\n                </div>\n\n\n\n                <h4 class="cards-item__price">${t.price}</h4>\n\n\n\n              </div>\n\n\n\n            </article>\n\n\n\n            <button class="cards-item__status-btn cards-item__status-btn--free">Свободно</button>\n\n\n\n          `,d.classList.contains("sort-list__item--active")&&E("data-price"),u.classList.contains("sort-list__item--active")&&A("data-price"),m.classList.contains("sort-list__item--active")&&E("data-room"),v.classList.contains("sort-list__item--active")&&A("data-room")}),function(t){document.documentElement.scrollTop=t}(k)});const w=document.getElementById("phone");IMask(w,{mask:"+{7} (000) 000-00-00"});function E(t){let e=document.querySelector(".cards-list");for(let s=0;s<e.children.length-1;s++)for(let n=s;n<e.children.length;n++)if(+e.children[s].getAttribute(t)>+e.children[n].getAttribute(t)){T(e.replaceChild(e.children[n],e.children[s]),e.children[s])}}function A(t){let e=document.querySelector(".cards-list");for(let s=0;s<e.children.length-1;s++)for(let n=s;n<e.children.length;n++)if(+e.children[s].getAttribute(t)<+e.children[n].getAttribute(t)){T(e.replaceChild(e.children[n],e.children[s]),e.children[s])}}function T(t,e){return e.parentNode.insertBefore(t,e.nextSibling)}t.addEventListener("click",function(){this.classList.toggle("burger-btn--active"),t.classList.contains("burger-btn--active")?(e.style.display="block",n.style.left="0"):(n.style.left="",setTimeout(function(){e.removeAttribute("style"),n.removeAttribute("style")},300))}),document.onclick=function(s){s.target.classList.contains("burger-btn")||(n.style.left="",t.classList.remove("burger-btn--active"),setTimeout(function(){e.removeAttribute("style"),n.removeAttribute("style")},100))},window.addEventListener("resize",function(){window.innerWidth<769&&(n.style.left="",setTimeout(function(){t.classList.remove("burger-btn--active"),e.style.display=""},300))}),o.addEventListener("click",function(){document.onclick=function(t){const e=t.target;e.classList.contains("sort-price__btn")||(r.classList.remove("sort-list--active"),o.classList.remove("sort-btn--active"))},this.classList.toggle("sort-btn--active"),this.classList.contains("sort-btn--active")?(r.classList.add("sort-list--active"),l.classList.remove("sort-list--active"),a.classList.remove("sort-btn--active"),l.removeAttribute("style"),function(){const t=document.querySelector(".js-sort-price-increase"),e=document.querySelector(".js-sort-price-decrease");t.onclick=function(){this.classList.add("sort-list__item--active"),e.classList.remove("sort-list__item--active"),E("data-price")}}(),function(){const t=document.querySelector(".js-sort-price-decrease"),e=document.querySelector(".js-sort-price-increase");t.onclick=function(){this.classList.add("sort-list__item--active"),e.classList.remove("sort-list__item--active"),A("data-price")}}()):r.classList.remove("sort-list--active")}),a.addEventListener("click",function(){document.onclick=function(t){const e=t.target;e.classList.contains("sort-room__btn")||(l.classList.remove("sort-list--active"),l.removeAttribute("style"),a.classList.remove("sort-btn--active"))},this.classList.toggle("sort-btn--active"),this.classList.contains("sort-btn--active")?(l.classList.add("sort-list--active"),r.classList.remove("sort-list--active"),o.classList.remove("sort-btn--active"),l.style.left="98px",function(){const t=document.querySelector(".js-sort-room-increase"),e=document.querySelector(".js-sort-room-decrease");t.onclick=function(){this.classList.add("active"),e.classList.remove("active"),E("data-room")}}(),function(){const t=document.querySelector(".js-sort-room-decrease"),e=document.querySelector(".js-sort-room-increase");t.onclick=function(){this.classList.add("sort-list__item--active"),e.classList.remove("sort-list__item--active"),A("data-room")}}()):(l.classList.remove("sort-list--active"),l.removeAttribute("style"))}),window.addEventListener("scroll",function(){let t=document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop,e=window.innerWidth;t>=200&&(c.style.display="block"),t<200&&(c.style.display=""),e<=768&&(t>=300&&s.classList.add("header-fixed"),0==t&&s.classList.remove("header-fixed")),e>768&&(t>=2e3&&s.classList.add("header-fixed"),0==t&&s.classList.remove("header-fixed"))});document.querySelector(".js-modal-close-btn ");const $=document.querySelector(".js-modal-name-appart"),x=document.querySelector(".js-modal-name-price"),C=document.querySelector(".js-input-id"),M=document.querySelector(".form");function B(){window.pageYOffset>0&&(window.scrollBy(0,-40),setTimeout(B,0))}document.addEventListener("click",function(t){const e=t.target;(e.classList.contains("js-modal-close-btn")||e.classList.contains("js-modal-blackout"))&&(L.classList.remove("body-lock"),b.classList.remove("modal-blackout_active"),p.classList.remove("modal_active"),M.reset())}),c.addEventListener("click",function(){B()})});