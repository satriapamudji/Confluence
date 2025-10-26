"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock } from "lucide-react";

const locationGroups = [
{
  title: "COMMUTE",
  items: [
    { name: "Hougang MRT Station (NEL)", time: "1 min walk" },
    { name: "Hougang Central Bus Interchange", time: "1 min walk" },
    { name: "Central Expressway (CTE)", time: "5 mins drive" },
  ],
},
{
  title: "DINE & SHOP",
  items: [
    { name: "Hougang Mall", time: "2 mins walk" },
    { name: "The Midtown", time: "2 mins walk" },
    { name: "Kang Kar Mall", time: "5 mins walk" },
  ],
},
{
  title: "EDUCATION",
  items: [
    { name: "Holy Innocents' Primary School", time: "5 mins walk" },
    { name: "Montfort Junior School", time: "6 mins walk" },
    { name: "Holy Innocents' High School", time: "8 mins walk" },
  ],
}
];

export function LocationPreview() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {locationGroups.map((group) => (
        <Card key={group.title}>
          <CardContent className="pt-6">
            <h3 className="text-lg font-semibold mb-4">{group.title}</h3>
            <ul className="space-y-3">
              {group.items.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 mt-0.5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}