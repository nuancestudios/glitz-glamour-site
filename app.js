/* ==========================================================================
   Glitz & Glamour Academy & Boutique Salon
   All business copy derived from the client's Brand & Website Discovery
   response (Q1, Q2, Q8–Q13, 20 Oct 2026). Do not add service, course or
   credential claims that are not in that response.
   ========================================================================== */

const app = document.querySelector('#app');
const toast = document.querySelector('.toast');
const menu = document.querySelector('.main-nav');
const menuToggle = document.querySelector('.menu-toggle');

/* ---- Client-confirmed details ------------------------------------------- */
const brand        = 'Glitz & Glamour Academy & Boutique Salon';
const phone        = '+91 98363 81831';            // Q13 · WhatsApp
const phoneDigits  = '919836381831';
const landline     = '+91 98352 31831';            // Q13 · business telephone
const phone2Digits = '919835231831';
const email        = 'kakolina2002@gmail.com';     // Q13
const insta        = 'https://www.instagram.com/ikakolysengupta/';  // Q14
const address      = 'C-15, Sammilani Park, Santoshpur, Kolkata, West Bengal 700075';
const landmark     = 'Near Suryodaya School';
const mapsLink     = 'https://maps.app.goo.gl/gtsrktuJtRh5kzcH6?g_st=ac';  // Q12
const googlePlace  = 'https://www.google.com/maps/place/Glitz+%26+Glamour+Academy+and+Boutique+Salon/@22.4878514,88.3908825,19z/data=!4m8!3m7!1s0x3a02719f99561d63:0x5b1f914edb357939!8m2!3d22.4880456!4d88.3908439!9m1!1b1!16s%2Fg%2F11gnp6df1l';

let currentCategory = 'Bridal';
let prefillValue = '';
let toastTimer;

const titles = {
  home: 'Glitz & Glamour Academy & Boutique Salon — Kakoly Sengupta',
  academy: 'The Academy — Professional Beauty Training — Glitz & Glamour',
  services: 'Boutique Salon Services — Bridal, Hair, Colour & Skin — Glitz & Glamour',
  testimonials: 'Google Reviews — Glitz & Glamour Academy & Boutique Salon',
  contact: 'Contact & Enquiries — Glitz & Glamour Academy & Boutique Salon'
};
const descriptions = {
  home: 'Where beauty meets expertise. Glitz & Glamour brings together personalised luxury beauty services and professional beauty education in Santoshpur, Kolkata.',
  academy: 'A professional beauty training institute in Kolkata: professional makeup, hairdressing, hair colour theory, hairstyling and beauty therapy — from beginner courses to masterclasses and one-to-one mentoring.',
  services: 'Bridal makeup and hairstyling, occasion makeup, precision haircuts, hair colour and styling, Dermalogica skin treatments, Davines and Schwarzkopf colour, and keratin, botox and nanoplastia. By appointment, Santoshpur, Kolkata.',
  testimonials: '4.9 stars from 103 Google reviews of Glitz & Glamour Academy & Boutique Salon — brides, salon regulars and Academy students, in their own words.',
  contact: 'Book a salon appointment or enquire about a course. WhatsApp, telephone and email for Glitz & Glamour Academy & Boutique Salon, Santoshpur, Kolkata.'
};

