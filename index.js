import{i as y}from"./assets/vendor-Bk_fp7ln.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const d of e.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function n(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=n(t);fetch(t.href,e)}})();const l=document.querySelector(".work-together-input-email"),s=document.querySelector(".work-together-comments"),g=document.querySelector(".work-together-subscribe"),i=document.querySelector(".label-input-email"),c=document.querySelector(".work-together-backdrop"),m=document.querySelector(".modal-backdrop-bg"),h=document.querySelector(".work-together-modal-head-text"),p=document.querySelector(".work-together-invitation"),b=document.querySelector(".work-together-modal-close-x-btn"),f=document.body;g.addEventListener("submit",v);function v(r){r.preventDefault();const o=r.target.elements.email.value.trim(),n=r.target.elements.comments.value.trim();fetch("https://portfolio-js.b.goit.study/api/requests",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o,comment:n})}).then(e=>{if(!e.ok)throw y.error({title:"Error",message:"Sorry, try again!",messageColor:"white",messageSize:"16",backgroundColor:"red",theme:"dark",position:"bottomRight"}),new Error("Network response was not ok");return e.json()}).then(e=>{w(e.title,e.message),g.reset(),i.textContent="",l.style.borderBottomColor="rgba(250, 250, 250, 0.20)"}).catch(()=>{y.error({title:"Error",message:"Sorry, network failed, check your modem and try again!",messageColor:"white",messageSize:"16",backgroundColor:"red",theme:"dark",position:"bottomRight"})})}l.addEventListener("blur",k);function k(r){const o=r.target.value.trim(),n=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;o!==""&&(n.test(o)?(i.textContent="Success!",l.style.borderBottomColor="#3CBC81",i.style.color="#3CBC81"):(i.textContent="Invalid email, try again",l.style.borderBottomColor="#E74A3B",i.style.color="#E74A3B"))}s.addEventListener("input",C);function C(r){const o=parseInt(s.getAttribute("maxlength"));let n=r.target.value;n.length>o&&(s.value=n.slice(0,o)),s.style.whiteSpace="nowrap",s.style.overflow="hidden",s.style.textOverflow="ellipsis"}b.addEventListener("click",u);m.addEventListener("click",u);document.addEventListener("keydown",r=>{r.key==="Escape"&&u()});function w(r,o){c.classList.remove("visually-hidden"),c.style.display="block",m.classList.remove("visually-hidden"),f.classList.add("modal-open"),h.textContent=r,p.textContent=o}function u(){c.classList.add("visually-hidden"),c.style.display="none",m.classList.add("visually-hidden"),f.classList.remove("modal-open")}
//# sourceMappingURL=index.js.map
