"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

const images = [
    "/WhatsApp Image 2026-02-11 at 8.16.50 PM.jpeg",
    "/WhatsApp Image 2026-02-11 at 8.16.50 PM (1).jpeg",
    "/WhatsApp Image 2026-02-11 at 8.16.50 PM (2).jpeg",
    "/WhatsApp Image 2026-02-11 at 8.16.51 PM.jpeg",
    "/WhatsApp Image 2026-02-11 at 8.16.51 PM (1).jpeg",
    "/WhatsApp Image 2026-02-11 at 8.16.51 PM (2).jpeg",
    "/WhatsApp Image 2026-02-11 at 8.16.52 PM.jpeg",
    "/WhatsApp Image 2026-02-11 at 8.16.52 PM (1).jpeg",
    "/WhatsApp Image 2026-02-11 at 8.16.52 PM (2).jpeg",
    "/WhatsApp Image 2026-02-11 at 8.16.53 PM.jpeg",
    "/WhatsApp Image 2026-02-11 at 8.16.53 PM (1).jpeg",
    "/WhatsApp Image 2026-02-11 at 8.16.54 PM.jpeg",
    "/WhatsApp Image 2026-02-11 at 8.16.54 PM (1).jpeg",
    "/WhatsApp Image 2026-02-11 at 8.16.55 PM.jpeg",
    "/WhatsApp Image 2026-02-11 at 8.16.55 PM (1).jpeg",
    "/WhatsApp Image 2026-02-11 at 8.16.56 PM.jpeg",
]

export function ProofOfWork() {
    const [randomizedImages, setRandomizedImages] = useState<string[]>([])

    useEffect(() => {
        // Randomize images on mount
        setRandomizedImages([...images].sort(() => 0.5 - Math.random()))
    }, [])

    if (randomizedImages.length === 0) return null

    return (
        <section className="py-20 bg-slate-900 overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute -top-[50%] -left-[20%] w-[80%] h-[80%] bg-primary rounded-full blur-[150px]" />
                <div className="absolute -bottom-[50%] -right-[20%] w-[80%] h-[80%] bg-secondary rounded-full blur-[150px]" />
            </div>

            <div className="container px-4 md:px-6 mb-12 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                        Our Work in Action
                    </h2>
                    <p className="text-lg text-slate-300">
                        A glimpse into our on-ground execution and commitment to corporate wellness.
                    </p>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full flex overflow-hidden mask-fade-sides">
                <motion.div
                    className="flex gap-6 whitespace-nowrap"
                    animate={{ x: "-50%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 40 // Adjust speed
                    }}
                    style={{ width: "fit-content" }}
                >
                    {/* Duplicate list for seamless loop */}
                    {[...randomizedImages, ...randomizedImages].map((src, index) => (
                        <div
                            key={index}
                            className="relative w-[300px] h-[200px] flex-shrink-0 rounded-xl overflow-hidden border border-white/10 shadow-lg group hover:scale-[1.02] transition-transform duration-300"
                        >
                            <Image
                                src={src}
                                alt={`Proof of Work ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        </div>
                    ))}
                </motion.div>
            </div>

            <style jsx global>{`
        .mask-fade-sides {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
        </section>
    )
}
