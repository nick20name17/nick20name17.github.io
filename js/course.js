"use strict";!function(){{const e=document.querySelector("#range-input"),o=document.querySelector(".salary__fourth-heading span"),r=document.querySelector(".salary__info .sixth-heading span"),c=document.querySelector("#position"),i=(e.addEventListener("input",function(e){var e=+e.target.value,t=Math.floor(e/100),n=t%10==1&&20<t?"місяця":"місяців";e<=i?(o.textContent=600,c.textContent="Junior"):e<=s?(o.textContent=2e3,c.textContent="Middle"):(o.textContent=4e3,c.textContent="Senior"),r.textContent=t<e?t+" "+n:4}),2e3),s=3600}{const t=document.querySelectorAll(".section-program .module"),n=document.querySelector(".section-program .btn_outlined");t.forEach((t,e)=>{3<=e&&t.classList.add("hidden"),t.addEventListener("click",()=>{t.classList.toggle("active");var e=t.querySelector(".descr");e.style.maxHeight=t.classList.contains("active")?e.scrollHeight+"px":"0"})}),n.addEventListener("click",()=>{t.forEach(e=>{e.classList.remove("hidden")})})}}();