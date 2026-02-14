"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { leadFormSchema, type LeadFormValues } from "@/lib/validations"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Loader2, ShieldCheck, Sparkles, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export function LeadForm() {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<LeadFormValues>({
        resolver: zodResolver(leadFormSchema),
        defaultValues: {
            fullName: "",
            companyName: "",
            designation: "",
            phone: "",
            email: "",
            serviceInterested: "",
            location: "",
        },
    })

    async function onSubmit(data: LeadFormValues) {
        setIsSubmitting(true)
        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                throw new Error("Failed to submit form")
            }

            router.push("/thank-you")
        } catch (error) {
            console.error(error)
            alert("Something went wrong. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-slate-50">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center justify-center">

                    {/* Left Side Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border shadow-sm text-sm font-medium text-primary">
                            <Sparkles className="h-4 w-4 fill-current" />
                            <span>Premium Corporate Wellness</span>
                        </div>

                        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-slate-900 leading-tight">
                            Transform Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                Workplace Health
                            </span>
                        </h2>

                        <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                            Join 500+ leading corporates who trust ApexCare360. We deliver seamless manufacturing of health events, ensuring 100% compliance and zero hassle.
                        </p>

                        <div className="grid gap-6">
                            {[
                                { icon: ShieldCheck, title: "100% Compliant", text: "Adhering to all statutory norms." },
                                { icon: TrendingUp, title: "Data-Driven Insights", text: "Comprehensive health analytics report." },
                                { icon: Check, title: "End-to-End Managed", text: "We handle logistics, doctors & reports." },
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 items-start p-4 rounded-xl bg-white/50 border border-slate-100 hover:bg-white hover:shadow-md transition-all">
                                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900">{item.title}</h4>
                                        <p className="text-sm text-slate-500">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Side Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 w-full max-w-lg"
                    >
                        <Card className="border-none shadow-2xl bg-white/80 backdrop-blur-xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
                            <CardHeader className="space-y-1">
                                <CardTitle className="text-2xl font-bold text-center">Request a Proposal</CardTitle>
                                <CardDescription className="text-center text-base">
                                    Get a customized quote within 24 hours.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                                        <FormField
                                            control={form.control}
                                            name="fullName"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-slate-700">Full Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="John Doe" className="bg-slate-50/50" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <FormField
                                                control={form.control}
                                                name="companyName"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-slate-700">Company Name</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Acme Inc." className="bg-slate-50/50" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="designation"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-slate-700">Designation</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="HR Head" className="bg-slate-50/50" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <FormField
                                                control={form.control}
                                                name="phone"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-slate-700">Phone Number</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="+91 88797 47612" className="bg-slate-50/50" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className="text-slate-700">Work Email</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="john@company.com" className="bg-slate-50/50" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <FormField
                                            control={form.control}
                                            name="serviceInterested"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-slate-700">Service Interested In</FormLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger className="bg-slate-50/50">
                                                                <SelectValue placeholder="Select a service" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="health-camps">Corporate Health Camps</SelectItem>
                                                            <SelectItem value="annual-checkups">Annual Health Checkups</SelectItem>
                                                            <SelectItem value="wellness-programs">Wellness Programs</SelectItem>
                                                            <SelectItem value="diagnostics">Diagnostic Services</SelectItem>
                                                            <SelectItem value="health-talks">Health Talks</SelectItem>
                                                            <SelectItem value="stress-management">How to Handle Stress at Work</SelectItem>
                                                            <SelectItem value="leadership">Leadership & Well-being</SelectItem>
                                                            <SelectItem value="fitness-yoga">Fitness & Yoga (Zumba/Yoga)</SelectItem>
                                                            <SelectItem value="preventive-screening">Preventive Health Screening</SelectItem>
                                                            <SelectItem value="other">Other</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="location"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="text-slate-700">Location / City</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="e.g. Mumbai, Bangalore" className="bg-slate-50/50" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <Button type="submit" className="w-full text-lg h-12 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-white font-semibold shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1" disabled={isSubmitting}>
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
                                                </>
                                            ) : (
                                                "Get Your Quote Now"
                                            )}
                                        </Button>

                                        <p className="text-xs text-center text-muted-foreground mt-4">
                                            By submitting, you agree to our privacy policy. Your data is safe with us.
                                        </p>
                                    </form>
                                </Form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
