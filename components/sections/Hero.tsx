"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Activity, Heart, Shield, Calendar, Users, TrendingUp } from "lucide-react"
import { HeroSlideshow } from "./HeroSlideshow"

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="container px-4 md:px-6 relative">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Text Content */}
                    <div className="flex flex-col items-start space-y-8 max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
                            Trusted by 500+ Corporates
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl text-slate-900 leading-[1.1]"
                        >
                            Redefining <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-500">
                                Corporate Wellness
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-slate-600 md:text-xl leading-relaxed"
                        >
                            Comprehensive healthcare solutions designed for the modern workforce. From on-site health camps to data-driven wellness programs, we ensure your team thrives.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                        >
                            <Button size="lg" className="h-14 px-8 rounded-full text-lg shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all bg-primary hover:bg-primary/90" asChild>
                                <Link href="#contact">
                                    Transform Your Workplace <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="h-14 px-8 rounded-full text-lg border-2 hover:bg-slate-50 text-slate-700" asChild>
                                <Link href="#services">
                                    Explore Services
                                </Link>
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex items-center gap-6 pt-4 text-sm font-medium text-slate-500"
                        >
                            <div className="flex items-center gap-2">
                                <Shield className="h-5 w-5 text-primary" />
                                <span>ISO Certified</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="h-5 w-5 text-primary" />
                                <span>Expert Doctors</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Activity className="h-5 w-5 text-primary" />
                                <span>AI-Driven Reports</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Visual Composition */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-auto w-full lg:h-[500px]"
                    >
                        <HeroSlideshow />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
