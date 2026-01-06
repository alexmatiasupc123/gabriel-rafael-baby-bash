import parentsPhoto from "@/assets/parents-photo.png";

const ParentsSection = () => {
  return (
    <section className="py-16 px-4 relative z-20">
      <div className="max-w-md mx-auto">
        {/* Photo frame */}
        <div className="relative animate-fade-in-up">
          {/* Decorative frame */}
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-baby-blue/30 to-primary/20 rounded-3xl blur-sm" />
          <div className="absolute -inset-2 bg-card rounded-2xl shadow-card" />
          
          {/* Photo */}
          <div className="relative rounded-xl overflow-hidden shadow-soft">
            <img 
              src={parentsPhoto} 
              alt="Futuros padres de Gabriel Rafael"
              className="w-full h-auto object-cover"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
          </div>
        </div>

        {/* Caption */}
        <div className="text-center mt-8 animate-fade-in-up delay-300">
          <p className="font-script text-3xl text-primary mb-2">
            Con mucho amor
          </p>
          <p className="font-body text-muted-foreground text-sm">
            Esperamos con ilusión la llegada de Gabriel Rafael
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParentsSection;
