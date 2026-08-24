import { gsap } from 'gsap';
import './styles.css';

const parts = {
  helmet: {
    name: 'Helmet',
    code: 'X1-H01',
    description: 'The Chiron-X1™ Elite helmet is manufactured from a proprietary blend of carbon fibre composite materials. Its shell combines exceptional protection with freedom of movement and a wide field of view.',
    detail: 'Designed for high-fidelity CQB training, the helmet integrates cleanly with the rest of the X1 platform while retaining the balance and visual awareness required for room entry and close-contact drills.'
  },
  shoulders: {
    name: 'Shoulder system',
    code: 'X1-S02',
    description: 'Articulated shoulder assemblies protect high-impact zones without restricting weapon presentation, climbing, or close-contact movement.',
    detail: 'Layered plates follow the shoulder through rotation while the independent harness points keep each component stable during intensive scenario training.'
  },
  torso: {
    name: 'Torso armour',
    code: 'X1-T03',
    description: 'The central torso system distributes impact across a rigid composite shell and a tuned internal suspension layer.',
    detail: 'Its modular front, side, and lower-abdomen construction supports realistic full-force training while preserving mobility through the waist and shoulders.'
  },
  arms: {
    name: 'Arm protection',
    code: 'X1-A04',
    description: 'Segmented arm and forearm protection follows the natural bend of the elbow and keeps critical joints covered throughout movement.',
    detail: 'Independent shells and flexible connection zones provide protection for weapon handling, defensive tactics, and high-contact scenario work.'
  },
  belt: {
    name: 'Utility belt',
    code: 'X1-B05',
    description: 'The low-profile belt anchors the upper and lower suit systems while maintaining clearance for operational equipment.',
    detail: 'Its quick-adjust fit and central buckle make the system fast to configure between users and training rotations.'
  },
  legs: {
    name: 'Leg protection',
    code: 'X1-L06',
    description: 'Floating knee and shin shells provide continuous frontal protection with deliberate gaps for an unrestricted stride.',
    detail: 'The components are shaped for kneeling, rapid movement, and repeated ground contact in high-intensity training environments.'
  }
};

document.querySelector('#app').innerHTML = `
  <div class="viewport">
    <section class="stage" aria-label="Chiron X1 Elite interactive product view">
      <header class="site-header">
        <a class="brand" href="#" aria-label="Chiron Global Tech home">
          <span class="brand-mark"><img src="/assets/logo.png" alt="" /></span>
          <span class="brand-name">CHIRON<br />GLOBAL<br />TECH</span>
        </a>
        <nav class="nav" aria-label="Primary navigation">
          <a href="#">Home</a><a href="#">About</a><a href="#">Videos</a><a href="#">Partners</a><a href="#">Product</a><a href="#">Blog</a><a href="#">Contact us</a>
        </nav>
      </header>

      <div class="top-rule"></div>
      <div class="status-dots" aria-hidden="true"><i></i><i></i><i></i></div>
      <div class="top-code"><span class="chevrons">»»»»»»»»</span> X1R234TT</div>

      <div class="product-kicker">Products:</div>
      <div class="hero-title" aria-hidden="true"><span>CHIRON-</span><span>X1 ELITE</span></div>
      <div class="tm">TM</div>
      <div class="serial">X1R234TT<br />00/11</div>

      <div class="product-canvas" id="productCanvas">
        <div class="product-motion" id="productMotion">
          <img class="product-image" id="productImage" src="/assets/chiron-product-x1elite.png" alt="Exploded view of the Chiron X1 Elite protective suit" />
          <div class="focus-halo" aria-hidden="true"></div>
          <button class="hotspot helmet" data-part="helmet" aria-label="Explore helmet"></button>
          <button class="hotspot shoulder-left" data-part="shoulders" aria-label="Explore shoulder protection"></button>
          <button class="hotspot shoulder-right" data-part="shoulders" aria-label="Explore shoulder protection"></button>
          <button class="hotspot torso" data-part="torso" aria-label="Explore torso armour"></button>
          <button class="hotspot arm-left" data-part="arms" aria-label="Explore arm protection"></button>
          <button class="hotspot arm-right" data-part="arms" aria-label="Explore arm protection"></button>
          <button class="hotspot belt" data-part="belt" aria-label="Explore utility belt"></button>
          <button class="hotspot legs" data-part="legs" aria-label="Explore leg protection"></button>
        </div>
      </div>

      <div class="part-label" id="partLabel" aria-hidden="true">
        <span id="partLabelText">Helmet</span><span class="arrow">↗</span>
      </div>

      <aside class="detail-panel" id="detailPanel" aria-live="polite" aria-hidden="true">
        <div class="detail-meta"><span id="partCode">X1-H01</span><button id="closePanel" aria-label="Close detail panel">×</button></div>
        <p id="partDescription"></p>
        <p id="partDetail"></p>
      </aside>

      <div class="lower-rule"></div>
      <div class="lower-dots" aria-hidden="true"><i></i><i></i><i></i></div>

      <div class="variant-list" role="group" aria-label="Product variants">
        <button class="variant active" data-variant="elite"><span>X1</span><span>Elite</span></button>
        <button class="variant" data-variant="hybrid"><span>X1</span><span>Hybrid</span></button>
        <button class="variant" data-variant="x1r"><span>X1R</span><span></span></button>
      </div>

      <section class="product-note">
        <div class="note-year">2026</div>
        <p>Designed for frontline military, special forces and police tactical operations units, the Chiron-X1™ Elite Close Quarter Battle (CQB) training suit enables training for lethality, preparing personnel to face highly violent operational scenarios.</p>
      </section>

      <div class="bottom-rule"></div>
      <div class="page-index">X0</div>
      <p class="interaction-hint"><span>Click a component</span> to inspect the system</p>
    </section>
  </div>
`;

