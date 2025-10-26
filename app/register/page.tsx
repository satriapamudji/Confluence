import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RegisterInterest } from '@/components/register-interest';
import { Bell, Eye, Ticket, Tags } from 'lucide-react';

const benefits = [
  {
    title: 'Exclusive Updates',
    description:
      'Receive tailored development updates ahead of public announcements',
    icon: Bell,
  },
  {
    title: 'Priority Viewing',
    description:
      'Be among the first to experience our luxurious showflats and units',
    icon: Eye,
  },
  {
    title: 'Priority Balloting',
    description:
      'Get first priority in selecting your preferred unit during balloting',
    icon: Ticket,
  },
  {
    title: 'Preview Privileges',
    description: 'Access to special early bird discounts and promotions (TBA)',
    icon: Tags,
  },
];

export default function Register() {
  return (
    <>
      <section className="relative h-[80vh] sm:h-[60vh] flex items-center justify-center">
        <Image
          src="https://confluence-hg.b-cdn.net/Confluence_Register.png"
          alt="Luxury Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 mt-20 sm:mt-0">
          <h1 className="font-bold mb-6 text-4xl sm:text-5xl md:text-7xl">Register Your Interest</h1>
          <p className="text-lg md:text-xl lg:2xl mb-8 text-gray-200">
            Join our exclusive list for priority access and special privileges
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Register?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Be among the first to enjoy these special privileges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-900 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Register Now
              </h2>
              <p className="text-gray-300">
                Complete the form below to secure your exclusive privileges
              </p>
            </div>
            <Card className="bg-white/5 backdrop-blur-sm border-gray-800">
              <CardContent className="p-8">
                <RegisterInterest />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
