"use strict";!function(){{const s=document.querySelector(".nav__item_dropdown button");s.addEventListener("click",function(){const t=document.querySelector(".dropdown");s.classList.toggle("active"),t.classList.toggle("active"),document.addEventListener("click",function(e){e=e.target;s.contains(e)||(s.classList.remove("active"),t.classList.remove("active"))})})}{const e=document.querySelector(".burger"),o=document.querySelector(".nav"),i=o.querySelectorAll("a"),n=document.querySelector(".media"),a=document.querySelector(".header__overlay");function t(){e.classList.toggle("active"),n.classList.toggle("active"),a.classList.toggle("active"),o.classList.toggle("active")}function c(){e.classList.remove("active"),n.classList.remove("active"),a.classList.remove("active"),o.classList.remove("active")}document.body,e.addEventListener("click",t),i.forEach(e=>{e.addEventListener("click",c)}),document.addEventListener("keydown",function(e){"Escape"===e.key&&c()}),a.addEventListener("click",function(e){e.target===a&&t()})}}();