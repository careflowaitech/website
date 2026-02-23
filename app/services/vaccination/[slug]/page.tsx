import Link from "next/link"
import { ArrowLeft, ShieldCheck, CheckCircle2, Shield, CalendarHeart, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

const VACCINATIONS_DB: Record<string, any> = {
    "influenza": {
        title: "Flu (Influenza) Vaccination",
        description: "The most critical annual vaccination to prevent rapid workplace transmission of seasonal flu strains.",
        whyNeedIt: "Flu outbreaks cost companies millions in sick days every winter. A single infectious employee can drop an entire department's productivity by 40%.",
        certification: "WHO-approved Quadrivalent vaccines"
    },
    "hepatitis-b": {
        title: "Hepatitis B Vaccination",
        description: "Crucial 3-dose regimen for employees in higher-risk or healthcare-adjacent environments.",
        whyNeedIt: "Highly recommended for corporate travelers, hospitality staff, and factory workers exposed to bodily fluids or hazardous waste materials.",
        certification: "Digital course-completion certificates provided"
    },
    "tetanus": {
        title: "Tetanus (TT) Shots",
        description: "Immediate risk-mitigation for blue-collar staff working with machinery, construction, or outdoors.",
        whyNeedIt: "Legal requirement under OSHA regulations for any industrial manufacturing unit to protect workers from fatal lockjaw infections.",
        certification: "OSHA-compliant legal documentation"
    },
    "travel": {
        title: "Corporate Travel Vaccines",
        description: "Customized vaccine regimens (Typhoid, Yellow Fever, Cholera) for employees traveling internationally.",
        whyNeedIt: "Ensures your global deployment teams remain healthy in high-risk zones and don't get quarantined at international borders.",
        certification: "International Certificate of Vaccination (ICV)"
    },
    "onsite": {
        title: "Mega Onsite Vaccination Camp",
        description: "Scale-optimized general vaccination drives tailored for entire corporate parks or multi-thousand employee factories.",
        whyNeedIt: "Maximizes economy of scale. We handle end-to-end logistics, cold chain, and bio-waste disposal right at your office floor.",
        certification: "Site-wide health clearance reports"
    }
}

const DEFAULT_VACCINATION = {
    title: "Corporate Vaccination",
    description: "Secure, compliant corporate vaccination drives conducted onsite by trained medical professionals.",
    whyNeedIt: "Providing vaccinations onsite directly cuts down on sick leaves resulting from preventable illnesses. It is an investment into workforce continuity.",
    certification: "Digital certificates provided"
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const vac = VACCINATIONS_DB[resolvedParams.slug] || { ...DEFAULT_VACCINATION, title: resolvedParams.slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") + " Vaccination" }
    return {
        title: `${vac.title} Drive | ApexCare360`,
        description: vac.description,
    }
}

export default async function VaccinationDetail({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const vac = VACCINATIONS_DB[resolvedParams.slug] || { ...DEFAULT_VACCINATION, title: resolvedParams.slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") + " Vaccination" }

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 pt-16">
            <section className="bg-primary text-white py-20 px-4 md:px-6">
                <div className="container max-w-4xl">
                    <Link href="/services/vaccination" className="inline-flex items-center text-primary-foreground/80 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Vaccinations
                    </Link>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-white/10 p-4 rounded-2xl">
                            <ShieldCheck className="h-10 w-10 text-emerald-300" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-4">
                        {vac.title}
                    </h1>
                    <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-2xl">
                        {vac.description}
                    </p>
                </div>
            </section>

            <section className="py-16 px-4 md:px-6">
                <div className="container max-w-4xl grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold font-heading text-slate-900 mb-6 border-b pb-4">Why Vaccination Is Important</h2>
                            <p className="text-slate-600 leading-relaxed text-lg mb-6">
                                {vac.whyNeedIt}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading text-slate-900 mb-6 border-b pb-4">Our Onsite Setup Process</h2>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="bg-emerald-100 text-emerald-700 h-8 w-8 flex shrink-0 items-center justify-center rounded-full font-bold text-sm">1</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Cold Chain Management</h4>
                                        <p className="text-sm text-slate-600">We guarantee pharmaceutical-grade cold chain logistics directly to the corporate floor.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-emerald-100 text-emerald-700 h-8 w-8 flex shrink-0 items-center justify-center rounded-full font-bold text-sm">2</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Certified Medical Staff</h4>
                                        <p className="text-sm text-slate-600">Injections are administered exclusively by registered nurses monitored by MBBS doctors.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-emerald-100 text-emerald-700 h-8 w-8 flex shrink-0 items-center justify-center rounded-full font-bold text-sm">3</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Post-Vaccination Observation</h4>
                                        <p className="text-sm text-slate-600">A mandatory 15-minute observation zone is set up to address extremely rare instances of allergic reaction setup.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 space-y-4">
                            <h3 className="font-bold text-slate-900 mb-2">Drive Benefits</h3>

                            <div className="flex items-start gap-3">
                                <Shield className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">Compliance Relevance</p>
                                    <p className="text-xs text-slate-500">Yes, fully documented</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Award className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">Certification</p>
                                    <p className="text-xs text-slate-500">{vac.certification}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg">
                            <h3 className="font-bold text-xl mb-2">Book a Drive</h3>
                            <p className="text-slate-400 text-sm mb-6 pb-6 border-b border-slate-700">Inquire about bulk corporate pricing tiers for this vaccine.</p>
                            <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-xl">
                                Request Quote
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
