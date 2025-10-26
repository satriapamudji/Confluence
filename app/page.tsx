"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Home as HomeIcon, Train, TreePine, PlayCircle } from "lucide-react";
import { LocationPreview } from "@/components/location-preview";
import { VideoPlayerModal } from "@/components/video-player-modal";
import { RegisterInterestSection } from "@/components/register-interest-section";

export default function Home() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/website_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-bold mb-6 text-4xl sm:text-5xl md:text-7xl">
            Confluence @ Hougang
          </h1>
          <p className="text-lg md:text-xl lg:2xl mb-8 text-gray-200">
            Your sanctuary in the city coming soon to District 19
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant="lighthover"
              className="px-12 min-w-full md:min-w-0"
              onClick={() => setVideoModalOpen(true)}
            >
              Preview
              <PlayCircle className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-11 bg-white/10 min-w-full md:min-w-0"
              asChild
            >
              <Link href="/register">
                Register Interest
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="py-14 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-base sm:text-lg md:text-2xl">
                  Site
                </CardTitle>
                <CardDescription className="text-sm sm:text-base md:text-l font-semibold">
                  Hougang Central GLS
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-base sm:text-lg md:text-2xl">
                  Location
                </CardTitle>
                <CardDescription className="text-sm sm:text-base md:text-l font-semibold">
                  D19 - Hougang / Punggol / Sengkang
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-base sm:text-lg md:text-2xl">
                  Tenure
                </CardTitle>
                <CardDescription className="text-sm sm:text-base md:text-l font-semibold">
                  99 Years
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-base sm:text-lg md:text-2xl">
                  Units
                </CardTitle>
                <CardDescription className="text-sm sm:text-base md:text-l font-semibold">
                  Approx. 835
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-base sm:text-lg md:text-2xl">
                  Site Area
                </CardTitle>
                <CardDescription className="text-sm sm:text-base md:text-l font-semibold">
                  504,806 sqft
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-base sm:text-lg md:text-2xl">
                  TOP
                </CardTitle>
                <CardDescription className="text-sm sm:text-base md:text-l font-semibold">
                  TBA
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card className="bg-gray-900 text-white dark:bg-gray-800">
            <CardHeader className="text-center">
              <CardTitle className="text-base sm:text-lg md:text-2xl">
                Developer
              </CardTitle>
              <CardDescription className="text-sm sm:text-base md:text-l font-semibold text-gray-300">
                TBA
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-14 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Elevated Living, Naturally Integrated
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-xl">
              Where smart innovation meets natural serenity, 
              creating Hougang's first transit-integrated community that honors heritage while delivering modern quality of life.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader className="text-center">
                <HomeIcon className="h-8 w-8 mb-4 mx-auto" />
                <CardTitle className="text-base md:text-xl">
                  Smart Living, Simplified
                </CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Intelligent home systems and future-ready connectivity that serve you seamlessly, not complicate your life
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Train className="h-8 w-8 mb-4 mx-auto" />
                <CardTitle className="text-base md:text-xl">
                  Intelligent Living
                </CardTitle>
                <CardDescription className="text-sm md:text-base">
                  NEL + CRL + Bus Interchange convergence gives you 5-minute access and hours back each week for what matters
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <TreePine className="h-8 w-8 mb-4 mx-auto" />
                <CardTitle className="text-base md:text-xl">
                  Nature & Heritage, Elevated
                </CardTitle>
                <CardDescription className="text-sm md:text-base">
                  Resort-style living with 40% greenery honoring Hougang's roots while delivering quality you deserve
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gray-900 text-white hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
              asChild
            >
              <Link href="/residences">
                Explore Our Residences
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Location Preview Section */}
      <section className="py-14 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prime Location
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-4 text-base md:text-xl">
              Confluence @ Hougang delivers unparalleled connectivity to the Northeast and beyond.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <div className="relative aspect-video w-full">
                <Image
                  src="https://confluence-hg.b-cdn.net/Confluence_Location_Map.png"
                  alt="Confluence @ Hougang Residences Location Map"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <LocationPreview />
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gray-900 text-white hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
              asChild
            >
              <Link href="/location">
                Explore Full Location Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Register Interest Section */}
      <RegisterInterestSection/>

      {/* Video Player Modal */}
      <VideoPlayerModal
        open={videoModalOpen}
        onOpenChange={setVideoModalOpen}
        videoUrl="https://confluence-hg.b-cdn.net/Confluence_Video.mp4"
        title="Confluence @ Hougang Preview"
      />
    </>
  );
}
