import { Layout } from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    { q: "Is ApplyFirst free?", a: "For early access we're offering free trials to early users. Final pricing will be announced soon." },
    { q: "How does ApplyFirst access my LinkedIn account?", a: "We use secure OAuth where available to read your feed and identify posts that match your preferences. If an API is not available, we'll request your permission and explain any alternative connection method." },
    { q: "Will ApplyFirst send messages on my behalf?", a: "ApplyFirst can draft and queue messages using templates you configure. You can choose to review and approve sends, or enable semi-automatic sending with limits to prevent over-messaging." },
    { q: "Will you spam recruiters for me?", a: "No. We enforce rate limits and provide safe templates. You're always in control of message content and send frequency." },
    { q: "How will I receive job alerts?", a: "Choose WhatsApp or Google Sheets as your delivery channel during setup. We send a daily digest with links and basic role details." },
    { q: "What data do you store and how is it protected?", a: "We store only the tokens and minimal metadata needed to run automations. All tokens are encrypted; you can revoke access at any time. We do not sell personal data." },
    { q: "Can I remove myself from the waitlist?", a: "Yes — reply to the welcome email or click the unsubscribe link in any email update." },
    { q: "I'm worried about LinkedIn policy — is this allowed?", a: "ApplyNiro is designed to respect platform terms and user consent. We recommend manual review for full automation until you're comfortable. We'll keep you informed about any policy-relevant changes." },
    { q: "When will ApplyFirst launch?", a: "We'll notify waitlist members first. Join now for priority access and the AI CV chatbot trial." },
    { q: "Who should use ApplyFirst?", a: "Fresh grads, early-career professionals, and anyone who wants to scale their application volume without losing personalization." },
  ];

  return (
    <Layout>
      <section className="pt-16 pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="text-4xl font-bold font-heading mb-4 text-center">Frequently Asked Questions</h1>
          <p className="text-white/60 text-center mb-12">Everything you need to know about ApplyFirst.</p>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 rounded-xl bg-[#151f2b] px-6">
                <AccordionTrigger className="text-left font-medium text-white hover:text-primary py-6 text-lg">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-white/70 leading-relaxed pb-6 text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
}