function route(){
  const key = (location.hash.replace(/^#\/?/, '').split('?')[0] || 'home').toLowerCase();
  if(key==='portfolio') return 'testimonials';
  return ['home','academy','services','testimonials','contact'].includes(key) ? key : 'home';
}
function goContact(category, value=''){
  currentCategory = category || 'Bridal';
  prefillValue = value;
  location.hash = '/contact';
  if(route()==='contact') render();
}
/* Intrinsic sizes, so the browser reserves space before an image loads.
   Without width/height every late image shifts the page under the reader's
   thumb — the usual cause of mistaps on a phone. */
const imageSizes = {
  'bridal-editorial.jpg':[928,1152],
  'academy-class.jpg':[1280,960],
  'academy-class-square.jpg':[900,900],
  'academy-touchup.jpg':[1600,1066]
};
function image(src, alt, cls='', opts={}){
  const key = src.split('/').pop();
  const [w,h] = opts.w&&opts.h ? [opts.w,opts.h] : (imageSizes[key] || []);
  const dims = w&&h ? ` width="${w}" height="${h}"` : '';
  const eager = opts.eager===true;
  return `<img class="${cls}" src="${src}" alt="${alt}"${dims} loading="${eager?'eager':'lazy'}" decoding="async"${eager?' fetchpriority="high"':''}>`;
}
/* Inline-SVG icon. Never use ↗ ✳ ✆ ✉ ★ as text: iOS substitutes colour
   emoji for any glyph the webfonts lack, which breaks the gold/wine palette. */
function ic(name,cls=''){ return `<svg class="icon ${cls}" aria-hidden="true" focusable="false"><use href="#i-${name}"></use></svg>`; }
const stars=n=>Array.from({length:n},()=>ic('star','icon--star')).join('');

/* ==========================================================================
   HOME
   ========================================================================== */
function home(){return `
<div class="page-wrap">
  <section class="home-hero">
    <div class="hero-copy">
      <div class="eyebrow">Boutique salon &amp; professional academy · Kolkata</div>
      <h1><span>Where Beauty</span><span class="script">Meets Expertise.</span></h1>
      <p>Glitz &amp; Glamour brings together personalised luxury beauty services and professional beauty education. From refined bridal artistry and advanced skin and hair services to hands-on industry training, every experience is guided by expertise, precision and individual attention.</p>
      <div class="hero-actions"><a class="button" href="#/contact" data-category-link="Salon">Book a salon appointment <span class="arrow">${ic('arrow')}</span></a><a class="text-link" href="#/academy">Explore the Academy <span>${ic('arrow')}</span></a></div>
      <div class="hero-facts"><div class="fact"><strong>30+</strong><small>years in beauty</small></div><div class="fact"><strong>Level 4</strong><small>City &amp; Guilds · London</small></div><div class="fact"><strong>Dermalogica</strong><small>specialist</small></div></div>
    </div>
    <div class="hero-art" data-tilt>${image('./public/images/bridal-editorial.jpg','Bridal makeup and hair by Glitz & Glamour','',{w:928,h:1152,eager:true})}<div class="art-label">Bridal artistry · salon work</div><div class="art-index">01 — SALON &amp; ACADEMY</div><div class="seal">${ic('aster','seal-mark')}<span>True luxury<br>lies in<br><i>expertise</i></span></div></div>
  </section>
  <div class="hero-marquee"><div class="marquee-track"><span>Bridal artistry <i>${ic('aster')}</i> Precision haircuts <i>${ic('aster')}</i> Dermalogica skin <i>${ic('aster')}</i> Davines &amp; Schwarzkopf colour <i>${ic('aster')}</i> Professional education <i>${ic('aster')}</i> Bridal artistry <i>${ic('aster')}</i> Precision haircuts <i>${ic('aster')}</i> Dermalogica skin <i>${ic('aster')}</i> Davines &amp; Schwarzkopf colour <i>${ic('aster')}</i> Professional education <i>${ic('aster')}</i></span><span aria-hidden="true">Bridal artistry <i>${ic('aster')}</i> Precision haircuts <i>${ic('aster')}</i> Dermalogica skin <i>${ic('aster')}</i> Davines &amp; Schwarzkopf colour <i>${ic('aster')}</i> Professional education <i>${ic('aster')}</i> Bridal artistry <i>${ic('aster')}</i> Precision haircuts <i>${ic('aster')}</i> Dermalogica skin <i>${ic('aster')}</i> Davines &amp; Schwarzkopf colour <i>${ic('aster')}</i> Professional education <i>${ic('aster')}</i></span></div></div>

  <section class="section offers">
    <div class="section-heading"><div><div class="eyebrow">One destination. Two expressions of excellence.</div><h2>Two ways in.<br><span class="script">One standard.</span></h2></div><p>A boutique salon and a professional beauty academy, under one roof in Santoshpur. Both built on personalised attention, technical expertise and understated luxury.</p></div>
    <div class="offer-grid offer-grid--two">
      <a href="#/services" class="offer-card"><div class="card-top"><div class="num">01 / For yourself</div></div><div class="card-bottom"><div><h3>Boutique Salon</h3><p>A curated range of premium skin, hair and makeup services, by appointment. Bridal and occasion artistry, precision haircuts, professional colour, advanced Dermalogica skin treatments, and Davines and Schwarzkopf haircare and treatments.</p><ul class="card-points"><li>Bridal makeup</li><li>Bridal hairstyling</li><li>Occasion &amp; party makeup</li><li>Haircuts · colour · styling</li><li>Dermalogica skin</li><li>Davines &amp; Schwarzkopf</li><li>Keratin · Botox · Nanoplastia</li></ul><span class="pathway-label">Explore the boutique salon ${ic('arrow')}</span></div><span class="circle-arrow">${ic('arrow')}</span></div></a>
      <a href="#/academy" class="offer-card"><div class="card-top"><div class="num">02 / For your career</div></div><div class="card-bottom"><div><h3>The Academy</h3><p>A dedicated professional training institute for aspiring and practising beauty professionals — structured courses, demonstration-led classes, supervised hands-on practice and one-to-one mentoring with a working educator.</p><ul class="card-points"><li>Professional makeup</li><li>Hairdressing</li><li>Hair colour theory</li><li>Hairstyling</li><li>Beauty therapy</li><li>Beginner to masterclass</li><li>1-to-1 mentoring</li></ul><span class="pathway-label">Discover the Academy ${ic('arrow')}</span></div><span class="circle-arrow">${ic('arrow')}</span></div></a>
    </div>
    <p class="section-note">Bridal artistry sits at the heart of the boutique salon. The Academy trains the professionals who work behind the chair. <a class="text-link" href="#/contact" data-category-link="Bridal">Plan your bridal look <span>${ic('arrow')}</span></a></p>
  </section>

  <section class="section"><div class="story-band"><div class="story-photo">${image('./public/images/academy-class-square.jpg','A makeup educator demonstrating a technique on a model')}<div class="caption">The founder</div></div><div class="story-text"><div class="eyebrow">The founder</div><h2>Technical excellence.<br><span class="script">Individual attention.</span></h2><p>Kakoly Sengupta is an experienced beauty professional, makeup artist and educator with over 30 years of experience in the beauty and wellness industry. Her professional credentials include a City &amp; Guilds Level 4 Licentiateship in Hairdressing (City &amp; Guilds, London), Teacher’s Training from Vidal Sassoon, London; and specialist expertise in professional makeup artistry from London Makeup Academy, London.</p><p>As a Dermalogica Specialist, she brings a science-based approach to professional skincare, combining technical knowledge with personalised treatment protocols. Her experience spans luxury salon services, bridal and editorial-inspired makeup artistry, professional hair colour techniques, beauty education and individual mentoring.</p><div class="pullquote">“True luxury lies in expertise, individuality and attention to detail.”</div><a class="text-link" href="#/academy">Read her credentials <span>${ic('arrow')}</span></a></div></div></section>

  <section class="academy-feature academy-feature--photo"><div class="feature-image">${image('./public/images/academy-touchup.jpg','A makeup artist working on a client by hand at a dressing table, lit from behind')}<span class="image-credit">The Academy</span></div><div class="feature-copy"><div class="eyebrow">Glitz &amp; Glamour Academy</div><h2>Not just <i>how.</i><br>Also <i>why.</i></h2><p>The Academy is a dedicated training institute — not a service on a salon menu. Aspiring and practising professionals learn through structured education, live demonstration, supervised hands-on practice and personalised mentoring, from beginner foundation courses to professional upskilling, masterclasses and one-to-one mentoring.</p><a class="button" href="#/academy">Explore the Academy <span class="arrow">${ic('arrow')}</span></a></div></section>

  <div class="stat-strip"><div><strong>30+</strong><span>years of experience</span></div><div><strong>Level 4</strong><span>City &amp; Guilds · London</span></div><div><strong>Vidal Sassoon</strong><span>Teacher’s Training · London</span></div><div><strong>103</strong><span>Google reviews · 4.9 ★</span></div></div>

  <section class="section"><div class="section-heading"><div><div class="eyebrow">Appointments &amp; admissions</div><h2>Tell us what you<br><span class="script">have in mind.</span></h2></div><a class="button" href="#/contact">Start an enquiry <span class="arrow">${ic('arrow')}</span></a></div><p class="prose">Salon visits and academy consultations are preferably arranged by prior appointment. All enquiries are handled personally by our team, who will confirm availability, fees and the next step with you directly.</p></section>
</div>`}

/* ==========================================================================
   ACADEMY  (Q2, Q10, Q11, Q12, Q9)
   ========================================================================== */
const courseAreas = [
  ['01','Professional makeup','Makeup artistry taught the way it is practised: skin preparation, base and undertone matching, correction, definition and finish — for bridal, occasion and everyday clients.'],
  ['02','Hairdressing','Professional hairdressing from the ground up — tools and sectioning, cutting fundamentals, blow-drying and finishing — through to salon-ready practice on live models.'],
  ['03','Hair colour theory','The theory behind professional colour: the colour wheel, levels and tones, formulation, grey coverage and the reasoning behind a result — then supervised practice in applying it.'],
  ['04','Hairstyling','Occasion, bridal and editorial styling — back-combing, padding, pinning, texture and long-wear structure, with the finishing detail that reads well in photographs.'],
  ['05','Beauty therapy','Professional beauty therapy practice: consultation, skin and hair care, hygiene and product knowledge, and the standards expected of a working therapist in a professional salon.']
];

/* Four ways to train. Q8 (course names) is still unanswered, so these are
   levels and formats rather than named courses with durations and fees. */
const courseFormats = [
  ['Foundation courses','Starting from zero','For beginners and career changers. Structured modules that build the fundamentals — consultation, hygiene, tools, product knowledge and basic technique — before any supervised practice.'],
  ['Professional upskilling','Already working','For practising professionals adding a discipline, refining speed and finish, or bringing their technique up to current salon standards.'],
  ['Masterclasses','One subject, in depth','Short, focused sessions on a single subject — bridal finish, colour correction, advanced styling — demonstrated by a working educator, with time to ask questions.'],
  ['One-to-one mentoring','Entirely yours','Individual mentoring shaped around what you want to learn, at your own pace, with direct feedback on your own work rather than a fixed syllabus.']
];

function academy(){return `<div class="page-wrap">
  <section class="page-hero"><div class="breadcrumb">Home <span>/</span> Academy</div><div class="eyebrow">Glitz &amp; Glamour Academy · Professional training</div><h1>Learn the Art.<br><em>Master the Technique.</em><br>Build Your Career.</h1><p>A professional beauty training institute in Santoshpur, Kolkata — structured courses, demonstration-led classes and supervised hands-on practice for aspiring and practising beauty professionals, led by Kakoly Sengupta.</p>
    <div class="hero-actions"><a class="button" href="#/contact" data-category-link="Academy">Enquire about a course <span class="arrow">${ic('arrow')}</span></a><a class="text-link" href="#/services">See the boutique salon <span>${ic('arrow')}</span></a></div>
  </section>

  <section class="section"><div class="academy-intro"><div><div class="eyebrow">The Academy</div><h2>A training institute,<br>built on <span class="script">practice.</span></h2><p>Glitz &amp; Glamour Academy is a dedicated professional training institute — separate in purpose from the boutique salon, and held to the same standard. Aspiring and practising beauty professionals are taught through structured education, live practical demonstration, supervised hands-on practice and personalised mentoring.</p><p>Founder and lead educator Kakoly Sengupta holds a City &amp; Guilds Level 4 Licentiateship in Hairdressing (City &amp; Guilds, London), Teacher’s Training from Vidal Sassoon, London, and specialist training in professional makeup artistry from London Makeup Academy, London. Her teaching combines scientific understanding, technical precision, practical demonstration and individual mentoring.</p><div class="credential-stack"><div class="credential"><b>30+</b><span>years of professional experience</span></div><div class="credential"><b>Level 4</b><span>City &amp; Guilds Licentiateship · London</span></div><div class="credential"><b>Vidal Sassoon</b><span>Teacher’s Training · London</span></div><div class="credential"><b>Dermalogica</b><span>Specialist · science-based skincare</span></div></div></div><div class="academy-image">${image('./public/images/academy-class.jpg','A makeup educator demonstrating a technique on a model')}<div class="image-stamp">Learning, by doing</div></div></div></section>

  <div class="stat-strip"><div><strong>Demonstration</strong><span>led, then practised</span></div><div><strong>Hands-on</strong><span>supervised practice</span></div><div><strong>1-to-1</strong><span>mentoring available</span></div><div><strong>Online</strong><span>selected programmes</span></div></div>

  <section class="section course-section"><div class="section-heading"><div><div class="eyebrow">What you learn</div><h2>Five disciplines.<br><span class="script">One standard.</span></h2></div><p>Training across the core disciplines of professional beauty. Current batches, eligibility, duration, fees and certification are confirmed directly with the Academy.</p></div><div class="course-grid">${courseAreas.map(c=>`<article class="course-card"><span class="course-num">${c[0]} / DISCIPLINE</span><h3>${c[1]}</h3><p>${c[2]}</p><button type="button" data-enquire="${c[1]}">Ask about this course ${ic('arrow')}</button></article>`).join('')}</div></section>

  <section class="section section--tight"><div class="section-heading"><div><div class="eyebrow">How you can train</div><h2>Four ways in.<br><span class="script">Your level, your pace.</span></h2></div><p>Whether you are starting from zero, adding a discipline or refining a technique you already use, there is a format that fits. Tell us where you are and we will point you to it.</p></div>
    <div class="format-grid">${courseFormats.map(f=>`<article class="format-card"><div class="format-top"><span class="format-level">${f[1]}</span></div><h3>${f[0]}</h3><p>${f[2]}</p><button type="button" data-enquire="${f[0]}">Ask about ${f[0].toLowerCase()} ${ic('arrow')}</button></article>`).join('')}</div>
    <p class="course-footnote">Beginner foundation courses, professional upskilling, masterclasses and one-to-one mentoring can be taken in person at Santoshpur; selected educational programmes are also offered online. Batch dates and fees are confirmed personally by the Academy.</p>
  </section>

  <section class="section section--tight"><div class="two-col">
    <div class="col-card"><div class="eyebrow">Who it is for</div><h3>Aspiring and practising professionals</h3><p>The Academy welcomes students from Kolkata, across West Bengal and from other parts of India — those beginning a career in beauty, and those already working who want to formalise or extend what they can do.</p></div>
    <div class="col-card"><div class="eyebrow">How we teach</div><h3>Understanding, not imitation</h3><p>The aim is to help students understand not just how a technique works, but why it works — so they leave as independent, knowledgeable and confident professionals rather than people who simply reproduce a look they were shown.</p></div>
    <div class="col-card"><div class="eyebrow">Where it can lead</div><h3>Professional practice</h3><p>Students go on to salon work, bridal and freelance artistry, and to teaching and mentoring themselves. Guidance on course suitability and professional development is part of every admission conversation.</p></div>
  </div></section>

  <section class="section section--tight"><div class="section-heading"><div><div class="eyebrow">Admissions</div><h2>How a course<br><span class="script">becomes a place.</span></h2></div><p>All admissions are handled personally by the Academy. There is no automated enrolment.</p></div>
    <div class="steps">${[
      ['01','Enquire','Reach us by WhatsApp, telephone or the enquiry form. Tell us which discipline interests you, your current level and what you would like to know.'],
      ['02','Talk it through','Course information, syllabus, duration, fees, training format and upcoming batch availability are explained personally. Students may speak directly with the academy educator for guidance on course suitability and professional development.'],
      ['03','Confirm your place','Admission is confirmed once you select the course, complete the required registration or payment formalities, and receive confirmation from the Academy.']
    ].map(s=>`<div class="step"><span class="step-num">${s[0]}</span><h3>${s[1]}</h3><p>${s[2]}</p></div>`).join('')}</div>
  </section>

  <section class="section section--tight"><div class="course-enquire"><div><h3>Not sure which discipline fits?</h3><p>Tell us what you want to learn and where you are starting from. We’ll help you find the right level and format.</p></div><a class="button" href="#/contact" data-category-link="Academy">Enquire about a course <span class="arrow">${ic('arrow')}</span></a></div></section>
</div>`}

/* ==========================================================================
   SERVICES  (Q3, Q2, Q9, Q12, Q13)
   ========================================================================== */
/* Services are grouped so the range reads at a glance: bridal and occasion
   artistry, cut and colour, then the professional skin and hair houses.
   `enq` is the exact wording used in the enquiry form's dropdown, so a
   "Enquire about this service" click pre-selects the right option. */
const serviceGroups = [
  {
    eyebrow:'Group 01 — Bridal &amp; occasion artistry',
    name:'Bridal &amp; occasion',
    note:'Makeup and hair designed around you — your skin, your features, your attire, your ceremony and how you want to look, rather than a fixed signature style.',
    items:[
      {num:'01',title:'Bridal makeup',cat:'Bridal',enq:'Bridal makeup',
       desc:'Makeup for your wedding day, designed around your skin, your features, your attire, your ceremony and your own preferences.',
       detail:'Your look is built in consultation: skin preparation, base and texture, eye definition and lip, balanced against the outfit, the jewellery, the lighting and the timings of the day. A trial and consultation may be recommended before the booking is confirmed. Bridal and special-event work outside the salon is considered on prior consultation, subject to availability, location and applicable travel charges.'},
      {num:'02',title:'Bridal hairstyling',cat:'Bridal',enq:'Bridal hairstyling',
       desc:'Bridal hair planned with your makeup — beginning with a consultation and hair preparation, styled to suit your attire, and built to last.',
       detail:'The consultation covers your hair type and condition, any preparation your hair needs beforehand, and how the style will sit with your dupatta, veil, jewellery and venue. Long-wear styling is planned for a full day of ceremonies and photography. Timing, trials and any preparation appointments are confirmed with you directly.'},
      {num:'03',title:'Occasion &amp; party makeup',cat:'Bridal',enq:'Occasion / party makeup',
       desc:'Makeup for engagements, receptions, festive occasions, sangeets and every other day worth dressing up for.',
       detail:'Tell us the occasion, date, start time and whether you would like makeup, hairstyling or both, and we will confirm availability and timings. The look is designed to suit the event, your outfit and the light you will be photographed in.'}
    ]
  },
  {
    eyebrow:'Group 02 — Haircuts, colour &amp; styling',
    name:'Haircuts, colour &amp; styling',
    note:'Precision cutting, professional colour and finishing — every appointment begins with a short consultation on your hair and how you actually wear it.',
    items:[
      {num:'04',title:'Haircuts, hair colour &amp; hairstyling',cat:'Salon',enq:'Haircut &amp; styling',
       desc:'Precision haircuts shaped to your hair type, face shape and routine — together with professional hair colour and hairstyling for everyday and occasion.',
       detail:'Cutting is the foundation: a haircut is planned around your hair’s texture, density and growth pattern, and around how much time you want to spend styling it, so it works on an ordinary morning and not only on the day you leave the salon. Colour and styling can be booked with it or on their own, and your stylist will advise on what is realistic in one sitting and what is better planned across two.'},
      {num:'05',title:'Keratin / Botox / Nanoplastia',cat:'Salon',enq:'Keratin / Botox / Nanoplastia',
       desc:'Professional smoothing and hair-reconstruction services — keratin, hair botox and nanoplastia — recommended only after a consultation on your hair and scalp.',
       detail:'Suitability, the service that fits your hair, and the aftercare it involves are discussed and confirmed before anything is booked, so you know exactly what the service means and how to maintain it. Every head of hair responds differently and results vary with hair type, condition and aftercare; we will tell you honestly what to expect rather than promise a particular outcome.'}
    ]
  },
  {
    eyebrow:'Group 03 — Professional skin &amp; hair treatments',
    name:'Professional skin &amp; hair treatments',
    note:'Consultation-led treatments from the professional houses we work with — Dermalogica for skin, Davines and Schwarzkopf for hair.',
    items:[
      {num:'06',title:'Dermalogica professional skin treatments',cat:'Salon',enq:'Dermalogica skin treatment',
       desc:'Professional Dermalogica skin treatments — a facial programme built around a skin consultation, your skin on the day, and what you would like to work on.',
       detail:'Kakoly is a Dermalogica Specialist, and treatment begins with a consultation rather than a fixed menu: we look at your skin, talk through your routine and your concerns, then recommend a professional treatment and a home-care plan suited to you. Where a course of treatments is likely to help more than a single visit, we will say so. These are cosmetic skin treatments, not medical care — we do not diagnose or treat skin conditions, and will suggest a dermatologist where that is the right next step.'},
      {num:'07',title:'Davines haircare, hair colour &amp; treatments',cat:'Salon',enq:'Davines haircare &amp; colour',
       desc:'Davines professional haircare, colour and treatments — root colour, global colour, highlights and balayage, with the hair and scalp services that support them.',
       detail:'Colour work is planned after a consultation: we assess your hair and scalp, discuss the root touch-up, global colour, highlights or balayage you have in mind, and agree how often it will need maintaining. Davines professional hair and scalp services are also available on their own, including care for a dry, sensitised or oily scalp, and we will recommend aftercare to protect the colour you have chosen.'},
      {num:'08',title:'Schwarzkopf colour &amp; treatment',cat:'Salon',enq:'Schwarzkopf colour &amp; treatment',
       desc:'Schwarzkopf professional colour and treatment services — chosen where the Schwarzkopf system suits your hair, your colour goal and the upkeep you want.',
       detail:'We work with more than one professional colour house, so the service can be matched to your hair rather than the other way around. Your stylist will advise on which system, developer and aftercare suit the result you are after, and will explain the upkeep before you commit to it.'}
    ]
  }
];

function serviceRow(s){return `<div class="service-row-wrap"><div class="service-row"><span class="row-no">${s.num}</span><h3>${s.title}</h3><p>${s.desc}</p><button type="button" class="circle-arrow service-toggle" aria-label="More about ${s.title}" data-service="${s.num}" aria-expanded="false" aria-controls="extra-${s.num}">${ic('arrow','icon-open')}${ic('minus','icon-close')}</button></div><div class="service-extra" id="extra-${s.num}" data-extra="${s.num}">${s.detail} <button type="button" class="text-link service-extra-link" data-enquire="${s.enq||s.title}" data-category="${s.cat}">Enquire about this service ${ic('arrow')}</button></div></div>`}

function servicesPage(){return `<div class="page-wrap">
  <section class="page-hero"><div class="breadcrumb">Home <span>/</span> Services</div><div class="eyebrow">Boutique Salon</div><h1>Luxury services,<br><em>by appointment.</em></h1><p>A thoughtfully curated range of premium skin, hair and makeup services. Every service is designed around individual beauty needs, with a commitment to quality, precision and an exceptional client experience.</p></section>

  <section class="section"><div class="service-intro"><div><div class="eyebrow">Services at Glitz &amp; Glamour</div><h2>Made for the moment.<br><span class="script">Made for you.</span></h2></div><div class="service-note">“We focus on enhancing individual beauty rather than following trends blindly. Attention to detail and maintaining the integrity of skin and hair are central to our work.”</div></div>
  <div class="service-list">${serviceGroups.map(g=>`<div class="service-group"><div class="service-group-head"><div class="eyebrow">${g.eyebrow}</div><h3>${g.name}</h3><p>${g.note}</p></div>${g.items.map(serviceRow).join('')}</div>`).join('')}</div>
  <div class="service-bottom"><div><h3>Not sure which service fits?</h3><p>Describe what you have in mind and we will tell you what we would recommend, how long it takes and what it costs. Every booking begins with a conversation, not a price list.</p></div><a href="#/contact" class="button" data-category-link="Salon">Enquire about a service <span class="arrow">${ic('arrow')}</span></a></div></section>

  <section class="section section--tight"><div class="course-enquire"><div><h3>Thinking about the Academy?</h3><p>A dedicated professional training institute: professional makeup, hairdressing, hair colour theory, hairstyling and beauty therapy — from beginner courses to masterclasses.</p></div><a class="button" href="#/academy">Explore the Academy <span class="arrow">${ic('arrow')}</span></a></div></section>
</div>`}

/* ==========================================================================
   TESTIMONIALS
   ========================================================================== */
const reviewGroups = ['All','Bridal &amp; occasion','Salon &amp; hair','Academy &amp; students','Long-standing clients'];

const reviewTags = [
  ['15','makeup artist'],['10','hair styling'],['6','bridal makeup'],['4','skin care'],['4','hair colour'],
  ['4','attention to detail'],['4','polite staff'],['3','dedicated staff'],['2','career guidance'],['2','party makeup']
];

const reviews = [
  {
    name:'Amanda Bent', when:'6 months ago', group:'Bridal &amp; occasion', featured:true,
    text:'Kakoli Aunty and her team are absolutely phenomenal!! They took excellent care of me during all my bridal events and made me feel happy and relaxed. Kakoli Aunty in particular took time to get to know me and my style.'
  },
  {
    name:'Sweety Roychowdhury', when:'6 months ago', group:'Salon &amp; hair',
    text:'I had an absolutely wonderful experience! The staff is well-mannered, and the salon is clean and well-organized. Kakoli Ma’am was very knowledgeable and listened exactly to what I wanted. I left feeling like I was in heaven! Highly recommended!'
  },
  {
    name:'sohagk kanungo', when:'7 months ago', group:'Salon &amp; hair',
    text:'I have seen an amazing change in my skin and hair after I have started going to Glitz and Glamour Academy and boutique. Kakoli is a magician who knows which wand to wave around you to improve or maintain your beauty regime.'
  },
  {
    name:'ANAMIKA BASU', when:'4 months ago', group:'Salon &amp; hair',
    text:'My experience at Glitz & Glamour Beauty Parlour was nothing short of wonderful. From the moment I walked in, I was welcomed with warmth, professionalism, and genuine care.',
    quoteNote:'Quoted as written — the reviewer’s own name for the salon is unchanged.'
  },
  {
    name:'Debarati Ghosh', when:'8 months ago', group:'Salon &amp; hair',
    text:'The Glitz and Glamour Academy and Boutique salon delivers exceptional service with skilled stylists, a clean and welcoming environment, and consistently high-quality results. Their attention to detail and professionalism…'
  },
  {
    name:'Uttamzzz', when:'9 months ago', group:'Academy &amp; students',
    text:'Gltz n glamour academy n Butique salon is truly amazing. I completed my training in Hair Dressing, Beauty Therapy, and Fashion Makeup from this academy, and I have been a pass-out since 2008.',
    quoteNote:'Quoted as written — the reviewer’s spelling is unchanged.'
  },
  {
    name:'Swagata Chatterjee', when:'7 months ago', group:'Academy &amp; students',
    text:'A big thanks to Glitz and Glamour Academy and Boutique Saloon for their amazing services and encouragement. The team is extremely skilled, friendly, and always ready to guide and support.',
    quoteNote:'Quoted as written — “Saloon” is the reviewer’s spelling.'
  },
  {
    name:'Rituparna Chandra', when:'6 months ago', group:'Long-standing clients',
    text:'It’s a relationship of trust and gratitude from 2003 to 2026. More than a decade. Kakoli Sengupta’s Glitz and glamour Academy and Boutique salon wins my heart every single day I visit there.'
  }
];

function reviewCard(r){
  const initials = r.name.replace(/[^A-Za-z ]/g,'').trim().split(/\s+/).map(w=>w[0]).join('').slice(0,2).toUpperCase();
  return `<article class="review-card${r.featured?' featured':''}" data-group="${r.group}">
    <div class="review-top"><span class="stars" role="img" aria-label="Rated 5 out of 5 stars on Google">${stars(5)}</span><span class="review-topic">${r.group}</span></div>
    <blockquote>${r.text}</blockquote>
    ${r.quoteNote?`<p class="quote-as-written">${r.quoteNote}</p>`:''}
    <footer class="review-who"><span class="review-avatar" aria-hidden="true">${initials}</span><div><b>${r.name}</b><small>Google review · ${r.when}</small></div></footer>
  </article>`;
}

function testimonials(){return `<div class="page-wrap">
  <section class="page-hero">
    <div class="breadcrumb">Home <span>/</span> Testimonials</div>
    <div class="eyebrow">In their words · Google reviews</div>
    <h1>What people say<br><em>when they leave the chair.</em></h1>
    <p>Glitz &amp; Glamour holds a 4.9-star rating from 103 Google reviews — written by brides, salon regulars and students who now work in the industry. Everything below is quoted as written, with names and dates exactly as they appear on Google.</p>
    <div class="rating-badge"><span class="stars" role="img" aria-label="4.9 out of 5 stars on Google">${stars(5)}</span><b>4.9</b><small>103 Google reviews</small></div>
    <div class="hero-actions"><a class="button" href="#/contact">Start an enquiry <span class="arrow">${ic('arrow')}</span></a><a class="text-link" href="${googlePlace}" target="_blank" rel="noreferrer">Read all 103 reviews on Google <span>${ic('arrow')}</span></a></div>
  </section>
  <div class="stat-strip"><div><strong>4.9</strong><span>average Google rating</span></div><div><strong>103</strong><span>reviews and counting</span></div><div><strong>Two expressions</strong><span>salon · academy</span></div><div><strong>30+</strong><span>years of experience</span></div></div>
  <section class="section"><div class="story-band">
    <div class="story-photo">${image('./public/images/bridal-editorial.jpg','Bridal makeup and hairstyling','',{w:928,h:1152})}<div class="caption">Bridal artistry</div></div>
    <div class="story-text">
      <div class="eyebrow">Where the reviews begin</div>
      <h2>The bridal chair.<br><span class="script">The calm morning.</span></h2>
      <p>Bridal work is the heart of the boutique salon — makeup and hair planned around the ceremony, the outfit, the photographs and the person wearing it all. Brides are usually the first to write, and they tend to remember two things: the look holding up through a long day, and how calm it felt getting there.</p>
      <div class="founder-reply">
        <div class="reply-label"><span class="tag"><i></i>Founder’s reply</span><span class="reply-note">Written by the salon — not a customer review</span></div>
        <blockquote>“It was truly an honour to be a part of your special journey and to style you for such important moments of your wedding.”</blockquote>
        <cite>Kakoly Sengupta, founder of Glitz &amp; Glamour, replying to a bride’s Google review</cite>
      </div>
      <a class="text-link" href="#/contact" data-category-link="Bridal">Plan your bridal look <span>${ic('arrow')}</span></a>
    </div>
  </div></section>
  <section class="section">
    <div class="section-heading"><div><div class="eyebrow">The reviews</div><h2>Read the ones<br><span class="script">we didn’t have to write.</span></h2></div><p>Filter by the kind of work you’re here for. Every quote is an excerpt from a public Google review — nothing added, nothing polished.</p></div>
    <div class="tools-row">
      <div class="filter-row" role="group" aria-label="Filter reviews by topic">${reviewGroups.map((g,i)=>`<button type="button" class="filter-btn ${i===0?'active':''}" data-review-filter="${g}">${g}</button>`).join('')}</div>
      <div class="tools-note">Showing 8 of 103 reviews. The rest — including the ones written in Bengali — are on Google.</div>
    </div>
    <div class="review-wall">${reviews.map(reviewCard).join('')}</div>
    <div class="note-box"><b>How these are published.</b> Quotes are reproduced from public Google reviews of Glitz &amp; Glamour Academy &amp; Boutique Salon, trimmed with an ellipsis where a review continues, and grouped by topic for reading. Names, star ratings and dates are unchanged, and every quote keeps the reviewer’s own spelling — including where a reviewer writes the salon or Academy name differently. The one quote on this page that is <b>not</b> a customer review is labelled as a founder’s reply. <a class="text-link" href="${googlePlace}" target="_blank" rel="noreferrer">Read the full reviews on Google <span>${ic('arrow')}</span></a></div>
  </section>
  <section class="section themes-section">
    <div class="section-heading"><div><div class="eyebrow">What gets mentioned most</div><h2>The words that<br>keep <span class="script">coming up.</span></h2></div><p>Google groups our reviews into topics. Each number is how many reviews mention it.</p></div>
    <div class="theme-cloud">${reviewTags.map(([n,t])=>`<span class="theme-chip"><b>${n}</b><span>${t}</span></span>`).join('')}</div>
  </section>
  <section class="academy-feature">
    <div class="feature-image">${image('./public/images/academy-class.jpg','An educator demonstrating a technique on a model at a masterclass')}<span class="image-credit">The Academy</span></div>
    <div class="feature-copy">
      <div class="eyebrow">From the Academy</div>
      <h2>Some students write<br>back <i>years later.</i></h2>
      <blockquote class="academy-quote">“At Guild and Glamour Academy, I learned makeup and hairdressing, but beyond the skills, I gained something even more precious. Whenever we found ourselves stuck in life’s challenges, Kakoli Di was always there with her wise advice…”</blockquote>
      <cite>Kaberi D. · Google review · a year ago</cite>
      <p class="quote-as-written quote-as-written--light">Quoted as written — “Guild and Glamour Academy” is the reviewer’s own spelling of the name, left unchanged.</p>
      <p>Glitz &amp; Glamour Academy is a dedicated professional training institute — structured courses in professional makeup, hairdressing, hair colour theory, hairstyling and beauty therapy, taught through live demonstration, supervised hands-on practice and personalised mentoring, from beginner level to masterclasses.</p>
      <a class="button" href="#/academy">Explore the Academy <span class="arrow">${ic('arrow')}</span></a>
    </div>
  </section>
  <section class="section">
    <div class="section-heading"><div><div class="eyebrow">Your turn</div><h2>Come for the work.<br><span class="script">Leave your own review.</span></h2></div><a class="button" href="#/contact">Start an enquiry <span class="arrow">${ic('arrow')}</span></a></div>
    <p class="prose">Bridal, salon or Academy — tell us what you have in mind and we’ll point you to the right conversation. After your appointment, you’re welcome to add your voice on Google.</p>
    <div class="cta-links"><a class="text-link" href="${googlePlace}" target="_blank" rel="noreferrer">Read all 103 Google reviews <span>${ic('arrow')}</span></a><a class="text-link" href="${googlePlace}" target="_blank" rel="noreferrer">Write your review on Google <span>${ic('arrow')}</span></a></div>
    <p class="fine-print">Review quotes are excerpts from public Google reviews of Glitz &amp; Glamour Academy and Boutique Salon, published with the reviewer names shown on Google and with each reviewer’s spelling preserved exactly as written.</p>
  </section>
</div>`}

/* ==========================================================================
   CONTACT  (Q9, Q12, Q13)
   ========================================================================== */
const categoryOptions = {
  Bridal:['Bridal makeup','Bridal hairstyling','Bridal makeup & hairstyling','Occasion / party makeup','Occasion hairstyling','Other bridal enquiry'],
  Salon:['Haircut & styling','Hair colour','Occasion hairstyling','Dermalogica skin treatment','Davines haircare & colour','Schwarzkopf colour & treatment','Keratin / Botox / Nanoplastia','Other salon service'],
  Academy:['Professional makeup','Hairdressing','Hair colour theory','Hairstyling','Beauty therapy','Foundation courses','Professional upskilling','Masterclasses','One-to-one mentoring','Other course enquiry']
};

function contact(){return `<div class="page-wrap"><div class="contact-hero"><section class="page-hero"><div class="breadcrumb breadcrumb--light">Home <span>/</span> Contact &amp; Enquiries</div><div class="eyebrow">One destination. Two expressions of excellence.</div><h1>One enquiry.<br><em>Handled personally.</em></h1><p>Tell us whether you are booking the boutique salon or enquiring about a course. All enquiries are handled personally by our team.</p></section></div>
  <section class="section"><div class="booking-layout"><aside class="booking-aside"><div class="eyebrow">Come say hello</div><h2>Good things start<br>with a <span class="script">conversation.</span></h2><p>Share a few details and we can follow up about availability, fees and the next step. Submitting the form opens a pre-filled WhatsApp message — it is not stored on this website.</p><div class="contact-card">
    <div class="contact-line"><b>${ic('chat')}</b><div><a href="https://wa.me/${phoneDigits}" target="_blank" rel="noreferrer">${phone}</a><small>WhatsApp</small></div></div>
    <div class="contact-line"><b>${ic('phone')}</b><div><a href="tel:+${phone2Digits}">${landline}</a><small>Call the salon</small></div></div>
    <div class="contact-line"><b>${ic('mail')}</b><div><a href="mailto:${email}">${email}</a><small>Email</small></div></div>
    <div class="contact-line"><b>${ic('insta')}</b><div><a href="${insta}" target="_blank" rel="noreferrer">@ikakolysengupta ${ic('arrow')}</a><small>Instagram</small></div></div>
  </div></aside>
    <form class="booking-form" id="booking-form"><h2>What can we help with?</h2><p>Choose salon services, bridal makeup or the Academy, then tell us a little more. All fields marked * are required.</p><div class="booking-choices" role="group" aria-label="Enquiry type"><button type="button" class="choice selected" data-choice="Bridal"><span>01 / Occasion</span><b>Bridal</b></button><button type="button" class="choice" data-choice="Salon"><span>02 / For you</span><b>Salon</b></button><button type="button" class="choice" data-choice="Academy"><span>03 / Learn</span><b>Academy</b></button></div><input type="hidden" name="category" value="Bridal"><div class="form-grid"><div class="field"><label for="name">Your name *</label><input id="name" name="name" type="text" required autocomplete="name" placeholder="Name" /></div><div class="field"><label for="phone">Phone / WhatsApp *</label><input id="phone" name="phone" required autocomplete="tel" type="tel" placeholder="+91 ..." /></div><div class="field"><label for="interest">I'm interested in *</label><select id="interest" name="interest" required>${categoryOptions['Bridal'].map(x=>`<option>${x}</option>`).join('')}</select></div><div class="field"><label for="date" id="date-label">Event date *</label><input id="date" name="date" required type="date" /></div><div class="field hidden" id="location-field"><label for="location">Event location</label><input id="location" name="location" type="text" placeholder="Venue and area" /></div><div class="field full"><label for="message">A few details</label><textarea id="message" name="message" placeholder="Event date and location, the salon service you have in mind, or what you’d love to learn..."></textarea></div></div><div class="form-actions"><button class="button" type="submit">Continue on WhatsApp <span class="arrow">${ic('arrow')}</span></button><span class="form-hint">We will confirm availability and fees directly.<br>No payment is collected on this site.</span></div><div class="success-message" role="status">Your enquiry is ready. WhatsApp will open with your details — please press Send there to share it.</div></form></div>

    <div class="process-grid"><div class="process-col"><div class="eyebrow">Boutique Salon Services</div><h3>How an enquiry becomes an appointment</h3><ol><li>You contact us through WhatsApp, telephone, social media or a direct enquiry.</li><li>Our team responds, understands your requirements and provides information about suitable services, pricing and availability.</li><li>For specialised treatments, hair colour transformations and bridal makeup, a consultation may be recommended before confirming the service.</li><li>Appointments are confirmed after mutually agreeing the date, time and service requirements. Advance payments may be requested for selected services or bookings.</li></ol></div><div class="process-col"><div class="eyebrow">Academy Admissions</div><h3>How an enquiry becomes a place</h3><ol><li>Prospective students enquire through WhatsApp, telephone, social media or direct communication.</li><li>Course information, syllabus, duration, fees, training format and upcoming batch availability are explained personally.</li><li>Students may speak directly with the academy educator for guidance regarding course suitability and professional development.</li><li>Admission is confirmed once the student selects the course, completes the required registration or payment formalities and receives confirmation from the Academy.</li></ol></div></div>

    <div class="map-panel"><div><h3>Find us in Santoshpur.</h3><p>${address}<br>${landmark}</p><p class="map-note">All salon visits and academy consultations are preferably arranged by prior appointment.</p></div><a class="button light" target="_blank" rel="noreferrer" href="${mapsLink}">Get directions <span class="arrow">${ic('arrow')}</span></a></div>
  </section></div>`}

/* ==========================================================================
   RENDER
   ========================================================================== */
function render(){
  const page = route();
  const views={home,academy,services:servicesPage,testimonials,contact};
  app.innerHTML=views[page]();
  document.title=titles[page];
  const meta=document.querySelector('meta[name="description"]');
  if(meta)meta.setAttribute('content',descriptions[page]);
  document.querySelectorAll('.main-nav a').forEach(a=>a.classList.toggle('active',a.dataset.route===page));
  menu.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Open menu');
  if(page==='contact') setupContact();
  if(page==='testimonials') setupTestimonials();
  setupReveal();setupTilt();
  window.scrollTo({top:0,behavior:'smooth'});
}

function syncForm(cat){
  const form=document.querySelector('#booking-form'); if(!form)return;
  form.querySelector('[name="category"]').value=cat;
  const select=form.querySelector('#interest');
  select.innerHTML=categoryOptions[cat].map(x=>`<option>${x}</option>`).join('');
  const dateInput=form.querySelector('#date'), dateLabel=form.querySelector('#date-label');
  const locField=form.querySelector('#location-field'), locInput=form.querySelector('#location');
  if(cat==='Bridal'){
    dateLabel.textContent='Event date *'; dateInput.required=true;
    locField.classList.remove('hidden'); locInput.required=true;
  }else if(cat==='Academy'){
    dateLabel.textContent='Preferred batch / start date *'; dateInput.required=true;
    locField.classList.add('hidden'); locInput.required=false;
  }else{
    dateLabel.textContent='Preferred date'; dateInput.required=false;
    locField.classList.add('hidden'); locInput.required=false;
  }
}

function setupContact(){
  const form=document.querySelector('#booking-form'); if(!form)return;
  document.querySelectorAll('.choice').forEach(btn=>btn.classList.toggle('selected',btn.dataset.choice===currentCategory));
  syncForm(currentCategory);
  const select=form.querySelector('#interest');
  if(prefillValue){
    const matched=[...select.options].find(o=>o.text.toLowerCase().includes(prefillValue.toLowerCase()));
    if(matched)select.value=matched.value;
    else{const opt=document.createElement('option');opt.textContent=prefillValue;select.add(opt);select.value=prefillValue}
    form.querySelector('#message').value=`I'm interested in ${prefillValue}. `;
    prefillValue='';
  }
  const date=document.querySelector('#date'); if(date)date.min=new Date().toISOString().slice(0,10);
}

function setupTestimonials(){
  document.querySelectorAll('[data-review-filter]').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('[data-review-filter]').forEach(b=>b.classList.toggle('active',b===btn));
    const filter=btn.dataset.reviewFilter;
    document.querySelectorAll('.review-card').forEach(card=>card.classList.toggle('hidden',filter!=='All'&&card.dataset.group!==filter));
  }));
}
function setupReveal(){
  const items=document.querySelectorAll('.section-heading,.story-band,.academy-intro,.course-card,.format-card,.service-group,.service-row-wrap,.booking-form,.booking-aside,.map-panel,.step,.col-card,.process-col');
  if(!('IntersectionObserver' in window)){items.forEach(x=>x.classList.add('visible'));return;}
  const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.08});
  items.forEach((el,i)=>{el.classList.add('reveal');el.style.transitionDelay=(i%4)*55+'ms';obs.observe(el)});
}
function setupTilt(){
  const el=document.querySelector('[data-tilt]');
  if(!el||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  el.addEventListener('pointermove',e=>{
    if(e.pointerType==='touch')return;
    const r=el.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;
    const img=el.querySelector('img');img.style.transform=`perspective(950px) rotateY(${x*4}deg) rotateX(${-y*3}deg) scale(1.015)`;
  });
  el.addEventListener('pointerleave',()=>{const img=el.querySelector('img');img.style.transform=''});
}
function showToast(text){toast.textContent=text;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),2600)}

