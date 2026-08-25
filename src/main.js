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
          <svg class="line-art" id="lineArt" viewBox="0 0 631 631" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M315.089 464.743C397.73 464.743 464.724 397.749 464.724 315.107C464.724 232.466 397.73 165.471 315.089 165.471C232.447 165.471 165.453 232.466 165.453 315.107C165.453 397.749 232.447 464.743 315.089 464.743Z" />
            <path d="M315.088 611.1C478.56 611.1 611.08 478.58 611.08 315.109C611.08 151.637 478.56 19.1172 315.088 19.1172C151.617 19.1172 19.0967 151.637 19.0967 315.109C19.0967 478.58 151.617 611.1 315.088 611.1Z" />
            <path d="M464.724 168.753C464.724 86.1115 397.73 19.1172 315.089 19.1172C232.447 19.1172 165.453 86.1115 165.453 168.753V461.464C165.453 544.106 232.447 611.1 315.089 611.1C397.73 611.1 464.724 544.106 464.724 461.464V168.753Z" />
            <path d="M168.733 165.469C86.0909 165.469 19.0967 232.464 19.0967 315.105C19.0967 397.747 86.0909 464.741 168.733 464.741H461.444C544.085 464.741 611.08 397.747 611.08 315.105C611.08 232.464 544.085 165.469 461.444 165.469H168.733Z" />
            <path d="M105.809 312.84C47.3722 371.276 47.3722 466.02 105.809 524.457C164.245 582.893 258.989 582.893 317.426 524.457L524.404 317.479C582.84 259.042 582.84 164.298 524.404 105.861C465.967 47.425 371.223 47.425 312.787 105.861L105.809 312.84Z" />
            <path d="M312.792 524.404C371.228 582.84 465.972 582.84 524.409 524.404C582.845 465.967 582.845 371.223 524.409 312.787L317.431 105.809C258.994 47.3721 164.25 47.3722 105.814 105.809C47.3772 164.245 47.3772 258.989 105.814 317.426L312.792 524.404Z" />
            <path d="M131.804 209.294V420.921L315.088 526.761L498.372 420.921V209.294L315.088 103.48L131.804 209.294Z" />
          </svg>
          <div class="armour-assembly" id="armourAssembly" aria-label="Exploded view of the Chiron X1 Elite protective suit">
            <div class="armour-piece piece-helmet"><img class="armour-part part-helmet" data-group="helmet" src="/assets/armour-deconstructed/helmet.png" alt="" /></div>
            <div class="armour-piece piece-shoulder-left"><img class="armour-part part-shoulder-left" data-group="shoulders" src="/assets/armour-deconstructed/shoulder-left.png" alt="" /></div>
            <div class="armour-piece piece-shoulder-right"><img class="armour-part part-shoulder-right" data-group="shoulders" src="/assets/armour-deconstructed/shoulder-right.png" alt="" /></div>
            <div class="armour-piece piece-torso"><img class="armour-part part-torso" data-group="torso" src="/assets/armour-deconstructed/torso.png" alt="" /></div>
            <div class="armour-piece piece-hand-left"><img class="armour-part part-hand-left" data-group="arms" src="/assets/armour-deconstructed/hand-left.png" alt="" /></div>
            <div class="armour-piece piece-hand-right"><img class="armour-part part-hand-right" data-group="arms" src="/assets/armour-deconstructed/hand-right.png" alt="" /></div>
            <div class="armour-piece piece-belt"><img class="armour-part part-belt" data-group="belt" src="/assets/armour-deconstructed/belt.png" alt="" /></div>
            <div class="armour-piece piece-leg-left"><img class="armour-part part-leg-left" data-group="legs" src="/assets/armour-deconstructed/leg-left.png" alt="" /></div>
            <div class="armour-piece piece-leg-right"><img class="armour-part part-leg-right" data-group="legs" src="/assets/armour-deconstructed/leg-right.png" alt="" /></div>
          </div>
          <img class="detail-image" id="detailImage" src="/assets/chiron-product-x1elite-helmet.png" alt="Chiron X1 Elite helmet" />
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
const armourAssembly = document.querySelector('#armourAssembly');
const detailImage = document.querySelector('#detailImage');
const lineArt = document.querySelector('#lineArt');
const lineArtPaths = createLineArtMasks();
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
let panelExitTween = null;

