import heroDecorations from "@/assets/hero-decorations.png";
const HeroSection = () => {
  return <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{
      backgroundImage: `url(${heroDecorations})`
    }} />
      
      {/* Content */}
      <div className="relative z-20 text-center max-w-md mx-auto">
        <p className="text-muted-foreground font-body text-sm md:text-base mb-2 animate-fade-in-up tracking-widest uppercase">
          ¡Estás invitado al Baby Shower de!
        </p>
        
        <h1 className="font-script text-6xl md:text-8xl text-primary mb-4 animate-fade-in-up delay-200 drop-shadow-lg">
          Gabriel
        </h1>
        <h2 className="font-script text-5xl text-primary mb-8 animate-fade-in-up delay-300 px-6 py-2 rounded-full bg-[#d7ecf9] md:text-8xl">
          Rafael
        </h2>

        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8 animate-fade-in-up delay-500" />

        <p className="font-body text-foreground/80 text-base md:text-lg animate-fade-in-up delay-700">
          Acompáñanos a celebrar la próxima llegada de nuestro pequeño angelito
        </p>

        {/* Decorative elements */}
        <div className="mt-8 flex justify-center gap-4 animate-fade-in-up delay-1000">
          <span className="text-3xl animate-bounce-soft">👶</span>
          <span className="text-3xl animate-bounce-soft delay-200">⭐</span>
          <span className="text-3xl animate-bounce-soft delay-300">💙</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-soft z-20">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>;
};
export default HeroSection;