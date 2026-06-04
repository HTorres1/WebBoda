"use client";

import { useState } from "react";
import { motion } from "framer-motion";
// nada de imports UI
import { Check, Heart } from "lucide-react";

export function RsvpSection() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">(
    "idle"
  );
  const [attendance, setAttendance] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setFormState("success");
  };

  if (formState === "success") {
    return (
      <section id="rsvp" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="py-16"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Check className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              ¡Gracias por confirmar!
            </h3>
            <p className="text-muted-foreground text-lg">
              Hemos recibido tu confirmación. Estamos muy felices de contar
              contigo en nuestro día especial.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
        >
          Confirma tu asistencia
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center font-serif text-4xl md:text-5xl text-foreground mb-6"
        >
          RSVP
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-muted-foreground mb-12 max-w-md mx-auto"
        >
          Por favor, confirma tu asistencia antes del 15 de Mayo de 2025
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-card p-8 md:p-10 rounded-sm border border-border shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Nombre Completo</label>
              <input className="w-full p-2 border rounded-md" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input className="w-full p-2 border rounded-md" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Asistirás?</label>
              <select className="w-full p-2 border rounded-md">
                <option value="1">Sí, asistiré con gusto</option>
                <option value="2">Lo siento, no podré asistir</option>
              </select>
            </div>

            <div className="space-y-2">              
              <label className="text-sm font-medium">Número de invitados</label>
              <select className="w-full p-2 border rounded-md">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="2">3</option>
                <option value="2">4</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            
            <label className="text-sm font-medium">Restricciones alimentarias</label>
            <input className="w-full p-2 border rounded-md" />
          </div>

          <div className="space-y-2">
            
            <label className="text-sm font-medium">Mensaje para los novios (opcional)</label>
            <textarea className="w-full p-2 border rounded-md" />
          </div>

          <button className="px-4 py-2 bg-black text-white rounded-md hover:opacity-90">
            Enviar
          </button>
        </motion.form>
      </div>
    </section>
  );
}
