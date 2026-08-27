import { gsap } from 'gsap';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
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
      <div class="grain-overlay" aria-hidden="true"></div>
      <header class="site-header">
        <a class="brand" href="#" aria-label="Chiron Global Tech home">
          <span class="brand-mark"><img src="/assets/chiron-mark.svg" alt="" /></span>
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
          <div class="line-art-motion" id="lineArtMotion" aria-hidden="true">
          <svg class="line-art" id="lineArt" viewBox="0 0 631 631" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M315.089 464.743C397.73 464.743 464.724 397.749 464.724 315.107C464.724 232.466 397.73 165.471 315.089 165.471C232.447 165.471 165.453 232.466 165.453 315.107C165.453 397.749 232.447 464.743 315.089 464.743Z" />
            <path d="M315.088 611.1C478.56 611.1 611.08 478.58 611.08 315.109C611.08 151.637 478.56 19.1172 315.088 19.1172C151.617 19.1172 19.0967 151.637 19.0967 315.109C19.0967 478.58 151.617 611.1 315.088 611.1Z" />
            <path d="M464.724 168.753C464.724 86.1115 397.73 19.1172 315.089 19.1172C232.447 19.1172 165.453 86.1115 165.453 168.753V461.464C165.453 544.106 232.447 611.1 315.089 611.1C397.73 611.1 464.724 544.106 464.724 461.464V168.753Z" />
            <path d="M168.733 165.469C86.0909 165.469 19.0967 232.464 19.0967 315.105C19.0967 397.747 86.0909 464.741 168.733 464.741H461.444C544.085 464.741 611.08 397.747 611.08 315.105C611.08 232.464 544.085 165.469 461.444 165.469H168.733Z" />
            <path d="M105.809 312.84C47.3722 371.276 47.3722 466.02 105.809 524.457C164.245 582.893 258.989 582.893 317.426 524.457L524.404 317.479C582.84 259.042 582.84 164.298 524.404 105.861C465.967 47.425 371.223 47.425 312.787 105.861L105.809 312.84Z" />
            <path d="M312.792 524.404C371.228 582.84 465.972 582.84 524.409 524.404C582.845 465.967 582.845 371.223 524.409 312.787L317.431 105.809C258.994 47.3721 164.25 47.3722 105.814 105.809C47.3772 164.245 47.3772 258.989 105.814 317.426L312.792 524.404Z" />
            <path d="M131.804 209.294V420.921L315.088 526.761L498.372 420.921V209.294L315.088 103.48L131.804 209.294Z" />
          </svg>
          </div>
          <div class="three-armour" id="threeArmour" aria-label="Interactive 3D armour render"></div>
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
          <div class="hover-aura" aria-hidden="true"></div>
          <div class="scan-pulse" aria-hidden="true"></div>
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

      <div class="view-controls" role="group" aria-label="Armour view">
        <button class="view-control active" type="button" data-view="front">Front</button>
        <button class="view-control" type="button" data-view="side">Side</button>
        <button class="view-control" type="button" data-view="back">Back</button>
        <button class="view-control auto-rotate-control" id="autoRotateControl" type="button" aria-pressed="false">Play</button>
      </div>

      <aside class="detail-panel" id="detailPanel" aria-live="polite" aria-hidden="true">
        <div class="detail-meta"><span id="partCode">X1-H01</span><button id="closePanel" aria-label="Close detail panel">×</button></div>
        <p id="partDescription"></p>
        <p id="partDetail"></p>
      </aside>

      <div class="motion-control-shell">
        <button class="motion-control-toggle" id="motionControlToggle" aria-expanded="false" aria-controls="motionControls">Motion tuner <span>+</span></button>
        <section class="motion-controls" id="motionControls" aria-label="Line art animation controls">
          <div class="motion-controls-head"><span>Line art controls</span><span>Live</span></div>
          <label><span>Overall speed <output data-output="speed">0.5×</output></span><input data-motion-setting="speed" type="range" min="0.4" max="3" step="0.1" value="0.5" /></label>
          <label><span>Path offset <output data-output="offset">0.80s</output></span><input data-motion-setting="offset" type="range" min="0" max="1.4" step="0.05" value="0.8" /></label>
          <label><span>Minimum build <output data-output="buildAmount">50%</output></span><input data-motion-setting="buildAmount" type="range" min="0.5" max="0.85" step="0.05" value="0.5" /></label>
          <label><span>Trim length <output data-output="trimLength">16%</output></span><input data-motion-setting="trimLength" type="range" min="0.08" max="0.32" step="0.01" value="0.16" /></label>
          <label><span>Trim visibility <output data-output="trimOpacity">78%</output></span><input data-motion-setting="trimOpacity" type="range" min="0" max="1" step="0.02" value="0.78" /></label>
          <button class="motion-reset" id="motionReset" type="button">Reset motion</button>
        </section>
      </div>

      <section class="grain-control" aria-label="Grain controls">
        <div class="grain-control-head"><span>Grain overlay</span><output id="grainIntensityOutput">75%</output></div>
        <label for="grainIntensity">Intensity</label>
        <input id="grainIntensity" type="range" min="0" max="1" step="0.01" value="0.75" />
      </section>

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
const threeArmour = document.querySelector('#threeArmour');
const armourAssembly = document.querySelector('#armourAssembly');
const detailImage = document.querySelector('#detailImage');
const lineArt = document.querySelector('#lineArt');
const lineArtMotion = document.querySelector('#lineArtMotion');
const scanPulse = document.querySelector('.scan-pulse');
const { buildPaths: lineArtPaths, trimPaths: lineArtTrimPaths } = createLineArtMasks();
const partLabel = document.querySelector('#partLabel');
const partLabelText = document.querySelector('#partLabelText');
const detailPanel = document.querySelector('#detailPanel');
const partCode = document.querySelector('#partCode');
const partDescription = document.querySelector('#partDescription');
const partDetail = document.querySelector('#partDetail');
const closePanel = document.querySelector('#closePanel');
const hint = document.querySelector('.interaction-hint');
const motionControls = document.querySelector('#motionControls');
const motionControlToggle = document.querySelector('#motionControlToggle');
const motionReset = document.querySelector('#motionReset');
const grainOverlay = document.querySelector('.grain-overlay');
const grainIntensity = document.querySelector('#grainIntensity');
const grainIntensityOutput = document.querySelector('#grainIntensityOutput');
const viewControls = document.querySelectorAll('.view-control');
const autoRotateControl = document.querySelector('#autoRotateControl');
let activePart = null;
let hoverPart = null;
let isLabelVisible = false;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let panelExitTween = null;
let lineArtTweens = [];
let armour3D = null;
let isAutoRotateEnabled = false;

