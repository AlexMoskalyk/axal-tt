(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".header__burger-btn"),n=document.querySelector(".nav-menu-mobile__close-btn"),o=document.querySelector(".nav-menu-mobile-container");s.addEventListener("click",function(){o.classList.remove("hidden"),document.body.style.overflow="hidden"}),n.addEventListener("click",function(){o.classList.add("hidden"),document.body.style.overflow=""}),document.addEventListener("keydown",function(r){r.key==="Escape"&&o.classList.add("hidden")})});
//# sourceMappingURL=commonHelpers.js.map
