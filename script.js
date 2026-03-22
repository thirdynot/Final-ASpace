/* ============================================================
   ASPACE — script.js
   Matches: index.html with Font Awesome 6.5, showPage() routing,
   openDetail(), advanced filter panel, gender filter, amenities grid
   ============================================================ */

/* ==========================================================
   LISTINGS DATA
   ========================================================== */
const listings = [
  {
    id: 1,
    title: "Studio Apartment near Bicol University",
    type: "Apartment",
    city: "Daraga",
    address: "Purok 3, Brgy. Bagumbayan, Daraga, Albay",
    price: 6500,
    people: "Good for 1–2 persons",
    gender: null,
    desc: "Fully furnished studio unit with modern amenities. Walking distance to Bicol University. Perfect for students and young professionals.",
    amenities: ["Wi-Fi Included", "Air Conditioning", "Water Included", "CCTV / Security", "CR / Bathroom"],
    amenityKeys: ["Wi-Fi", "Air Conditioning", "Water", "CCTV", "CR / Bathroom"],
    landlord: "Maria Santos",
    contact: "+63 917 234 5678",
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80"
  },
  {
    id: 2,
    title: "Affordable Dormitory in Legazpi CBD",
    type: "Dormitory",
    city: "Legazpi City",
    address: "Brgy. Cabangan, Legazpi City, Albay",
    price: 3500,
    people: "Good for 1 person (bunk bed)",
    gender: "Mixed",
    desc: "Budget-friendly dormitory for students near the Legazpi CBD. Includes 3 meals a day. Safe and secure with 24-hour guard.",
    amenities: ["Meals Included", "24-hr Guard", "Laundry Area", "Water Included"],
    amenityKeys: ["Meals", "24-hr Guard", "Laundry", "Water"],
    landlord: "Juan Dela Cruz",
    contact: "+63 921 345 6789",
    img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80"
  },
  {
    id: 3,
    title: "Boarding House Room in Daraga",
    type: "Boarding House",
    city: "Daraga",
    address: "Brgy. San Francisco, Daraga, Albay",
    price: 4000,
    people: "Good for 1–2 persons",
    gender: "Female Only",
    desc: "Private room in a clean and secure boarding house. Near public transport and wet market. Exclusively for female tenants.",
    amenities: ["Kitchen Access", "Wi-Fi Included", "CR / Bathroom", "Electricity Included"],
    amenityKeys: ["Kitchen", "Wi-Fi", "CR / Bathroom", "Electricity"],
    landlord: "Ana Reyes",
    contact: "+63 935 456 7890",
    img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80"
  },
  {
    id: 4,
    title: "Bedspace for Rent near Legazpi Port",
    type: "Bedspace",
    city: "Legazpi City",
    address: "Brgy. Bitano, Legazpi City, Albay",
    price: 2000,
    people: "Good for 1 person",
    gender: "Male Only",
    desc: "Clean and affordable bedspace in a shared room. Near Legazpi Port and market area. For male tenants only.",
    amenities: ["Water Included", "Electric Fan", "Laundry Area"],
    amenityKeys: ["Water", "Laundry"],
    landlord: "Pedro Villanueva",
    contact: "+63 956 567 8901",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80"
  },
  {
    id: 5,
    title: "Modern 1BR Apartment in Ligao City",
    type: "Apartment",
    city: "Ligao",
    address: "Brgy. Poliqui, Ligao City, Albay",
    price: 7500,
    people: "Good for 1–3 persons",
    gender: null,
    desc: "Newly built 1-bedroom apartment with modern interior. Fully furnished with air-conditioning and free Wi-Fi. Pet friendly.",
    amenities: ["Air Conditioning", "Wi-Fi Included", "Parking Space", "Furnishings Included", "CR / Bathroom"],
    amenityKeys: ["Air Conditioning", "Wi-Fi", "Parking", "Furnishings", "CR / Bathroom"],
    landlord: "Carla Mendoza",
    contact: "+63 912 678 9012",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80"
  },
  {
    id: 6,
    title: "Student Dorm in Tabaco City",
    type: "Dormitory",
    city: "Tabaco",
    address: "Brgy. Banadero, Tabaco City, Albay",
    price: 3200,
    people: "Good for 1 person",
    gender: "Female Only",
    desc: "Safe student dormitory near Eastern Bicol State College. Strict 10PM curfew. Caters to female students only.",
    amenities: ["24-hr Guard", "CCTV / Security", "Water Included", "Laundry Area"],
    amenityKeys: ["24-hr Guard", "CCTV", "Water", "Laundry"],
    landlord: "Lourdes Beltran",
    contact: "+63 943 789 0123",
    img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80"
  },
  {
    id: 7,
    title: "Spacious Boarding House Room in Legazpi",
    type: "Boarding House",
    city: "Legazpi City",
    address: "Brgy. Gogon, Legazpi City, Albay",
    price: 5000,
    people: "Good for 2–3 persons",
    gender: "Mixed",
    desc: "Spacious shared room in a well-maintained boarding house. Near Aquinas University. All utilities included.",
    amenities: ["Electricity Included", "Water Included", "Wi-Fi Included", "Kitchen Access", "CR / Bathroom"],
    amenityKeys: ["Electricity", "Water", "Wi-Fi", "Kitchen", "CR / Bathroom"],
    landlord: "Roberto Garcia",
    contact: "+63 967 890 1234",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80"
  },
  {
    id: 8,
    title: "Affordable Bedspace in Daraga",
    type: "Bedspace",
    city: "Daraga",
    address: "Brgy. Bañadero, Daraga, Albay",
    price: 1800,
    people: "Good for 1 person",
    gender: "Mixed",
    desc: "Budget bedspace for students and workers. Shared room with lockers. Near public transport terminal.",
    amenities: ["Locker Provided", "Water Included", "Near Transport"],
    amenityKeys: ["Water"],
    landlord: "Fe Castillo",
    contact: "+63 905 901 2345",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80"
  },
  {
    id: 9,
    title: "2-Bedroom Apartment in Tabaco City",
    type: "Apartment",
    city: "Tabaco",
    address: "Brgy. San Lorenzo, Tabaco City, Albay",
    price: 10000,
    people: "Good for 3–5 persons",
    gender: null,
    desc: "Newly renovated 2-bedroom apartment for small families. Complete appliances, parking slot included. Near Tabaco City Hall.",
    amenities: ["Air Conditioning", "Wi-Fi Included", "Parking Space", "Furnishings Included", "Water Included"],
    amenityKeys: ["Air Conditioning", "Wi-Fi", "Parking", "Furnishings", "Water"],
    landlord: "Antonio Cruz",
    contact: "+63 918 012 3456",
    img: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?w=600&q=80"
  },
  {
    id: 10,
    title: "Female Dormitory in Sto. Domingo",
    type: "Dormitory",
    city: "Sto. Domingo",
    address: "Brgy. Quitinday, Sto. Domingo, Albay",
    price: 2800,
    people: "Good for 1 person (female only)",
    gender: "Female Only",
    desc: "Safe and well-maintained female dormitory in Sto. Domingo. Meals optional. Near Mount Mayon view area — scenic and peaceful.",
    amenities: ["24-hr Guard", "Meals Optional", "Water Included", "CCTV / Security"],
    amenityKeys: ["24-hr Guard", "Meals", "Water", "CCTV"],
    landlord: "Natividad Flores",
    contact: "+63 929 123 4567",
    img: "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=600&q=80"
  }
];

