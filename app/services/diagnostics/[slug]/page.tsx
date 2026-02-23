import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Activity, Users, Clock, CheckCircle2, Factory, Stethoscope } from "lucide-react"
import { Button } from "@/components/ui/button"

const DIAGNOSTICS_DB: Record<string, any> = {
    "ecg": {
        title: "ECG (Electrocardiogram)",
        description: "Vital cardiac screening to detect arrhythmias, heart murmurs, and past heart attacks.",
        whyNeedIt: "Heart disease is the leading cause of sudden workplace medical emergencies. Early ECG screenings allow for timely interventions.",
        equipment: "Portable 12-channel ECG machines ensuring precision analytics.",
        where: "Onsite corporate camp setup available",
        dashboard: "Digitized ECG strips immediately available on the employee portal.",
        icon: Activity,
    },
    "chest-xray": {
        title: "Chest X-Ray",
        description: "Essential pulmonary screening assessing lung health, detecting infections, and occupational lung diseases.",
        whyNeedIt: "Critical for employees in manufacturing or environments with dust exposure to ensure OSHA and Factory Act compliance.",
        equipment: "Digital portable X-Ray units with minimal radiation exposure.",
        where: "Onsite corporate camp or offsite lab tie-ups",
        dashboard: "High-resolution digital imagery accompanied by radiologist notes.",
        icon: Activity,
    },
    "mammography": {
        title: "Mammography",
        description: "Advanced breast cancer screening highly recommended for female employees over the age of 40.",
        whyNeedIt: "Early detection of breast cancer drastically increases survival rates and reduces long-term treatment absences.",
        equipment: "Specialized low-dose amplitude mammography machines.",
        where: "Offsite partner diagnostic centers",
        dashboard: "Confidential reports delivered securely to the patient's private dashboard.",
        icon: Users,
    },
    "pft": {
        title: "Pulmonary Function Test (PFT)",
        description: "Non-invasive test measuring lung volume, capacity, rates of flow, and gas exchange.",
        whyNeedIt: "Helps detect asthma, COPD, and workplace-induced respiratory issues, keeping your factory in compliance.",
        equipment: "Calibrated digital spirometers.",
        where: "Onsite corporate camp setup available",
        dashboard: "Real-time lung capacity visualizations mapped against healthy baselines.",
        icon: Activity,
    },
    "ophthalmology": {
        title: "Ophthalmology Check-up",
        description: "Comprehensive eye examination checking visual acuity, color blindness, and screen-induced strain.",
        whyNeedIt: "Computer Vision Syndrome drastically reduces IT productivity. Regular checks ensure proper prescription updates.",
        equipment: "Auto-refractometers and Snellen charts.",
        where: "Onsite corporate camp setup available",
        dashboard: "Digital prescriptions and specific occupational lens recommendations.",
        icon: Activity,
    },
    "dental": {
        title: "Dental Check-up",
        description: "Preventive oral screening to detect cavities, gum disease, and plaque buildup.",
        whyNeedIt: "Dental pain is a common cause of sudden brief absenteeism. Preventive screenings mitigate sudden required procedures.",
        equipment: "Portable dental diagnostic kits.",
        where: "Onsite corporate camp setup available",
        dashboard: "Detailed oral cavity reports with recommended interventions.",
        icon: Activity,
    },
    "bmi": {
        title: "BMI & Physical Assessment",
        description: "Baseline measurement of Body Mass Index, body fat percentage, and overall physical vitals.",
        whyNeedIt: "Serves as the foundation for broader wellness programs, helping HR understand the general physical fitness of the organization.",
        equipment: "Digital body composition analyzers.",
        where: "Onsite corporate camp setup available",
        dashboard: "Longitudinal tracking of BMI changes over multiple annual checkups.",
        icon: Users,
    },
    "blood-group": {
        title: "Blood Grouping & Typing",
        description: "Critical identification of ABO and Rh blood types for emergency preparedness.",
        whyNeedIt: "An essential hazard-management data point. In case of workplace accidents, knowing the employee's blood group saves critical minutes.",
        equipment: "Instant reagent kits for immediate results.",
        where: "Onsite corporate camp setup available",
        dashboard: "Permanent flagging on the employee's emergency medical profile.",
        icon: Activity,
    }
}

