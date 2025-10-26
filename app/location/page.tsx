'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import {
  ArrowRight,
  Car,
  GraduationCap,
  Utensils,
  Clock,
  MapPin,
  Building2,
  Train,
  Maximize2,
} from 'lucide-react';
import { RegisterInterestSection } from '@/components/register-interest-section';

const locationCategories = [
  {
    title: 'COMMUTE',
    icon: Train,
    items: [
      { name: 'Hougang MRT Station (NEL)', time: '1 min walk' },
      { name: 'Hougang Central Bus Interchange', time: '1 min walk' },
      { name: 'Cross Island Line (CRL) - Opens 2030', time: '1 min walk' },
      { name: 'Buangkok MRT Station (NEL)', time: '3 mins drive' },
      { name: 'Kovan MRT Station (NEL)', time: '2 mins drive' },
      { name: 'Central Expressway (CTE)', time: '5 mins drive' },
      { name: 'Kallang-Paya Lebar Expressway (KPE)', time: '8 mins drive' },
    ],
  },
  {
    title: 'SHOP',
    icon: Building2,
    items: [
      { name: 'Hougang Mall', time: '2 mins walk' },
      { name: 'The Midtown', time: '2 mins walk' },
      { name: 'Kang Kar Mall', time: '5 mins walk' },
      { name: 'Hougang Green Shopping Mall', time: '8 mins drive' },
      { name: 'Heartland Mall (Kovan)', time: '5 mins drive' },
      { name: 'Nex Shopping Mall', time: '10 mins drive' },
    ],
  },
  {
    title: 'DINE',
    icon: Utensils,
    items: [
      { name: 'Hougang Mall Food Court', time: '2 mins walk' },
      { name: 'Kang Kar Food Court', time: '5 mins walk' },
      { name: 'Tenderbest @ Punggol Park', time: '8 mins walk' },
      { name: 'Five & 2 Bistro @ Punggol Park', time: '8 mins walk' },
      { name: 'Kovan Food Centre', time: '5 mins drive' },
      { name: 'Upper Serangoon Road F&B', time: '8 mins drive' },
    ],
  },
  {
    title: 'STUDY',
    icon: GraduationCap,
    items: [
      { name: 'Holy Innocents\' Primary School', time: '5 mins walk' },
      { name: 'Montfort Junior School', time: '6 mins walk' },
      { name: 'CHIJ Our Lady of the Nativity', time: '8 mins walk' },
      { name: 'Holy Innocents\' High School', time: '8 mins walk' },
      { name: 'Montfort Secondary School', time: '8 mins walk' },
      { name: 'Xinghua Primary School', time: '8 mins drive' },
      { name: 'Hougang Primary School', time: '8 mins drive' },
      { name: 'Punggol Primary School', time: '10 mins drive' },
      { name: 'North Vista Primary School', time: '10 mins drive' },
      { name: 'Serangoon Junior College', time: '12 mins drive' },
    ],
  },
  {
    title: 'EXPLORE',
    icon: MapPin,
    items: [
      { name: 'Punggol Park', time: '8 mins walk' },
      { name: 'Punggol Park Therapeutic Garden', time: '8 mins walk' },
      { name: 'Hougang Sports Hall', time: '5 mins walk' },
      { name: 'Hougang Swimming Complex', time: '8 mins drive' },
      { name: 'Serangoon Park Connector', time: '10 mins walk' },
      { name: 'Punggol Waterway Park', time: '15 mins drive' },
    ],
  },
  {
    title: 'HEALTHCARE',
    icon: Building2,
    items: [
      { name: 'Hougang Polyclinic', time: '5 mins walk' },
      { name: 'GP Clinics @ Hougang Mall', time: '2 mins walk' },
      { name: 'Tan Tock Seng Hospital', time: '15 mins drive' },
      { name: 'Changi General Hospital', time: '18 mins drive' },
    ],
  },
];

export default function Location() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] sm:h-[60vh] flex items-center justify-center">
        <Image
          src="https://confluence-hg.b-cdn.net/Confluence_Location.png"
          alt="Hougang Central"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 mt-20 sm:mt-0">
          <h1 className="font-bold mb-6 text-4xl sm:text-5xl md:text-7xl">Prime Location</h1>
          <p className="text-lg md:text-xl lg:2xl mb-8 text-gray-200">
            Confluence @ Hougang sits directly above Hougang MRT Station, delivering 
            unparalleled connectivity to Northeast and beyond
          </p>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid xl:grid-cols-2 gap-8 xl:gap-12 items-center">
            <div className="order-2 xl:order-1 relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <div className="relative aspect-video w-full">
                <Image
                  src="https://confluence-hg.b-cdn.net/Confluence_Location_Map.png"
                  alt="Hougang Central Location Map"
                  fill
                  className="object-contain"
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
                    View Full Map
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-screen-xl w-[90vw]">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src="https://confluence-hg.b-cdn.net/Confluence_Location_Map.png"
                      alt="Hougang Central Location Map"
                      fill
                      className="object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="order-1 xl:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center xl:text-left">
                Explore the Location
              </h2>
              <div className="hidden xl:block space-y-6 text-lg">
                <p>
                  Confluence @ Hougang is uniquely positioned directly above Hougang MRT 
                  Station, creating Singapore's first fully-integrated residential development 
                  with the North-East Line, future Cross Island Line (2030), and Hougang Central 
                  Bus Interchange all at your doorstep.
                </p>
                <p>
                  Nestled in a mature and well-established neighborhood, this development 
                  offers immediate access to comprehensive amenities. Adjacent to Hougang Mall 
                  and surrounded by quality schools like Holy Innocents' and Montfort, 
                  residents enjoy the perfect balance of convenience and community.
                </p>
                <p>
                  Nature lovers will appreciate the proximity to Punggol Park's scenic 16-hectare 
                  landscape, featuring a 5-hectare lake, therapeutic gardens, and extensive park 
                  connectors. Combined with the area's strong educational institutions and healthcare 
                  facilities, Hougang Central provides everything needed for quality family living.
                </p>
              </div>
            </div>
            <div className="mt-8 order-3 block xl:hidden space-y-6 text-sm sm:text-base md:text-lg">
              <p>
                Confluence @ Hougang is uniquely positioned directly above Hougang MRT 
                Station, creating Singapore's first fully-integrated residential development 
                with the North-East Line, future Cross Island Line (2030), and Hougang Central 
                Bus Interchange all at your doorstep.
              </p>
              <p>
                Nestled in a mature and well-established neighborhood, this development 
                offers immediate access to comprehensive amenities. Adjacent to Hougang Mall 
                and surrounded by quality schools like Holy Innocents' and Montfort, 
                residents enjoy the perfect balance of convenience and community.
              </p>
              <p>
                Nature lovers will appreciate the proximity to Punggol Park's scenic 16-hectare 
                landscape, featuring a 5-hectare lake, therapeutic gardens, and extensive park 
                connectors. Combined with the area's strong educational institutions and healthcare 
                facilities, Hougang Central provides everything needed for quality family living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Location Categories */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Everything Within Reach
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Where seamless connectivity meets established neighborhood convenience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locationCategories.map((category) => (
              <Card key={category.title}>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <category.icon className="h-6 w-6" />
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Clock className="h-5 w-5 mt-0.5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.time}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Register Interest Section */}
      <RegisterInterestSection />
    </>
  );
}