/* ── State ── */
let displayedCount   = 0;
const PAGE_SIZE      = 6;
let filteredListings = [...listings];
let currentFilter    = 'all';
let currentRole      = 'tenant';
let currentMode      = 'login';
let filterPanelOpen  = false;

/* ==========================================================
   INIT
   ========================================================== */
document.addEventListener('DOMContentLoaded', () => {
  renderListings(true);
  updateResultsBar('', '', [], '');
  initFilterPills();
  initNavbarScroll();
  initSearchEnter();
  initBackToTop();
  initOverviewActivity();
});

/* ==========================================================
   PAGE ROUTING
   ========================================================== */
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const t = document.getElementById('page-' + pageId);
  if (t) { t.classList.add('active'); window.scrollTo({ top: 0, behavior: 'smooth' }); }
  const nl = document.getElementById('navLinks');
  const hb = document.getElementById('hamburger');
  if (nl) nl.classList.remove('open');
  if (hb) hb.classList.remove('open');
}

function scrollToId(id) {
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

/* ==========================================================
   NAVBAR
   ========================================================== */
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
}

function initNavbarScroll() {
  const nb = document.getElementById('navbar');
  if (!nb) return;
  window.addEventListener('scroll', () => nb.classList.toggle('scrolled', window.scrollY > 10), { passive: true });
}

