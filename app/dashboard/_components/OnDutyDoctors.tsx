interface Doctor {
  name: string;
  status: "available" | "busy" | "on-break";
}

interface Category {
  category: string;
  doctors: Doctor[];
}

interface OnDutyDoctorsProps {
  doctors: Category[];
}

const statusColors: Record<string, string> = {
  available: "bg-green-400",
  busy: "bg-rose-500",
  "on-break": "bg-amber-400",
};

export default function OnDutyDoctors({ doctors }: OnDutyDoctorsProps) {
  return (
    <div className="rounded-2xl border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-900 p-5 shadow-sm">
      <h3 className="text-base font-semibold text-secondary-900 dark:text-secondary-100 mb-4">On Duty Doctors</h3>
      <div className="space-y-3">
        {doctors.map((cat) => (
          <div key={cat.category}>
            <p className="text-xs font-medium text-secondary-400 uppercase tracking-wide mb-1.5">{cat.category}</p>
            <div className="space-y-1.5">
              {cat.doctors.map((doc) => (
                <div key={doc.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary-100 dark:bg-secondary-800 text-xs font-semibold text-secondary-600 dark:text-secondary-300">
                      {doc.name.replace(/^Dr\.\s*/i, "").split(" ").filter(Boolean).slice(0, 2).map((n) => n[0]).join("")}
                    </div>
                    <span className="text-sm text-secondary-700 dark:text-secondary-300">{doc.name}</span>
                  </div>
                  <span className={`h-2 w-2 rounded-full ${statusColors[doc.status]}`} title={doc.status} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3 text-xs text-secondary-400">
        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-green-400 inline-block" /> Available</span>
        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-rose-500 inline-block" /> Busy</span>
        <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-amber-400 inline-block" /> Break</span>
      </div>
    </div>
  );
}
