interface DoctorProfileCardProps {
  doctor: {
    name: string;
    specialty: string;
    avatar: null;
    rating: number;
    patients: number;
    schedule: string[];
  };
}

const allDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function DoctorProfileCard({ doctor }: DoctorProfileCardProps) {
  return (
    <div className="rounded-2xl border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-900 p-5 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-base font-bold shrink-0">
          {doctor.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
        </div>
        <div>
          <p className="text-sm font-semibold text-secondary-900 dark:text-secondary-100">{doctor.name}</p>
          <p className="text-xs text-secondary-500">{doctor.specialty}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm mb-4">
        <div className="text-center">
          <p className="font-semibold text-secondary-900 dark:text-secondary-100">{doctor.rating}</p>
          <p className="text-xs text-secondary-400">Rating</p>
        </div>
        <div className="h-6 w-px bg-secondary-200 dark:bg-secondary-700" />
        <div className="text-center">
          <p className="font-semibold text-secondary-900 dark:text-secondary-100">{doctor.patients}</p>
          <p className="text-xs text-secondary-400">Patients</p>
        </div>
      </div>

      <p className="text-xs font-medium text-secondary-500 mb-2">Schedule</p>
      <div className="flex flex-wrap gap-1">
        {allDays.map((day) => (
          <span
            key={day}
            className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
              doctor.schedule.includes(day)
                ? "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300"
                : "bg-secondary-100 text-secondary-400 dark:bg-secondary-800"
            }`}
          >
            {day}
          </span>
        ))}
      </div>
    </div>
  );
}