const lineArtSettings = {
  speed: 0.5,
  offset: 0.8,
  buildAmount: 0.5,
  trimLength: 0.16,
  trimOpacity: 0.78
};

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

const hotspotCenters = {
  helmet: { x: 50, y: 7 },
  shoulders: { x: 50, y: 24 },
  torso: { x: 50, y: 31 },
  arms: { x: 50, y: 46 },
  belt: { x: 50, y: 50 },
  legs: { x: 50, y: 68 }
};

const threePartAnchors = {
  Helmet: { x: 0.5, y: 0.07 },
  Arm_Guard_Right: { x: 0.25, y: 0.23 },
  Arm_Guard_Left: { x: 0.75, y: 0.23 },
  Chest_Plate: { x: 0.5, y: 0.31 },
  Glove_right: { x: 0.25, y: 0.46 },
  Glove_Left: { x: 0.75, y: 0.46 },
  Belt: { x: 0.5, y: 0.5 },
  Thigh_Guard_Right: { x: 0.4, y: 0.57 },
  Thigh_Guard_Left: { x: 0.6, y: 0.57 },
  Knee_Guards_Right: { x: 0.38, y: 0.67 },
  Knee_Guards_Left: { x: 0.62, y: 0.67 },
  Boots_Right: { x: 0.37, y: 0.82 },
  Boots_Left: { x: 0.63, y: 0.82 }
};

