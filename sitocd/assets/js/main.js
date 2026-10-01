// Modifica questi dati: aggiornano nome, email e Instagram in tutta la pagina
const CFG={name:"CD Agency",email:"cdagencystudio23@gmail.com",ig:"https://instagram.com/cdagency.studio",handle:"@cdagency.studio"};
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
$$("[data-name]").forEach(e=>e.firstChild.textContent=CFG.name);
$$("[data-ig]").forEach(a=>{a.href=CFG.ig;if(a.classList.contains("btn")===false)a.textContent=CFG.handle+" su Instagram"});
$$("[data-mail]").forEach(a=>{a.href="mailto:"+CFG.email;a.textContent=CFG.email});
$$("[data-mailbtn]").forEach(a=>a.href="mailto:"+CFG.email);
$("#y").textContent=new Date().getFullYear();
const hd=$("#hd"),nv=$("#nv"),bg=$("#bg");
addEventListener("scroll",()=>hd.classList.toggle("s",scrollY>10),{passive:true});
const tg=o=>{nv.classList.toggle("open",o);bg.setAttribute("aria-expanded",o);bg.setAttribute("aria-label",o?"Chiudi il menu":"Apri il menu")};
bg.onclick=()=>tg(!nv.classList.contains("open"));
$$("nav a").forEach(a=>a.onclick=()=>tg(false));
addEventListener("keydown",e=>{if(e.key==="Escape"){tg(false);lb.classList.remove("on")}});
// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
$$(".rv").forEach(e=>io.observe(e));
// filtro
$$(".fl button").forEach(b=>b.onclick=()=>{
 $$(".fl button").forEach(x=>x.setAttribute("aria-pressed",x===b));
 const f=b.dataset.f;
 $$(".item").forEach(i=>{const ok=f==="all"||i.dataset.cat.split(" ").includes(f);i.classList.toggle("hide",!ok);i.classList.remove("show");if(ok){void i.offsetWidth;i.classList.add("show")}});
});
// lightbox
const lb=$("#lb"),li=$("img",lb);
const open=i=>{const m=$("img",i);li.src=m.src;li.alt=m.alt;lb.classList.add("on")};
$$(".item").forEach(i=>{i.onclick=()=>open(i);i.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();open(i)}}});
lb.onclick=()=>lb.classList.remove("on");
