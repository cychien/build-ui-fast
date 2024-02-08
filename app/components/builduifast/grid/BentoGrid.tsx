import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/site/Select";
import { cn } from "~/utils/cn";

type GridProps = {
  children: React.ReactNode;
};

function Grid({ children }: GridProps) {
  return <div className="grid gap-3 md:grid-cols-3">{children}</div>;
}

type DemoGridChildProps = {
  children: React.ReactNode;
  className?: string;
};

function DemoGridChild({ children, className }: DemoGridChildProps) {
  return (
    <div
      className={cn(
        "flex h-20 min-w-[150px] flex-1 items-center justify-center rounded border-[3px] border-dashed border-gray-300 bg-gray-100",
        className,
      )}
    >
      {children}
    </div>
  );
}

function Demo() {
  const [direction, setDirection] = React.useState<"row" | "col">("row");

  return (
    <div className="p-6">
      {direction === "row" && (
        <div className="grid gap-3 md:grid-cols-3">
          <DemoGridChild>1</DemoGridChild>
          <DemoGridChild className="md:col-span-2">2</DemoGridChild>
          <DemoGridChild className="md:col-span-2">3</DemoGridChild>
          <DemoGridChild>4</DemoGridChild>
        </div>
      )}
      {direction === "col" && (
        <div className="grid gap-3 md:grid-flow-col md:grid-rows-2">
          <DemoGridChild className="md:row-span-2 md:h-full">1</DemoGridChild>
          <DemoGridChild>2</DemoGridChild>
          <DemoGridChild>3</DemoGridChild>
        </div>
      )}
      <div className="absolute right-4 top-4 flex flex-col items-end space-y-3">
        <Select
          value={direction}
          onValueChange={(v: "row" | "col") => {
            setDirection(v);
          }}
        >
          <SelectTrigger className="w-[180px] border-gray-100 shadow">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="row">span-col</SelectItem>
              <SelectItem value="col">span-row</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

const templateCode = `\
  // span-col
  <div className="grid gap-3 md:grid-cols-3">
    <div>1</div>
    <div className="md:col-span-2">2</div>
    <div className="md:col-span-2">3</div>
    <div>4</div>
  </div>

  // span-row
  <div className="grid gap-3 md:grid-flow-col md:grid-rows-2">
    <div className="md:row-span-2 md:h-full">1</div>
    <div>2</div>
    <div>3</div>
  </div>
`;

export default Demo;
export { templateCode };
