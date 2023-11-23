// import { useTypewriter } from "~/hooks/useTypewriter";
import TypewriterComponent from "typewriter-effect";

export const Typewriter = ({ texts }) => {
  //const displayText = useTypewriter(text, speed);

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-pink-600">Jônatas Santos</h1>
        <div className="text-sm md:text-xl font-light text-zinc-400">
          Building projects and ideas with
        </div>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: texts,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      

      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        Welcome to my space.
      </div>
    </div>
  )
};

export default Typewriter;
