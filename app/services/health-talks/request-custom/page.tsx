import Link from "next/link"
import { ArrowLeft, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
    title: "Request Custom Health Talk | ApexCare360",
    description: "Request a custom-tailored medical or wellness talk for your corporate workforce.",
}

export default function RequestCustomTalkPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 pt-16">
            <section className="bg-primary text-white py-16 px-4 md:px-6">
                <div className="container max-w-3xl">
                    <Link href="/services/health-talks" className="inline-flex items-center text-primary-foreground/80 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Back to All Talks
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight mb-4">
                        Request Custom Health Talk
                    </h1>
                    <p className="text-lg text-primary-foreground/90">
                        Can't find the exact topic you need? Describe your requirements, and our medical board will design a custom session for your team.
                    </p>
                </div>
            </section>

            <section className="py-16 px-4 md:px-6">
                <div className="container max-w-2xl">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-10">
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Proposed Topic or Theme *</label>
                                <input type="text" className="w-full h-12 rounded-lg border border-slate-200 px-4 focus:ring-2 focus:ring-primary focus:outline-none bg-slate-50" placeholder="E.g., Women's Health & Ergonomics" required />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Target Audience description *</label>
                                <textarea className="w-full min-h-[100px] rounded-lg border border-slate-200 p-4 focus:ring-2 focus:ring-primary focus:outline-none bg-slate-50" placeholder="E.g., Software engineers facing prolonged screen time..." required></textarea>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Company Name *</label>
                                    <input type="text" className="w-full h-12 rounded-lg border border-slate-200 px-4 focus:ring-2 focus:ring-primary focus:outline-none bg-slate-50" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Expected Attendees *</label>
                                    <input type="number" className="w-full h-12 rounded-lg border border-slate-200 px-4 focus:ring-2 focus:ring-primary focus:outline-none bg-slate-50" placeholder="E.g., 50" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Preferred Format *</label>
                                <select className="w-full h-12 rounded-lg border border-slate-200 px-4 focus:ring-2 focus:ring-primary focus:outline-none bg-slate-50" required>
                                    <option>Onsite Session (In-Person)</option>
                                    <option>Webinar (Virtual)</option>
                                    <option>Hybrid (Both)</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Official Email *</label>
                                <input type="email" className="w-full h-12 rounded-lg border border-slate-200 px-4 focus:ring-2 focus:ring-primary focus:outline-none bg-slate-50" required />
                            </div>

                            <Button type="button" size="lg" className="w-full h-14 rounded-lg shadow-xl hover:shadow-2xl transition-all font-bold">
                                Submit Request <Send className="ml-2 h-5 w-5" />
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}
