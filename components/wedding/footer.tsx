"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-serif text-3xl md:text-4xl mb-4">
            Belén y Kike
          </h3>

          <div className="flex items-center justify-center gap-2 text-background/80 mb-8">
            <span>17 de Octubre, 2026</span>
            <Heart className="w-4 h-4 text-accent" fill="currentColor" />
            <span>Madrid, España</span>
          </div>

          <p className="text-background/60 text-sm max-w-md mx-auto mb-8">
            No podemos esperar para celebrar este día tan especial con todos
            vosotros. Vuestra presencia será el mejor regalo.
          </p>

          <p className="text-background/60 text-sm max-w-md mx-auto mb-8">
            Si quereis apoyar el inicio de esta nueva aventura<br></br>
            ES04 2100 1165 8302 0031 9818
          </p>

          <div className="mb-10">
            <a
              href="https://open.spotify.com/playlist/5gftlylytfYXC8ql7phUYe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-background/80 hover:text-background transition"
            >
              🎵 Ayúdanos a crear la banda sonora del día
            </a>

            <p className="text-background/50 text-sm mt-2">
              Añade tus canciones favoritas a nuestra playlist
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-background/70 mb-8">
            <a
              href="#countdown"
              className="hover:text-background transition-colors"
            >
              Countdown
            </a>
            <a
              href="#story"
              className="hover:text-background transition-colors"
            >
              Nuestra Historia
            </a>
            <a
              href="#gallery"
              className="hover:text-background transition-colors"
            >
              Galería
            </a>
            <a
              href="#events"
              className="hover:text-background transition-colors"
            >
              Programa
            </a>
            <a href="#rsvp" className="hover:text-background transition-colors">
              RSVP
            </a>
          </nav>

          <div className="w-16 h-px bg-background/20 mx-auto mb-8" />

          <p className="text-background/50 text-xs tracking-wide">
            #BelénYKike2026
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
