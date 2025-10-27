import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ArrowRight, BedDouble, Maximize, Maximize2 } from "lucide-react";
import { UnitLayout } from "@/components/unit-layout";
import { RegisterInterestSection } from "@/components/register-interest-section";

export const metadata: Metadata = {
  title: "Residences | Residences at Confluence @ Hougang",
  description:
    "Explore our luxurious residential units designed for modern living.",
};

const unitTypes = [
  {
    id: "1br-deluxe",
    title: "1-Bedroom Deluxe",
    description: "Perfect for singles or couples",
    specs: {
      bedrooms: 1,
      size: "495",
      units: 160,
    },
    layout: "https://confluence-hg.b-cdn.net/Confluence_HG_1BR.png",
  },
  {
    id: "2br-exclusive",
    title: "2-Bedroom Exclusive",
    description: "Ideal for small families",
    specs: {
      bedrooms: 2,
      size: "721",
      units: 200,
    },
    layout: "https://confluence-hg.b-cdn.net/Confluence_HG_2BR.png",
  },
  {
    id: "3br-exclusive",
    title: "3-Bedroom Exclusive",
    description: "Spacious living for families",
    specs: {
      bedrooms: 3,
      size: "947",
      units: 240,
    },
    layout: "https://confluence-hg.b-cdn.net/Confluence_HG_3BR.png",
  },
  {
    id: "4br-premium",
    title: "4-Bedroom Premium",
    description: "Ultimate family living space",
    specs: {
      bedrooms: 4,
      size: "1076",
      units: 230,
    },
    layout: "https://confluence-hg.b-cdn.net/Confluence_HG_4BR.png",
  },
  {
    id: "penthouse",
    title: "Penthouse",
    description: "Exclusive luxury at its finest",
    specs: {
      bedrooms: 5,
      size: "2086",
      units: 5,
    },
    layout: "https://confluence-hg.b-cdn.net/Confluence_PH.png",
  },
];

export default function Residences() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] sm:h-[60vh] flex items-center justify-center">
        <Image
          src="https://confluence-hg.b-cdn.net/Confluence_Residences.png"
          alt="Luxury Residences"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 mt-20 sm:mt-0">
          <h1 className="font-bold mb-6 text-4xl sm:text-5xl md:text-7xl">
            Our Residences
          </h1>
          <p className="text-lg md:text-xl lg:2xl mb-8 text-gray-200">
          Where smart innovation meets natural serenity, creating homes that enhance your daily life
          </p>
        </div>
      </section>

      {/* Site Plan Section */}
      <section className="py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="gap-8 xl:gap-12 items-center grid xl:grid-cols-2">
            <div className="order-2 xl:order-1 relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <div className="relative aspect-video w-full">
                <Image
                  src="https://confluence-hg.b-cdn.net/site_map.png"
                  alt="Site Plan"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="secondary"
                    className="absolute bottom-4 right-4 shadow-lg"
                    size="sm"
                  >
                    <Maximize2 className="h-4 w-4 mr-2" />
                    View Full Plan
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-screen-xl w-[90vw]">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src="https://confluence-hg.b-cdn.net/site_map.png"
                      alt="Site Plan"
                      fill
                      className="object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="order-1 xl:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center xl:text-left">
                Site Plan
              </h2>
              <div className="hidden xl:block space-y-6 text-lg">
                <p>
                  Smart innovation and natural serenity converge seamlessly on approximately 
                  505,000 square feet at Hougang's heart. Thoughtfully designed for modern 
                  families and professionals seeking quality living with effortless 
                  connectivity, every detail creates a community where life simply flows 
                  better.
                </p>
                <p>
                  Experience a range of options to suit your needs with
                  approximately 835 units of various sizes. Whether you're a first-time buyer, 
                  growing family, or savvy investor, this development offers the right 
                  fit with unmatched connectivity and quality.
                </p>
              </div>
            </div>
            <div className="mt-8 order-3 block xl:hidden space-y-6 text-sm sm:text-base md:text-lg">
              <p>
                  Smart innovation and natural serenity converge seamlessly on approximately 
                  505,000 square feet at Hougang's heart. Thoughtfully designed for modern 
                  families and professionals seeking quality living with effortless 
                  connectivity, every detail creates a community where life simply flows 
                  better.
              </p>
              <p>
                  Experience a range of options to suit your needs with
                  approximately 835 units of various sizes. Whether you're a first-time buyer, 
                  growing family, or savvy investor, this development offers the right 
                  fit with unmatched connectivity and quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unit Types Section */}
      <section className="py-14 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Available Units
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
              Discover the ideal space that aligns with your lifestyle and
              aspirations
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {unitTypes.map((unit) => (
              <Card key={unit.id} className="overflow-hidden">
                <CardHeader>
                  <CardTitle>{unit.title}</CardTitle>
                  <CardDescription>{unit.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-2">
                      <BedDouble className="h-5 w-5" />
                      <span>{unit.specs.bedrooms} Bed</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Maximize className="h-5 w-5" />
                      <span>{unit.specs.size} sqft</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {unit.specs.units} units
                    </div>
                  </div>
                  <UnitLayout layout={unit.layout} title={unit.title} />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Elevated Amenities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
            Where smart innovation, resort-style facilities, and nature converge to create quality living above the ordinary
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Sky Garden Terraces",
                description:
                  "Lush sky gardens spanning multiple levels with mature trees and seating areas, bringing resort-style tranquility above the city",
                image: "https://confluence-hg.b-cdn.net/amenities_01.png",
              },
              {
                title: "Smart Home Integration",
                description:
                  "Integrated home automation systems providing seamless control of lighting, climate, and security for effortless modern living",
                image: "https://confluence-hg.b-cdn.net/amenities_02.png",
              },
              {
                title: "Urban Forest Fitness Trail",
                description:
                  "Nature-infused jogging and exercise paths winding through 40% site greenery, connecting wellness with Hougang's heritage landscape",
                image: "https://confluence-hg.b-cdn.net/amenities_03.png",
              },
              {
                title: "Eco-Friendly Pool",
                description:
                  "Resort-style pool featuring robotic cleaners and natural filtration systems, reducing chemical use while providing year-round family enjoyment",
                image: "https://confluence-hg.b-cdn.net/amenities_04.png",
              },
              {
                title: "Green Community Spaces",
                description:
                  "Lush landscaped areas blending nature and play spaces, creating safe environments for families to gather and children to explore",
                image: "https://confluence-hg.b-cdn.net/amenities_05.png",
              },
              {
                title: "Fitness & Wellness",
                description:
                  "State-of-the-art equipments that are able to generate energy through exercise to promote active and sustainable lifestyles",
                image: "https://confluence-hg.b-cdn.net/amenities_06.png",
              },
            ].map((amenity, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={amenity.image}
                    alt={amenity.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="mb-2">{amenity.title}</CardTitle>
                  <CardDescription>{amenity.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Register Interest Section */}
      <RegisterInterestSection/>
    </>
  );
}
