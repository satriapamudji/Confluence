"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";

interface UnitLayoutProps {
  layout: string;
  title: string;
}

export function UnitLayout({ layout, title }: UnitLayoutProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">
          See Unit Layout
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{title} Layout</DialogTitle>
          <DialogDescription>
            Floor plan and dimensions for {title}
          </DialogDescription>
        </DialogHeader>
        <div className="relative aspect-[4/3] mt-4">
          <Image
            src={layout}
            alt={`${title} Layout`}
            fill
            className="object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}