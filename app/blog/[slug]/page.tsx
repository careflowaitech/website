import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, User, Calendar } from "lucide-react"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const title = resolvedParams.slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    return {
        title: `${title} | Corporate Health Blog`,
        description: `Read our comprehensive guide on ${title} and its impact on corporate wellness.`,
    }
}

export default async function BlogPostDetail({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const title = resolvedParams.slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")

    return (
        <div className="flex flex-col min-h-screen bg-slate-50 pt-16">
            <article className="py-20 px-4 md:px-6">
                <div className="container max-w-3xl">
                    <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 font-medium transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
                    </Link>

                    <header className="mb-12 space-y-6 border-b pb-8 border-slate-200">
                        <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
                            {title}
                        </h1>
                        <div className="flex items-center gap-6 text-slate-500 font-medium">
                            <span className="flex items-center gap-2"><Calendar className="h-5 w-5" /> October 24, 2023</span>
                            <span className="flex items-center gap-2"><User className="h-5 w-5" /> ApexCare360 Medical Board</span>
                        </div>
                    </header>

                    <div className="prose prose-lg prose-slate max-w-none text-slate-600">
                        <p className="lead text-xl text-slate-800 mb-8 font-medium">
                            Implementing a structured corporate wellness program is critical for modern organizational success. This article dives deep into the metrics and medical logic behind why this approach scales beautifully.
                        </p>

                        <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">The Compliance Angle</h2>
                        <p className="mb-6">
                            For many industries, especially manufacturing, health checks aren't just a perk—they are legally mandated under strict government guidelines like the Factory Act. Failure to comply can result in severe financial penalties and operational halts.
                        </p>

                        <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">Financial Returns on Productivity</h2>
                        <p className="mb-6">
                            Studies consistently show that reactive healthcare models (treating employees after they fall sick) cost companies significantly more via insurance consumption and lost working days than proactive screening. Investing in annual blood tests catches severe conditions like early onset diabetes or cardiac strain before they result in a 30-day hospital leave.
                        </p>

                        <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl my-8">
                            <p className="italic text-slate-800 font-medium mb-0">"An ounce of prevention is worth a pound of cure, especially when scaling a workforce of 500+ professionals."</p>
                        </div>

                        <p>
                            We recommend HR leaders to closely analyze their current sick leave data. The correlations between specific departments and specific health strains (e.g. back pain in desk workers, respiratory issues in field staff) immediately highlight the exact diagnostic and awareness interventions required.
                        </p>
                    </div>
                </div>
            </article>
        </div>
    )
}
