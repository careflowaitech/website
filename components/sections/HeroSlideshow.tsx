"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const images = [
    "/hero-images/hero-1.jpeg",
    "/hero-images/hero-2.jpeg",
    "/hero-images/hero-3.jpeg",
    "/hero-images/hero-4.jpeg",
    "/hero-images/hero-5.jpeg",
    "/hero-images/hero-6.jpeg",
    "/hero-images/hero-7.jpeg",
    "/hero-images/hero-8.jpeg",
    "/hero-images/hero-9.jpeg",
]

export function HeroSlideshow() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 3000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl border border-slate-100">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={images[currentIndex]}
                        alt={`Hero Slide ${currentIndex + 1}`}
                        fill
                        className="object-cover"
                        priority={currentIndex === 0}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Pagination Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? "w-6 bg-white" : "w-1.5 bg-white/50"
                            }`}
                    />
                ))}
            </div>

            {/* Overlay Gradient for better text readability if needed, though mostly visual here */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
    )
}
