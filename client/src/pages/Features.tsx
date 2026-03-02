import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { FileText, Send, Bell, Globe, Bot } from "lucide-react";

export default function Features() {
  return (
    <Layout>
      <section className="pt-16 pb-20 bg-[#1E2B3A]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Everything you need to speed up applying</h1>
            <p className="text-xl text-white/70">Built for fresh grads and early-career pros who want more interviews — faster.</p>
          </div>

          <div className="space-y-24">
            {/* Feature 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                 <div className="bg-[#151f2b] p-8 rounded-2xl border border-white/5 aspect-video flex items-center justify-center">
                    <FileText className="w-24 h-24 text-white/10" />
                 </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
                  <FileText className="w-4 h-4" /> Auto-fill Applications
                </div>
                <h2 className="text-3xl font-bold font-heading mb-4">Auto-fill forms from LinkedIn & career pages</h2>
                <ul className="space-y-4 mb-8">
                  {["Pre-fill common fields (name, email, education, links) from your profile.", "Works on feed posts and many career pages.", "Resume upload for extra fields."].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-medium text-white">Benefit: Apply in seconds, not minutes.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium mb-4">
                  <Send className="w-4 h-4" /> Smart Outreach
                </div>
                <h2 className="text-3xl font-bold font-heading mb-4">Emails job posters with templates you approve</h2>
                <ul className="space-y-4 mb-8">
                  {["Customisable message templates.", "Personalisation tokens (company, role, poster name).", "Rate limits to avoid spammy behavior."].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-medium text-white">Benefit: Reach more recruiters without copy-paste.</p>
              </div>
              <div className="bg-[#151f2b] p-8 rounded-2xl border border-white/5 aspect-video flex items-center justify-center">
                 <Send className="w-24 h-24 text-white/10" />
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                 <div className="bg-[#151f2b] p-8 rounded-2xl border border-white/5 aspect-video flex items-center justify-center">
                    <Bell className="w-24 h-24 text-white/10" />
                 </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
                  <Bell className="w-4 h-4" /> Job Watchlist & Alerts
                </div>
                <h2 className="text-3xl font-bold font-heading mb-4">Daily job alerts delivered where you want them</h2>
                <ul className="space-y-4 mb-8">
                  {["Track companies and roles.", "Get compiled lists to WhatsApp or Google Sheets.", "Filter by role, location, and keywords."].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-medium text-white">Benefit: Wake up to fresh openings for companies you care about.</p>
              </div>
            </div>

            {/* Feature 4: AI Chatbot (Special) */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#2C9797]/20 to-[#3A7EC1]/20 border border-white/10 p-8 md:p-12">
              <div className="absolute top-0 right-0 p-4">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">Use AI the smart way</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
                    <Bot className="w-4 h-4" /> AI CV Chatbot
                  </div>
                  <h2 className="font-heading mb-4 text-[25px] font-bold">Resume reviewer 
                  Helps you improve CV for every role</h2>
                   <ul className="space-y-4 mb-8">
                    {["Upload your CV and get line-by-line edits for ATS.", "Ask the chatbot to tailor your CV to job descriptions.", "Quick suggestions to improve keywords and achievements."].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-lg font-medium text-white mb-8">Benefit: Better resumes → more interview calls.</p>
                  <Link href="/waitlist">
                    <Button className="bg-white text-[#1E2B3A] hover:bg-white/90">Get Early Access</Button>
                  </Link>
                </div>
                <div className="flex items-center justify-center">
                   <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                      <Bot className="w-16 h-16 text-white" />
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="py-16 bg-[#151f2b] border-t border-white/5 text-center">
        <div className="container mx-auto px-4">
           <h2 className="text-2xl font-bold font-heading mb-4">Security first</h2>
           <p className="text-white/60 max-w-2xl mx-auto mb-8">We store tokens encrypted, use OAuth where possible, and never sell your data. You can disconnect integrations anytime.</p>
           <Link href="/waitlist">
              <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8">Join Waitlist</Button>
           </Link>
        </div>
      </section>
    </Layout>
  );
}