const closeupImages = {
  helmet: { src: '/assets/chiron-product-x1elite-helmet.png', alt: 'Chiron X1 Elite helmet' },
  shoulders: { src: '/assets/armour-closeup/shoulders.png', alt: 'Chiron X1 Elite shoulder protection' },
  torso: { src: '/assets/armour-closeup/torso.png', alt: 'Chiron X1 Elite torso armour' },
  arms: { src: '/assets/armour-closeup/gloves.png', alt: 'Chiron X1 Elite tactical gloves' },
  belt: { src: '/assets/armour-closeup/belt.png', alt: 'Chiron X1 Elite utility belt' },
  legs: { src: '/assets/armour-closeup/legs.png', alt: 'Chiron X1 Elite leg protection' }
};

const hoverMotion = {
  helmet: [{ selector: '.part-helmet', vars: { y: -8, scale: 1.045 } }],
  shoulders: [
    { selector: '.part-shoulder-left', vars: { x: -18, rotation: -2.5 } },
    { selector: '.part-shoulder-right', vars: { x: 18, rotation: 2.5 } }
  ],
  torso: [{ selector: '.part-torso', vars: { y: -8, scale: 1.03 } }],
  arms: [
    { selector: '.part-hand-left', vars: { x: -13, rotation: -3 } },
    { selector: '.part-hand-right', vars: { x: 13, rotation: 3 } }
  ],
  belt: [{ selector: '.part-belt', vars: { y: 9, scale: 1.025 } }],
  legs: [
    { selector: '.part-leg-left', vars: { x: -12, y: 9, rotation: -1.5 } },
    { selector: '.part-leg-right', vars: { x: 12, y: 9, rotation: 1.5 } }
  ]
};

const closureMotion = [
  { selector: '.piece-helmet', x: 0, y: 42 },
  { selector: '.piece-shoulder-left', x: 31, y: 8 },
  { selector: '.piece-shoulder-right', x: -31, y: 8 },
  { selector: '.piece-torso', x: 0, y: 0 },
  { selector: '.piece-hand-left', x: 48, y: -24 },
  { selector: '.piece-hand-right', x: -48, y: -24 },
  { selector: '.piece-belt', x: 0, y: -36 },
  { selector: '.piece-leg-left', x: 34, y: -56 },
  { selector: '.piece-leg-right', x: -34, y: -56 }
];

const labelX = gsap.quickTo(partLabel, 'x', { duration: 0.24, ease: 'power3.out' });
const labelY = gsap.quickTo(partLabel, 'y', { duration: 0.24, ease: 'power3.out' });
const productX = gsap.quickTo(productCanvas, 'x', { duration: 0.8, ease: 'power3.out' });
const productY = gsap.quickTo(productCanvas, 'y', { duration: 0.8, ease: 'power3.out' });
const armourX = gsap.quickTo(armourAssembly, 'x', { duration: 0.72, ease: 'power3.out' });
const armourY = gsap.quickTo(armourAssembly, 'y', { duration: 0.72, ease: 'power3.out' });
const lineArtX = gsap.quickTo(lineArt, 'x', { duration: 1.15, ease: 'power3.out' });
const lineArtY = gsap.quickTo(lineArt, 'y', { duration: 1.15, ease: 'power3.out' });
const lineArtRotation = gsap.quickTo(lineArt, 'rotation', { duration: 1.25, ease: 'power3.out' });
const titleX = gsap.quickTo('.hero-title', 'x', { duration: 1.2, ease: 'power3.out' });
const titleY = gsap.quickTo('.hero-title', 'y', { duration: 1.2, ease: 'power3.out' });
const railsX = gsap.quickTo('.top-code', 'x', { duration: 1.3, ease: 'power3.out' });
const closureSetters = closureMotion.map((item) => {
  const element = document.querySelector(item.selector);
  return {
    ...item,
    xTo: gsap.quickTo(element, 'x', { duration: 0.7, ease: 'power3.out' }),
    yTo: gsap.quickTo(element, 'y', { duration: 0.7, ease: 'power3.out' })
  };
});

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
    gsap.fromTo(partLabel, { autoAlpha: 0, scale: 0.94 }, { autoAlpha: 1, scale: 1, duration: 0.18, ease: 'power2.out', overwrite: 'auto' });
  }
  if (typeof clientX === 'number' && typeof clientY === 'number') positionLabel(clientX, clientY);
}

