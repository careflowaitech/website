import Link from "next/link"
import { ArrowRight, Brain, Activity, ShieldCheck, Stethoscope, HeartPulse, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
    {
        title: "Health Talks",
        description: "Expert-led sessions on cardiac health, oncology prevention, stress management, and more.",
        icon: Brain,
        href: "/services/health-talks",
        color: "bg-blue-50 text-blue-600",
    },
    {
        title: "Diagnostic Services",
        description: "Onsite and offsite screenings like ECG, PFT, Mammography, and vision check-ups.",
        icon: Activity,
        href: "/services/diagnostics",
        color: "bg-teal-50 text-teal-600",
    },
    {
        title: "Corporate Vaccination",
        description: "Compliance-ready vaccine drives for Influenza, Hepatitis B, Tetanus, and Travel.",
        icon: ShieldCheck,
        href: "/services/vaccination",
        color: "bg-emerald-50 text-emerald-600",
    },
    {
        title: "Blood Test Packages",
        description: "Comprehensive NABL-certified packages tailored for executives to factory workers.",
        icon: HeartPulse,
        href: "/services/packages",
        color: "bg-rose-50 text-rose-600",
    },
    {
        title: "Consultation Services",
        description: "Access to top specialists ranging from general physicians to oncologists and nutritionists.",
        icon: Stethoscope,
        href: "/consultations",
        color: "bg-indigo-50 text-indigo-600",
    },
    {
        title: "Custom Wellness Programs",
        description: "Build your own corporate package integrating tests, talks, and vaccinations.",
        icon: Building2,
        href: "/build-package",
        color: "bg-slate-100 text-slate-700",
    }
]

export const metadata = {
    title: "Our Services | ApexCare360",
    description: "Explore our comprehensive corporate healthcare solutions including diagnostics, health talks, vaccinations, and premium wellness packages.",
}

export default function ServicesDirectoryPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 pt-16">
            {/* Header Section */}
            <section className="bg-primary text-white py-20 px-4 md:px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 mix-blend-overlay"></div>
                <div className="container relative z-10 max-w-4xl text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight">
                        Comprehensive Healthcare Solutions
                    </h1>
                    <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
                        We provide end-to-end medical care explicitly structured for corporate environments, ensuring compliance, reducing absenteeism, and promoting long-term wellness.
                    </p>
                </div>
            </section>

            {/* Main Categories Grid */}
            <section className="py-20 px-4 md:px-6">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map((category) => {
                            const Icon = category.icon
                            return (
                                <div key={category.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full group">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${category.color} group-hover:scale-110 transition-transform`}>
                                        <Icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold font-heading mb-3 text-slate-900">
                                        {category.title}
                                    </h3>
                                    <p className="text-slate-600 mb-8 flex-1 leading-relaxed">
                                        {category.description}
                                    </p>
                                    <Button variant="ghost" className="w-full justify-between hover:bg-slate-50 border border-slate-200 mt-auto" asChild>
                                        <Link href={category.href}>
                                            Explore Services
                                            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}
