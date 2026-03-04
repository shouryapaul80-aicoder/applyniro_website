import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { CheckCircle2, ChevronRight, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  country: z.string().default("IN"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  experience: z.string().min(1, "Please enter years of experience"),
});

type FormValues = z.infer<typeof formSchema>;

export function WaitlistForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      country: "IN",
      phone: "",
      experience: "",
    },
  });

  function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  }

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-[#151f2b] border border-white/10 rounded-2xl p-8 text-center max-w-md mx-auto"
      >
        <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
        <p className="text-white/70 mb-6">
          Thanks for joining. We'll email you next steps and give you access to the AI CV chatbot during early rollout.
        </p>
        <div className="p-4 bg-white/5 rounded-lg border border-white/10 mb-6">
          <p className="text-sm text-white/60 mb-2">Share with friends for priority access:</p>
          <div className="flex items-center gap-2 bg-[#0d141c] p-2 rounded border border-white/10">
            <code className="text-xs text-primary flex-1 text-left truncate">
              https://applyfirst.com/ref/u892
            </code>
            <Button size="sm" variant="ghost" className="h-6 text-xs hover:text-white">Copy</Button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 bg-[#151f2b] p-6 md:p-8 rounded-2xl border border-white/10 shadow-xl">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Full Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Priya Sharma" className="bg-[#0d141c] border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Email Address</FormLabel>
              <FormControl>
                <Input placeholder="you@domain.com" type="email" className="bg-[#0d141c] border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-3 gap-4">
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormLabel className="text-white/80">Country</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-[#0d141c] border-white/10 text-white focus:ring-primary">
                      <SelectValue placeholder="Code" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-[#151f2b] border-white/10 text-white">
                    <SelectItem value="IN">🇮🇳 IN (+91)</SelectItem>
                    <SelectItem value="US">🇺🇸 US (+1)</SelectItem>
                    <SelectItem value="AE">🇦🇪 AE (+971)</SelectItem>
                    <SelectItem value="UK">🇬🇧 UK (+44)</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel className="text-white/80">Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="98765 43210" type="tel" className="bg-[#0d141c] border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80">Years of Experience</FormLabel>
              <FormControl>
                <Input placeholder="e.g. 2" type="number" min="0" max="50" className="bg-[#0d141c] border-white/10 text-white placeholder:text-white/30 focus-visible:ring-primary" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-6 text-lg rounded-xl shadow-[0_4px_14px_0_rgba(44,151,151,0.39)] hover:shadow-[0_6px_20px_rgba(44,151,151,0.23)] hover:-translate-y-0.5 transition-all duration-200"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Joining...
            </>
          ) : (
            <>
              Sign Up <ChevronRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
        
        <p className="text-xs text-white/40 text-center px-4">
          By joining the waitlist you agree to receive email & SMS updates from ApplyNiro. We'll never sell your data.
        </p>
      </form>
    </Form>
  );
}