const viewport = document.querySelector('.viewport');
const stage = document.querySelector('.stage');
const productCanvas = document.querySelector('#productCanvas');
const productMotion = document.querySelector('#productMotion');
const productImage = document.querySelector('#productImage');
const partLabel = document.querySelector('#partLabel');
const partLabelText = document.querySelector('#partLabelText');
const detailPanel = document.querySelector('#detailPanel');
const partCode = document.querySelector('#partCode');
const partDescription = document.querySelector('#partDescription');
const partDetail = document.querySelector('#partDetail');
const closePanel = document.querySelector('#closePanel');
const hint = document.querySelector('.interaction-hint');
let activePart = null;
let hoverPart = null;
let isLabelVisible = false;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const labelX = gsap.quickTo(partLabel, 'x', { duration: 0.24, ease: 'power3.out' });
const labelY = gsap.quickTo(partLabel, 'y', { duration: 0.24, ease: 'power3.out' });
const productX = gsap.quickTo(productCanvas, 'x', { duration: 0.8, ease: 'power3.out' });
const productY = gsap.quickTo(productCanvas, 'y', { duration: 0.8, ease: 'power3.out' });
const titleX = gsap.quickTo('.hero-title', 'x', { duration: 1.2, ease: 'power3.out' });
const titleY = gsap.quickTo('.hero-title', 'y', { duration: 1.2, ease: 'power3.out' });
const railsX = gsap.quickTo('.top-code', 'x', { duration: 1.3, ease: 'power3.out' });

function fitStage() {
  const scale = Math.min(window.innerWidth / 1440, window.innerHeight / 1024);
  stage.style.setProperty('--stage-scale', scale);
  viewport.style.width = `${1440 * scale}px`;
  viewport.style.height = `${1024 * scale}px`;
}

function positionLabel(clientX, clientY) {
  const stageRect = stage.getBoundingClientRect();
  const scale = Number.parseFloat(getComputedStyle(stage).getPropertyValue('--stage-scale')) || 1;
  const labelWidth = partLabel.offsetWidth;
  const labelHeight = partLabel.offsetHeight;
  const rawX = (clientX - stageRect.left) / scale + 16;
  const rawY = (clientY - stageRect.top) / scale + 16;
  labelX(Math.min(rawX, 1440 - labelWidth - 18));
  labelY(Math.min(rawY, 1024 - labelHeight - 18));
}

