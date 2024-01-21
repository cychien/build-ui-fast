import * as React from "react";
import { Checkbox } from "~/components/site/Checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/site/Select";

type Type = "grid" | "dotted";

const styles: Record<Type, object> = {
  grid: {
    backgroundImage:
      "linear-gradient(#bdbdc8 1px, transparent 1px), linear-gradient(to right, #bdbdc8 1px, transparent 1px)",
    backgroundSize: "30px 30px",
    backgroundPosition: "4px 4px",
  },
  dotted: {
    backgroundImage: "radial-gradient(#bdbdc8 2px, transparent 2px)",
    backgroundSize: "30px 30px",
  },
};

function Background() {
  const [type, setType] = React.useState<Type>("grid");
  const [maskDisplayed, setMaskDisplayed] = React.useState(false);

  const maskStyle = maskDisplayed
    ? {
        WebkitMaskImage: "radial-gradient(at center top, black, transparent)",
        maskImage: "radial-gradient(at center top, black, transparent)",
      }
    : {};

  return (
    <div className="relative h-full w-full">
      {/* <div
        className="h-full w-full"
        style={
          maskDisplayed
            ? {
                // WebkitMaskImage: "linear-gradient(black, transparent)",
                // maskImage: "linear-gradient(black, transparent)",
                WebkitMaskImage:
                  "radial-gradient(at center top, black, transparent)",
                maskImage: "radial-gradient(at center top, black, transparent)",
              }
            : {}
        }
      > */}
      <div
        className="h-full w-full"
        style={{ ...styles[type], ...maskStyle }}
      />
      {/* </div> */}
      <div className="absolute right-4 top-4 flex flex-col items-end space-y-3">
        <Select
          value={type}
          onValueChange={(v: Type) => {
            setType(v);
          }}
        >
          <SelectTrigger className="w-[180px] border-gray-100 shadow">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="grid">Grid</SelectItem>
              <SelectItem value="dotted">Dotted</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="show-mask"
            className="border-gray-500 bg-gray-50 shadow"
            checked={maskDisplayed}
            onCheckedChange={(v: boolean) => {
              setMaskDisplayed(v);
            }}
          />
          <label
            htmlFor="show-mask"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            添加遮罩
          </label>
        </div>
      </div>
    </div>
  );
}

const templateCode = `\
  // Grid
  <div style={{ 
    // Mask, can remove if not needed
    WebkitMaskImage: "radial-gradient(at center top, black, transparent)",
    maskImage: "radial-gradient(at center top, black, transparent)",

    backgroundImage:
      "linear-gradient(#bdbdc8 1px, transparent 1px), linear-gradient(to right, #bdbdc8 1px, transparent 1px)",
    backgroundSize: "30px 30px",
    backgroundPosition: "4px 4px",
  }}>
    Content
  </div>

  // Dotted
  <div style={{ 
    // Mask, can remove if not needed
    WebkitMaskImage: "radial-gradient(at center top, black, transparent)",
    maskImage: "radial-gradient(at center top, black, transparent)",

    backgroundImage: "radial-gradient(#bdbdc8 2px, transparent 2px)",
    backgroundSize: "30px 30px",
  }}>
    Content
  </div>
`;

export default Background;
export { templateCode };
