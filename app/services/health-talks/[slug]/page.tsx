import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Brain, Heart, Activity, Stethoscope, Users, Coffee, Droplet, Sun, Clock, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const TALKS_DB: Record<string, any> = {
    "cardiac-health": {
        title: "Cardiac Health Talk",
        description: "Comprehensive insights into preventing cardiovascular diseases in a high-stress corporate environment.",
        whoItIsFor: "Executives, high-stress roles, employees 35+",
        benefits: ["Early detection of risk factors", "Improved dietary choices", "Stress reduction techniques"],
        duration: "60 Minutes",
        icon: Heart,
    },
    "breast-cancer": {
        title: "Breast Cancer Awareness",
        description: "Vital information on early detection, self-examination, and preventive measures for female employees.",
        whoItIsFor: "Female Employees, HR Departments",
        benefits: ["Early detection education", "Understanding symptoms", "Providing support resources"],
        duration: "45 Minutes",
        icon: Activity,
    },
    "oncology-prevention": {
        title: "Oncology Prevention",
        description: "General cancer awareness focusing on lifestyle triggers, occupational hazards, and screening protocols.",
        whoItIsFor: "All Employees",
        benefits: ["Awareness of occupational hazards", "Lifestyle modification", "Importance of regular screenings"],
        duration: "60 Minutes",
        icon: Stethoscope,
    },
    "diabetes-awareness": {
        title: "Diabetes Awareness",
        description: "A deep dive into managing and preventing type 2 diabetes through diet, exercise, and stress control.",
        whoItIsFor: "Desk-bound Employees, Age 30+",
        benefits: ["Blood sugar management strategies", "Dietary adjustments", "Preventing complications"],
        duration: "60 Minutes",
        icon: Droplet,
    },
    "tb-awareness": {
        title: "TB Awareness",
        description: "Crucial occupational health talk for manufacturing and factory workers on Tuberculosis prevention.",
        whoItIsFor: "Factory Workers, Field Staff",
        benefits: ["Infection control", "Recognizing early symptoms", "Workplace hygiene"],
        duration: "45 Minutes",
        icon: Activity,
    },
    "stress-management": {
        title: "Stress Management",
        description: "Practical strategies for managing workspace anxiety, burnout, and maintaining mental equilibrium.",
        whoItIsFor: "All Corporate Employees",
        benefits: ["Reduced burnout rates", "Better emotional regulation", "Improved team dynamics"],
        duration: "60 Minutes",
        icon: Brain,
    },
    "leadership-mental-health": {
        title: "Leadership & Mental Health",
        description: "Specialized coaching for managers to spot mental health crises in their teams and lead with empathy.",
        whoItIsFor: "Managers, Team Leads, CXOs",
        benefits: ["Empathetic leadership", "Spotting employee distress", "Building psychological safety"],
        duration: "90 Minutes",
        icon: Users,
    },
    "ergonomics": {
        title: "Ergonomic & Physiotherapy",
        description: "Correcting posture, optimizing desk setups, and preventing musculoskeletal disorders.",
        whoItIsFor: "IT Professionals, Desk Workers",
        benefits: ["Decreased back/neck pain", "Better posture habits", "Increased daily comfort"],
        duration: "45 Minutes",
        icon: Activity,
    },
    "diet-nutrition": {
        title: "Diet & Nutrition",
        description: "Guidance on healthy eating habits, meal prep for busy professionals, and immune system boosting.",
        whoItIsFor: "All Employees",
        benefits: ["Higher energy levels", "Better immune function", "Weight management"],
        duration: "60 Minutes",
        icon: Coffee,
    },
    "zumba-yoga": {
        title: "Zumba & Yoga",
        description: "Interactive fitness sessions to introduce employees to fun, accessible physical activities.",
        whoItIsFor: "All Employees",
        benefits: ["Team bonding", "Physical fitness", "Endorphin release"],
        duration: "45-60 Minutes",
        icon: Sun,
    }
}

const DEFAULT_TALK = {
    title: "Corporate Health Talk",
    description: "An expert-led session addressing critical preventive healthcare topics tailored for modern professionals.",
    whoItIsFor: "All Corporate Employees",
    benefits: ["Awareness of occupational hazards", "Enhanced daily productivity", "Better work-life integration"],
    duration: "45-60 Minutes",
    icon: Brain,
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const talk = TALKS_DB[resolvedParams.slug] || { ...DEFAULT_TALK, title: resolvedParams.slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") + " Talk" }
    return {
        title: `${talk.title} | Corporate Health Talks | ApexCare360`,
        description: talk.description,
    }
}

export default async function HealthTalkDetail({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const talk = TALKS_DB[resolvedParams.slug] || { ...DEFAULT_TALK, title: resolvedParams.slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") + " Talk" }
    const Icon = talk.icon

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 pt-16">
            {/* Hero / Header */}
            <section className="bg-primary text-white py-20 px-4 md:px-6">
                <div className="container max-w-4xl">
                    <Link href="/services/health-talks" className="inline-flex items-center text-primary-foreground/80 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Back to All Talks
                    </Link>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-white/10 p-4 rounded-2xl">
                            <Icon className="h-10 w-10 text-teal-300" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-4">
                        {talk.title}
                    </h1>
                    <p className="text-xl text-primary-foreground/90 leading-relaxed">
                        {talk.description}
                    </p>
                </div>
            </section>

            {/* Content Details */}
            <section className="py-16 px-4 md:px-6">
                <div className="container max-w-4xl grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold font-heading text-slate-900 mb-6 border-b pb-4">Overview</h2>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                Preventing illness begins with awareness. This specialized session dives deeply into {talk.title.toLowerCase()}, highlighting the exact occupational and lifestyle triggers that affect today's workforce. Our medical experts will break down actionable steps your employees can take immediately.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading text-slate-900 mb-6 border-b pb-4">Corporate Benefits</h2>
                            <ul className="space-y-4">
                                {talk.benefits.map((benefit: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-6 w-6 text-emerald-500 shrink-0 mt-0.5" />
                                        <span className="text-lg text-slate-700">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                            <h3 className="font-bold text-slate-900 mb-4 tracking-tight">Session Details</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-slate-500 mb-1">Duration</p>
                                    <p className="font-semibold flex items-center gap-2 text-slate-900">
                                        <Clock className="h-4 w-4 text-primary" /> {talk.duration}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 mb-1">Target Audience</p>
                                    <p className="font-semibold flex items-center gap-2 text-slate-900">
                                        <Users className="h-4 w-4 text-primary" /> {talk.whoItIsFor}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 mb-1">Format</p>
                                    <p className="font-semibold flex items-center gap-2 text-slate-900">
                                        <Activity className="h-4 w-4 text-primary" /> Onsite or Webinar
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg">
                            <h3 className="font-bold text-xl mb-2">Book This Talk</h3>
                            <p className="text-slate-400 text-sm mb-6 pb-6 border-b border-slate-700">Get a customized proposal for your organization.</p>
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
