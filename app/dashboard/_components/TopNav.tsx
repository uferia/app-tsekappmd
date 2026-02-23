import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";

const navItems = [
  { label: "Dashboard", href: "/dashboard", active: true },
  { label: "Patients", href: "#" },
  { label: "Doctors", href: "#" },
  { label: "Pharmacy", href: "#" },
  { label: "Reports", href: "#" },
];

export default function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-secondary-200 dark:border-secondary-700" style={{ background: "var(--canvas)" }}>
      <div className="flex h-16 items-center gap-4 px-6">
        {/* Brand */}
        <Link href="/dashboard" className="flex items-center gap-2 shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600">
            <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <span className="text-base font-semibold text-secondary-900 dark:text-secondary-100">TsekAppMD</span>
        </Link>

        {/* Nav items */}
        <nav className="hidden md:flex items-center gap-1 ml-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                item.active
                  ? "bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300"
                  : "text-secondary-600 dark:text-secondary-400 hover:bg-secondary-100 dark:hover:bg-secondary-800"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          {/* Notification */}
          <button className="flex h-9 w-9 items-center justify-center rounded-full border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-600 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-700 transition-colors relative">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-rose-500"></span>
          </button>

          {/* Messages */}
          <button className="flex h-9 w-9 items-center justify-center rounded-full border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-800 text-secondary-600 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-700 transition-colors">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3-3-3z" />
            </svg>
          </button>

          <ThemeSwitch />

          {/* Avatar */}
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-600 text-white text-sm font-semibold">
            SC
          </div>
        </div>
      </div>
    </header>
  );
}
