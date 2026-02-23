import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Shield, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FounderHighlight() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Area */}
                    <div className="relative mx-auto lg:mx-0 max-w-md w-full">
                        {/* Decorative Background */}
                        <div className="absolute inset-0 -translate-x-6 translate-y-6 bg-primary/10 rounded-2xl"></div>
                        <div className="absolute inset-0 translate-x-4 -translate-y-4 border-2 border-primary/20 rounded-2xl"></div>

                        <div className="relative bg-white p-2 rounded-2xl shadow-xl">
                            <div className="aspect-[4/5] bg-slate-200 rounded-xl overflow-hidden relative flex items-center justify-center">
                                {/* Placeholder for Founder Image */}
                                <User className="h-32 w-32 text-slate-400" />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white text-center">
                                    <h4 className="font-bold text-xl">Ashwin Varma</h4>
                                    <p className="text-sm opacity-90">Founder, ApexCare360</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -right-8 top-12 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4 animate-bounce-slow">
                            <div className="bg-primary/10 p-3 rounded-full text-primary">
                                <Award className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-medium">Experience at</p>
                                <p className="text-sm font-bold text-slate-900">Dr. L. H. Hiranandani Hospital</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                                <Shield className="h-4 w-4" />
                                <span>Founder's Vision</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight text-slate-900 leading-tight">
                                From Hospital Experience to Corporate Healthcare Revolution
                            </h2>
                        </div>

                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                            <p>
                                After witnessing the reactive approach to healthcare at one of India’s leading hospitals, the vision for ApexCare360 was born. We shifted the focus from treating illnesses to preventing them altogether through structured corporate wellness programs.
                            </p>
                            <p>
                                We noticed a severe gap in occupational health compliance and employee well-being. Today, ApexCare360 provides a measurable, data-driven, and scalable healthcare model that empowers workforces across India.
                            </p>
                        </div>

                        <div>
                            <Button size="lg" className="h-14 px-8 rounded-full shadow-lg hover:shadow-xl transition-all" asChild>
                                <Link href="/founder">
                                    Read The Full Story <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
