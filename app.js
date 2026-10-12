const app = document.querySelector('#app');
const toast = document.querySelector('.toast');
const menu = document.querySelector('.main-nav');
const menuToggle = document.querySelector('.menu-toggle');
const phone = '+91 98363 81831';
const phoneDigits = '919836381831';
const email = 'glitzndglamour22@gmail.com';
const address = 'C-15, Sammilani Park Rd, Survey Park, Santoshpur, Kolkata, West Bengal 700075';
const insta = 'https://www.instagram.com/ikakolisengupta/';
let currentCategory = 'Bridal';
let prefillValue = '';
let toastTimer;

const paths = {
  home: '/', academy: '/academy', services: '/services', portfolio: '/portfolio', contact: '/contact'
};
const titles = {
  home: 'Glitz & Glamour — Kakoli Sengupta',
  academy: 'The Academy — Glitz & Glamour',
  services: 'Beauty & Hair Services — Glitz & Glamour',
  portfolio: 'Portfolio — Glitz & Glamour',
  contact: 'Contact & Booking — Glitz & Glamour'
};

function route(){
  const key = (location.hash.replace(/^#\/?/, '').split('?')[0] || 'home').toLowerCase();
  return ['home','academy','services','portfolio','contact'].includes(key) ? key : 'home';
}
function goContact(category, value=''){
  currentCategory = category || 'Bridal';
  prefillValue = value;
  location.hash = '/contact';
  if(route()==='contact') render();
}
function image(src, alt, cls=''){ return `<img class="${cls}" src="${src}" alt="${alt}" loading="lazy">`; }
function home(){return `
<div class="page-wrap">
  <section class="home-hero">
    <div class="hero-copy">
      <div class="eyebrow">Glitz & Glamour · Kolkata · Est. 2006</div>
      <h1><span>Beauty with</span><span class="script">a point of view.</span></h1>
      <p>Makeup artist, hairstylist and educator Kakoli Sengupta brings 30+ years of experience to the moments that matter — and to the next generation of artists.</p>
      <div class="hero-actions"><a class="button" href="#/contact">Start a conversation <span class="arrow">↗</span></a><a class="text-link" href="#/academy">Meet the Academy <span>↗</span></a></div>
      <div class="hero-facts"><div class="fact"><strong>30+</strong><small>years in beauty</small></div><div class="fact"><strong>Level 4</strong><small>City & Guilds · UK</small></div><div class="fact"><strong>3 ways</strong><small>to work with us</small></div></div>
    </div>
    <div class="hero-art" data-tilt>${image('./public/images/bridal-editorial.png','Editorial art direction: a Bengali bride in red and gold')}<div class="art-label">Campaign visual · art direction</div><div class="art-index">01 — THE BRIDAL EDIT</div><div class="seal">Beauty that<br>still feels like<br><i>you</i></div></div>
  </section>
  <div class="hero-marquee"><div class="marquee-track"><span>Bridal artistry <i>✳</i> Salon rituals <i>✳</i> Beauty education <i>✳</i> Made with intention <i>✳</i> Bridal artistry <i>✳</i> Salon rituals <i>✳</i> Beauty education <i>✳</i> Made with intention <i>✳</i></span><span aria-hidden="true">Bridal artistry <i>✳</i> Salon rituals <i>✳</i> Beauty education <i>✳</i> Made with intention <i>✳</i> Bridal artistry <i>✳</i> Salon rituals <i>✳</i> Beauty education <i>✳</i> Made with intention <i>✳</i></span></div></div>
  <section class="section offers">
    <div class="section-heading"><div><div class="eyebrow">One studio. Three ways in.</div><h2>Find your <span class="script">kind of glow.</span></h2></div><p>A wedding look, a little time for yourself, or the skills to make beauty your work. Start wherever you are.</p></div>
    <div class="offer-grid">
      <a href="#/contact" class="offer-card" data-category-link="Bridal"><div class="card-top"><div class="num">01 / For your day</div></div><div class="card-bottom"><div><h3>Bridal &amp; occasion</h3><p>Thoughtful makeup and hair, shaped around your features, your outfit and your day.</p><span class="text-link" style="color:inherit">Plan your look <span>↗</span></span></div><span class="circle-arrow">↗</span></div></a>
      <a href="#/contact" class="offer-card" data-category-link="Salon"><div class="card-top"><div class="num">02 / For yourself</div></div><div class="card-bottom"><div><h3>The boutique salon</h3><p>Hair, makeup and beauty appointments with a personal touch in Santoshpur.</p><span class="text-link" style="color:inherit">Explore salon services <span>↗</span></span></div><span class="circle-arrow">↗</span></div></a>
      <a href="#/contact" class="offer-card" data-category-link="Academy"><div class="card-top"><div class="num">03 / For your next chapter</div></div><div class="card-bottom"><div><h3>Glitz &amp; Glamour Academy</h3><p>Learn the craft hands-on, with an educator who's spent decades doing the work.</p><span class="text-link" style="color:inherit">Ask about courses <span>↗</span></span></div><span class="circle-arrow">↗</span></div></a>
    </div>
  </section>
  <section class="section"><div class="story-band"><div class="story-photo">${image('./public/images/academy-class.png','Art direction for a one-to-one makeup training session')}<div class="caption">A practice built on passing craft forward</div></div><div class="story-text"><div class="eyebrow">The artist behind the artistry</div><h2>Experience in her hands.<br><span class="script">Room for your vision.</span></h2><p>Kakoli Sengupta is a makeup artist, hairstylist and educator with more than three decades in the beauty industry. Her work spans bridal artistry, salon services and professional education — with a steady belief that technique matters most when it brings out the person in the chair.</p><div class="pullquote">“Good beauty work doesn't hide you. It helps you arrive as yourself.”</div><a class="text-link" href="#/academy">Discover Kakoli’s story <span>↗</span></a></div></div></section>
  <section class="academy-feature"><div class="feature-image">${image('./public/images/academy-class.png','Concept image of a makeup educator demonstrating a technique')}<span class="image-credit">Academy · visual direction</span></div><div class="feature-copy"><div class="eyebrow">A place to learn the doing</div><h2>Good artists are made<br>one <i>good practice</i> at a time.</h2><p>At Glitz &amp; Glamour Academy, students learn through practical training in hair, makeup and beauty. Kakoli’s City &amp; Guilds Level 4 Licentiateship grounds a teaching practice shaped by decades in the industry.</p><a class="button" href="#/academy">Explore the Academy <span class="arrow">↗</span></a></div></section>
  <div class="stat-strip"><div><strong>30+</strong><span>years of experience</span></div><div><strong>Level 4</strong><span>City &amp; Guilds · UK</span></div><div><strong>2006</strong><span>Academy established*</span></div><div><strong>Kolkata</strong><span>based in Santoshpur</span></div></div>
  <section class="section"><div class="section-heading"><div><div class="eyebrow">A small note before the big day</div><h2>Let’s make a plan<br><span class="script">that feels like you.</span></h2></div><a class="button" href="#/contact">Choose your enquiry <span class="arrow">↗</span></a></div><p style="max-width:560px;color:var(--muted);font-size:13px;line-height:1.8">Tell us if you’re planning a bridal look, booking the salon, or exploring a course. We’ll point you to the right conversation.</p></section>
  <p class="fine-print" style="padding:0 24px 28px;margin:0 auto;max-width:1240px;color:#8b7a72">*Academy establishment year appears in a public academy listing; please reconfirm before launch.</p>
</div>`}

const courses = [
  ['01','Hairdressing','Build a foundation in professional hairdressing, styling and salon-ready technique.','Hairdressing'],
  ['02','Beauty therapy','Study beauty therapy fundamentals and practical treatment skills.','Beauty Therapy'],
  ['03','Professional makeup artistry','Develop makeup technique for fashion, occasion and client work.','Professional Makeup Artistry'],
  ['04','Bridal exclusive','Explore the planning and artistry behind complete bridal looks.','Bridal Exclusive'],
  ['05','Long hair styling','Practise structure, finish and occasion styling for long hair.','Long Hair Styling'],
  ['06','Haircut & colour','Ask about focused learning in haircutting and hair colour.','Haircut & Hair Colour'],
  ['07','Advanced beauty therapy','Ask about advanced beauty therapy training and current entry requirements.','Advanced Beauty Therapy'],
  ['08','Salon management','Learn the practical foundations of managing a beauty business.','Salon Management'],
  ['09','Teacher training','A listed training pathway for City & Guilds qualifiers; confirm current eligibility and schedule.','Teacher Training'],
  ['10','Advanced & in-house workshops','Selected PMU, airbrush, HydraFacial and related topics may be available; ask for the current calendar.','Advanced / in-house workshop']
];
function academy(){return `<div class="page-wrap">
  <section class="page-hero"><div class="breadcrumb">Home <span>/</span> Academy</div><div class="eyebrow">Learn with Glitz &amp; Glamour</div><h1>A craft worth learning.<br><em>A career worth building.</em></h1><p>Practical beauty education led by Kakoli Sengupta — artist, hairstylist and educator with 30+ years in the industry.</p></section>
  <section class="section"><div class="academy-intro"><div><div class="eyebrow">The Academy · est. 2006*</div><h2>Technique, patience<br>and <span class="script">a little courage.</span></h2><p>Glitz &amp; Glamour Academy is built around hands-on learning in hair, makeup and beauty. The goal is not just to finish a course: it’s to build the confidence, discipline and practical skill to keep growing in the industry.</p><p>Founder and trainer Kakoli Sengupta holds a City &amp; Guilds (UK) Level 4 Licentiateship in Hairdressing. Students learn with the guidance of a working artist and an educator who understands the craft from both sides of the mirror.</p><div class="credential-stack"><div class="credential"><b>30+</b><span>years of professional experience</span></div><div class="credential"><b>Level 4</b><span>City &amp; Guilds Licentiateship · UK</span></div><div class="credential"><b>2006*</b><span>Academy establishment year, listed online</span></div></div></div><div class="academy-image">${image('./public/images/academy-class.png','Art direction image of a beauty educator training a student')}<div class="image-stamp">Learning, by doing · concept visual</div></div></div></section>
  <section class="section course-section"><div class="section-heading"><div><div class="eyebrow">Choose your starting point</div><h2>Courses that meet you<br><span class="script">at the mirror.</span></h2></div><p>Course names and formats reflect publicly listed programme categories. Current batches, eligibility, fees and certification should be confirmed directly with the Academy.</p></div><div class="course-grid">${courses.map(c=>`<article class="course-card"><span class="course-num">${c[0]} / COURSE</span><h3>${c[1]}</h3><p>${c[2]}</p><button type="button" data-enquire="${c[3]}">Ask about this course ↗</button></article>`).join('')}</div><p class="course-footnote">Public listings have described 3-month certificate and 6–12-month diploma formats. Please ask the Academy to confirm current duration and availability. Advanced/in-house workshop topics are subject to current scheduling.</p></section>
  <section class="section" style="padding-top:0"><div class="course-enquire"><div><h3>Not sure which course fits?</h3><p>Tell us what you want to learn. We’ll help you find the right starting point.</p></div><a class="button" href="#/contact" data-category-link="Academy">Enquire about a course <span class="arrow">↗</span></a></div></section>
</div>`}

const services = [
  {num:'01',title:'Bridal makeup & hair',cat:'Bridal',desc:'A complete bridal look shaped around your features, outfit, ceremony and personal style.',detail:'Start with the date, venue and the look you have in mind. For an enquiry, share your event date, getting-ready location, number of people and whether you need makeup, hair or both. Travel and final availability are confirmed directly.'},
  {num:'02',title:'Party & occasion makeup',cat:'Bridal',desc:'Makeup for engagements, celebrations, festive occasions and the days worth dressing up for.',detail:'A polished, personal look for your event. Tell us the occasion, date, start time and whether you would like makeup, hair styling or both.'},
  {num:'03',title:'Hair styling',cat:'Salon',desc:'From a fresh everyday finish to occasion styling, with an eye for shape and detail.',detail:'Ask about styling options, hair length and finish. Appointment time and service suitability are confirmed after a quick consultation.'},
  {num:'04',title:'Haircut & colour',cat:'Salon',desc:'Salon hair services in a welcoming boutique setting in Santoshpur, Kolkata.',detail:'Share your current hair length, desired change and any reference images when you enquire. A consultation helps the team advise on time, process and upkeep.'},
  {num:'05',title:'Beauty & skin services',cat:'Salon',desc:'Personal beauty-care appointments and pre-bridal planning, tailored to your needs.',detail:'Let us know your timeline and what you would like to focus on. The salon will guide you on available treatments and suitable appointment slots.'},
  {num:'06',title:'Fashion & session artistry',cat:'Bridal',desc:'Makeup and hair for shoots, fashion, performance and other creative briefs.',detail:'For a session brief, include the date, call time, location, creative references and the size of the team. Travel and production details are confirmed directly.'}
];
function servicesPage(){return `<div class="page-wrap"><section class="page-hero"><div class="breadcrumb">Home <span>/</span> Services</div><div class="eyebrow">Bridal · Salon · Artistry</div><h1>Beauty work, with<br><em>the person in mind.</em></h1><p>From wedding mornings to the salon chair, every service begins with listening. Choose a starting point below, then tell us what you need.</p></section>
  <section class="section"><div class="service-intro"><div><div class="eyebrow">Services at Glitz &amp; Glamour</div><h2>Made for the moment.<br><span class="script">Made for you.</span></h2></div><div class="service-note">“The best look isn't the loudest one. It's the one you recognise yourself in.”</div></div>
  <div class="service-list" style="margin-top:42px">${services.map(s=>`<div class="service-row-wrap"><div class="service-row"><span class="row-no">${s.num}</span><h3>${s.title}</h3><p>${s.desc}</p><button class="circle-arrow service-toggle" aria-label="More about ${s.title}" data-service="${s.num}">↗</button></div><div class="service-extra" data-extra="${s.num}">${s.detail} <button type="button" class="text-link" style="margin-left:9px;border:0;background:none;padding:0" data-enquire="${s.title}" data-category="${s.cat}">Enquire about this service ↗</button></div></div>`).join('')}</div>
  <div class="service-bottom"><div><h3>Your date, your plans.</h3><p>For bridal, salon and makeup bookings, begin with a short enquiry.</p></div><a href="#/contact" class="button" data-category-link="Bridal">Book / enquire <span class="arrow">↗</span></a></div></section></div>`}

const gallery = [
 {name:'A Bengali bridal story',cat:'Bridal',img:'./public/images/bridal-editorial.png',shape:'Bride, in vermilion'},
 {name:'The quiet details',cat:'Makeup',img:'./public/images/bridal-editorial.png',shape:'Skin, light & detail'},
 {name:'A lesson in finish',cat:'Academy',img:'./public/images/academy-class.png',shape:'Learning by doing'},
 {name:'Soft waves, soft light',cat:'Hair',img:'./public/images/salon-styling.png',shape:'An occasion-ready finish'},
 {name:'Practice makes artistry',cat:'Academy',img:'./public/images/academy-class.png',shape:'Technique in progress'},
 {name:'Salon, in the moment',cat:'Salon',img:'./public/images/salon-styling.png',shape:'A little time for you'}
];
function portfolio(){return `<div class="page-wrap"><section class="page-hero"><div class="breadcrumb">Home <span>/</span> Portfolio</div><div class="eyebrow">A visual diary</div><h1>Craft, captured<br><em>in the details.</em></h1><p>Bridal artistry, makeup, hair, salon moments and work in the making at the Academy.</p></section>
<section class="section"><div class="portfolio-tools"><div class="filter-row">${['All','Bridal','Makeup','Hair','Salon','Academy'].map((x,i)=>`<button class="filter-btn ${i===0?'active':''}" data-filter="${x}">${x}</button>`).join('')}</div><div class="portfolio-note">Browse by chapter. Tap any frame to take a closer look.</div></div><div class="gallery-grid">${gallery.map((g,i)=>`<button class="gallery-card" data-category="${g.cat}" data-image="${g.img}" data-caption="${g.name}">${image(g.img,g.shape)}<span class="concept">Visual direction</span><span class="gallery-label"><small>${g.cat} / 0${i+1}</small><b>${g.name}</b></span></button>`).join('')}</div><div class="gallery-disclaimer"><b>Portfolio imagery note.</b> The photographs here are generated art-direction placeholders, not Kakoli Sengupta’s client or student work. Replace with client-approved, rights-cleared images before launch; captions and categories are layout examples.</div></section></div>`}

const categoryOptions={
  Bridal:['Bridal makeup & hair','Party / occasion makeup','Engagement makeup','Fashion / session makeup','Other bridal enquiry'],
  Salon:['Hair styling','Haircut','Hair colour','Beauty / skin appointment','Pre-bridal consultation','Other salon service'],
  Academy:['Professional makeup artistry','Hairdressing','Beauty therapy','Bridal exclusive','Long hair styling','Haircut & hair colour','Salon management','Advanced / in-house workshop','Other course enquiry']
};
function contact(){return `<div class="page-wrap"><div class="contact-hero"><section class="page-hero"><div class="breadcrumb" style="color:#c5aca6">Home <span>/</span> Contact &amp; Booking</div><div class="eyebrow">Your next step starts here</div><h1>One enquiry.<br><em>Three ways forward.</em></h1><p>Tell us if you’re here for bridal, salon or the Academy. We’ll make sure your question finds the right person.</p></section></div>
  <section class="section"><div class="booking-layout"><aside class="booking-aside"><div class="eyebrow">Come say hello</div><h2>Good things start<br>with a <span class="script">conversation.</span></h2><p>Share a few details and the Glitz &amp; Glamour team can follow up about availability, fees and the next step. Submitting the form opens a pre-filled WhatsApp message — it is not stored on this website.</p><div class="contact-card"><div class="contact-line"><b>↗</b><div><a href="tel:+919836381831">${phone}</a><small>Call or WhatsApp</small></div></div><div class="contact-line"><b>✉</b><div><a href="mailto:${email}">${email}</a><small>Email the studio</small></div></div><div class="contact-line"><b>◎</b><div><a href="${insta}" target="_blank" rel="noreferrer">@ikakolisengupta ↗</a><small>Instagram · please confirm spelling</small></div></div></div></aside>
    <form class="booking-form" id="booking-form"><h2>What can we help with?</h2><p>Choose a path, then tell us a little more. All fields marked * are required.</p><div class="booking-choices" role="group" aria-label="Enquiry type"><button type="button" class="choice selected" data-choice="Bridal"><span>01 / Occasion</span><b>Bridal</b></button><button type="button" class="choice" data-choice="Salon"><span>02 / For you</span><b>Salon</b></button><button type="button" class="choice" data-choice="Academy"><span>03 / Learn</span><b>Academy</b></button></div><input type="hidden" name="category" value="Bridal"><div class="form-grid"><div class="field"><label for="name">Your name *</label><input id="name" name="name" required autocomplete="name" placeholder="Name" /></div><div class="field"><label for="phone">Phone / WhatsApp *</label><input id="phone" name="phone" required autocomplete="tel" type="tel" placeholder="+91 ..." /></div><div class="field"><label for="interest">I'm interested in *</label><select id="interest" name="interest" required>${categoryOptions['Bridal'].map(x=>`<option>${x}</option>`).join('')}</select></div><div class="field"><label for="date" id="date-label">Preferred date *</label><input id="date" name="date" required type="date" /></div><div class="field full"><label for="message">A few details</label><textarea id="message" name="message" placeholder="Event date and location, the salon service you have in mind, or what you’d love to learn..."></textarea></div></div><div class="form-actions"><button class="button" type="submit">Continue on WhatsApp <span class="arrow">↗</span></button><span class="form-hint">The team will confirm availability and fees directly.<br>No payment is collected on this site.</span></div><div class="success-message" role="status">Your enquiry is ready. WhatsApp will open with your details — please press Send there to share it.</div></form></div>
    <div class="map-panel"><div><h3>Find us in Santoshpur.</h3><p>${address}</p></div><a class="button light" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}">Get directions <span class="arrow">↗</span></a></div>
  </section></div>`}

function render(){
  const page = route();
  const views={home,academy,services:servicesPage,portfolio,contact};
  app.innerHTML=views[page]();
  document.title=titles[page];
  document.querySelectorAll('.main-nav a').forEach(a=>a.classList.toggle('active',a.dataset.route===page));
  menu.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');
  if(page==='contact') setupContact();
  if(page==='portfolio') setupPortfolio();
  setupReveal();setupTilt();
  window.scrollTo({top:0,behavior:'smooth'});
}
function setupContact(){
  const form=document.querySelector('#booking-form'); if(!form)return;
  document.querySelectorAll('.choice').forEach(btn=>btn.classList.toggle('selected',btn.dataset.choice===currentCategory));
  form.querySelector('[name="category"]').value=currentCategory;
  const select=form.querySelector('#interest');
  select.innerHTML=categoryOptions[currentCategory].map(x=>`<option>${x}</option>`).join('');
  if(prefillValue){const matched=[...select.options].find(o=>o.text.toLowerCase().includes(prefillValue.toLowerCase()));if(matched)select.value=matched.value;else{const opt=document.createElement('option');opt.textContent=prefillValue;select.add(opt);select.value=prefillValue}form.querySelector('#message').value=`I'm interested in ${prefillValue}. `;prefillValue='';}
  const date=document.querySelector('#date'); if(date)date.min=new Date().toISOString().slice(0,10);
}
function setupPortfolio(){
  document.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.toggle('active',b===btn));
    const filter=btn.dataset.filter;
    document.querySelectorAll('.gallery-card').forEach(card=>card.classList.toggle('hidden',filter!=='All'&&card.dataset.category!==filter));
  }));
}
function setupReveal(){
  const items=document.querySelectorAll('.section-heading,.story-band,.academy-intro,.course-card,.service-row-wrap,.gallery-card,.booking-form,.booking-aside,.map-panel');
  if(!('IntersectionObserver' in window)){items.forEach(x=>x.classList.add('visible'));return;}
  const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.08});items.forEach((el,i)=>{el.classList.add('reveal');el.style.transitionDelay=(i%4)*55+'ms';obs.observe(el)});
}
function setupTilt(){const el=document.querySelector('[data-tilt]');if(!el||matchMedia('(prefers-reduced-motion: reduce)').matches)return;el.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;const r=el.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;const img=el.querySelector('img');img.style.transform=`perspective(950px) rotateY(${x*4}deg) rotateX(${-y*3}deg) scale(1.015)`});el.addEventListener('pointerleave',()=>{const img=el.querySelector('img');img.style.transform=''})}
function showToast(text){toast.textContent=text;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2600)}

