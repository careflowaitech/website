import Link from "next/link"
import { Activity, Beaker, FileText, HeartPulse, Search, ShieldCheck } from "lucide-react"

const diagnostics = [
    { title: "ECG", href: "/services/diagnostics/ecg", category: "Cardiac" },
    { title: "Chest X-Ray", href: "/services/diagnostics/chest-xray", category: "Pulmonary" },
    { title: "Mammography", href: "/services/diagnostics/mammography", category: "Oncology" },
    { title: "PFT (Pulmonary Function Test)", href: "/services/diagnostics/pft", category: "Pulmonary" },
    { title: "Ophthalmology Check-up", href: "/services/diagnostics/ophthalmology", category: "Vision" },
    { title: "Dental Check-up", href: "/services/diagnostics/dental", category: "Dental" },
    { title: "BMI Check-up", href: "/services/diagnostics/bmi", category: "General" },
    { title: "Blood Group Testing", href: "/services/diagnostics/blood-group", category: "General" },
]

export const metadata = {
    title: "Diagnostic Services | ApexCare360",
    description: "Comprehensive corporate diagnostic screenings spanning ECG, X-Ray, mammography, vision, and more.",
}

export default function DiagnosticsDirectory() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 pt-16">
            <section className="bg-primary text-white py-16 px-4 md:px-6">
                <div className="container max-w-4xl text-center space-y-4">
                    <h1 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">Corporate Diagnostics</h1>
                    <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                        Precision medical screenings at scale. Equip your workforce with deep health insights to prevent chronic illnesses.
                    </p>
                </div>
            </section>

            <section className="py-16 px-4 md:px-6">
                <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {diagnostics.map((item) => (
                        <Link key={item.href} href={item.href} className="group block h-full">
                            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full items-center text-center">
                                <div className="bg-teal-50 text-teal-600 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform">
                                    <Activity className="h-8 w-8" />
                                </div>
                                <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-primary transition-colors mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">{item.category}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    )
}
