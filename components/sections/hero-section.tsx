import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-gradient-to-b from-primary/5 to-background">
      <div className="container px-4 mx-auto">
        {/* <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 bg-[url('/banner.jpg')]"> */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ">
          <Image className="mx-auto mb-10" src="/banner.jpg" alt="Pilgrim" width={1268} height={640} />
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Registrasi Pembekalan 5 Juli 2025
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Prodiakon/Prodiakones Gereja Santa Anna - Paroki Duren Sawit.
            </p>
            <p className="mt-6 text-lg text-muted-foreground">Live Another Day - Climb A Little Higher.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="#register">
                <Button size="lg" className="w-full sm:w-auto">
                  Registration
                </Button>
              </Link>
              <Link href="#about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl mt-10">
              Prinsip dan komitmen kami
            </h1>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-10 w-10 text-primary" />
                <span className="text-sm font-extrabold">DIAKONIA, PELAYANAN DENGAN HATI DAN KASIH KEPADA SESAMA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-10 w-10 text-primary" />
                <span className="text-sm font-extrabold">KOINONIA, PERSEKUTUAN DAN PERSAUDARAAN ANTAR UMAT</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-10 w-10 text-primary" />
                <span className="text-sm font-extrabold">LITURGIA, PENGUDUSAN DIRI DAN PENYEMBAHAN KEPADA TUHAN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
