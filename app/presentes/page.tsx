"use client";

import { useState } from "react";
import Image from "next/image";
import { WeddingNav } from "@/components/wedding-nav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gift, ExternalLink, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface GiftItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  reserved: boolean;
}

const gifts: GiftItem[] = [
  {
    id: 1,
    name: "Jogo de Panelas Tramontina",
    description: "Conjunto com 5 peças em aço inoxidável",
    price: 450,
    image: "/premium-cookware-set.jpg",
    category: "Cozinha",
    reserved: false,
  },
  {
    id: 2,
    name: "Aparelho de Jantar",
    description: "Aparelho de Jantar 20 Peças Tramontina",
    price: 200,
    image: "/espresso-coffee-machine.png",
    category: "Cozinha",
    reserved: false,
  },
  {
    id: 3,
    name: "Conjunto de talheres completo",
    description: "Jogo de talheres inox 24 peças",
    price: 160,
    image: "/luxury-bed-sheets.jpg",
    category: "Cozinha",
    reserved: false,
  },
  {
    id: 4,
    name: "Geladeira Brastemp",
    description: "Geladeira 375L Frost Free",
    price: 2900,
    image: "/premium-blender.jpg",
    category: "Cozinha",
    reserved: false,
  },
  {
    id: 5,
    name: "Conjunto de Toalhas",
    description: "6 peças em algodão turco",
    price: 280,
    image: "/luxury-towel-set.jpg",
    category: "Banho",
    reserved: false,
  },
  {
    id: 6,
    name: "Air Fryer Digital",
    description: "Fritadeira elétrica 5L com timer",
    price: 420,
    image: "/digital-air-fryer.jpg",
    category: "Cozinha",
    reserved: false,
  },
  {
    id: 7,
    name: "Jogo de Jantar 30 Peças",
    description: "Porcelana branca premium",
    price: 520,
    image: "/white-porcelain-dinnerware.jpg",
    category: "Mesa",
    reserved: false,
  },
  {
    id: 8,
    name: "Aspirador Robô",
    description: "Limpeza inteligente automática",
    price: 1800,
    image: "/robot-vacuum-cleaner.png",
    category: "Casa",
    reserved: false,
  },
  {
    id: 9,
    name: "Mixer Planetário",
    description: "Batedeira profissional 5L",
    price: 680,
    image: "/stand-mixer-kitchen.jpg",
    category: "Cozinha",
    reserved: false,
  },
  {
    id: 10,
    name: "Edredom King Size",
    description: "Plumas de ganso, 400g/m²",
    price: 550,
    image: "/luxury-down-comforter.jpg",
    category: "Quarto",
    reserved: false,
  },
  {
    id: 11,
    name: "Processador de Alimentos",
    description: "Multifuncional com 10 acessórios",
    price: 490,
    image: "/food-processor.png",
    category: "Cozinha",
    reserved: false,
  },
  {
    id: 12,
    name: "Conjunto de Facas",
    description: "7 peças em aço alemão com cepo",
    price: 620,
    image: "/knife-set-with-block.jpg",
    category: "Cozinha",
    reserved: false,
  },
  {
    id: 13,
    name: "Aparelho de Fondue",
    description: "Conjunto completo com 6 garfos",
    price: 320,
    image: "/fondue-set.jpg",
    category: "Mesa",
    reserved: false,
  },
  {
    id: 14,
    name: "Tábuas de Corte Premium",
    description: "Kit 3 peças em bambu",
    price: 180,
    image: "/bamboo-cutting-boards.jpg",
    category: "Cozinha",
    reserved: false,
  },
  {
    id: 15,
    name: "Difusor de Aromas",
    description: "Ultrassônico com iluminação LED",
    price: 220,
    image: "/aroma-diffuser-zen.png",
    category: "Casa",
    reserved: false,
  },
  {
    id: 16,
    name: "Jogo de Taças Cristal",
    description: "12 peças vinho e champagne",
    price: 380,
    image: "/crystal-wine-glasses.png",
    category: "Mesa",
    reserved: false,
  },
  {
    id: 17,
    name: "Purificador de Água",
    description: "Sistema de filtragem duplo",
    price: 550,
    image: "/water-purifier.png",
    category: "Cozinha",
    reserved: false,
  },
  {
    id: 18,
    name: "Tapete Sala Grande",
    description: "2x3m em fibra natural",
    price: 720,
    image: "/large-living-room-rug.jpg",
    category: "Decoração",
    reserved: false,
  },
  {
    id: 19,
    name: "Luminária de Piso",
    description: "Design moderno com dimmer",
    price: 480,
    image: "/modern-floor-lamp.png",
    category: "Decoração",
    reserved: false,
  },
  {
    id: 20,
    name: "Escorredor de Louças",
    description: "Inox com bandeja removível",
    price: 150,
    image: "/dish-drying-rack.jpg",
    category: "Cozinha",
    reserved: false,
  },
  {
    id: 21,
    name: "Ferro de Passar a Vapor",
    description: "Profissional com caldeira",
    price: 420,
    image: "/steam-iron.png",
    category: "Casa",
    reserved: false,
  },
  {
    id: 22,
    name: "Jogo de Potes Herméticos",
    description: "10 peças vidro borossilicato",
    price: 240,
    image: "/glass-storage-containers.jpg",
    category: "Cozinha",
    reserved: false,
  },
  {
    id: 23,
    name: "Almofadas Decorativas",
    description: "Kit 4 peças veludo premium",
    price: 280,
    image: "/velvet-decorative-pillows.jpg",
    category: "Decoração",
    reserved: false,
  },
  {
    id: 24,
    name: "Espelho Decorativo Grande",
    description: "90cm com moldura dourada",
    price: 580,
    image: "/placeholder.svg?height=300&width=300",
    category: "Decoração",
    reserved: false,
  },
  {
    id: 25,
    name: "Conjunto de Bowls",
    description: "6 peças cerâmica artesanal",
    price: 320,
    image: "/placeholder.svg?height=300&width=300",
    category: "Mesa",
    reserved: false,
  },
];

