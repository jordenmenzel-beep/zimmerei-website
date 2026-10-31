// Hier die echten Daten eintragen. Solange "endpoint" leer ist, sendet das Formular nichts und sagt das auch offen.
const CONFIG={phone:"",email:"",endpoint:""};
const $=id=>document.getElementById(id);
document.querySelectorAll(".tel").forEach(e=>{if(CONFIG.phone){e.textContent=CONFIG.phone;e.href="tel:"+CONFIG.phone.replace(/[^+\d]/g,"")}});
document.querySelectorAll(".mail").forEach(e=>{if(CONFIG.email){e.textContent=CONFIG.email;e.href="mailto:"+CONFIG.email}});
const b=document.querySelector(".burger"),n=$("nav");
b.addEventListener("click",()=>{b.setAttribute("aria-expanded",n.classList.toggle("open"))});
n.addEventListener("click",e=>{if(e.target.closest("a")){n.classList.remove("open");b.setAttribute("aria-expanded",false)}});
const d=$("dlg");
if(d){document.querySelectorAll("[data-t]").forEach(p=>p.addEventListener("click",()=>{$("dt").textContent=p.dataset.t;$("dd").textContent=p.dataset.d;$("dw").textContent="Ausgeführte Arbeiten: "+p.dataset.w;d.showModal()}));
d.addEventListener("click",e=>{if(e.target===d)d.close()})}
const f=$("f");
if(f)f.addEventListener("submit",async e=>{
e.preventDefault();const m=$("msg");m.className="";m.textContent="";
if(f.website.value)return;
f.querySelectorAll("[aria-invalid]").forEach(x=>x.removeAttribute("aria-invalid"));
const bad=[...f.elements].filter(x=>x.name&&!x.checkValidity());
if(bad.length){bad.forEach(x=>x.setAttribute("aria-invalid","true"));m.className="err";
m.textContent="Bitte prüfen Sie diese Angaben: "+bad.map(x=>x.closest("label").firstChild.textContent.replace("*","").trim()||"Einwilligung zum Datenschutz").join(", ")+".";bad[0].focus();return}
if(!CONFIG.endpoint){m.className="err";m.textContent="Das Formular ist noch nicht mit einem Versanddienst verbunden. Ihre Anfrage wurde nicht gesendet. Bitte rufen Sie uns an oder schreiben Sie uns direkt per E-Mail.";return}
try{const r=await fetch(CONFIG.endpoint,{method:"POST",body:new FormData(f),headers:{Accept:"application/json"}});
if(!r.ok)throw 0;f.reset();m.className="ok";m.textContent="Vielen Dank! Ihre Anfrage ist bei uns eingegangen. Wir melden uns zeitnah bei Ihnen."}
catch{m.className="err";m.textContent="Das Senden hat leider nicht geklappt. Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch."}});
