/**
 * KULADEVA DIGITAL SANCTUARY — MAIN.JS
 * Reads TEMPLE_CONTENT (content.js) and renders the entire site.
 * Never hardcode temple data here — only UI chrome strings live in this file.
 */

(function () {
  'use strict';

  const T = window.TEMPLE_CONTENT;
  let currentLang = 'ta';

  // ---- UI chrome strings (not temple data — safe to keep here) ----
  const UI = {
    nav: {
      temple:    { en: 'Temple',    ta: 'கோவில்' },
      gallery:   { en: 'Gallery',   ta: 'படங்கள்' },
      macham:      { en: 'Macham',     ta: 'மச்சம்' },
      festivals: { en: 'Festivals', ta: 'திருவிழா' },
      support:   { en: 'Support',   ta: 'ஆதரவு' }
    },
    soundOn:  { en: 'Sound on',  ta: 'ஒலி இயக்கு' },
    soundOff: { en: 'Sound off', ta: 'ஒலி நிறுத்து' }
  };

  // ---- Helpers ----
  function getPath(obj, path) {
    return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), obj);
  }

  function trimBlock(str) {
    if (!str) return '';
    return str.split('\n').map(l => l.trim()).filter(Boolean).join('\n\n');
  }

  function paragraphize(str) {
    const clean = trimBlock(str);
    return clean.split('\n\n').map(p => `<p>${p}</p>`).join('');
  }

  function resolveLangPath(path) {
    if (currentLang !== 'ta') return path;
    if (/\.en$/.test(path)) return path.replace(/\.en$/, '.ta');
    if (/En$/.test(path)) return path.replace(/En$/, 'Ta');
    return path;
  }

  // ---- i18n render pass ----
  function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const path = el.getAttribute('data-i18n');
      let val = getPath(T, resolveLangPath(path));
      if (val === null) val = getPath(T, path);
      if (typeof val === 'string') el.textContent = val.trim();
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const path = el.getAttribute('data-i18n-html');
      let val = getPath(T, resolveLangPath(path));
      if (val === null) val = getPath(T, path);
      if (typeof val === 'string') el.innerHTML = paragraphize(val);
    });

    // Nav labels (UI chrome, bilingual dictionary above)
    document.querySelectorAll('.nav-links a, .mobile-dock a').forEach(a => {
      const key = a.getAttribute('href').replace('#', '');
      if (!UI.nav[key]) return;
      const svg = a.querySelector('svg');
      if (svg) {
        // mobile dock: icon + text node
        let textNode = [...a.childNodes].find(n => n.nodeType === 3 && n.textContent.trim());
        if (textNode) textNode.textContent = UI.nav[key][currentLang];
      } else {
        a.textContent = UI.nav[key][currentLang];
      }
    });

    document.documentElement.lang = currentLang;
    document.body.classList.toggle('lang-ta', currentLang === 'ta');
  }

  function setLang(lang) {
    currentLang = lang;
    document.querySelectorAll('.lang-switch button').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
    applyTranslations();

    renderDynamicContent();
    
  }

  document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  // ---- Brand ----
  document.getElementById('navBrand').textContent = T.temple.deityNameEn + ' Temple';
  // mobileBrand element removed — navBrand (site-title-home) handles this now

  // ---- Timeline ----
  const timelineTrack = document.getElementById('timelineTrack');
  const timelineItems = T.history.timeline || [];
  // Strips emoji/pictographs from text — Timeline no longer shows icons in labels
  const stripEmoji = (str) => (str || '').replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, '').trim();
  timelineItems.forEach((item, i) => {
    const div = document.createElement('div');
    const isMajor = i === 0 || i === timelineItems.length - 1;
    div.className = 'timeline-card reveal' + (isMajor ? ' major' : '');
    div.setAttribute('data-number', String(i + 1));
    const yearText = currentLang === 'ta' && item.yearTa ? item.yearTa : item.yearEn;
    const eventText = currentLang === 'ta' && item.eventTa ? item.eventTa : item.eventEn;
  
    const isBiennial = /biennial/i.test(item.eventEn || '') || /biennial/i.test(item.yearEn || '');
    div.innerHTML = `
      <div class="card-content">
        <h3>${stripEmoji(yearText)}${isBiennial ? ' <span class="timeline-leaf" aria-hidden="true">&#127811;</span>' : ''}</h3>
        <p>${eventText}</p>
      </div>
    `;
    timelineTrack.appendChild(div);
  });

  // ---- Gallery ----
  const yearTabs = document.getElementById('yearTabs');
  const galleryGrid = document.getElementById('galleryGrid');
  const years = (T.gallery && T.gallery.years) || [];

  const galleryVideoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target.querySelector('video');
      if (!video) return;
      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, { threshold: 0.5 });

  function renderGalleryYear(index) {
    galleryGrid.innerHTML = '';
    const yearData = years[index];
    if (!yearData) return;
    yearData.photos.forEach(photo => {
      const div = document.createElement('div');
      div.className = 'gallery-item';
      div.innerHTML = `<img src="images/gallery/${yearData.year}/${photo}" alt="${yearData.captionEn}" loading="lazy">`;
      galleryGrid.appendChild(div);
    });
    if (yearData.video) {
      const div = document.createElement('div');
      div.className = 'gallery-item';
      div.style.position = 'relative';
      div.innerHTML = `<video muted playsinline loop poster="images/gallery/${yearData.year}/${yearData.photos[0] || ''}" style="width:100%;height:100%;object-fit:cover;">
        <source src="videos/gallery/${yearData.year}/${yearData.video}" type="video/mp4">
      </video>`;
      galleryGrid.appendChild(div);
      galleryVideoObserver.observe(div);
    }
  }

  years.forEach((y, i) => {
    const btn = document.createElement('button');
    btn.textContent = y.year;
    if (i === 0) btn.classList.add('active');
    btn.addEventListener('click', () => {
      yearTabs.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGalleryYear(i);
    });
    yearTabs.appendChild(btn);
  });
  if (years.length) renderGalleryYear(0);

  // Macham archive images — same bento photo-cluster pattern as Temple
  const machamGrid = document.getElementById('machamArchiveGrid');
  const archiveImgs = (T.machamArchive && T.machamArchive.archiveImages) || [];
  archiveImgs.forEach(img => {
    const div = document.createElement('div');
    div.className = 'cluster-item';
    div.innerHTML = `<img src="images/macham/${img}" alt="Macham identifier" loading="lazy">`;
    machamGrid.appendChild(div);
  });

  // ---- Countdown ----
