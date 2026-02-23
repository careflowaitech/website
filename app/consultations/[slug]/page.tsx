import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Stethoscope, Video, FileText, SearchCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const CONSULTATIONS_DB: Record<string, any> = {
    "general-physician": {
        title: "General Physician",
        description: "First-line medical defense for everyday ailments, fever, infections, and general wellness queries.",
        detail: "Having direct access to a GP significantly reduces minor sick leaves. Employees can quickly verify if their symptoms require rest, antibiotics, or are safe for office return."
    },
    "specialist": {
        title: "Speciality Consultation",
        description: "Direct referrals to Orthopedics, Cardiology, and Dermatology based on corporate screening results.",
        detail: "Post-screening escalations require expert eyes. Our specialist network ensures that abnormal camp results are immediately addressed without the employee having to navigate hospital queues."
    },
    "oncology": {
        title: "Oncology Review",
        description: "Highly specialized second-opinions and preventive risk-factor analysis with leading oncologists.",
        detail: "For high-risk profiles or positive screening indicators, we provide immediate, sensitive, and expert oncology consults to guide the employee through the crucial early days of diagnosis."
    },
    "diabetes": {
        title: "Diabetology",
        description: "Ongoing management programs for pre-diabetic and diabetic employees to stabilize blood sugar.",
        detail: "Type 2 diabetes severely impacts daily corporate performance. Our endocrinologists provide continuous care plans, adjusting medication and lifestyle based on monthly metrics."
    },
    "nutrition": {
        title: "Clinical Nutrition",
        description: "Personalized diet plans targeting obesity, hypertension, and sedentary occupational hazards.",
        detail: "Nutrition consults directly combat the 'desk-job' metabolic syndrome. Dietitians craft realistic eating schedules factoring in long commutes, cafeteria food, and tight deadlines."
    },
    "mental-health": {
        title: "Mental Health & Psychiatry",
        description: "Confidential therapy and psychiatric support for workspace burnout, anxiety, and depression.",
        detail: "A critical pillar of modern ESG. Providing psychologists via telehealth ensures employees can seek help for cognitive load and stress without fear of workplace stigma."
    }
}

const DEFAULT_CONSULT = {
    title: "Corporate Consultation",
    description: "Empower your employees with direct access to specialized medical experts, ensuring early diagnosis and personalized health roadmaps.",
    detail: "This service is available through two primary modalities for ultimate corporate convenience. Employees can utilize a dedicated telehealth portal or attend in-person consultations during scheduled corporate health events."
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const consult = CONSULTATIONS_DB[resolvedParams.slug] || { ...DEFAULT_CONSULT, title: resolvedParams.slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") + " Consultation" }
    return {
        title: `${consult.title} Consultation | ApexCare360`,
        description: consult.description,
    }
}

export default async function ConsultationDetail({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const consult = CONSULTATIONS_DB[resolvedParams.slug] || { ...DEFAULT_CONSULT, title: resolvedParams.slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") + " Consultation" }

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 pt-16">
            <section className="bg-primary text-white py-20 px-4 md:px-6">
                <div className="container max-w-4xl">
                    <Link href="/consultations" className="inline-flex items-center text-primary-foreground/80 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Consultations
                    </Link>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-white/10 p-4 rounded-2xl">
                            <Stethoscope className="h-10 w-10 text-indigo-300" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-4">
                        {consult.title}
                    </h1>
                    <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-2xl">
                        {consult.description}
                    </p>
                </div>
            </section>

            <section className="py-16 px-4 md:px-6">
                <div className="container max-w-4xl grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold font-heading text-slate-900 mb-6 border-b pb-4">Consultation Access</h2>
                            <p className="text-slate-600 leading-relaxed text-lg mb-6">
                                {consult.detail}
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 mt-8">
                                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                                    <Video className="h-8 w-8 text-primary mb-3" />
                                    <h4 className="font-bold text-slate-900 mb-2">Teleconsultation</h4>
                                    <p className="text-sm text-slate-600">Secure, encrypted video sessions giving immediate access without breaking workflow productivity.</p>
                                </div>
                                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                                    <SearchCheck className="h-8 w-8 text-primary mb-3" />
                                    <h4 className="font-bold text-slate-900 mb-2">Onsite Camp Review</h4>
                                    <p className="text-sm text-slate-600">Doctors physically visit premises to analyze reports from blood packages and provide prescriptions.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg">
                            <h3 className="font-bold text-xl mb-2">Setup Consultation Access</h3>
                            <p className="text-slate-400 text-sm mb-6 pb-6 border-b border-slate-700">Integrate specialist access into your company's health policy today.</p>
                            <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-xl">
                                Request Proposal
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
