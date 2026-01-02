import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const data = [
  { year: '2019', value: 20 },
  { year: '2020', value: 35 },
  { year: '2021', value: 55 },
  { year: '2022', value: 78 },
  { year: '2023', value: 105 },
  { year: '2024', value: 145 },
];

const WIDTH = 420;
const HEIGHT = 260;
const PADDING = 40;

const maxValue = Math.max(...data.map(d => d.value));

const getX = (index: number) =>
  PADDING + (index * (WIDTH - PADDING * 2)) / (data.length - 1);

const getY = (value: number) =>
  HEIGHT - PADDING - (value / maxValue) * (HEIGHT - PADDING * 2);

const ClientGrowthGraph = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const pathD = data
    .map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)} ${getY(d.value)}`)
    .join(' ');

  return (
    <div ref={ref} className="w-full max-w-md mx-auto">
      <h4 className="font-heading text-lg font-semibold mb-4 text-royal-blue">
        Client Growth Trajectory
      </h4>

      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="w-full overflow-visible"
      >
        {/* Y Axis */}
        <line
          x1={PADDING}
          y1={PADDING}
          x2={PADDING}
          y2={HEIGHT - PADDING}
          stroke="#1e293b"
          strokeWidth="1"
        />

        {/* X Axis */}
        <line
          x1={PADDING}
          y1={HEIGHT - PADDING}
          x2={WIDTH - PADDING}
          y2={HEIGHT - PADDING}
          stroke="#1e293b"
          strokeWidth="1"
        />

        {/* Axis Labels */}
        {data.map((d, i) => (
          <text
            key={d.year}
            x={getX(i)}
            y={HEIGHT - 14}
            textAnchor="middle"
            fontSize="11"
            fill="#475569"
          >
            {d.year}
          </text>
        ))}

        {/* Animated Growth Line */}
        <motion.path
          d={pathD}
          fill="none"
          stroke="#d4af37"
          strokeWidth="2.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: isInView ? 1 : 0 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
        />

        {/* Nodes */}
        {data.map((d, i) => (
          <motion.circle
            key={i}
            cx={getX(i)}
            cy={getY(d.value)}
            r="5"
            fill="#d4af37"
            initial={{ scale: 0 }}
            animate={{ scale: isInView ? 1 : 0 }}
            transition={{ delay: 0.4 + i * 0.15 }}
          />
        ))}
      </svg>

      {/* Numbers */}
      <div className="grid grid-cols-3 gap-6 mt-6">
  <div className="text-center">
    <p className="text-2xl font-heading font-semibold text-gold">145+</p>
    <p className="text-xs uppercase tracking-wider text-muted-foreground">
      Enterprise Clients
    </p>
  </div>

  <div className="text-center">
    <p className="text-2xl font-heading font-semibold text-gold">6</p>
    <p className="text-xs uppercase tracking-wider text-muted-foreground">
      Years of Growth
    </p>
  </div>

  <div className="text-center">
    <p className="text-2xl font-heading font-semibold text-gold">2</p>
    <p className="text-xs uppercase tracking-wider text-muted-foreground">
      Operating Regions
    </p>
  </div>
</div>

    </div>
  );
};

export default ClientGrowthGraph;
