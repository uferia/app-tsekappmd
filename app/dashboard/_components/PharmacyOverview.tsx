interface PharmacyCategory {
  label: string;
  value: number;
  color: string;
}

interface PharmacyOverviewProps {
  data: {
    title: string;
    subtitle: string;
    categories: PharmacyCategory[];
    total: number;
  };
}

export default function PharmacyOverview({ data }: PharmacyOverviewProps) {
  const total = data.categories.reduce((s, c) => s + c.value, 0);

  return (
    <div className="rounded-2xl border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-900 p-5 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-base font-semibold text-secondary-900 dark:text-secondary-100">{data.title}</h3>
          <p className="text-sm text-secondary-400">{data.subtitle}</p>
        </div>
        <span className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">{data.total.toLocaleString()}</span>
      </div>

      {/* Segmented bar */}
      <div className="flex h-3 w-full overflow-hidden rounded-full gap-0.5 mb-4">
        {data.categories.map((cat, i) => (
          <div
            key={i}
            className={`${cat.color} rounded-full`}
            style={{ width: `${(cat.value / total) * 100}%` }}
          />
        ))}
      </div>

      <div className="space-y-2">
        {data.categories.map((cat, i) => (
          <div key={i} className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-secondary-600 dark:text-secondary-400">
              <span className={`h-2.5 w-2.5 rounded-full ${cat.color}`} />
              {cat.label}
            </span>
            <span className="font-medium text-secondary-900 dark:text-secondary-100">{cat.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
