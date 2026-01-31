import React from "react";
import type { PracticeSummaryType } from "@/lib/types";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatPercent } from "@/lib/utils";

interface PracticeCardProps {
  practice: PracticeSummaryType;
}

const PracticeCard: React.FC<PracticeCardProps> = ({ practice }) => {
  const statusColors = {
    high: "bg-green-100 text-green-800 border-green-300",
    "at-risk": "bg-red-200 text-red-800 border-red-500",
    neutral: "bg-gray-100 text-gray-800 border-gray-300",
  };

  // Here I am finding the max value for trend scaling
  const maxTrend = Math.max(...practice.monthlyTrend);

  return (
    <Card className="h-full hover:shadow-lg cursor-pointer transition-shadow duration-300 border border-gray-200">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{practice.name}</h3>
            <p className="text-gray-600 text-sm mt-1">
              {practice.doctor} • {practice.city}, {practice.country}
            </p>
          </div>
          <Badge className={`${statusColors[practice.status]} font-medium`}>
            {practice.status === "high"
              ? "High Performer"
              : practice.status === "at-risk"
                ? "At Risk"
                : "Stable"}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Key Metrics  */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-sm text-gray-500">New Patients</p>
            <p className="text-2xl font-bold text-gray-900">
              {practice.newPatientsThisMonth}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Appointments</p>
            <p className="text-2xl font-bold text-gray-900">
              {practice.appointmentRequests}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Conversion</p>
            <p className="text-2xl font-bold text-gray-900">
              {formatPercent(practice.conversionRate)}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Show Rate</p>
            <p className="text-2xl font-bold text-gray-900">
              {formatPercent(practice.showRate || 0)}
            </p>
          </div>
        </div>

        {/* Trend Visualization Side */}
        <div className="pt-9 border-t">
          <div className="flex items-end h-16 gap-1">
            {practice.monthlyTrend.map((value, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-blue-500 rounded-t-sm min-h-1"
                  style={{
                    height: `${(value / maxTrend) * 60}px`,
                    backgroundColor:
                      practice.status === "high"
                        ? "#10b981"
                        : practice.status === "at-risk"
                          ? "#ef4444"
                          : "#6b7280",
                  }}
                />
                <span className="text-xs text-gray-500 mt-1">
                  {["J", "F", "M", "A", "M", "J"][idx]}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs font-medium text-gray-700 mb-2">
            6-Month Trend Analytics
          </p>
        </div>

        {/* Recommendations Part */}
        <div className="pt-3 border-t">
          <p className="text-sm font-medium text-gray-700 mb-2">
            Recommendations
          </p>
          <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
            <li>Increase ad budget on top-performing channels</li>
            <li>Optimize mobile landing page layout</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default PracticeCard;