const threeAssemblyMotion = {
  Helmet: { compact: [0, -0.014], expanded: [0, 0.008] },
  Arm_Guard_Right: { compact: [0.016, 0], expanded: [-0.02, 0.004] },
  Arm_Guard_Left: { compact: [-0.016, 0], expanded: [0.02, 0.004] },
  Glove_right: { compact: [0.014, 0.012], expanded: [-0.018, -0.01] },
  Glove_Left: { compact: [-0.014, 0.012], expanded: [0.018, -0.01] },
  Belt: { compact: [0, 0.012], expanded: [0, -0.014] },
  Thigh_Guard_Right: { compact: [0.01, 0.014], expanded: [-0.012, -0.014] },
  Thigh_Guard_Left: { compact: [-0.01, 0.014], expanded: [0.012, -0.014] },
  Knee_Guards_Right: { compact: [0.012, 0.016], expanded: [-0.014, -0.016] },
  Knee_Guards_Left: { compact: [-0.012, 0.016], expanded: [0.014, -0.016] },
  Boots_Right: { compact: [0.014, 0.018], expanded: [-0.016, -0.02] },
  Boots_Left: { compact: [-0.014, 0.018], expanded: [0.016, -0.02] }
};

const threeHoverMotion = {
  helmet: [{ name: 'Helmet', y: 0.008 }],
  shoulders: [
    { name: 'Arm_Guard_Right', x: -0.038 },
    { name: 'Arm_Guard_Left', x: 0.038 }
  ],
  torso: [{ name: 'Chest_Plate', y: 0.016 }],
  arms: [
    { name: 'Arm_Guard_Right', x: -0.024 },
    { name: 'Glove_right', x: -0.034, y: -0.008 },
    { name: 'Arm_Guard_Left', x: 0.024 },
    { name: 'Glove_Left', x: 0.034, y: -0.008 }
  ],
  belt: [{ name: 'Belt', y: -0.018 }],
  legs: [
    { name: 'Thigh_Guard_Right', x: -0.02 },
    { name: 'Knee_Guards_Right', x: -0.028 },
    { name: 'Boots_Right', x: -0.035, y: -0.012 },
    { name: 'Thigh_Guard_Left', x: 0.02 },
    { name: 'Knee_Guards_Left', x: 0.028 },
    { name: 'Boots_Left', x: 0.035, y: -0.012 }
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
const lineArtFocusX = gsap.quickTo(lineArtMotion, 'x', { duration: 0.65, ease: 'power3.out' });
const lineArtFocusY = gsap.quickTo(lineArtMotion, 'y', { duration: 0.65, ease: 'power3.out' });
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
  resizeThreeArmour();
}

function resizeThreeArmour() {
  if (!armour3D) return;
  const { width, height } = threeArmour.getBoundingClientRect();
  if (!width || !height) return;
  const aspect = width / height;
  const frustumHeight = 1.3;
  const frustumWidth = frustumHeight * aspect;
  const { camera, renderer } = armour3D;
  camera.left = -frustumWidth / 2;
  camera.right = frustumWidth / 2;
  camera.top = frustumHeight / 2;
  camera.bottom = -frustumHeight / 2;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height, false);
}

