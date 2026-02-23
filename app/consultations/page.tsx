import Link from "next/link"
import { Stethoscope, Activity, FileHeart, Brain, Apple, SearchCheck } from "lucide-react"

const consultations = [
    { title: "General Physician Consultation", href: "/consultations/general-physician", icon: Stethoscope },
    { title: "Specialist Consultation", href: "/consultations/specialist", icon: SearchCheck },
    { title: "Oncology Consultation", href: "/consultations/oncology", icon: Activity },
    { title: "Diabetes Consultation", href: "/consultations/diabetes", icon: FileHeart },
    { title: "Nutrition Consultation", href: "/consultations/nutrition", icon: Apple },
    { title: "Mental Health Consultation", href: "/consultations/mental-health", icon: Brain },
]

export const metadata = {
    title: "Consultation Services | ApexCare360",
    description: "Book expert corporate consultations covering general wellness, oncology, mental health, and specialized diagnostics.",
}

export default function ConsultationsDirectory() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 pt-16">
            <section className="bg-primary text-white py-16 px-4 md:px-6">
                <div className="container max-w-4xl text-center space-y-4">
                    <h1 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">Corporate Consultations</h1>
                    <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                        Connect your workforce directly with highly trained specialists and medical professionals seamlessly.
                    </p>
                </div>
            </section>

            <section className="py-16 px-4 md:px-6">
                <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {consultations.map((item) => {
                        const Icon = item.icon
                        return (
                            <Link key={item.href} href={item.href} className="group block">
                                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-100 flex items-center gap-4">
                                    <div className="bg-indigo-50 text-indigo-600 p-3 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                        <Icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-lg font-bold font-heading text-slate-900 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}
