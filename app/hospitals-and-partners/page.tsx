import { Building, Stethoscope, FileText, CheckCircle2 } from "lucide-react"

export const metadata = {
    title: "Hospitals & Partner Labs Network | ApexCare360",
    description: "Explore our pan-India network of NABL-accredited diagnostic centers, specialty hospitals, and clinical partners.",
}

export default function HospitalNetworkPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 pt-16">
            <section className="bg-primary text-white py-20 px-4 md:px-6">
                <div className="container max-w-4xl text-center space-y-6">
                    <Building className="h-16 w-16 mx-auto text-blue-300 mb-4" />
                    <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight">
                        Our Medical Network
                    </h1>
                    <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                        We don't just act as aggregators. We partner strictly with tier-1, NABL-accredited clinical institutions to guarantee absolute diagnostic accuracy.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-6">
                <div className="container max-w-4xl">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                            <div className="bg-rose-50 p-4 rounded-full mb-6">
                                <Stethoscope className="h-8 w-8 text-rose-600" />
                            </div>
                            <h3 className="text-2xl font-bold font-heading text-slate-900 mb-3">Diagnostic Partners</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                50+ NABL accredited pathology labs across India ensuring strict quality control and standardized reagent testing for all employee blood samples.
                            </p>
                            <ul className="text-left w-full space-y-3 mt-auto border-t pt-6">
                                <li className="flex items-center gap-2 text-slate-700 font-medium">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-500" /> ISO 9001:2015 Certified
                                </li>
                                <li className="flex items-center gap-2 text-slate-700 font-medium">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-500" /> NABL Accredited
                                </li>
                                <li className="flex items-center gap-2 text-slate-700 font-medium">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-500" /> Automated Analyzers
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                            <div className="bg-indigo-50 p-4 rounded-full mb-6">
                                <Building className="h-8 w-8 text-indigo-600" />
                            </div>
                            <h3 className="text-2xl font-bold font-heading text-slate-900 mb-3">Hospital Tie-ups</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Direct integration with multi-specialty hospitals for advanced screenings like PFT, TMT, X-Rays, and tertiary care escalations.
                            </p>
                            <ul className="text-left w-full space-y-3 mt-auto border-t pt-6">
                                <li className="flex items-center gap-2 text-slate-700 font-medium">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-500" /> NABH Accredited
                                </li>
                                <li className="flex items-center gap-2 text-slate-700 font-medium">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-500" /> Cashless Insurance Desks
                                </li>
                                <li className="flex items-center gap-2 text-slate-700 font-medium">
                                    <CheckCircle2 className="h-5 w-5 text-emerald-500" /> Specialist Consultations
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
