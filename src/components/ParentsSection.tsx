import parentsPhoto from "@/assets/parents-photo.png";

const ParentsSection = () => {
  return (
    <section className="py-12 px-4 relative z-20">
      <div className="max-w-md mx-auto">

        <p className="text-muted-foreground text-center font-body text-sm md:text-base mb-2 animate-fade-in-up tracking-widest uppercase">
          Mis papitos
          </p>
          
          <h3 className="font-script text-center text-5xl md:text-6xl text-primary mb-10 animate-fade-in-up delay-200 drop-shadow-lg">
            Alexander y Valeria
          </h3>      
        
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
          <p className="font-script text-4xl text-primary mb-2">
            Con mucho amor
          </p>
          <p className="font-body text-muted-foreground text-sm italic">
            "Pronto estaré con ustedes, pero ahorita Diosito está pintando mis ojitos, mis manitas y pelito.¡Abran paso que estoy llegando! 💙"
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParentsSection;
