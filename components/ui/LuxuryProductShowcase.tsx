import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Eye, Heart, Share2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image: string;
  description?: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Éternité",
    category: "High Jewelry",
    price: "Upon Request",
    image: "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?w=800&q=95",
  },
  {
    id: "2",
    name: "Lumière Céleste",
    category: "Timepieces",
    price: "€125,000",
    image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=800&q=95",
  },
  {
    id: "3",
    name: "Essence Rare",
    category: "Haute Parfumerie",
    price: "€8,500",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=95",
  },
  {
    id: "4",
    name: "Constellation",
    category: "High Jewelry",
    price: "Upon Request",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=95",
  },
];

export default function LuxuryProductShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [aiDescription, setAiDescription] = useState<string>("");
  const [isLoadingDescription, setIsLoadingDescription] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const fetchAiDescription = async (product: Product) => {
    setIsLoadingDescription(true);
    try {
      const response = await fetch("/api/claude/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: `Describe this luxury ${product.category} piece named "${product.name}" in 2-3 elegant sentences. Focus on craftsmanship, heritage, and emotional significance.`,
        }),
      });
      const data = await response.json();
      setAiDescription(data.response);
    } catch (error) {
      setAiDescription("A masterpiece of unparalleled craftsmanship, where every detail speaks to centuries of refined expertise.");
    } finally {
      setIsLoadingDescription(false);
    }
  };

  return (
    <section ref={containerRef} className="py-luxury-2xl bg-luxury-white">
      <div className="max-w-luxury-wide mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 1 }}
          className="text-center mb-luxury-xl"
        >
          <h2 className="text-display font-serif font-light mb-luxury-sm tracking-luxury-tight">
            Curated Excellence
          </h2>
          <p className="text-body-lg luxury-thin text-luxury-gray-600 max-w-2xl mx-auto tracking-luxury">
            Each piece in our collection represents the pinnacle of artisanal mastery, 
            where time-honored techniques meet contemporary vision.
          </p>
        </motion.div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-luxury-sm">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 40 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group cursor-pointer"
              onClick={() => {
                setSelectedProduct(product);
                fetchAiDescription(product);
              }}
            >
              <div className="relative overflow-hidden bg-luxury-pearl aspect-[3/4]">
                {/* Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-luxury-slow group-hover:scale-105"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-luxury">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-luxury-white">
                    <div className="flex justify-between items-center">
                      <Eye className="w-5 h-5" strokeWidth={1} />
                      <div className="flex gap-3">
                        <Heart className="w-5 h-5" strokeWidth={1} />
                        <Share2 className="w-5 h-5" strokeWidth={1} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick view indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-luxury">
                  <div className="bg-luxury-white/90 luxury-backdrop px-3 py-2 rounded">
                    <span className="text-micro uppercase tracking-luxury-wider text-luxury-black">
                      Quick View
                    </span>
                  </div>
                </div>
              </div>

              {/* Product info */}
              <div className="pt-luxury-xs">
                <p className="text-caption uppercase tracking-luxury-wider text-luxury-gray-500 mb-2">
                  {product.category}
                </p>
                <h3 className="text-heading-4 font-serif font-light mb-3 tracking-luxury">
                  {product.name}
                </h3>
                <p className="text-body luxury-thin tracking-wide">
                  {product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI-powered product detail modal */}
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-luxury-black/50 z-50 flex items-center justify-center p-6 luxury-backdrop"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-luxury-white max-w-4xl w-full rounded-lg shadow-luxury-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-luxury-pearl p-8">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-luxury-lg">
                  <p className="text-caption uppercase tracking-luxury-wider text-luxury-gray-500 mb-4">
                    {selectedProduct.category}
                  </p>
                  <h3 className="text-heading-2 font-serif font-light mb-6 tracking-luxury-tight">
                    {selectedProduct.name}
                  </h3>
                  
                  {/* AI Description */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-4 h-4 text-luxury-gold" />
                      <span className="text-micro uppercase tracking-luxury-wider text-luxury-gray-600">
                        AI Curated Description
                      </span>
                    </div>
                    {isLoadingDescription ? (
                      <div className="space-y-2">
                        <div className="h-4 bg-luxury-gray-100 rounded animate-pulse" />
                        <div className="h-4 bg-luxury-gray-100 rounded animate-pulse w-3/4" />
                      </div>
                    ) : (
                      <p className="text-body leading-relaxed luxury-thin tracking-wide text-luxury-gray-700">
                        {aiDescription || selectedProduct.description}
                      </p>
                    )}
                  </div>

                  <p className="text-heading-3 font-light mb-8">
                    {selectedProduct.price}
                  </p>

                  <div className="flex gap-4">
                    <button className="flex-1 px-8 py-4 bg-luxury-black text-luxury-white hover:bg-luxury-gray-900 transition-colors duration-luxury">
                      <span className="text-body tracking-luxury-wide uppercase">
                        Inquire
                      </span>
                    </button>
                    <button className="px-8 py-4 border border-luxury-black hover:bg-luxury-black hover:text-luxury-white transition-all duration-luxury">
                      <Heart className="w-5 h-5" strokeWidth={1} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
