"use strict";document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".js-more-btn"),t=document.querySelector(".more-btn__icon"),n=document.querySelector("#loc-5"),c=document.querySelectorAll("[data-location-top]"),o=document.querySelector(".js-hidden-elements"),i=document.querySelector(".js-widget-more-btn"),d=document.querySelectorAll(".widget__title"),r=document.querySelector(".js-reset-filters"),l=document.querySelector(".js-apply-filters"),s=document.querySelector(".form");e.addEventListener("click",function(e){e.preventDefault(),t.classList.add("more-btn__icon_active"),setTimeout(function(){t.classList.remove("more-btn__icon_active")},1e3)}),n.addEventListener("change",function(){n.checked&&(c.forEach(function(e){e.checked=!1}),n.checked=!0)}),c.forEach(function(e){e.addEventListener("change",function(){e.checked&&(n.checked=!1)})}),i.addEventListener("click",function(e){e.preventDefault(),o.classList.toggle("widget__hidden-elements_showed")}),d.forEach(function(e){e.addEventListener("click",function(e){this.classList.toggle("widget__title_active"),e.target.nextElementSibling.classList.toggle("widget__body_hidden")})}),r.addEventListener("click",function(e){e.preventDefault(),s.reset()}),l.addEventListener("click",function(e){e.preventDefault()})});