function initThreeArmour() {
  if (!threeArmour || !window.WebGLRenderingContext) return;

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-0.4, 0.4, 0.62, -0.62, 0.1, 100);
  camera.position.set(0, 0.52, 2.1);
  camera.lookAt(0, 0.52, 0);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.32;
  threeArmour.append(renderer.domElement);

  const armourGroup = new THREE.Group();
  scene.add(armourGroup);
  scene.add(new THREE.AmbientLight(0xffffff, 0.8));
  scene.add(new THREE.HemisphereLight(0xf5f7ff, 0x4a4240, 2.25));

  const keyLight = new THREE.DirectionalLight(0xffffff, 2.6);
  keyLight.position.set(1.6, 2.6, 4);
  scene.add(keyLight);

  const frontFillLight = new THREE.DirectionalLight(0xffffff, 1.7);
  frontFillLight.position.set(0, 0.7, 4.5);
  scene.add(frontFillLight);

  const fillLight = new THREE.DirectionalLight(0xd8dde7, 1.25);
  fillLight.position.set(-2.4, 1.1, 2.8);
  scene.add(fillLight);

  const rimLight = new THREE.DirectionalLight(0xff6d54, 0.5);
  rimLight.position.set(-1.5, 1.6, -1.5);
  scene.add(rimLight);

  const orbitLight = new THREE.PointLight(0xfff1e7, 2.6, 2.4, 2);
  orbitLight.position.set(0.95, 0.76, 0.85);
  scene.add(orbitLight);

  armour3D = {
    scene,
    camera,
    renderer,
    armourGroup,
    model: null,
    targetRotationX: 0,
    targetRotationY: 0,
    viewRotationY: 0,
    pointerX: 0,
    autoRotate: isAutoRotateEnabled,
    lastFrameTime: performance.now(),
    targetPositionX: 0,
    targetPositionY: 0,
    isHoveringHotspot: false,
    orbitLight,
    targetOrbitLightPosition: orbitLight.position.clone(),
    assemblyProgress: 0,
    targetAssemblyProgress: 0,
    parts: new Map()
  };
  resizeThreeArmour();

  const loader = new GLTFLoader();
  loader.setMeshoptDecoder(MeshoptDecoder);
  loader.load('/models/body-armor.glb', (gltf) => {
    const model = gltf.scene;
    model.scale.setScalar(1.15);
    model.position.y = -0.07;
    model.updateMatrixWorld(true);
    const modelCenter = new THREE.Box3().setFromObject(model).getCenter(new THREE.Vector3());
    model.position.x -= modelCenter.x;
    model.position.z -= modelCenter.z;
    model.traverse((node) => {
      if (node.isMesh) {
        node.castShadow = false;
        node.receiveShadow = false;
        const materials = (Array.isArray(node.material) ? node.material : [node.material]).map((material) => material.clone());
        node.material = Array.isArray(node.material) ? materials : materials[0];
        materials.forEach((material) => {
          if (!material?.isMeshStandardMaterial) return;
          material.metalnessMap = null;
          material.roughnessMap = null;
          material.metalness = 0.18;
          material.roughness = 0.68;
          material.normalScale.set(0.8, 0.8);
          material.envMapIntensity = 0.15;
          material.needsUpdate = true;
        });
        armour3D.parts.set(node.name, {
          node,
          basePosition: node.position.clone(),
          targetPosition: node.position.clone(),
          hoverOffset: new THREE.Vector3(),
          proximityOffset: new THREE.Vector3(),
          variantOffset: new THREE.Vector3(),
          idleOffset: new THREE.Vector3(),
          assemblyOffset: new THREE.Vector3(),
          materials,
          baseColors: materials.map((material) => material.color.clone())
        });
      }
    });
    armourGroup.add(model);
    armour3D.model = model;
    stage.classList.add('is-three-loaded');
  }, undefined, (error) => {
    console.warn('The 3D armour model could not be loaded; using the image assembly instead.', error);
    renderer.dispose();
    threeArmour.replaceChildren();
    armour3D = null;
  });

  function render() {
    requestAnimationFrame(render);
    if (armour3D?.model && !reducedMotion) {
      const now = performance.now();
      const delta = Math.min((now - armour3D.lastFrameTime) / 1000, 0.05);
      armour3D.lastFrameTime = now;
      if (armour3D.autoRotate && !activePart) {
        armour3D.viewRotationY += delta * (Math.PI * 2 / 12);
        armour3D.targetRotationY = armour3D.viewRotationY + armour3D.pointerX * 0.13;
      }
      armourGroup.rotation.x += (armour3D.targetRotationX - armourGroup.rotation.x) * 0.055;
      armourGroup.rotation.y += (armour3D.targetRotationY - armourGroup.rotation.y) * 0.055;
      armourGroup.position.x += (armour3D.targetPositionX - armourGroup.position.x) * 0.06;
      armourGroup.position.y += (armour3D.targetPositionY - armourGroup.position.y) * 0.06;
      armour3D.assemblyProgress += (armour3D.targetAssemblyProgress - armour3D.assemblyProgress) * 0.075;
      const breath = Math.sin(performance.now() / 1800);
      armour3D.orbitLight.position.lerp(armour3D.targetOrbitLightPosition, 0.055);
      armour3D.parts.forEach(({ node, basePosition, targetPosition, hoverOffset, proximityOffset, variantOffset, idleOffset, assemblyOffset }, name) => {
        const assembly = threeAssemblyMotion[name];
        if (assembly) {
          assemblyOffset.set(
            THREE.MathUtils.lerp(assembly.compact[0], assembly.expanded[0], armour3D.assemblyProgress),
            THREE.MathUtils.lerp(assembly.compact[1], assembly.expanded[1], armour3D.assemblyProgress),
            0
          );
        }
        idleOffset.set(0, (name === 'Helmet' ? 0.004 : name === 'Chest_Plate' ? 0.0025 : 0) * breath, 0);
        targetPosition.copy(basePosition).add(assemblyOffset).add(hoverOffset).add(proximityOffset).add(variantOffset).add(idleOffset);
        node.position.lerp(targetPosition, 0.12);
      });
    }
    renderer.render(scene, camera);
  }

  render();
}