function showLabel(partName, clientX, clientY) {
  const data = parts[partName];
  if (!data) return;
  partLabelText.textContent = data.name;
  if (!isLabelVisible) {
    isLabelVisible = true;
    gsap.to(partLabel, { autoAlpha: 1, duration: 0.15, ease: 'power1.out', overwrite: 'auto' });
  }
  if (typeof clientX === 'number' && typeof clientY === 'number') positionLabel(clientX, clientY);
}

function hideLabel() {
  isLabelVisible = false;
  gsap.to(partLabel, { autoAlpha: 0, duration: 0.12, ease: 'power1.out', overwrite: 'auto' });
}

function selectPart(partName) {
  const data = parts[partName];
  if (!data) return;
  activePart = partName;
  hideLabel();
  partCode.textContent = data.code;
  partDescription.textContent = data.description;
  partDetail.textContent = data.detail;
  detailPanel.setAttribute('aria-hidden', 'false');
  stage.dataset.activePart = partName;
  productCanvas.classList.add('is-focused');
  productImage.src = partName === 'helmet'
    ? '/assets/chiron-product-x1elite-helmet.png'
    : '/assets/chiron-product-x1elite.png';
  hint.classList.add('is-hidden');
}

function clearSelection() {
  activePart = null;
  stage.removeAttribute('data-active-part');
  detailPanel.setAttribute('aria-hidden', 'true');
  productCanvas.classList.remove('is-focused');
  productImage.src = '/assets/chiron-product-x1elite.png';
  hideLabel();
  hint.classList.remove('is-hidden');
}

document.querySelectorAll('.hotspot').forEach((hotspot) => {
  hotspot.addEventListener('mouseenter', (event) => {
    hoverPart = hotspot.dataset.part;
    showLabel(hoverPart, event.clientX, event.clientY);
  });
  hotspot.addEventListener('mousemove', (event) => {
    showLabel(hotspot.dataset.part, event.clientX, event.clientY);
  });
  hotspot.addEventListener('mouseleave', () => {
    hoverPart = null;
    hideLabel();
  });
  hotspot.addEventListener('focus', () => {
    hoverPart = hotspot.dataset.part;
    const rect = hotspot.getBoundingClientRect();
    showLabel(hoverPart, rect.left + rect.width / 2, rect.top + rect.height / 2);
  });
  hotspot.addEventListener('blur', () => {
    hoverPart = null;
    hideLabel();
  });
  hotspot.addEventListener('click', () => selectPart(hotspot.dataset.part));
});

closePanel.addEventListener('click', clearSelection);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && activePart) clearSelection();
});

document.querySelectorAll('.variant').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.variant').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
  });
});

function playIntro() {
  if (reducedMotion) return;
  const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
  intro
    .from('.site-header', { y: -18, autoAlpha: 0, duration: 0.42 })
    .from(['.top-rule', '.status-dots', '.top-code'], { x: -18, autoAlpha: 0, duration: 0.3, stagger: 0.05 }, '<0.05')
    .from('.hero-title', { y: 36, autoAlpha: 0, duration: 0.72 }, '<0.06')
    .from(productCanvas, { y: 46, scale: 0.96, autoAlpha: 0, duration: 0.8 }, '<0.16')
    .from(['.lower-rule', '.variant-list', '.product-note', '.bottom-rule', '.page-index', '.interaction-hint'], { y: 14, autoAlpha: 0, duration: 0.38, stagger: 0.045 }, '<0.18');

  gsap.to(productMotion, {
    y: 7,
    duration: 2.8,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1
  });
}

stage.addEventListener('pointermove', (event) => {
  if (reducedMotion || event.pointerType === 'touch') return;
  const rect = stage.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
  const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
  productX(x * 13);
  productY(y * 10);
  titleX(x * -11);
  titleY(y * -5);
  railsX(x * -6);
});

stage.addEventListener('pointerleave', () => {
  if (reducedMotion) return;
  productX(0);
  productY(0);
  titleX(0);
  titleY(0);
  railsX(0);
});

window.addEventListener('resize', fitStage);
fitStage();
playIntro();
