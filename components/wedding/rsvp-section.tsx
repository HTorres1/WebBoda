"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function RsvpSection() {
  return (
    <section id="rsvp" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-2xl text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
        >
          Confirma tu asistencia
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl text-foreground mb-6"
        >
          RSVP
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground mb-10 max-w-md mx-auto"
        >
          Nos ayudaría muchísimo que confirmaras tu asistencia antes del
          30 de Junio de 2026.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          href="https://docs.google.com/forms/d/1SHeaxogrXNIC5gmNRe9Ei6ukkC_bVwDoBDkiX9nGPLw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-sm bg-foreground text-background hover:opacity-90 transition"
        >
          <Heart className="w-5 h-5" />
          Confirmar asistencia
        </motion.a>

      </div>
    </section>
  );
}