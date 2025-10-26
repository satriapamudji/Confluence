import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface RegisterInterestSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  imageAlt?: string;
}

export function RegisterInterestSection({
  title = "Secure Your Place at Hougang's New Sanctuary",
  description = "Register your interest now to receive exclusive updates and priority information about Confluence @ Hougang",
  buttonText = "Register Your Interest",
  imageAlt = "Confluence @ Hougang",
}: RegisterInterestSectionProps) {
  return (
    <section className="relative py-24">
      <Image
        src="https://confluence-hg.b-cdn.net/Confluence_Footer.png"
        alt={imageAlt}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {title}
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto mb-8 text-base md:text-xl">
          {description}
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link href="/register">
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