function hideLabel() {
  isLabelVisible = false;
  gsap.to(partLabel, { autoAlpha: 0, duration: 0.12, ease: 'power1.out', overwrite: 'auto' });
}

function resetArmourHover() {
  if (reducedMotion) return;
  gsap.to('.armour-part', { x: 0, y: 0, rotation: 0, scale: 1, duration: 0.42, ease: 'power3.out', overwrite: 'auto' });
}

function animateArmourHover(partName) {
  if (reducedMotion || activePart) return;
  resetArmourHover();
  hoverMotion[partName]?.forEach(({ selector, vars }) => {
    gsap.to(selector, { ...vars, duration: 0.5, ease: 'power3.out', overwrite: 'auto' });
  });
}

function setArmourClosure(amount) {
  if (reducedMotion || activePart) return;
  closureSetters.forEach(({ x, y, xTo, yTo }) => {
    xTo(x * amount);
    yTo(y * amount);
  });
}

function selectPart(partName) {
  const data = parts[partName];
  if (!data) return;
  const image = closeupImages[partName];
  activePart = partName;
  hideLabel();
  detailImage.src = image.src;
  detailImage.alt = image.alt;
  partCode.textContent = data.code;
  partDescription.textContent = data.description;
  partDetail.textContent = data.detail;
  panelExitTween?.kill();
  detailPanel.setAttribute('aria-hidden', 'false');
  stage.dataset.activePart = partName;
  productCanvas.classList.add('is-focused');
  hint.classList.add('is-hidden');
  resetArmourHover();

  if (!reducedMotion) {
    const selection = gsap.timeline({ defaults: { ease: 'power3.out', overwrite: 'auto' } });
    selection
      .set(detailPanel, { autoAlpha: 0, y: -14 })
      .to(productMotion, { scale: 1.025, rotation: 0.22, duration: 0.18 })
      .to(productMotion, { scale: 1, rotation: 0, duration: 0.48, ease: 'power2.out' }, '<0.08')
      .to(detailPanel, { autoAlpha: 1, y: 0, duration: 0.38 }, '<0.06');

    if (partName !== 'helmet') {
      selection.fromTo('.focus-halo', { autoAlpha: 0, scale: 0.65 }, { autoAlpha: 0.8, scale: 1, duration: 0.42 }, '<0.03');
    }
  }
}

function clearSelection() {
  activePart = null;
  stage.removeAttribute('data-active-part');
  if (reducedMotion) {
    detailPanel.setAttribute('aria-hidden', 'true');
  } else {
    panelExitTween?.kill();
    panelExitTween = gsap.to(detailPanel, {
      autoAlpha: 0,
      y: -10,
      duration: 0.2,
      ease: 'power2.in',
      overwrite: 'auto',
      onComplete: () => detailPanel.setAttribute('aria-hidden', 'true')
    });
  }
  productCanvas.classList.remove('is-focused');
  hideLabel();
  hint.classList.remove('is-hidden');

  if (!reducedMotion) gsap.to(productMotion, { scale: 1, rotation: 0, duration: 0.3, ease: 'power2.out', overwrite: 'auto' });
}

