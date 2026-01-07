const Footer = () => {
  return (
    <footer className="py-12 px-4 text-center relative z-20">
      <div className="max-w-md mx-auto">
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
        <p className="font-script text-3xl text-secondary mb-4 animate-fade-in-up">
          Agradeceré confirmar con anticipación para el registro de ingreso. Aforo limitado         
        </p>
        <p className="font-script text-3xl text-primary mb-4 animate-fade-in-up">
          ¡Te esperamos!
        </p>
        
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
