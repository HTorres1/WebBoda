"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Utensils, Music } from "lucide-react";

const events = [
  {
    icon: MapPin,
    title: "Ceremonia",
    time: "17:00",
    location: "Capilla de la Hacienda",
    description: "Una ceremonia íntima rodeados de nuestros seres queridos.",
  },
  {
    icon: Utensils,
    title: "Cóctel",
    time: "18:30",
    location: "Jardines de la Hacienda",
    description:
      "Disfruta de aperitivos y bebidas mientras socializas con otros invitados.",
  },
  {
    icon: Clock,
    title: "Cena",
    time: "20:00",
    location: "Salón Principal",
    description:
      "Una cena de cuatro tiempos preparada por nuestro chef exclusivo.",
  },
  {
    icon: Music,
    title: "Fiesta",
    time: "22:30",
    location: "Terraza Exterior",
    description: "¡Baila con nosotros toda la noche bajo las estrellas!",
  },
];

export function EventDetails() {
  return (
    <section id="events" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
        >
          El Gran Día
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center font-serif text-4xl md:text-5xl text-foreground mb-16"
        >
          Programa del Evento
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card border border-border rounded-sm p-8 text-center hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <event.icon className="w-6 h-6 text-primary" />
              </div>

              <span className="text-sm font-medium text-primary tracking-wide">
                {event.time}
              </span>

              <h3 className="font-serif text-2xl text-foreground mt-2 mb-1">
                {event.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4">
                {event.location}
              </p>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {event.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
