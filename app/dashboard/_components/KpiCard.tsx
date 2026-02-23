interface KpiCardProps {
  id: string;
  title: string;
  value: string;
  delta: string;
  deltaType: "up" | "down";
  subtext: string;
  bars: number[];
}

export default function KpiCard({ title, value, delta, deltaType, subtext, bars }: KpiCardProps) {
  const max = Math.max(...bars);
  const isUp = deltaType === "up";

  return (
    <div className="rounded-2xl border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-900 p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-secondary-500 dark:text-secondary-400">{title}</p>
          <p className="mt-1 text-3xl font-bold tracking-tight text-secondary-900 dark:text-secondary-100">{value}</p>
          <div className="mt-2 flex items-center gap-1.5">
            <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
              isUp
                ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                : "bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300"
            }`}>
              {isUp ? "▲" : "▼"} {delta}
            </span>
            <span className="text-xs text-secondary-400">{subtext}</span>
          </div>
        </div>
        <button className="text-secondary-400 hover:text-secondary-600 dark:hover:text-secondary-300">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="12" cy="19" r="1.5" />
          </svg>
        </button>
      </div>

      {/* Mini bar chart */}
      <div className="mt-4 flex items-end gap-0.5 h-10">
        {bars.map((val, i) => (
          <div
            key={i}
            className="flex-1 rounded-full bg-primary-200 dark:bg-primary-800"
            style={{ height: `${(val / max) * 100}%` }}
          >
            <div
              className="rounded-full bg-primary-500 dark:bg-primary-400 w-full"
              style={{ height: "100%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