/* ==========================================================
   ADVANCED FILTER PANEL
   ========================================================== */
function toggleAdvancedFilters() {
  filterPanelOpen = !filterPanelOpen;
  const panel = document.getElementById('advFilterPanel');
  const btn   = document.getElementById('filterToggleBtn');
  if (panel) panel.classList.toggle('open', filterPanelOpen);
  if (btn)   btn.classList.toggle('active', filterPanelOpen);
}

function toggleGenderFilter() {
  const type  = document.getElementById('heroType').value;
  const group = document.getElementById('genderFilterGroup');
  if (!group) return;
  if (type === 'Apartment') {
    group.classList.add('hidden');
    const r = document.querySelector('input[name="genderPref"][value=""]');
    if (r) r.checked = true;
  } else {
    group.classList.remove('hidden');
  }
  applyFilters();
}

function getSelectedAmenities() {
  return Array.from(document.querySelectorAll('input[data-filter="amenity"]:checked'))
    .map(cb => cb.value);
}

function getSelectedGender() {
  const r = document.querySelector('input[name="genderPref"]:checked');
  return r ? r.value : '';
}

function getSelectedPrice() {
  const r = document.querySelector('input[name="pricePref"]:checked');
  return r ? r.value : '';
}

function updateFilterBadge() {
  const count = getSelectedAmenities().length
    + (getSelectedGender() ? 1 : 0)
    + (getSelectedPrice()  ? 1 : 0);
  const badge = document.getElementById('filterBadge');
  if (badge) {
    badge.textContent = count;
    badge.classList.toggle('hidden', count === 0);
  }
}

function clearAdvancedFilters() {
  document.querySelectorAll('input[data-filter="amenity"]').forEach(cb => cb.checked = false);
  const ag = document.querySelector('input[name="genderPref"][value=""]');
  if (ag) ag.checked = true;
  const ap = document.querySelector('input[name="pricePref"][value=""]');
  if (ap) ap.checked = true;
  updateFilterBadge();
  applyFilters();
  showToast('Advanced filters reset.', 'fa-rotate-left');
}

/* ==========================================================
   FILTER PILLS
   ========================================================== */
function initFilterPills() {
  document.querySelectorAll('.fp').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.fp').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.f;
      applyFilters();
    });
  });
}

/* ==========================================================
   APPLY FILTERS
   ========================================================== */
function applyFilters() {
  const query     = (document.getElementById('heroSearch')?.value || '').toLowerCase().trim();
  const type      = document.getElementById('heroType')?.value  || '';
  const city      = document.getElementById('heroCity')?.value  || '';
  const priceVal  = getSelectedPrice();
  const amenities = getSelectedAmenities();
  const gender    = getSelectedGender();

  let priceMin = 0, priceMax = Infinity;
  if (priceVal) {
    const [lo, hi] = priceVal.split('-').map(Number);
    priceMin = lo; priceMax = hi;
  }

  filteredListings = listings.filter(l => {
    const matchFilter  = currentFilter === 'all' || l.type === currentFilter;
    const matchType    = !type || l.type === type;
    const matchCity    = !city || l.city === city;
    const matchPrice   = l.price >= priceMin && l.price <= priceMax;
    const matchQuery   = !query
      || l.title.toLowerCase().includes(query)
      || l.city.toLowerCase().includes(query)
      || l.desc.toLowerCase().includes(query)
      || l.address.toLowerCase().includes(query);
    const matchAmenity = amenities.length === 0 || amenities.every(a =>
      l.amenityKeys.some(k => k.toLowerCase().includes(a.toLowerCase()))
    );
    let matchGender = true;
    if (gender && l.type !== 'Apartment') {
      matchGender = l.gender === gender;
    }
    return matchFilter && matchType && matchCity && matchPrice && matchQuery && matchAmenity && matchGender;
  });

  renderListings(true);
  updateResultsBar(query, city, amenities, gender);
  updateFilterBadge();
}