function updateCountdown() {
  // 1. Database of upcoming Vaikasi Pournami dates (Every 2 Years)
  const festivalSchedule = {
    2028: "2028-06-07",
    2030: "2030-06-15",
    2032: "2032-05-24",
    2034: "2034-05-31",
    2036: "2036-05-11"
  };

  const now = new Date();
  let targetDateStr = "";

  // 2. Loop to automatically lock onto the next future festival date
  for (let year in festivalSchedule) {
    let fDate = new Date(festivalSchedule[year] + "T00:00:00");
    if (fDate.getTime() > now.getTime()) {
      targetDateStr = festivalSchedule[year];
      break; // Found the active upcoming festival!
    }
  }

  // Safety fallback check
  if (!targetDateStr) return;

  // 3. Parse the chosen target date safely
  const dateParts = targetDateStr.split('-'); 
  const targetDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
  targetDate.setHours(0, 0, 0, 0); 

  // 4. Total Cumulative Months Calculation
  let months = (targetDate.getFullYear() - now.getFullYear()) * 12 + (targetDate.getMonth() - now.getMonth());
  if (targetDate.getDate() < now.getDate()) {
    months--; 
  }

  // 5. Absolute Total Calculations (Direct division layout)
  const totalDiffMs = targetDate.getTime() - now.getTime();
  const totalDays = Math.floor(totalDiffMs / 86400000); 
  const totalHours = Math.floor(totalDiffMs / 3600000); 

  // 6. Inject values cleanly into UI elements
  document.getElementById('cdMonths').textContent = String(months).padStart(2, '0');
  document.getElementById('cdDays').textContent = String(totalDays);
  document.getElementById('cdHours').textContent = String(totalHours);
}

