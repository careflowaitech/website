import Link from "next/link"
import { ArrowLeft, CheckCircle2, Award, ClipboardCheck, BarChart4, TestTubes, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const PACKAGES_DB: Record<string, any> = {
    "basic": {
        title: "Basic Health Package",
        description: "Essential baseline screening suitable for young entry-level corporate employees.",
        tests: ["CBC", "ESR", "Random Blood Sugar", "Serum Creatinine", "SGPT", "Routine Urine"]
    },
    "executive": {
        title: "Executive Health Package",
        description: "Comprehensive metabolic and cardiac screening designed for middle-management.",
        tests: ["CBC", "Lipid Profile", "Liver Function Test", "Kidney Function Test", "Thyroid Profile (TSH)", "HbA1c", "Vitamin D & B12", "Routine Urine"]
    },
    "senior-management": {
        title: "Senior Management Package",
        description: "Exhaustive preventive diagnostics geared towards high-stress leaders above 45.",
        tests: ["Extensive Lipid Profile", "Cardiac Markers (hs-CRP)", "Full LFT & KFT", "Thyroid Panel", "HbA1c & Fasting Glucose", "Vitamin D, B12, Iron Studies", "Cancer Screening (PSA/CA-125)", "Detailed Urine Analysis"]
    },
    "factory-worker": {
        title: "Factory Worker Package (Form 32)",
        description: "Occupational-hazard focused screening built strictly to comply with the Factory Act.",
        tests: ["CBC", "Blood Grouping", "Sputum Test", "Lung Function Capacity", "Vision & Color Blindness", "Audiometry", "Lead/Heavy Metal Toxicity (if req)"]
    },
    "pre-employment": {
        title: "Pre-Employment Screening",
        description: "Thorough fitness certification to ensure new hires are medically cleared for their roles.",
        tests: ["CBC", "Urine Routine", "Blood Group", "Chest X-Ray", "Physical Vision Test", "Medical Officer Certification"]
    },
    "annual-preventive": {
        title: "Annual Preventive Care",
        description: "Standardized annual corporate mandate package bridging comprehensive care with scale economy.",
        tests: ["CBC", "Lipid Screening", "SGPT & SGOT", "Blood Sugar Fasting", "Thyroid Stimulating Hormone", "Urine Analysis"]
    }
}

const DEFAULT_PACKAGE = {
    title: "Corporate Health Package",
    description: "Comprehensive blood screening matrix designed specifically for corporate demographics to establish baseline workforce health metrics.",
    tests: ["CBC (Complete Blood Count)", "Lipid Profile", "Liver Function Test", "Kidney Function Test", "Thyroid Profile (TSH)", "HbA1c / Fasting Blood Sugar", "Routine Urine"]
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const pkg = PACKAGES_DB[resolvedParams.slug] || DEFAULT_PACKAGE;
    return {
        title: `${pkg.title} | ApexCare360`,
        description: `Comprehensive ${pkg.title} blood test package for corporate employees with NABL reporting.`,
    }
}

export default async function PackageDetail({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const pkg = PACKAGES_DB[resolvedParams.slug] || DEFAULT_PACKAGE;

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 pt-16">
            <section className="bg-primary text-white py-20 px-4 md:px-6">
                <div className="container max-w-4xl">
                    <Link href="/services/packages" className="inline-flex items-center text-primary-foreground/80 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Packages
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-4">
                        {pkg.title}
                    </h1>
                    <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-2xl">
                        {pkg.description}
                    </p>
                </div>
            </section>

            <section className="py-16 px-4 md:px-6">
                <div className="container max-w-4xl grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold font-heading text-slate-900 mb-6 border-b pb-4">Tests Included</h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {pkg.tests.map((t: string, i: number) => (
                                    <div key={i} className="flex flex-col gap-1 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                                        <div className="flex items-center gap-2">
                                            <TestTubes className="h-4 w-4 text-rose-500" />
                                            <span className="font-semibold text-slate-900 text-sm">{t}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-heading text-slate-900 mb-6 border-b pb-4">Workflow & Reporting</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="bg-rose-100 text-rose-700 h-10 w-10 flex shrink-0 items-center justify-center rounded-full font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Sample Collection Process</h4>
                                        <p className="text-slate-600">Onsite fasting or non-fasting phlebotomy camps set up at corporate premises early in the morning.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-rose-100 text-rose-700 h-10 w-10 flex shrink-0 items-center justify-center rounded-full font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Lab Processing</h4>
                                        <p className="text-slate-600">Blood samples are processed via NABL-accredited diagnostic partners maintaining absolute quality control.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="bg-rose-100 text-rose-700 h-10 w-10 flex shrink-0 items-center justify-center rounded-full font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Corporate Dashboard</h4>
                                        <p className="text-slate-600">HR receives anonymized analytical reports segmenting health risks into Red/Amber/Green cohorts.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 space-y-4">
                            <h3 className="font-bold text-slate-900 mb-2">Package Service Level</h3>

                            <div className="flex items-start gap-3">
                                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">Turnaround Time</p>
                                    <p className="text-xs text-slate-500">24-48 Hours</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">Accreditation</p>
                                    <p className="text-xs text-slate-500">100% NABL Tie-Ups</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg">
                            <h3 className="font-bold text-xl mb-2">Ready to screen?</h3>
                            <p className="text-slate-400 text-sm mb-6 pb-6 border-b border-slate-700">Get discounted corporate slabs based on headcount.</p>
                            <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-xl mb-3">
                                Request Proposal
                            </Button>
                            <Button variant="outline" className="w-full bg-transparent hover:bg-slate-800 text-slate-300 hover:text-white border-slate-700" asChild>
                                <Link href="/build-package">Customize Package</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