function setThreeArmourHover(isHovering) {
  if (armour3D?.model) armour3D.isHoveringHotspot = isHovering;
}

function setArmourView(view) {
  const views = { front: 0, side: Math.PI / 2, back: Math.PI };
  if (!Object.hasOwn(views, view)) return;
  viewControls.forEach((button) => button.classList.toggle('active', button.dataset.view === view));
  if (!armour3D?.model) return;
  armour3D.viewRotationY = views[view];
  armour3D.targetRotationY = armour3D.viewRotationY + armour3D.pointerX * 0.13;
}

function setAutoRotate(enabled) {
  isAutoRotateEnabled = enabled;
  autoRotateControl.textContent = enabled ? 'Pause' : 'Play';
  autoRotateControl.setAttribute('aria-pressed', String(enabled));
  autoRotateControl.classList.toggle('active', enabled);
  if (armour3D?.model) {
    armour3D.autoRotate = enabled;
    armour3D.lastFrameTime = performance.now();
  }
}

function setHotspotAccent(partName = null) {
  if (!partName) {
    stage.removeAttribute('data-hover-part');
    lineArtFocusX(0);
    lineArtFocusY(0);
    return;
  }
  const center = hotspotCenters[partName];
  if (!center) return;
  stage.dataset.hoverPart = partName;
  productCanvas.style.setProperty('--focus-x', `${center.x}%`);
  productCanvas.style.setProperty('--focus-y', `${center.y}%`);
  lineArtFocusX((center.x - 50) * 0.12);
  lineArtFocusY((center.y - 50) * 0.1);
}

function triggerSelectionScan(partName) {
  const center = hotspotCenters[partName];
  if (!center || reducedMotion) return;
  productCanvas.style.setProperty('--focus-x', `${center.x}%`);
  productCanvas.style.setProperty('--focus-y', `${center.y}%`);
  const scan = gsap.timeline({ defaults: { ease: 'power2.out', overwrite: 'auto' } });
  scan
    .set(scanPulse, { autoAlpha: 0, scale: 0.35 })
    .to(scanPulse, { autoAlpha: 0.7, scale: 1.25, duration: 0.28 })
    .to(scanPulse, { autoAlpha: 0, scale: 1.8, duration: 0.48, ease: 'power1.in' });
  gsap.fromTo(lineArtMotion, { scale: 0.985 }, { scale: 1.03, duration: 0.22, ease: 'power2.out', yoyo: true, repeat: 1, overwrite: 'auto' });
}

function animateThreeArmourParts(partName = null) {
  if (!armour3D?.model || reducedMotion) return;
  if (partName) resetThreeArmourProximity();
  armour3D.parts.forEach((part) => {
    part.hoverOffset.set(0, 0, 0);
    part.materials.forEach((material, index) => {
      const baseColor = part.baseColors[index];
      gsap.to(material.color, { r: baseColor.r, g: baseColor.g, b: baseColor.b, duration: 0.28, ease: 'power2.out', overwrite: 'auto' });
    });
  });
  if (!partName || activePart) return;

  threeHoverMotion[partName]?.forEach(({ name, x = 0, y = 0, z = 0 }) => {
    const part = armour3D.parts.get(name);
    if (part) {
      part.hoverOffset.set(x, y, z);
      part.materials.forEach((material, index) => {
        const baseColor = part.baseColors[index];
        gsap.to(material.color, { r: Math.min(baseColor.r * 1.16, 1), g: Math.min(baseColor.g * 1.1, 1), b: Math.min(baseColor.b * 1.06, 1), duration: 0.24, ease: 'power2.out', overwrite: 'auto' });
      });
    }
  });
}

