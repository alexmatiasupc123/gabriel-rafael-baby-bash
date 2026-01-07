import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Hercules - Go the Distance / Llegaré a mi meta (audio file)
  const musicUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

  // YouTube video ID for Hercules song
  const youtubeVideoId = "PyVzsEXfh1M";
  const handlePlayMusic = () => {
    setShowPrompt(false);
    setIsPlaying(true);
  };
  const handleMuteToggle = () => {
    setIsPlaying(!isPlaying);
  };
  return <>
      {/* Initial prompt to play music */}
      {showPrompt && <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm">
          <div className="text-center p-8 max-w-sm animate-fade-in-up">
            <div className="text-6xl mb-6">👶🏻</div>
            <h2 className="font-script text-3xl text-primary mb-4">
              Baby Shower de Gabriel Rafael
            </h2>
            <p className="font-body text-muted-foreground mb-6">Toca para ingresar y disfrutar de la música</p>
            <button onClick={handlePlayMusic} className="bg-primary text-primary-foreground font-body font-medium px-8 py-4 rounded-full shadow-card hover:shadow-glow transition-all duration-300 animate-pulse-soft">
              Entrar a la invitación 💙
            </button>
          </div>
        </div>}

      {/* YouTube iframe for music - visible when playing */}
      {isPlaying && <div className="fixed bottom-0 left-0 w-0 h-0 overflow-hidden pointer-events-none opacity-0">
          <iframe width="1" height="1" src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&loop=1&playlist=${youtubeVideoId}&controls=0`} title="Background Music" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>}

      {/* Music control button */}
      {!showPrompt && <button onClick={handleMuteToggle} className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary/90 text-primary-foreground shadow-card flex items-center justify-center hover:shadow-glow transition-all duration-300" aria-label={isPlaying ? "Silenciar música" : "Reproducir música"}>
          {isPlaying ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
        </button>}

       
    </>;
};
export default BackgroundMusic;