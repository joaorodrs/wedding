import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background mt-12">
      <div className="container mx-auto px-6 pt-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="relative space-y-4 flex justify-between items-center md:flex-col md:justify-start md:align-start">
            <div className="z-10">
              <Link
                href="/"
                className="text-5xl font-serif bg-background leading-0 z-10"
              >
                J<span className="text-swamp-green text-4xl">&</span>T
              </Link>
            </div>
            <div className="absolute w-20 h-20 left-[50%]">
              <svg viewBox="0 0 120 120" className="w-full h-full">
                <circle
                  cx="60"
                  cy="60"
                  r="58"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-foreground/30"
                />
                <defs>
                  <path
                    id="footerCircle"
                    d="M 60, 60 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
                  />
                </defs>
                <text className="text-[8px] tracking-[0.3em] uppercase fill-current">
                  <textPath href="#footerCircle" startOffset="25%">
                    João e Thais
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-2xl font-serif text-foreground">Navegação</h4>
            <nav className="flex flex-col gap-4 text-sm tracking-widest uppercase text-muted-foreground">
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
              <Link
                href="/fotos"
                className="hover:opacity-70 transition-opacity"
              >
                FOTOS
              </Link>
              <Link
                href="/rsvp"
                className="hover:opacity-70 transition-opacity"
              >
                RSVP
              </Link>
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="text-2xl font-serif text-foreground">Contato</h4>
            <div className="space-y-3 text-foreground/70">
              <p className="text-sm">Para dúvidas sobre o evento:</p>
              <a
                href="mailto:joaopauloalencarrodrigues@gmail.com"
                className="text-sm hover:text-foreground transition-colors"
              >
                joaopauloalencarrodrigues@gmail.com
              </a>
              <a
                href="https://wa.me/5593991384250"
                className="text-sm hover:text-foreground transition-colors"
              >
                <p>+55 (93) 99138-4250</p>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p className="text-xs tracking-widest uppercase">
              20 de Junho, 2026
            </p>
            <p className="text-xs">
              © 2026 Thais e João. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
