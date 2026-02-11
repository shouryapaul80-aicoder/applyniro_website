import { Link } from "wouter";
import { Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#151f2b] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/">
              <a className="flex items-center gap-2 mb-4 cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2C9797] to-[#3A7EC1] flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                <span className="font-heading font-bold text-xl text-white tracking-tight">
                  ApplyFirst
                </span>
              </a>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Automate form applications, emails, and get daily job alerts — so you spend minutes applying, not hours.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              <li><Link href="/how-it-works"><a className="text-white/60 hover:text-white text-sm transition-colors">How it works</a></Link></li>
              <li><Link href="/features"><a className="text-white/60 hover:text-white text-sm transition-colors">Features</a></Link></li>
              <li><Link href="/integrations"><a className="text-white/60 hover:text-white text-sm transition-colors">Integrations</a></Link></li>
              <li><Link href="/waitlist"><a className="text-white/60 hover:text-white text-sm transition-colors">Waitlist</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-3">
              <li><Link href="/faq"><a className="text-white/60 hover:text-white text-sm transition-colors">FAQ</a></Link></li>
              <li><Link href="/contact"><a className="text-white/60 hover:text-white text-sm transition-colors">Contact</a></Link></li>
              <li><a href="mailto:office@applyfirst.com" className="text-white/60 hover:text-white text-sm transition-colors">Email Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} ApplyFirst. All rights reserved.
          </p>
          <p className="text-white/40 text-xs flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Systems Operational
          </p>
        </div>
      </div>
    </footer>
  );
}
