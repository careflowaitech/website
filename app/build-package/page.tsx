import Link from "next/link"
import { ArrowLeft, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
    title: "Build Your Corporate Health Package | ApexCare360",
    description: "Select tests, talks, and vaccinations to build a custom corporate health package tailored for your workforce.",
}

export default function BuildPackagePage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 pt-16">
            <section className="bg-primary text-white py-16 px-4 md:px-6 text-center">
                <div className="container max-w-3xl">
                    <h1 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight mb-4">
                        Build Your Corporate Health Package
                    </h1>
                    <p className="text-lg text-primary-foreground/90">
                        Tailor a wellness program specific to your industry hazards, employee demographics, and corporate budget.
                    </p>
                </div>
            </section>

            <section className="py-16 px-4 md:px-6">
                <div className="container max-w-4xl">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12 overflow-hidden relative">
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-bl-full -z-10 opacity-50 pointer-events-none"></div>

                        <form className="space-y-12 relative z-10">
                            {/* Step 1 */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 border-b pb-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold text-sm">1</span>
                                    <h2 className="text-xl font-bold font-heading text-slate-900">Select Essential Tests</h2>
                                </div>
                                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                                    {["Complete Blood Count", "Lipid Profile", "Liver Function", "Kidney Function", "Diabetes Screening", "Thyroid Profile", "Vitamin Deficiencies", "ECG", "Chest X-Ray", "PFT", "Vision Test"].map((item) => (
                                        <label key={item} className="flex items-center space-x-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                                            <input type="checkbox" className="w-5 h-5 text-primary rounded border-slate-300 focus:ring-primary" />
                                            <span className="text-sm font-medium text-slate-700">{item}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 border-b pb-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold text-sm">2</span>
                                    <h2 className="text-xl font-bold font-heading text-slate-900">Add Health Talks & Sessions</h2>
                                </div>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {["Cardiac Health", "Cancer Awareness", "Stress Management", "Ergonomics / Posture", "Diet & Nutrition", "Yoga Session"].map((item) => (
                                        <label key={item} className="flex items-center space-x-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                                            <input type="checkbox" className="w-5 h-5 text-primary rounded border-slate-300 focus:ring-primary" />
                                            <span className="text-sm font-medium text-slate-700">{item}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 border-b pb-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold text-sm">3</span>
                                    <h2 className="text-xl font-bold font-heading text-slate-900">Add Vaccination Drives</h2>
                                </div>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {["Influenza", "Hepatitis B", "Tetanus", "Travel Vaccines"].map((item) => (
                                        <label key={item} className="flex items-center space-x-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                                            <input type="checkbox" className="w-5 h-5 text-primary rounded border-slate-300 focus:ring-primary" />
                                            <span className="text-sm font-medium text-slate-700">{item}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 border-b pb-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold text-sm">4</span>
                                    <h2 className="text-xl font-bold font-heading text-slate-900">Company & Contact Details</h2>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Company Name *</label>
                                        <input type="text" className="w-full h-12 rounded-lg border border-slate-200 px-4 focus:ring-2 focus:ring-primary focus:outline-none bg-slate-50" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Estimated Employee Count *</label>
                                        <select className="w-full h-12 rounded-lg border border-slate-200 px-4 focus:ring-2 focus:ring-primary focus:outline-none bg-slate-50">
                                            <option>10 - 50</option>
                                            <option>51 - 200</option>
                                            <option>201 - 500</option>
                                            <option>500+</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Contact Person Name *</label>
                                        <input type="text" className="w-full h-12 rounded-lg border border-slate-200 px-4 focus:ring-2 focus:ring-primary focus:outline-none bg-slate-50" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Official Email *</label>
                                        <input type="email" className="w-full h-12 rounded-lg border border-slate-200 px-4 focus:ring-2 focus:ring-primary focus:outline-none bg-slate-50" required />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm font-semibold text-slate-700">Custom Notes / Specific Requirements</label>
                                        <textarea className="w-full min-h-[120px] rounded-lg border border-slate-200 p-4 focus:ring-2 focus:ring-primary focus:outline-none bg-slate-50" placeholder="E.g., We have a factory environment requiring specific lung function checks..."></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-6">
                                <p className="text-sm text-slate-500">
                                    Our medical team will review these requirements and send a customized proposal within 24 hours.
                                </p>
                                <Button type="button" size="lg" className="w-full sm:w-auto h-14 px-8 rounded-lg shadow-xl hover:shadow-2xl transition-all">
                                    Submit Package Request <Send className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
