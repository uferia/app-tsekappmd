import TopNav from "./_components/TopNav";
import KpiCard from "./_components/KpiCard";
import RevenueChart from "./_components/RevenueChart";
import DailyOverviewChart from "./_components/DailyOverviewChart";
import AvgDiagnoseChart from "./_components/AvgDiagnoseChart";
import DoctorProfileCard from "./_components/DoctorProfileCard";
import OnDutyDoctors from "./_components/OnDutyDoctors";
import PharmacyOverview from "./_components/PharmacyOverview";
import PatientsStatus from "./_components/PatientsStatus";
import { kpiData, revenueData, dailyOverviewData, diagnoseData, doctorData, onDutyDoctors, pharmacyData, patientsStatusData } from "@/data/dashboard/mockData";

export default function DashboardPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      {/* Centered canvas */}
      <div className="mx-auto max-w-[1440px] min-h-screen" style={{ background: "var(--canvas)", borderLeft: "1px solid var(--canvas-border)", borderRight: "1px solid var(--canvas-border)" }}>
        <TopNav />
        <main className="px-6 py-6 space-y-6">
          {/* Page header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
                Hospital Monitoring.
              </h1>
              <p className="mt-1 text-sm text-secondary-500 dark:text-secondary-400">
                Overview of clinic operations and patient metrics
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button className="flex items-center gap-1.5 rounded-full bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 transition-colors">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                New report
              </button>
              <button className="flex items-center gap-1.5 rounded-full border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 px-4 py-2 text-sm font-medium text-secondary-700 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-700 transition-colors">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Feb 2026
              </button>
              <div className="flex items-center gap-1.5 rounded-full border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 px-4 py-2">
                <svg className="h-4 w-4 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent text-sm text-secondary-700 dark:text-secondary-300 placeholder-secondary-400 outline-none w-32"
                />
              </div>
            </div>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {kpiData.map((kpi) => (
              <KpiCard key={kpi.id} {...kpi} />
            ))}
          </div>

          {/* Main content + sidebar */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Left/center: charts */}
            <div className="space-y-6 lg:col-span-2">
              <RevenueChart data={revenueData} />
              <DailyOverviewChart data={dailyOverviewData} />
            </div>
            {/* Right sidebar */}
            <div className="space-y-6">
              <AvgDiagnoseChart data={diagnoseData} />
              <DoctorProfileCard doctor={doctorData} />
              <OnDutyDoctors doctors={onDutyDoctors} />
            </div>
          </div>

          {/* Bottom widgets */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <PharmacyOverview data={pharmacyData} />
            <PatientsStatus data={patientsStatusData} />
          </div>
        </main>
      </div>
    </div>
  );
}
