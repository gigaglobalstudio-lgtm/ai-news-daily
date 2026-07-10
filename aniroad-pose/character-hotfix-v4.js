(() => {
  const ASSETS = window.ANIROAD_CHARACTERS || {};
  const images = {};
  const keys = ["green", "red", "goggles", "zombie"];
  let pose = "heart";
  let active = false;
  let successUntil = 0;

  function loadImages() {
    document.querySelectorAll("[data-character]").forEach((img) => {
      const src = ASSETS[img.dataset.character];
      if (src) img.src = src;
    });
    keys.forEach((key) => {
      const img = new Image();
      img.decoding = "async";
      img.src = ASSETS[key] || "";
      images[key] = img;
    });
  }

  function drawOne(ctx, img, x, bottom, height, options = {}) {
    if (!img || !img.complete || !img.naturalWidth) return;
    const width = height * img.naturalWidth / img.naturalHeight;
    ctx.save();
    ctx.globalAlpha = options.alpha ?? 0.5;
    ctx.translate(x, bottom + (options.bob || 0));
    if (options.flip) ctx.scale(-1, 1);
    ctx.shadowColor = options.glow || "rgba(255,220,120,.55)";
    ctx.shadowBlur = options.blur || 20;
    ctx.drawImage(img, -width / 2, -height, width, height);
    ctx.restore();
  }

  function drawCharacters(ctx, now) {
    if (!active) return;
    const canvas = ctx.canvas;
    if (!canvas.width || !canvas.height) return;
    const w = canvas.width;
    const h = canvas.height;
    const success = now < successUntil || document.getElementById("successBanner")?.classList.contains("show");
    const alpha = success ? 0.98 : 0.52;
    const scale = success ? 1.12 : 1;
    const bob = Math.sin(now / (success ? 130 : 420)) * h * (success ? 0.012 : 0.004);

    if (pose === "heart") {
      drawOne(ctx, images.green, w * 0.83, h * 0.97, h * 0.42 * scale, { alpha, bob, glow: "rgba(255,218,70,.8)" });
    } else if (pose === "jump") {
      const lift = success ? Math.abs(Math.sin(now / 180)) * h * 0.08 : 0;
      drawOne(ctx, images.goggles, w * 0.17, h * 0.97 - lift, h * 0.46 * scale, { alpha, bob, flip: true, glow: "rgba(255,210,70,.8)" });
    } else if (pose === "mimic") {
      drawOne(ctx, images.zombie, w * 0.83, h * 0.97, h * 0.43 * scale, { alpha, bob, glow: "rgba(166,105,255,.85)" });
    } else if (pose === "highfive") {
      drawOne(ctx, images.red, w * 0.12, h * 0.98, h * 0.38 * scale, { alpha, bob, flip: true, glow: "rgba(255,90,75,.78)" });
      drawOne(ctx, images.green, w * 0.88, h * 0.98, h * 0.38 * scale, { alpha, bob: -bob, glow: "rgba(255,218,70,.78)" });
    } else {
      const centers = [0.12, 0.37, 0.63, 0.88];
      const charKeys = ["red", "goggles", "green", "zombie"];
      charKeys.forEach((key, i) => drawOne(ctx, images[key], w * centers[i], h * 0.99, h * (i === 1 ? 0.30 : 0.28) * scale, {
        alpha,
        bob: Math.sin(now / 260 + i) * h * 0.004,
        flip: i < 2,
        glow: ["rgba(255,90,75,.75)", "rgba(255,210,70,.75)", "rgba(100,255,130,.72)", "rgba(166,105,255,.78)"][i]
      }));
    }
  }

  function patchCanvas() {
    const canvas = document.getElementById("overlay");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (ctx.__aniroadCharacterPatched) return;
    const originalClearRect = ctx.clearRect.bind(ctx);
    ctx.clearRect = (...args) => {
      originalClearRect(...args);
      drawCharacters(ctx, performance.now());
    };
    ctx.__aniroadCharacterPatched = true;
  }

  function init() {
    loadImages();
    patchCanvas();
    document.querySelectorAll(".pose-tab").forEach((button) => {
      button.addEventListener("click", () => { pose = button.dataset.pose || "heart"; });
    });
    const banner = document.getElementById("successBanner");
    if (banner) {
      new MutationObserver(() => {
        if (banner.classList.contains("show")) successUntil = performance.now() + 3200;
      }).observe(banner, { attributes: true, attributeFilter: ["class"] });
    }
    document.getElementById("startButton")?.addEventListener("click", () => { active = true; });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
