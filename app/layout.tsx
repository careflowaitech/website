import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChatButton } from "@/components/ui/chat-button";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "ApexCare360 | India’s Trusted Corporate Preventive Healthcare Partner",
  description: "Structured Employee Health Programs That Reduce Sick Leaves, Improve Productivity & Ensure Compliance.",
  keywords: "Corporate healthcare services, Employee wellness programs, Corporate diagnostic services, Preventive healthcare for corporates, Corporate health packages",
  openGraph: {
    title: "ApexCare360 | India’s Trusted Corporate Preventive Healthcare Partner",
    description: "Structured Employee Health Programs That Reduce Sick Leaves, Improve Productivity & Ensure Compliance.",
    type: "website",
    locale: "en_IN",
    url: "https://apexcare360.com",
    siteName: "ApexCare360",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Structured Data: MedicalOrganization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              name: "ApexCare360",
              url: "https://apexcare360.com",
              logo: "https://apexcare360.com/logo.png",
              description: "India's Trusted Corporate Preventive Healthcare Partner",
              telephone: "+91-9876543210",
              address: {
                "@type": "PostalAddress",
                streetAddress: "D1, Unit 33, Bhumi World Industrial Park",
                addressLocality: "Thane",
                addressRegion: "Maharashtra",
                postalCode: "421302",
                addressCountry: "IN"
              },
              sameAs: [
                "https://www.linkedin.com/company/apexcare360/",
                "https://twitter.com/apexcare360"
              ]
            })
          }}
        />
        {/* Google Analytics GA4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className={cn(inter.variable, outfit.variable, "min-h-screen bg-background font-sans antialiased")}>
        <Navbar />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
        <ChatButton />
      </body>
    </html>
  );
}
