import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

type GardenIslandProps = {
  growth: number;
  habitat: string;
  highlight?: string;
};

const bloomSlots = [
  { x: '22%', y: '28%' },
  { x: '68%', y: '24%' },
  { x: '51%', y: '18%' },
  { x: '28%', y: '48%' },
  { x: '63%', y: '44%' },
  { x: '16%', y: '58%' },
  { x: '74%', y: '56%' },
  { x: '44%', y: '54%' },
  { x: '36%', y: '36%' },
  { x: '58%', y: '65%' },
  { x: '14%', y: '36%' },
  { x: '78%', y: '36%' },
];

const plantSlots = [
  { x: '18%', y: '68%', size: 'small' },
  { x: '74%', y: '66%', size: 'medium' },
  { x: '54%', y: '72%', size: 'small' },
  { x: '34%', y: '70%', size: 'medium' },
];

const cloudSlots = [
  { top: '16%', left: '8%', delay: 0 },
  { top: '24%', left: '58%', delay: 1.4 },
  { top: '10%', left: '72%', delay: 2.2 },
];

const hillSlots = [
  { className: 'island-hill island-hill--left' },
  { className: 'island-hill island-hill--center' },
  { className: 'island-hill island-hill--right' },
];

export function GardenIsland({ growth, habitat, highlight }: GardenIslandProps) {
  const previousGrowthRef = useRef(growth);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 90, damping: 18, mass: 0.5 });
  const springY = useSpring(pointerY, { stiffness: 90, damping: 18, mass: 0.5 });
  const cloudX = useTransform(springX, (value) => value * 10);
  const backX = useTransform(springX, (value) => value * 16);
  const backY = useTransform(springY, (value) => value * 8);
  const islandX = useTransform(springX, (value) => value * 22);
  const islandY = useTransform(springY, (value) => value * 12);
  const frontX = useTransform(springX, (value) => value * 28);
  const frontY = useTransform(springY, (value) => value * 18);
  const particleX = useTransform(springX, (value) => value * 36);
  const particleY = useTransform(springY, (value) => value * 20);
  const previousGrowth = previousGrowthRef.current;

  useEffect(() => {
    previousGrowthRef.current = growth;
  }, [growth]);

  function handlePointerMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    pointerX.set(x);
    pointerY.set(y);
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <section className="garden-island-card">
      <div className="garden-island-card__header">
        <div>
          <p className="eyebrow">Current habitat</p>
          <h2>{habitat}</h2>
        </div>
        <span className="garden-growth-badge">Growth {growth}/12</span>
      </div>
      <div className="garden-island-scene living-scene" onMouseMove={handlePointerMove} onMouseLeave={handlePointerLeave}>
        <motion.div
          className="living-scene__sky"
          animate={{ backgroundPosition: ['0% 0%', '100% 35%', '0% 0%'] }}
          transition={{ duration: 18, ease: 'easeInOut', repeat: Infinity }}
        />

        <motion.div className="living-scene__clouds" style={{ x: cloudX }}>
          {cloudSlots.map((cloud, index) => (
            <motion.span
              className={`sky-cloud sky-cloud--${index + 1}`}
              key={`${cloud.left}-${cloud.top}`}
              style={{ top: cloud.top, left: cloud.left }}
              animate={{ x: [0, 18, 0], y: [0, -4, 0] }}
              transition={{
                duration: 12 + index * 2,
                ease: 'easeInOut',
                repeat: Infinity,
                delay: cloud.delay,
              }}
            />
          ))}
        </motion.div>

        <motion.div className="living-scene__back" style={{ x: backX, y: backY }}>
          {hillSlots.map((hill, index) => (
            <motion.span
              className={hill.className}
              key={hill.className}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 6 + index, ease: 'easeInOut', repeat: Infinity }}
            />
          ))}
          <span className="back-tree back-tree--one" />
          <span className="back-tree back-tree--two" />
          <span className="back-tree back-tree--three" />
        </motion.div>

        <motion.div
          className="living-scene__island"
          style={{ x: islandX, y: islandY }}
          animate={{ rotate: [0, 0.8, -0.8, 0], y: [0, -4, 0] }}
          transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
        >
          <span className="island-shadow" />
          <div className="island-core">
            <span className="island-core__ridge" />
            <span className="island-core__path" />
            <motion.span
              className="island-core__pond"
              animate={{ scale: [1, 1.04, 1], rotate: [0, 3, 0] }}
              transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity }}
            />
          </div>
        </motion.div>

        <motion.div className="living-scene__front" style={{ x: frontX, y: frontY }}>
          {plantSlots.map((plant, index) => (
            <motion.span
              className={`front-plant front-plant--${plant.size}`}
              key={`${plant.x}-${plant.y}`}
              style={{ left: plant.x, top: plant.y }}
              animate={{ rotate: [-3, 3, -3], y: [0, -2, 0] }}
              transition={{ duration: 3.8 + index * 0.4, ease: 'easeInOut', repeat: Infinity }}
              whileHover={{ scale: 1.06 }}
            />
          ))}

          {bloomSlots.slice(0, Math.max(growth, 3)).map((bloom, index) => {
            const isNew = index >= previousGrowth && index < growth;

            return (
              <motion.span
                className="front-bloom"
                key={`${bloom.x}-${bloom.y}`}
                style={{ left: bloom.x, top: bloom.y }}
                initial={isNew ? { scale: 0.8, opacity: 0, filter: 'drop-shadow(0 0 0 rgba(255,255,255,0))' } : false}
                animate={{
                  scale: 1,
                  opacity: 1,
                  y: [0, -5, 0],
                  filter: isNew
                    ? ['drop-shadow(0 0 0 rgba(255,255,255,0))', 'drop-shadow(0 0 18px rgba(255,241,172,0.95))', 'drop-shadow(0 0 8px rgba(255,241,172,0.45))']
                    : 'drop-shadow(0 0 8px rgba(255,241,172,0.35))',
                }}
                transition={{
                  scale: { type: 'spring', stiffness: 280, damping: 16, delay: isNew ? 0.05 * index : 0 },
                  opacity: { duration: 0.28, delay: isNew ? 0.05 * index : 0 },
                  y: { duration: 3.4 + index * 0.1, ease: 'easeInOut', repeat: Infinity },
                  filter: { duration: 0.8, delay: isNew ? 0.05 * index : 0 },
                }}
                whileHover={{ scale: 1.08 }}
              />
            );
          })}

          {growth >= 5 ? (
            <motion.span
              className="front-creature front-creature--one"
              initial={previousGrowth < 5 ? { scale: 0.8, opacity: 0 } : false}
              animate={{ scale: 1, opacity: 1, y: [0, -4, 0] }}
              transition={{
                scale: { type: 'spring', stiffness: 260, damping: 18 },
                opacity: { duration: 0.3 },
                y: { duration: 3.6, ease: 'easeInOut', repeat: Infinity },
              }}
              whileHover={{ scale: 1.05, rotate: 3 }}
            />
          ) : null}

          {growth >= 8 ? (
            <motion.span
              className="front-creature front-creature--two"
              initial={previousGrowth < 8 ? { scale: 0.8, opacity: 0 } : false}
              animate={{ scale: 1, opacity: 1, y: [0, -5, 0] }}
              transition={{
                scale: { type: 'spring', stiffness: 260, damping: 18 },
                opacity: { duration: 0.3 },
                y: { duration: 4.2, ease: 'easeInOut', repeat: Infinity },
              }}
              whileHover={{ scale: 1.05, rotate: -3 }}
            />
          ) : null}
        </motion.div>

        <motion.div className="living-scene__particles" style={{ x: particleX, y: particleY }}>
          {Array.from({ length: 10 }).map((_, index) => (
            <motion.span
              className={`island-particle island-particle--${(index % 3) + 1}`}
              key={`particle-${index}`}
              style={{
                left: `${10 + index * 8}%`,
                top: `${18 + (index % 4) * 16}%`,
              }}
              animate={{ y: [0, -18, 0], opacity: [0.25, 0.8, 0.25], scale: [0.8, 1.1, 0.8] }}
              transition={{
                duration: 4.4 + index * 0.22,
                ease: 'easeInOut',
                repeat: Infinity,
                delay: index * 0.16,
              }}
            />
          ))}
        </motion.div>
      </div>
      <p className="garden-island-card__highlight">{highlight || 'Your next answers will wake more of the island.'}</p>
    </section>
  );
}
