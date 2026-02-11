import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[60vh] w-full flex items-center justify-center">
        <div className="text-center px-4">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
              <AlertCircle className="h-10 w-10" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold font-heading text-white mb-4">Page Not Found</h1>
          <p className="text-xl text-white/60 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <Link href="/">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
