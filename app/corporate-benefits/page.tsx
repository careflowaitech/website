import Link from "next/link"
import { ArrowRight, TrendingUp, HandHeart, ShieldAlert, HeartHandshake, Briefcase, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
    title: "Why Corporate Healthcare Matters? | ApexCare360",
    description: "Discover the tangible benefits of investing in a structured corporate wellness program: from reduced insurance premiums to enhanced talent retention.",
}

export default function CorporateBenefitsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 pt-16">
            <section className="bg-primary text-white py-20 px-4 md:px-6 relative">
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
                <div className="container relative z-10 max-w-4xl text-center space-y-6">
                    <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight">
                        The True ROI of Corporate Wellness
                    </h1>
                    <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                        A structured healthcare policy is no longer just a perk—it's a critical strategy for risk mitigation, financial optimization, and employee retention.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-6">
                <div className="container max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

                        {/* Benefit 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all space-y-4">
                            <div className="bg-blue-50 text-blue-600 p-4 rounded-xl w-fit">
                                <TrendingUp className="h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-bold font-heading text-slate-900">Drastically Reduced Absenteeism</h3>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                By catching illnesses early through mandatory NABL diagnostics, you prevent extended sick leaves, ensuring your factory lines and corporate desks remain running at peak efficiency.
                            </p>
                        </div>

                        {/* Benefit 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all space-y-4">
                            <div className="bg-teal-50 text-teal-600 p-4 rounded-xl w-fit">
                                <ShieldAlert className="h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-bold font-heading text-slate-900">Lower Insurance Premiums</h3>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                Insurance providers offer lower corporate premiums when a workforce proves it's actively managed by a preventive healthcare program. ApexCare360 provides the auditable data you need to negotiate.
                            </p>
                        </div>

                        {/* Benefit 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all space-y-4">
                            <div className="bg-indigo-50 text-indigo-600 p-4 rounded-xl w-fit">
                                <HeartHandshake className="h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-bold font-heading text-slate-900">Enhanced Talent Retention</h3>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                Modern employees seek employers who genuinely care about their physical and mental well-being. A robust health program acts as a massive competitive advantage in hiring and retaining top talent.
                            </p>
                        </div>

                        {/* Benefit 4 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all space-y-4">
                            <div className="bg-emerald-50 text-emerald-600 p-4 rounded-xl w-fit">
                                <Briefcase className="h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-bold font-heading text-slate-900">100% Legal & OSHA Compliance</h3>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                Prevent heavy fines and legal liabilities. For hazardous environments like factories, having a documented health checkup record is legally mandated. We manage the end-to-end documentation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-slate-900 text-white py-16 px-4 md:px-6">
                <div className="container max-w-4xl text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold">Unlock your company's potential.</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Stop viewing healthcare as an expense. Start utilizing it as an investment.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="h-14 px-8 text-lg font-bold bg-primary hover:bg-primary/90 rounded-full" asChild>
                            <Link href="/free-audit">Book Free Health Audit</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-transparent text-white border-slate-600 hover:bg-slate-800 hover:text-white rounded-full" asChild>
                            <Link href="/build-package">Build A Custom Plan</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