function updateThreeArmourProximity(event) {
  if (!armour3D?.model || activePart || hoverPart) return;
  const rect = productCanvas.getBoundingClientRect();
  const cursorX = (event.clientX - rect.left) / rect.width;
  const cursorY = (event.clientY - rect.top) / rect.height;
  const isInside = cursorX >= 0 && cursorX <= 1 && cursorY >= 0 && cursorY <= 1;

  armour3D.parts.forEach((part, name) => {
    const anchor = threePartAnchors[name];
    if (!anchor || !isInside) {
      part.proximityOffset.set(0, 0, 0);
      return;
    }
    const distance = Math.hypot(cursorX - anchor.x, cursorY - anchor.y);
    const strength = Math.max(0, 1 - distance / 0.24) * 0.011;
    part.proximityOffset.set(
      Math.sign(anchor.x - 0.5) * strength,
      Math.sign(0.5 - anchor.y) * strength * 0.45,
      0
    );
  });
}

function resetThreeArmourProximity() {
  armour3D?.parts.forEach((part) => part.proximityOffset.set(0, 0, 0));
}

function playVariantTransition() {
  if (!armour3D?.model || reducedMotion) return;
  const transition = gsap.timeline({ defaults: { ease: 'power2.inOut', overwrite: 'auto' } });
  transition
    .to(armour3D.armourGroup.scale, { x: 0.975, y: 0.975, z: 0.975, duration: 0.18 })
    .to(armour3D.armourGroup.scale, { x: 1, y: 1, z: 1, duration: 0.38, ease: 'back.out(1.4)' });
  armour3D.parts.forEach((part, name) => {
    const anchor = threePartAnchors[name];
    if (!anchor) return;
    const amount = name === 'Chest_Plate' || name === 'Belt' ? 0.006 : 0.014;
    gsap.fromTo(part.variantOffset, { x: 0, y: 0 }, {
      x: Math.sign(anchor.x - 0.5) * amount,
      y: Math.sign(0.5 - anchor.y) * amount * 0.45,
      duration: 0.26,
      ease: 'power2.out',
      yoyo: true,
      repeat: 1
    });
  });
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
  animateThreeArmourParts();
  gsap.to('.armour-part', { x: 0, y: 0, rotation: 0, scale: 1, duration: 0.42, ease: 'power3.out', overwrite: 'auto' });
}

function animateArmourHover(partName) {
  if (reducedMotion || activePart) return;
  resetArmourHover();
  animateThreeArmourParts(partName);
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
  setHotspotAccent();
  triggerSelectionScan(partName);

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
  setHotspotAccent();

  if (!reducedMotion) gsap.to(productMotion, { scale: 1, rotation: 0, duration: 0.3, ease: 'power2.out', overwrite: 'auto' });
}

document.querySelectorAll('.hotspot').forEach((hotspot) => {
  hotspot.addEventListener('mouseenter', (event) => {
    hoverPart = hotspot.dataset.part;
    setThreeArmourHover(true);
    setHotspotAccent(hoverPart);
    showLabel(hoverPart, event.clientX, event.clientY);
    animateArmourHover(hoverPart);
  });
  hotspot.addEventListener('mousemove', (event) => {
    showLabel(hotspot.dataset.part, event.clientX, event.clientY);
  });
  hotspot.addEventListener('mouseleave', () => {
    hoverPart = null;
    setThreeArmourHover(false);
    setHotspotAccent();
    resetThreeArmourProximity();
    hideLabel();
    resetArmourHover();
  });
  hotspot.addEventListener('focus', () => {
    hoverPart = hotspot.dataset.part;
    setThreeArmourHover(true);
    setHotspotAccent(hoverPart);
    const rect = hotspot.getBoundingClientRect();
    showLabel(hoverPart, rect.left + rect.width / 2, rect.top + rect.height / 2);
    animateArmourHover(hoverPart);
  });
  hotspot.addEventListener('blur', () => {
    hoverPart = null;
    setThreeArmourHover(false);
    setHotspotAccent();
    resetThreeArmourProximity();
    hideLabel();
    resetArmourHover();
  });
  hotspot.addEventListener('click', () => selectPart(hotspot.dataset.part));
});

