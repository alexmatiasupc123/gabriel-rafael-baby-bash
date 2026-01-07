import { Calendar, Clock, MapPin } from "lucide-react";

const EventDetails = () => {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Av.+Venezuela+2597+Bellavista+Condominio+Nueva+Vista+Lima+Peru";

  return (
    <section className="py-12 px-4 relative z-20">
      <div className="max-w-md mx-auto">
        <h3 className="font-script text-4xl text-center text-primary mb-12 animate-fade-in-up">
          Detalles del Evento
        </h3>

        <div className="space-y-6">
          {/* Date */}
          <div className="gradient-card rounded-2xl p-6 shadow-card animate-fade-in-up delay-100">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                <Calendar className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="font-body text-muted-foreground text-sm uppercase tracking-wider">Fecha</p>
                <p className="font-script text-2xl text-foreground">Sábado 21 de Febrero del 2026</p>
              </div>
            </div>
          </div>

          {/* Time */}
          <div className="gradient-card rounded-2xl p-6 shadow-card animate-fade-in-up delay-200">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-accent/30 flex items-center justify-center">
                <Clock className="w-7 h-7 text-accent-foreground" />
              </div>
              <div>
                <p className="font-body text-muted-foreground text-sm uppercase tracking-wider">Hora</p>
                <p className="font-script text-2xl text-foreground">8:00 p.m.</p>
                <p className="font-body text-sm text-muted-foreground">Hora exacta</p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="gradient-card rounded-2xl p-6 shadow-card animate-fade-in-up delay-300">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-body text-muted-foreground text-sm uppercase tracking-wider">Ubicación</p>
                <p className="font-script text-xl text-foreground">Condominio Nueva Vista - Sala SUM 2</p>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  Av. Venezuela 2597 - Bellavista
                </p>
              </div>
            </div>
          </div>

          {/* Google Maps Button */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full animate-fade-in-up delay-500"
          >
            <div className="gradient-card rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-shadow duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.894889!2d-77.0967!3d-12.0622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv.%20Venezuela%202597%2C%20Bellavista!5e0!3m2!1ses!2spe!4v1600000000000!5m2!1ses!2spe"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-t-2xl"
              />
              <div className="p-4 bg-primary text-primary-foreground text-center font-body font-medium">
                <MapPin className="inline-block w-5 h-5 mr-2" />
                Abrir en Google Maps
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
