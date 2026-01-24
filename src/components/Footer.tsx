import { MessageCircle } from 'lucide-react';

const Footer = () => {
  // Reemplaza con tu número real (código de país + número, sin espacios ni símbolos)
  const phoneNumber = "51992962762"; 
  const message = "Hola Alex y Valeria, quiero confirmar mi asistencia.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <footer className="py-12 px-4 text-center relative z-20">
      <div className="max-w-md mx-auto">
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
        <p className="font-script text-3xl text-gray-600 mb-4 animate-fade-in-up">
          Agradeceré confirmar con anticipación para el registro de ingreso. Aforo limitado         
        </p>
        <p className="font-script text-3xl text-primary mb-4 animate-fade-in-up">
          ¡Te esperamos!
        </p>
        {/* --- NUEVO BOTÓN DE WHATSAPP --- */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-200 mb-8 animate-fade-in-up delay-150"
        >
          <MessageCircle size={20} />
          <span>Confirmar por WhatsApp</span>
        </a>
        {/* ------------------------------- */}
        
        
        <div className="flex justify-center gap-3 text-2xl mb-6 animate-fade-in-up delay-200">
          <span>💙</span>
          <span>👶</span>
          <span>⚽</span>
          <span>🧸</span>
          <span>💙</span>
        </div>

        <p className="font-body text-sm text-muted-foreground animate-fade-in-up delay-300">
          Gabriel Rafael 2026
        </p>
      </div>
    </footer>
  );
};

export default Footer;