closePanel.addEventListener('click', clearSelection);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && activePart) clearSelection();
});

viewControls.forEach((button) => {
  if (button.dataset.view) button.addEventListener('click', () => setArmourView(button.dataset.view));
});

autoRotateControl.addEventListener('click', () => setAutoRotate(!isAutoRotateEnabled));

function formatMotionValue(setting, value) {
  if (setting === 'speed') return `${value.toFixed(1)}×`;
  if (setting === 'offset') return `${value.toFixed(2)}s`;
  return `${Math.round(value * 100)}%`;
}

function updateMotionControls() {
  document.querySelectorAll('[data-motion-setting]').forEach((input) => {
    const setting = input.dataset.motionSetting;
    input.value = lineArtSettings[setting];
    document.querySelector(`[data-output="${setting}"]`).textContent = formatMotionValue(setting, lineArtSettings[setting]);
  });
  playLineArt();
}

motionControlToggle.addEventListener('click', () => {
  const isOpen = motionControls.classList.toggle('is-open');
  motionControlToggle.setAttribute('aria-expanded', String(isOpen));
  motionControlToggle.querySelector('span').textContent = isOpen ? '−' : '+';
});

document.querySelectorAll('[data-motion-setting]').forEach((input) => {
  input.addEventListener('input', () => {
    const setting = input.dataset.motionSetting;
    lineArtSettings[setting] = Number(input.value);
    document.querySelector(`[data-output="${setting}"]`).textContent = formatMotionValue(setting, lineArtSettings[setting]);
    playLineArt();
  });
});

motionReset.addEventListener('click', () => {
  Object.assign(lineArtSettings, { speed: 0.5, offset: 0.8, buildAmount: 0.5, trimLength: 0.16, trimOpacity: 0.78 });
  updateMotionControls();
});

grainIntensity.addEventListener('input', () => {
  const intensity = Number(grainIntensity.value);
  grainOverlay.style.opacity = intensity;
  grainIntensityOutput.textContent = `${Math.round(intensity * 100)}%`;
});

document.querySelectorAll('.variant').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.variant').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    playVariantTransition();
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

  gsap.to('.chevrons', { x: 7, autoAlpha: 0.48, duration: 0.9, ease: 'sine.inOut', yoyo: true, repeat: -1, repeatDelay: 1.7 });
  gsap.to('.serial', { autoAlpha: 0.42, duration: 0.24, ease: 'steps(2)', yoyo: true, repeat: -1, repeatDelay: 3.8 });

  playLineArt();
}

