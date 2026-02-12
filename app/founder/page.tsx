"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowLeft, Quote, Linkedin, Twitter, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function FounderPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

                <div className="container px-4 md:px-6 relative">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Image Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl">
                                {/* Placeholder for Founder Image - replace with actual image */}
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-400">
                                    <span className="text-lg">Ashwin Verma's Photo</span>
                                </div>
                                {<Image
                                    src="/founder.jpeg"
                                    alt="Ashwin Varma"
                                    fill
                                    className="object-cover"
                                />}
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
                                <p className="text-sm font-medium text-slate-600">"Healthcare is not just a service, it's a commitment to humanity."</p>
                                <p className="text-xs text-primary font-bold mt-2">- Ashwin Varma</p>
                            </div>
                        </motion.div>

                        {/* Text Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:w-1/2 space-y-8"
                        >
                            <div>
                                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-slate-900 mb-2">Ashwin Varma</h1>
                                <p className="text-xl text-primary font-medium">Founder & CEO, ApexCare360</p>
                            </div>

                            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                                <p>
                                    With a visionary approach to corporate wellness, Ashwin Varma has redefined how organizations perceive employee health. His journey began with a simple yet profound realization: <span className="text-slate-900 font-semibold">a healthy workforce is the backbone of a thriving economy.</span>
                                </p>
                                <p>
                                    Under his leadership, ApexCare360 has grown from a fledgling idea into a trusted partner for over 500 corporates across India. Ashwin combines deep industry knowledge with a passion for operational excellence, ensuring that every health camp and diagnostic drive is executed with military precision.
                                </p>
                                <p>
                                    Ashwin believes in a "prevention-first" philosophy. He advocates for regular health screenings and proactive wellness programs, aiming to reduce the burden of lifestyle diseases in the corporate world.
                                </p>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <Button variant="outline" size="icon" className="rounded-full hover:text-primary hover:border-primary transition-colors">
                                    <Linkedin className="h-5 w-5" />
                                </Button>
                                <Button variant="outline" size="icon" className="rounded-full hover:text-primary hover:border-primary transition-colors">
                                    <Twitter className="h-5 w-5" />
                                </Button>
                                <Button variant="outline" size="icon" className="rounded-full hover:text-primary hover:border-primary transition-colors" asChild>
                                    <Link href="mailto:ashwinvarma15@gmail.com">
                                        <Mail className="h-5 w-5" />
                                    </Link>
                                </Button>
                            </div>

                            <div className="pt-8">
                                <Button variant="ghost" className="gap-2 -ml-4 text-slate-500 hover:text-slate-900" asChild>
                                    <Link href="/">
                                        <ArrowLeft className="h-4 w-4" /> Back to Home
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-20 bg-slate-50">
                <div className="container px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center space-y-8">
                        <Quote className="h-12 w-12 text-primary/20 mx-auto" />
                        <h2 className="text-3xl font-bold text-slate-900">A Message from the Founder</h2>
                        <p className="text-xl text-slate-600 italic leading-relaxed">
                            "At ApexCare360, we don't just conduct tests; we deliver peace of mind. My goal is to ensure that every organization we touch becomes a healthier, happier, and more productive place. We are committed to transparency, quality, and care in everything we do."
                        </p>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                    </div>
                </div>
            </section>
        </main>
    )
}
