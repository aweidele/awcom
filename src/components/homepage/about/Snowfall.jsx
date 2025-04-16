import React, { useEffect, useRef } from "react";

const snowflakePaths = ["/SnowflakeBundle-02.svg", "/SnowflakeBundle-04.svg", "/SnowflakeBundle-08.svg"];

const isMobile = typeof navigator !== "undefined" && /Mobi|Android/i.test(navigator.userAgent);
const FLAKE_COUNT = isMobile ? 40 : 100;

function loadImageAsCanvasTinted(src, color) {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const size = Math.max(img.width, img.height);
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");

      ctx.fillStyle = color;
      ctx.fillRect(0, 0, size, size);
      ctx.globalCompositeOperation = "destination-in";
      ctx.drawImage(img, 0, 0, size, size);

      resolve(canvas);
    };
    img.src = src;
  });
}

class Snowflake {
  constructor(image, size, x, y, speedY, driftSpeed, rotationSpeed) {
    this.image = image;
    this.size = size;
    this.x = x;
    this.y = y;
    this.initialX = x;
    this.speedY = speedY;
    this.driftSpeed = driftSpeed;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = rotationSpeed;
    this.driftAngle = Math.random() * Math.PI * 2;
    this.windX = 0;
  }

  update(mouseX, mouseY) {
    this.driftAngle += this.driftSpeed;
    this.x += Math.sin(this.driftAngle) * 0.5 + this.windX;
    this.y += this.speedY;
    this.rotation += this.rotationSpeed;

    // Mouse wind effect
    if (mouseX !== null && mouseY !== null) {
      const dx = this.x - mouseX;
      const dy = this.y - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const radius = 100;

      if (distance < radius) {
        const force = (radius - distance) / radius;
        this.windX = 1.5 * force * (dx / distance);
      } else {
        this.windX *= 0.95;
      }
    }

    // Reset if off screen
    if (this.y > window.innerHeight + this.size) {
      this.y = -this.size;
      this.x = this.initialX = Math.random() * window.innerWidth;
      this.driftAngle = Math.random() * Math.PI * 2;
      this.windX = 0;
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.drawImage(this.image, -this.size / 2, -this.size / 2, this.size, this.size);
    ctx.restore();
  }
}

export default function Snowfall() {
  const canvasRef = useRef(null);
  const snowflakesRef = useRef([]);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    async function init() {
      const snowflakes = [];

      for (let i = 0; i < FLAKE_COUNT; i++) {
        const path = snowflakePaths[Math.floor(Math.random() * snowflakePaths.length)];
        const color = Math.random() < 0.5 ? "#FFFFFF" : "#C5DEF9";
        const image = await loadImageAsCanvasTinted(path, color);

        const size = Math.random() * 20 + 10;
        const speedY = size / 10;
        const driftSpeed = 0.01 + Math.random() * 0.01;
        const rotationSpeed = (Math.random() - 0.5) * 0.02;

        snowflakes.push(new Snowflake(image, size, Math.random() * window.innerWidth, Math.random() * window.innerHeight, speedY, driftSpeed, rotationSpeed));
      }

      snowflakesRef.current = snowflakes;
      animate();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const flake of snowflakesRef.current) {
        flake.update(mouse.current.x, mouse.current.y);
        flake.draw(ctx);
      }
      requestAnimationFrame(animate);
    }

    init();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: "none",
        width: "100vw",
        height: "100vh",
      }}
    />
  );
}
