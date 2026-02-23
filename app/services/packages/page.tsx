import Link from "next/link"
import { CheckCircle2, FlaskConical, Users, UserCheck, BriefcaseMedical, PackageCheck } from "lucide-react"

const packagesData = [
    { title: "Basic Corporate Health Package", href: "/services/packages/basic", icon: FlaskConical, target: "All Employees" },
    { title: "Executive Health Package", href: "/services/packages/executive", icon: BriefcaseMedical, target: "Mid-Level Management" },
    { title: "Senior Management Package", href: "/services/packages/senior-management", icon: UserCheck, target: "CXOs & VPs" },
    { title: "Factory Worker Package", href: "/services/packages/factory-worker", icon: Users, target: "Blue-Collar Workforce" },
    { title: "Pre-Employment Check-up", href: "/services/packages/pre-employment", icon: PackageCheck, target: "New Hires" },
    { title: "Annual Preventive Package", href: "/services/packages/annual-preventive", icon: CheckCircle2, target: "Annual Policy" },
]

export const metadata = {
    title: "Blood Test Packages | ApexCare360",
    description: "NABL-certified comprehensive blood test packages tailored for every corporate tier.",
}

export default function PackagesDirectory() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 pt-16">
            <section className="bg-primary text-white py-16 px-4 md:px-6">
                <div className="container max-w-4xl text-center space-y-4">
                    <h1 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">Blood Test Packages</h1>
                    <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                        Precision profiling through NABL-accredited lab networks. Scalable solutions for factory units to executive suites.
                    </p>
                </div>
            </section>

            <section className="py-16 px-4 md:px-6">
                <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {packagesData.map((pkg) => {
                        const Icon = pkg.icon
                        return (
                            <Link key={pkg.href} href={pkg.href} className="group block">
                                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-100 flex items-start gap-4">
                                    <div className="bg-rose-50 text-rose-600 p-3 rounded-xl group-hover:bg-rose-600 group-hover:text-white transition-colors">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">{pkg.target}</p>
                                        <h3 className="text-lg font-bold font-heading text-slate-900 group-hover:text-primary transition-colors">
                                            {pkg.title}
                                        </h3>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}
