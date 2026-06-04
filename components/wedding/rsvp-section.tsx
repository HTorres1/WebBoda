"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
              <Label htmlFor="name" className="text-foreground">
                Nombre completo
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Tu nombre"
                required
                className="bg-background border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Correo electrónico
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                required
                className="bg-background border-border"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="attendance" className="text-foreground">
                ¿Asistirás?
              </Label>
              <Select value={attendance} onValueChange={setAttendance} required>
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder="Selecciona una opción" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yes">Sí, asistiré con gusto</SelectItem>
                  <SelectItem value="no">
                    Lo siento, no podré asistir
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="guests" className="text-foreground">
                Número de invitados
              </Label>
              <Select>
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder="Selecciona" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 persona</SelectItem>
                  <SelectItem value="2">2 personas</SelectItem>
                  <SelectItem value="3">3 personas</SelectItem>
                  <SelectItem value="4">4 personas</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="dietary" className="text-foreground">
              Restricciones alimentarias
            </Label>
            <Input
              id="dietary"
              name="dietary"
              placeholder="Alergias, vegetariano, vegano, etc."
              className="bg-background border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">
              Mensaje para los novios (opcional)
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Escribe un mensaje especial..."
              rows={4}
              className="bg-background border-border resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={formState === "submitting"}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base tracking-wide"
          >
            {formState === "submitting" ? (
              "Enviando..."
            ) : (
              <>
                <Heart className="w-4 h-4 mr-2" />
                Confirmar Asistencia
              </>
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