function playLineArt() {
  lineArtTweens.forEach((tween) => tween.kill());
  lineArtTweens = [];
  const lengths = lineArtPaths.map((path) => path.getTotalLength());
  const trimLengths = lineArtTrimPaths.map((path) => path.getTotalLength());
  lineArt.style.setProperty('--trim-opacity', lineArtSettings.trimOpacity);
  if (reducedMotion) {
    lineArtPaths.forEach((path) => {
      path.style.strokeDasharray = '';
      path.style.strokeDashoffset = '';
    });
    return;
  }

  lineArtPaths.forEach((path, index) => {
    const length = lengths[index];
    const segmentLength = length * lineArtSettings.buildAmount;
    const cycleLength = segmentLength + length;
    path.style.strokeDasharray = `${segmentLength} ${length}`;
    path.style.strokeDashoffset = `${-cycleLength * gsap.utils.random(0, 1)}`;
  });

  lineArtPaths.forEach((path, index) => {
    const cycleLength = lengths[index] * (1 + lineArtSettings.buildAmount);
    lineArtTweens.push(gsap.to(path, {
      strokeDashoffset: `-=${cycleLength}`,
      duration: () => gsap.utils.random(2.67, 4.67) / lineArtSettings.speed,
      ease: 'none',
      repeat: -1,
      delay: index * lineArtSettings.offset
    }));
  });

  lineArtTrimPaths.forEach((path, index) => {
    const length = trimLengths[index];
    const segmentLength = Math.min(Math.max(length * lineArtSettings.trimLength, 76), 250);
    const cycleLength = segmentLength + length;
    path.style.strokeDasharray = `${segmentLength} ${length}`;
    path.style.strokeDashoffset = `${-cycleLength * gsap.utils.random(0, 1)}`;
    lineArtTweens.push(gsap.to(path, {
      strokeDashoffset: `-=${cycleLength}`,
      duration: gsap.utils.random(2.2, 3.6) / lineArtSettings.speed,
      ease: 'none',
      repeat: -1,
      delay: index * lineArtSettings.offset * 0.35
    }));
  });

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
    maskPath.setAttribute('stroke-width', '3.2');
    maskPath.setAttribute('stroke-linecap', 'round');
    maskPath.setAttribute('stroke-dasharray', '0');
    mask.append(maskPath);
    defs.append(mask);
    path.setAttribute('mask', `url(#line-art-mask-${index})`);
    return maskPath;
  });

  const trimPaths = visiblePaths.map((path, index) => {
    const mask = document.createElementNS(namespace, 'mask');
    const maskPath = path.cloneNode();
    const trimPath = path.cloneNode();
    mask.setAttribute('id', `line-art-trim-mask-${index}`);
    mask.setAttribute('maskUnits', 'userSpaceOnUse');
    mask.setAttribute('mask-type', 'alpha');
    mask.setAttribute('x', '0');
    mask.setAttribute('y', '0');
    mask.setAttribute('width', '631');
    mask.setAttribute('height', '631');
    maskPath.setAttribute('stroke', '#fff');
    maskPath.setAttribute('fill', 'none');
    maskPath.setAttribute('stroke-width', '3.8');
    maskPath.setAttribute('stroke-linecap', 'round');
    maskPath.setAttribute('stroke-dasharray', '0');
    mask.append(maskPath);
    defs.append(mask);
    trimPath.removeAttribute('mask');
    trimPath.setAttribute('class', 'line-art-trim');
    trimPath.setAttribute('mask', `url(#line-art-trim-mask-${index})`);
    lineArt.append(trimPath);
    return maskPath;
  });

  lineArt.prepend(defs);
  return { buildPaths: maskPaths, trimPaths };
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
  titleX(x * -11);
  titleY(y * -5);
  railsX(x * -6);
  if (armour3D?.model) {
    armour3D.pointerX = x;
    armour3D.targetRotationX = -y * 0.055;
    armour3D.targetRotationY = armour3D.viewRotationY + x * 0.13;
    armour3D.targetPositionX = x * 0.012;
    armour3D.targetPositionY = -y * 0.008;
    armour3D.targetAssemblyProgress = outsideDistance === 0 ? 1 : 0;
    gsap.killTweensOf(armour3D.targetOrbitLightPosition);
    armour3D.targetOrbitLightPosition.set(-x * 1.05, 0.76 + y * 0.32, 0.85);
    updateThreeArmourProximity(event);
  }
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
  titleX(0);
  titleY(0);
  railsX(0);
  if (armour3D?.model) {
    armour3D.pointerX = 0;
    gsap.to(armour3D, {
      targetRotationX: 0,
      targetRotationY: armour3D.viewRotationY,
      targetPositionX: 0,
      targetPositionY: 0,
      targetAssemblyProgress: 0,
      duration: 0.78,
      ease: 'back.out(1.25)',
      overwrite: 'auto'
    });
    gsap.to(armour3D.targetOrbitLightPosition, {
      x: 0.95,
      y: 0.76,
      z: 0.85,
      duration: 0.78,
      ease: 'back.out(1.25)',
      overwrite: 'auto'
    });
    resetThreeArmourProximity();
  }
  setArmourClosure(1);
});

window.addEventListener('resize', fitStage);
fitStage();
initThreeArmour();
playIntro();
