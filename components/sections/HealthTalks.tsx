"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Activity, Brain, Heart, Smile, Stethoscope, ArrowRight, Users, Utensils } from "lucide-react"
import Link from "next/link"

const talks = [
    { title: "Cardiology & Heart Health", icon: Heart, color: "bg-red-100 text-red-700" },
    { title: "Oncology Awareness", icon: Activity, color: "bg-purple-100 text-purple-700" },
    { title: "Mental Health & Stress", icon: Brain, color: "bg-blue-100 text-blue-700" },
    { title: "Ergonomics & Physiotherapy", icon: Smile, color: "bg-teal-100 text-teal-700" },
    { title: "Cervical Cancer Awareness", icon: Users, color: "bg-pink-100 text-pink-700" },
    { title: "Tuberculosis (TB)", icon: Activity, color: "bg-orange-100 text-orange-700" },
    { title: "Urology Health", icon: Stethoscope, color: "bg-indigo-100 text-indigo-700" },
    { title: "Respiratory Health", icon: Activity, color: "bg-sky-100 text-sky-700" },
    { title: "Neurology", icon: Brain, color: "bg-violet-100 text-violet-700" },
    { title: "Orthopedic Health", icon: Activity, color: "bg-stone-100 text-stone-700" },
    { title: "Gynecology Care", icon: Heart, color: "bg-rose-100 text-rose-700" },
    { title: "Diet & Nutrition", icon: Utensils, color: "bg-green-100 text-green-700" },
    { title: "Zumba & Yoga", icon: Smile, color: "bg-yellow-100 text-yellow-700" },
    { title: "Dental Health", icon: Activity, color: "bg-zinc-100 text-zinc-700" },
    { title: "Ophthalmology", icon: Activity, color: "bg-cyan-100 text-cyan-700" },
]

export function HealthTalks() {
    return (
        <section id="health-talks" className="py-16 lg:py-24 bg-white relative overflow-hidden">
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

                <div className="mt-12 text-center">
                    <Button asChild size="lg" className="h-12 px-8 rounded-full shadow-lg hover:shadow-xl transition-all font-semibold">
                        <Link href="/services/health-talks">
                            Explore All Health Talks <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
