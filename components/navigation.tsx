"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, ArrowRight } from "lucide-react";

const routes = [
  {
    href: "/",
    label: "Home",
    active: (pathname: string) => pathname === "/",
  },
  {
    href: "/residences",
    label: "Residences",
    active: (pathname: string) => pathname === "/residences",
  },
  {
    href: "/location",
    label: "Location",
    active: (pathname: string) => pathname === "/location",
  },
];

export function Navigation() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled ? "bg-black/40 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-24 items-center justify-between">
          <div className="flex items-center gap-12">
            <Link
              href="/"
              className="flex items-center space-x-2"
            >
              <Image
                src="https://confluence-hg.b-cdn.net/Confluence_Logo.png"
                alt="Confluence @ Hougang"
                width={180}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-300",
                    route.active(pathname)
                      ? "text-white font-semibold"
                      : "text-gray-200 hover:text-white"
                  )}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              className={cn(
                "h-10 px-6 text-sm font-medium transition-colors duration-300",
                "bg-white text-gray-900 hover:bg-gray-100"
              )}
              asChild
            >
              <Link href="/register">
                Register Interest
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full sm:w-80 p-0 bg-black/90 border-0 [&>button]:text-white [&>button]:hover:bg-white/10"
              >
                <div className="flex flex-col h-full">
                  <div className="flex flex-col space-y-6 px-8 pt-16">
                    {routes.map((route) => (
                      <SheetClose asChild key={route.href}>
                        <Link
                          href={route.href}
                          className={cn(
                            "text-base font-medium transition-colors",
                            route.active(pathname)
                              ? "text-white font-semibold"
                              : "text-gray-200 hover:text-white"
                          )}
                        >
                          {route.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                  <div className="mt-auto p-8">
                    <SheetClose asChild>
                      <Button
                        className="w-full bg-white text-gray-900 hover:bg-gray-100"
                        asChild
                      >
                        <Link href="/register">
                          Register Interest
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
