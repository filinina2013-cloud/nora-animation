import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import svgPaths from '../imports/Frame37231/svg-d7p1zwi922';

// ─── Brand Tokens ─────────────────────────────────────────────────────────────
// Deep purple from the original Figma logo
const LOGO_COLOR = '#48294E';

// Glow is very soft on a light background
const GLOW_SOFT   = 'rgba(72, 41, 78, 0.10)';
const GLOW_MEDIUM = 'rgba(72, 41, 78, 0.22)';
const GLOW_STRONG = 'rgba(72, 41, 78, 0.34)';

// ─── Gradient Background ──────────────────────────────────────────────────────
// Base: #F3F1F4  |  Blobs: violet 300–600 + deep twilight 400–700
// Blend style: lighten — all orbs are lighter / pastel so they brighten channels
function GradientBackground() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        // Warm pearl-white — the brand's light canvas
        background: '#F3F1F4',
      }}
    >
      {/* ── Violet-300 / large atmospheric haze ─────────────────────────── */}
      <motion.div
        style={{
          position: 'absolute',
          borderRadius: '50%',
          width: '130%',
          height: '130%',
          left: '-15%',
          top: '-15%',
          // violet-300 tinted mist — lighten blend keeps background bright
          background:
            'radial-gradient(ellipse at 42% 44%, rgba(216, 200, 254, 0.32) 0%, rgba(233, 226, 255, 0.14) 45%, transparent 70%)',
          filter: 'blur(64px)',
          mixBlendMode: 'lighten',
        }}
        animate={{ x: [0, 80, -60, 38, 0], y: [0, -52, 72, -32, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── Violet-400 / bloom — upper right ────────────────────────────── */}
      <motion.div
        style={{
          position: 'absolute',
          borderRadius: '50%',
          width: '85%',
          height: '85%',
          right: '-12%',
          top: '-8%',
          background:
            'radial-gradient(ellipse, rgba(196, 181, 253, 0.30) 0%, rgba(221, 214, 254, 0.12) 52%, transparent 70%)',
          filter: 'blur(80px)',
          mixBlendMode: 'lighten',
        }}
        animate={{
          x: [0, -88, 58, -42, 0],
          y: [0, 68, -64, 44, 0],
          opacity: [0.9, 0.55, 0.95, 0.62, 0.9],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── Deep twilight-500 / cool undercurrent — lower left ───────────── */}
      <motion.div
        style={{
          position: 'absolute',
          borderRadius: '50%',
          width: '65%',
          height: '65%',
          left: '-8%',
          bottom: '5%',
          background:
            'radial-gradient(ellipse, rgba(139, 92, 246, 0.10) 0%, rgba(167, 139, 250, 0.04) 55%, transparent 72%)',
          filter: 'blur(72px)',
          mixBlendMode: 'lighten',
        }}
        animate={{
          x: [0, 58, -46, 28, 0],
          y: [0, -44, 38, -24, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* ── Lilac-white / centre luminous pool ──────────────────────────── */}
      <motion.div
        style={{
          position: 'absolute',
          borderRadius: '50%',
          width: '72%',
          height: '72%',
          left: '14%',
          top: '12%',
          background:
            'radial-gradient(ellipse, rgba(245, 240, 255, 0.55) 0%, rgba(237, 230, 255, 0.22) 48%, transparent 68%)',
          filter: 'blur(52px)',
          mixBlendMode: 'lighten',
        }}
        animate={{
          x: [0, 42, -34, 18, 0],
          y: [0, -38, 48, -20, 0],
          opacity: [0.78, 1, 0.62, 0.92, 0.78],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* ── Twilight-600 / deep plum accent — lower right ────────────────── */}
      <motion.div
        style={{
          position: 'absolute',
          borderRadius: '50%',
          width: '58%',
          height: '58%',
          right: '4%',
          bottom: '8%',
          background:
            'radial-gradient(ellipse, rgba(124, 58, 237, 0.08) 0%, rgba(167, 139, 250, 0.04) 55%, transparent 72%)',
          filter: 'blur(78px)',
          mixBlendMode: 'lighten',
        }}
        animate={{
          x: [0, -42, 32, -18, 0],
          y: [0, -32, 52, -36, 0],
          opacity: [0.72, 1, 0.52, 0.88, 0.72],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      {/* ── Violet-200 / top-left breath ─────────────────────────────────── */}
      <motion.div
        style={{
          position: 'absolute',
          borderRadius: '50%',
          width: '55%',
          height: '55%',
          left: '5%',
          top: '8%',
          background:
            'radial-gradient(ellipse, rgba(233, 224, 255, 0.40) 0%, transparent 65%)',
          filter: 'blur(60px)',
          mixBlendMode: 'lighten',
        }}
        animate={{
          x: [0, 36, -28, 16, 0],
          y: [0, 28, -40, 22, 0],
          opacity: [0.65, 0.95, 0.50, 0.80, 0.65],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      {/* Subtle inner vignette — keeps edges softer & logo centred visually */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(232, 228, 236, 0.30) 100%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

// ─── Heart shimmer ring (soft radial pulse — more fashion-forward than dots) ──
function HeartShimmer({ active }: { active: boolean }) {
  return (
    <>
      {/* First pulse — expands quickly */}
      <motion.div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: '320%',
          height: '320%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(140, 90, 180, 0.36) 0%, rgba(180, 140, 220, 0.14) 45%, transparent 68%)',
          pointerEvents: 'none',
        }}
        initial={{ opacity: 0, scale: 0.2 }}
        animate={
          active
            ? { opacity: [0, 0.7, 0.35, 0], scale: [0.2, 1.2, 1.7, 2.4] }
            : { opacity: 0, scale: 0.2 }
        }
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Second pulse — slightly delayed, slower */}
      <motion.div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: '280%',
          height: '280%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(160, 110, 200, 0.28) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
        initial={{ opacity: 0, scale: 0.3 }}
        animate={
          active
            ? { opacity: [0, 0.5, 0.22, 0], scale: [0.3, 1.0, 1.5, 2.0] }
            : { opacity: 0, scale: 0.3 }
        }
        transition={{ duration: 2.2, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Lingering soft halo after shimmer settles */}
      <motion.div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: '200%',
          height: '200%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(120, 60, 160, 0.18) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
        initial={{ opacity: 0 }}
        animate={
          active
            ? { opacity: [0, 0, 0.55, 0.30] }
            : { opacity: 0 }
        }
        transition={{ duration: 2.4, ease: 'easeOut' }}
      />
    </>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [phase, setPhase] = useState(0);
  // 0 → bg drifting                    (0 s)
  // 1 → logo fades in + glow           (0.9 s)
  // 2 → decorative line draws          (2.9 s)
  // 3 → heart + shimmer                (5.8 s)
  // 4 → gentle breathing loop          (7.5 s)

  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 900),
      setTimeout(() => setPhase(2), 2900),
      setTimeout(() => setPhase(3), 5800),
      setTimeout(() => setPhase(4), 7500),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  const breathing = phase >= 4;

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ① Ambient gradient drifts behind everything */}
      <GradientBackground />

      {/* Stage — centres the logo */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* ② Logo fade-in + scale */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{
            opacity: phase >= 1 ? 1 : 0,
            scale: phase >= 1 ? 1 : 0.97,
          }}
          transition={{ duration: 2.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative',
            // Responsive: fills up to 812 px but never more than 88 vw
            width: 'min(812px, 88vw)',
            aspectRatio: '812 / 382',
          }}
        >
          {/* ③ Glow envelope + breathing */}
          <motion.div
            style={{ position: 'relative', width: '100%', height: '100%' }}
            animate={
              breathing
                ? {
                    scale: [1, 1.010, 1],
                    filter: [
                      `drop-shadow(0 4px 24px ${GLOW_SOFT})`,
                      `drop-shadow(0 6px 44px ${GLOW_STRONG})`,
                      `drop-shadow(0 4px 24px ${GLOW_SOFT})`,
                    ],
                  }
                : {
                    scale: 1,
                    filter:
                      phase >= 1
                        ? `drop-shadow(0 4px 32px ${GLOW_MEDIUM})`
                        : 'drop-shadow(0 0 0px rgba(0,0,0,0))',
                  }
            }
            transition={
              breathing
                ? { duration: 4.5, repeat: Infinity, ease: 'easeInOut' }
                : { duration: 2.2 }
            }
          >

            {/* ═══════════════════════════════════════════════════════════
                NØRA letterforms
                SVG viewBox → 802.051 × 256.031
                Inset  top:24.07%  right:0.62%  bottom:8.91%  left:0.63%
            ══════════════════════════════════════════════════════════════ */}
            <div
              style={{
                position: 'absolute',
                inset: '24.07% 0.62% 8.91% 0.63%',
              }}
            >
              <svg
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 802.051 256.031"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  display: 'block',
                }}
              >
                <path d={svgPaths.p29fa9980} fill={LOGO_COLOR} />   {/* N  */}
                <path d={svgPaths.p68b2e00}  fill={LOGO_COLOR} />   {/* Ø  */}
                <path d={svgPaths.p48c480}   fill={LOGO_COLOR} />   {/* RA */}
              </svg>
            </div>

            {/* ═══════════════════════════════════════════════════════════
                Decorative diagonal line — clip-reveals top → bottom
                SVG viewBox → 164.439 × 382
                Inset  top:0  right:52.97%  bottom:0  left:26.79%
                Direction of line in logo: top-left → bottom-right (through Ø)
            ══════════════════════════════════════════════════════════════ */}
            <motion.div
              style={{
                position: 'absolute',
                inset: '0 52.97% 0 26.79%',
              }}
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={{
                clipPath:
                  phase >= 2
                    ? 'inset(0 0 0% 0)'
                    : 'inset(0 0 100% 0)',
              }}
              transition={{ duration: 2.8, ease: [0.42, 0, 0.10, 1] }}
            >
              <svg
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 164.439 382"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  display: 'block',
                }}
              >
                {/* Thin diagonal stroke */}
                <path d={svgPaths.p46ae580}  fill={LOGO_COLOR} />
                {/* Upper arm */}
                <path d={svgPaths.p17969f00} fill={LOGO_COLOR} />
                {/* Upper terminal accent */}
                <path d={svgPaths.p34a71780} fill={LOGO_COLOR} />
                {/* Lower arm */}
                <path d={svgPaths.p7e95b80}  fill={LOGO_COLOR} />
                {/* Lower terminal accent */}
                <path d={svgPaths.p2a3f3180} fill={LOGO_COLOR} />
                {/* Mid-line teardrop / heart cluster */}
                <path d={svgPaths.p3872ff00} fill={LOGO_COLOR} />
                <path d={svgPaths.p214dab00} fill={LOGO_COLOR} />
                <path d={svgPaths.pba51000}  fill={LOGO_COLOR} />
                <path d={svgPaths.p259ded00} fill={LOGO_COLOR} />
                <path d={svgPaths.p230b3780} fill={LOGO_COLOR} />
              </svg>
            </motion.div>

            {/* ═══════════════════════════════════════════════════════════
                Small heart detail (near R)
                SVG viewBox → 26.4857 × 22.1479
                Inset  top:60.56%  right:14.82%  bottom:33.65%  left:81.92%
            ══════════════════════════════════════════════════════════════ */}
            <div
              style={{
                position: 'absolute',
                inset: '60.56% 14.82% 33.65% 81.92%',
              }}
            >
              {/* Shimmer rings beneath heart */}
              <HeartShimmer active={phase >= 3} />

              {/* Heart — spring pop-in */}
              <motion.div
                style={{ position: 'absolute', inset: 0 }}
                initial={{ opacity: 0, scale: 0.1 }}
                animate={{
                  opacity: phase >= 3 ? 1 : 0,
                  scale: phase >= 3 ? 1 : 0.1,
                }}
                transition={{
                  duration: 0.75,
                  ease: [0.34, 1.56, 0.64, 1], // spring with slight overshoot
                }}
              >
                <svg
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 26.4857 22.1479"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    display: 'block',
                  }}
                >
                  <path d={svgPaths.p2e2f3200} fill={LOGO_COLOR} />
                </svg>
              </motion.div>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
