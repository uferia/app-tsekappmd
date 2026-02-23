interface DailyBar {
  label: string;
  inpatient: number;
  outpatient: number;
}

interface DailyOverviewChartProps {
  data: {
    title: string;
    subtitle: string;
    bars: DailyBar[];
  };
}

export default function DailyOverviewChart({ data }: DailyOverviewChartProps) {
  const max = Math.max(...data.bars.flatMap((b) => [b.inpatient, b.outpatient]));

  return (
    <div className="rounded-2xl border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-900 p-5 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-base font-semibold text-secondary-900 dark:text-secondary-100">{data.title}</h3>
          <p className="text-sm text-secondary-400">{data.subtitle}</p>
        </div>
        <div className="flex items-center gap-3 text-xs text-secondary-500">
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-primary-500 inline-block" /> Inpatient</span>
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-amber-400 inline-block" /> Outpatient</span>
        </div>
      </div>
      <div className="flex items-end gap-1.5 h-28">
        {data.bars.map((bar, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-0.5">
            <div className="flex w-full items-end gap-0.5" style={{ height: "88px" }}>
              <div
                className="flex-1 rounded-full bg-primary-500"
                style={{ height: `${(bar.inpatient / max) * 100}%` }}
              />
              <div
                className="flex-1 rounded-full bg-amber-400"
                style={{ height: `${(bar.outpatient / max) * 100}%` }}
              />
            </div>
            <span className="text-xs text-secondary-400">{bar.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
