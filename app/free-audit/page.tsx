import { ArrowRight, FileCheck2, BarChart3, TrendingDown, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
    title: "Free Corporate Health Audit | ApexCare360",
    description: "Book a comprehensive corporate health audit with our medical experts to ensure employee wellness and organizational compliance.",
}

export default function FreeAuditPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 pt-16">
            {/* Split layout: Text on Left, Form on Right */}
            <div className="container px-4 md:px-6 py-12 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Value Proposition */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                                <FileCheck2 className="h-4 w-4" />
                                <span>Limited Time Offer</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                                Stop Guessing About Your <span className="text-primary">Workforce Health.</span>
                            </h1>
                            <p className="text-xl text-slate-600 leading-relaxed">
                                Our medical experts will conduct a thorough risk analysis of your current health policies, identify compliance gaps, and provide a measurable roadmap for optimization.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold font-heading text-slate-900 border-b pb-2">What You Get in the Audit</h3>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="bg-teal-50 text-teal-600 p-3 rounded-xl shrink-0 h-fit">
                                        <BarChart3 className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Workforce Risk Analysis</h4>
                                        <p className="text-slate-600">Demographic breakdown mapping out potential chronic diseases based on industry hazards.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-rose-50 text-rose-600 p-3 rounded-xl shrink-0 h-fit">
                                        <TrendingDown className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Cost Optimization Review</h4>
                                        <p className="text-slate-600">Assessment of current healthcare spending and ways to lower corporate insurance premiums.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-indigo-50 text-indigo-600 p-3 rounded-xl shrink-0 h-fit">
                                        <Users className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg">Annual Wellness Roadmap</h4>
                                        <p className="text-slate-600">A structured 12-month calendar of tests, camps, and talks mapped to medical guidelines.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Lead Form */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100 lg:-mt-8 sticky top-24">
                        <div className="text-center mb-8 space-y-2">
                            <h3 className="text-3xl font-bold font-heading text-slate-900">Book Your Audit</h3>
                            <p className="text-slate-500">Takes 60 seconds. 100% Free & Confidential.</p>
                        </div>

                        <form className="space-y-5">
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">First Name</label>
                                    <input type="text" className="w-full h-12 rounded-xl border border-slate-200 px-4 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary focus:outline-none transition-all" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700">Last Name</label>
                                    <input type="text" className="w-full h-12 rounded-xl border border-slate-200 px-4 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary focus:outline-none transition-all" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Company Name</label>
                                <input type="text" className="w-full h-12 rounded-xl border border-slate-200 px-4 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary focus:outline-none transition-all" required />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Official Work Email</label>
                                <input type="email" className="w-full h-12 rounded-xl border border-slate-200 px-4 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary focus:outline-none transition-all" required />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Phone Number (Optional)</label>
                                <input type="tel" className="w-full h-12 rounded-xl border border-slate-200 px-4 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary focus:outline-none transition-all" />
                            </div>

                            <Button type="button" size="lg" className="w-full h-14 rounded-xl shadow-xl hover:shadow-2xl transition-all bg-primary hover:bg-primary/90 text-white font-bold text-lg mt-4">
                                Claim Free Audit <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>

                            <p className="text-xs text-center text-slate-400 mt-6">
                                By proceeding, you agree to our privacy policy and terms of service.
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}
