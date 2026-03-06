import { LeadForm } from "@/components/forms/LeadForm"
import { Mail, MapPin, Phone } from "lucide-react"

export const metadata = {
    title: "Contact Us | ApexCare360",
    description: "Get in touch with ApexCare360 for comprehensive corporate health solutions, employee wellness programs, and health check-ups.",
}

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen pt-20 bg-slate-50">
            {/* Header Section */}
            <section className="py-12 md:py-16 bg-white border-b border-slate-200">
                <div className="container px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-slate-900">
                            Let's Build a <span className="text-primary">Healthier Workforce</span>
                        </h1>
                        <p className="text-xl text-slate-600">
                            Contact our corporate relations team to design a preventive healthcare roadmap tailored specifically to your organization.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Form Section */}
            <LeadForm />

            {/* Direct Contact Info */}

        </div>
    )
}
