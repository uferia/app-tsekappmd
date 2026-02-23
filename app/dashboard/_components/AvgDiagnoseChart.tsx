interface DiagnoseSegment {
  label: string;
  value: number;
  color: string;
}

interface AvgDiagnoseChartProps {
  data: {
    title: string;
    subtitle: string;
    segments: DiagnoseSegment[];
  };
}

export default function AvgDiagnoseChart({ data }: AvgDiagnoseChartProps) {
  const total = data.segments.reduce((s, seg) => s + seg.value, 0);

  // Build SVG donut
  const r = 40;
  const cx = 60;
  const cy = 60;
  const circumference = 2 * Math.PI * r;
  let offset = 0;

  const arcs = data.segments.map((seg) => {
    const dash = (seg.value / total) * circumference;
    const arc = { offset, dash, ...seg };
    offset += dash;
    return arc;
  });

  return (
    <div className="rounded-2xl border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-900 p-5 shadow-sm">
      <h3 className="text-base font-semibold text-secondary-900 dark:text-secondary-100 mb-1">{data.title}</h3>
      <p className="text-sm text-secondary-400 mb-4">{data.subtitle}</p>

      <div className="flex items-center gap-4">
        <svg width="120" height="120" viewBox="0 0 120 120" className="shrink-0">
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="#e7e5e4" strokeWidth="16" className="dark:stroke-secondary-700" />
          {arcs.map((arc, i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={r}
              fill="none"
              stroke={arc.color}
              strokeWidth="16"
              strokeDasharray={`${arc.dash} ${circumference - arc.dash}`}
              strokeDashoffset={-arc.offset + circumference * 0.25}
              style={{ transform: "rotate(-90deg)", transformOrigin: "60px 60px" }}
            />
          ))}
          <text x={cx} y={cy - 6} textAnchor="middle" className="fill-secondary-900 dark:fill-secondary-100 text-lg font-bold" fontSize="16" fontWeight="700" fill="currentColor">
            {total}
          </text>
          <text x={cx} y={cy + 10} textAnchor="middle" fontSize="10" fill="#78716c">cases</text>
        </svg>

        <div className="space-y-1.5 flex-1 min-w-0">
          {data.segments.map((seg, i) => (
            <div key={i} className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 truncate text-secondary-600 dark:text-secondary-400">
                <span className="h-2 w-2 rounded-full shrink-0" style={{ background: seg.color }} />
                {seg.label}
              </span>
              <span className="font-medium text-secondary-900 dark:text-secondary-100 ml-2">{seg.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
