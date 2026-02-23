interface RevenueBar {
  label: string;
  value: number;
  color: string;
}

interface RevenueChartProps {
  data: {
    title: string;
    subtitle: string;
    total: string;
    bars: RevenueBar[];
  };
}

export default function RevenueChart({ data }: RevenueChartProps) {
  const max = Math.max(...data.bars.map((b) => b.value));

  return (
    <div className="rounded-2xl border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-900 p-5 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-base font-semibold text-secondary-900 dark:text-secondary-100">{data.title}</h3>
          <p className="text-sm text-secondary-400">{data.subtitle}</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">{data.total}</p>
          <p className="text-xs text-secondary-400">this month</p>
        </div>
      </div>
      <div className="flex items-end gap-2 h-32">
        {data.bars.map((bar, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1">
            <div
              className="w-full rounded-full"
              style={{
                height: `${(bar.value / max) * 100}%`,
                background: bar.color === "primary" ? "var(--color-primary-500, #6366f1)" : "#a8a29e",
              }}
            />
            <span className="text-xs text-secondary-400">{bar.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
