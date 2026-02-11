import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-slate-50 py-20 px-4 md:px-6">
            <div className="container max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
                <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all" asChild>
                    <Link href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                    </Link>
                </Button>

                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
                <p className="text-slate-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                <div className="prose prose-slate max-w-none">
                    <p>
                        At ApexCare360, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                    </p>

                    <h3>1. Information We Collect</h3>
                    <p>We may collect the following types of information:</p>
                    <ul>
                        <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and designation when you fill out our contact forms.</li>
                        <li><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, and pages visited.</li>
                    </ul>

                    <h3>2. How We Use Your Information</h3>
                    <p>We use your information to:</p>
                    <ul>
                        <li>Provide and maintain our corporate healthcare services.</li>
                        <li>Communicate with you regarding your inquiries and quotes.</li>
                        <li>Improve our website and user experience.</li>
                        <li>Comply with legal obligations.</li>
                    </ul>

                    <h3>3. Data Security</h3>
                    <p>
                        We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
                    </p>

                    <h3>4. Sharing Your Information</h3>
                    <p>
                        We do not sell or rent your personal information to third parties. We may share data with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.
                    </p>

                    <h3>5. Cookies</h3>
                    <p>
                        Our website uses cookies to enhance your experience. You can choose to disable cookies through your browser settings, but this may affect some site functionality.
                    </p>

                    <h3>6. Contact Us</h3>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at:
                        <br />
                        <strong>Email:</strong> info@apexcare360.com
                        <br />
                        <strong>Phone:</strong> +91 88797 47612
                    </p>
                </div>
            </div>
        </main>
    );
}