// Fire calculation loop and update automatically every 60 seconds
updateCountdown();
setInterval(updateCountdown, 60000);




  /* document.getElementById('nextFestivalName').textContent =
    T.festivals && T.festivals.nextFestival ? T.festivals.nextFestival.nameEn : ''; */

  // ---- Festival list ----
  function festivalListRender() {
    const festivalList = document.getElementById('festivalList');
    festivalList.innerHTML = '';
  (T.festivals.list || []).forEach(f => {
    const div = document.createElement('div');
    div.className = 'festival-card';
   
    const name = currentLang === 'ta' ? f.nameTa : f.nameEn;
    const month = currentLang === 'ta' ? f.monthTa : f.monthEn;
    const desc = currentLang === 'ta' ? f.descriptionTa : f.descriptionEn;
    const offerings = currentLang === 'ta' ? f.offeringsTa : f.offeringsEn;

    div.innerHTML = `<h4>${name} <span style="font-size:14px;color:var(--gold);font-weight:500;">— ${month}</span></h4>
    <p>${desc}</p><div class="offerings"><strong>Offerings:</strong> ${offerings}</div>`; 

    festivalList.appendChild(div);
  });
  }
  festivalListRender();

  // ---- Announcements ----
 /*  const announcementsList = document.getElementById('announcementsList');
  (T.festivals.announcements || []).forEach(a => {
    const div = document.createElement('div');
    div.style.marginTop = '14px';
    div.innerHTML = `<div class="caption">${a.dateEn}</div><div>${a.textEn}</div>`;
    announcementsList.appendChild(div);
  }); */

  // ---- WhatsApp sponsor link ----
/*   const waNumber = (T.festivals.whatsappNumber || '').replace(/\D/g, '');
  document.getElementById('whatsappSponsor').href = waNumber
    ? `https://wa.me/${waNumber}?text=${encodeURIComponent('I would like to sponsor an offering at the temple.')}`
    : '#'; */

  // ---- Committee ----
  function committeeGridRender() {
    const committeeGrid = document.getElementById('committeeGrid');
    committeeGrid.innerHTML = "";
  (T.committee.members || []).forEach(m => {
    const div = document.createElement('div');
    div.className = 'committee-card';
    div.innerHTML = `
      <div class="avatar"><img src="images/committee/${m.photoFile || 'placeholder.jpg'}" alt="${m.nameEn}" loading="lazy"></div>
      <div class="name">${currentLang === 'ta'? m.nameTa : m.nameEn}</div>
      <div class="role">${currentLang === 'ta'? m.roleTa : m.roleEn}</div>
    `;
    committeeGrid.appendChild(div);   
  });
  if (T.committee.velanNameEn) {
    const div = document.createElement('div');
    div.className = 'committee-card';
    div.innerHTML = `
      <div class="avatar"><img src="images/committee/${T.committee.velanPhotoFile || 'placeholder.jpg'}" alt="${T.committee.velanNameEn}" loading="lazy"></div>
      <div class="name">${currentLang === 'ta' ?T.committee.velanNameTa :T.committee.velanNameEn}</div>
      <div class="role">${currentLang === 'ta' ?T.committee.velanroleTa :T.committee.velanroleEn}</div>
    `;
    committeeGrid.appendChild(div);   
  }
  }
  committeeGridRender();

  // ---- Donation ----
  /* document.getElementById('upiQr').src = `images/${T.donation.upiQrFile || 'upi-qr.png'}`;
  const bankDetails = document.getElementById('bankDetails');
  const bank = T.donation.bank || {};
  bankDetails.innerHTML = `
    <dt>Account Name</dt><dd>${bank.accountName || ''}</dd>
    <dt>Account Number</dt><dd>${bank.accountNumber || ''}</dd>
    <dt>IFSC</dt><dd>${bank.ifsc || ''}</dd>
    <dt>Bank &amp; Branch</dt><dd>${bank.bankName || ''}, ${bank.branch || ''}</dd>
    <dt>UPI ID</dt><dd>${T.donation.upiVpa || ''}</dd>
  `; */

  // ---- Donors — all shown equally, regardless of contribution size ----
  function donarsRendered() {
    if (T.donors) {
    const donorsTitleEl = document.getElementById('donorsTitle');
    donorsTitleEl.innerHTML = "";
    if (donorsTitleEl) donorsTitleEl.textContent = currentLang === 'ta' ? T.donors.title.ta : T.donors.title.en;
    const donorsGrid = document.getElementById('donorsGrid');
     donorsGrid.innerHTML = "";
    (T.donors.list || []).slice().sort(() => Math.random() - 0.5).forEach(d => {
      const div = document.createElement('div');
      div.className = 'donor-card';
      const name = currentLang === 'ta' ? d.nameTa : d.nameEn;
      const village = currentLang === 'ta' ? d.villageTa : d.villageEn;
      const contribution = currentLang === 'ta' ? d.contributionTa : d.contributionEn;
      div.innerHTML = `
        <div class="avatar"><img src="images/donors/${d.photo}" alt="${name}" loading="lazy"></div>
        <div class="name">${name}</div>
        <div class="role">${village}</div>
        <div class="contribution">${contribution}</div>
      `;
      donorsGrid.appendChild(div);
    });
  }
  }
  
