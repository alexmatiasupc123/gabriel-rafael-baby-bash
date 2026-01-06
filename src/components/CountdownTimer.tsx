import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("2026-02-21T20:00:00").getTime();

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
    <section className="py-16 px-4 relative z-20">
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

        <p className="font-body text-muted-foreground text-sm mt-6 animate-fade-in-up delay-300">
          ¡Te esperamos con mucha ilusión! 💙
        </p>
      </div>
    </section>
  );
};

export default CountdownTimer;
