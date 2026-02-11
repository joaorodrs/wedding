"use client";

import { WeddingNav } from "@/components/wedding-nav";
import { useEffect, useState } from "react";
import { Check, ChevronDown, Minus, Plus, Heart, Loader2 } from "lucide-react";
import useSWR from "swr";
import { useSearchParams } from "next/navigation";

interface Guest {
  id: string;
  name: string;
  confirmed: boolean;
  maxCompanion: number;
  confirmedCompanion: number;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function RSVPPage() {
  const searchParams = useSearchParams();
  const guestId = searchParams.get("c");
  const {
    data: guests = [],
    isLoading,
    error,
  } = useSWR<Guest[]>("/api/guests", fetcher);
  const [selectedGuestId, setSelectedGuestId] = useState("");
  const [companions, setCompanions] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedGuest = guests.find((g) => g.id === selectedGuestId);
  const selectedGuestName = selectedGuest?.name || "";

  const filteredGuests = guests.filter(
    (guest) =>
      guest.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      guest.confirmed === false,
  );

  const handleSubmit = async () => {
    if (!selectedGuest) return;
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/guests", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: selectedGuest.id,
          confirmed: true,
          companions,
        }),
      });
      if (!res.ok) throw new Error("Falha ao confirmar presença");
      setIsSubmitted(true);
    } catch {
      alert("Erro ao confirmar presença. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const setSelectedGuest = (guest: Guest) => {
    setSelectedGuestId(guest.id);
  };

  useEffect(() => {
    if (guests.find((g) => g.id === guestId)) {
      setSelectedGuestId(guestId!);
    }

    if (selectedGuest?.confirmed === true) {
      setIsSubmitted(true);
    }
  }, [guestId, guests, selectedGuest]);

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <WeddingNav />
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto min-h-[70vh] flex flex-col items-center justify-center text-center">
              {/* Animated check */}
              <div className="relative mb-12">
                <div className="w-32 h-32 rounded-full border-2 border-foreground flex items-center justify-center">
                  <Check className="w-16 h-16" strokeWidth={1} />
                </div>
                <div className="absolute -inset-4 rounded-full border border-foreground/10 animate-ping" />
              </div>

              <h1 className="font-serif text-6xl lg:text-8xl mb-6 tracking-tight leading-none">
                Obrigado,
                <br />
                <span className="italic font-light">
                  {selectedGuestName.split(" ")[0]}
                </span>
              </h1>

              <div className="w-16 h-px bg-foreground/30 mx-auto mb-8" />

              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg mb-4">
                Sua presença foi confirmada com sucesso.
                {(companions || selectedGuest?.confirmedCompanion || 0) > 0 && (
                  <span>
                    {" "}
                    Você e seus{" "}
                    <strong className="text-foreground">
                      {companions || selectedGuest?.confirmedCompanion}{" "}
                      acompanhante{companions > 1 ? "s" : ""}
                    </strong>{" "}
                    estão na lista.
                  </span>
                )}
              </p>

              <p className="text-muted-foreground mb-12">
                Nos vemos no dia{" "}
                <strong className="text-foreground">20 de Junho de 2026</strong>
                .
              </p>

              <div className="flex items-center gap-3 text-muted-foreground">
                <Heart className="w-4 h-4" strokeWidth={1} />
                <span className="text-sm tracking-[0.3em] uppercase">
                  J & T
                </span>
                <Heart className="w-4 h-4" strokeWidth={1} />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <WeddingNav />

      <main className="pt-24 pb-16">
        {/* Hero */}
        <div className="container mx-auto px-6 mb-24">
          <div className="max-w-6xl mx-auto min-h-[40vh] flex flex-col justify-end">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-end">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-px bg-foreground/40" />
                  <span className="text-xs tracking-[0.4em] uppercase text-muted-foreground">
                    Confirme até 20 de Maio
                  </span>
                </div>
                <h1 className="font-serif text-[11vw] lg:text-[8rem] leading-[0.85] tracking-tight">
                  Con
                  <i>firme</i>
                  <br />
                  sua
                  <br />
                  <span className="italic font-light">presença</span>
                </h1>
              </div>
              <div className="pb-4">
                <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-foreground/20 pl-6">
                  Sua presença é o melhor presente que poderíamos receber.
                  Preencha o formulário para confirmar que estará conosco nesse
                  dia especial.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Step 1 - Select Name */}
            <div className="mb-16">
              <div className="flex items-center gap-6 mb-10">
                <span className="font-serif text-8xl text-foreground/10 leading-none">
                  01
                </span>
                <div>
                  <h2 className="font-serif text-3xl tracking-tight mb-2">
                    Selecione seu nome
                  </h2>
                  <p className="text-muted-foreground">
                    Encontre seu nome na lista de convidados
                  </p>
                </div>
              </div>

              <div className="relative">
                <button
                  onClick={() =>
                    !isLoading && setIsDropdownOpen(!isDropdownOpen)
                  }
                  className="w-full flex items-center justify-between bg-transparent border-b-2 border-foreground/20 hover:border-foreground/40 transition-colors py-5 text-left focus:outline-none focus:border-foreground"
                  disabled={isLoading || !!guestId}
                >
                  <span
                    className={`font-serif text-2xl ${selectedGuest && !guestId ? "text-foreground" : "text-muted-foreground/50"}`}
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-3">
                        <Loader2
                          className="w-5 h-5 animate-spin"
                          strokeWidth={1.5}
                        />
                        Carregando convidados...
                      </span>
                    ) : error ? (
                      "Erro ao carregar convidados"
                    ) : (
                      selectedGuestName || "Seu nome completo..."
                    )}
                  </span>
                  {!isLoading && (
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                      strokeWidth={1.5}
                    />
                  )}
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 z-50 mt-2 bg-background border border-foreground/10 shadow-xl max-h-80 overflow-hidden">
                    {/* Search */}
                    <div className="sticky top-0 bg-background border-b border-foreground/10 p-4">
                      <input
                        type="text"
                        placeholder="Buscar nome..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-transparent text-base font-serif placeholder:text-muted-foreground/40 focus:outline-none"
                        autoFocus
                      />
                    </div>

                    {/* Guest list */}
                    <div className="overflow-y-auto max-h-64">
                      {filteredGuests.length === 0 ? (
                        <div className="p-6 text-center text-muted-foreground">
                          Nenhum convidado encontrado
                        </div>
                      ) : (
                        filteredGuests.map((guest) => (
                          <button
                            key={guest.id}
                            onClick={() => {
                              setSelectedGuest(guest);
                              setIsDropdownOpen(false);
                              setSearchQuery("");
                            }}
                            className={`w-full text-left px-6 py-4 transition-colors flex items-center justify-between group ${
                              selectedGuestId === guest.id
                                ? "bg-foreground text-background"
                                : "hover:bg-foreground/5"
                            }`}
                          >
                            <span className="font-serif text-lg">
                              {guest.name}
                            </span>
                            {selectedGuestId === guest.id && (
                              <Check className="w-4 h-4" strokeWidth={1.5} />
                            )}
                          </button>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Step 2 - Companions */}
            <div className="mb-16">
              <div className="flex items-center gap-6 mb-10">
                <span className="font-serif text-8xl text-foreground/10 leading-none">
                  02
                </span>
                <div>
                  <h2 className="font-serif text-3xl tracking-tight mb-2">
                    Acompanhantes
                  </h2>
                  <p className="text-muted-foreground">
                    Quantas pessoas levará com voce?
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-12">
                <button
                  onClick={() => setCompanions((curr) => curr - 1)}
                  className="w-16 h-16 rounded-full border-2 border-foreground/20 hover:border-foreground flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  disabled={companions === 0}
                >
                  <Minus className="w-5 h-5" strokeWidth={1.5} />
                </button>

                <div className="text-center">
                  <span className="font-serif text-8xl tracking-tight block leading-none">
                    {companions}
                  </span>
                  <span className="text-sm text-muted-foreground tracking-[0.2em] uppercase mt-3 block">
                    {companions === 0
                      ? "somente eu"
                      : companions === 1
                        ? "acompanhante"
                        : "acompanhantes"}
                  </span>
                </div>

                <button
                  onClick={() => setCompanions((curr) => curr + 1)}
                  className="w-16 h-16 rounded-full border-2 border-foreground/20 hover:border-foreground flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  disabled={
                    !selectedGuest || selectedGuest.maxCompanion === companions
                  }
                >
                  <Plus className="w-5 h-5" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Step 3 - Confirm */}
            <div className="mb-16">
              <div className="flex items-center gap-6 mb-10">
                <span className="font-serif text-8xl text-foreground/10 leading-none">
                  03
                </span>
                <div>
                  <h2 className="font-serif text-3xl tracking-tight mb-2">
                    Confirmar presença
                  </h2>
                  <p className="text-muted-foreground">
                    Revise e confirme sua presença no evento
                  </p>
                </div>
              </div>

              {/* Summary */}
              {selectedGuest && (
                <div className="border-t border-b border-foreground/10 py-8 mb-10 space-y-4">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
                      Convidado
                    </span>
                    <span className="font-serif text-xl">
                      {selectedGuestName}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
                      Acompanhantes
                    </span>
                    <span className="font-serif text-xl">{companions}</span>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
                      Total de pessoas
                    </span>
                    <span className="font-serif text-xl">{1 + companions}</span>
                  </div>
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={!selectedGuest || isSubmitting}
                className={`w-full py-6 font-serif text-xl tracking-wider transition-all duration-300 ${
                  selectedGuest
                    ? "bg-foreground text-background hover:opacity-90 cursor-pointer"
                    : "bg-foreground/10 text-foreground/30 cursor-not-allowed"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-3">
                    <span className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                    Confirmando...
                  </span>
                ) : (
                  "Confirmar Presença"
                )}
              </button>

              {!selectedGuest && (
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Selecione seu nome para confirmar
                </p>
              )}
            </div>

            <div className="flex flex-col items-center gap-6 pt-8 text-muted-foreground">
              <div className="w-px h-16 bg-foreground/15" />
              <p className="text-sm tracking-[0.3em] uppercase">
                20 . 06 . 2026
              </p>
              <div className="relative w-20 h-20">
                <svg viewBox="0 0 80 80" className="w-full h-full">
                  <circle
                    cx="40"
                    cy="40"
                    r="38"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-foreground/20"
                  />
                  <text
                    x="40"
                    y="44"
                    textAnchor="middle"
                    className="font-serif text-xl fill-current text-foreground/40"
                  >
                    {"J&R"}
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
