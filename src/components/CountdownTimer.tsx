import { useState, useEffect } from "react";
import babyPhoto from "@/assets/baby-photo.png";

const CountdownTimer = () => {
  const targetDate = new Date("2026-02-28T20:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: "Días" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Minutos" },
    { value: timeLeft.seconds, label: "Segundos" },
  ];

  return (
    <section className="py-12 px-4 relative z-20" >
      <div className="max-w-md mx-auto text-center">
        <h3 className="font-script text-4xl text-primary mb-8 animate-fade-in-up">
          Cuenta Regresiva
        </h3>

        <div className="grid grid-cols-4 gap-3 animate-fade-in-up delay-200">
          {timeUnits.map((unit, index) => (
            <div
              key={unit.label}
              className="gradient-card rounded-xl p-3 md:p-4 shadow-card"
            >
              <div className="font-script text-3xl md:text-4xl text-primary animate-pulse-soft">
                {String(unit.value).padStart(2, "0")}
              </div>
              <div className="font-body text-xs md:text-sm text-muted-foreground mt-1">
                {unit.label}
              </div>
            </div>
          ))}
        </div>

        {/* Photo frame */}
        <div className="relative animate-fade-in-up mt-10">
          {/* Decorative frame */}
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-baby-blue/30 to-primary/20 rounded-3xl blur-sm" />
          <div className="absolute -inset-2 bg-card rounded-2xl shadow-card" />     

          {/* Photo */}
          <div className="relative rounded-xl overflow-hidden shadow-soft">
            <img 
              src={babyPhoto} 
              alt="Futuros padres de Gabriel Rafael"
              className="w-full h-auto object-cover"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
          </div>
        </div>

        <p className="font-body text-muted-foreground text-sm mt-6 animate-fade-in-up delay-300 italic">
          La dulce espera está llegando a su fin. Nuestro príncipe llega a completar nuestras vidas. Contamos los días para celebrar juntos este momento tan especial.
        </p>
        <p className="font-body text-muted-foreground text-sm mt-6 animate-fade-in-up delay-300 font-semibold">
          Te esperamos hijo 💙
        </p>
      </div>
    </section>
  );
};

export default CountdownTimer;
