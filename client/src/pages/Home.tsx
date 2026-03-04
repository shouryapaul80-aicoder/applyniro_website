import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Mail, Bell, PlayCircle, CheckCircle } from "lucide-react";
import heroIllustration from "@/assets/hero-image.png";
import dashboardMock from "@/assets/dashboard-mock.png";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="text-center lg:text-left z-10"
            >
              <motion.div variants={item} className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 hover:bg-white/10 transition-colors cursor-default">
                <span className="flex h-2 w-2 rounded-full bg-[#2C9797] animate-pulse"></span>
                <span className="text-sm font-medium text-[#2C9797]">Use AI the smart way </span>
              </motion.div>
              
              <motion.h1 variants={item} className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
                Apply to jobs <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2C9797] to-[#3A7EC1]">10x faster</span>
              </motion.h1>
              
              <motion.p variants={item} className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">Automate form applications, emails, and get daily new job  alerts  - so you spend minutes applying, not hours.</motion.p>
              
              <motion.div variants={item} className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <Link href="/waitlist">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-semibold h-14 px-8 rounded-full shadow-[0_0_30px_rgba(44,151,151,0.4)] transition-transform hover:scale-105">
                    Start for Free <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 rounded-full border-white/20 text-white hover:bg-white/5 hover:text-white">
                  <PlayCircle className="mr-2 h-5 w-5" /> See it in Action
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative z-0"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-[#2C9797]/20 to-[#3A7EC1]/20 blur-3xl rounded-full opacity-50"></div>
              <img 
                src={heroIllustration} 
                alt="Job Automation Workflow" 
                className="relative rounded-2xl shadow-2xl border border-white/10 hover:transform hover:scale-[1.02] transition-transform duration-500 w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* Benefits Strip */}
      <section className="bg-[#151f2b] py-12 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Apply 10× faster", desc: "Auto-fill LinkedIn & career page forms with your profile in seconds." },
              { icon: Mail, title: "Outreach that works", desc: "Auto-email job openings with tailored templates you approve." },
              { icon: Bell, title: "Never miss a role", desc: "Get daily job alerts to WhatsApp or Google Sheets from the companies you want." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#1E2B3A] border border-white/5 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">{feature.title}</h3>
                <p className="text-white/60">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Demo Preview */}
      <section className="py-24 bg-[#1E2B3A]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">A assistant that works 24x7 </h2>
            <p className="text-lg text-white/60">Watch how our agent finds the jobs you desire and share updates to your dashboards.</p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-white/10 group bg-black"
          >
            <video 
              src="/demo-video.mp4" 
              className="w-full h-auto" 
              controls 
              autoPlay 
              muted 
              loop
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </section>
      {/* Feature Highlights Grid */}
      <section className="py-24 bg-[#151f2b]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Everything you need to speed up applying</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Auto-fill applications", desc: "One click populates forms from your LinkedIn profile and saved resume." },
              { title: "Smart outreach", desc: "Send Emails or messages to recruiters & job posters with templates you control." },
              { title: "Job watchlist", desc: "Add companies to a watchlist and get daily openings to WhatsApp or Google Sheets." },
              { title: "Career-page scraping", desc: "We scan company career pages for new openings so you don't have to." },
              { title: "AI CV Chatbot", desc: "Get tailored CV edits and ATS-friendly rewrites to boost interview chances.", badge: "Early Access" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-[#1E2B3A] border border-white/5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  {item.badge && (
                    <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded-full">{item.badge}</span>
                  )}
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Social Proof */}
      <section className="py-20 bg-[#1E2B3A] border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6 text-primary">
              <span className="text-5xl font-serif">"</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">I saved 8 hours a week and triples the number of roles I applied to, ApplyNiro found roles from companies I'd missed.</h3>
            <div>
              <p className="font-bold text-white">Priyanka Sharma</p>
              <p className="text-white/50">Software Engineer</p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Band */}
      <section className="py-24 bg-gradient-to-r from-[#1E2B3A] to-[#151f2b]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="bg-gradient-to-br from-[#2C9797] to-[#3A7EC1] rounded-3xl p-12 md:p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white">Ready to apply faster?</h2>
              <p className="text-white/90 text-lg mb-8">
                Join 2,300+ early jobseekers already on the waitlist.
              </p>
              <Link href="/waitlist">
                <Button size="lg" className="bg-white text-[#1E2B3A] hover:bg-white/90 font-bold h-14 px-10 rounded-full text-lg shadow-lg hover:scale-105 transition-transform">Start for Free</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