window.addEventListener('hashchange',render);
if(!location.hash)location.hash='/home';else render();
document.querySelector('#year').textContent=new Date().getFullYear();
menuToggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-window.innerHeight;document.querySelector('.scroll-progress span').style.width=(max?window.scrollY/max*100:0)+'%'});

document.addEventListener('click',e=>{
  const categoryLink=e.target.closest('[data-category-link]');
  if(categoryLink){e.preventDefault();goContact(categoryLink.dataset.categoryLink);return;}
  const enquire=e.target.closest('[data-enquire]');
  if(enquire){const category=enquire.dataset.category||'Academy';goContact(category,enquire.dataset.enquire);return;}
  const choice=e.target.closest('[data-choice]');
  if(choice){currentCategory=choice.dataset.choice;document.querySelectorAll('.choice').forEach(b=>b.classList.toggle('selected',b===choice));const f=document.querySelector('#booking-form');if(f){f.querySelector('[name="category"]').value=currentCategory;const s=f.querySelector('#interest');s.innerHTML=categoryOptions[currentCategory].map(x=>`<option>${x}</option>`).join('');}return;}
  const toggle=e.target.closest('.service-toggle');
  if(toggle){const detail=document.querySelector(`[data-extra="${toggle.dataset.service}"]`);detail.classList.toggle('open');toggle.textContent=detail.classList.contains('open')?'−':'↗';return;}
  const card=e.target.closest('.gallery-card');
  if(card){const modal=document.createElement('div');modal.className='modal open';modal.innerHTML=`<div class="modal-box"><button class="modal-close" aria-label="Close">×</button><img src="${card.dataset.image}" alt="${card.dataset.caption}"><div class="modal-caption"><span>${card.dataset.caption}</span><small style="font:9px var(--sans);letter-spacing:.13em;text-transform:uppercase">Visual direction · concept</small></div></div>`;document.body.append(modal);modal.addEventListener('click',ev=>{if(ev.target===modal||ev.target.closest('.modal-close'))modal.remove()});document.addEventListener('keydown',function esc(ev){if(ev.key==='Escape'){modal.remove();document.removeEventListener('keydown',esc)}},{once:true});return;}
});

document.addEventListener('submit',e=>{
  if(e.target.id!=='booking-form')return;
  e.preventDefault();
  const fd=new FormData(e.target);
  const data=Object.fromEntries(fd.entries());
  const body=[`Hello Glitz & Glamour, I'd like to enquire about ${data.category}.`,`Name: ${data.name}`,`Phone: ${data.phone}`,`Interested in: ${data.interest}`,`${data.category==='Academy'?'Preferred batch / start date':'Preferred date'}: ${data.date}`,data.message?`A few details: ${data.message}`:''].filter(Boolean).join('\n');
  const url=`https://wa.me/${phoneDigits}?text=${encodeURIComponent(body)}`;
  const win=window.open(url,'_blank','noopener,noreferrer');
  document.querySelector('.success-message').classList.add('show');
  if(!win)showToast('WhatsApp is ready. If it did not open, use the WhatsApp contact link below.');
});
