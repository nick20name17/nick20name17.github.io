"use strict";!function(){{const c=document.querySelectorAll(".tabs .btn"),l=document.querySelectorAll(".courses__list");c.forEach((e,t)=>{e.addEventListener("click",()=>{l.forEach(e=>e.classList.remove("active")),c.forEach(e=>e.classList.add("btn_outlined")),e.classList.remove("btn_outlined"),e.classList.add("btn_dark"),l[t].classList.add("active")})})}{const a=document.querySelectorAll(".bullets .tab"),e=document.querySelectorAll(".feedback .content"),t=document.querySelector("#up-arrow"),n=document.querySelector("#down-arrow");let c=0;function s(){e.forEach((e,t)=>{t===c?(e.classList.add("active"),a[t].classList.add("active")):(e.classList.remove("active"),a[t].classList.remove("active"))})}a.forEach((e,t)=>{e.addEventListener("click",()=>{c=t,s()})}),t.addEventListener("click",()=>{c=(c-1+e.length)%e.length,s()}),n.addEventListener("click",()=>{c=(c+1)%e.length,s()}),s()}}();