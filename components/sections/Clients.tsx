"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const clients = [
    { name: "LTIMindtree", logo: "/lti.png" },
    { name: "Balaji Telefilms", logo: "/balajitelefilms.png" },
    { name: "WNS", logo: "/wns.png" },
    { name: "Everest Spices", logo: "/everest.png" },
    { name: "Tech Mahindra", logo: "/techmahindra.png" },
]

const testimonials = [
    {
        quote: "ApexCare360 transformed our employee health initiatives. Their execution is flawless and the team is incredibly professional.",
        author: "Rakesh Sharma",
        role: "HR Director",
        company: "LTIMindtree",
    },
    {
        quote: "The best negotiated rates and premium service. Highly recommended for any corporate looking for hassle-free health camps.",
        author: "Priya Mehta",
        role: "Admin Manager",
        company: "WNS",
    },
]

export function Clients() {
    return (
        <section className="py-24 bg-white">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-slate-900">Trusted by Industry Leaders</h2>
                    <p className="mt-4 text-slate-600">We are proud to be the healthcare partner of choice for top organizations.</p>
                </div>

                {/* Logos Grid */}
                <div className="flex flex-wrap gap-12 items-center justify-center mb-20 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            className="relative h-16 w-32 md:h-20 md:w-40 flex items-center justify-center"
                            whileHover={{ scale: 1.05 }}
                        >
                            <img
                                src={client.logo}
                                alt={`${client.name} Logo`}
                                className="max-h-full max-w-full object-contain"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Testimonials
                <div className="max-w-5xl mx-auto">
                    <div className="grid gap-8 md:grid-cols-2">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <Card className="bg-slate-50 border-none shadow-md hover:shadow-lg transition-shadow h-full relative overflow-hidden group">
                                    <div className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/20 transition-colors">
                                        <Quote className="h-12 w-12" />
                                    </div>
                                    <CardContent className="pt-8 pb-8 px-8 flex flex-col h-full">
                                        <blockquote className="text-lg text-slate-700 italic mb-6 leading-relaxed flex-1">
                                            "{testimonial.quote}"
                                        </blockquote>
                                        <div className="flex items-center gap-4">
                                             <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-md">
                                                {testimonial.author[0]}
                                            </div>
                                            <div>
                                                <div className="font-semibold text-slate-900 text-lg">
                                                    {testimonial.author}
                                                </div>
                                                <div className="text-sm text-slate-500 font-medium">
                                                    {testimonial.role}, {testimonial.company}
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
                */}
            </div>
        </section>
    )
}
