import Link from "next/link"
import { ShieldCheck, CalendarPlus, Syringe, Plane, Building2 } from "lucide-react"

const vaccines = [
    { title: "Influenza Vaccination Drive", href: "/services/vaccination/influenza", icon: Syringe, desc: "Annual flu shots to drastically reduce seasonal absenteeism." },
    { title: "Hepatitis B Vaccination", href: "/services/vaccination/hepatitis-b", icon: ShieldCheck, desc: "Critical protection for occupational health hazards." },
    { title: "Tetanus Vaccination", href: "/services/vaccination/tetanus", icon: Syringe, desc: "Essential for factory worksites and manual labor." },
    { title: "Travel Vaccination", href: "/services/vaccination/travel", icon: Plane, desc: "Keep traveling executives safe from global health risks." },
    { title: "Onsite Corporate Vaccination Camp", href: "/services/vaccination/onsite", icon: Building2, desc: "Mass vaccination drives conducted securely in your office." },
]

export const metadata = {
    title: "Corporate Vaccination Programs | ApexCare360",
    description: "Compliance-ready vaccine drives for Influenza, Hep-B, and more. Protect your workforce today.",
}

export default function VaccinationDirectory() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 pt-16">
            <section className="bg-primary text-white py-16 px-4 md:px-6">
                <div className="container max-w-4xl text-center space-y-4">
                    <h1 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">Corporate Vaccination</h1>
                    <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                        High-volume, compliant vaccination drives set up seamlessly at your corporate premises.
                    </p>
                </div>
            </section>

            <section className="py-16 px-4 md:px-6">
                <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {vaccines.map((item) => {
                        const Icon = item.icon
                        return (
                            <Link key={item.href} href={item.href} className="group block">
                                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-100 h-full">
                                    <div className="bg-emerald-50 text-emerald-600 w-12 h-12 rounded-xl flex justify-center items-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-primary transition-colors mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm">{item.desc}</p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}