function updateResultsBar(query, city, amenities, gender) {
  const countEl = document.getElementById('resultsCount');
  const clearEl = document.getElementById('resultsClear');
  if (!countEl) return;
  const n = filteredListings.length;
  const total = listings.length;
  const price = getSelectedPrice();
  const type  = document.getElementById('heroType')?.value || '';
  const hasFilter = query || type || city || price
    || (amenities && amenities.length) || gender || currentFilter !== 'all';
  countEl.innerHTML = `<i class="fa-solid fa-layer-group"></i> Showing <strong>${n}</strong> of ${total} listing${total !== 1 ? 's' : ''}`;
  if (hasFilter) {
    const parts = [];
    if (query)   parts.push(`"${query}"`);
    if (type)    parts.push(type);
    if (city)    parts.push(city);
    if (price)   parts.push('price filtered');
    if (amenities && amenities.length) parts.push(`${amenities.length} amenity filter${amenities.length > 1 ? 's' : ''}`);
    if (gender)  parts.push(gender);
    if (currentFilter !== 'all') parts.push(currentFilter);
    countEl.innerHTML += ` <span style="opacity:.7;font-weight:400">— ${parts.join(', ')}</span>`;
    if (clearEl) clearEl.classList.remove('hidden');
  } else {
    if (clearEl) clearEl.classList.add('hidden');
  }
}

