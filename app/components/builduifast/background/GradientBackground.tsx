import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/site/Select";

type Type = "linear" | "radial";

const backgroundImageValues: Record<Type, string> = {
  linear:
    "linear-gradient(135deg, rgba(163, 228, 250, 0.6), rgba(255, 188, 217, 0.7))",
  radial:
    "radial-gradient(35% 85% at 0% 0%, rgba(163, 228, 250, 0.6) 0, transparent 100%), radial-gradient(50% 50% at 100% 100%, rgba(255, 188, 217, 0.7) 0px, transparent 100%), linear-gradient(rgba(243, 246, 246, 1), transparent)",
};

function Background() {
  const [type, setType] = React.useState<Type>("linear");

  return (
    <div className="relative h-full w-full">
      <div className="absolute right-4 top-4">
        <Select
          value={type}
          onValueChange={(v: Type) => {
            setType(v);
          }}
        >
          <SelectTrigger className="w-[180px] border-none shadow">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="linear">linear-gradient</SelectItem>
              <SelectItem value="radial">radial-gradient</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div
        className="h-full w-full"
        style={{ backgroundImage: backgroundImageValues[type] }}
      />
    </div>
  );
}

const templateCode = `\
  // linear-gradient
  <div style={{ backgroundImage: "linear-gradient(135deg, rgba(163, 228, 250, 0.6), rgba(255, 188, 217, 0.7))" }}>
    Content
  </div>

  // radial-gradient
  <div style={{ backgroundImage: "radial-gradient(35% 85% at 0% 0%, rgba(163, 228, 250, 0.6) 0, transparent 100%), radial-gradient(50% 50% at 100% 100%, rgba(255, 188, 217, 0.7) 0px, transparent 100%), linear-gradient(rgba(243, 246, 246, 1), transparent)" }}>
    Content
  </div>
`;

export default Background;
export { templateCode };
