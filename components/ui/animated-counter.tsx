"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface AnimatedCounterProps {
    value: number
    duration?: number
    suffix?: string
}

export function AnimatedCounter({ value, duration = 2, suffix = "" }: AnimatedCounterProps) {
    const [count, setCount] = useState(0)
    const ref = useRef<HTMLSpanElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    useEffect(() => {
        if (isInView) {
            let start = 0
            const increment = value / (duration * 60)
            const timer = setInterval(() => {
                start += increment
                if (start > value) {
                    setCount(value)
                    clearInterval(timer)
                } else {
                    setCount(Math.ceil(start))
                }
            }, 1000 / 60)
            return () => clearInterval(timer)
        }
    }, [value, duration, isInView])

    return (
        <span ref={ref}>
            {count.toLocaleString()}
            {suffix}
        </span>
    )
}
