import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function ThankYouPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
            <div className="bg-green-50 p-6 rounded-full mb-6">
                <CheckCircle2 className="h-16 w-16 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-4 text-slate-900">Thank You!</h1>
            <p className="text-xl text-slate-600 max-w-lg mb-8">
                Your enquiry has been submitted successfully. We have sent a confirmation email to your inbox. Our team will contact you soon.
            </p>
            <Button asChild size="lg">
                <Link href="/">Back to Home</Link>
            </Button>
        </div>
    )
}
