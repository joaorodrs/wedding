"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { WeddingNav } from "@/components/wedding-nav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gift, ExternalLink, Check, Edit, Loader2 } from "lucide-react";
import CurrencyInput from "react-currency-input-field";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Footer } from "@/components/sections/footer";
import useSWR from "swr";

interface GiftItem {
  id: number;
  name: string;
  price: number;
  image_url: string;
  category: string;
  reserved: boolean;
  amount_reserved: number | null;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function PresentesPage() {
  const moneyInputRef = useRef<HTMLInputElement | null>(null);
  const {
    data: gifts = [],
    isLoading,
    error,
  } = useSWR<GiftItem[]>("/api/gifts", fetcher);
  const [moneyInputValue, setMoneyInputValue] = useState(0);
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
    if (gift.reserved) return;

    setSelectedGift(gift);
    setPixData(null); // Reset PIX data when opening a new gift

    if (gift.amount_reserved !== undefined) {
      const giftPrice = gift.price - (gift.amount_reserved || 0);
      setMoneyInputValue(parseFloat(giftPrice.toFixed(2)));
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
      const price = moneyInputValue || selectedGift.price;

      if (!price) {
        return toast("Informe um valor de presente");
      }

      const response = await fetch("/api/pay/pix", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          giftId: selectedGift.id,
          name: selectedGift.name,
          price,
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
        <div className="text-center mb-16 space-y-4">
          <h1 className="font-serif text-6xl md:text-7xl tracking-tight text-foreground">
            PRESENTES
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Sua presença é o nosso maior presente. Mas se desejar nos
            presentear, escolha um item da lista abaixo.
          </p>
        </div>

        {!isLoading && (
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
        )}

        {isLoading && (
          <div className="flex items-center justify-center w-full h-full">
            <Loader2
              className="size-10 animate-spin text-swamp-green"
              strokeWidth={1.5}
            />
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGifts.map((gift) => (
            <Card
              key={gift.id}
              className={`group relative bg-transparent shadow-none overflow-hidden border-black/10 transition-all duration-300 py-0 ${
                gift.reserved ? "opacity-50" : "cursor-pointer"
              } hover:ring-10 hover:ring-dim-green transition duration-200 focus:ring-dim-green focus:ring-10 hover:border-dim-green`}
              onClick={() => handleGiftClick(gift)}
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={gift.image_url || "/placeholder.svg"}
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

              <div className="p-4 space-y-2">
                <div className="flex items-start justify-between gap-2 mb-4">
                  <h3 className="font-serif text-lg leading-tight text-balance">
                    {gift.name}
                  </h3>
                  <Gift className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                </div>
                {gift.amount_reserved !== null && (
                  <p className="font-medium text-swamp-green">
                    Contribua para esse presente!
                  </p>
                )}
                <p className="font-serif text-2xl text-foreground">
                  {gift.amount_reserved !== null && (
                    <span className="text-lg">
                      {formatPrice(gift.amount_reserved)} de
                    </span>
                  )}{" "}
                  {formatPrice(gift.price / 100)}
                </p>
                {gift.amount_reserved !== null && (
                  <div
                    className="absolute h-2 bg-swamp-green left-0 bottom-0"
                    style={{
                      width: `${(gift.amount_reserved / gift.price) * 100}%`,
                    }}
                  />
                )}
              </div>
            </Card>
          ))}
        </div>

        <Footer />
      </main>

      <Dialog
        open={!!selectedGift}
        onOpenChange={() => {
          setSelectedGift(null);
          setMoneyInputValue(0);
        }}
      >
        <DialogContent className="sm:max-w-md max-h-[calc(100vh-24px)] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">
              {selectedGift?.name}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {!pixData?.success && (
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Valor</p>
                {selectedGift?.amount_reserved !== null && !pixData ? (
                  <div className="flex flex-col items-center">
                    <div className="relative w-[60%]">
                      <CurrencyInput
                        ref={moneyInputRef}
                        placeholder="R$ 0,00"
                        defaultValue={moneyInputValue}
                        value={moneyInputValue}
                        onValueChange={(_, __, values) =>
                          setMoneyInputValue(values?.float || 0)
                        }
                        decimalsLimit={2}
                        prefix="R$ "
                        className="p-0 w-[100%] text-center text-3xl font-bold border border-dim-green rounded-sm"
                      />
                      <button
                        className="absolute right-3 top-2"
                        onClick={() => moneyInputRef.current?.focus()}
                      >
                        <Edit />{" "}
                      </button>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      Digite aqui o valor a ser presenteado
                    </span>
                  </div>
                ) : (
                  <p className="text-3xl font-bold">
                    {selectedGift &&
                      formatPrice(moneyInputValue || selectedGift.price)}
                  </p>
                )}
              </div>
            )}

            {!pixData ? (
              <div className="space-y-3">
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
                      <p className="text-xl text-center font-bold">
                        AGENCIA PRIME LTDA
                      </p>
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
