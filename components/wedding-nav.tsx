import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";

export function WeddingNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Monogram */}
          <Link href="/" className="text-5xl font-serif">
            J<span className="text-swamp-green text-4xl">&</span>T
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase ">
            <Link
              href="/nossa-historia"
              className="hover:opacity-70 transition-opacity"
            >
              Nossa história
            </Link>
            <Link
              href="/cerimonia"
              className="hover:opacity-70 transition-opacity"
            >
              A CERIMÔNIA
            </Link>
            <Link
              href="/presentes"
              className="hover:opacity-70 transition-opacity"
            >
              PRESENTES
            </Link>
            <Link href="/fotos" className="hover:opacity-70 transition-opacity">
              FOTOS
            </Link>
            <Link href="/rsvp" className="hover:opacity-70 transition-opacity">
              RSVP
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <SheetTrigger asChild>
                <button className="p-2 hover:bg-accent rounded-md">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-8 mt-8 px-6">
                  <div className="flex flex-col gap-4 font-serif text-2xl tracking-widest uppercase">
                    <SheetClose asChild>
                      <Link
                        href="/rsvp"
                        className="hover:opacity-70 transition-opacity"
                      >
                        RSVP
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/nossa-historia"
                        className="hover:opacity-70 transition-opacity"
                      >
                        Nossa história
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/cerimonia"
                        className="hover:opacity-70 transition-opacity"
                      >
                        A CERIMÔNIA
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="/presentes"
                        className="hover:opacity-70 transition-opacity"
                      >
                        PRESENTES
                      </Link>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
