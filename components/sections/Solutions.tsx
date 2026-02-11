"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const solutions = [
    {
        title: "Employee Wellness Programs",
        description: "Holistic wellness plans including yoga, meditation, and nutrition.",
        features: ["Stress Management Workshops", "Ergonomic Assessments", "Diet & Nutrition Plans"],
        image: "from-blue-500 to-indigo-500",
    },
    {
        title: "Preventive Health Checkups",
        description: "Comprehensive annual health checkups for all employee tiers.",
        features: ["On-site Sample Collection", "Digital Reports", "Post-checkup Consultations"],
        image: "from-emerald-500 to-teal-500",
    },
    {
        title: "CSR Health Initiatives",
        description: "Impactful health camps for communities as part of CSR.",
        features: ["Rural Health Camps", "School Health Programs", "Women Hygiene Awareness"],
        image: "from-orange-500 to-amber-500",
    },
]

export function Solutions() {
    return (
        <section id="solutions" className="py-24 bg-slate-50">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">
                        Corporate Solutions
                    </h2>
                    <p className="mt-4 text-slate-600 md:text-xl">
                        Tailored packages to meet your organization's specific diverse needs.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Card className="flex flex-col border-none shadow-lg overflow-hidden h-full group">
                                <div className={`h-2 bg-gradient-to-r ${solution.image}`} />
                                <CardHeader>
                                    <CardTitle className="text-2xl font-bold">{solution.title}</CardTitle>
                                    <CardDescription className="text-base mt-2">
                                        {solution.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 flex flex-col">
                                    <ul className="space-y-4 mb-8 flex-1">
                                        {solution.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start text-slate-600">
                                                <CheckCircle2 className="h-5 w-5 text-secondary mr-3 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm font-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-auto">
                                        <Button variant="ghost" className="w-full justify-between hover:bg-slate-50 group-hover:text-primary transition-colors" asChild>
                                            <Link href="#contact">
                                                Learn More <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
