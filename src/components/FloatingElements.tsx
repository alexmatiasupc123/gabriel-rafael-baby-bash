import balloonsImg from "@/assets/balloons-left.png";
import teddyBear from "@/assets/teddy-bear.png";
import soccerBall from "@/assets/soccer-ball.png";

const FloatingElements = () => {
  return (
    <>
      {/* Balloons - Left side */}
      <div className="fixed left-0 top-20 w-24 md:w-32 animate-float opacity-80 pointer-events-none z-10">
        <img src={balloonsImg} alt="" className="w-full h-auto" />
      </div>
      
      {/* Balloons - Right side */}
      <div className="fixed right-0 top-32 w-20 md:w-28 animate-float-delayed opacity-80 pointer-events-none z-10 transform scale-x-[-1]">
        <img src={balloonsImg} alt="" className="w-full h-auto" />
      </div>

      {/* Teddy bear - Bottom left */}
      <div className="fixed left-4 bottom-20 w-16 md:w-24 animate-float-slow opacity-70 pointer-events-none z-10">
        <img src={teddyBear} alt="" className="w-full h-auto" />
      </div>

      {/* Soccer ball - Bottom right */}
      <div className="fixed right-4 bottom-32 w-12 md:w-20 animate-bounce-soft opacity-70 pointer-events-none z-10">
        <img src={soccerBall} alt="" className="w-full h-auto" />
      </div>

      {/* Additional soccer ball - Top */}
      <div className="fixed right-1/4 top-10 w-10 md:w-14 animate-float opacity-50 pointer-events-none z-10">
        <img src={soccerBall} alt="" className="w-full h-auto" />
      </div>

      {/* Additional teddy - Right */}
      <div className="fixed right-8 top-1/2 w-12 md:w-16 animate-float-delayed opacity-50 pointer-events-none z-10">
        <img src={teddyBear} alt="" className="w-full h-auto" />
      </div>

      {/* Sparkles */}
      <div className="fixed left-1/4 top-1/3 w-3 h-3 bg-accent rounded-full animate-sparkle opacity-60 pointer-events-none z-10" />
      <div className="fixed right-1/3 top-1/4 w-2 h-2 bg-accent rounded-full animate-sparkle delay-500 opacity-60 pointer-events-none z-10" />
      <div className="fixed left-1/3 bottom-1/4 w-2 h-2 bg-primary rounded-full animate-sparkle delay-300 opacity-40 pointer-events-none z-10" />
    </>
  );
};

export default FloatingElements;
