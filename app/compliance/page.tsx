import Link from "next/link"
import { ShieldCheck, FileKey, Stethoscope, Factory, FileSignature } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
    title: "Medical Compliance & Certifications | ApexCare360",
    description: "We handle 100% of corporate medical compliance. Learn about our strict adherence to NABL, OSHA, and Indian medical guidelines.",
}

export default function CompliancePage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 pt-16">
            <section className="bg-primary text-white py-20 px-4 md:px-6">
                <div className="container max-w-4xl text-center space-y-6">
                    <ShieldCheck className="h-16 w-16 mx-auto text-emerald-400 mb-6" />
                    <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight">
                        Compliance & Certifications
                    </h1>
                    <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                        Total corporate medical compliance handled securely. We ensure your healthcare obligations meet and exceed every local and national Indian standard.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-6">
                <div className="container max-w-4xl space-y-16">

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="bg-blue-50 p-6 rounded-2xl w-full md:w-1/3 shrink-0 text-center">
                            <FileKey className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                            <h3 className="font-bold font-heading text-xl text-slate-900">Data Privacy & Security</h3>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold font-heading text-slate-900">Anonymized Corporate Reporting</h3>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                Employee health data is strictly confidential. ApexCare360 provides HR and management with aggregated, anonymized dashboard analytics. We maintain strict compliance with Indian data privacy laws regarding sensitive medical records.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="bg-rose-50 p-6 rounded-2xl w-full md:w-1/3 shrink-0 text-center">
                            <Stethoscope className="h-12 w-12 mx-auto text-rose-600 mb-4" />
                            <h3 className="font-bold font-heading text-xl text-slate-900">NABL Lab Network</h3>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold font-heading text-slate-900">Accredited Diagnostic Partners</h3>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                We exclusive partner with NABL-accredited diagnostic laboratories. This ensures that every drop of blood analyzed meets the highest standards of international technical competence and quality assurance.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="bg-emerald-50 p-6 rounded-2xl w-full md:w-1/3 shrink-0 text-center">
                            <Factory className="h-12 w-12 mx-auto text-emerald-600 mb-4" />
                            <h3 className="font-bold font-heading text-xl text-slate-900">Occupational Health</h3>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold font-heading text-slate-900">Factory Act Compliance (Form 32)</h3>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                For manufacturing and industrial sectors, annual medical checkups are legally mandated. Our medical officers provide certified "Form 32" clearance certificates and detailed occupational hazard screening records to keep your operations legally sound.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