const DEFAULT_DIAGNOSTIC = {
    title: "Corporate Diagnostic Test",
    description: "Advanced diagnostic screening to detect critical health risks early among your workforce.",
    whyNeedIt: "Helps reduce long-term absenteeism by identifying potential medical issues before they become chronic conditions.",
    equipment: "State-of-the-art NABL-calibrated equipment",
    where: "Onsite corporate camp or offsite lab tie-ups",
    dashboard: "Integrated API pushing reports directly to employee HR dashboard securely.",
    icon: Activity,
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const diag = DIAGNOSTICS_DB[resolvedParams.slug] || { ...DEFAULT_DIAGNOSTIC, title: resolvedParams.slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") + " Test" }
    return {
        title: `${diag.title} | Corporate Diagnostics | ApexCare360`,
        description: `Learn how the ${diag.title} works and why it's structured for corporate employee wellness programs.`,
    }
}

export default async function DiagnosticDetail({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const diag = DIAGNOSTICS_DB[resolvedParams.slug] || { ...DEFAULT_DIAGNOSTIC, title: resolvedParams.slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ") + " Test" }
    const Icon = diag.icon

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 pt-16">
            <section className="bg-primary text-white py-20 px-4 md:px-6">
                <div className="container max-w-4xl">
                    <Link href="/services/diagnostics" className="inline-flex items-center text-primary-foreground/80 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Back to All Diagnostics
                    </Link>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="bg-white/10 p-4 rounded-2xl">
                            <Icon className="h-10 w-10 text-teal-300" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-4">
                        {diag.title}
                    </h1>
                    <p className="text-xl text-primary-foreground/90 leading-relaxed">
                        {diag.description}
                    </p>
                </div>
            </section>

            <section className="py-16 px-4 md:px-6">
                <div className="container max-w-4xl grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold font-heading text-slate-900 mb-6 border-b pb-4">What Is This Test?</h2>
                            <p className="text-slate-600 leading-relaxed text-lg mb-6">
                                The {diag.title.toLowerCase()} is deployed as part of our structured corporate wellness programs. We utilize {diag.equipment.toLowerCase()} to ensure 100% accurate results.
                            </p>
                            <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl">
                                <h4 className="font-semibold text-blue-900 mb-2">Why Corporates Need It</h4>
                                <p className="text-blue-800 text-sm leading-relaxed">{diag.whyNeedIt}</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading text-slate-900 mb-6 border-b pb-4">Service Modalities</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="border border-slate-200 p-4 rounded-xl flex gap-3 bg-white shadow-sm">
                                    <Factory className="h-6 w-6 text-teal-600 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-slate-900">Delivery</h4>
                                        <p className="text-sm text-slate-500">{diag.where}</p>
                                    </div>
                                </div>
                                <div className="border border-slate-200 p-4 rounded-xl flex gap-3 bg-white shadow-sm">
                                    <Stethoscope className="h-6 w-6 text-teal-600 shrink-0" />
                                    <div>
                                        <h4 className="font-semibold text-slate-900">Equipment</h4>
                                        <p className="text-sm text-slate-500">{diag.equipment}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                            <h3 className="font-bold text-slate-900 mb-4 tracking-tight">Reporting & Analytics</h3>
                            <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 mb-2">
                                <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                                <p className="text-sm text-slate-700">{diag.dashboard}</p>
                            </div>
                        </div>

                        <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg">
                            <h3 className="font-bold text-xl mb-2">Add To Package</h3>
                            <p className="text-slate-400 text-sm mb-6 pb-6 border-b border-slate-700">Include this test in your next corporate health drive.</p>
                            <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-xl">
                                Book Test
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
