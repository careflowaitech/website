import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

const footerLinks = {
    services: [
        { name: "Health Talks", href: "/services/health-talks" },
        { name: "Diagnostic Services", href: "/services/diagnostics" },
        { name: "Corporate Vaccination", href: "/services/vaccination" },
        { name: "Blood Test Packages", href: "/services/packages" },
        { name: "Consultation Services", href: "/consultations" },
    ],
    company: [
        { name: "About Us", href: "/#why-choose" },
        { name: "Founder's Note", href: "/founder" },
        { name: "Contact", href: "/#contact" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
        { name: "Corporate Benefits", href: "/corporate-benefits" },
        { name: "Compliance", href: "/compliance" },
    ],
}

export function Footer() {
    return (
        <footer className="bg-muted/50 border-t">
            <div className="container mx-auto px-4 py-12 md:py-16 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <img
                                src="/logo.png"
                                alt="ApexCare360 Logo"
                                width={320}
                                height={90}
                                className="h-24 w-auto object-contain mb-4"
                            />
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Complete Corporate Healthcare & Wellness Solutions Under One Roof.
                            Partnering with corporates to build healthier workplaces.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Services</h3>
                        <ul className="space-y-2">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold mb-4">Contact Us</h3>
                        <div className="flex items-start gap-3 text-sm text-muted-foreground">
                            <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                            <address className="not-italic">
                                KT3-711, Rising city<br />
                                Ghatkopar East<br />
                                Mumbai 400077
                            </address>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <Phone className="h-4 w-4 flex-shrink-0" />
                            <span>+91 88797 47612</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <Mail className="h-4 w-4 flex-shrink-0" />
                            <span>info@apexcare360.com</span>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} ApexCare360. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
