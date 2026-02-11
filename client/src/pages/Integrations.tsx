import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Linkedin, Mail, FileSpreadsheet, MessageCircle, Globe } from "lucide-react";

export default function Integrations() {
  const integrations = [
    {
      icon: Linkedin,
      title: "LinkedIn",
      type: "Read feed",
      desc: "Secure OAuth where available; we only read feed posts you allow.",
      color: "bg-[#0077b5]"
    },
    {
      icon: Mail,
      title: "Gmail",
      type: "Send outreach",
      desc: "Send outreach messages from your account (requires Gmail OAuth).",
      color: "bg-[#EA4335]"
    },
    {
      icon: FileSpreadsheet,
      title: "Google Sheets",
      type: "Delivery",
      desc: "Daily job lists delivered to the spreadsheet you choose.",
      color: "bg-[#34A853]"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Business",
      type: "Alerts",
      desc: "Opt in to receive job alerts on WhatsApp via a verified provider.",
      color: "bg-[#25D366]"
    },
    {
      icon: Globe,
      title: "Career Pages",
      type: "Scraping",
      desc: "We monitor career pages and push matches to your delivery channel.",
      color: "bg-[#F4B400]"
    }
  ];

  return (
    <Layout>
      <section className="pt-16 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Connect the tools you already use</h1>
            <p className="text-xl text-white/70">LinkedIn, Gmail, Google Sheets, and WhatsApp (via Business API) — all connected securely.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {integrations.map((item, i) => (
              <div key={i} className="bg-[#151f2b] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center text-white`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold font-heading text-lg">{item.title}</h3>
                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-white/10 text-white/70">{item.type}</span>
                  </div>
                </div>
                <p className="text-white/70 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#1E2B3A] border border-white/10 rounded-xl p-8 max-w-4xl mx-auto text-center">
            <p className="text-white/60 mb-8 italic">
              "We use OAuth where possible. For platforms without public APIs, we'll ask for clear permission and explain next steps at connection time."
            </p>
            <Link href="/waitlist">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-10 rounded-full">
                Join the Waitlist
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
