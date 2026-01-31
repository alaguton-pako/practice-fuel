export type PracticeStatus = 'high' | 'at-risk' | 'neutral'

export type PracticeSummaryType = {
  id: string
  name: string
  doctor: string
  city: string
  country: string
  newPatientsThisMonth: number
  appointmentRequests: number
  conversionRate: number
  showRate?: number 
  marketingSpend?: number 
  monthlyTrend: number[]
  status: PracticeStatus 
}