window.addEventListener('hashchange',render);
if(!location.hash)location.hash='/home';else render();
document.querySelector('#year').textContent=new Date().getFullYear();
menuToggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Close menu':'Open menu');});
/* Close the mobile menu on an outside tap, Escape, or a rotation to desktop. */
document.addEventListener('click',e=>{
  if(!menu.classList.contains('open'))return;
  if(e.target.closest('.main-nav')||e.target.closest('.menu-toggle'))return;
  menu.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Open menu');
});
document.addEventListener('keydown',e=>{
  if(e.key!=='Escape'||!menu.classList.contains('open'))return;
  menu.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Open menu');
  menuToggle.focus();
});
matchMedia('(min-width:721px)').addEventListener('change',e=>{
  if(!e.matches)return;
  menu.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Open menu');
});
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-window.innerHeight;document.querySelector('.scroll-progress span').style.width=(max?window.scrollY/max*100:0)+'%'});

document.addEventListener('click',e=>{
  const categoryLink=e.target.closest('[data-category-link]');
  if(categoryLink){e.preventDefault();goContact(categoryLink.dataset.categoryLink);return;}
  const enquire=e.target.closest('[data-enquire]');
  if(enquire){const category=enquire.dataset.category||'Academy';goContact(category,enquire.dataset.enquire);return;}
  const choice=e.target.closest('[data-choice]');
  if(choice){currentCategory=choice.dataset.choice;document.querySelectorAll('.choice').forEach(b=>b.classList.toggle('selected',b===choice));syncForm(currentCategory);return;}
  const toggle=e.target.closest('.service-toggle');
  if(toggle){
    const detail=document.querySelector(`[data-extra="${toggle.dataset.service}"]`);
    detail.classList.toggle('open');toggle.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded',String(detail.classList.contains('open')));
    return;
  }
});

document.addEventListener('submit',e=>{
  if(e.target.id!=='booking-form')return;
  e.preventDefault();
  const fd=new FormData(e.target);
  const data=Object.fromEntries(fd.entries());
  const dateLabel=data.category==='Academy'?'Preferred batch / start date':'Preferred date';
  const body=[
    `Hello Glitz & Glamour, I'd like to enquire about ${data.category}.`,
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Interested in: ${data.interest}`,
    data.date?`${dateLabel}: ${data.date}`:'',
    data.location?`Event location: ${data.location}`:'',
    data.message?`A few details: ${data.message}`:''
  ].filter(Boolean).join('\n');
  const url=`https://wa.me/${phoneDigits}?text=${encodeURIComponent(body)}`;
  /* A synthetic anchor click is the reliable way to hand a URL to another app
     on iOS Safari — window.open() returns null there when noreferrer is set,
     and the old null-check produced a false "did it open?" warning on iPhone. */
  const link=document.createElement('a');
  link.href=url;link.target='_blank';link.rel='noopener noreferrer';link.style.display='none';
  document.body.appendChild(link);link.click();link.remove();
  document.querySelector('.success-message').classList.add('show');
  showToast('Opening WhatsApp with your enquiry…');
});
