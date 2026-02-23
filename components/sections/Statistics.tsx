"use client"

import { AnimatedCounter } from "@/components/ui/animated-counter"

const stats = [
    { label: "Total Corporate Tie-Ups", value: 500, suffix: "+" },
    { label: "Camps Conducted", value: 1500, suffix: "+" },
    { label: "Blood Tests Done", value: 50000, suffix: "+" },
    { label: "Healthcare Activities", value: 2000, suffix: "+" },
    { label: "Employees Impacted", value: 250000, suffix: "+" },
]

export function Statistics() {
    return (
        <section className="py-20 bg-slate-50 border-y border-slate-100">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="space-y-2">
                            <h3 className="text-4xl md:text-5xl font-extrabold text-primary">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            </h3>
                            <p className="text-sm md:text-base font-medium text-slate-600">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
