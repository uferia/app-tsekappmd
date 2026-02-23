interface Series {
  label: string;
  values: number[];
  color: string;
}

interface PatientsStatusProps {
  data: {
    title: string;
    subtitle: string;
    months: string[];
    series: Series[];
  };
}

export default function PatientsStatus({ data }: PatientsStatusProps) {
  const allValues = data.series.flatMap((s) => s.values);
  const max = Math.max(...allValues);

  return (
    <div className="rounded-2xl border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-900 p-5 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-base font-semibold text-secondary-900 dark:text-secondary-100">{data.title}</h3>
          <p className="text-sm text-secondary-400">{data.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-3 text-xs text-secondary-500">
          {data.series.map((s, i) => (
            <span key={i} className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full inline-block" style={{ background: s.color }} />
              {s.label}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-end gap-2 h-28">
        {data.months.map((month, mi) => (
          <div key={mi} className="flex flex-1 flex-col items-center gap-0.5">
            <div className="flex w-full items-end gap-0.5" style={{ height: "88px" }}>
              {data.series.map((s, si) => (
                <div
                  key={si}
                  className="flex-1 rounded-full"
                  style={{
                    height: `${(s.values[mi] / max) * 100}%`,
                    background: s.color,
                  }}
                />
              ))}
            </div>
            <span className="text-xs text-secondary-400">{month}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