document.querySelectorAll('.hotspot').forEach((hotspot) => {
  hotspot.addEventListener('mouseenter', (event) => {
    hoverPart = hotspot.dataset.part;
    showLabel(hoverPart, event.clientX, event.clientY);
    animateArmourHover(hoverPart);
  });
  hotspot.addEventListener('mousemove', (event) => {
    showLabel(hotspot.dataset.part, event.clientX, event.clientY);
  });
  hotspot.addEventListener('mouseleave', () => {
    hoverPart = null;
    hideLabel();
    resetArmourHover();
  });
  hotspot.addEventListener('focus', () => {
    hoverPart = hotspot.dataset.part;
    const rect = hotspot.getBoundingClientRect();
    showLabel(hoverPart, rect.left + rect.width / 2, rect.top + rect.height / 2);
    animateArmourHover(hoverPart);
  });
  hotspot.addEventListener('blur', () => {
    hoverPart = null;
    hideLabel();
    resetArmourHover();
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
    .from('.armour-part', { y: (index) => index % 2 ? 16 : -16, scale: 0.94, autoAlpha: 0, duration: 0.55, stagger: 0.045 }, '<0.25')
    .from(['.variant-list', '.product-note', '.bottom-rule', '.page-index', '.interaction-hint'], { y: 14, autoAlpha: 0, duration: 0.38, stagger: 0.045 }, '<0.18');

  gsap.to(productMotion, {
    y: 7,
    duration: 2.8,
    ease: 'sine.inOut',
    yoyo: true,
    repeat: -1
  });

  const signalPulse = gsap.timeline({ repeat: -1, repeatDelay: 2.4 });
  signalPulse
    .to('.status-dots i, .lower-dots i', { scale: 1.3, duration: 0.13, stagger: 0.055, ease: 'power2.out' })
    .to('.status-dots i, .lower-dots i', { scale: 1, duration: 0.22, stagger: 0.045, ease: 'power2.in' });

  playLineArt();
}

function playLineArt() {
  const lengths = lineArtPaths.map((path) => path.getTotalLength());
  if (reducedMotion) {
    lineArtPaths.forEach((path) => {
      path.style.strokeDasharray = '';
      path.style.strokeDashoffset = '';
    });
    return;
  }

  lineArtPaths.forEach((path, index) => {
    path.style.strokeDasharray = `${lengths[index]}`;
    path.style.strokeDashoffset = `${lengths[index]}`;
  });

  const lineLoop = gsap.timeline({ repeat: -1, repeatDelay: 0.7, defaults: { ease: 'power1.inOut' } });
  lineLoop
    .to(lineArtPaths, {
      strokeDashoffset: (index) => 0,
      duration: 0.72,
      stagger: { each: 0.13, from: 'start' }
    })
    .to(lineArtPaths, {
      strokeDashoffset: (index) => -lengths[index],
      duration: 0.82,
      stagger: { each: 0.14, from: 'end' }
    }, '+=1.4');
}

function createLineArtMasks() {
  const visiblePaths = gsap.utils.toArray('#lineArt > path');
  const namespace = 'http://www.w3.org/2000/svg';
  const defs = document.createElementNS(namespace, 'defs');

  const maskPaths = visiblePaths.map((path, index) => {
    const mask = document.createElementNS(namespace, 'mask');
    const maskPath = path.cloneNode();
    mask.setAttribute('id', `line-art-mask-${index}`);
    mask.setAttribute('maskUnits', 'userSpaceOnUse');
    mask.setAttribute('mask-type', 'alpha');
    mask.setAttribute('x', '0');
    mask.setAttribute('y', '0');
    mask.setAttribute('width', '631');
    mask.setAttribute('height', '631');
    maskPath.setAttribute('stroke', '#fff');
    maskPath.setAttribute('fill', 'none');
    maskPath.setAttribute('stroke-width', '2.2');
    maskPath.setAttribute('stroke-linecap', 'round');
    maskPath.setAttribute('stroke-dasharray', '0');
    mask.append(maskPath);
    defs.append(mask);
    path.setAttribute('mask', `url(#line-art-mask-${index})`);
    return maskPath;
  });

  lineArt.prepend(defs);
  return maskPaths;
}

stage.addEventListener('pointermove', (event) => {
  if (reducedMotion || event.pointerType === 'touch') return;
  const rect = stage.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
  const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
  const canvasRect = productCanvas.getBoundingClientRect();
  const outsideX = Math.max(canvasRect.left - event.clientX, 0, event.clientX - canvasRect.right);
  const outsideY = Math.max(canvasRect.top - event.clientY, 0, event.clientY - canvasRect.bottom);
  const outsideDistance = Math.hypot(outsideX, outsideY);
  const proximityBuffer = 42;
  const closure = Math.min(Math.max(outsideDistance - proximityBuffer, 0) / 180, 1);
  productX(x * 13);
  productY(y * 10);
  armourX(x * 5);
  armourY(y * 4);
  lineArtX(x * -15);
  lineArtY(y * -11);
  lineArtRotation(x * -0.65);
  titleX(x * -11);
  titleY(y * -5);
  railsX(x * -6);
  setArmourClosure(closure);
});

stage.addEventListener('pointerleave', () => {
  if (reducedMotion) return;
  productX(0);
  productY(0);
  armourX(0);
  armourY(0);
  lineArtX(0);
  lineArtY(0);
  lineArtRotation(0);
  titleX(0);
  titleY(0);
  railsX(0);
  setArmourClosure(1);
});

window.addEventListener('resize', fitStage);
fitStage();
playIntro();
