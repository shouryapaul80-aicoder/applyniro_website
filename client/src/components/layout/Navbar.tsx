import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo.png";

const navLinks = [
  { name: "How it works", href: "/how-it-works" },
  { name: "Features", href: "/features" },
  { name: "Integrations", href: "/integrations" },
  { name: "FAQ", href: "/faq" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#1E2B3A]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group cursor-pointer">
            <img src={logoImg} alt="ApplyNiro Logo" className="h-8 w-auto rounded-lg object-contain" />
            <span className="font-heading font-bold text-xl text-white tracking-tight group-hover:text-primary transition-colors">
              ApplyNiro
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === link.href
                    ? "text-primary"
                    : "text-white/80"
                )}
              >
                {link.name}
              </a>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/waitlist">
            <Button className="bg-primary hover:bg-primary/90 text-white font-medium rounded-full px-6 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(44,151,151,0.3)]">Sign up Now</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#1E2B3A] border-white/10 text-white">
            <div className="flex flex-col gap-8 mt-10">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    className="text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </Link>
              ))}
              <Link href="/waitlist">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium rounded-full mt-4">
                  Join Waitlist
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
