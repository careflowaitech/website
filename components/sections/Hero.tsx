"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Activity, Heart, Shield, Calendar, Users, TrendingUp } from "lucide-react"

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
                        className="relative h-[500px] w-full hidden lg:block"
                    >
                        {/* Main Dashboard Card */}
                        <div className="absolute top-10 left-10 right-0 bottom-10 bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 z-10 overflow-hidden">
                            <div className="flex items-center justify-between mb-8">
                                <div>
                                    <div className="text-sm text-slate-400 uppercase font-semibold tracking-wider">Health Overview</div>
                                    <div className="text-2xl font-bold text-slate-900">Corporate Wellness Index</div>
                                </div>
                                <div className="p-2 bg-green-50 rounded-lg text-green-600 font-bold flex items-center gap-1">
                                    <TrendingUp className="h-4 w-4" /> +12%
                                </div>
                            </div>

                            {/* Mock Chart Area */}
                            <div className="w-full h-48 bg-gradient-to-b from-primary/5 to-transparent rounded-xl border border-primary/10 relative overflow-hidden mb-6 flex items-end justify-between px-4 pb-0">
                                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                    <div key={i} className="w-8 bg-primary/20 rounded-t-lg hover:bg-primary/40 transition-colors" style={{ height: `${h}%` }} />
                                ))}
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <div className="text-slate-500 text-xs mb-1">Active Employees</div>
                                    <div className="text-xl font-bold text-slate-900">1,240</div>
                                </div>
                                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <div className="text-slate-500 text-xs mb-1">Health Score</div>
                                    <div className="text-xl font-bold text-slate-900">8.4/10</div>
                                </div>
                                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                                    <div className="text-slate-500 text-xs mb-1">Camps Conducted</div>
                                    <div className="text-xl font-bold text-slate-900">24</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-20 w-48"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="bg-red-50 p-2 rounded-lg"><Heart className="h-5 w-5 text-red-500" /></div>
                                <div className="font-bold text-slate-900">Vitals Check</div>
                            </div>
                            <div className="text-xs text-slate-500">Scheduled for Today</div>
                            <div className="mt-2 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full bg-red-500 w-[70%]" />
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-20 -left-8 bg-white p-4 rounded-xl shadow-xl border border-slate-100 z-20 w-52"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-blue-50 p-2 rounded-lg"><Calendar className="h-5 w-5 text-blue-500" /></div>
                                <div>
                                    <div className="font-bold text-slate-900 text-sm">Upcoming Camp</div>
                                    <div className="text-xs text-slate-500">12th Oct, 10:00 AM</div>
                                </div>
                            </div>
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] text-slate-600 font-bold">
                                        U{i}
                                    </div>
                                ))}
                                <div className="h-8 w-8 rounded-full border-2 border-white bg-blue-500 flex items-center justify-center text-[10px] text-white font-bold">
                                    +15
                                </div>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    )
}
