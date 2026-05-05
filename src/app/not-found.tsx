import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "404 - Page Not Found | A1 Automotive",
  },
};

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-background px-4 py-32">
      <div className="container mx-auto max-w-7xl text-center">
        <div className="space-y-8">
          <h1 className="text-[10rem] md:text-[14rem] font-black leading-none text-foreground/5 select-none font-[family-name:var(--font-heading)] tracking-tighter uppercase">
            404
          </h1>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter uppercase font-[family-name:var(--font-heading)]">
              Page Not Found
            </h2>
            <p className="text-muted-foreground font-medium uppercase tracking-[0.2em] text-sm max-w-md mx-auto leading-relaxed">
              The page you are looking for does not exist or has been moved.
            </p>
          </div>
          <div className="pt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-md text-sm font-bold uppercase tracking-wider transition-colors duration-200"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
