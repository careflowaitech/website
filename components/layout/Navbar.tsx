"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Menu, Phone, ArrowRight, Activity, Heart, Shield, Stethoscope } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Corporate Health Camps",
        href: "/#services",
        description: "On-site health checkups tailored for your workforce.",
    },
    {
        title: "Employee Wellness",
        href: "/#solutions",
        description: "Holistic wellness programs including mental health and fitness.",
    },
    {
        title: "Preventive Checkups",
        href: "/#services",
        description: "Annual health screenings to detect potential issues early.",
    },
    {
        title: "Health Talks",
        href: "/#health-talks",
        description: "Expert-led sessions on nutrition, stress management, and more.",
    },
]

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isOpen, setIsOpen] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300 border-b",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md border-slate-200 shadow-sm py-2"
                    : "bg-transparent border-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-14 items-center justify-between">

                    {/* Logo */}
                    <div className="flex-shrink-0 mr-8">
                        <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                            <img
                                src="/logo.png"
                                alt="ApexCare360 Logo"
                                width={280}
                                height={80}
                                className="h-20 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4 flex-1">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-transparent text-slate-600 hover:text-primary data-[state=open]:text-primary focus:bg-transparent hover:bg-transparent">Services</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white rounded-xl shadow-xl border border-slate-100">
                                            {components.map((component) => (
                                                <ListItem
                                                    key={component.title}
                                                    title={component.title}
                                                    href={component.href}
                                                >
                                                    {component.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/#why-choose" legacyBehavior passHref>
                                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-slate-600 hover:text-primary focus:bg-transparent hover:bg-transparent")}>
                                            Why Us
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/founder" legacyBehavior passHref>
                                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-slate-600 hover:text-primary focus:bg-transparent hover:bg-transparent")}>
                                            Founder
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/#contact" legacyBehavior passHref>
                                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-slate-600 hover:text-primary focus:bg-transparent hover:bg-transparent")}>
                                            Contact
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* Right Side Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <div className="hidden lg:flex items-center gap-2 text-sm font-medium text-slate-600">
                            <Phone className="h-4 w-4 text-primary" />
                            <span>+91 88797 47612</span>
                        </div>
                        <Button className="rounded-full bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all" asChild>
                            <Link href="#contact">Get Quote</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="flex md:hidden">
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="hover:bg-slate-100">
                                    <Menu className="h-6 w-6 text-slate-800" />
                                    <span className="sr-only">Open menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l-border/50 bg-white/95 backdrop-blur-xl p-0">
                                <div className="flex flex-col h-full">
                                    <SheetHeader className="p-6 text-left border-b border-slate-100">
                                        <div className="flex items-center gap-2 mb-2">
                                            <img
                                                src="/logo.png"
                                                alt="ApexCare360 Logo"
                                                width={200}
                                                height={56}
                                                className="h-14 w-auto object-contain"
                                            />
                                        </div>
                                        <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                                        <SheetDescription className="text-sm text-slate-500">
                                            Corporate Healthcare Solutions
                                        </SheetDescription>
                                    </SheetHeader>

                                    <div className="flex-1 overflow-y-auto py-6 px-4">
                                        <nav className="flex flex-col space-y-1">
                                            <Link
                                                href="/#services"
                                                onClick={() => setIsOpen(false)}
                                                className="flex items-center justify-between px-4 py-3 text-base font-medium text-slate-700 rounded-lg hover:bg-slate-50 hover:text-primary transition-colors"
                                            >
                                                Services
                                                <ArrowRight className="h-4 w-4 opacity-50" />
                                            </Link>
                                            <Link
                                                href="/#solutions"
                                                onClick={() => setIsOpen(false)}
                                                className="flex items-center justify-between px-4 py-3 text-base font-medium text-slate-700 rounded-lg hover:bg-slate-50 hover:text-primary transition-colors"
                                            >
                                                Solutions
                                                <ArrowRight className="h-4 w-4 opacity-50" />
                                            </Link>
                                            <Link
                                                href="/#why-choose"
                                                onClick={() => setIsOpen(false)}
                                                className="flex items-center justify-between px-4 py-3 text-base font-medium text-slate-700 rounded-lg hover:bg-slate-50 hover:text-primary transition-colors"
                                            >
                                                Why Choose Us
                                                <ArrowRight className="h-4 w-4 opacity-50" />
                                            </Link>
                                            <Link
                                                href="/founder"
                                                onClick={() => setIsOpen(false)}
                                                className="flex items-center justify-between px-4 py-3 text-base font-medium text-slate-700 rounded-lg hover:bg-slate-50 hover:text-primary transition-colors"
                                            >
                                                Founder's Note
                                                <ArrowRight className="h-4 w-4 opacity-50" />
                                            </Link>
                                            <Link
                                                href="/#contact"
                                                onClick={() => setIsOpen(false)}
                                                className="flex items-center justify-between px-4 py-3 text-base font-medium text-slate-700 rounded-lg hover:bg-slate-50 hover:text-primary transition-colors"
                                            >
                                                Contact
                                                <ArrowRight className="h-4 w-4 opacity-50" />
                                            </Link>
                                        </nav>

                                        <Separator className="my-6" />

                                        <div className="space-y-4 px-2">
                                            <div className="flex items-center gap-3 text-sm font-medium text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                                <Phone className="h-4 w-4 text-primary" />
                                                <span>+91 88797 47612</span>
                                            </div>

                                            <Button className="w-full h-11 rounded-lg bg-primary hover:bg-primary/90 text-white shadow-md text-base" asChild>
                                                <Link href="#contact" onClick={() => setIsOpen(false)}>
                                                    Get Custom Quote
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                </div>
            </div>
        </header>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-accent-foreground focus:bg-slate-100 focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none text-slate-900">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-slate-500">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
