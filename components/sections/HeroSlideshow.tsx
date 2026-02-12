"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

// Static imports for better optimization (blur placeholders, auto-sizing)
import hero1 from "@/assets/hero-images/hero-1.jpeg"
import hero2 from "@/assets/hero-images/hero-2.jpeg"
import hero3 from "@/assets/hero-images/hero-3.jpeg"
import hero4 from "@/assets/hero-images/hero-4.jpeg"
import hero5 from "@/assets/hero-images/hero-5.jpeg"
import hero6 from "@/assets/hero-images/hero-6.jpeg"
import hero7 from "@/assets/hero-images/hero-7.jpeg"
import hero8 from "@/assets/hero-images/hero-8.jpeg"
import hero9 from "@/assets/hero-images/hero-9.jpeg"

const images = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8, hero9]

export function HeroSlideshow() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 3000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="relative w-full aspect-[4/3] md:aspect-square lg:aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl border border-slate-100 bg-slate-100">
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
                        placeholder="blur"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

            {/* Overlay Gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
    )
}
