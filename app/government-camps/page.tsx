import { ShieldPlus, Users, MapPin, Building2 } from "lucide-react"

export const metadata = {
    title: "Government & NGO Health Camps | ApexCare360",
    description: "ApexCare360's initiatives in organizing large-scale public health camps in collaboration with government bodies and NGOs.",
}

export default function GovernmentCampsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 pt-16">
            <section className="bg-primary text-white py-20 px-4 md:px-6">
                <div className="container max-w-4xl text-center space-y-6">
                    <ShieldPlus className="h-16 w-16 mx-auto text-emerald-300 mb-4" />
                    <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight">
                        Public Health Initiatives
                    </h1>
                    <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                        Beyond corporate walls, ApexCare360 proudly partners with government municipalities and NGOs to conduct massive grassroots healthcare drives across India.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-6">
                <div className="container max-w-5xl">
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            <h2 className="text-3xl font-bold font-heading text-slate-900 border-b pb-4">Scaling Rural & Public Healthcare</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Executing blood tests and diagnostic screening for 1,000+ individuals requires intense logistical precision. We leverage our corporate camp expertise to assist government bodies in deploying rural health initiatives.
                            </p>

                            <h3 className="text-2xl font-bold font-heading text-slate-900 mt-8">Recent Public Projects</h3>
                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-6 items-start">
                                    <div className="bg-blue-50 text-blue-600 p-4 rounded-xl shrink-0">
                                        <Users className="h-8 w-8" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl text-slate-900 mb-2">Mega Blood Camp</h4>
                                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-3 font-medium">
                                            <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> Maharashtra</span>
                                            <span className="flex items-center gap-1"><Building2 className="h-4 w-4" /> Local Govt Tie-Up</span>
                                        </div>
                                        <p className="text-slate-600">Successfully handled phlebotomy logistics and lab testing for over 5,000 citizens in a single weekend.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900 text-white p-8 rounded-3xl h-fit sticky top-24">
                            <h3 className="text-2xl font-bold font-heading mb-4">Partner With Us</h3>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                Are you a government official or NGO looking for a reliable, NABL-certified partner to execute a subsidized mega health camp?
                            </p>
                            <a href="mailto:contact@apexcare360.com" className="bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-lg flex items-center justify-center w-full transition-colors">
                                Email Public Relations
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
