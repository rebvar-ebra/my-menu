"use client";

import { useState } from "react";
import Image from "next/image";

interface MenuItem {
  id: number;
  name: string;
  price: string;
  image: string;
  description?: string;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

const MENU_DATA: MenuCategory[] = [
  {
    category: "BURGER 🍔",
    items: [
      { id: 1, name: "Single Cheeseburger", price: "€7.40", image: "/images/ch.jpeg" },
      { id: 2, name: "Double Cheeseburger", price: "€9.40", image: "/images/duch.jpeg" },
      { id: 3, name: "Single Smash BLT", price: "€7.40", image: "/images/blt.jpeg" },
      { id: 4, name: "Doppel Smash BLT", price: "€9.40", image: "/images/bltdu.jpeg" },
      { id: 5, name: "Single Kraft Burger", price: "€8.20", image: "/images/skraft.jpeg" },
      { id: 6, name: "Double Kraft Burger", price: "€10.40", image: "/images/dukraft.jpeg" },
    ],
  },
  {
    category: "Pommes 🍟",
    items: [
      { id: 7, name: "Skinny Fries", price: "€4.40", image: "/images/fries.png" },
    ],
  },
  {
    category: "SOẞEN 🌶️",
    items: [
      { id: 8, name: "Kechap", price: "€1.00", image: "/images/ket.jpeg" },
      { id: 9, name: "Spezialsauce", price: "€1.90", image: "/images/sp.jpeg" },
      { id: 10, name: "Mayo", price: "€1.00", image: "/images/mayo.jpeg" },
    ],
  },
  {
    category: "PIZZA 🍕",
    items: [
      { id: 11, name: "(59) Margherita", price: "€6.50", description: "Mit Mozzarella", image: "/images/pizza_classic.png" },
      { id: 12, name: "(60) Funghi", price: "€7.50", description: "mit frischen Champignons", image: "/images/pizza_veggie.png" },
      { id: 13, name: "(61) Salami", price: "€7.99", description: "mit Salami", image: "/images/pizza_classic.png" },
      { id: 14, name: "(62) Prosciutto", price: "€7.99", description: "mit Putenschinken", image: "/images/pizza_classic.png" },
      { id: 15, name: "(63) Hawaii", price: "€8.50", description: "mit Schinken & Ananas", image: "/images/pizza_classic.png" },
      { id: 16, name: "(64) Mista", price: "€9.50", description: "mit Salami, Schinken, Champignons & Peperoni", image: "/images/pizza_classic.png" },
      { id: 17, name: "(65) Quattro Formaggi", price: "€8.99", description: "mit vier versch. Käsesorten", image: "/images/pizza_classic.png" },
      { id: 18, name: "(66) Quattro Stagioni", price: "€8.99", description: "mit Salami, Putenschinken, Champignons & Antischocken", image: "/images/pizza_classic.png" },
      { id: 19, name: "(67) Tonno", price: "€7.99", description: "mit Thunfisch & Zwiebeln", image: "/images/pizza_seafood.png" },
      { id: 20, name: "(68) Vegetaria", price: "€8.50", description: "mit gemischtem Gemüse", image: "/images/pizza_veggie.png" },
      { id: 21, name: "(69) Diavolo", price: "€9.50", description: "mit scharfer Salami, Jalapeños & Champignons", image: "/images/pizza_classic.png" },
      { id: 22, name: "(70) Calzone", price: "€9.99", description: "mit Salami, Putenschinken, Champignons & Peperoni", image: "/images/pizza_classic.png" },
      { id: 23, name: "(71) Gorgonzola", price: "€8.99", description: "mit Spinat und Gorgonzola", image: "/images/pizza_veggie.png" },
      { id: 24, name: "(72) Mozzarella", price: "€8.50", description: "mit frischen Tomaten, Mozzarella und Basilikum", image: "/images/pizza_veggie.png" },
      { id: 25, name: "(73) Scampi", price: "€10.99", description: "mit Scampis und Knoblauch", image: "/images/pizza_seafood.png" },
      { id: 26, name: "(74) Frutti Di Mare", price: "€10.50", description: "mit verschiedenen Meeresfrüchten und Knoblauch", image: "/images/pizza_seafood.png" },
      { id: 27, name: "(75) Brokkoli", price: "€8.99", description: "mit Brokkoli und Weichkäse", image: "/images/pizza_veggie.png" },
      { id: 28, name: "(76) Italia", price: "€9.99", description: "mit Rucola, frischen Cherrytomaten & Parmesan", image: "/images/pizza_veggie.png" },
      { id: 29, name: "(77) Parma", price: "€10.50", description: "mit Rucola, Rinderschinken, Cherrytomaten & Parmesan", image: "/images/pizza_classic.png" },
      { id: 30, name: "(78) Berlin", price: "€10.99", description: "mit Knoblauchwurst, Champignons, Tomaten & Zwiebeln", image: "/images/pizza_classic.png" },
      { id: 31, name: "(79) Sardellen", price: "€9.50", description: "mit Sardellen & s. Oliven", image: "/images/pizza_seafood.png" },
      { id: 32, name: "(80) Al Mutscho", price: "€9.99", description: "mit Hähnchen, Mais, Champignons & Jalapeños", image: "/images/pizza_classic.png" },
      { id: 33, name: "(81) Izzy", price: "€10.50", description: "mit Hähnchen, Brokkoli, Sauce Hollandaise", image: "/images/pizza_classic.png" },
      { id: 34, name: "(82) Mia", price: "€10.50", description: "mit Spinat, Knoblauchwurst & Weichkäse", image: "/images/pizza_veggie.png" },
    ],
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(MENU_DATA[0].category);

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white selection:bg-amber-500/30">
      {/* Header */}
      <header className="sticky top-0 z-50 glass px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tighter text-gradient">
          Goldline <span className="text-white">Burger</span>
        </h1>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Our Signature Menu</h2>
          <p className="text-zinc-400 text-lg max-w-md mx-auto">
            Experience the finest ingredients and handcrafted flavors, served fresh to your table.
          </p>
        </section>

        {/* Categories Navigation */}
        <nav className="flex items-center gap-2 mb-10 overflow-x-auto pb-4 no-scrollbar">
          {MENU_DATA.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-6 py-2 rounded-full whitespace-nowrap transition-all duration-300 font-medium ${
                activeCategory === cat.category
                  ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20"
                  : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </nav>

        {/* Menu Items Grid */}
        <div className="space-y-12">
          {MENU_DATA.map((cat) => (
            <div
              key={cat.category}
              className={`space-y-6 transition-all duration-500 ${
                activeCategory === cat.category ? "opacity-100 translate-y-0" : "sr-only opacity-0 translate-y-4"
              }`}
            >
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                <h3 className="text-xl font-semibold uppercase tracking-widest text-amber-500">
                  {cat.category}
                </h3>
                <span className="text-xs text-zinc-500 uppercase tracking-widest">
                  {cat.items.length} Items
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {cat.items.map((item) => (
                  <div
                    key={item.id}
                    className="glass p-4 rounded-2xl flex items-center gap-4 hover:scale-[1.02] transition-transform duration-300 cursor-pointer premium-shadow group"
                  >
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-zinc-900">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-lg mb-1">{item.name}</h4>
                      <p className="text-zinc-500 text-sm">
                        {item.description || "Finest quality ingredients"}
                      </p>
                    </div>
                    <div className="text-amber-500 font-bold text-lg">
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer / Cart Placeholder */}
      <footer className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-xs">
        <button className="w-full bg-amber-500 hover:bg-amber-400 text-black font-extrabold py-4 rounded-full shadow-2xl shadow-amber-500/40 transition-all flex items-center justify-center gap-3 active:scale-95">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          Order Selection
        </button>
      </footer>
    </div>
  );
}
