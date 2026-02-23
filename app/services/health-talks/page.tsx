import Link from "next/link"
import { ArrowRight, Brain, Heart, Activity, Stethoscope, Users, Coffee, Droplet, Sun, FileSignature } from "lucide-react"
import { Button } from "@/components/ui/button"

const talks = [
    { title: "Cardiac Health Talk", href: "/services/health-talks/cardiac-health", category: "Physical Health", icon: Heart },
    { title: "Breast Cancer Awareness", href: "/services/health-talks/breast-cancer", category: "Oncology", icon: Activity },
    { title: "Oncology Prevention", href: "/services/health-talks/oncology-prevention", category: "Oncology", icon: Stethoscope },
    { title: "Diabetes Awareness", href: "/services/health-talks/diabetes-awareness", category: "Physical Health", icon: Droplet },
    { title: "TB Awareness", href: "/services/health-talks/tb-awareness", category: "Physical Health", icon: Activity },
    { title: "Stress Management", href: "/services/health-talks/stress-management", category: "Mental Health", icon: Brain },
    { title: "Leadership & Mental Health", href: "/services/health-talks/leadership-mental-health", category: "Mental Health", icon: Users },
    { title: "Ergonomic (Physiotherapy)", href: "/services/health-talks/ergonomics", category: "Occupational Health", icon: Activity },
    { title: "Diet & Nutrition", href: "/services/health-talks/diet-nutrition", category: "Wellness", icon: Coffee },
    { title: "Zumba & Yoga", href: "/services/health-talks/zumba-yoga", category: "Fitness", icon: Sun },
]

export const metadata = {
    title: "Corporate Health Talks | ApexCare360",
    description: "Expert-led medical talks on cardiac health, oncology, stress management, and ergonomics for your workforce.",
}

export default function HealthTalksDirectory() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 pt-16">
            <section className="bg-primary text-white py-16 px-4 md:px-6 relative">
                <div className="container relative z-10 max-w-4xl text-center space-y-4">
                    <h1 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">
                        Corporate Health Talks
                    </h1>
                    <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                        Foster a culture of wellness through expert-led awareness sessions. Educate, inspire, and engage your employees.
                    </p>
                </div>
            </section>

            <section className="py-16 px-4 md:px-6">
                <div className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {talks.map((talk) => {
                            const Icon = talk.icon
                            return (
                                <Link key={talk.href} href={talk.href} className="group block">
                                    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 flex items-start gap-4 h-full">
                                        <div className="bg-primary/10 text-primary p-3 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">{talk.category}</p>
                                            <h3 className="text-lg font-bold font-heading text-slate-900 group-hover:text-primary transition-colors">
                                                {talk.title}
                                            </h3>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}

                        {/* Custom Topic Card */}
                        <div className="bg-gradient-to-br from-primary to-teal-600 p-6 rounded-2xl shadow-lg relative overflow-hidden flex flex-col justify-between text-white md:col-span-2 lg:col-span-2">
                            <div className="relative z-10">
                                <FileSignature className="h-8 w-8 mb-4 text-teal-200" />
                                <h3 className="text-2xl font-bold font-heading mb-2">Need a Custom Topic?</h3>
                                <p className="text-primary-foreground/90 max-w-md mb-6">
                                    Can't find what you're looking for? Request a custom health talk tailored to your specific corporate needs.
                                </p>
                            </div>
                            <Button variant="secondary" className="w-fit font-semibold" asChild>
                                <Link href="/services/health-talks/request-custom">
                                    Request Custom Talk <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
