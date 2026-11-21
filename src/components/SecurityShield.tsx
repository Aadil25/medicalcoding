import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface Packet {
  angle: number;
  dist: number; // 0 (center) to 1 (outer)
  speed: number;
}

export const SecurityShield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  // Status pill cross-fade every 2.4s
  const statusTexts = [
    'Encryption: AES-256 active',
    'Access: MFA enforced',
    'Audit logs: recording',
    'BAA: signed and on file',
    'HIPAA safeguards: verified',
    'Monitoring: 24×7',
  ];
  const [statusIdx, setStatusIdx] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setStatusIdx((prev) => (prev + 1) % statusTexts.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  // Orbiting Badges:
  // Orbit A (-18° rotation): HIPAA, BAA, AES-256 (3 badges, clockwise)
  // Orbit B (+24° rotation): MFA, Audit logs (2 badges, counter-clockwise)
  const [badgePositions, setBadgePositions] = useState([
    { name: 'HIPAA', orbit: 'A', angle: 0, x: 0, y: 0, z: 0, scale: 1, isFront: false },
    { name: 'BAA', orbit: 'A', angle: (2 * Math.PI) / 3, x: 0, y: 0, z: 0, scale: 1, isFront: false },
    { name: 'AES-256', orbit: 'A', angle: (4 * Math.PI) / 3, x: 0, y: 0, z: 0, scale: 1, isFront: false },
    { name: 'MFA', orbit: 'B', angle: 0, x: 0, y: 0, z: 0, scale: 1, isFront: false },
    { name: 'Audit logs', orbit: 'B', angle: Math.PI, x: 0, y: 0, z: 0, scale: 1, isFront: false },
  ]);

  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let isVisible = true;
    let animId: number;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (isVisible = e.isIntersecting));
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);

    // Canvas size
    let width = 360;
    let height = 360;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const handleResize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      width = rect.width || 360;
      height = rect.height || 360;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Initialize ~26 spiraling packets
    const packetCount = 26;
    const packets: Packet[] = [];
    for (let i = 0; i < packetCount; i++) {
      packets.push({
        angle: Math.random() * Math.PI * 2,
        dist: 0.3 + Math.random() * 0.7,
        speed: 0.0018 + Math.random() * 0.0022,
      });
    }

    let globalTime = 0;

    const render = () => {
      if (!isVisible) {
        animId = requestAnimationFrame(render);
        return;
      }

      globalTime += 0.016;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const maxR = Math.min(cx, cy) * 0.88;
      const coreR = 54;

      // 1. Draw two dashed elliptical orbits: -18 deg and +24 deg
      const drawOrbit = (rotDeg: number, rx: number, ry: number) => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate((rotDeg * Math.PI) / 180);
        ctx.beginPath();
        ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(27, 179, 176, 0.28)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([5, 6]);
        ctx.stroke();
        ctx.restore();
      };

      const rxA = maxR * 0.95;
      const ryA = maxR * 0.46;
      const rotA = -18;

      const rxB = maxR * 0.82;
      const ryB = maxR * 0.40;
      const rotB = 24;

      drawOrbit(rotA, rxA, ryA);
      drawOrbit(rotB, rxB, ryB);

      // 2. Data packets: ~26 dots spiraling inward
      packets.forEach((p) => {
        p.dist -= p.speed;
        p.angle += 0.012;

        if (p.dist <= 0.16) {
          // Re-spawn at outer edge
          p.dist = 0.95 + Math.random() * 0.05;
          p.angle = Math.random() * Math.PI * 2;
        }

        const r = p.dist * maxR;
        const px = cx + Math.cos(p.angle) * r;
        const py = cy + Math.sin(p.angle) * (r * 0.72);

        if (p.dist > 0.32) {
          // Grey dot (unencrypted incoming traffic)
          ctx.beginPath();
          ctx.arc(px, py, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(148, 163, 184, 0.55)';
          ctx.fill();
        } else {
          // Crossed 30% radius: Encrypted teal square with short trail
          const prevX = px - Math.cos(p.angle) * 5;
          const prevY = py - Math.sin(p.angle) * 4;

          ctx.beginPath();
          ctx.moveTo(prevX, prevY);
          ctx.lineTo(px, py);
          ctx.strokeStyle = 'rgba(27, 179, 176, 0.45)';
          ctx.lineWidth = 2;
          ctx.stroke();

          ctx.fillStyle = '#1BB3B0';
          ctx.fillRect(px - 2.5, py - 2.5, 5, 5);
        }
      });

      // Update badge positions on 3D elliptical orbits
      const speedA = 0.45; // rad/s clockwise
      const speedB = -0.42; // rad/s counter-clockwise

      const radA = (rotA * Math.PI) / 180;
      const radB = (rotB * Math.PI) / 180;

      const updated = [
        { name: 'HIPAA', orbit: 'A', baseAngle: 0 },
        { name: 'BAA', orbit: 'A', baseAngle: (2 * Math.PI) / 3 },
        { name: 'AES-256', orbit: 'A', baseAngle: (4 * Math.PI) / 3 },
        { name: 'MFA', orbit: 'B', baseAngle: 0 },
        { name: 'Audit logs', orbit: 'B', baseAngle: Math.PI },
      ].map((b) => {
        const isOrbitA = b.orbit === 'A';
        const angle = b.baseAngle + globalTime * (isOrbitA ? speedA : speedB);
        const rx = isOrbitA ? rxA : rxB;
        const ry = isOrbitA ? ryA : ryB;
        const rot = isOrbitA ? radA : radB;

        // Position on unrotated ellipse
        const ex = Math.cos(angle) * rx;
        const ey = Math.sin(angle) * ry;

        // Rotate by ellipse tilt
        const x = cx + (ex * Math.cos(rot) - ey * Math.sin(rot));
        const y = cy + (ex * Math.sin(rot) + ey * Math.cos(rot));

        // Depth: sin(angle) gives -1 (back) to +1 (front)
        const depth = Math.sin(angle);
        const scale = 0.82 + (depth + 1) * 0.11; // 0.82 to 1.04

        return {
          name: b.name,
          orbit: b.orbit,
          angle,
          x,
          y,
          z: depth,
          scale,
          isFront: depth > 0.4,
        };
      });

      // Find the single closest badge to front
      let maxZ = -999;
      let maxIdx = 0;
      updated.forEach((b, idx) => {
        if (b.z > maxZ) {
          maxZ = b.z;
          maxIdx = idx;
        }
      });

      setBadgePositions(
        updated.map((b, idx) => ({
          ...b,
          isFront: idx === maxIdx && b.z > 0.2,
        }))
      );

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      cancelAnimationFrame(animId);
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center min-h-[440px] select-none"
      aria-hidden="true"
    >
      {/* Container for the 360x360 animation stage */}
      <div className="relative w-[340px] sm:w-[380px] h-[340px] sm:h-[380px] flex items-center justify-center">
        {/* Layer 1: Canvas for Orbits & Spiraling Data Packets */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
        />

        {/* Layer 2: Pulse Rings (3 sonar circles behind core, staggered by 1.2s) */}
        {!prefersReducedMotion && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
            <span
              className="absolute w-24 h-24 rounded-full border border-teal/40 animate-ping opacity-60"
              style={{ animationDuration: '3.6s', animationDelay: '0s' }}
            />
            <span
              className="absolute w-24 h-24 rounded-full border border-teal/30 animate-ping opacity-50"
              style={{ animationDuration: '3.6s', animationDelay: '1.2s' }}
            />
            <span
              className="absolute w-24 h-24 rounded-full border border-teal/20 animate-ping opacity-40"
              style={{ animationDuration: '3.6s', animationDelay: '2.4s' }}
            />
          </div>
        )}

        {/* Layer 3: Radar Sweep (ring-shaped conic-gradient rotating every 4.5s) */}
        {!prefersReducedMotion && (
          <div className="absolute w-[260px] h-[260px] rounded-full pointer-events-none z-[2] overflow-hidden opacity-40">
            <div
              className="w-full h-full rounded-full animate-spin"
              style={{
                animationDuration: '4.5s',
                background:
                  'conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(27, 179, 176, 0.38) 360deg)',
                maskImage: 'radial-gradient(circle, transparent 48%, black 50%)',
                WebkitMaskImage: 'radial-gradient(circle, transparent 48%, black 50%)',
              }}
            />
          </div>
        )}

        {/* Orbiting Badges Behind Core (z < 0) */}
        <div className="absolute inset-0 pointer-events-none z-[3]">
          {badgePositions
            .filter((b) => b.z <= 0)
            .map((b) => (
              <div
                key={b.name}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 px-2.5 py-1 rounded-full text-[11px] font-mono font-bold flex items-center gap-1.5 transition-opacity duration-150 bg-white/80 border border-line text-muted shadow-sm opacity-60"
                style={{
                  left: `${b.x}px`,
                  top: `${b.y}px`,
                  transform: `translate(-50%, -50%) scale(${b.scale})`,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                <span>{b.name}</span>
              </div>
            ))}
        </div>

        {/* Layer 4: Core Tile (Rounded square with breathing glow & light shimmer) */}
        <div className="relative z-[10] w-36 h-36 sm:w-40 sm:h-40 rounded-34 bg-gradient-to-br from-navy via-navy to-teal p-[2px] shadow-2xl transition-all">
          {/* Breathing glow animation wrapper */}
          <div
            className={`w-full h-full rounded-[32px] bg-gradient-to-b from-[#0A2D4D] to-[#061B30] flex flex-col items-center justify-center p-3 text-center border border-teal/40 overflow-hidden relative ${
              prefersReducedMotion ? '' : 'shadow-[0_0_35px_rgba(27,179,176,0.35)]'
            }`}
          >
            {/* Diagonal Light Shimmer sweeping every 4s */}
            {!prefersReducedMotion && (
              <div
                className="absolute -inset-full w-[200%] h-[200%] bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none animate-shimmer"
                style={{
                  transform: 'rotate(25deg)',
                  animation: 'shimmerSweep 4s infinite ease-in-out',
                }}
              />
            )}

            {/* Self-drawing SVG Shield and Checkmark */}
            <svg
              viewBox="0 0 64 64"
              className="w-14 h-14 sm:w-16 sm:h-16 mb-1 text-teal-bright"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="shieldStrokeGrad" x1="0" y1="0" x2="64" y2="64">
                  <stop stopColor="#1BB3B0" />
                  <stop offset="1" stopColor="#38E8E4" />
                </linearGradient>
              </defs>

              {/* Shield outline */}
              <path
                d="M32 6 L52 14 V28 C52 42 42 53 32 58 C22 53 12 42 12 28 V14 L32 6 Z"
                stroke="url(#shieldStrokeGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={prefersReducedMotion ? '' : 'draw-shield'}
              />

              {/* Checkmark inside shield */}
              <path
                d="M23 31 L29 37 L41 23"
                stroke="#1BB3B0"
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={prefersReducedMotion ? '' : 'draw-check'}
              />
            </svg>

            {/* Core Label */}
            <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-teal-bright uppercase">
              PHI PROTECTED
            </span>
          </div>
        </div>

        {/* Orbiting Badges In Front of Core (z > 0) */}
        <div className="absolute inset-0 pointer-events-none z-[20]">
          {badgePositions
            .filter((b) => b.z > 0)
            .map((b) => (
              <div
                key={b.name}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 transition-all duration-200 ${
                  b.isFront
                    ? 'bg-teal text-white shadow-glow-teal ring-2 ring-teal-bright scale-105'
                    : 'bg-navy text-slate-100 border border-teal/40 shadow-lg'
                }`}
                style={{
                  left: `${b.x}px`,
                  top: `${b.y}px`,
                  transform: `translate(-50%, -50%) scale(${b.scale})`,
                }}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    b.isFront ? 'bg-white' : 'bg-teal-bright'
                  }`}
                />
                <span>{b.name}</span>
              </div>
            ))}
        </div>
      </div>

      {/* Layer 6: Status Pill Under Graphic (Cross-fades every 2.4s) */}
      <div className="mt-4 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-navy border border-teal/30 shadow-md">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="text-xs font-mono text-teal-bright transition-opacity duration-300">
          {statusTexts[statusIdx]}
        </span>
      </div>
    </div>
  );
};

