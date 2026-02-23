export const kpiData = [
  {
    id: "patients",
    title: "Total Patients",
    value: "2,847",
    delta: "+12.5%",
    deltaType: "up" as const,
    subtext: "vs last month",
    bars: [40, 55, 45, 60, 50, 70, 65, 80, 75, 90],
  },
  {
    id: "revenue",
    title: "Monthly Revenue",
    value: "$48,295",
    delta: "+8.2%",
    deltaType: "up" as const,
    subtext: "vs last month",
    bars: [30, 45, 35, 55, 40, 60, 50, 65, 60, 75],
  },
  {
    id: "appointments",
    title: "Appointments",
    value: "1,204",
    delta: "-3.1%",
    deltaType: "down" as const,
    subtext: "vs last month",
    bars: [70, 65, 80, 60, 75, 55, 70, 50, 65, 45],
  },
];

export const revenueData = {
  title: "Revenue",
  subtitle: "Weekly overview",
  total: "$48,295",
  bars: [
    { label: "Mon", value: 65, color: "primary" },
    { label: "Tue", value: 80, color: "primary" },
    { label: "Wed", value: 55, color: "primary" },
    { label: "Thu", value: 90, color: "primary" },
    { label: "Fri", value: 70, color: "primary" },
    { label: "Sat", value: 45, color: "secondary" },
    { label: "Sun", value: 30, color: "secondary" },
  ],
};

export const dailyOverviewData = {
  title: "Daily Overview",
  subtitle: "Patient visits by hour",
  bars: [
    { label: "8am", inpatient: 20, outpatient: 35 },
    { label: "9am", inpatient: 35, outpatient: 50 },
    { label: "10am", inpatient: 45, outpatient: 65 },
    { label: "11am", inpatient: 55, outpatient: 70 },
    { label: "12pm", inpatient: 40, outpatient: 55 },
    { label: "1pm", inpatient: 30, outpatient: 45 },
    { label: "2pm", inpatient: 50, outpatient: 60 },
    { label: "3pm", inpatient: 60, outpatient: 75 },
    { label: "4pm", inpatient: 45, outpatient: 55 },
    { label: "5pm", inpatient: 25, outpatient: 40 },
  ],
};

export const diagnoseData = {
  title: "Avg Diagnose",
  subtitle: "By specialty",
  segments: [
    { label: "Cardiology", value: 32, color: "#6366f1" },
    { label: "Orthopedics", value: 24, color: "#22c55e" },
    { label: "Neurology", value: 18, color: "#f59e0b" },
    { label: "Pediatrics", value: 15, color: "#f43f5e" },
    { label: "Others", value: 11, color: "#a8a29e" },
  ],
};

export const doctorData = {
  name: "Dr. Sarah Chen",
  specialty: "Chief of Medicine",
  avatar: null,
  rating: 4.9,
  patients: 142,
  schedule: ["Mon", "Tue", "Wed", "Fri"],
};

export const onDutyDoctors = [
  {
    category: "Internal Medicine",
    doctors: [
      { name: "Dr. James Park", status: "available" as const },
      { name: "Dr. Maria Santos", status: "busy" as const },
    ],
  },
  {
    category: "Surgery",
    doctors: [
      { name: "Dr. David Kim", status: "available" as const },
      { name: "Dr. Lisa Wong", status: "on-break" as const },
    ],
  },
  {
    category: "Pediatrics",
    doctors: [
      { name: "Dr. Emma Reyes", status: "available" as const },
    ],
  },
];

export const pharmacyData = {
  title: "Pharmacy Overview",
  subtitle: "Inventory status",
  categories: [
    { label: "In Stock", value: 68, color: "bg-primary-500" },
    { label: "Low Stock", value: 20, color: "bg-amber-400" },
    { label: "Out of Stock", value: 12, color: "bg-rose-500" },
  ],
  total: 1840,
};

export const patientsStatusData = {
  title: "Patients Status",
  subtitle: "Monthly distribution",
  months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  series: [
    { label: "Admitted", values: [40, 55, 45, 60, 50, 65], color: "#6366f1" },
    { label: "Discharged", values: [35, 45, 40, 55, 45, 58], color: "#22c55e" },
    { label: "Outpatient", values: [60, 70, 65, 80, 70, 85], color: "#f59e0b" },
  ],
};
