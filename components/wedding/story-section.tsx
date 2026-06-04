"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const timeline = [
  {
    date: "Marzo 2019",
    title: "Nos conocimos",
    description:
      "Un encuentro casual en una cafetería que cambiaría nuestras vidas para siempre.",
  },
  {
    date: "Diciembre 2019",
    title: "Primera cita",
    description:
      "Una cena bajo las estrellas que marcó el inicio de nuestra historia de amor.",
  },
  {
    date: "Febrero 2021",
    title: "Nos mudamos juntos",
    description:
      "Decidimos dar el siguiente paso y construir nuestro hogar juntos.",
  },
  {
    date: "Agosto 2024",
    title: "La propuesta",
    description:
      "En la cima de una montaña, con vistas al atardecer, Carlos hizo la pregunta más importante.",
  },
];

export function StorySection() {
  return (
    <section id="story" className="py-24 md:py-32 bg-muted">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
        >
          Nuestro Camino
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center font-serif text-4xl md:text-5xl text-foreground mb-16"
        >
          Nuestra Historia
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border" />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full border-2 border-background z-10" />

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0
                    ? "md:pr-12 md:text-right"
                    : "md:pl-12 md:text-left"
                }`}
              >
                <span className="text-sm text-primary font-medium tracking-wide">
                  {item.date}
                </span>
                <h3 className="font-serif text-2xl text-foreground mt-1 mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>

        {/* Heart at the end */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-16"
        >
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Heart className="w-5 h-5 text-primary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
