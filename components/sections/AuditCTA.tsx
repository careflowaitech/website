import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AuditCTA() {
    return (
        <section className="py-24 bg-primary text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 mix-blend-overlay"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

            <div className="container relative z-10 px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight">
                                Get Your Free Corporate Health Audit
                            </h2>
                            <p className="text-lg text-primary-foreground/90 max-w-xl leading-relaxed">
                                Ready to optimize your employee wellness program? Let our medical experts evaluate your current setup and provide a free roadmap to reduce absenteeism and lower insurance premiums.
                            </p>
                        </div>

                        <ul className="space-y-4">
                            {[
                                "Comprehensive Employee Health Policy Review",
                                "Workforce Risk Analysis & Profiling",
                                "Tailored Diagnostic & Screening Package Suggestions",
                                "Corporate Healthcare Cost Optimization",
                                "Annual Preventive Wellness Roadmap"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-teal-400 shrink-0" />
                                    <span className="text-lg font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl text-slate-900 mx-auto w-full max-w-md">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold font-heading mb-2">Book Free Audit</h3>
                            <p className="text-slate-500 text-sm">Fill details for a complete health risk analysis.</p>
                        </div>
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold">Your Name</label>
                                <input type="text" className="w-full h-12 rounded-lg border border-slate-200 px-4 focus:ring-2 focus:ring-primary focus:outline-none" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold">Company Name</label>
                                <input type="text" className="w-full h-12 rounded-lg border border-slate-200 px-4 focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Acme Corp" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold">Work Email</label>
                                <input type="email" className="w-full h-12 rounded-lg border border-slate-200 px-4 focus:ring-2 focus:ring-primary focus:outline-none" placeholder="john@acmecorp.com" />
                            </div>
                            <Button type="button" size="lg" className="w-full h-14 rounded-lg text-base font-semibold shadow-xl hover:shadow-2xl transition-all">
                                Request Free Health Audit <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <p className="text-xs text-center text-slate-400 mt-4">We respect your privacy. No spam.</p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
