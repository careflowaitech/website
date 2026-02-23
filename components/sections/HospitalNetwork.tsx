"use client"

import { motion } from "framer-motion"

export function HospitalNetwork() {
    // Array of mock hospital network placeholders (since logos would need uploading)
    const partners = [
        "Network Partner 1", "Diagnostic Lab 2", "Insurance Corp A",
        "Hospital Alliance B", "Diagnostic Center X", "Health Insure Y",
        "Global Care Hospitals", "Apex Diagnostics", "Trust Insurance"
    ]

    return (
        <section className="py-16 bg-white overflow-hidden border-b border-slate-100">
            <div className="container px-4 md:px-6 mb-8 text-center">
                <p className="text-sm font-semibold tracking-wider text-primary uppercase mb-2">
                    Our Trusted Network
                </p>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900">
                    Trusted By Major Hospitals, Labs & Insurers
                </h2>
            </div>

            <div className="relative w-full flex overflow-x-hidden">
                <motion.div
                    className="flex shrink-0 gap-12 sm:gap-16 items-center whitespace-nowrap"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30, // Adjust speed
                    }}
                >
                    {/* Double the array for seamless endless loop */}
                    {[...partners, ...partners].map((partner, index) => (
                        <div key={index} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all cursor-default">
                            <span className="text-2xl font-extrabold text-slate-400 tracking-tighter">
                                {partner}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* Fade edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent" />
            </div>
        </section>
    )
}
