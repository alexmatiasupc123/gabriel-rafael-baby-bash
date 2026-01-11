import React, { useState, useEffect } from "react";
import { Gift, X } from "lucide-react";

const GiftRegistry = () => {
  const [isOpen, setIsOpen] = useState(false);

  const gifts = [
    "Extractor eléctrico de leche materna 🍼",
    "Bañera plegable para bebé 🛁",
    "Pañalera funcional 🎒",
    "Set de alimentación de silicona (platos, vasos, cubiertos) 🍽️",
    "Aspirador o Succionador Eléctrico Nasal para bebé👃",
    "Silla de comer para bebé 🍴",
    "Mecedora de bebé 🪑",    
    "Calentador de biberones ♨️",
    "Biberones anticólicos 🍼",
    "Kit de estimulación temprana 📚",
    "Almohada de lactancia 🤱",
    "Almohada antireflujo para bebé 🛏️",
    "Canguro o portabebé ergonómico 🧑‍🍼",
    "Kit de cuidado para bebé (cortaúñas, cepillo, termómetro) 🩺",
    "Baberos, mantas, toallas de baño 🧣",
    "Ropita de recién nacido (bodys, etc) 👶",  
    "Juguetes de estimulación 🧸",    
    "O lo que nazca de tu corazón 💙"
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    // AQUÍ ESTÁ EL CAMBIO CLAVE: Cambiamos el z-index de toda la sección
    // Si isOpen es true, la sección sube a z-[10000], poniéndose por encima del Footer (z-20)
    <section className={`py-8 px-4 relative ${isOpen ? "z-[10000]" : "z-20"}`}>
      <div className="max-w-md mx-auto text-center">
        {/* Intro Card */}
        <div className="gradient-card rounded-3xl p-8 shadow-card border border-primary/20 animate-fade-in-up">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-soft">
            <Gift className="w-8 h-8 text-primary" />
          </div>
          
          <h3 className="font-script text-3xl text-primary mb-4">Lista de Deseos</h3>
          
          <p className="font-body text-muted-foreground text-sm md:text-base mb-8 px-2 leading-relaxed">
            Su presencia es nuestro mayor regalo, pero si desean tener un detalle con el bebé, hemos preparado una pequeña lista de sugerencias con mucho amor.
          </p>

          <button
            onClick={() => setIsOpen(true)}
            className="group relative inline-flex items-center gap-3 bg-card text-primary border-2 border-primary/30 px-8 py-3 rounded-full font-body font-medium shadow-soft hover:shadow-card hover:border-primary hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
          >
            <Gift size={20} className="group-hover:scale-110 transition-transform" />
            <span>Ver sugerencias de regalo</span>
          </button>
        </div>

        {/* Modal Pop-up */}
        {isOpen && (
          <div 
            className="fixed inset-0 z-[10001] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation(); 
            }}
            onTouchMove={(e) => e.stopPropagation()} 
          >
            <div 
              className="bg-card rounded-3xl w-full max-w-sm shadow-glow relative border border-primary/20 overflow-hidden animate-fade-in-up"
              onClick={(e) => e.stopPropagation()} 
            >
              <div className="bg-primary p-6 text-center relative">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-2 bg-white/20 rounded-full hover:bg-white/30 text-white transition-colors cursor-pointer z-50"
                >
                  <X size={20} />
                </button>
                <div className="text-4xl mb-2">🎁</div>
                <h4 className="font-script text-3xl text-primary-foreground">Sugerencias</h4>
              </div>

              <div className="p-6 max-h-[60vh] overflow-y-auto">
                <ul className="space-y-3">
                  {gifts.map((gift, index) => (
                    <li key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl border border-border hover:border-primary/50 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="font-body text-foreground text-sm md:text-base text-start">{gift}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 text-center">
                  <p className="font-script text-2xl text-primary mb-4">¡Gracias por tanto cariño!</p>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="bg-primary text-primary-foreground font-body font-medium px-8 py-3 rounded-full shadow-sm hover:shadow-md hover:bg-primary/90 transition-all duration-300 cursor-pointer"
                  >
                    Cerrar lista
                  </button>
                </div>


              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GiftRegistry;