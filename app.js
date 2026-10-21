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
  academy: 'The Academy — Glitz & Glamour Academy & Boutique Salon',
  services: 'Boutique Salon Services — Glitz & Glamour Academy & Boutique Salon',
  testimonials: 'Google Reviews — Glitz & Glamour Academy & Boutique Salon',
  contact: 'Contact & Enquiries — Glitz & Glamour Academy & Boutique Salon'
};
const descriptions = {
  home: 'Glitz & Glamour Academy & Boutique Salon is a premium beauty and professional education destination in Kolkata — luxury services, expert training, by appointment.',
  academy: 'Professional beauty education in Kolkata: makeup artistry, hairdressing, hair colour theory and professional beauty techniques, taught by Kakoly Sengupta.',
  services: 'Bridal makeup, bridal hairstyling, occasion makeup, hairstyling and Dermalogica and Davines salon services in Santoshpur, Kolkata. By appointment.',
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
function image(src, alt, cls=''){ return `<img class="${cls}" src="${src}" alt="${alt}" loading="lazy">`; }

/* ==========================================================================
   HOME
   ========================================================================== */
function home(){return `
<div class="page-wrap">
  <section class="home-hero">
    <div class="hero-copy">
      <div class="eyebrow">Kolkata · By appointment</div>
      <h1><span>Luxury services.</span><span class="script">Expert training.</span></h1>
      <p>A premium beauty and professional education destination in Kolkata — bringing together the artistry of beauty, the science of skin and hair, and the excellence of professional training.</p>
      <div class="hero-actions"><a class="button" href="#/contact" data-category-link="Salon">Book a salon appointment <span class="arrow">↗</span></a><a class="text-link" href="#/academy">Explore the Academy <span>↗</span></a></div>
      <div class="hero-facts"><div class="fact"><strong>30+</strong><small>years in beauty</small></div><div class="fact"><strong>Level 4</strong><small>City &amp; Guilds · London</small></div><div class="fact"><strong>Dermalogica</strong><small>specialist</small></div></div>
    </div>
    <div class="hero-art" data-tilt>${image('./public/images/bridal-editorial.png','Bridal makeup and hair by Glitz & Glamour')}<div class="art-label">Bridal artistry</div><div class="art-index">01 — THE BRIDAL EDIT</div><div class="seal">True luxury<br>lies in<br><i>expertise</i></div></div>
  </section>
  <div class="hero-marquee"><div class="marquee-track"><span>Bridal artistry <i>✳</i> Dermalogica skincare <i>✳</i> Davines haircare <i>✳</i> Professional education <i>✳</i> Bridal artistry <i>✳</i> Dermalogica skincare <i>✳</i> Davines haircare <i>✳</i> Professional education <i>✳</i></span><span aria-hidden="true">Bridal artistry <i>✳</i> Dermalogica skincare <i>✳</i> Davines haircare <i>✳</i> Professional education <i>✳</i> Bridal artistry <i>✳</i> Dermalogica skincare <i>✳</i> Davines haircare <i>✳</i> Professional education <i>✳</i></span></div></div>

  <section class="section offers">
    <div class="section-heading"><div><div class="eyebrow">One destination. Two expressions of excellence.</div><h2>Two ways in.<br><span class="script">One standard.</span></h2></div><p>A boutique salon and a professional academy, under one roof in Santoshpur. Both built on personalised attention, technical expertise and understated luxury.</p></div>
    <div class="offer-grid offer-grid--two">
      <a href="#/services" class="offer-card"><div class="card-top"><div class="num">01 / For yourself</div></div><div class="card-bottom"><div><h3>Boutique Salon</h3><p>A thoughtfully curated range of premium skin, hair and makeup services — advanced Dermalogica skincare treatments, Davines professional haircare and colour, customised hair transformations and sophisticated makeup artistry.</p><span class="text-link" style="color:inherit">Explore salon services <span>↗</span></span></div><span class="circle-arrow">↗</span></div></a>
      <a href="#/academy" class="offer-card"><div class="card-top"><div class="num">02 / For your next chapter</div></div><div class="card-bottom"><div><h3>The Academy</h3><p>Structured education, practical demonstrations, personalised mentoring and industry-focused training in makeup artistry, hairdressing, hair colour theory and professional beauty techniques.</p><span class="text-link" style="color:inherit">Explore the Academy <span>↗</span></span></div><span class="circle-arrow">↗</span></div></a>
    </div>
    <p class="section-note">Bridal makeup and bridal hairstyling sit at the heart of the boutique salon. <a class="text-link" href="#/contact" data-category-link="Bridal">Plan your bridal look <span>↗</span></a></p>
  </section>

  <section class="section"><div class="story-band"><div class="story-photo">${image('./public/images/academy-class-square.jpg','A makeup educator demonstrating a technique on a model')}<div class="caption">The founder</div></div><div class="story-text"><div class="eyebrow">The founder</div><h2>Technical excellence.<br><span class="script">Individual attention.</span></h2><p>Kakoly Sengupta is an experienced beauty professional, makeup artist and educator with over 30 years of experience in the beauty and wellness industry. Her professional credentials include a City &amp; Guilds Level 4 Licentiateship in Hairdressing (City &amp; Guilds, London), Teacher’s Training from Vidal Sassoon, London; and specialist expertise in professional makeup artistry from London Makeup Academy, London.</p><p>As a Dermalogica Specialist, she brings a science-based approach to professional skincare, combining technical knowledge with personalised treatment protocols. Her experience spans luxury salon services, bridal and editorial-inspired makeup artistry, professional hair colour techniques, beauty education and individual mentoring.</p><div class="pullquote">“True luxury lies in expertise, individuality and attention to detail.”</div><a class="text-link" href="#/academy">Read her credentials <span>↗</span></a></div></div></section>

  <section class="academy-feature academy-feature--photo"><div class="feature-image">${image('./public/images/academy-touchup.jpg','A makeup artist working on a client by hand at a dressing table, lit from behind')}<span class="image-credit">The Academy</span></div><div class="feature-copy"><div class="eyebrow">Glitz &amp; Glamour Academy</div><h2>Not just <i>how.</i><br>Also <i>why.</i></h2><p>Our academy is dedicated to nurturing aspiring and practising beauty professionals through structured education, practical demonstrations, personalised mentoring and industry-focused training. The teaching approach combines scientific understanding, technical precision and individual mentoring — so students develop confidence in their own professional abilities.</p><a class="button" href="#/academy">Explore the Academy <span class="arrow">↗</span></a></div></section>

  <div class="stat-strip"><div><strong>30+</strong><span>years of experience</span></div><div><strong>Level 4</strong><span>City &amp; Guilds · London</span></div><div><strong>Dermalogica</strong><span>specialist</span></div><div><strong>Kolkata</strong><span>Santoshpur, by appointment</span></div></div>

  <section class="section"><div class="section-heading"><div><div class="eyebrow">Appointments &amp; admissions</div><h2>Tell us what you<br><span class="script">have in mind.</span></h2></div><a class="button" href="#/contact">Start an enquiry <span class="arrow">↗</span></a></div><p style="max-width:600px;color:var(--muted);font-size:13px;line-height:1.8">Salon visits and academy consultations are preferably arranged by prior appointment. All enquiries are handled personally by our team, who will confirm availability, fees and the next step with you directly.</p></section>
</div>`}

/* ==========================================================================
   ACADEMY  (Q2, Q10, Q11, Q12, Q9)
   ========================================================================== */
const courseAreas = [
  ['01','Makeup artistry','Professional makeup artistry, taught through practical demonstration and hands-on practice rather than theory alone.'],
  ['02','Hairdressing','Professional hairdressing technique, built from the fundamentals up to salon-ready practice.'],
  ['03','Hair colour theory','The theory behind professional hair colour, with individual mentoring on application.'],
  ['04','Professional beauty techniques','Industry-focused beauty techniques, with the scientific understanding behind each one.']
];

function academy(){return `<div class="page-wrap">
  <section class="page-hero"><div class="breadcrumb">Home <span>/</span> Academy</div><div class="eyebrow">Glitz &amp; Glamour Academy</div><h1>A craft worth learning.<br><em>A career worth building.</em></h1><p>Structured education, practical demonstrations, personalised mentoring and industry-focused training — led by Kakoly Sengupta, with over 30 years in the beauty and wellness industry.</p></section>

  <section class="section"><div class="academy-intro"><div><div class="eyebrow">The Academy</div><h2>Professional education,<br>built on <span class="script">practice.</span></h2><p>Glitz &amp; Glamour Academy is dedicated to nurturing aspiring and practising beauty professionals through structured education, practical demonstrations, personalised mentoring and industry-focused training in makeup artistry, hairdressing, hair colour theory and professional beauty techniques.</p><p>Founder and educator Kakoly Sengupta holds a City &amp; Guilds Level 4 Licentiateship in Hairdressing (City &amp; Guilds, London) and Teacher’s Training from Vidal Sassoon, London. Her teaching combines scientific understanding, technical precision, practical demonstration and individual mentoring.</p><div class="credential-stack"><div class="credential"><b>30+</b><span>years of professional experience</span></div><div class="credential"><b>Level 4</b><span>City &amp; Guilds Licentiateship · London</span></div><div class="credential"><b>Vidal Sassoon</b><span>Teacher’s Training · London</span></div><div class="credential"><b>Dermalogica</b><span>Specialist · science-based skincare</span></div></div></div><div class="academy-image">${image('./public/images/academy-class.jpg','A makeup educator demonstrating a technique on a model')}<div class="image-stamp">Learning, by doing</div></div></div></section>

  <section class="section course-section"><div class="section-heading"><div><div class="eyebrow">What you learn</div><h2>Four disciplines.<br><span class="script">One standard.</span></h2></div><p>Training across the core disciplines of professional beauty. Current batches, eligibility, fees and certification are confirmed directly with the Academy.</p></div><div class="course-grid">${courseAreas.map(c=>`<article class="course-card"><span class="course-num">${c[0]} / DISCIPLINE</span><h3>${c[1]}</h3><p>${c[2]}</p><button type="button" data-enquire="${c[1]}">Ask about this course ↗</button></article>`).join('')}</div></section>

  <section class="section" style="padding-top:0"><div class="two-col">
    <div class="col-card"><div class="eyebrow">Who it is for</div><h3>Aspiring and practising professionals</h3><p>Our academy welcomes aspiring and practising beauty professionals from Kolkata, across West Bengal and other parts of India. We offer in-person professional training as well as selected online educational programmes.</p></div>
    <div class="col-card"><div class="eyebrow">How we teach</div><h3>Understanding, not imitation</h3><p>The aim is to help students understand not just how a technique works, but why it works — so they leave as independent, knowledgeable and confident professionals rather than people who simply reproduce techniques.</p></div>
  </div></section>

  <section class="section" style="padding-top:0"><div class="section-heading"><div><div class="eyebrow">Admissions</div><h2>How a course<br><span class="script">becomes a place.</span></h2></div><p>All admissions are handled personally by the Academy. There is no automated enrolment.</p></div>
    <div class="steps">${[
      ['01','Enquire','Reach us by WhatsApp, telephone or the enquiry form. Tell us which discipline interests you and what you would like to know.'],
      ['02','Talk it through','Course information, syllabus, duration, fees, training format and upcoming batch availability are explained personally. Students may speak directly with the academy educator for guidance on course suitability and professional development.'],
      ['03','Confirm your place','Admission is confirmed once you select the course, complete the required registration or payment formalities, and receive confirmation from the Academy.']
    ].map(s=>`<div class="step"><span class="step-num">${s[0]}</span><h3>${s[1]}</h3><p>${s[2]}</p></div>`).join('')}</div>
  </section>

  <section class="section" style="padding-top:0"><div class="course-enquire"><div><h3>Not sure which discipline fits?</h3><p>Tell us what you want to learn. We’ll help you find the right starting point.</p></div><a class="button" href="#/contact" data-category-link="Academy">Enquire about a course <span class="arrow">↗</span></a></div></section>
</div>`}

/* ==========================================================================
   SERVICES  (Q3, Q2, Q9, Q12, Q13)
   ========================================================================== */
const services = [
  {num:'01',title:'Bridal makeup',cat:'Bridal',
   desc:'Sophisticated makeup artistry for your wedding day, shaped around your features, your outfit and your ceremony.',
   detail:'Bridal enquiries should include your name, event date, location and the services you need. A consultation may be recommended before the booking is confirmed. Bridal and special-event work outside the salon is considered on prior consultation, subject to availability, location and applicable travel charges.'},
  {num:'02',title:'Bridal hairstyling',cat:'Bridal',
   desc:'Bridal hair planned alongside your makeup, so the whole look holds together from the first photograph to the last.',
   detail:'Booked with bridal makeup or on its own. Share your event date, getting-ready location and the hair look you have in mind, and we will confirm availability and timing directly.'},
  {num:'03',title:'Occasion & party makeup',cat:'Bridal',
   desc:'Makeup for engagements, celebrations, festive occasions and the days worth dressing up for.',
   detail:'A polished, personal look for your event. Tell us the occasion, date and start time, and whether you would like makeup, hairstyling or both.'},
  {num:'04',title:'Hairstyling',cat:'Salon',
   desc:'Styling from a fresh everyday finish to occasion hair, with customised hair transformations in the salon chair.',
   detail:'Appointment time and service suitability are confirmed after a short consultation, so the finish suits your hair and the occasion.'},
  {num:'05',title:'Dermalogica skin treatments',cat:'Salon',
   desc:'Advanced Dermalogica skincare treatments, bringing a science-based approach to professional skincare.',
   detail:'Kakoly is a Dermalogica Specialist, combining technical knowledge with personalised treatment protocols. Tell us what you would like to address and the salon will advise on suitable treatments and appointment slots.'},
  {num:'06',title:'Davines haircare &amp; colour',cat:'Salon',
   desc:'Davines professional haircare and colour services, including customised hair transformations.',
   detail:'For a colour transformation, a consultation is recommended before the service is confirmed. Share your current hair length, the change you have in mind and any reference images.'}
];
function servicesPage(){return `<div class="page-wrap">
  <section class="page-hero"><div class="breadcrumb">Home <span>/</span> Services</div><div class="eyebrow">Boutique Salon</div><h1>Luxury services,<br><em>by appointment.</em></h1><p>A thoughtfully curated range of premium skin, hair and makeup services. Every service is designed around individual beauty needs, with a commitment to quality, precision and an exceptional client experience.</p></section>

  <section class="section"><div class="service-intro"><div><div class="eyebrow">Services at Glitz &amp; Glamour</div><h2>Made for the moment.<br><span class="script">Made for you.</span></h2></div><div class="service-note">“We focus on enhancing individual beauty rather than following trends blindly. Attention to detail and maintaining the integrity of skin and hair are central to our work.”</div></div>
  <div class="service-list" style="margin-top:42px">${services.map(s=>`<div class="service-row-wrap"><div class="service-row"><span class="row-no">${s.num}</span><h3>${s.title}</h3><p>${s.desc}</p><button class="circle-arrow service-toggle" aria-label="More about ${s.title}" data-service="${s.num}">↗</button></div><div class="service-extra" data-extra="${s.num}">${s.detail} <button type="button" class="text-link" style="margin-left:9px;border:0;background:none;padding:0" data-enquire="${s.title}" data-category="${s.cat}">Enquire about this service ↗</button></div></div>`).join('')}</div>
  <div class="service-bottom"><div><h3>Your date, your plans.</h3><p>For bridal, salon and makeup bookings, begin with a short enquiry. We’ll confirm pricing and availability with you personally.</p></div><a href="#/contact" class="button" data-category-link="Salon">Enquire about a service <span class="arrow">↗</span></a></div></section>

  <section class="section" style="padding-top:0"><div class="course-enquire"><div><h3>Thinking about the Academy?</h3><p>Professional training in makeup artistry, hairdressing, hair colour theory and beauty techniques.</p></div><a class="button" href="#/academy">Explore the Academy <span class="arrow">↗</span></a></div></section>
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
    text:'My experience at Glitz & Glamour Beauty Parlour was nothing short of wonderful. From the moment I walked in, I was welcomed with warmth, professionalism, and genuine care.'
  },
  {
    name:'Debarati Ghosh', when:'8 months ago', group:'Salon &amp; hair',
    text:'The Glitz and Glamour Academy and Boutique salon delivers exceptional service with skilled stylists, a clean and welcoming environment, and consistently high-quality results. Their attention to detail and professionalism…'
  },
  {
    name:'Uttamzzz', when:'9 months ago', group:'Academy &amp; students',
    text:'Gltz n glamour academy n Butique salon is truly amazing. I completed my training in Hair Dressing, Beauty Therapy, and Fashion Makeup from this academy, and I have been a pass-out since 2008.'
  },
  {
    name:'Swagata Chatterjee', when:'7 months ago', group:'Academy &amp; students',
    text:'A big thanks to Glitz and Glamour Academy and Boutique Saloon for their amazing services and encouragement. The team is extremely skilled, friendly, and always ready to guide and support.'
  },
  {
    name:'Rituparna Chandra', when:'6 months ago', group:'Long-standing clients',
    text:'It’s a relationship of trust and gratitude from 2003 to 2026. More than a decade. Kakoli Sengupta’s Glitz and glamour Academy and Boutique salon wins my heart every single day I visit there.'
  }
];

function reviewCard(r){
  const initials = r.name.replace(/[^A-Za-z ]/g,'').trim().split(/\s+/).map(w=>w[0]).join('').slice(0,2).toUpperCase();
  return `<article class="review-card${r.featured?' featured':''}" data-group="${r.group}">
    <div class="review-top"><span class="stars" role="img" aria-label="Rated 5 out of 5 stars on Google">★★★★★</span><span class="review-topic">${r.group}</span></div>
    <blockquote>${r.text}</blockquote>
    <footer class="review-who"><span class="review-avatar" aria-hidden="true">${initials}</span><div><b>${r.name}</b><small>Google review · ${r.when}</small></div></footer>
  </article>`;
}

function testimonials(){return `<div class="page-wrap">
  <section class="page-hero">
    <div class="breadcrumb">Home <span>/</span> Testimonials</div>
    <div class="eyebrow">In their words · Google reviews</div>
    <h1>What people say<br><em>when they leave the chair.</em></h1>
    <p>Glitz &amp; Glamour holds a 4.9-star rating from 103 Google reviews — written by brides, salon regulars and students who now work in the industry. Everything below is quoted as written, with names and dates exactly as they appear on Google.</p>
    <div class="rating-badge"><span class="stars" role="img" aria-label="4.9 out of 5 stars on Google">★★★★★</span><b>4.9</b><small>103 Google reviews</small></div>
    <div class="hero-actions"><a class="button" href="#/contact">Start an enquiry <span class="arrow">↗</span></a><a class="text-link" href="${googlePlace}" target="_blank" rel="noreferrer">Read all 103 reviews on Google <span>↗</span></a></div>
  </section>
  <div class="stat-strip"><div><strong>4.9</strong><span>average Google rating</span></div><div><strong>103</strong><span>reviews and counting</span></div><div><strong>Two expressions</strong><span>salon · academy</span></div><div><strong>30+</strong><span>years of experience</span></div></div>
  <section class="section"><div class="story-band">
    <div class="story-photo">${image('./public/images/bridal-editorial.png','Bridal makeup and hairstyling')}<div class="caption">Bridal artistry</div></div>
    <div class="story-text">
      <div class="eyebrow">Where the reviews begin</div>
      <h2>The bridal chair.<br><span class="script">The calm morning.</span></h2>
      <p>Bridal work is the heart of the boutique salon — makeup and hair planned around the ceremony, the outfit, the photographs and the person wearing it all. Brides are usually the first to write, and they tend to remember two things: the look holding up through a long day, and how calm it felt getting there.</p>
      <div class="pullquote">“It was truly an honour to be a part of your special journey and to style you for such important moments of your wedding.”</div>
      <p class="quote-credit">Kakoly Sengupta, replying to a bride’s Google review</p>
      <a class="text-link" href="#/contact" data-category-link="Bridal">Plan your bridal look <span>↗</span></a>
    </div>
  </div></section>
  <section class="section">
    <div class="section-heading"><div><div class="eyebrow">The reviews</div><h2>Read the ones<br><span class="script">we didn’t have to write.</span></h2></div><p>Filter by the kind of work you’re here for. Every quote is an excerpt from a public Google review — nothing added, nothing polished.</p></div>
    <div class="tools-row">
      <div class="filter-row" role="group" aria-label="Filter reviews by topic">${reviewGroups.map((g,i)=>`<button class="filter-btn ${i===0?'active':''}" data-review-filter="${g}">${g}</button>`).join('')}</div>
      <div class="tools-note">Showing 8 of 103 reviews. The rest — including the ones written in Bengali — are on Google.</div>
    </div>
    <div class="review-wall">${reviews.map(reviewCard).join('')}</div>
    <div class="note-box"><b>How these are published.</b> Quotes are reproduced from public Google reviews of Glitz &amp; Glamour Academy &amp; Boutique Salon, trimmed with an ellipsis where a review continues, and grouped by topic for reading. Names, star ratings and dates are unchanged. <a class="text-link" href="${googlePlace}" target="_blank" rel="noreferrer">Read the full reviews on Google <span>↗</span></a></div>
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
      <blockquote class="academy-quote">“At Guild and Glamour Academy [sic], I learned makeup and hairdressing, but beyond the skills, I gained something even more precious. Whenever we found ourselves stuck in life’s challenges, Kakoli Di was always there with her wise advice…”</blockquote>
      <cite>Kaberi D. · Google review · a year ago</cite>
      <p>Glitz &amp; Glamour Academy trains aspiring and practising beauty professionals through structured education, practical demonstration, personalised mentoring and industry-focused training — in small groups, with a working educator at the front of the room.</p>
      <a class="button" href="#/academy">Explore the Academy <span class="arrow">↗</span></a>
    </div>
  </section>
  <section class="section">
    <div class="section-heading"><div><div class="eyebrow">Your turn</div><h2>Come for the work.<br><span class="script">Leave your own review.</span></h2></div><a class="button" href="#/contact">Start an enquiry <span class="arrow">↗</span></a></div>
    <p style="max-width:620px;color:var(--muted);font-size:13px;line-height:1.8">Bridal, salon or Academy — tell us what you have in mind and we’ll point you to the right conversation. After your appointment, you’re welcome to add your voice on Google.</p>
    <div class="cta-links"><a class="text-link" href="${googlePlace}" target="_blank" rel="noreferrer">Read all 103 Google reviews <span>↗</span></a><a class="text-link" href="${googlePlace}" target="_blank" rel="noreferrer">Write your review on Google <span>↗</span></a></div>
    <p class="fine-print" style="margin-top:34px">Review quotes are excerpts from public Google reviews of Glitz &amp; Glamour Academy and Boutique Salon, published with the reviewer names shown on Google.</p>
  </section>
</div>`}

/* ==========================================================================
   CONTACT  (Q9, Q12, Q13)
   ========================================================================== */
const categoryOptions = {
  Bridal:['Bridal makeup','Bridal hairstyling','Bridal makeup & hairstyling','Occasion / party makeup','Other bridal enquiry'],
  Salon:['Dermalogica skin treatment','Davines haircare & colour','Haircut & styling','Hair transformation','Occasion hairstyling','Other salon service'],
  Academy:['Makeup artistry','Hairdressing','Hair colour theory','Professional beauty techniques','Online programme','Other course enquiry']
};

function contact(){return `<div class="page-wrap"><div class="contact-hero"><section class="page-hero"><div class="breadcrumb" style="color:#c5aca6">Home <span>/</span> Contact &amp; Enquiries</div><div class="eyebrow">One destination. Two expressions of excellence.</div><h1>One enquiry.<br><em>Handled personally.</em></h1><p>Tell us whether you are booking the boutique salon or enquiring about a course. All enquiries are handled personally by our team.</p></section></div>
  <section class="section"><div class="booking-layout"><aside class="booking-aside"><div class="eyebrow">Come say hello</div><h2>Good things start<br>with a <span class="script">conversation.</span></h2><p>Share a few details and we can follow up about availability, fees and the next step. Submitting the form opens a pre-filled WhatsApp message — it is not stored on this website.</p><div class="contact-card">
    <div class="contact-line"><b>✆</b><div><a href="https://wa.me/${phoneDigits}" target="_blank" rel="noreferrer">${phone}</a><small>WhatsApp</small></div></div>
    <div class="contact-line"><b>↗</b><div><a href="tel:+${phone2Digits}">${landline}</a><small>Call the salon</small></div></div>
    <div class="contact-line"><b>✉</b><div><a href="mailto:${email}">${email}</a><small>Email</small></div></div>
    <div class="contact-line"><b>◎</b><div><a href="${insta}" target="_blank" rel="noreferrer">@ikakolysengupta ↗</a><small>Instagram</small></div></div>
  </div></aside>
    <form class="booking-form" id="booking-form"><h2>What can we help with?</h2><p>Choose salon services, bridal makeup or the Academy, then tell us a little more. All fields marked * are required.</p><div class="booking-choices" role="group" aria-label="Enquiry type"><button type="button" class="choice selected" data-choice="Bridal"><span>01 / Occasion</span><b>Bridal</b></button><button type="button" class="choice" data-choice="Salon"><span>02 / For you</span><b>Salon</b></button><button type="button" class="choice" data-choice="Academy"><span>03 / Learn</span><b>Academy</b></button></div><input type="hidden" name="category" value="Bridal"><div class="form-grid"><div class="field"><label for="name">Your name *</label><input id="name" name="name" required autocomplete="name" placeholder="Name" /></div><div class="field"><label for="phone">Phone / WhatsApp *</label><input id="phone" name="phone" required autocomplete="tel" type="tel" placeholder="+91 ..." /></div><div class="field"><label for="interest">I'm interested in *</label><select id="interest" name="interest" required>${categoryOptions['Bridal'].map(x=>`<option>${x}</option>`).join('')}</select></div><div class="field"><label for="date" id="date-label">Event date *</label><input id="date" name="date" required type="date" /></div><div class="field hidden" id="location-field"><label for="location">Event location</label><input id="location" name="location" placeholder="Venue and area" /></div><div class="field full"><label for="message">A few details</label><textarea id="message" name="message" placeholder="Event date and location, the salon service you have in mind, or what you’d love to learn..."></textarea></div></div><div class="form-actions"><button class="button" type="submit">Continue on WhatsApp <span class="arrow">↗</span></button><span class="form-hint">We will confirm availability and fees directly.<br>No payment is collected on this site.</span></div><div class="success-message" role="status">Your enquiry is ready. WhatsApp will open with your details — please press Send there to share it.</div></form></div>

    <div class="process-grid"><div class="process-col"><div class="eyebrow">Boutique Salon Services</div><h3>How an enquiry becomes an appointment</h3><ol><li>You contact us through WhatsApp, telephone, social media or a direct enquiry.</li><li>Our team responds, understands your requirements and provides information about suitable services, pricing and availability.</li><li>For specialised treatments, hair colour transformations and bridal makeup, a consultation may be recommended before confirming the service.</li><li>Appointments are confirmed after mutually agreeing the date, time and service requirements. Advance payments may be requested for selected services or bookings.</li></ol></div><div class="process-col"><div class="eyebrow">Academy Admissions</div><h3>How an enquiry becomes a place</h3><ol><li>Prospective students enquire through WhatsApp, telephone, social media or direct communication.</li><li>Course information, syllabus, duration, fees, training format and upcoming batch availability are explained personally.</li><li>Students may speak directly with the academy educator for guidance regarding course suitability and professional development.</li><li>Admission is confirmed once the student selects the course, completes the required registration or payment formalities and receives confirmation from the Academy.</li></ol></div></div>

    <div class="map-panel"><div><h3>Find us in Santoshpur.</h3><p>${address}<br>${landmark}</p><p class="map-note">All salon visits and academy consultations are preferably arranged by prior appointment.</p></div><a class="button light" target="_blank" rel="noreferrer" href="${mapsLink}">Get directions <span class="arrow">↗</span></a></div>
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
  menu.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');
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
  const items=document.querySelectorAll('.section-heading,.story-band,.academy-intro,.course-card,.service-row-wrap,.booking-form,.booking-aside,.map-panel,.step,.col-card,.process-col');
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
menuToggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-window.innerHeight;document.querySelector('.scroll-progress span').style.width=(max?window.scrollY/max*100:0)+'%'});

document.addEventListener('click',e=>{
  const categoryLink=e.target.closest('[data-category-link]');
  if(categoryLink){e.preventDefault();goContact(categoryLink.dataset.categoryLink);return;}
  const enquire=e.target.closest('[data-enquire]');
  if(enquire){const category=enquire.dataset.category||'Academy';goContact(category,enquire.dataset.enquire);return;}
  const choice=e.target.closest('[data-choice]');
  if(choice){currentCategory=choice.dataset.choice;document.querySelectorAll('.choice').forEach(b=>b.classList.toggle('selected',b===choice));syncForm(currentCategory);return;}
  const toggle=e.target.closest('.service-toggle');
  if(toggle){const detail=document.querySelector(`[data-extra="${toggle.dataset.service}"]`);detail.classList.toggle('open');toggle.textContent=detail.classList.contains('open')?'−':'↗';return;}
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
  const win=window.open(url,'_blank','noopener,noreferrer');
  document.querySelector('.success-message').classList.add('show');
  if(!win)showToast('WhatsApp is ready. If it did not open, use the WhatsApp contact link below.');
});