donarsRendered();
  // ---- Tour/Visit — route landmarks (was never wired to the page before;
  // this fixes that so whatever is written in content.js's tour.landmarks
  // actually appears in the #routeLandmarks div) ----
  const routeLandmarksEl = document.getElementById('routeLandmarks');
  if (routeLandmarksEl && T.directions && T.directions.landmarks) {
    const text = currentLang === 'ta' ? T.directions.landmarks.ta : T.directions.landmarks.en;
    routeLandmarksEl.innerHTML = paragraphize(trimBlock(text || ''));
  }

  // ---- Footer ----
  /* const footerWaNumber = ((T.contact && T.contact.whatsappNumber) || '').replace(/\D/g, '');
  document.getElementById('footerContact').innerHTML = `
    <a class="contact-card whatsapp-card" href="https://wa.me/${footerWaNumber}" target="_blank" rel="noopener">
      <span class="contact-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg></span>
      <span class="contact-text">
     
        <span class="contact-value">+${footerWaNumber}</span>
        <span class="contact-badge">Fastest way to reach us</span>
      </span>
    </a>
    <a class="contact-card call-card" href="tel:+${footerWaNumber}">
      <span class="contact-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.2 1L6.6 10.8z"/></svg></span>
      <span class="contact-text">
        <span class="contact-value">+${footerWaNumber}</span>
      </span>
    </a>
  
  `; */
  document.getElementById('year').textContent = new Date().getFullYear();

  // ---- Marquee (sub-deities, photo strip) ----
  // Photo filenames follow the array order in content.js — the Nth name
  // pairs with images/subdeities/KDSD-N.png. No content.js change needed.

  function marqueeTrackRender() {
  const marqueeTrack = document.getElementById('marqueeTrack');
  marqueeTrack.innerHTML = "";
  const namesEn = (T.subDeities && T.subDeities.en) || [];
  const namesTa = (T.subDeities && T.subDeities.ta) || [];
  const items = namesEn.map((n, i) => ({
    name: currentLang === 'ta' ? (namesTa[i] || n) : n,
    photo: `images/subdeities/KDSD-${i + 1}.jpeg`
  }));
  const doubledItems = items.concat(items); // seamless loop
  marqueeTrack.innerHTML = doubledItems.map(it => `
    <div class="marquee-photo-item">
      <img src="${it.photo}" alt="${it.name}" loading="lazy">
      <span>${it.name}</span>
    </div>
  `).join('');
  }
 
