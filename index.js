import{a as f,S as m,i as n}from"./assets/vendor-C2ySes1p.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/",g="55216410-d425cac25254b9972be522906";async function y(o){const r={key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(d,{params:r})).data}const h=new m(".gallery a",{captionsData:"alt",captionDelay:250}),c=document.querySelector(".gallery"),l=document.querySelector(".loader");function b(o){const r=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:a,comments:u,downloads:p})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img 
      class="gallery-image" 
      src="${s}" 
      alt="${e}" 
    />
  </a>
  <div class="info">
    <p><b>Likes</b> ${t}</p>
    <p><b>Views</b> ${a}</p>
    <p><b>Comments</b> ${u}</p>
    <p><b>Downloads</b> ${p}</p>
  </div>
</li>`).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){c.innerHTML=""}function S(){l.classList.add("active")}function w(){l.classList.remove("active")}const q=document.querySelector(".form");q.addEventListener("submit",v);function v(o){o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){n.warning({message:"Please enter a search query!",position:"topRight"});return}L(),S(),y(r).then(s=>{if(s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(s.hits)}).catch(()=>{n.error({message:"Something went wrong. Try again later.",position:"topRight"})}).finally(()=>{w()}),o.target.reset()}
//# sourceMappingURL=index.js.map
