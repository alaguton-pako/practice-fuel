import PracticeCard from "./components/practice-card";
import type { PracticeSummaryType } from "./lib/types";
import { getPracticeStatus } from "./lib/utils";

const mockPractices: PracticeSummaryType[] = [
  {
    id: "1",
    name: "Bright Smile Dental",
    doctor: "Dr. Sarah Chen",
    city: "San Francisco",
    country: "USA",
    newPatientsThisMonth: 45,
    appointmentRequests: 120,
    conversionRate: 22.5,
    showRate: 85.2,
    marketingSpend: 2500,
    monthlyTrend: [32, 38, 42, 45, 40, 45],
    status: "high",
  },
  {
    id: "2",
    name: "Family Dental Care",
    doctor: "Dr. James Wilson",
    city: "Chicago",
    country: "USA",
    newPatientsThisMonth: 28,
    appointmentRequests: 90,
    conversionRate: 8.5,
    showRate: 72.1,
    marketingSpend: 1800,
    monthlyTrend: [25, 22, 20, 18, 20, 28],
    status: "at-risk",
  },
  {
    id: "3",
    name: "Modern Dentistry",
    doctor: "Dr. Elena Rodriguez",
    city: "Miami",
    country: "USA",
    newPatientsThisMonth: 35,
    appointmentRequests: 105,
    conversionRate: 15.0,
    showRate: 78.5,
    marketingSpend: 2100,
    monthlyTrend: [30, 32, 35, 34, 35, 35],
    status: "neutral",
  },
].map((practice) => ({
  ...practice,
  status: getPracticeStatus(practice.conversionRate),
}));

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Practice Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Monitor your dental practice performance
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {mockPractices.map((practice) => (
          <PracticeCard key={practice.id} practice={practice} />
        ))}
      </div>
    </div>
  );
}

export default App;