marqueeTrackRender();
  // ---- Declaration — inline expand, not a modal. The site stays fully
  // visible; this just pushes the footer content down when opened. ----
  const declarationPanel = document.getElementById('declarationPanel');
  document.getElementById('declarationBtn').addEventListener('click', () => {
    const list = document.getElementById('signatoriesList');
    if (!list.dataset.rendered) {
      list.innerHTML = (T.declaration.signatories || [])
        .map(s => `<div style="display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid var(--gold-shadow);font-size:15px;"><span>${s.nameEn}</span><span style="color:var(--umber);">${s.roleEn}</span></div>`)
        .join('') + `<p style="margin-top:16px;font-size:13px;color:var(--umber);">Signed at ${T.declaration.declarationVillage}, ${T.declaration.declarationDate}</p>`;
      list.dataset.rendered = 'true';
    }
    declarationPanel.classList.toggle('expanded');
  });

  // ---- Home to Our Villages — footer strip. Display order shuffles on
  // every page load so no village is ever fixed in a position. ----
 function villageRender() {
  if (T.villages) {
    const villagesHeading = document.getElementById('villagesHeading');
    const villagesMessage = document.getElementById('villagesMessage');
    const villagesGrid = document.getElementById('villagesGrid');
    villagesHeading.innerHTML = "";
    villagesMessage.innerHTML = "";
    villagesGrid.innerHTML = "";
    if (villagesHeading) villagesHeading.textContent = currentLang === 'ta' ? T.villages.headingTa : T.villages.headingEn;
    if (villagesMessage) villagesMessage.textContent = currentLang === 'ta' ? T.villages.messageTa : T.villages.messageEn;
    const shuffledVillages = (T.villages.list || []).slice().sort(() => Math.random() - 0.5);
    villagesGrid.innerHTML = shuffledVillages.map(v => `
      <div class="village-plaque">
        <h3>${currentLang === 'ta' ? v.nameTa : v.nameEn}</h3>
        <p>${currentLang === 'ta' ? v.addressTa : v.addressEn}</p>
      </div>
    `).join('');
  }
 }

  villageRender();

  // ---- Inline scroll-triggered videos ----
  // Plays a section's video (muted) when it scrolls into view, pauses and
  // resets it to the first frame when it scrolls back out.
  const inlineVideoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target.querySelector('.inline-video-el');
      if (!video) return;
      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.inline-video').forEach(wrap => inlineVideoObserver.observe(wrap));

  // ---- Video Moments — Netflix-style silent preview. Muted motion
  // plays only while the clip is in view; full sound stays available
  // through the video's own native controls (a deliberate tap, not
  // autoplay-with-sound). ----
  const clipPreviewObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, { threshold: 0.6 });
  document.querySelectorAll('.clip-preview-video').forEach(v => clipPreviewObserver.observe(v));

  // ---- Inline video sound toggles ----
  // Each toggle button carries data-target pointing at its video's id.
  document.querySelectorAll('.inline-mute-toggle').forEach(btn => {
    const video = document.getElementById(btn.dataset.target);
    if (!video) return;
    btn.addEventListener('click', () => {
      video.muted = !video.muted;
      const label = btn.querySelector('span');
      if (label) label.textContent = video.muted ? UI.soundOff[currentLang] : UI.soundOn[currentLang];
    });
  });

  // ---- Olai-suvadi read more / read less ----
  // Each button carries data-panel pointing at its story panel's id.
  // Expanding/collapsing just toggles a class; the height animation is
  // handled entirely in CSS via max-height transition.
  document.querySelectorAll('.read-toggle-btn').forEach(btn => {
    const panel = document.getElementById(btn.dataset.panel);
    if (!panel) return;
    btn.addEventListener('click', () => {
      panel.classList.toggle('expanded');
    });
  });

  // ---- Hero mute toggle ----
  const heroVideo = document.getElementById('heroVideo');
  /* const muteToggle = document.getElementById('muteToggle');
  muteToggle.addEventListener('click', () => {
    heroVideo.muted = !heroVideo.muted;
    muteToggle.querySelector('span').textContent = heroVideo.muted ? UI.soundOff[currentLang] : UI.soundOn[currentLang];
  }); */

  // ---- Scroll progress bar ----
  const scrollProgress = document.getElementById('scrollProgress');
  function updateScrollProgress() {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
  }
  window.addEventListener('scroll', updateScrollProgress, { passive: true });

  // ---- Scroll reveal ----
  // ---- Temple photo carousel — Apple/Stripe style auto-advance ----
  // ---- Vamsavali — 3-pill interactive card, auto-advances ----
  (function initVamsamCard() {
    const display = document.getElementById('vamsamTextDisplay');
    const dock = document.getElementById('vamsamPillDock');
    if (!display || !dock) return;
    /* const segments = [
      "A bond that connects your roots... Our blessings embracing every generation. A family name is not the only thing passed from one generation to the next... Love... Faith... Hope... And our blessings... Travel together through every generation. Your ancestors sat before us, spoke to us from their hearts, shared their joys with us, bowed their heads in gratitude for our blessings, and celebrated our festival together as one family. We still remember their smiles, their happiness, and their love.",
      "Today, you walk on the same path your ancestors once walked. You stand before us where they once stood. You speak to us with the same love they did. The blessings they received, we continue to give to you today.",
      "Tomorrow, your children and their children will carry this beautiful bond forward. Our Roots is not simply a record of names — it is a bond of love that has connected generations with us. Remember your roots. Pass this beautiful tradition on to the next generation with love. Because when you stand before us, you are standing once again in the same loving embrace where your ancestors once stood."
    ]; */
    const segments = [
      {en:"A bond that connects your roots... Our blessings embracing every generation. A family name is not the only thing passed from one generation to the next... Love... Faith... Hope... And our blessings... Travel together through every generation. Your ancestors sat before us, spoke to us from their hearts, shared their joys with us, bowed their heads in gratitude for our blessings, and celebrated our festival together as one family. We still remember their smiles, their happiness, and their love.",
      ta:"வேர்களை இணைக்கும் புனித பந்தம்... தலைமுறைகளை அரவணைக்கும் எங்கள் அருள்.ஒரு பெயர் மட்டும் தலைமுறைகளைத் தாண்டி வருவதில்லை...     அன்பும்... பக்தியும்... நம்பிக்கையும்... எங்கள் அருளும்... கூடவே பயணிக்கின்றன.உங்கள் முன்னோர்கள்...எங்கள் சந்நிதியில் அமர்ந்தார்கள்...எங்களோடு மனம் விட்டு பேசினார்கள்...தங்கள் மகிழ்ச்சிகளை எங்களோடு பகிர்ந்தார்கள்...    எங்கள் அருளுக்கு நன்றியுடன் தலை வணங்கினார்கள்...குடும்பமாக ஒன்றுகூடி எங்கள் திருவிழாவைக் கொண்டாடினார்கள்...அவர்களின் சிரிப்பையும்...அவர்களின் மகிழ்ச்சியையும்...அவர்களின் அன்பையும்...இன்றும் நாங்கள் நினைவில் வைத்திருக்கிறோம்."},
      {en:"Today, you walk on the same path your ancestors once walked. You stand before us where they once stood. You speak to us with the same love they did. The blessings they received, we continue to give to you today.", 
      ta:"இன்று...அவர்கள் நடந்த அதே பாதையில்...  நீங்களும் நடக்கிறீர்கள்.அவர்கள் நின்ற அதே சந்நிதியில்... நீங்களும் நிற்கிறீர்கள்.அவர்கள் எங்களோடு பேசிய அதே அன்போடு...நீங்களும் உங்கள் மனதை எங்களிடம் பகிர்கிறீர்கள்.அவர்கள் பெற்ற அதே அருளை...இன்றும் நாங்கள் உங்களுக்கும் வழங்குகிறோம்." },
      {en:"Tomorrow, your children and their children will carry this beautiful bond forward. Our Roots is not simply a record of names — it is a bond of love that has connected generations with us. Remember your roots. Pass this beautiful tradition on to the next generation with love. Because when you stand before us, you are standing once again in the same loving embrace where your ancestors once stood.",
      ta:"நாளை...உங்கள் பிள்ளைகளும்...அவர்களின் பிள்ளைகளும்...இந்த புனித உறவைத் தொடர்ந்து கொண்டு செல்வார்கள்.வம்சாவளி என்பது பெயர்களின் பட்டியல் அல்ல...தலைமுறைகள் கடந்தும் எங்களோடு தொடரும் அன்பின் உறவு.உங்கள் வேர்களை நினைவில் கொள்ளுங்கள்...அடுத்த தலைமுறைக்கு இந்த பாரம்பரியத்தை அன்போடு ஒப்படையுங்கள்...ஏனெனில்...நீங்கள் எங்கள் சந்நிதியில் நிற்பது...உங்கள் முன்னோர்கள் நின்ற அதே அரவணைப்பில் மீண்டும் நிற்பதற்கே"},   ]; 
    const pills = dock.querySelectorAll('.pill');
    let current = 0;

    function showSegment(index) {
      display.style.opacity = '0';
      setTimeout(() => {
    /*     display.textContent = segments[index]; */
        display.textContent = currentLang === 'ta' ? segments[index].ta : segments[index].en;
        display.style.opacity = '1';
      }, 250);
      pills.forEach((p, i) => p.classList.toggle('active', i === index));
      current = index;
    }

    pills.forEach(p => {
      p.addEventListener('click', () => showSegment(parseInt(p.dataset.index, 10)));
    });

    showSegment(0);
    setInterval(() => showSegment((current + 1) % segments.length), 3000);
  })();

  (function initTempleCarousel() {
    const carousel = document.getElementById('templeCarousel');
    const progressWrap = document.getElementById('templeCarouselProgress');
    if (!carousel || !progressWrap) return;
    const slides = carousel.querySelectorAll('.carousel-slide');
    const slideDuration = 4500; // ms per photo
    let current = 0;

    slides.forEach(() => {
      const seg = document.createElement('div');
      seg.className = 'segment';
      seg.innerHTML = '<div class="fill"></div>';
      progressWrap.appendChild(seg);
    });
    const segments = progressWrap.querySelectorAll('.segment');

    function goToSlide(index) {
      slides.forEach((s, i) => s.classList.toggle('active', i === index));
      segments.forEach((seg, i) => {
        seg.classList.remove('active', 'completed');
        const fill = seg.querySelector('.fill');
        fill.style.transitionDuration = '0ms';
        fill.style.width = i < index ? '100%' : '0%';
        if (i < index) seg.classList.add('completed');
      });
      const activeSeg = segments[index];
      const activeFill = activeSeg.querySelector('.fill');
      activeSeg.classList.add('active');
      // Force reflow so the width transition actually plays from 0%
      void activeFill.offsetWidth;
      activeFill.style.transitionDuration = slideDuration + 'ms';
      activeFill.style.width = '100%';
      current = index;
    }

    goToSlide(0);
    setInterval(() => {
      goToSlide((current + 1) % slides.length);
    }, slideDuration);
  })();

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ---- Macham night mode ----
  const machamSection = document.getElementById('macham');
  const nightObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => machamSection.classList.toggle('night-mode', e.isIntersecting));
  }, { threshold: 0.4 });
  nightObserver.observe(machamSection);

  // ---- Nav scrollspy ----
  const navLinks = document.querySelectorAll('.site-nav .nav-links a, .mobile-dock a');
  const sections = ['temple', 'gallery', 'macham', 'festivals', 'support'].map(id => document.getElementById(id));
  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
      }
    });
  }, { threshold: 0.5 });
  sections.forEach(s => s && spyObserver.observe(s));

  // ---- Entrance deepam cleanup ----
  /* setTimeout(() => {
    const entrance = document.querySelector('.entrance-deepam');
    if (entrance) entrance.style.display = 'none';
  }, 2200); */

  // ---- PWA install banner ----
  let deferredPrompt;
  const pwaBanner = document.getElementById('pwaBanner');
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (!localStorage.getItem('pwaDismissed')) {
      setTimeout(() => pwaBanner.classList.add('show'), 4000);
    }
  });
  document.getElementById('pwaInstallBtn').addEventListener('click', () => {
    pwaBanner.classList.remove('show');
    if (deferredPrompt) deferredPrompt.prompt();
  });
  document.getElementById('pwaLaterBtn').addEventListener('click', () => {
    pwaBanner.classList.remove('show');
    localStorage.setItem('pwaDismissed', '1');
  });

  // ---- Service worker registration ----
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    });
  }

  // ---- Initial render ----
  applyTranslations();
   function renderDynamicContent() {
    festivalListRender();
    committeeGridRender();
    donarsRendered();
    marqueeTrackRender();
    villageRender();
   }
})();
