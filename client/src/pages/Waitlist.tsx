import { Layout } from "@/components/layout/Layout";
import { WaitlistForm } from "@/components/forms/WaitlistForm";

export default function Waitlist() {
  return (
    <Layout>
      <section className="pt-12 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Early Access Open
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
                Get early access to <span className="text-[#2c9696]">ApplyNiro</span>
              </h1>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">Sign up now to join niroclub, get free CV chatbot and many more niro assistants that help you use AI the smart way.</p>
              
              <div className="hidden lg:block space-y-6">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#151f2b] border border-white/10 flex items-center justify-center font-bold text-white">1</div>
                    <p className="text-white/80">Join the waitlist (takes 30s)</p>
                 </div>
                 <div className="h-8 w-0.5 bg-white/10 ml-6"></div>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#151f2b] border border-white/10 flex items-center justify-center font-bold text-white">2</div>
                    <p className="text-white/80">Get invite & AI chatbot access</p>
                 </div>
                 <div className="h-8 w-0.5 bg-white/10 ml-6"></div>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#151f2b] border border-white/10 flex items-center justify-center font-bold text-white">3</div>
                    <p className="text-white/80">Start automating applications</p>
                 </div>
              </div>
            </div>
            
            <div>
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
