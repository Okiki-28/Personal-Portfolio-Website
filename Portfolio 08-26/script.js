/* Edit this list to update your projects. Add a "live" URL once a project is deployed. */
const G="https://github.com/Okiki-28/";
const projects=[
 {t:"Bakery and Cafe",c:"React website",d:"A warm, responsive café website with a menu, gallery and opening hours.",tags:["React","CSS"],live:"",code:G+"Website-Clones/tree/main/Bakery%20and%20Cafe/sample-1"},
 {t:"Boutique",c:"React website",d:"A clean boutique storefront with a product grid and mobile-first navigation.",tags:["React","CSS"],live:"",code:G+"Website-Clones/tree/main/Boutique/sample-1"},
 {t:"D&E Home Solutions",c:"Website recreation",d:"A home services company site rebuilt with service listings and a clear contact section.",tags:["HTML","CSS","JavaScript"],live:"",code:G+"Website-Clones/tree/main/D%25E%20Home%20Solutions%20Clone"},
 {t:"MDNS",c:"Website recreation",d:"A careful recreation of a multi-page site, focused on layout accuracy and responsiveness.",tags:["HTML","CSS","JavaScript"],live:"",code:G+"Website-Clones/tree/main/MDNS"},
 {t:"Python practice projects",c:"Python",d:"A growing collection of Python exercises, from small utilities to problem-solving challenges.",tags:["Python"],live:"",code:G+"Practice-Projects-Python"},
 {t:"This portfolio",c:"Personal website",d:"The site you're on now: hand-written, responsive and built to be easy to update.",tags:["HTML","CSS","JavaScript"],live:"",code:G+"Personal-Portfolio-Website"}
];
document.getElementById("grid").innerHTML=projects.map(p=>`<article class="card"><div class="thumb">Screenshot coming soon</div><div class="cb"><small>${p.c}</small><h3>${p.t}</h3><p>${p.d}</p><ul class="tags">${p.tags.map(t=>`<li>${t}</li>`).join("")}</ul><div class="acts">${p.live?`<a class="btn sm" href="${p.live}" target="_blank" rel="noopener">Live demo</a>`:`<span class="btn sm off">Demo coming soon</span>`}<a class="btn sm ghost" href="${p.code}" target="_blank" rel="noopener">View code</a></div></div></article>`).join("");

const nav=document.getElementById("nav"),burger=nav.querySelector(".burger");
burger.addEventListener("click",()=>{const o=nav.classList.toggle("open");burger.setAttribute("aria-expanded",o)});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");burger.setAttribute("aria-expanded","false")}));

const links=[...nav.querySelectorAll("li a")];
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle("on",l.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-40% 0px -55% 0px"});
document.querySelectorAll("main section[id]").forEach(s=>io.observe(s));
document.getElementById("yr").textContent=new Date().getFullYear();