export default function PresentesPage() {
  const [selectedGift, setSelectedGift] = useState<GiftItem | null>(null);
  const [filter, setFilter] = useState<string>("Todos");
  const [loading, setLoading] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  const [pixData, setPixData] = useState<{
    billingId?: string;
    pixCode?: string;
    pixQrCode?: string;
    status?: string;
    amount?: number;
    success?: boolean;
    error?: any;
  } | null>(null);

  const categories = [
    "Todos",
    ...Array.from(new Set(gifts.map((g) => g.category))),
  ];

  const filteredGifts =
    filter === "Todos" ? gifts : gifts.filter((g) => g.category === filter);

  const handleGiftClick = (gift: GiftItem) => {
    if (!gift.reserved) {
      setSelectedGift(gift);
      setPixData(null); // Reset PIX data when opening a new gift
    }
  };

  const handleCheckPaymentStatus = async () => {
    if (!selectedGift) return;

    setLoading(true);
    try {
      const response = await fetch(`/api/pay/pix?id=${pixData?.billingId}`, {
        method: "GET",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to check payment status");
      }

      if (data.status == "PAID") {
        setPixData((curr) => ({ ...curr, success: true }));
        return;
      }

      toast("Pagamento ainda não confirmado", {
        description: "Aguarde alguns instantes",
        position: "top-right",
      });
    } catch (error) {
      console.error("Payment error:", error);
      // You might want to show an error toast here
    } finally {
      setLoading(false);
    }
  };

  const handlePixPayment = async () => {
    if (!selectedGift) return;

    setLoading(true);
    try {
      const response = await fetch("/api/pay/pix", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          giftId: selectedGift.id,
          name: selectedGift.name,
          price: selectedGift.price,
          description: selectedGift.description,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create payment");
      }

      setPixData(data);
    } catch (error) {
      console.error("Payment error:", error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text?: string) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedToClipboard(true);
    setTimeout(() => setCopiedToClipboard(false), 5000);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      <WeddingNav />

      <main className="container mx-auto px-6 pt-32 pb-16">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="font-serif text-6xl md:text-7xl tracking-tight text-foreground">
            PRESENTES
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Sua presença é o nosso maior presente. Mas se desejar nos
            presentear, escolha um item da lista abaixo.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              data-selected={filter === category}
              className="tracking-widest uppercase text-sm font-medium cursor-pointer px-3 py-2 data-[selected=true]:underline data-[selected=true]:underline-offset-2 data-[selected=true]:text-foreground text-muted-foreground transition decoration-dim-green decoration-[5px]"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gifts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGifts.map((gift) => (
            <Card
              key={gift.id}
              className={`group bg-transparent shadow-none overflow-hidden border-black/10 transition-all duration-300 py-0 ${
                gift.reserved ? "opacity-50" : "cursor-pointer"
              } hover:ring-10 hover:ring-dim-green transition duration-200 focus:ring-dim-green focus:ring-10 hover:border-dim-green`}
              onClick={() => handleGiftClick(gift)}
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={gift.image || "/placeholder.svg"}
                  alt={gift.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {gift.reserved && (
                  <div className="absolute inset-0 bg-foreground/80 flex items-center justify-center">
                    <span className="text-background font-serif text-xl tracking-wide md:text-3xl">
                      Reservado
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif text-lg leading-tight text-balance">
                    {gift.name}
                  </h3>
                  <Gift className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {gift.description}
                </p>
                <p className="font-serif text-2xl text-foreground">
                  {formatPrice(gift.price)}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </main>

      {/* Payment Dialog */}
      <Dialog open={!!selectedGift} onOpenChange={() => setSelectedGift(null)}>
        <DialogContent className="sm:max-w-md max-h-[calc(100vh-24px)] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">
              {selectedGift?.name}
            </DialogTitle>
            <DialogDescription className="text-base">
              {selectedGift?.description}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {!pixData?.success && (
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Valor</p>
                <p className="text-3xl font-bold">
                  {selectedGift && formatPrice(selectedGift.price)}
                </p>
              </div>
            )}

            {/* Payment Options */}
            {!pixData ? (
              <div className="space-y-3">
                <h4 className="font-medium text-center text-sm tracking-widest uppercase">
                  Escolha a forma de pagamento
                </h4>

                {/* PIX Button */}
                <Button
                  className="w-full h-auto py-4 flex-col gap-1"
                  size="lg"
                  onClick={handlePixPayment}
                  disabled={loading}
                >
                  {loading ? (
                    <span className="text-base font-medium">
                      Gerando PIX...
                    </span>
                  ) : (
                    <>
                      <span className="text-base font-medium">
                        Pagar com PIX
                      </span>
                      <span className="text-xs opacity-80">
                        Transferência instantânea
                      </span>
                    </>
                  )}
                </Button>

                {/* Payment Link Button */}
                <Button
                  variant="outline"
                  className="w-full h-auto py-4 flex-col gap-1 bg-transparent"
                  size="lg"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base font-medium">
                      Link de Pagamento
                    </span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                  <span className="text-xs opacity-80">
                    Cartão, boleto ou parcelado
                  </span>
                </Button>
              </div>
            ) : (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
                {!pixData.success ? (
                  <div className="space-y-4">
                    <div className="text-center space-y-2">
                      <h4 className="font-medium text-sm tracking-widest uppercase text-green-600">
                        QR Code Gerado!
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Escaneie o QR Code abaixo ou copie o código PIX
                      </p>
                    </div>

                    <div className="relative flex justify-center size-60 mx-auto">
                      <Image
                        src={pixData.pixQrCode || "/placeholder.svg"}
                        alt="PIX QR CODE"
                        fill
                      />
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs text-center text-muted-foreground">
                        Código PIX Copia e Cola
                      </p>
                      <div className="flex gap-2">
                        <input
                          readOnly
                          value={pixData.pixCode}
                          className="flex-1 text-xs p-2 border rounded bg-muted"
                        />
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-[70px]"
                          onClick={() => copyToClipboard(pixData.pixCode)}
                        >
                          {copiedToClipboard ? <Check /> : "Copiar"}
                        </Button>
                      </div>
                    </div>
                    <Button
                      className="w-full bg-green-700"
                      size="lg"
                      onClick={handleCheckPaymentStatus}
                    >
                      Já paguei <Check />
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full text-xs"
                      onClick={() => setPixData(null)}
                    >
                      Voltar para opções
                    </Button>
                  </div>
                ) : (
                  <div>
                    <div className="text-center space-y-4">
                      <h4 className="font-serif text-4xl tracking-widest uppercase text-green-600">
                        Pagamento Confirmado
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Muito obrigado por contribuir para o nosso presente!
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {!pixData?.success && (
              <p className="text-xs text-muted-foreground text-center leading-relaxed">
                Após a confirmação do pagamento, o presente será marcado como
                reservado e você receberá um email de confirmação.
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
