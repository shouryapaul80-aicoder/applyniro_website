import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <section className="pt-16 pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold font-heading mb-4">Need help or want a demo?</h1>
            <p className="text-xl text-white/70">Drop us a message — we reply within 48 hours to waitlist members.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-[#151f2b] p-8 rounded-2xl border border-white/5 h-full">
                <h3 className="text-xl font-bold font-heading mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mt-1">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white mb-1">Support & Inquiries</p>
                      <a href="mailto:office@applyfirst.com" className="text-white/70 hover:text-primary transition-colors">office@applyfirst.com</a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 p-6 bg-[#1E2B3A] rounded-xl border border-white/5">
                   <p className="text-white/80 text-sm leading-relaxed">
                     "ApplyNiro has been a game changer for my job search. The support team is super responsive!"
                   </p>
                   <p className="text-white/40 text-xs mt-4">— Beta Tester</p>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6 bg-[#151f2b] p-8 rounded-2xl border border-white/5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Name</label>
                  <Input placeholder="Your name" className="bg-[#0d141c] border-white/10 text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Email</label>
                  <Input type="email" placeholder="you@company.com" className="bg-[#0d141c] border-white/10 text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Subject</label>
                  <Input placeholder="How can we help?" className="bg-[#0d141c] border-white/10 text-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Message</label>
                  <Textarea placeholder="Tell us more..." className="bg-[#0d141c] border-white/10 text-white min-h-[120px]" />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium h-12 rounded-xl">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
