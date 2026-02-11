"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Activity, Award, Calculator, MapPin, Stethoscope, Users, Zap } from "lucide-react"

const features = [
    {
        title: "Pan-India Network",
        description: "Extensive healthcare partner network covering major cities and industrial hubs.",
        icon: MapPin,
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        title: "Best Commercials",
        description: "We negotiate the best diagnostic rates for our corporate partners.",
        icon: Calculator,
        gradient: "from-green-500 to-emerald-500",
    },
    {
        title: "Expert Medical Team",
        description: "Access to reputed doctors, specialists, and certified technicians.",
        icon: Stethoscope,
        gradient: "from-purple-500 to-pink-500",
    },
    {
        title: "End-to-End Execution",
        description: "Flawless planning and execution of health camps and wellness events.",
        icon: Activity,
        gradient: "from-orange-500 to-red-500",
    },
    {
        title: "Trusted Partner",
        description: "Trusted by leading corporates for reliability and quality service.",
        icon: Users,
        gradient: "from-indigo-500 to-blue-500",
    },
    {
        title: "Quality Assured",
        description: "NABL accreditated labs and ISO certified processes.",
        icon: Award,
        gradient: "from-teal-500 to-green-500",
    },
]

export function WhyChoose() {
    return (
        <section id="why-choose" className="py-24 bg-white relative">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                        Why Choose <span className="text-primary">ApexCare360</span>
                    </h2>
                    <p className="mt-4 text-slate-600 md:text-xl">
                        We don't just organize health camps; we engineer wellness experiences that your employees will value.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            <Card className="h-full border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundImage: `linear-gradient(to bottom, var(--tw-gradient-stops))` }} />

                                <CardHeader>
                                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <feature.icon className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600 leading-relaxed">
                                        {feature.description}
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
