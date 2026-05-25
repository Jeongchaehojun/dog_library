/* ===== Dog Encyclopedia App ===== */
(function () {
  'use strict';

  // --- i18n Dictionary ---
  const i18n = {
    ko: {
      title: '멍무위키',
      badge: '188종',
      heroSubtitle: '세상의 모든 강아지를 만나보세요',
      searchPlaceholder: '견종 이름을 검색하세요 (한국어 또는 영어)',
      searchClearLabel: '검색어 지우기',
      searchCount: (n) => `${n}개의 견종을 찾았습니다`,
      totalBreedsBadge: (n) => `총 ${n}종`,
      statAll: '전체 견종',
      statSporting: '스포팅', statHound: '하운드', statWorking: '워킹',
      statTerrier: '테리어', statToy: '토이', statHerding: '허딩', statNonSporting: '논스포팅',
      filterGroup: '그룹', filterSize: '크기', filterSort: '정렬',
      chipAll: '전체',
      chipSporting: '🏃 스포팅', chipHound: '🐕 하운드', chipWorking: '💪 워킹',
      chipTerrier: '⚡ 테리어', chipToy: '🧸 토이', chipHerding: '🐑 허딩', chipNonSporting: '🌟 논스포팅',
      descAll: '등록된 모든 견종을 모아봅니다.',
      descSporting: '사냥을 돕는 영리하고 활기찬 조렵견 그룹 (리트리버, 코커스패니얼 등)',
      descHound: '시각이나 후각으로 사냥감을 쫓는 끈기 있고 날렵한 수렵견 그룹 (비글, 닥스훈트 등)',
      descWorking: '경비, 구조, 썰매 끌기 등 사람의 일을 돕는 든든하고 힘센 작업견 그룹 (허스키, 도베르만 등)',
      descTerrier: '땅속 작은 동물을 잡는 용맹하고 활발한 소형 사냥견 그룹 (요크셔테리어, 슈나우저 등)',
      descToy: '사람과 반려 목적으로 개량된 작고 사랑스러운 애완견 그룹 (말티즈, 푸들, 포메라니안 등)',
      descHerding: '가축을 몰고 지키는 지능적이고 훈련이 잘 되는 목양견 그룹 (콜리, 웰시코기 등)',
      descNonSporting: '사냥이나 작업 외 다양한 목적의 개성 넘치는 반려견 그룹 (불독, 비숑프리제, 시바 등)',
      chipSmall: '🐕 소형', chipMedium: '🐕‍🦺 중형', chipLarge: '🦮 대형', chipGiant: '🐘 초대형',
      sortNameKo: '이름순 (한국어)', sortNameEn: '이름순 (영어)', sortSize: '크기순',
      noResultsText: '검색 결과가 없습니다', noResultsSub: '다른 검색어를 시도해보세요!',
      lifespanUnit: '년',
      groupLabels: { sporting: '스포팅', hound: '하운드', working: '워킹', terrier: '테리어', toy: '토이', herding: '허딩', 'non-sporting': '논스포팅' },
      sizeLabels: { small: '소형', medium: '중형', large: '대형', giant: '초대형' },
      modalOrigin: '원산지', modalHeight: '키', modalWeight: '몸무게', modalLifespan: '수명',
      modalIntro: '📝 소개', modalAnalysis: '📊 특성 분석', modalTemperament: '🎭 성격', modalFunFacts: '🎉 재미있는 사실',
      ratingExercise: '운동량', ratingGrooming: '그루밍', ratingTrainability: '훈련성',
      ratingFriendliness: '친화력', ratingEnergy: '에너지',
      footer: '🐾 강아지 백과사전 — 세상의 모든 강아지를 사랑하는 사람들을 위해',
      footerSub: '이미지 제공: ',
      langBtn: 'EN',
      themeLabel: '다크 모드 전환',
      backToTopLabel: '맨 위로',
      navMyDog: '우리 강아지',
      navGuide: '케어 가이드',
      navCare: '키울 때 주의사항',
      navCareDesc: '일상 케어 필수 가이드',
      navVet: '병원 체크리스트',
      navVetDesc: '내원 전 확인 포인트',
      navFood: '음식 가이드',
      navFoodDesc: '먹어도 되는 것 vs 위험 식품',
      mydogTitle: '우리 강아지 건강 백과',
      mydogSub: '키우시는 강아지의 품종을 입력하고 맞춤 건강 및 행동 조언을 받으세요',
      mydogInputPlaceholder: '강아지 종을 입력하세요 (예: 포메라니안, 말티즈...)',
      mydogQuickRegister: '⚡ 자주 키우는 강아지 종 빠른 등록',
      mydogChangeBreed: '🔄 견종 변경하기',
      mydogProfileTitle: '우리 아이 맞춤 가이드',
      mydogOrigin: '원산지',
      mydogLifespan: '평균 수명',
      mydogSize: '체급',
      mydogVetTitle: '🏥 병원 방문 시 중요 검진 포인트',
      mydogSafetyTitle: '⚠️ 안심하세요, 질병이 아닙니다!',
      mydogTraitsTitle: '📊 우리 아이 품종 특성 수치',
      navMbti: '멍BTI',
      mbtiTitle: '멍BTI 성격 검사',
      mbtiSub: '주인 눈에 비친 우리 강아지, 어떤 성격일까요?',
      mbtiModeTitle: '검사 모드를 선택하세요',
      mbtiModeSub: '주인 입장에서 강아지의 행동과 성격을 떠올리며 답해주세요',
      mbtiBreedSelectTitle: '🐕 우리 강아지 종은?',
      mbtiBreedUnknown: '🤷 종을 모르겠어요',
      mbtiModeSpeedTitle: '⚡ 스피드 모드',
      mbtiModeSpeedDesc: '10문항 · 약 2분',
      mbtiModeDeepTitle: '🔬 심층 분석',
      mbtiModeDeepDesc: '50문항 · 약 8분',
      mbtiRetry: '🔄 다시 검사하기',
      mbtiShare: '📤 결과 공유하기',
      mbtiResultRare: '🏆 해당 품종에서 드문 성격!',
      mbtiResultCommon: '⭐ 해당 품종에서 흔한 성격',
      mbtiResultUnknown: '🐾 품종 미선택'
    },
    en: {
      title: 'Dog Encyclopedia',
      badge: '188 Breeds',
      heroSubtitle: 'Discover every dog breed in the world',
      searchPlaceholder: 'Search breed name (Korean or English)',
      searchClearLabel: 'Clear search',
      searchCount: (n) => `${n} breeds found`,
      totalBreedsBadge: (n) => `Total ${n}`,
      statAll: 'All Breeds',
      statSporting: 'Sporting', statHound: 'Hound', statWorking: 'Working',
      statTerrier: 'Terrier', statToy: 'Toy', statHerding: 'Herding', statNonSporting: 'Non‑Sporting',
      filterGroup: 'GROUP', filterSize: 'SIZE', filterSort: 'SORT',
      chipAll: 'All',
      chipSporting: '🏃 Sporting', chipHound: '🐕 Hound', chipWorking: '💪 Working',
      chipTerrier: '⚡ Terrier', chipToy: '🧸 Toy', chipHerding: '🐑 Herding', chipNonSporting: '🌟 Non‑Sporting',
      descAll: 'View all registered dog breeds.',
      descSporting: 'Smart and active bird dogs (Retrievers, Spaniels, etc.)',
      descHound: 'Tenacious hunters tracking by sight or scent (Beagles, Dachshunds, etc.)',
      descWorking: 'Strong dogs helping with guard, rescue, or sled work (Husky, Doberman, etc.)',
      descTerrier: 'Brave and lively small hunters of burrowing prey (Yorkies, Schnauzers, etc.)',
      descToy: 'Small and adorable companion lapdogs (Maltese, Poodles, Pom, etc.)',
      descHerding: 'Intelligent and trainable sheep and cattle herders (Collie, Welsh Corgi, etc.)',
      descNonSporting: 'Diverse companion dogs with unique characters (Bulldogs, Bichon, Shiba, etc.)',
      chipSmall: '🐕 Small', chipMedium: '🐕‍🦺 Medium', chipLarge: '🦮 Large', chipGiant: '🐘 Giant',
      sortNameKo: 'Name (Korean)', sortNameEn: 'Name (English)', sortSize: 'Size',
      noResultsText: 'No breeds found', noResultsSub: 'Try a different search term!',
      lifespanUnit: 'yrs',
      groupLabels: { sporting: 'Sporting', hound: 'Hound', working: 'Working', terrier: 'Terrier', toy: 'Toy', herding: 'Herding', 'non-sporting': 'Non‑Sporting' },
      sizeLabels: { small: 'Small', medium: 'Medium', large: 'Large', giant: 'Giant' },
      modalOrigin: 'Origin', modalHeight: 'Height', modalWeight: 'Weight', modalLifespan: 'Lifespan',
      modalIntro: '📝 Introduction', modalAnalysis: '📊 Trait Analysis', modalTemperament: '🎭 Temperament', modalFunFacts: '🎉 Fun Facts',
      ratingExercise: 'Exercise', ratingGrooming: 'Grooming', ratingTrainability: 'Trainability',
      ratingFriendliness: 'Friendliness', ratingEnergy: 'Energy',
      footer: '🐾 Dog Encyclopedia — For everyone who loves dogs',
      footerSub: 'Images by ',
      langBtn: '한',
      themeLabel: 'Toggle dark mode',
      backToTopLabel: 'Back to top',
      navMyDog: 'My Dog',
      navGuide: 'Care Guide',
      navCare: 'Care Tips',
      navCareDesc: 'Essential daily care guide',
      navVet: 'Vet Checklist',
      navVetDesc: 'Pre-visit checkpoints',
      navFood: 'Food Guide',
      navFoodDesc: 'Safe vs dangerous foods',
      mydogTitle: 'My Dog Health Guide',
      mydogSub: 'Register your dog breed to get customized health & behavioral advice',
      mydogInputPlaceholder: "Type your dog's breed (e.g. Pomeranian, Maltese...)",
      mydogQuickRegister: '⚡ Quick Select Popular Breeds',
      mydogChangeBreed: '🔄 Change Breed',
      mydogProfileTitle: 'Customized Guide',
      mydogOrigin: 'Origin',
      mydogLifespan: 'Average Lifespan',
      mydogSize: 'Size',
      mydogVetTitle: '🏥 Crucial Vet Checkpoints',
      mydogSafetyTitle: '⚠️ Rest Assured, Not an Illness!',
      mydogTraitsTitle: '📊 Breed Trait Analysis',
      navMbti: 'DogBTI',
      mbtiTitle: 'DogBTI Personality Test',
      mbtiSub: 'What personality type is your dog? Answer as the owner!',
      mbtiModeTitle: 'Choose Test Mode',
      mbtiModeSub: 'Think of your dog’s typical behavior and answer from the owner’s perspective',
      mbtiBreedSelectTitle: '🐕 What breed is your dog?',
      mbtiBreedUnknown: '🤷 I don’t know the breed',
      mbtiModeSpeedTitle: '⚡ Speed Mode',
      mbtiModeSpeedDesc: '10 questions · ~2 min',
      mbtiModeDeepTitle: '🔬 Deep Analysis',
      mbtiModeDeepDesc: '50 questions · ~8 min',
      mbtiRetry: '🔄 Test Again',
      mbtiShare: '📤 Share Result',
      mbtiResultRare: '🏆 Rare personality for this breed!',
      mbtiResultCommon: '⭐ Common personality for this breed',
      mbtiResultUnknown: '🐾 No breed selected'
    }
  };

  // --- State ---
  let currentLang = localStorage.getItem('dogEncLang') || 'ko';
  let currentGroup = 'all';
  let currentSize = 'all';
  let currentSort = 'nameKo';
  let searchQuery = '';
  let imageCache = {};

  // --- Helpers ---
  const t = (key) => i18n[currentLang][key];
  const $ = id => document.getElementById(id);

  // --- DOM refs ---
  const searchInput = $('searchInput');
  const searchClear = $('searchClear');
  const searchCount = $('searchCount');
  const cardGrid = $('cardGrid');
  const noResults = $('noResults');
  const modalOverlay = $('modalOverlay');
  const modalContent = $('modalContent');
  const modalClose = $('modalClose');
  const backToTop = $('backToTop');
  const themeToggle = $('themeToggle');
  const langToggle = $('langToggle');
  const groupFilter = $('groupFilter');
  const sizeFilter = $('sizeFilter');
  const sortSelect = $('sortSelect');

  const sizeOrder = { small: 1, medium: 2, large: 3, giant: 4 };

  // --- Init ---
  function init() {
    initTheme();
    applyLanguage();
    updateStats();
    render();
    bindEvents();
    initDragScroll();
    bindNavigation();
    initTrending();
    bindCelebCards();
    initMyDog();
    initMbti();
  }

  // --- Theme ---
  function initTheme() {
    const saved = localStorage.getItem('dogEncTheme');
    const theme = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  }
  function toggleTheme() {
    const curr = document.documentElement.getAttribute('data-theme');
    const next = curr === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('dogEncTheme', next);
  }

  // --- Language ---
  function toggleLang() {
    currentLang = currentLang === 'ko' ? 'en' : 'ko';
    localStorage.setItem('dogEncLang', currentLang);
    applyLanguage();
    updateStats();
    render();
  }

  function applyLanguage() {
    document.documentElement.setAttribute('lang', currentLang);

    // Header
    document.querySelector('.logo-text').textContent = t('title');
    document.querySelector('.logo-badge').textContent = t('badge');
    langToggle.querySelector('.lang-label').textContent = t('langBtn');
    langToggle.classList.toggle('active-en', currentLang === 'en');
    themeToggle.setAttribute('aria-label', t('themeLabel'));
    backToTop.setAttribute('aria-label', t('backToTopLabel'));

    const heroSub = document.querySelector('.hero-subtitle');
    if (heroSub) heroSub.textContent = t('heroSubtitle');
    searchInput.setAttribute('placeholder', t('searchPlaceholder'));
    searchClear.setAttribute('aria-label', t('searchClearLabel'));

    // Filter labels
    const filterLabels = document.querySelectorAll('.filter-label');
    const filterKeys = ['filterGroup', 'filterSize', 'filterSort'];
    filterLabels.forEach((el, i) => { if (filterKeys[i]) el.textContent = t(filterKeys[i]); });

    // Total count badge
    const totalCountBadge = $('totalCountBadge');
    if (totalCountBadge) {
      totalCountBadge.textContent = t('totalBreedsBadge')(DOG_BREEDS.length);
    }

    // Group chips
    const groupChips = groupFilter.querySelectorAll('.chip');
    const groupChipKeys = ['chipAll', 'chipSporting', 'chipHound', 'chipWorking', 'chipTerrier', 'chipToy', 'chipHerding', 'chipNonSporting'];
    const groupDescKeys = ['descAll', 'descSporting', 'descHound', 'descWorking', 'descTerrier', 'descToy', 'descHerding', 'descNonSporting'];
    groupChips.forEach((el, i) => {
      const mainEl = el.querySelector('.chip-main');
      const descEl = el.querySelector('.chip-desc');
      if (mainEl && groupChipKeys[i]) mainEl.textContent = t(groupChipKeys[i]);
      if (descEl && groupDescKeys[i]) descEl.textContent = t(groupDescKeys[i]);
    });

    // Size chips
    const sizeChips = sizeFilter.querySelectorAll('.chip');
    const sizeChipKeys = ['chipAll', 'chipSmall', 'chipMedium', 'chipLarge', 'chipGiant'];
    sizeChips.forEach((el, i) => { if (sizeChipKeys[i]) el.textContent = t(sizeChipKeys[i]); });

    // Sort options
    const sortOpts = sortSelect.querySelectorAll('option');
    const sortKeys = ['sortNameKo', 'sortNameEn', 'sortSize'];
    sortOpts.forEach((el, i) => { if (sortKeys[i]) el.textContent = t(sortKeys[i]); });

    // No results
    document.querySelector('.no-results-text').textContent = t('noResultsText');
    document.querySelector('.no-results-sub').textContent = t('noResultsSub');

    // Footer
    document.querySelector('.footer-inner > p:first-child').textContent = t('footer');
    const footerSub = document.querySelector('.footer-sub');
    footerSub.innerHTML = `${t('footerSub')}<a href="https://dog.ceo" target="_blank" rel="noopener">Dog CEO API</a>`;

    // Search count
    if (searchQuery) {
      searchCount.textContent = t('searchCount')(getFiltered().length);
    }

    // 1. 일괄 정적 data-i18n 번역 적용
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[currentLang] && i18n[currentLang][key]) {
        // textContent를 번역 텍스트로 치환 (아이콘이나 버튼 등 span 텍스트 번역용)
        el.textContent = typeof i18n[currentLang][key] === 'function'
          ? i18n[currentLang][key]()
          : i18n[currentLang][key];
      }
    });

    // 2. 우리 강아지 검색 입력창 placeholder 번역
    const mydogInput = document.getElementById('mydogSearchInput');
    if (mydogInput) {
      mydogInput.setAttribute('placeholder', t('mydogInputPlaceholder'));
    }

    // 3. 우리 강아지 대시보드가 그려진 상태라면 실시간 언어 리렌더링
    const savedBreedId = localStorage.getItem('myDogBreedId');
    const mydogDashboardView = document.getElementById('mydog-dashboard-view');
    if (savedBreedId && mydogDashboardView && mydogDashboardView.classList.contains('active')) {
      renderMyDogDashboard(savedBreedId);
    } else if (savedBreedId) {
      // 대시보드가 활성 상태가 아니더라도 데이터 변경에 유연하게 대응
      renderMyDogDashboard(savedBreedId);
    }
  }

  // --- Stats ---
  function updateStats() {
    const badge = $('totalCountBadge');
    if (badge) {
      badge.textContent = t('totalBreedsBadge')(DOG_BREEDS.length);
    }
  }

  // --- Filter & Sort ---
  function getFiltered() {
    let dogs = [...DOG_BREEDS];
    if (currentGroup !== 'all') dogs = dogs.filter(d => d.group === currentGroup);
    if (currentSize !== 'all') dogs = dogs.filter(d => d.size === currentSize);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      dogs = dogs.filter(d =>
        d.nameKo.toLowerCase().includes(q) ||
        d.nameEn.toLowerCase().includes(q) ||
        (d.aliases && d.aliases.some(alias => alias.toLowerCase().includes(q)))
      );
    }
    dogs.sort((a, b) => {
      if (currentSort === 'nameKo') return a.nameKo.localeCompare(b.nameKo, 'ko');
      if (currentSort === 'nameEn') return a.nameEn.localeCompare(b.nameEn, 'en');
      if (currentSort === 'size') return (sizeOrder[a.size] || 0) - (sizeOrder[b.size] || 0);
      return 0;
    });
    return dogs;
  }

  // --- Render Cards ---
  function render() {
    const dogs = getFiltered();
    const gl = t('groupLabels');
    const sl = t('sizeLabels');
    cardGrid.innerHTML = '';
    noResults.style.display = dogs.length === 0 ? 'block' : 'none';
    searchCount.textContent = searchQuery
      ? t('searchCount')(dogs.length)
      : '';

    dogs.forEach((dog, i) => {
      const displayName = currentLang === 'en' ? dog.nameEn : dog.nameKo;
      const subName = currentLang === 'en' ? dog.nameKo : dog.nameEn;
      const card = document.createElement('div');
      card.className = 'dog-card';
      card.setAttribute('data-id', dog.id);
      card.style.transitionDelay = `${Math.min(i * 30, 600)}ms`;
      card.innerHTML = `
        <div class="card-image-wrap">
          <div class="card-image-placeholder">🐕</div>
          <span class="card-group-badge group-${dog.group}">${gl[dog.group] || dog.group}</span>
          <span class="card-size-badge">${sl[dog.size] || dog.size}</span>
        </div>
        <div class="card-body">
          <div class="card-name-ko">${displayName}</div>
          <div class="card-name-en">${subName}</div>
          <div class="card-meta">
            <span class="card-meta-item">📏 ${dog.height.min}–${dog.height.max}cm</span>
            <span class="card-meta-item">⚖️ ${dog.weight.min}–${dog.weight.max}kg</span>
            <span class="card-meta-item">💗 ${dog.lifespan.min}–${dog.lifespan.max}${t('lifespanUnit')}</span>
          </div>
          <div class="card-stars">${renderMiniStars(dog.friendliness)}</div>
        </div>
      `;
      card.addEventListener('click', () => openModal(dog));
      cardGrid.appendChild(card);
    });

    observeCards();
    lazyLoadImages();
  }

  function renderMiniStars(level) {
    return Array.from({ length: 5 }, (_, i) =>
      `<div class="card-star${i < level ? ' filled' : ''}"></div>`
    ).join('');
  }

  // --- Intersection Observer for card animations ---
  function observeCards() {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.05 });
    document.querySelectorAll('.dog-card').forEach(c => obs.observe(c));
  }

  // --- Lazy Load Images ---
  function lazyLoadImages() {
    const cards = document.querySelectorAll('.dog-card');
    const imgObs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const card = e.target;
          const id = card.getAttribute('data-id');
          const dog = DOG_BREEDS.find(d => d.id === id);
          if (dog) {
            loadDogImage(dog, card);
          }
          imgObs.unobserve(card);
        }
      });
    }, { threshold: 0.01, rootMargin: '200px' });
    cards.forEach(c => imgObs.observe(c));
  }

  function loadDogImage(dog, card) {
    const wrap = card.querySelector('.card-image-wrap');
    const placeholder = wrap.querySelector('.card-image-placeholder');
    const src = dog.thumbnailUrl || dog.imageUrl;
    if (!src) return;

    const img = document.createElement('img');
    img.className = 'card-image';
    img.alt = dog.nameEn;
    img.loading = 'lazy';
    img.src = src;
    img.onload = () => {
      img.classList.add('loaded');
      if (placeholder) placeholder.style.display = 'none';
    };
    wrap.insertBefore(img, wrap.firstChild);
  }

  // --- Modal ---
  function openModal(dog) {
    document.body.style.overflow = 'hidden';
    modalContent.innerHTML = buildModalHTML(dog);
    modalOverlay.classList.add('active');

    // Animate rating bars
    setTimeout(() => {
      document.querySelectorAll('.modal-rating-fill').forEach(bar => {
        bar.style.width = bar.getAttribute('data-width');
      });
    }, 100);
  }

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function buildModalHTML(dog) {
    const gl = t('groupLabels');
    const sl = t('sizeLabels');
    const displayName = currentLang === 'en' ? dog.nameEn : dog.nameKo;
    const subName = currentLang === 'en' ? dog.nameKo : dog.nameEn;

    const ratings = [
      { label: t('ratingExercise'), value: dog.exerciseLevel, emoji: '🏃' },
      { label: t('ratingGrooming'), value: dog.groomingLevel, emoji: '✂️' },
      { label: t('ratingTrainability'), value: dog.trainability, emoji: '🎓' },
      { label: t('ratingFriendliness'), value: dog.friendliness, emoji: '🤝' },
      { label: t('ratingEnergy'), value: dog.energyLevel, emoji: '⚡' },
    ];
    const ratingBars = ratings.map(r => `
      <div class="modal-rating-row">
        <span class="modal-rating-label">${r.emoji} ${r.label}</span>
        <div class="modal-rating-bar">
          <div class="modal-rating-fill" data-width="${r.value * 20}%" style="width: 0%"></div>
        </div>
        <span class="modal-rating-value">${r.value}/5</span>
      </div>
    `).join('');

    const temperamentTags = dog.temperament.map(t =>
      `<span class="modal-tag">${t}</span>`
    ).join('');

    const funFacts = dog.funFacts.map(f =>
      `<div class="modal-fact">💡 ${f}</div>`
    ).join('');

    return `
      <div class="modal-hero">
        <img class="modal-hero-image" alt="${displayName}" src="${dog.imageUrl || dog.thumbnailUrl}" onload="this.classList.add('loaded'); this.nextElementSibling.style.display='none';">
        <div class="modal-hero-placeholder">🐕</div>
        <div class="modal-hero-gradient"></div>
      </div>
      <div class="modal-body">
        <div class="modal-title-section">
          <div class="modal-name-ko">${displayName}</div>
          <div class="modal-name-en">${subName}</div>
          <div class="modal-badges">
            <span class="modal-badge group-${dog.group}">${gl[dog.group]}</span>
            <span class="modal-badge" style="background:rgba(0,0,0,0.3)">${sl[dog.size]}</span>
          </div>
        </div>

        <div class="modal-info-grid">
          <div class="modal-info-card">
            <div class="modal-info-emoji">🌍</div>
            <div class="modal-info-value">${dog.origin}</div>
            <div class="modal-info-label">${t('modalOrigin')}</div>
          </div>
          <div class="modal-info-card">
            <div class="modal-info-emoji">📏</div>
            <div class="modal-info-value">${dog.height.min}–${dog.height.max}cm</div>
            <div class="modal-info-label">${t('modalHeight')}</div>
          </div>
          <div class="modal-info-card">
            <div class="modal-info-emoji">⚖️</div>
            <div class="modal-info-value">${dog.weight.min}–${dog.weight.max}kg</div>
            <div class="modal-info-label">${t('modalWeight')}</div>
          </div>
          <div class="modal-info-card">
            <div class="modal-info-emoji">💗</div>
            <div class="modal-info-value">${dog.lifespan.min}–${dog.lifespan.max}${t('lifespanUnit')}</div>
            <div class="modal-info-label">${t('modalLifespan')}</div>
          </div>
        </div>

        <div class="modal-section">
          <div class="modal-section-title">${t('modalIntro')}</div>
          <p class="modal-description">${dog.description}</p>
        </div>

        <div class="modal-section">
          <div class="modal-section-title">${t('modalAnalysis')}</div>
          <div class="modal-rating-list">${ratingBars}</div>
        </div>

        <div class="modal-section">
          <div class="modal-section-title">${t('modalTemperament')}</div>
          <div class="modal-temperament">${temperamentTags}</div>
        </div>

        ${dog.funFacts.length > 0 ? `
        <div class="modal-section">
          <div class="modal-section-title">${t('modalFunFacts')}</div>
          <div class="modal-fun-facts">${funFacts}</div>
        </div>` : ''}
      </div>
    `;
  }

  // --- Events ---
  function bindEvents() {
    // Search
    let debounceTimer;
    searchInput.addEventListener('input', () => {
      clearTimeout(debounceTimer);
      searchClear.classList.toggle('visible', searchInput.value.length > 0);
      debounceTimer = setTimeout(() => {
        searchQuery = searchInput.value.trim();
        render();
      }, 200);
    });
    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      searchClear.classList.remove('visible');
      render();
      searchInput.focus();
    });

    // Group filter
    groupFilter.addEventListener('click', e => {
      const chip = e.target.closest('.chip');
      if (!chip) return;
      groupFilter.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentGroup = chip.getAttribute('data-value');
      render();
    });

    // Size filter
    sizeFilter.addEventListener('click', e => {
      const chip = e.target.closest('.chip');
      if (!chip) return;
      sizeFilter.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentSize = chip.getAttribute('data-value');
      render();
    });


    // Sort
    sortSelect.addEventListener('change', () => {
      currentSort = sortSelect.value;
      render();
    });

    // Theme
    themeToggle.addEventListener('click', toggleTheme);

    // Language
    langToggle.addEventListener('click', toggleLang);

    // Modal
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', e => {
      if (e.target === modalOverlay) closeModal();
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeModal();
    });

    // Back to top
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    });
  }

  // --- Drag Scroll ---
  function initDragScroll() {
    const containers = document.querySelectorAll('.filter-chips');
    containers.forEach(el => {
      let isDown = false;
      let startX;
      let scrollLeft;
      let hasDragged = false;

      el.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - el.offsetLeft;
        scrollLeft = el.scrollLeft;
        hasDragged = false;
      });

      el.addEventListener('mouseleave', () => {
        isDown = false;
      });

      el.addEventListener('mouseup', () => {
        isDown = false;
      });

      el.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        const x = e.pageX - el.offsetLeft;
        const walk = (x - startX) * 1.5;
        if (Math.abs(walk) > 3) {
          hasDragged = true;
          el.scrollLeft = scrollLeft - walk;
        }
      });

      el.addEventListener('click', (e) => {
        if (hasDragged) {
          e.preventDefault();
          e.stopPropagation();
        }
      }, true);
    });
  }

  // --- Navigation ---
  function bindNavigation() {
    // Regular nav items (excluding dropdown items inside nav-group)
    document.querySelectorAll('.nav-item:not(.nav-group-trigger)').forEach(item => {
      if (!item.closest('.nav-dropdown')) {
        item.addEventListener('click', () => {
          const page = item.getAttribute('data-page');
          if (page) switchPage(page);
        });
      }
    });

    // Dropdown items
    document.querySelectorAll('.nav-dropdown-item').forEach(item => {
      item.addEventListener('click', () => {
        const page = item.getAttribute('data-page');
        if (page) {
          closeGuideDropdown();
          switchPage(page);
        }
      });
    });

    // Guide dropdown toggle (click)
    const guideBtn = document.getElementById('navGuideBtn');
    const guideDropdown = document.getElementById('navGuideDropdown');
    if (guideBtn && guideDropdown) {
      guideBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = guideDropdown.classList.contains('open');
        if (isOpen) {
          closeGuideDropdown();
        } else {
          openGuideDropdown();
        }
      });

      // Hover also works on non-touch
      const group = document.getElementById('navGroupGuide');
      let hoverTimeout;
      group.addEventListener('mouseenter', () => {
        clearTimeout(hoverTimeout);
        openGuideDropdown();
      });
      group.addEventListener('mouseleave', () => {
        hoverTimeout = setTimeout(closeGuideDropdown, 180);
      });
    }

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('#navGroupGuide')) closeGuideDropdown();
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeGuideDropdown();
    });

    // Logo click → home
    const logo = document.getElementById('logoHome');
    if (logo) logo.addEventListener('click', () => switchPage('encyclopedia'));
  }

  function openGuideDropdown() {
    const btn = document.getElementById('navGuideBtn');
    const dd  = document.getElementById('navGuideDropdown');
    if (!btn || !dd) return;
    dd.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }

  function closeGuideDropdown() {
    const btn = document.getElementById('navGuideBtn');
    const dd  = document.getElementById('navGuideDropdown');
    if (!btn || !dd) return;
    dd.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }

  const GUIDE_PAGES = ['care', 'vet', 'food'];

  function switchPage(pageName) {
    // Set active page body class for styling visibility of page-dependent header elements
    document.body.className = '';
    document.body.classList.add(pageName + '-active');

    // Regular nav-item active state (skip for guide sub-pages)
    document.querySelectorAll('.nav-item:not(.nav-group-trigger)').forEach(item => {
      if (!item.closest('.nav-dropdown')) {
        item.classList.toggle('active', item.getAttribute('data-page') === pageName);
      }
    });

    // Guide trigger active state
    const guideBtn = document.getElementById('navGuideBtn');
    if (guideBtn) {
      guideBtn.classList.toggle('active', GUIDE_PAGES.includes(pageName));
    }

    // Dropdown item active state
    document.querySelectorAll('.nav-dropdown-item').forEach(item => {
      item.classList.toggle('active', item.getAttribute('data-page') === pageName);
    });

    document.querySelectorAll('.page-section').forEach(section => {
      section.classList.remove('active');
    });
    const target = document.getElementById('page-' + pageName);
    if (target) target.classList.add('active');
    if (pageName === 'quiz') initQuiz();
    if (pageName === 'mydog') initMyDog();
    if (pageName === 'mbti') mbtiGoToMode();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ==================== CELEBRITY CARDS ====================
  function bindCelebCards() {
    const breedMap = {
      'maltese': 'maltese',
      'poodle': 'poodle-standard',
      'french-bulldog': 'french-bulldog',
      'chihuahua': 'chihuahua',
      'labrador': 'labrador-retriever',
      'german-shepherd': 'german-shepherd',
      'puli': 'puli',
      'cocker-spaniel': 'english-cocker-spaniel',
      'beagle': 'beagle',
      'golden-retriever': 'golden-retriever',
      'bichon-frise': 'bichon-frise',
    };
    document.querySelectorAll('.celeb-card[data-breed]').forEach(card => {
      card.addEventListener('click', () => {
        const breedKey = card.getAttribute('data-breed');
        const breedId = breedMap[breedKey] || breedKey;
        const dog = DOG_BREEDS.find(d => d.id === breedId);
        if (dog) openModal(dog);
      });
    });
  }

  // ==================== TRENDING ====================
  let trendingData = [];
  let trendingInterval = null;

  function initTrending() {
    // Pick 10 popular breeds (seeded by day so it changes daily)
    const day = new Date().getDate();
    const shuffled = [...DOG_BREEDS].sort((a, b) => {
      const ha = hashStr(a.id + day) % 1000;
      const hb = hashStr(b.id + day) % 1000;
      return hb - ha;
    });
    const top10 = shuffled.slice(0, 10);

    trendingData = top10.map((dog, i) => {
      const baseViews = Math.floor(3000 + Math.random() * 12000);
      const changeDir = Math.random() > 0.3 ? 'up' : (Math.random() > 0.5 ? 'down' : 'same');
      const changeVal = changeDir === 'same' ? 0 : Math.floor(1 + Math.random() * 5);
      return { dog, views: baseViews, change: changeDir, changeVal, rank: i + 1 };
    });
    // Sort by views desc
    trendingData.sort((a, b) => b.views - a.views);
    trendingData.forEach((d, i) => d.rank = i + 1);

    renderTrending();
    startTrendingTicker();
  }

  function hashStr(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
      h = ((h << 5) - h + str.charCodeAt(i)) | 0;
    }
    return Math.abs(h);
  }

  function renderTrending() {
    const track = document.getElementById('trendingTrack');
    if (!track) return;

    track.innerHTML = trendingData.map(item => {
      const d = item.dog;
      const changeHTML = item.change === 'up'
        ? `<span class="trending-card-change change-up">▲ ${item.changeVal}</span>`
        : item.change === 'down'
          ? `<span class="trending-card-change change-down">▼ ${item.changeVal}</span>`
          : `<span class="trending-card-change change-same">— 유지</span>`;

      return `
        <div class="trending-card" data-breed-id="${d.id}">
          <div class="trending-card-image">
            <img class="trending-image" alt="${d.nameEn}" src="${d.thumbnailUrl || d.imageUrl}" onload="this.classList.add('loaded'); this.nextElementSibling.style.display='none';">
            <div class="trending-card-placeholder">🐕</div>
            <span class="trending-rank rank-${item.rank}">${item.rank}</span>
            <span class="trending-card-views">👁 <span class="view-count">${item.views.toLocaleString()}</span></span>
          </div>
          <div class="trending-card-body">
            <div class="trending-card-name">${d.nameKo}</div>
            <div class="trending-card-sub">${d.nameEn}</div>
            ${changeHTML}
          </div>
        </div>
      `;
    }).join('');

    // Click handler
    track.querySelectorAll('.trending-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-breed-id');
        const dog = DOG_BREEDS.find(d => d.id === id);
        if (dog) openModal(dog);
      });
    });

    // Update total viewers
    updateTotalViewers();
  }

  function updateTotalViewers() {
    const el = document.getElementById('totalViewers');
    if (!el) return;
    const total = trendingData.reduce((s, d) => s + d.views, 0);
    animateNumber(el, parseInt(el.textContent.replace(/,/g, '')) || 0, total, 800);
  }

  function animateNumber(el, from, to, duration) {
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(from + (to - from) * eased).toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  function startTrendingTicker() {
    if (trendingInterval) clearInterval(trendingInterval);
    trendingInterval = setInterval(() => {
      trendingData.forEach(item => {
        const bump = Math.floor(Math.random() * 8) + 1;
        item.views += bump;
      });
      // Update view counts in DOM
      const cards = document.querySelectorAll('.trending-card');
      cards.forEach(card => {
        const id = card.getAttribute('data-breed-id');
        const item = trendingData.find(d => d.dog.id === id);
        if (item) {
          const vc = card.querySelector('.view-count');
          if (vc) vc.textContent = item.views.toLocaleString();
        }
      });
      updateTotalViewers();
    }, 3000);
  }

  // ==================== QUIZ ====================
  const quizQuestions = [
    {
      question: '🌅 드디어 기다리던 주말 아침! 당신은…', options: [
        { emoji: '🛋️', text: '이불 속에서 넷플릭스 정주행이 최고지~', value: { exercise: 1, energy: 2 } },
        { emoji: '☕', text: '카페 가서 여유롭게 브런치 먹으며 힐링', value: { exercise: 2, energy: 3 } },
        { emoji: '🚴', text: '자전거 타고 한강 라이딩! 몸을 움직여야 해', value: { exercise: 4, energy: 4 } },
        { emoji: '🏔️', text: '등산이나 캠핑! 자연 속으로 고고', value: { exercise: 5, energy: 5 } },
      ]
    },
    {
      question: '🏠 친구들이 갑자기 집에 놀러온다고 합니다!', options: [
        { emoji: '😰', text: '헉… 미리 연락 좀 해주지… 좀 부담스러워', value: { friendliness: 2, trainability: 2 } },
        { emoji: '🙂', text: '괜찮아, 근데 소수만 왔으면 좋겠다', value: { friendliness: 3, trainability: 3 } },
        { emoji: '🎉', text: '좋아! 같이 보드게임하자~', value: { friendliness: 4, trainability: 4 } },
        { emoji: '🥳', text: '파티다! 더 많이 와도 환영이야!', value: { friendliness: 5, trainability: 3 } },
      ]
    },
    {
      question: '💇 아침에 외출 준비 스타일은?', options: [
        { emoji: '⚡', text: '5분 컷. 세수하고 바로 출발', value: { grooming: 1 } },
        { emoji: '🪥', text: '기본 루틴은 챙기는 편 (15분)', value: { grooming: 2 } },
        { emoji: '💅', text: '스킨케어에 헤어 세팅까지 꼼꼼하게', value: { grooming: 4 } },
        { emoji: '👑', text: '패션은 완성이다! 머리부터 발끝까지', value: { grooming: 5 } },
      ]
    },
    {
      question: '🎮 새로운 취미를 시작한다면?', options: [
        { emoji: '🎨', text: '혼자 조용히 그림 그리기나 독서', value: { friendliness: 2, size: 'small' } },
        { emoji: '🧘', text: '요가나 명상 같은 차분한 활동', value: { friendliness: 3, size: 'medium' } },
        { emoji: '🏀', text: '팀 스포츠! 사람들과 함께하는 게 좋아', value: { friendliness: 4, size: 'large' } },
        { emoji: '🤿', text: '서핑, 스카이다이빙! 짜릿한 모험!', value: { friendliness: 3, size: 'large' } },
      ]
    },
    {
      question: '📱 SNS에 올릴 반려견 사진 스타일은?', options: [
        { emoji: '🤳', text: '귀여운 셀카! 작고 앙증맞은 게 최고', value: { size: 'small', grooming: 3 } },
        { emoji: '📸', text: '산책하는 일상 사진이 좋아', value: { size: 'medium', exercise: 3 } },
        { emoji: '🏞️', text: '넓은 들판에서 달리는 멋진 사진!', value: { size: 'large', exercise: 5 } },
        { emoji: '🎭', text: '옷 입히고 꾸며서 패셔니스타로!', value: { size: 'small', grooming: 5 } },
      ]
    },
    {
      question: '📚 자기 전 루틴은?', options: [
        { emoji: '📖', text: '조용히 책 읽다가 스르르 잠들기', value: { energy: 1, trainability: 4 } },
        { emoji: '🎵', text: '음악 들으며 소파에서 뒹굴뒹굴', value: { energy: 2, trainability: 3 } },
        { emoji: '🎬', text: '유튜브 보다가 "한 편만 더…" 반복', value: { energy: 3, trainability: 2 } },
        { emoji: '💪', text: '야간 운동 한바탕 하고 샤워 후 기절', value: { energy: 5, trainability: 4 } },
      ]
    },
    {
      question: '🤔 인생에서 가장 중요한 가치는?', options: [
        { emoji: '❤️', text: '사랑과 유대감. 함께하는 것이 행복', value: { friendliness: 5, trainability: 4 } },
        { emoji: '🗽', text: '자유와 독립. 서로의 공간을 존중', value: { friendliness: 2, trainability: 2 } },
        { emoji: '🎯', text: '성장과 도전. 매일 발전하는 삶', value: { exercise: 4, trainability: 5 } },
        { emoji: '🌿', text: '평화와 안정. 소소하지만 확실한 행복', value: { exercise: 2, energy: 2 } },
      ]
    },
    {
      question: '🐕 마지막! 상상 속 반려견과의 하루는?', options: [
        { emoji: '🛍️', text: '가방에 쏙! 같이 카페, 쇼핑 다니기', value: { size: 'small', energy: 2 } },
        { emoji: '🌳', text: '동네 공원에서 함께 산책하며 여유롭게', value: { size: 'medium', energy: 3 } },
        { emoji: '🏖️', text: '해변에서 프리스비 던지며 신나게 놀기', value: { size: 'large', energy: 5 } },
        { emoji: '🏡', text: '넓은 마당에서 자유롭게 뛰어노는 모습', value: { size: 'large', energy: 5 } },
      ]
    }
  ];
  let quizStep = 0, quizAnswers = {};

  function initQuiz() {
    quizStep = 0; quizAnswers = {};
    const c = document.getElementById('quizContainer');
    const r = document.getElementById('quizResult');
    if (!c || !r) return;
    r.style.display = 'none'; c.style.display = 'block';
    renderQuizStep();
  }

  function addQuizAnswer(vals) {
    for (const [k, v] of Object.entries(vals)) {
      if (!quizAnswers[k]) quizAnswers[k] = [];
      quizAnswers[k].push(v);
    }
  }
  function avgAnswer(key) {
    const arr = quizAnswers[key];
    if (!arr || arr.length === 0) return undefined;
    if (typeof arr[0] === 'string') {
      // For size: pick most frequent
      const freq = {};
      arr.forEach(v => freq[v] = (freq[v] || 0) + 1);
      return Object.entries(freq).sort((a, b) => b[1] - a[1])[0][0];
    }
    return arr.reduce((s, v) => s + v, 0) / arr.length;
  }

  function renderQuizStep() {
    const c = document.getElementById('quizContainer');
    if (!c) return;
    const q = quizQuestions[quizStep], total = quizQuestions.length;
    const progress = Array.from({ length: total }, (_, i) => `<div class="quiz-progress-dot ${i < quizStep ? 'filled' : i === quizStep ? 'current' : ''}"></div>`).join('');
    const opts = q.options.map((o, i) => `<button class="quiz-option" data-index="${i}"><span class="quiz-opt-emoji">${o.emoji}</span><span>${o.text}</span></button>`).join('');
    c.innerHTML = `<div class="quiz-step"><div class="quiz-progress">${progress}</div><div class="quiz-step-number">질문 ${quizStep + 1} / ${total}</div><div class="quiz-question">${q.question}</div><div class="quiz-options">${opts}</div></div>`;
    c.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => {
        addQuizAnswer(q.options[parseInt(btn.getAttribute('data-index'))].value);
        quizStep++;
        quizStep < total ? renderQuizStep() : showQuizResult();
      });
    });
  }

  function showQuizResult() {
    const c = document.getElementById('quizContainer');
    const r = document.getElementById('quizResult');
    if (!c || !r) return;
    c.style.display = 'none'; r.style.display = 'block';

    const sz = avgAnswer('size');
    const ex = avgAnswer('exercise');
    const gr = avgAnswer('grooming');
    const fr = avgAnswer('friendliness');
    const tr = avgAnswer('trainability');
    const en = avgAnswer('energy');

    // Personality type
    const typeLabels = [];
    if (ex !== undefined) typeLabels.push(ex >= 3.5 ? '🏃 활동파' : '🛋️ 휴식파');
    if (fr !== undefined) typeLabels.push(fr >= 3.5 ? '🎉 사교형' : '🧘 독립형');
    if (gr !== undefined) typeLabels.push(gr >= 3 ? '💅 꾸밈형' : '⚡ 심플형');
    if (en !== undefined) typeLabels.push(en >= 3.5 ? '🌳 아웃도어' : '🏠 인도어');
    const personalityType = typeLabels.join(' × ');

    const scored = DOG_BREEDS.map(dog => {
      let s = 0, m = 0;
      if (sz && sz !== 'any') {
        m += 20; if (dog.size === sz) s += 20;
        else if ((sz === 'large' && dog.size === 'giant') || (sz === 'small' && dog.size === 'medium')) s += 10;
      }
      if (ex !== undefined) { m += 20; s += Math.max(0, 20 - Math.abs(dog.exerciseLevel - ex) * 4.5); }
      if (gr !== undefined) { m += 15; s += Math.max(0, 15 - Math.abs(dog.groomingLevel - gr) * 3.5); }
      if (fr !== undefined) { m += 20; s += dog.friendliness >= fr ? 20 : Math.max(0, 20 - (fr - dog.friendliness) * 5); }
      if (tr !== undefined) { m += 15; s += Math.max(0, 15 - Math.abs(dog.trainability - tr) * 3); }
      if (en !== undefined) { m += 10; s += Math.max(0, 10 - Math.abs(dog.energyLevel - en) * 2.5); }
      return { dog, score: m > 0 ? Math.round((s / m) * 100) : 50 };
    }).sort((a, b) => b.score - a.score).slice(0, 3);

    const html = scored.map((it, i) => `<div class="quiz-breed-item"><div class="quiz-breed-rank">${['🥇', '🥈', '🥉'][i]}</div><div><div class="quiz-breed-name">${it.dog.nameKo}</div><div class="quiz-breed-sub">${it.dog.nameEn} · ${it.dog.origin}</div></div><div class="quiz-breed-match">${it.score}%</div></div>`).join('');
    r.innerHTML = `<div class="quiz-result-card">
      <div class="quiz-result-header">
        <span class="quiz-result-emoji">🐾</span>
        <div class="quiz-result-label">당신의 반려견 유형</div>
        <div style="font-size:18px;font-weight:700;margin-top:8px;">${personalityType}</div>
      </div>
      <div style="font-size:14px;color:var(--text-muted);margin:16px 0 8px;">👇 당신에게 어울리는 견종 TOP 3</div>
      <div class="quiz-result-breeds">${html}</div>
      <button class="quiz-restart" id="quizRestart">🔄 다시 해보기</button>
    </div>`;
  }

  // ==================== MY DOG (우리 강아지) ====================
  function initMyDog() {
    const input = $('mydogSearchInput');
    const clearBtn = $('mydogSearchClear');
    const autoList = $('mydogAutocompleteList');
    const quickChipsContainer = $('mydogQuickChips');

    if (!input || !quickChipsContainer) return;

    // Render Quick Select Chips for 12 popular breeds
    const popularBreeds = [
      { id: 'pomeranian', nameKo: '포메라니안', nameEn: 'Pomeranian' },
      { id: 'maltese', nameKo: '말티즈', nameEn: 'Maltese' },
      { id: 'poodle', nameKo: '푸들', nameEn: 'Poodle' },
      { id: 'chihuahua', nameKo: '치와와', nameEn: 'Chihuahua' },
      { id: 'yorkshire-terrier', nameKo: '요크셔 테리어', nameEn: 'Yorkshire Terrier' },
      { id: 'bichon-frise', nameKo: '비숑 프리제', nameEn: 'Bichon Frise' },
      { id: 'pembroke-welsh-corgi', nameKo: '웰시 코기', nameEn: 'Welsh Corgi' },
      { id: 'golden-retriever', nameKo: '골든 리트리버', nameEn: 'Golden Retriever' },
      { id: 'shih-tzu', nameKo: '시츄', nameEn: 'Shih Tzu' },
      { id: 'shiba-inu', nameKo: '시바견', nameEn: 'Shiba Inu' },
      { id: 'french-bulldog', nameKo: '프렌치 불독', nameEn: 'French Bulldog' },
      { id: 'jindo', nameKo: '진도견', nameEn: 'Jindo' }
    ];

    quickChipsContainer.innerHTML = popularBreeds.map(b => {
      const name = currentLang === 'ko' ? b.nameKo : b.nameEn;
      return `<button class="mydog-chip animate-fade-in" data-id="${b.id}">${name}</button>`;
    }).join('');

    // Bind Quick Chips Click
    quickChipsContainer.querySelectorAll('.mydog-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        const breedId = btn.getAttribute('data-id');
        registerMyDog(breedId);
      });
    });

    // Check localStorage to decide view
    const savedBreedId = localStorage.getItem('myDogBreedId');
    if (savedBreedId) {
      showDashboard(savedBreedId);
    } else {
      showRegistration();
    }

    // Input autocomplete logic
    input.addEventListener('input', () => {
      const val = input.value.trim().toLowerCase();
      if (!val) {
        clearBtn.classList.remove('show');
        autoList.style.display = 'none';
        return;
      }
      clearBtn.classList.add('show');

      // Chosung parsing helper
      const getChosung = (str) => {
        const chosungList = ["ㄱ","ㄲ","ㄴ","ㄷ","ㄸ","ㄹ","ㅁ","ㅂ","ㅃ","ㅅ","ㅆ","ㅇ","ㅈ","ㅉ","ㅊ","ㅋ","ㅌ","ㅍ","ㅎ"];
        let result = "";
        for(let i=0; i<str.length; i++) {
          const code = str.charCodeAt(i) - 44032;
          if(code >= 0 && code <= 11172) {
            result += chosungList[Math.floor(code / 588)];
          } else {
            result += str.charAt(i);
          }
        }
        return result;
      };

      const searchValChosung = getChosung(val);

      // Filter dog breeds
      const matches = DOG_BREEDS.filter(dog => {
        const nameKo = dog.nameKo.toLowerCase();
        const nameEn = dog.nameEn.toLowerCase();
        const choKo = getChosung(nameKo);
        const aliasMatch = dog.aliases && dog.aliases.some(alias => {
          const aliasLower = alias.toLowerCase();
          const choAlias = getChosung(aliasLower);
          return aliasLower.includes(val) || 
                 choAlias.includes(val) || 
                 choAlias.includes(searchValChosung);
        });
        
        return nameKo.includes(val) || 
               nameEn.includes(val) || 
               choKo.includes(val) || 
               choKo.includes(searchValChosung) ||
               aliasMatch;
      }).slice(0, 8); // Top 8 results for cleaner layout

      if (matches.length > 0) {
        autoList.innerHTML = matches.map(dog => {
          const imgUrl = dog.thumbnailUrl || dog.imageUrl;
          const imgHtml = imgUrl 
            ? `<img class="mydog-auto-thumb" src="${imgUrl}" alt="${dog.nameKo}">` 
            : `<div class="mydog-auto-thumb-placeholder">🐕</div>`;
          const breedName = currentLang === 'ko' ? dog.nameKo : dog.nameEn;
          const subName = currentLang === 'ko' ? dog.nameEn : dog.nameKo;
          return `
            <div class="mydog-auto-item" data-id="${dog.id}">
              ${imgHtml}
              <div class="mydog-auto-info">
                <div class="mydog-auto-name">${breedName}</div>
                <div class="mydog-auto-sub">${subName}</div>
              </div>
            </div>
          `;
        }).join('');
        autoList.style.display = 'block';

        // Bind items click
        autoList.querySelectorAll('.mydog-auto-item').forEach(item => {
          item.addEventListener('click', () => {
            const breedId = item.getAttribute('data-id');
            registerMyDog(breedId);
            autoList.style.display = 'none';
            input.value = '';
            clearBtn.classList.remove('show');
          });
        });
      } else {
        autoList.innerHTML = `<div class="mydog-auto-no-results">${currentLang === 'ko' ? '검색 결과가 없습니다 😢' : 'No results found 😢'}</div>`;
        autoList.style.display = 'block';
      }
    });

    // Clear Button Click
    clearBtn.addEventListener('click', () => {
      input.value = '';
      clearBtn.classList.remove('show');
      autoList.style.display = 'none';
      input.focus();
    });

    // Dismiss Autocomplete list when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.mydog-search-container')) {
        autoList.style.display = 'none';
      }
    });
  }

  function registerMyDog(breedId) {
    if (!breedId) return;
    localStorage.setItem('myDogBreedId', breedId);
    
    // Add flip transition aesthetic effect
    const regView = $('mydog-registration-view');
    const dashView = $('mydog-dashboard-view');
    
    if (regView && dashView) {
      regView.style.transform = 'scale(0.95)';
      regView.style.opacity = '0';
      setTimeout(() => {
        regView.classList.remove('active');
        dashView.classList.add('active');
        dashView.style.opacity = '0';
        dashView.style.transform = 'scale(0.95)';
        renderMyDogDashboard(breedId);
        setTimeout(() => {
          dashView.style.opacity = '1';
          dashView.style.transform = 'scale(1)';
        }, 50);
      }, 300);
    } else {
      showDashboard(breedId);
    }
  }

  function showDashboard(breedId) {
    const regView = $('mydog-registration-view');
    const dashView = $('mydog-dashboard-view');
    if (regView) regView.classList.remove('active');
    if (dashView) {
      dashView.classList.add('active');
      dashView.style.opacity = '1';
      dashView.style.transform = 'none';
    }
    renderMyDogDashboard(breedId);
  }

  function showRegistration() {
    const regView = $('mydog-registration-view');
    const dashView = $('mydog-dashboard-view');
    if (dashView) dashView.classList.remove('active');
    if (regView) {
      regView.classList.add('active');
      regView.style.opacity = '1';
      regView.style.transform = 'none';
    }
  }

  function renderMyDogDashboard(breedId) {
    const container = $('mydogDashboardContent');
    if (!container) return;

    const dog = DOG_BREEDS.find(d => d.id === breedId);
    if (!dog) {
      localStorage.removeItem('myDogBreedId');
      showRegistration();
      return;
    }

    const medInfo = window.DOG_MEDICAL_DATA ? window.DOG_MEDICAL_DATA.getMedicalInfo(dog, currentLang) : null;
    if (!medInfo) return;

    const breedName = currentLang === 'ko' ? dog.nameKo : dog.nameEn;
    const subName = currentLang === 'ko' ? dog.nameEn : dog.nameKo;
    const sizeName = currentLang === 'ko' ? t('sizeLabels')[dog.size] : dog.size.toUpperCase();
    const groupName = currentLang === 'ko' ? t('groupLabels')[dog.group] : dog.group.toUpperCase();

    // Temperament chips
    const temps = (dog.temperament || []).map(t => `<span class="mydog-temp-chip">${t}</span>`).join('');

    // Vet Checkpoints Checklist
    const vetChecklistHtml = medInfo.vetCheckpoints.map((cp, idx) => {
      const storageKey = `myDogChecked_${breedId}_${idx}`;
      const isChecked = localStorage.getItem(storageKey) === 'true' ? 'checked' : '';
      return `
        <div class="mydog-vet-item ${isChecked ? 'completed' : ''}">
          <label class="mydog-checkbox-container">
            <input type="checkbox" class="mydog-vet-checkbox" data-key="${storageKey}" ${isChecked}>
            <span class="mydog-checkmark"></span>
          </label>
          <div class="mydog-vet-text">
            <h5 class="mydog-vet-item-title">${cp.title}</h5>
            <p class="mydog-vet-item-desc">${cp.desc}</p>
          </div>
        </div>
      `;
    }).join('');

    // Not an Illness Quirks
    const quirksHtml = medInfo.notAnIllness.map((q, idx) => {
      return `
        <div class="mydog-quirk-card">
          <div class="mydog-quirk-header">
            <span class="mydog-quirk-icon">🛡️</span>
            <h5 class="mydog-quirk-title">${q.title}</h5>
          </div>
          <p class="mydog-quirk-desc">${q.desc}</p>
        </div>
      `;
    }).join('');

    // Traits Ratings mapping with dynamic detailed comments
    const traits = [
      { key: 'exerciseLevel', label: t('ratingExercise'), icon: '🏃' },
      { key: 'groomingLevel', label: t('ratingGrooming'), icon: '💅' },
      { key: 'trainability', label: t('ratingTrainability'), icon: '🎓' },
      { key: 'friendliness', label: t('ratingFriendliness'), icon: '🤝' },
      { key: 'energyLevel', label: t('ratingEnergy'), icon: '⚡' }
    ];

    const traitsHtml = traits.map(tr => {
      const score = dog[tr.key] || 3;
      const percentage = (score / 5) * 100;
      
      let desc = '';
      if (currentLang === 'ko') {
        if (tr.key === 'exerciseLevel') {
          desc = score >= 4 ? '높은 수준의 야외 활동과 놀이가 매일 보장되어야 합니다.' : score <= 2 ? '가벼운 동네 산책만으로 충분히 충족됩니다.' : '적절한 1일 1회 산책이 필요합니다.';
        } else if (tr.key === 'groomingLevel') {
          desc = score >= 4 ? '잦은 빗질과 미용 및 털 엉킴 집중 관리가 의무적입니다.' : score <= 2 ? '기본적인 브러싱으로도 피모가 쉽게 케어됩니다.' : '정기적인 피모 손질과 세정이 요구됩니다.';
        } else if (tr.key === 'trainability') {
          desc = score >= 4 ? '지능이 매우 높고 협조적이어야 훈련 성취도가 빠릅니다.' : score <= 2 ? '고집이 있거나 독립적이어서 꾸준한 참을성이 요구됩니다.' : '일반적인 기본 복종 훈련이 수월히 소화됩니다.';
        } else if (tr.key === 'friendliness') {
          desc = score >= 4 ? '타인과 다른 강아지에게 낯가림 없이 매우 사교적입니다.' : score <= 2 ? '가족 외에는 다소 독립적이거나 영토 본능이 작용합니다.' : '점진적인 사회화 과정을 통해 온순히 잘 지냅니다.';
        } else if (tr.key === 'energyLevel') {
          desc = score >= 4 ? '지치지 않는 체력을 보유하여 에너지 소비가 필수입니다.' : score <= 2 ? '주로 차분히 쉬며 실내 정적인 생활을 선호합니다.' : '적당한 생기와 장난기로 활력이 돋보입니다.';
        }
      } else {
        if (tr.key === 'exerciseLevel') {
          desc = score >= 4 ? 'Demands high-intensity outdoor exercises and games daily.' : score <= 2 ? 'Satisfied with simple, light neighborhood strolls.' : 'Needs moderate daily walks to burn energy.';
        } else if (tr.key === 'groomingLevel') {
          desc = score >= 4 ? 'High coat care required; frequent brushing and haircuts.' : score <= 2 ? 'Very low maintenance; standard wash is sufficient.' : 'Regular coat brushing and basic hygiene required.';
        } else if (tr.key === 'trainability') {
          desc = score >= 4 ? 'Eager to please; picks up instructions extremely fast.' : score <= 2 ? 'Highly independent or stubborn; requires patience.' : 'Good response to consistent positive training.';
        } else if (tr.key === 'friendliness') {
          desc = score >= 4 ? 'Extremely outgoing, highly welcoming to strangers.' : score <= 2 ? 'Loyal to family but shows aloofness or guarding instincts.' : 'Friendly and adapts well via early socialization.';
        } else if (tr.key === 'energyLevel') {
          desc = score >= 4 ? 'Vibrant, high-octane energy requires regular release.' : score <= 2 ? 'Calm demeanor, prefers relaxed indoor environments.' : 'Playful, shows a healthy level of daily vivacity.';
        }
      }

      return `
        <div class="mydog-trait-row">
          <div class="mydog-trait-meta">
            <span class="mydog-trait-label">${tr.icon} ${tr.label}</span>
            <span class="mydog-trait-value">${score} / 5</span>
          </div>
          <div class="mydog-trait-bar-bg">
            <div class="mydog-trait-bar-fill" style="width: ${percentage}%"></div>
          </div>
          <div class="mydog-trait-desc">${desc}</div>
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <!-- LEFT Column: Profile Summary Panel -->
      <div class="mydog-column-left animate-fade-in">
        <div class="mydog-profile-card">
          <div class="mydog-profile-image-container">
            <img class="mydog-profile-image" src="${dog.imageUrl || dog.thumbnailUrl}" alt="${breedName}">
          </div>
          <div class="mydog-profile-body">
            <h3 class="mydog-profile-name">${breedName}</h3>
            <p class="mydog-profile-sub">${subName} · ${groupName}</p>
            <div class="mydog-profile-temps">${temps}</div>
            
            <div class="mydog-profile-details">
              <div class="mydog-detail-item">
                <span class="mydog-detail-icon">🌍</span>
                <div class="mydog-detail-info">
                  <span class="mydog-detail-label">${t('mydogOrigin')}</span>
                  <span class="mydog-detail-value">${dog.origin}</span>
                </div>
              </div>
              <div class="mydog-detail-item">
                <span class="mydog-detail-icon">⏳</span>
                <div class="mydog-detail-info">
                  <span class="mydog-detail-label">${t('mydogLifespan')}</span>
                  <span class="mydog-detail-value">${dog.lifespan.min} - ${dog.lifespan.max} ${t('lifespanUnit')}</span>
                </div>
              </div>
              <div class="mydog-detail-item">
                <span class="mydog-detail-icon">⚖️</span>
                <div class="mydog-detail-info">
                  <span class="mydog-detail-label">${t('mydogSize')}</span>
                  <span class="mydog-detail-value">${sizeName}</span>
                </div>
              </div>
            </div>
            
            <button class="mydog-change-btn" id="mydogChangeBreedBtn">
              <span>${t('mydogChangeBreed')}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- RIGHT Column: Clinic & Lifestyle Checkpoints -->
      <div class="mydog-column-right animate-fade-in">
        <!-- Dashboard Card 1: Clinical Checkpoint -->
        <div class="mydog-dashboard-card mydog-vet-card">
          <div class="mydog-card-header">
            <span class="mydog-card-icon">🏥</span>
            <h4 class="mydog-card-title">${t('mydogVetTitle')}</h4>
          </div>
          <div class="mydog-card-body">
            <p class="mydog-card-intro">
              ${currentLang === 'ko' ? '해당 품종이 유전적, 신체적 요인으로 유독 취약하여 내원 시 청진 및 영상 진단 검사가 절실히 권고되는 주요 수의학 체크리스트입니다.' : 'Clinical vet checkpoints where this breed has high physiological or genetic vulnerabilities. Stethoscope and imaging screen checks are strongly advised.'}
            </p>
            <div class="mydog-vet-list">
              ${vetChecklistHtml}
            </div>
          </div>
        </div>

        <!-- Dashboard Card 2: Quirks (Not an Illness) -->
        <div class="mydog-dashboard-card mydog-safety-card">
          <div class="mydog-card-header">
            <span class="mydog-card-icon">⚠️</span>
            <h4 class="mydog-card-title">${t('mydogSafetyTitle')}</h4>
          </div>
          <div class="mydog-card-body">
            <p class="mydog-card-intro">
              ${currentLang === 'ko' ? '병에 걸린 발작 증세로 오해하기 쉬우나, 사실 이 견종이 가진 해부학적 구조나 정서 이완 시 자연스럽게 표현하는 정상적인 신체 생리 특징입니다.' : 'Normal physical and behavioral quirks that are frequently misdiagnosed as medical emergencies but are standard to this breed.'}
            </p>
            <div class="mydog-quirks-list">
              ${quirksHtml}
            </div>
          </div>
        </div>

        <!-- Dashboard Card 3: Traits Gauge Analysis -->
        <div class="mydog-dashboard-card mydog-traits-card">
          <div class="mydog-card-header">
            <span class="mydog-card-icon">📊</span>
            <h4 class="mydog-card-title">${t('mydogTraitsTitle')}</h4>
          </div>
          <div class="mydog-card-body">
            <div class="mydog-traits-list">
              ${traitsHtml}
            </div>
          </div>
        </div>
      </div>
    `;

    // Bind checklist checkbox events
    container.querySelectorAll('.mydog-vet-checkbox').forEach(cb => {
      cb.addEventListener('change', () => {
        const key = cb.getAttribute('data-key');
        const checked = cb.checked;
        localStorage.setItem(key, checked);
        
        // Toggle completed class for item highlighting
        const itemRow = cb.closest('.mydog-vet-item');
        if (itemRow) {
          itemRow.classList.toggle('completed', checked);
        }
      });
    });

    // Bind Change Breed Button Click Handler
    const changeBtn = $('mydogChangeBreedBtn');
    if (changeBtn) {
      changeBtn.addEventListener('click', () => {
        // Aesthetic slide-out transition
        const regView = $('mydog-registration-view');
        const dashView = $('mydog-dashboard-view');
        if (regView && dashView) {
          dashView.style.transform = 'scale(0.95)';
          dashView.style.opacity = '0';
          setTimeout(() => {
            // Remove checklist records to reset fresh next time
            for (let i = 0; i < medInfo.vetCheckpoints.length; i++) {
              localStorage.removeItem(`myDogChecked_${breedId}_${i}`);
            }
            localStorage.removeItem('myDogBreedId');
            
            dashView.classList.remove('active');
            regView.classList.add('active');
            regView.style.opacity = '0';
            regView.style.transform = 'scale(0.95)';
            setTimeout(() => {
              regView.style.opacity = '1';
              regView.style.transform = 'scale(1)';
            }, 50);
          }, 300);
        } else {
          localStorage.removeItem('myDogBreedId');
          showRegistration();
        }
      });
    }
  }

  // --- Start ---
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // ==================== 멍BTI ENGINE ====================

  // --- Question Pool (50 questions, 4 dimensions: E/I, S/N, T/F, J/P) ---
  const MBTI_QUESTIONS = [
    // E vs I (Extraversion vs Introversion)
    { id:1,  dim:'EI', polarity:'E', textKo:'낯선 사람이 다가오면 꼬리를 흔들며 먼저 냄새를 맡으러 간다', textEn:'My dog wags their tail and approaches strangers first' },
    { id:2,  dim:'EI', polarity:'I', textKo:'새 방문객이 오면 구석으로 숨거나 관망하는 편이다', textEn:'My dog hides or watches from a distance when visitors arrive' },
    { id:3,  dim:'EI', polarity:'E', textKo:'공원에서 다른 개들에게 먼저 달려가 인사한다', textEn:'My dog runs up to other dogs at the park first' },
    { id:4,  dim:'EI', polarity:'I', textKo:'집 안에서도 조용한 구석을 좋아한다', textEn:'My dog prefers quiet corners even inside the house' },
    { id:5,  dim:'EI', polarity:'E', textKo:'집에 여러 명이 있을수록 더 신나고 활발해진다', textEn:'My dog gets more excited when more people are around' },
    { id:6,  dim:'EI', polarity:'I', textKo:'장시간 외출 후 집에 돌아오면 잠시 혼자 있고 싶어하는 것 같다', textEn:'After a long outing, my dog seems to want alone time' },
    { id:7,  dim:'EI', polarity:'E', textKo:'산책 중에 만나는 모든 것에 적극적으로 반응한다', textEn:'My dog actively reacts to everything on walks' },
    { id:8,  dim:'EI', polarity:'I', textKo:'주인이 외출해도 크게 짖거나 난리치지 않는다', textEn:'My dog stays calm when I leave without making a scene' },
    { id:9,  dim:'EI', polarity:'E', textKo:'손님이 오면 흥분해서 뛰어다니고 관심을 끌려 한다', textEn:'My dog gets hyper and seeks attention when guests visit' },
    { id:10, dim:'EI', polarity:'I', textKo:'혼자 있을 때도 장난감을 혼자 갖고 노는 편이다', textEn:'My dog plays alone with toys even when no one is nearby' },
    { id:11, dim:'EI', polarity:'E', textKo:'처음 보는 사람에게도 배를 보여주며 만져달라고 한다', textEn:'My dog rolls over for belly rubs even with strangers' },
    { id:12, dim:'EI', polarity:'I', textKo:'여러 개가 함께 있는 환경보다 둘이 있는 걸 더 좋아하는 것 같다', textEn:'My dog prefers one-on-one time over group settings' },

    // S vs N (Sensing vs iNtuition)
    { id:13, dim:'SN', polarity:'S', textKo:'밥 시간이 정확하게 지켜지지 않으면 보챈다', textEn:'My dog gets restless if meal time is not on schedule' },
    { id:14, dim:'SN', polarity:'N', textKo:'가끔 아무것도 없는 공중을 뚫어지게 바라본다', textEn:'My dog sometimes stares intensely at nothing in the air' },
    { id:15, dim:'SN', polarity:'S', textKo:'항상 같은 산책 루트를 좋아하고 새 길은 불안해하기도 한다', textEn:'My dog prefers the same walking route and may get anxious on new paths' },
    { id:16, dim:'SN', polarity:'N', textKo:'집 안에서 갑자기 상상의 무언가를 쫓는 것처럼 뛰어다닌다', textEn:'My dog suddenly runs around the house as if chasing something imaginary' },
    { id:17, dim:'SN', polarity:'S', textKo:'새로운 장난감보다 오래된 익숙한 장난감을 더 좋아한다', textEn:'My dog prefers old familiar toys over new ones' },
    { id:18, dim:'SN', polarity:'N', textKo:'작은 소리나 낌새에도 귀를 쫑긋 세우며 경계한다', textEn:'My dog perks up at the slightest sound or subtle cue' },
    { id:19, dim:'SN', polarity:'S', textKo:'규칙적인 루틴(식사, 산책, 수면)을 좋아하는 편이다', textEn:'My dog thrives on routine (eating, walking, sleeping)' },
    { id:20, dim:'SN', polarity:'N', textKo:'새로운 환경이나 냄새에 호기심이 굉장히 많다', textEn:'My dog shows great curiosity toward new environments and smells' },
    { id:21, dim:'SN', polarity:'S', textKo:'자신만의 정해진 잠자리에서만 자려 한다', textEn:'My dog insists on sleeping only in their usual spot' },
    { id:22, dim:'SN', polarity:'N', textKo:'산책 중 예상치 못한 상황에도 당황하지 않고 탐색한다', textEn:'My dog explores unexpected situations calmly on walks' },
    { id:23, dim:'SN', polarity:'S', textKo:'간식을 줄 때 정해진 위치나 방식을 기대하는 것 같다', textEn:'My dog seems to expect treats in a set place or manner' },
    { id:24, dim:'SN', polarity:'N', textKo:'훈련할 때 패턴을 금방 파악하고 응용하는 것 같다', textEn:'My dog quickly picks up patterns and generalizes them in training' },

    // T vs F (Thinking vs Feeling)
    { id:25, dim:'TF', polarity:'T', textKo:'혼났을 때 잠깐 기분 나빠하다가 금방 잊고 평소대로 행동한다', textEn:'My dog gets briefly upset when scolded but quickly returns to normal' },
    { id:26, dim:'TF', polarity:'F', textKo:'주인이 슬프거나 아프면 옆에서 떠나지 않고 붙어있는다', textEn:'My dog stays close when I am sad or unwell' },
    { id:27, dim:'TF', polarity:'T', textKo:'간식 없이 칭찬만으로는 훈련 효율이 크게 떨어진다', textEn:'Training without treats is significantly less effective for my dog' },
    { id:28, dim:'TF', polarity:'F', textKo:'주인의 기분 변화를 금방 눈치채는 것 같다', textEn:'My dog quickly picks up on my mood changes' },
    { id:29, dim:'TF', polarity:'T', textKo:'놀이할 때 감정적으로 흥분하기보다 차분히 전략적으로 노는 편이다', textEn:'My dog plays in a calculated, calm way rather than emotionally' },
    { id:30, dim:'TF', polarity:'F', textKo:'혼났을 때 눈을 피하거나 눈물을 흘리는 것처럼 보인다', textEn:'My dog avoids eye contact or looks tearful when scolded' },
    { id:31, dim:'TF', polarity:'T', textKo:'다른 개가 울거나 낑낑대도 별로 반응하지 않는다', textEn:'My dog does not react much when other dogs cry or whimper' },
    { id:32, dim:'TF', polarity:'F', textKo:'가족 중 누가 다퉈도 그 감정을 감지하고 불안해한다', textEn:'My dog senses tension when family members argue and gets anxious' },
    { id:33, dim:'TF', polarity:'T', textKo:'목표(먹이, 장난감)를 위해 감정 표현 없이 집중하는 편이다', textEn:'My dog focuses intensely on goals (food, toys) without much emotion' },
    { id:34, dim:'TF', polarity:'F', textKo:'누군가 울면 다가와서 핥아주거나 위로하려 한다', textEn:'My dog approaches and licks people who are crying to comfort them' },
    { id:35, dim:'TF', polarity:'T', textKo:'혼자 노는 것도 잘 즐기며 주인에게 의존하지 않는 편이다', textEn:'My dog plays alone well and is not overly dependent on me' },
    { id:36, dim:'TF', polarity:'F', textKo:'주인이 관심을 안 주면 삐치거나 시무룩해진다', textEn:'My dog sulks or looks dejected when I do not give attention' },

    // J vs P (Judging vs Perceiving)
    { id:37, dim:'JP', polarity:'J', textKo:'하루 일과(밥, 산책)가 미뤄지면 보채며 조른다', textEn:'My dog pesters me when daily routines like meals or walks are delayed' },
    { id:38, dim:'JP', polarity:'P', textKo:'계획 없이 즉흥적인 외출이나 드라이브를 더 즐기는 것 같다', textEn:'My dog seems to enjoy spontaneous outings or drives more' },
    { id:39, dim:'JP', polarity:'J', textKo:'장난감이나 물건을 다 쓰고 나면 정해진 자리에 가져다 놓는다', textEn:'My dog tends to put toys back in certain spots after playing' },
    { id:40, dim:'JP', polarity:'P', textKo:'산책 중 계획에 없던 방향으로 꼭 가보려 한다', textEn:'My dog always tries to veer off the planned route on walks' },
    { id:41, dim:'JP', polarity:'J', textKo:'자신만의 구역(잠자리, 밥그릇 위치)이 바뀌면 불편해한다', textEn:'My dog is bothered when their territory (bed, bowl location) changes' },
    { id:42, dim:'JP', polarity:'P', textKo:'새로운 장난감이 생기면 오래된 것은 잊어버리는 편이다', textEn:'My dog quickly forgets old toys when given something new' },
    { id:43, dim:'JP', polarity:'J', textKo:'훈련을 체계적으로 진행하면 빠르게 습득한다', textEn:'My dog learns quickly when training is structured and consistent' },
    { id:44, dim:'JP', polarity:'P', textKo:'훈련 중에도 다른 것에 시선이 쉽게 분산된다', textEn:'My dog gets easily distracted during training sessions' },
    { id:45, dim:'JP', polarity:'J', textKo:'밥을 먹는 방식이 항상 일정하다(빠르게, 혹은 천천히 꼼꼼히)', textEn:'My dog always eats in the same consistent manner (fast or slow)' },
    { id:46, dim:'JP', polarity:'P', textKo:'때로는 밥 먹다가 중간에 멈추고 딴짓을 하기도 한다', textEn:'My dog sometimes stops mid-meal to do something else' },
    { id:47, dim:'JP', polarity:'J', textKo:'잠 자리나 쉬는 자세가 항상 비슷하게 일정하다', textEn:'My dog always sleeps or rests in the same position and spot' },
    { id:48, dim:'JP', polarity:'P', textKo:'다양한 장소에서 잘 자고 환경에 빠르게 적응한다', textEn:'My dog sleeps anywhere and adapts quickly to different environments' },
    { id:49, dim:'JP', polarity:'J', textKo:'집에 돌아오면 자신만의 귀가 루틴이 있다(특정 장소 먼저 확인 등)', textEn:'My dog has a homecoming ritual (checking certain spots first, etc.)' },
    { id:50, dim:'JP', polarity:'P', textKo:'이것저것 탐구하다 보면 갑자기 다른 것에 관심을 바꾼다', textEn:'My dog shifts interest rapidly while exploring things' },
  ];

  // --- 16 MBTI Profiles (dog-themed) ---
  const MBTI_PROFILES = {
    ESTJ: { emoji:'🏆', nameKo:'총사령관 강아지', nameEn:'The Commander', descKo:'규칙과 질서를 사랑하며 무리를 이끄는 타입. 훈련을 잘 따르고 보호 본능이 강합니다.', descEn:'Loves rules and order, natural leader of the pack. Responds well to training with strong protective instincts.', color:'#ef4444', commonBreeds:['german-shepherd','rottweiler','doberman-pinscher','boxer'] },
    ESTP: { emoji:'🎯', nameKo:'모험가 강아지', nameEn:'The Adventurer', descKo:'순간의 자극을 즐기는 대담한 탐험가. 에너지가 넘치고 새로운 것을 두려워하지 않습니다.', descEn:'Bold explorer who lives for the moment. Overflowing energy with no fear of the new.', color:'#f97316', commonBreeds:['jack-russell-terrier','siberian-husky','vizsla','weimaraner'] },
    ESFJ: { emoji:'🌸', nameKo:'사교왕 강아지', nameEn:'The Social Butterfly', descKo:'모두를 사랑하고 모두에게 사랑받는 타입. 사람과 함께 있을 때 가장 행복합니다.', descEn:'Loves everyone and is loved by all. Happiest when surrounded by people.', color:'#ec4899', commonBreeds:['golden-retriever','labrador-retriever','beagle','cocker-spaniel'] },
    ESFP: { emoji:'🎉', nameKo:'파티왕 강아지', nameEn:'The Party Animal', descKo:'항상 흥겹고 즉흥적인 분위기 메이커. 어디서든 즐거움을 찾아냅니다.', descEn:'Always cheerful and spontaneous mood-maker. Finds fun in every situation.', color:'#f59e0b', commonBreeds:['pomeranian','maltese','bichon-frise','pug'] },
    ENTJ: { emoji:'👑', nameKo:'황제 강아지', nameEn:'The Monarch', descKo:'타고난 리더십으로 상황을 장악하는 당당한 타입. 지능이 높고 목표 지향적입니다.', descEn:'Dominates the situation with natural leadership. Highly intelligent and goal-oriented.', color:'#8b5cf6', commonBreeds:['doberman-pinscher','german-shepherd','border-collie','giant-schnauzer'] },
    ENTP: { emoji:'🔬', nameKo:'발명가 강아지', nameEn:'The Innovator', descKo:'창의적이고 장난기 넘치는 문제해결사. 지루함을 못 견디고 항상 새 도전을 찾습니다.', descEn:'Creative and mischievous problem-solver. Cannot stand boredom and always seeks new challenges.', color:'#06b6d4', commonBreeds:['border-collie','poodle','australian-shepherd','labrador-retriever'] },
    ENFJ: { emoji:'💖', nameKo:'치유사 강아지', nameEn:'The Healer', descKo:'주인의 감정을 읽고 먼저 위로해주는 공감 천재. 감정적 유대가 매우 깊습니다.', descEn:'Empathy genius who reads and comforts the owner first. Builds incredibly deep emotional bonds.', color:'#22c55e', commonBreeds:['golden-retriever','labrador-retriever','cavalier-king-charles-spaniel','collie'] },
    ENFP: { emoji:'🌈', nameKo:'자유영혼 강아지', nameEn:'The Free Spirit', descKo:'열정적이고 상상력이 풍부한 자유로운 영혼. 매일 새로운 것을 발견하며 기뻐합니다.', descEn:'Passionate and imaginative free spirit. Delights in discovering something new every day.', color:'#3b82f6', commonBreeds:['irish-setter','brittany','dalmatian','pembroke-welsh-corgi'] },
    ISTJ: { emoji:'🏛️', nameKo:'관리자 강아지', nameEn:'The Guardian', descKo:'믿음직하고 한결같은 든든한 지킴이. 규칙을 철저히 따르고 신뢰를 최우선으로 합니다.', descEn:'Reliable and consistent guardian. Strictly follows rules and places trust above all.', color:'#64748b', commonBreeds:['shiba-inu','jindo','akita','chow-chow'] },
    ISTP: { emoji:'🛠️', nameKo:'장인 강아지', nameEn:'The Craftsman', descKo:'독립적이고 실용적인 고독한 전문가. 필요할 때만 행동하고 에너지를 아낄 줄 압니다.', descEn:'Independent and practical lone expert. Acts only when needed and conserves energy wisely.', color:'#78716c', commonBreeds:['basenji','shiba-inu','alaskan-malamute','greyhound'] },
    ISFJ: { emoji:'🕊️', nameKo:'수호천사 강아지', nameEn:'The Guardian Angel', descKo:'가족을 헌신적으로 돌보는 조용한 보호자. 주인의 곁을 떠나지 않는 충성스러운 동반자입니다.', descEn:'Quiet protector who devotedly cares for the family. A loyal companion who never leaves the owner\'s side.', color:'#84cc16', commonBreeds:['maltese','shih-tzu','cavalier-king-charles-spaniel','bichon-frise'] },
    ISFP: { emoji:'🎨', nameKo:'예술가 강아지', nameEn:'The Artist', descKo:'섬세하고 감수성 풍부한 조용한 예술가. 아름다운 것에 민감하고 평화를 사랑합니다.', descEn:'Sensitive and emotionally rich quiet artist. Attuned to beauty and loves peace.', color:'#a78bfa', commonBreeds:['greyhound','whippet','saluki','yorkshire-terrier'] },
    INTJ: { emoji:'🧠', nameKo:'전략가 강아지', nameEn:'The Strategist', descKo:'독립적이고 분석적인 고독한 천재. 자신만의 세계가 있고 쉽게 마음을 열지 않습니다.', descEn:'Independent and analytical lone genius. Has their own inner world and does not open up easily.', color:'#1e40af', commonBreeds:['shiba-inu','basenji','chow-chow','akita'] },
    INTP: { emoji:'🔭', nameKo:'철학자 강아지', nameEn:'The Philosopher', descKo:'깊은 생각에 잠기는 신비로운 탐구자. 관찰력이 뛰어나고 예상치 못한 행동으로 놀라게 합니다.', descEn:'Mysterious explorer lost in deep thought. Highly observant and surprises with unexpected behavior.', color:'#0891b2', commonBreeds:['basenji','greyhound','saluki','poodle'] },
    INFJ: { emoji:'🌙', nameKo:'예언자 강아지', nameEn:'The Mystic', descKo:'주인의 마음을 꿰뚫어 보는 신비로운 감지자. 깊은 유대를 형성하고 직관이 예리합니다.', descEn:'Mysterious sensor who sees through the owner\'s heart. Forms deep bonds with sharp intuition.', color:'#7c3aed', commonBreeds:['border-collie','belgian-malinois','collie','australian-shepherd'] },
    INFP: { emoji:'🌷', nameKo:'몽상가 강아지', nameEn:'The Dreamer', descKo:'부드럽고 이상적인 낭만주의자. 조화를 사랑하고 자신만의 감성 세계가 있습니다.', descEn:'Gentle and idealistic romantic. Loves harmony and has their own rich emotional world.', color:'#db2777', commonBreeds:['cavalier-king-charles-spaniel','whippet','maltese','havanese'] },
  };

  // Breed → common MBTI types mapping for rarity check
  const BREED_COMMON_TYPES = {};
  Object.entries(MBTI_PROFILES).forEach(([type, profile]) => {
    (profile.commonBreeds || []).forEach(breedId => {
      if (!BREED_COMMON_TYPES[breedId]) BREED_COMMON_TYPES[breedId] = [];
      BREED_COMMON_TYPES[breedId].push(type);
    });
  });

  // --- 멍BTI State ---
  let mbtiSelectedBreed = null; // { id, nameKo, nameEn } or null
  let mbtiMode = 10; // 10 or 50
  let mbtiCurrentQ = 0;
  let mbtiAnswers = {}; // { dim: score } E+,I-; S+,N-; T+,F-; J+,P-
  let mbtiQuestions = []; // active question list

  function initMbti() {
    // Breed search autocomplete
    const breedInput = $('mbtiBreedInput');
    const breedClear = $('mbtiBreedClear');
    const autocomplete = $('mbtiBreedAutocomplete');
    const selectedBreedEl = $('mbtiSelectedBreed');
    const selectedBreedName = $('mbtiSelectedBreedName');
    const breedDeselect = $('mbtiBreedDeselect');
    const breedUnknown = $('mbtiBreedUnknown');

    if (!breedInput) return;

    breedInput.addEventListener('input', () => {
      const q = breedInput.value.trim().toLowerCase();
      breedClear.style.display = q ? 'flex' : 'none';
      if (!q) { autocomplete.innerHTML = ''; autocomplete.classList.remove('open'); return; }
      const matches = DOG_BREEDS.filter(d =>
        d.nameKo.toLowerCase().includes(q) || d.nameEn.toLowerCase().includes(q)
      ).slice(0, 8);
      if (!matches.length) { autocomplete.innerHTML = ''; autocomplete.classList.remove('open'); return; }
      autocomplete.innerHTML = matches.map(d => `
        <div class="mbti-autocomplete-item" data-id="${d.id}">
          <span class="mbti-ac-ko">${d.nameKo}</span>
          <span class="mbti-ac-en">${d.nameEn}</span>
        </div>
      `).join('');
      autocomplete.classList.add('open');
      autocomplete.querySelectorAll('.mbti-autocomplete-item').forEach(item => {
        item.addEventListener('click', () => {
          const dog = DOG_BREEDS.find(d => d.id === item.getAttribute('data-id'));
          mbtiSelectBreed(dog);
        });
      });
    });

    breedClear.addEventListener('click', () => {
      breedInput.value = '';
      breedClear.style.display = 'none';
      autocomplete.innerHTML = '';
      autocomplete.classList.remove('open');
    });

    breedDeselect.addEventListener('click', () => {
      mbtiSelectedBreed = null;
      selectedBreedEl.classList.add('hidden');
      breedInput.value = '';
      breedInput.disabled = false;
      breedUnknown.style.display = '';
    });

    breedUnknown.addEventListener('click', () => {
      mbtiSelectedBreed = null;
      breedUnknown.textContent = currentLang === 'ko' ? '✓ 종 미선택 상태입니다' : '✓ No breed selected';
      breedUnknown.classList.add('selected');
      breedInput.disabled = true;
      breedInput.value = '';
      autocomplete.innerHTML = '';
      autocomplete.classList.remove('open');
    });

    // Mode buttons
    $('mbtiModeSpeed').addEventListener('click', () => mbtiStartTest(10));
    $('mbtiModeDeep').addEventListener('click', () => mbtiStartTest(50));

    // Back button
    $('mbtiBackBtn').addEventListener('click', mbtiGoToMode);

    // Retry / Share
    $('mbtiRetryBtn').addEventListener('click', mbtiGoToMode);
    $('mbtiShareBtn').addEventListener('click', mbtiShareResult);

    // Close autocomplete on outside click
    document.addEventListener('click', (e) => {
      if (!e.target.closest('#mbtiBreedInput') && !e.target.closest('#mbtiBreedAutocomplete')) {
        autocomplete.classList.remove('open');
      }
    });
  }

  function mbtiSelectBreed(dog) {
    mbtiSelectedBreed = dog;
    $('mbtiSelectedBreedName').textContent = `${dog.nameKo} (${dog.nameEn})`;
    $('mbtiSelectedBreed').classList.remove('hidden');
    $('mbtiBreedInput').value = '';
    $('mbtiBreedInput').disabled = false;
    $('mbtiBreedAutocomplete').innerHTML = '';
    $('mbtiBreedAutocomplete').classList.remove('open');
    $('mbtiBreedClear').style.display = 'none';
    // Reset unknown btn
    const unk = $('mbtiBreedUnknown');
    unk.textContent = currentLang === 'ko' ? '🤷 종을 모르겠어요' : '🤷 I don\'t know the breed';
    unk.classList.remove('selected');
    $('mbtiBreedInput').disabled = false;
  }

  function mbtiGoToMode() {
    // Reset state
    mbtiAnswers = {};
    mbtiCurrentQ = 0;
    // Reset breed unknown btn
    const unk = $('mbtiBreedUnknown');
    if (unk) {
      unk.textContent = currentLang === 'ko' ? '🤷 종을 모르겠어요' : '🤷 I don\'t know the breed';
      unk.classList.remove('selected');
    }
    const breedInput = $('mbtiBreedInput');
    if (breedInput) breedInput.disabled = false;

    mbtiShowStep('mode');
  }

  function mbtiStartTest(mode) {
    mbtiMode = mode;
    mbtiAnswers = { EI: 0, SN: 0, TF: 0, JP: 0 };

    // Shuffle and pick questions per dimension (mode/4 each)
    const perDim = mode / 4; // 2.5 → 2 or 3 per dim for 10, 12-13 for 50
    const dims = ['EI', 'SN', 'TF', 'JP'];
    const pool = [];
    dims.forEach(dim => {
      const dimQs = MBTI_QUESTIONS.filter(q => q.dim === dim);
      // Shuffle
      const shuffled = dimQs.sort(() => Math.random() - 0.5);
      pool.push(...shuffled.slice(0, Math.ceil(perDim)));
    });
    // Shuffle all and trim to exact mode count
    mbtiQuestions = pool.sort(() => Math.random() - 0.5).slice(0, mode);
    mbtiCurrentQ = 0;

    mbtiShowStep('questions');
    mbtiRenderQuestion();
  }

  function mbtiRenderQuestion() {
    const q = mbtiQuestions[mbtiCurrentQ];
    const total = mbtiQuestions.length;
    const pct = (mbtiCurrentQ / total) * 100;

    // Progress
    $('mbtiProgressFill').style.width = pct + '%';
    $('mbtiProgressText').textContent = `${mbtiCurrentQ + 1} / ${total}`;

    // Dimension badge
    const dimLabels = { EI: currentLang === 'ko' ? '사교성' : 'Sociability', SN: currentLang === 'ko' ? '탐구력' : 'Curiosity', TF: currentLang === 'ko' ? '감성' : 'Empathy', JP: currentLang === 'ko' ? '규칙성' : 'Structure' };
    $('mbtiQDimension').textContent = dimLabels[q.dim] || q.dim;

    const text = currentLang === 'ko' ? q.textKo : q.textEn;
    $('mbtiQText').textContent = text;

    // Animate card in
    const card = $('mbtiQuestionCard');
    card.style.opacity = '0';
    card.style.transform = 'translateY(16px)';
    setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 30);

    // Answer buttons: 4-point scale
    const answers = currentLang === 'ko'
      ? ['매우 그렇다', '그렇다', '아니다', '전혀 아니다']
      : ['Strongly Yes', 'Yes', 'No', 'Strongly No'];
    const scores = [2, 1, -1, -2]; // positive = polarity direction

    $('mbtiAnswers').innerHTML = answers.map((label, i) => `
      <button class="mbti-answer-btn" data-score="${scores[i]}" id="mbtiAns${i}">
        <span class="mbti-ans-dot"></span>
        <span>${label}</span>
      </button>
    `).join('');

    $('mbtiAnswers').querySelectorAll('.mbti-answer-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        // Visual feedback
        $('mbtiAnswers').querySelectorAll('.mbti-answer-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        setTimeout(() => mbtiRecordAnswer(q, parseInt(btn.getAttribute('data-score'))), 300);
      });
    });
  }

  function mbtiRecordAnswer(q, score) {
    // Positive = E/S/T/J, Negative = I/N/F/P
    const multiplier = q.polarity === q.dim[0] ? 1 : -1;
    mbtiAnswers[q.dim] = (mbtiAnswers[q.dim] || 0) + score * multiplier;
    mbtiCurrentQ++;
    if (mbtiCurrentQ < mbtiQuestions.length) {
      mbtiRenderQuestion();
    } else {
      mbtiShowResult();
    }
  }

  function mbtiComputeType() {
    const E = mbtiAnswers.EI >= 0 ? 'E' : 'I';
    const S = mbtiAnswers.SN >= 0 ? 'S' : 'N';
    const T = mbtiAnswers.TF >= 0 ? 'T' : 'F';
    const J = mbtiAnswers.JP >= 0 ? 'J' : 'P';
    return E + S + T + J;
  }

  function mbtiShowResult() {
    const type = mbtiComputeType();
    const profile = MBTI_PROFILES[type];
    if (!profile) return;

    // Rarity check
    let rarityBadge = '';
    let rarityText = '';
    let rarityClass = 'mbti-rarity-unknown';
    if (mbtiSelectedBreed) {
      const commonTypes = BREED_COMMON_TYPES[mbtiSelectedBreed.id] || [];
      const isCommon = commonTypes.includes(type);
      const breedName = currentLang === 'ko' ? mbtiSelectedBreed.nameKo : mbtiSelectedBreed.nameEn;
      if (isCommon) {
        rarityBadge = '⭐';
        rarityText = currentLang === 'ko'
          ? `${breedName}에게 <strong>자주 나타나는</strong> 성격 유형이에요`
          : `A <strong>common</strong> personality for ${breedName}`;
        rarityClass = 'mbti-rarity-common';
      } else {
        rarityBadge = '✨';
        rarityText = currentLang === 'ko'
          ? `${breedName}에서 <strong>매우 드문</strong> 개성 넘치는 강아지예요!`
          : `A <strong>rare & unique</strong> personality for ${breedName}!`;
        rarityClass = 'mbti-rarity-rare';
      }
    } else {
      rarityBadge = '🐾';
      rarityText = currentLang === 'ko' ? '품종을 선택하면 희귀도를 확인할 수 있어요' : 'Select a breed to check personality rarity';
      rarityClass = 'mbti-rarity-unknown';
    }

    // Score bars with percentage labels
    const dims = [
      { left: 'E', right: 'I', leftKo: '외향적', rightKo: '내향적', leftEn: 'Extrovert', rightEn: 'Introvert', score: mbtiAnswers.EI },
      { left: 'S', right: 'N', leftKo: '현실적', rightKo: '직관적', leftEn: 'Sensing',   rightEn: 'Intuitive', score: mbtiAnswers.SN },
      { left: 'T', right: 'F', leftKo: '이성적', rightKo: '감성적', leftEn: 'Thinking',  rightEn: 'Feeling',   score: mbtiAnswers.TF },
      { left: 'J', right: 'P', leftKo: '계획적', rightKo: '즉흥적', leftEn: 'Judging',   rightEn: 'Perceiving',score: mbtiAnswers.JP },
    ];

    const barsHtml = dims.map((d, i) => {
      const max = mbtiMode * 2; // max possible score = mode * 2 (all "strongly" one way)
      const clampedScore = Math.max(-max, Math.min(max, d.score));
      const leftPct = Math.round(((clampedScore + max) / (max * 2)) * 100);
      const dominant = d.score >= 0 ? d.left : d.right;
      const dominantPct = d.score >= 0 ? leftPct : (100 - leftPct);
      const isLeft = d.score >= 0;
      const leftLabel  = currentLang === 'ko' ? d.leftKo  : d.leftEn;
      const rightLabel = currentLang === 'ko' ? d.rightKo : d.rightEn;
      return `
        <div class="mbti-dim-row" style="--dim-delay:${i * 120}ms">
          <div class="mbti-dim-labels">
            <span class="mbti-dim-letter ${isLeft ? 'dominant' : ''}" style="${isLeft ? `color:${profile.color}` : ''}">${d.left}</span>
            <span class="mbti-dim-name ${isLeft ? 'dominant' : ''}">${leftLabel}</span>
            <span class="mbti-dim-pct" style="${isLeft ? `color:${profile.color};font-weight:800` : 'color:var(--text-muted)'}">${isLeft ? dominantPct : 100 - dominantPct}%</span>
            <div class="mbti-dim-bar-wrap">
              <div class="mbti-dim-bar-fill" data-pct="${leftPct}" style="width:50%; background:${profile.color};"></div>
            </div>
            <span class="mbti-dim-pct" style="${!isLeft ? `color:${profile.color};font-weight:800` : 'color:var(--text-muted)'}">${!isLeft ? dominantPct : 100 - dominantPct}%</span>
            <span class="mbti-dim-name ${!isLeft ? 'dominant' : ''}">${rightLabel}</span>
            <span class="mbti-dim-letter ${!isLeft ? 'dominant' : ''}" style="${!isLeft ? `color:${profile.color}` : ''}">${d.right}</span>
          </div>
        </div>`;
    }).join('');

    // Similar breeds with images
    const similarHtml = (profile.commonBreeds || []).slice(0, 4).map(id => {
      const d = DOG_BREEDS.find(b => b.id === id);
      if (!d) return '';
      const name = currentLang === 'ko' ? d.nameKo : d.nameEn;
      const img = d.thumbnailUrl || d.imageUrl || '';
      return `
        <div class="mbti-similar-item">
          ${img ? `<div class="mbti-similar-img-wrap"><img src="${img}" alt="${name}" class="mbti-similar-img" loading="lazy"></div>` : `<div class="mbti-similar-img-wrap mbti-similar-no-img">🐕</div>`}
          <span class="mbti-similar-name">${name}</span>
        </div>`;
    }).join('');

    // Save to localStorage
    const saveKey = mbtiSelectedBreed ? `mbtiResult_${mbtiSelectedBreed.id}_${mbtiMode}` : `mbtiResult_unknown_${mbtiMode}`;
    localStorage.setItem(saveKey, type);

    // Analytics event
    if (typeof CustomEvent !== 'undefined') {
      document.dispatchEvent(new CustomEvent('dtiCompleted', { detail: { type, breed: mbtiSelectedBreed?.id, mode: mbtiMode } }));
    }

    $('mbtiResultCard').innerHTML = `
      <!-- Confetti layer -->
      <div class="mbti-confetti" id="mbtiConfetti" aria-hidden="true"></div>

      <!-- Hero: type + identity -->
      <div class="mbti-result-hero" style="--profile-color:${profile.color}">
        <div class="mbti-result-hero-bg" style="background:radial-gradient(ellipse at 50% 0%, ${profile.color}44 0%, transparent 70%)"></div>
        <div class="mbti-result-type-ring" style="--c:${profile.color}">
          <span class="mbti-result-type-text">${type}</span>
        </div>
        <div class="mbti-result-emoji-wrap">
          <span class="mbti-result-emoji">${profile.emoji}</span>
        </div>
        <h3 class="mbti-result-name">${currentLang === 'ko' ? profile.nameKo : profile.nameEn}</h3>
        <p class="mbti-result-desc">${currentLang === 'ko' ? profile.descKo : profile.descEn}</p>
      </div>

      <!-- Rarity pill -->
      <div class="mbti-rarity-pill ${rarityClass}">
        <span class="mbti-rarity-pill-icon">${rarityBadge}</span>
        <span class="mbti-rarity-pill-text">${rarityText}</span>
      </div>

      <!-- Dimension bars -->
      <div class="mbti-result-section">
        <div class="mbti-section-label">${currentLang === 'ko' ? '성격 스펙트럼' : 'Personality Spectrum'}</div>
        <div class="mbti-dims-grid">${barsHtml}</div>
      </div>

      <!-- Similar breeds -->
      ${similarHtml ? `
      <div class="mbti-result-section mbti-result-section-breeds">
        <div class="mbti-section-label">${currentLang === 'ko' ? '이런 견종과 비슷해요' : 'Similar Breed Personalities'}</div>
        <div class="mbti-similar-grid">${similarHtml}</div>
      </div>` : ''}
    `;

    mbtiShowStep('result');

    // Fire confetti
    mbtiFireConfetti(profile.color);

    // Animate bars after paint
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.querySelectorAll('.mbti-dim-bar-fill').forEach(bar => {
          const pct = bar.getAttribute('data-pct');
          bar.style.transition = 'width 0.9s cubic-bezier(0.34,1.56,0.64,1)';
          bar.style.width = pct + '%';
        });
        document.querySelectorAll('.mbti-dim-row').forEach(row => {
          const delay = row.style.getPropertyValue('--dim-delay') || '0ms';
          row.style.transitionDelay = delay;
          row.classList.add('visible');
        });
      });
    });

    // Animate result sections
    setTimeout(() => {
      document.querySelectorAll('.mbti-result-section').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 120);
      });
      const rarityPill = document.querySelector('.mbti-rarity-pill');
      if (rarityPill) setTimeout(() => rarityPill.classList.add('visible'), 60);
    }, 200);
  }

  function mbtiFireConfetti(color) {
    const container = document.getElementById('mbtiConfetti');
    if (!container) return;
    container.innerHTML = '';
    const colors = [color, '#fbbf24', '#34d399', '#f472b6', '#60a5fa', '#a78bfa'];
    const count = 48;
    for (let i = 0; i < count; i++) {
      const el = document.createElement('span');
      el.className = 'mbti-confetti-piece';
      const c = colors[Math.floor(Math.random() * colors.length)];
      const isCircle = Math.random() > 0.5;
      el.style.cssText = `
        left:${Math.random() * 100}%;
        background:${c};
        width:${isCircle ? 8 : Math.random() * 6 + 4}px;
        height:${isCircle ? 8 : Math.random() * 14 + 6}px;
        border-radius:${isCircle ? '50%' : '2px'};
        animation-delay:${Math.random() * 0.6}s;
        animation-duration:${Math.random() * 0.8 + 0.8}s;
        transform:rotate(${Math.random() * 360}deg);
      `;
      container.appendChild(el);
    }
    // Clean up after animation
    setTimeout(() => { if (container) container.innerHTML = ''; }, 2400);
  }


  function mbtiShowStep(step) {
    ['mode', 'questions', 'result'].forEach(s => {
      const el = $(`mbti-step-${s}`);
      if (el) el.classList.toggle('active', s === step);
    });
  }

  function mbtiShareResult() {
    const type = mbtiComputeType();
    const profile = MBTI_PROFILES[type];
    if (!profile) return;
    const breedName = mbtiSelectedBreed ? (currentLang === 'ko' ? mbtiSelectedBreed.nameKo : mbtiSelectedBreed.nameEn) : '';
    const shareText = currentLang === 'ko'
      ? `우리 강아지의 멍BTI는 ${type} ${profile.nameKo}! ${breedName ? `(${breedName}) ` : ''}${profile.descKo} — 강아지 백과사전에서 테스트해보세요!`
      : `My dog's DogBTI is ${type} — ${profile.nameEn}! ${breedName ? `(${breedName}) ` : ''}${profile.descEn} — Try it on Dog Encyclopedia!`;
    if (navigator.share) {
      navigator.share({ title: '멍BTI', text: shareText });
    } else {
      navigator.clipboard.writeText(shareText).then(() => {
        $('mbtiShareBtn').textContent = currentLang === 'ko' ? '✅ 복사되었습니다!' : '✅ Copied!';
        setTimeout(() => {
          $('mbtiShareBtn').textContent = t('mbtiShare');
        }, 2000);
      });
    }
  }

})();

