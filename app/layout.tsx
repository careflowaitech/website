import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "ApexCare360 | Corporate Healthcare & Wellness Solutions",
  description: "Complete Corporate Healthcare & Wellness Solutions. Health camps, diagnostics, preventive care & medical talks at best market rates.",
  keywords: "Corporate healthcare services, Corporate health camps, Employee wellness programs, Corporate diagnostic services, Preventive healthcare for corporates",
  openGraph: {
    title: "ApexCare360 | Corporate Healthcare & Wellness Solutions",
    description: "Complete Corporate Healthcare & Wellness Solutions Under One Roof.",
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
      </body>
    </html>
  );
}
