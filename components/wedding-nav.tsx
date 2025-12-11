import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function WeddingNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          {/* Logo/Monogram */}
          <Link href="/" className="text-5xl font-mono">
            JT
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/our-story"
              className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity"
            >
              Our Story
            </Link>
            <Link
              href="/photos"
              className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity"
            >
              Photos Album
            </Link>
            <Link
              href="/contact"
              className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity"
            >
              Contact
            </Link>
            <Link
              href="/menu"
              className="text-sm tracking-widest uppercase hover:opacity-70 transition-opacity"
            >
              Menu
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