function clearSearch() {
  ['heroSearch', 'heroType', 'heroCity'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  currentFilter = 'all';
  document.querySelectorAll('.fp').forEach(b => b.classList.remove('active'));
  const allPill = document.querySelector('.fp[data-f="all"]');
  if (allPill) allPill.classList.add('active');
  clearAdvancedFilters();
  const gg = document.getElementById('genderFilterGroup');
  if (gg) gg.classList.remove('hidden');
  filteredListings = [...listings];
  renderListings(true);
  updateResultsBar('', '', [], '');
  showToast('All filters cleared.', 'fa-xmark');
}

/* ==========================================================
   SEARCH
   ========================================================== */
function doHeroSearch() {
  applyFilters();
  showPage('home');
  scrollToId('listings');
  const q = document.getElementById('heroSearch').value.trim();
  const parts = [q, document.getElementById('heroType').value, document.getElementById('heroCity').value].filter(Boolean);
  showToast(parts.length ? `Searching: ${parts.join(' · ')}` : 'Showing all listings', 'fa-magnifying-glass');
}

function setCity(city) {
  const sel = document.getElementById('heroCity');
  if (sel) sel.value = city;
  applyFilters();
  scrollToId('listings');
  showToast(`Showing listings in ${city}`, 'fa-location-dot');
}

function initSearchEnter() {
  const si = document.getElementById('heroSearch');
  if (si) si.addEventListener('keydown', e => { if (e.key === 'Enter') doHeroSearch(); });
}

/* ==========================================================
   RENDER LISTINGS
   ========================================================== */
function renderListings(reset = false) {
  const grid = document.getElementById('listingsGrid');
  const btn  = document.getElementById('loadMoreBtn');
  if (!grid) return;
  if (reset) { grid.innerHTML = ''; displayedCount = 0; }

  const slice = filteredListings.slice(displayedCount, displayedCount + PAGE_SIZE);
  slice.forEach((l, i) => grid.appendChild(createCard(l, i)));
  displayedCount += slice.length;
  if (btn) btn.style.display = displayedCount >= filteredListings.length ? 'none' : 'inline-flex';

  if (filteredListings.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text-muted)">
      <i class="fa-solid fa-magnifying-glass" style="font-size:2.5rem;display:block;margin-bottom:.75rem;opacity:.3;color:var(--blue-light)"></i>
      <p style="font-size:.95rem;font-weight:600;margin-bottom:.35rem">No listings found</p>
      <p style="font-size:.82rem;font-weight:300">Try adjusting your search or filters.</p>
    </div>`;
  }
}

function loadMore() { renderListings(false); }

/* Amenity icon map */
const amenityIconMap = {
  'Wi-Fi': 'fa-wifi', 'Air Conditioning': 'fa-snowflake', 'Water': 'fa-droplet',
  'CCTV': 'fa-shield-halved', 'CR / Bathroom': 'fa-shower', 'Parking': 'fa-square-parking',
  'Kitchen': 'fa-kitchen-set', 'Laundry': 'fa-soap', 'Meals': 'fa-utensils',
  'Electricity': 'fa-bolt', '24-hr Guard': 'fa-user-shield', 'Furnishings': 'fa-couch'
};

function amenityIcon(keyword) {
  for (const [key, ico] of Object.entries(amenityIconMap)) {
    if (keyword.includes(key)) return ico;
  }
  return 'fa-circle-check';
}

function genderBadgeHTML(gender, type) {
  if (!gender || type === 'Apartment') return '';
  const map = {
    'Male Only':   ['gender-male',   'fa-mars',       'Male Only'],
    'Female Only': ['gender-female', 'fa-venus',      'Female Only'],
    'Mixed':       ['gender-mixed',  'fa-venus-mars', 'Mixed']
  };
  const d = map[gender]; if (!d) return '';
  return `<span class="lc-gender ${d[0]}"><i class="fa-solid ${d[1]}"></i> ${d[2]}</span>`;
}

function createCard(l, animIndex) {
  const badgeClass = 'badge-' + l.type.replace(/ /g, '-');
  const card = document.createElement('article');
  card.className = 'l-card';
  card.style.animationDelay = `${animIndex * 80}ms`;

  const topAmenities = l.amenityKeys.slice(0, 3).map(k => {
    const ico = amenityIcon(k);
    return `<span class="lc-amenity-pill"><i class="fa-solid ${ico}"></i>${k}</span>`;
  }).join('');

  card.innerHTML = `
    <div class="lc-img">
      <img src="${l.img}" alt="${l.title}" loading="lazy"/>
      <span class="lc-type ${badgeClass}">${l.type}</span>
      ${genderBadgeHTML(l.gender, l.type)}
      <button class="lc-fav" onclick="toggleFav(this,event)" aria-label="Save">
        <i class="fa-regular fa-heart"></i>
      </button>
    </div>
    <div class="lc-body">
      <div class="lc-city"><i class="fa-solid fa-location-dot"></i> ${l.city}, Albay</div>
      <h3 class="lc-title">${l.title}</h3>
      <p class="lc-people"><i class="fa-solid fa-user-group" style="font-size:.72rem;color:var(--blue-light);margin-right:.25rem"></i>${l.people}</p>
      <p class="lc-desc">${l.desc}</p>
      ${topAmenities ? `<div class="lc-amenity-pills">${topAmenities}</div>` : ''}
      <div class="lc-footer">
        <div>
          <div class="lc-price">&#8369;${l.price.toLocaleString()}<span>/month</span></div>
          <div class="lc-landlord"><i class="fa-regular fa-circle-user" style="font-size:.78rem;margin-right:.2rem"></i><strong>${l.landlord}</strong></div>
        </div>
        <button class="btn-view" onclick="openDetail(${l.id})">View</button>
      </div>
    </div>`;
  return card;
}

/* ==========================================================
   FAVOURITE TOGGLE
   ========================================================== */
function toggleFav(btn, e) {
  e.stopPropagation();
  const active = btn.classList.toggle('active');
  const icon = btn.querySelector('i');
  if (icon) icon.className = active ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
  showToast(active ? 'Saved to favourites!' : 'Removed from favourites.', active ? 'fa-heart' : 'fa-heart-crack');
}

/* ==========================================================
   DETAIL MODAL  ← THIS IS THE KEY FUNCTION FOR THE VIEW BUTTON
   ========================================================== */
function openDetail(id) {
  const l = listings.find(x => x.id === id);
  if (!l) return;

  /* Image */
  const imgEl = document.getElementById('dm-img');
  if (imgEl) { imgEl.src = l.img; imgEl.alt = l.title; }

  /* Type badge */
  const badgeEl = document.getElementById('dm-badge');
  if (badgeEl) badgeEl.textContent = l.type;

  /* City */
  const cityEl = document.getElementById('dm-city');
  if (cityEl) cityEl.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${l.city}, Albay`;

  /* Gender label — only for non-Apartment with a gender set */
  const gEl = document.getElementById('dm-gender');
  if (gEl) {
    gEl.className = 'dm-gender';
    if (l.gender && l.type !== 'Apartment') {
      const gMap = {
        'Male Only':   ['male-only',   'fa-mars',       'Male Only'],
        'Female Only': ['female-only', 'fa-venus',      'Female Only'],
        'Mixed':       ['mixed',       'fa-venus-mars', 'Mixed']
      };
      const d = gMap[l.gender];
      if (d) {
        gEl.classList.add(d[0]);
        gEl.innerHTML = `<i class="fa-solid ${d[1]}"></i> ${d[2]}`;
        gEl.classList.remove('hidden');
      } else {
        gEl.classList.add('hidden');
      }
    } else {
      gEl.classList.add('hidden');
    }
  }

  /* Title */
  const titleEl = document.getElementById('dm-title');
  if (titleEl) titleEl.textContent = l.title;

  /* Price + occupancy */
  const priceEl = document.getElementById('dm-price');
  if (priceEl) priceEl.innerHTML = `&#8369;${l.price.toLocaleString()} / month`;

  const occupEl = document.getElementById('dm-occupancy');
  if (occupEl) occupEl.innerHTML = `<i class="fa-solid fa-user-group"></i> ${l.people}`;

  /* Description */
  const descEl = document.getElementById('dm-desc');
  if (descEl) descEl.textContent = l.desc;

  /* Amenities grid */
  const amenEl = document.getElementById('dm-amenities');
  if (amenEl) {
    amenEl.innerHTML = l.amenities
      .map(a => `<span class="dm-amenity-tag"><i class="fa-solid ${amenityIcon(a)}"></i>${a}</span>`)
      .join('');
  }

  /* Landlord details */
  const llEl = document.getElementById('dm-landlord');
  if (llEl) {
    llEl.innerHTML = `
      <strong><i class="fa-regular fa-circle-user"></i> ${l.landlord}</strong>
      <i class="fa-solid fa-phone"></i> ${l.contact}<br/>
      <i class="fa-solid fa-location-dot"></i> ${l.address}`;
  }

  /* Reset Save button */
  const saveBtn = document.getElementById('dmSaveBtn');
  if (saveBtn) {
    saveBtn.classList.remove('saved');
    saveBtn.innerHTML = '<i class="fa-regular fa-heart"></i> Save Listing';
  }

  openModal('detailModal');
}

/* ==========================================================
   AUTH MODAL
   ========================================================== */
function setRole(role) {
  currentRole = role;
  document.getElementById('roleTabTenant').classList.toggle('active', role === 'tenant');
  document.getElementById('roleTabLandlord').classList.toggle('active', role === 'landlord');
  const lt = document.getElementById('loginTitle');
  if (lt) lt.textContent = role === 'tenant' ? 'Tenant Login' : 'Landlord Login';
  setMode(currentMode);
}

function setMode(mode) {
  currentMode = mode;
  document.getElementById('modeTabLogin').classList.toggle('active', mode === 'login');
  document.getElementById('modeTabSignup').classList.toggle('active', mode === 'signup');
  ['form-login', 'form-tenant-signup', 'form-landlord-signup']
    .forEach(id => document.getElementById(id).classList.add('hidden'));
  if (mode === 'login') {
    document.getElementById('form-login').classList.remove('hidden');
  } else {
    const fId = currentRole === 'tenant' ? 'form-tenant-signup' : 'form-landlord-signup';
    document.getElementById(fId).classList.remove('hidden');
  }
}

function handleLogin(e) {
  e.preventDefault();
  const form  = e.target;
  const email = form.querySelector('input[type=email]').value.trim();
  const pw    = form.querySelector('input[type=password]').value;
  if (!email || !pw) { showToast('Please fill in all fields.', 'fa-triangle-exclamation'); return; }
  if (pw.length < 6)  { showToast('Password must be at least 6 characters.', 'fa-triangle-exclamation'); return; }
  closeModal('loginModal');
  showToast(`Logged in as ${currentRole}!`, 'fa-circle-check');
  if (currentRole === 'landlord') setTimeout(() => showPage('dashboard'), 400);
}

function handleSignup(e, role) {
  e.preventDefault();
  const passwords = e.target.querySelectorAll('input[type=password]');
  if (passwords.length >= 2 && passwords[0].value !== passwords[1].value) {
    showToast('Passwords do not match.', 'fa-triangle-exclamation'); return;
  }
  if (passwords[0].value.length < 8) {
    showToast('Password must be at least 8 characters.', 'fa-triangle-exclamation'); return;
  }
  closeModal('loginModal');
  showToast('Account created! Welcome to ASpace.', 'fa-circle-check');
  if (role === 'landlord') setTimeout(() => showPage('dashboard'), 400);
}

function toggleDetailFav(btn) {
  const active = btn.classList.toggle('saved');
  btn.innerHTML = active
    ? `<i class="fa-solid fa-heart"></i> Saved`
    : `<i class="fa-regular fa-heart"></i> Save Listing`;
  showToast(active ? 'Saved to favourites!' : 'Removed from favourites.', active ? 'fa-heart' : 'fa-heart-crack');
}

function handleForgotPassword(e) {
  e.preventDefault();
  const email = document.getElementById('forgotEmail').value.trim();
  if (!email) { showToast('Please enter your email.', 'fa-triangle-exclamation'); return; }
  closeModal('forgotModal');
  showToast(`Reset link sent to ${email}`, 'fa-envelope');
}

/* ==========================================================
   DASHBOARD PANELS
   ========================================================== */
function openPanel(panelId, btn) {
  document.querySelectorAll('.d-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.dn-btn').forEach(b => b.classList.remove('active'));
  const panel = document.getElementById('panel-' + panelId);
  if (panel) panel.classList.add('active');
  if (btn)   btn.classList.add('active');
}

function submitListing(e) {
  e.preventDefault();
  showToast('Listing submitted for review! Live within 24 hours.', 'fa-circle-check');
  e.target.reset();
  document.getElementById('photoRow').innerHTML = '';
}

function previewPhotos(e) {
  const row = document.getElementById('photoRow');
  Array.from(e.target.files).slice(0, 10).forEach(file => {
    const reader = new FileReader();
    reader.onload = ev => {
      const img = document.createElement('img');
      img.src = ev.target.result; img.className = 'photo-thumb';
      row.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
  showToast(`${Math.min(e.target.files.length, 10)} photo(s) selected.`, 'fa-camera');
}

/* ==========================================================
   MODAL HELPERS
   ========================================================== */
function openModal(id)  {
  const el = document.getElementById(id);
  if (el) { el.classList.add('open'); document.body.style.overflow = 'hidden'; }
}
function closeModal(id) {
  const el = document.getElementById(id);
  if (el) { el.classList.remove('open'); document.body.style.overflow = ''; }
}
function handleOverlayClick(e, id) {
  if (e.target === e.currentTarget) closeModal(id);
}
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  document.querySelectorAll('.modal-overlay.open').forEach(m => {
    m.classList.remove('open'); document.body.style.overflow = '';
  });
});

/* ==========================================================
   TOAST
   ========================================================== */
let toastTimer;
function showToast(msg, iconName = 'circle-info', duration = 3200) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.innerHTML = `<i class="fa-solid fa-${iconName}"></i><span>${msg}</span>`;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), duration);
}

