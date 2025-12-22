import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function WeddingNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Monogram */}
          <Link href="/" className="text-5xl font-mono">
            JT
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#rsvp"
              className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity"
            >
              RSVP
            </Link>
            <Link
              href="/nossa-historia"
              className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity"
            >
              Nossa história
            </Link>
            <Link
              href="/cerimonia"
              className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity"
            >
              A CERIMÔNIA
            </Link>
            <Link
              href="/presentes"
              className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity"
            >
              PRESENTES
            </Link>
          </div>

          {/* Direction Link */}
          <Link
            href="/direction"
            className="flex items-center gap-2 text-sm tracking-widest uppercase hover:opacity-70 transition-opacity"
          >
            Direction
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
