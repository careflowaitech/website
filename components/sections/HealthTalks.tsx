"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Brain, Heart, Stethoscope, Users, Utensils, Activity } from "lucide-react"

const talks = [
    { title: "Cardiology & Heart Health", icon: Heart, color: "bg-red-100 text-red-700" },
    { title: "Preventive Oncology", icon: Activity, color: "bg-purple-100 text-purple-700" },
    { title: "Mental Health Awareness", icon: Brain, color: "bg-blue-100 text-blue-700" },
    { title: "Nutrition & Diet", icon: Utensils, color: "bg-green-100 text-green-700" },
    { title: "Diabetes Management", icon: Stethoscope, color: "bg-orange-100 text-orange-700" },
    { title: "Women's Health", icon: Users, color: "bg-pink-100 text-pink-700" },
]

export function HealthTalks() {
    return (
        <section id="health-talks" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute -left-20 top-40 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute -right-20 bottom-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center mb-16">
                    <Badge variant="outline" className="mb-4 text-primary border-primary/20 bg-primary/5">Expert Sessions</Badge>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                        Specialized Health Talks
                    </h2>
                    <p className="mt-4 text-slate-600 md:text-xl max-w-2xl">
                        Empower your employees with knowledge. Our expert-led sessions cover critical aspects of modern well-being.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {talks.map((talk, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="flex items-center gap-4 p-6 rounded-2xl border border-slate-100 bg-white shadow-sm group-hover:shadow-lg transition-all group-hover:-translate-y-1">
                                <div className={`p-3 rounded-xl ${talk.color}`}>
                                    <talk.icon className="h-6 w-6" />
                                </div>
                                <span className="font-semibold text-lg text-slate-800">{talk.title}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