/* ==========================================================
   BACK TO TOP
   ========================================================== */
function initBackToTop() {
  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.body.appendChild(btn);
  window.addEventListener('scroll', () =>
    btn.classList.toggle('visible', window.scrollY > 400), { passive: true });
}

/* ==========================================================
   OVERVIEW ACTIVITY FEED
   ========================================================== */
function initOverviewActivity() {
  const panel = document.getElementById('panel-overview');
  if (!panel) return;
  const feed = [
    { icon: 'fa-user',               type: 'green',  text: '<strong>Maria Santos</strong> inquired about Studio Apt. near BU',       time: '2h ago' },
    { icon: 'fa-calendar-check',     type: 'blue',   text: 'Visit confirmed with <strong>Pedro Villanueva</strong> on Dec 23',       time: '5h ago' },
    { icon: 'fa-house-circle-check', type: 'orange', text: 'Your listing <strong>"Boarding House Daraga"</strong> is under review',  time: '1d ago' },
    { icon: 'fa-circle-check',       type: 'green',  text: 'Listing <strong>"Affordable Dorm Legazpi"</strong> approved and live',   time: '2d ago' },
    { icon: 'fa-envelope',           type: 'amber',  text: '<strong>Ana Reyes</strong> sent a message about bedspace availability',  time: '3d ago' }
  ];
  const colors = { green: '#dcfce7', blue: 'var(--blue-pale)', orange: '#FBE9E7', amber: '#fef9c3' };
  const texts  = { green: '#16a34a', blue: 'var(--blue)',      orange: 'var(--orange)', amber: '#b45309' };
  panel.innerHTML += `
    <div style="margin-top:1.5rem">
      <h4 style="font-size:.92rem;font-weight:700;color:var(--text);margin-bottom:.75rem;display:flex;align-items:center;gap:.5rem">
        <i class="fa-solid fa-clock-rotate-left" style="color:var(--blue);font-size:.9rem"></i> Recent Activity
      </h4>
      ${feed.map(f => `
        <div style="display:flex;align-items:flex-start;gap:.85rem;padding:.85rem 0;border-bottom:1px solid var(--gray-100)">
          <div style="width:32px;height:32px;border-radius:50%;background:${colors[f.type]};color:${texts[f.type]};display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.85rem">
            <i class="fa-solid ${f.icon}"></i>
          </div>
          <div style="flex:1;font-size:.85rem;color:var(--text)">${f.text}</div>
          <div style="font-size:.72rem;color:var(--gray-400);white-space:nowrap;flex-shrink:0">${f.time}</div>
        </div>`).join('')}
    </div>`;
}
/* ── Document / ID Upload Preview ── */
function previewUpload(input, previewId) {
  const container = document.getElementById(previewId);
  if (!container) return;
  container.innerHTML = '';

  const file = input.files[0];
  if (!file) return;

  /* File size check — 5MB max */
  if (file.size > 5 * 1024 * 1024) {
    showToast('File too large. Maximum size is 5MB.', 'fa-triangle-exclamation');
    input.value = '';
    return;
  }

  /* Image files — show thumbnail */
  if (file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = ev => {
      const img = document.createElement('img');
      img.src = ev.target.result;
      img.title = file.name;
      container.appendChild(img);
    };
    reader.readAsDataURL(file);
  }

  /* PDF files — show filename pill */
  const pill = document.createElement('div');
  pill.className = 'prev-item';
  pill.innerHTML = `<i class="fa-solid fa-file-pdf"></i> ${file.name}`;
  container.appendChild(pill);

  showToast(`"${file.name}" uploaded successfully.`, 'fa-circle-check');
}
/* ==========================================================
   SCROLL REVEAL
   ========================================================== */
(function initScrollReveal() {
  const sel = '.l-card,.why-card,.step-item,.hiw-step,.ls-item,.city-card,.legal-block,.help-card,.mv-card,.tcard';
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const siblings = Array.from(entry.target.parentNode.children).filter(c => c.matches && c.matches(sel));
      const idx = siblings.indexOf(entry.target);
      setTimeout(() => {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
      }, Math.min(idx * 60, 360));
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  function revealAll() {
    document.querySelectorAll(sel).forEach(el => {
      if (el.style.opacity === '1') return;
      el.style.opacity    = '0';
      el.style.transform  = 'translateY(24px)';
      el.style.transition = 'opacity .5s ease, transform .5s ease';
      obs.observe(el);
    });
  }
  document.addEventListener('DOMContentLoaded', revealAll);
  const _orig = window.showPage;
  window.showPage = function(id) { if (_orig) _orig(id); setTimeout(revealAll, 80); };
})();
