"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Activity, Beaker, HeartPulse, Microscope, Ruler, Stethoscope, Syringe, Users, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
    {
        title: "Corporate Health Camps",
        description: "On-site comprehensive health checkups including General Physician and Specialty Camps.",
        icon: Users,
        color: "bg-blue-500",
        href: "/build-package",
    },
    {
        title: "Vitals & Body Analysis",
        description: "BMI, BCA (Body Composition Analysis), BMD (Bone Mineral Density) and general health metrics.",
        icon: Ruler,
        color: "bg-green-500",
        href: "/services/diagnostics",
    },
    {
        title: "Cardiac Care",
        description: "Advanced onsite ECG, PFT, and comprehensive heart health assessments.",
        icon: HeartPulse,
        color: "bg-red-500",
        href: "/services/diagnostics",
    },
    {
        title: "Diagnostic Tests",
        description: "Precise RBS, Cholesterol, Lipid Profile, Kidney & Liver function tests.",
        icon: Beaker,
        color: "bg-indigo-500",
        href: "/services/diagnostics",
    },
    {
        title: "Sample Collection",
        description: "Hassle-free, safe blood & urine sample collection at office premises.",
        icon: Syringe,
        color: "bg-purple-500",
        href: "/services/packages",
    },
    {
        title: "Preventive Oncology",
        description: "Screening tests for Cervical, Breast, Oral, and Prostate cancer.",
        icon: Microscope,
        color: "bg-pink-500",
        href: "/services/diagnostics",
    },
    {
        title: "Specialty Screenings",
        description: "Onsite Dental, Vision (Ophthalmology), Orthopedic and Urology check-ups.",
        icon: Stethoscope,
        color: "bg-teal-500",
        href: "/services/diagnostics",
    },
    {
        title: "Wellness Programs",
        description: "Holistic nutrition plans, mental health workshops, and customized ergonomics.",
        icon: Zap,
        color: "bg-orange-500",
        href: "/services/health-talks",
    },
    {
        title: "Fitness & Vaccination",
        description: "Corporate Vaccination drives (Flu, Hep B) plus Zumba & Yoga workshops.",
        icon: Activity,
        color: "bg-yellow-500",
        href: "/services/vaccination",
    },
]

export function Services() {
    return (
        <section id="services" className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold tracking-wide uppercase text-sm">What we offer</span>
                    <h2 className="mt-2 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                        Comprehensive Services
                    </h2>
                    <p className="mt-4 text-slate-600 md:text-xl max-w-2xl mx-auto">
                        From basic vitals to advanced diagnostics, we cover the entire spectrum of corporate healthcare.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            <Link href={service.href} className="block h-full group">
                                <Card className="h-full border-none shadow-sm group-hover:shadow-xl transition-all duration-300 bg-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                                        <service.icon className="w-24 h-24 text-slate-900" />
                                    </div>
                                    <CardHeader>
                                        <div className={`h-12 w-12 rounded-2xl ${service.color} bg-opacity-10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
                                            <service.icon className={`h-6 w-6 text-white`} /> {/* simplified for consistent look */}
                                        </div>
                                        <CardTitle className="text-lg font-bold text-slate-900 flex items-center justify-between">
                                            {service.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">
                                            {service.description}
                                        </p>
                                        <div className="mt-6 flex items-center text-sm font-semibold text-primary opacity-80 group-hover:opacity-100 transition-opacity">
                                            Learn More <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button asChild size="lg" className="h-12 px-8 rounded-full shadow-lg hover:shadow-xl transition-all font-semibold bg-white text-slate-800 border border-slate-200 hover:bg-slate-50">
                        <Link href="/services">
                            Explore All Services & Packages <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
