# Chiron X1 Elite interactive prototype

An image-based prototype of the Figma product canvas, structured so the central product layer can later be replaced by a Three.js scene.

## Run locally

```bash
npm install
npm run dev
```

Click the suit components to focus them and open their detail panel. Press `Escape` or use the panel close control to return to the exploded view.

## Three.js handoff

The future 3D scene should replace `.product-image` inside `.product-canvas`. Keep the existing selection state and map mesh names to the part keys in `src/main.js` (`helmet`, `shoulders`, `torso`, `arms`, `belt`, and `legs`).
