import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-slate-50 py-20 px-4 md:px-6">
            <div className="container max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
                <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all" asChild>
                    <Link href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                    </Link>
                </Button>

                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Terms of Service</h1>
                <p className="text-slate-500 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                <div className="prose prose-slate max-w-none">
                    <p>
                        Welcome to ApexCare360. By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions.
                    </p>

                    <h3>1. Acceptance of Terms</h3>
                    <p>
                        By accessing this website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                    </p>

                    <h3>2. Use License</h3>
                    <p>
                        Permission is granted to temporarily download one copy of the materials (information or software) on ApexCare360's website for personal, non-commercial transitory viewing only.
                    </p>

                    <h3>3. Disclaimer</h3>
                    <p>
                        The materials on ApexCare360's website are provided on an 'as is' basis. ApexCare360 makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>

                    <h3>4. Limitations</h3>
                    <p>
                        In no event shall ApexCare360 or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ApexCare360's website.
                    </p>

                    <h3>5. Accuracy of Materials</h3>
                    <p>
                        The materials appearing on ApexCare360's website could include technical, typographical, or photographic errors. ApexCare360 does not warrant that any of the materials on its website are accurate, complete, or current.
                    </p>

                    <h3>6. Modifications</h3>
                    <p>
                        ApexCare360 may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                    </p>

                    <h3>7. Governing Law</h3>
                    <p>
                        These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                    </p>
                </div>
            </div>
        </main>
    );
}
