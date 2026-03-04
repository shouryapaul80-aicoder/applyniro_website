import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { UserPlus, Zap, BarChart3, ArrowDown } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      icon: UserPlus,
      title: "Connect your accounts",
      desc: "Securely link your LinkedIn and Google account (for Sheets & Gmail). Choose which companies you want to follow. Tokens are encrypted and can be revoked anytime.",
      micro: "We only read your feed and write to your Sheets with your permission."
    },
    {
      id: 2,
      icon: Zap,
      title: "Automate applying & outreach",
      desc: "ApplyNiro scans posts in your LinkedIn feed and applies to jobs suitable to your profile. You can approve applications or enable semi-automatic mode to speed up workflows.",
      micro: "You always control the final send — full automation is optional."
    },
    {
      id: 3,
      icon: BarChart3,
      title: "Track & get alerts",
      desc: "Receive curated job lists for companies you follow via WhatsApp or Google Sheets every morning. See application logs and status in a simple dashboard.",
      micro: "Miss nothing — get a daily digest where you want it."
    }
  ];

  return (
    <Layout>
      <section className="pt-16 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">3 steps to automate your job hunt</h1>
            <p className="text-xl text-white/70">Connect once, automate safely, and let ApplyNiro do the heavy lifting.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-white/10 md:-ml-0.5"></div>

            <div className="space-y-24">
              {steps.map((step, index) => (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex flex-col md:flex-row gap-8 md:gap-16 items-start relative ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Icon Marker */}
                  <div className="absolute left-0 md:left-1/2 w-14 h-14 rounded-full bg-[#1E2B3A] border-4 border-[#2C9797] z-10 flex items-center justify-center text-white font-bold text-xl md:-ml-7">
                    {step.id}
                  </div>

                  {/* Content */}
                  <div className="pl-20 md:pl-0 md:w-1/2 md:text-right md:pr-12 md:mr-auto">
                    {index % 2 !== 0 ? (
                       <div className="hidden md:block"></div> /* Spacer for reverse layout alignment logic fix */
                    ) : (
                      <>
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 mb-4 text-[#2C9797]">
                          <step.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold font-heading mb-4">{step.title}</h3>
                        <p className="text-white/70 leading-relaxed mb-4">{step.desc}</p>
                        <p className="text-sm text-primary italic">"{step.micro}"</p>
                      </>
                    )}
                  </div>
                  
                  {/* Duplicate content for mobile/desktop split logic to keep simple */}
                  <div className={`pl-20 md:pl-0 md:w-1/2 md:text-left md:pl-12 ${index % 2 === 0 ? 'hidden md:block' : ''}`}>
                     {index % 2 === 0 ? (
                       <div></div>
                     ) : (
                        <>
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 mb-4 text-[#2C9797]">
                          <step.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold font-heading mb-4">{step.title}</h3>
                        <p className="text-white/70 leading-relaxed mb-4">{step.desc}</p>
                        <p className="text-sm text-primary italic">"{step.micro}"</p>
                      </>
                     )}
                  </div>

                  {/* Mobile content fallback */}
                  <div className="md:hidden pl-20">
                     {/* Already rendered in the first block for mobile, simplified logic above is slightly flawed for responsive mix. Let's fix. */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-24">
             <Link href="/waitlist">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold h-14 px-10 rounded-full text-lg shadow-[0_0_30px_rgba(44,151,151,0.3)]">
                  Start Automating Now
                </Button>
              </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
