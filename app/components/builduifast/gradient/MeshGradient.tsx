import { cn } from "../utils";
import * as React from "react";

const themes = {
  candy: {
    background: "rgba(243, 246, 246, 1)",
    color1: "rgba(163, 228, 250, 0.6)",
    color2: "rgba(255, 188, 217, 0.7)",
  },
  wood: {
    background: "rgba(246, 244, 236, 1)",
    color1: "rgba(65, 245, 191, 0.4)",
    color2: "rgba(194, 106, 53, 0.3)",
  },
  summer: {
    background: "rgba(248, 244, 237, 1)",
    color1: "rgba(227, 255, 0, 0.4)",
    color2: "rgba(77, 216, 255, 0.3)",
  },
  party: {
    background: "rgba(245, 244, 246, 1)",
    color1: "rgba(221, 255, 0, 0.4)",
    color2: "rgba(255, 0, 255, 0.15)",
  },
  sunrise: {
    background: "rgba(241, 246, 244, 1)",
    color1: "rgba(255, 200, 1, 0.4)",
    color2: "rgba(17, 76, 90, 0.3)",
  },
  wizard: {
    background: "rgba(249, 243, 221, 1)",
    color1: "rgba(63, 253, 106, 0.35)",
    color2: "rgba(89, 27, 152, 0.2)",
  },
  twilight: {
    background: "rgba(252, 250, 250, 1)",
    color1: "rgba(231, 93, 80, 0.35)",
    color2: "rgba(52, 79, 159, 0.3)",
  },
};

function Gradient() {
  const [theme, setTheme] = React.useState("candy");

  return (
    <div className="relative h-full w-full">
      <div className="absolute right-4 top-4 flex space-x-2">
        {Object.entries(themes).map(([key, value]) => (
          <button
            key={key}
            className={cn(
              "h-6 w-6 cursor-pointer rounded-full border border-gray-400/70 shadow",
              key === theme ? "border-gray-600" : "hover:scale-125",
            )}
            style={{
              backgroundImage: `linear-gradient(135deg, ${value.color1}, ${value.background}, ${value.color2})`,
            }}
            onClick={() => {
              setTheme(key);
            }}
          />
        ))}
      </div>
      <div
        className="hidden h-full w-full sm:block"
        style={{
          // background: themes[theme].background,
          // backgroundImage: `radial-gradient(at 0% 0%, ${colors.candy.color1} 0, transparent 50%), radial-gradient(at 100% 100%, ${colors.candy.color2} 0px, transparent 50%)`,
          backgroundImage: `radial-gradient(35% 85% at 0% 0%, ${themes[theme].color1} 0, transparent 100%), radial-gradient(50% 50% at 100% 100%, ${themes[theme].color2} 0px, transparent 100%), linear-gradient(${themes[theme].background}, transparent)`,
        }}
      />
      <div
        className="h-full w-full sm:hidden"
        style={{
          // background: themes[theme].background,
          // backgroundImage: `radial-gradient(at 0% 0%, ${colors.candy.color1} 0, transparent 50%), radial-gradient(at 100% 100%, ${colors.candy.color2} 0px, transparent 50%)`,
          backgroundImage: `radial-gradient(60% 65% at 0% 0%, ${themes[theme].color1} 0, transparent 100%), radial-gradient(100% 25% at 100% 100%, ${themes[theme].color2} 0px, transparent 100%), linear-gradient(${themes[theme].background}, 80%, transparent)`,
        }}
      />
    </div>
  );
}

export default Gradient;
