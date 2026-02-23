import Link from "next/link"
import { ArrowRight, Calendar, User, BookOpen } from "lucide-react"

export const metadata = {
    title: "Corporate Health Blog | ApexCare360",
    description: "Read the latest insights, research, and tips on corporate wellness, occupational health, and compliance.",
}

const blogs = [
    {
        slug: "roi-of-corporate-health-checkups",
        title: "The True ROI of Annual Corporate Health Checkups",
        excerpt: "Why spending $50 on an employee's annual checkup can save the company $5,000 in lost productivity and insurance premiums.",
        date: "Oct 24, 2023",
        author: "Dr. Aditi Sharma",
        category: "Corporate Strategy"
    },
    {
        slug: "ergonomics-in-post-pandemic-workplace",
        title: "Ergonomics in the Post-Pandemic Workplace",
        excerpt: "With hybrid work models becoming the norm, occupational physiotherapists warn of a massive spike in spinal issues. Here's how HR can intervene.",
        date: "Nov 02, 2023",
        author: "ApexCare360 Medical Board",
        category: "Occupational Health"
    },
    {
        slug: "understanding-factory-act-form32",
        title: "Demystifying Form 32: Factory Act Compliance Explained",
        excerpt: "A complete HR guide to navigating the mandatory Form 32 health compliances for industrial manufacturing units across India.",
        date: "Nov 15, 2023",
        author: "Legal & Compliance Team",
        category: "Compliance"
    }
]

export default function BlogIndexPage() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 pt-16">
            <section className="bg-primary text-white py-20 px-4 md:px-6">
                <div className="container max-w-4xl text-center space-y-6">
                    <BookOpen className="h-16 w-16 mx-auto text-blue-300 mb-4" />
                    <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight">
                        Insights & Resources
                    </h1>
                    <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                        Expert perspectives on corporate wellness, medical compliance, and establishing a culture of proactive health in the workplace.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 md:px-6">
                <div className="container max-w-5xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                                <article className="bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all h-full flex flex-col overflow-hidden">
                                    <div className="h-48 bg-slate-200 w-full relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                        {/* Image Placeholder */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-teal-500/20 mix-blend-multiply"></div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-4 text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                                            <span>{post.category}</span>
                                        </div>
                                        <h3 className="text-xl font-bold font-heading text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-600 line-clamp-3 mb-6 flex-1">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100 text-sm text-slate-500">
                                            <div className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {post.date}</div>
                                            <div className="flex items-center gap-1.5"><User className="h-4 w-4" /> {post.author}</div>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
