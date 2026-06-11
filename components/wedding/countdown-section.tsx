"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const weddingDate = new Date("2026-10-17T12:00:00");
  const difference = weddingDate.getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="w-20 h-20 md:w-28 md:h-28 bg-card rounded-sm flex items-center justify-center border border-border shadow-sm">
          <span className="font-serif text-3xl md:text-5xl text-foreground">
            {value.toString().padStart(2, "0")}
          </span>
        </div>
      </div>
      <span className="mt-3 text-xs md:text-sm tracking-[0.2em] uppercase text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <section id="countdown" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Cuenta regresiva
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-16">
            Faltan
          </h2>
          <div className="flex justify-center gap-4 md:gap-8">
            {[0, 0, 0, 0].map((_, i) => (
              <TimeUnit key={i} value={0} label={["Días", "Horas", "Minutos", "Segundos"][i]} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="countdown" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
        >
          Cuenta regresiva
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl text-foreground mb-16"
        >
          Faltan
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 md:gap-8"
        >
          <TimeUnit value={timeLeft.days} label="Días" />
          <TimeUnit value={timeLeft.hours} label="Horas" />
          <TimeUnit value={timeLeft.minutes} label="Minutos" />
          <TimeUnit value={timeLeft.seconds} label="Segundos" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <p className="text-muted-foreground text-lg">
            Sábado, 17 de Octubre de 2026 a las 12:00h
          </p>
          <motion.a
            href="https://maps.app.goo.gl/RhaUwNyQMN2JnBya9"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-muted-foreground mt-2 hover:underline"
          >
            📍 Finca Espino de Torote, Fresno de Torote, Madrid
          </motion.a>
          <motion.a
            href="https://maps.app.goo.gl/gaE7UDEV1UT3HSw97"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-muted-foreground mt-2 hover:underline"
          >
            ⛪ Parroquia Castrense de la Armada, Madrid
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
