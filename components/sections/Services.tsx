"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Beaker, HeartPulse, Microscope, Ruler, Stethoscope, Syringe, Users, Zap } from "lucide-react"

const services = [
    {
        title: "Corporate Health Camps",
        description: "On-site comprehensive health checkups tailored for employees.",
        icon: Users,
        color: "bg-blue-500",
    },
    {
        title: "Vitals Monitoring",
        description: "BMI, Blood Pressure, and general health metrics tracking.",
        icon: Ruler,
        color: "bg-green-500",
    },
    {
        title: "Cardiac Care",
        description: "Advanced ECG, PFT, and heart health assessments.",
        icon: HeartPulse,
        color: "bg-red-500",
    },
    {
        title: "Diagnostic Tests",
        description: "Precise RBS, Cholesterol, Lipid Profile & more.",
        icon: Beaker,
        color: "bg-indigo-500",
    },
    {
        title: "Sample Collection",
        description: "Hassle-free, safe blood sample collection at office premises.",
        icon: Syringe,
        color: "bg-purple-500",
    },
    {
        title: "Preventive Oncology",
        description: "Early detection cancer screening tests tailored for risk groups.",
        icon: Microscope,
        color: "bg-pink-500",
    },
    {
        title: "Specialty Consultations",
        description: "Direct access to top specialist doctors for expert advice.",
        icon: Stethoscope,
        color: "bg-teal-500",
    },
    {
        title: "Wellness Programs",
        description: "Holistic nutrition plans, yoga sessions, and mental health workshops.",
        icon: Zap, // Changed icon for variety
        color: "bg-orange-500",
    },
]

export function Services() {
    return (
        <section id="services" className="py-24 bg-slate-50 border-t border-slate-200">
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
                            <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-white group overflow-hidden relative">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                                    <service.icon className="w-24 h-24 text-slate-900" />
                                </div>
                                <CardHeader>
                                    <div className={`h-12 w-12 rounded-2xl ${service.color} bg-opacity-10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className={`h-6 w-6 text-white`} /> {/* simplified for consistent look */}
                                    </div>
                                    <CardTitle className="text-lg font-bold text-slate-900">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">
                                        {service.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
