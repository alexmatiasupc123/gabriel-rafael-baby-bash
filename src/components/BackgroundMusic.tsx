import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const musicUrl = "/hercules.mp3";

  const handlePlayMusic = () => {
    if (audioRef.current) {
      // Intentamos reproducir inmediatamente al hacer clic
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setShowPrompt(false);
        })
        .catch((error) => {
          console.error("Error al reproducir audio:", error);
        });
    }
  };

  const handleMuteToggle = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
  <>
      {/* Elemento de Audio Nativo (Invisible pero funcional) */}
      <audio 
        ref={audioRef} 
        src={musicUrl} 
        loop 
        preload="auto"
      />

      {/* Prompt Inicial (Modal) */}
      {showPrompt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm">
          <div className="text-center p-8 max-w-sm animate-fade-in-up">
            <div className="text-6xl mb-6">👶🏻</div>
            <h2 className="font-script text-3xl text-primary mb-4">
              Baby Shower de Gabriel Rafael
            </h2>
            <p className="font-body text-muted-foreground mb-6">
              Toca para ingresar y disfrutar de la música
            </p>
            <button
              onClick={handlePlayMusic}
              className="bg-primary text-primary-foreground font-body font-medium px-8 py-4 rounded-full shadow-card hover:shadow-glow transition-all duration-300 animate-pulse-soft cursor-pointer"
            >
              Entrar a la invitación 💙
            </button>
          </div>
        </div>
      )}

      {/* Botón de Control de Música */}
      {!showPrompt && (
        <button
          onClick={handleMuteToggle}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary/90 text-primary-foreground shadow-card flex items-center justify-center hover:shadow-glow transition-all duration-300 cursor-pointer"
          aria-label={isPlaying ? "Silenciar música" : "Reproducir música"}
        >
          {isPlaying ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
        </button>
      )}
    </>
  );
};
export default BackgroundMusic;