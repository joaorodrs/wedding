"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { WeddingNav } from "@/components/wedding-nav";
import { Upload, Heart, Download } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Photo {
  id: string;
  src: string;
  caption?: string;
  uploadedBy?: string;
  likes: number;
  aspectRatio: "portrait" | "landscape" | "square";
}

export default function PhotosPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [likedPhotos, setLikedPhotos] = useState<Set<string>>(new Set());

  // Pre-wedding photos with varied aspect ratios for asymmetric layout
  const [photos, setPhotos] = useState<Photo[]>([
    {
      id: "1",
      src: "/placeholder.svg",
      caption: "Pré-wedding na praia ao pôr do sol",
      aspectRatio: "portrait",
      likes: 24,
    },
    {
      id: "2",
      src: "/placeholder.svg",
      caption: "Entre a natureza",
      aspectRatio: "landscape",
      likes: 18,
    },
    {
      id: "3",
      src: "/placeholder.svg",
      caption: "Momentos espontâneos",
      aspectRatio: "square",
      likes: 31,
    },
    {
      id: "4",
      src: "/placeholder.svg",
      caption: "A noiva",
      aspectRatio: "portrait",
      likes: 42,
    },
    {
      id: "5",
      src: "/placeholder.svg",
      caption: "Caminhando juntos",
      aspectRatio: "landscape",
      likes: 27,
    },
    {
      id: "6",
      src: "/placeholder.svg",
      caption: "Olhares que falam",
      aspectRatio: "square",
      likes: 35,
    },
    {
      id: "7",
      src: "/placeholder.svg",
      caption: "O noivo",
      aspectRatio: "portrait",
      likes: 29,
    },
    {
      id: "8",
      src: "/placeholder.svg",
      caption: "Golden hour",
      aspectRatio: "landscape",
      likes: 38,
    },
  ]);

  const handleLike = (photoId: string) => {
    setLikedPhotos((prev) => {
      const newLikes = new Set(prev);
      if (newLikes.has(photoId)) {
        newLikes.delete(photoId);
        setPhotos((photos) =>
          photos.map((p) =>
            p.id === photoId ? { ...p, likes: p.likes - 1 } : p,
          ),
        );
      } else {
        newLikes.add(photoId);
        setPhotos((photos) =>
          photos.map((p) =>
            p.id === photoId ? { ...p, likes: p.likes + 1 } : p,
          ),
        );
      }
      return newLikes;
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      // In production, upload to storage and add to photos array
      console.log("[v0] Files to upload:", files);
      setIsUploadOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <WeddingNav />

      <main className="container mx-auto px-6 pt-32 pb-16">
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-[1px] bg-foreground/30" />
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                Memórias
              </span>
            </div>
          </div>
          <h1 className="font-serif uppercase text-6xl lg:text-7xl mb-6 text-balance leading-tight">
            Nosso Álbum de Momentos
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Aqui estão alguns momentos especiais do nosso pré-wedding.
            Convidamos você a fazer parte desta história compartilhando suas
            próprias fotos do nosso grande dia.
          </p>
        </div>

        {/* Upload Button - Floating Action */}
        <div className="fixed bottom-8 right-8 z-40">
          <button
            onClick={() => setIsUploadOpen(true)}
            className="group flex items-center gap-3 bg-foreground text-background px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Upload className="w-5 h-5" />
            <span className="font-medium tracking-wide">Compartilhar Foto</span>
          </button>
        </div>

        {/* Asymmetric Photo Gallery - Editorial Layout */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {photos.map((photo, index) => {
            // Create an editorial-style asymmetric layout
            let gridClass = "";
            const position = index % 8;

            if (position === 0)
              gridClass = "col-span-12 md:col-span-7 row-span-2";
            else if (position === 1)
              gridClass = "col-span-12 md:col-span-5 row-span-1";
            else if (position === 2)
              gridClass = "col-span-6 md:col-span-4 row-span-1";
            else if (position === 3)
              gridClass = "col-span-6 md:col-span-8 row-span-2";
            else if (position === 4)
              gridClass = "col-span-12 md:col-span-5 row-span-1";
            else if (position === 5)
              gridClass = "col-span-12 md:col-span-7 row-span-1";
            else if (position === 6)
              gridClass = "col-span-6 md:col-span-6 row-span-2";
            else if (position === 7)
              gridClass = "col-span-6 md:col-span-6 row-span-1";

            return (
              <div
                key={photo.id}
                className={`group relative ${gridClass} cursor-pointer overflow-hidden`}
                onClick={() => setSelectedPhoto(photo)}
              >
                {/* Image Container */}
                <div className="relative w-full h-full min-h-[300px] md:min-h-[400px] bg-muted">
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.caption || "Wedding photo"}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Caption and Like - appears on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    {photo.caption && (
                      <p className="font-serif text-white text-lg mb-3">
                        {photo.caption}
                      </p>
                    )}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLike(photo.id);
                        }}
                        className="flex items-center gap-2 text-white hover:text-red-300 transition-colors"
                      >
                        <Heart
                          className={`w-5 h-5 ${likedPhotos.has(photo.id) ? "fill-red-300 text-red-300" : ""}`}
                        />
                        <span className="text-sm">{photo.likes}</span>
                      </button>
                      {photo.uploadedBy && (
                        <span className="text-white/70 text-sm">
                          por {photo.uploadedBy}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Decorative corner accent */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action at bottom */}
        <div className="mt-24 text-center max-w-2xl mx-auto">
          <div className="inline-block mb-6">
            <svg width="60" height="2" className="mx-auto">
              <line
                x1="0"
                y1="1"
                x2="60"
                y2="1"
                stroke="currentColor"
                strokeWidth="1"
                className="text-foreground/30"
              />
            </svg>
          </div>
          <h2 className="font-serif text-4xl mb-4">
            Suas Memórias Também Importam
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Cada momento capturado é uma lembrança que queremos guardar para
            sempre. Compartilhe conosco as fotos que você tirou do nosso
            casamento.
          </p>
          <Button
            onClick={() => setIsUploadOpen(true)}
            variant="outline"
            size="lg"
            className="group font-serif text-lg px-8 py-6 border-2 hover:bg-foreground hover:text-background transition-all"
          >
            Enviar Minhas Fotos
            <Upload className="ml-2 w-5 h-5 group-hover:translate-y-[-2px] transition-transform" />
          </Button>
        </div>
      </main>

      {/* Photo Detail Modal */}
      <Dialog
        open={!!selectedPhoto}
        onOpenChange={() => setSelectedPhoto(null)}
      >
        <DialogContent className="max-w-5xl p-0 bg-background border-none">
          <DialogTitle className="sr-only">Visualização da foto</DialogTitle>
          {selectedPhoto && (
            <div className="relative">
              {/* Image */}
              <div className="relative aspect-[4/3] bg-muted">
                <Image
                  src={selectedPhoto.src || "/placeholder.svg"}
                  alt={selectedPhoto.caption || "Wedding photo"}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Details Bar */}
              <div className="p-6 bg-background">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    {selectedPhoto.caption && (
                      <h3 className="font-serif text-2xl mb-2">
                        {selectedPhoto.caption}
                      </h3>
                    )}
                    {selectedPhoto.uploadedBy && (
                      <p className="text-muted-foreground text-sm">
                        Enviado por {selectedPhoto.uploadedBy}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleLike(selectedPhoto.id)}
                      className="flex items-center gap-2 hover:text-red-500 transition-colors"
                    >
                      <Heart
                        className={`w-6 h-6 ${likedPhotos.has(selectedPhoto.id) ? "fill-red-500 text-red-500" : ""}`}
                      />
                      <span className="text-lg">{selectedPhoto.likes}</span>
                    </button>
                    <button className="p-2 hover:bg-muted rounded-full transition-colors">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Upload Modal */}
      <Dialog open={isUploadOpen} onOpenChange={setIsUploadOpen}>
        <DialogContent className="max-w-2xl">
          <DialogTitle className="font-serif text-3xl mb-6">
            Compartilhe Sua Foto
          </DialogTitle>

          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Obrigado por querer fazer parte do nosso álbum de memórias!
              Escolha uma ou mais fotos especiais que você capturou no nosso
              casamento.
            </p>

            {/* Upload Area */}
            <label className="group relative block border-2 border-dashed border-border rounded-lg p-12 text-center cursor-pointer hover:border-foreground/30 transition-colors">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileUpload}
                className="sr-only"
              />
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center group-hover:border-foreground transition-colors">
                  <Upload className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <div>
                  <p className="font-medium mb-1">
                    Clique para selecionar fotos
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ou arraste e solte aqui
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">
                  PNG, JPG até 10MB cada
                </p>
              </div>
            </label>

            {/* Optional: Name input */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Seu nome (opcional)</label>
              <input
                type="text"
                placeholder="Como você gostaria de ser identificado?"
                className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <Button variant="outline" onClick={() => setIsUploadOpen(false)}>
                Cancelar
              </Button>
              <Button className="bg-foreground text-background hover:bg-foreground/90">
                Enviar Fotos
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
