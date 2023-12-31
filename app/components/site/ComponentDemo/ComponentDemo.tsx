import * as React from "react";
import useMeasure from "react-use-measure";
import { cn } from "~/utils/cn";

type ComponentDemoProps = {
  componentId: string;
  variantId: string;
  className?: string;
};

function ComponentDemo({
  componentId,
  variantId,
  className,
}: ComponentDemoProps) {
  const [isDragging, setIsDragging] = React.useState(false);
  const maxWidth = React.useRef<number>();
  const minWidth = 300;
  const [width, setWidth] = React.useState<number>();
  const [ref, bounds] = useMeasure();
  const startX = React.useRef<number>();
  const offsetX = React.useRef<number>();
  const lastXDuringDrag = React.useRef<number>();
  const shadowImage = React.useRef<HTMLImageElement>();

  React.useEffect(() => {
    if (!width && bounds.width !== 0) {
      setWidth(bounds.width);
      maxWidth.current = bounds.width;
    }
  }, [bounds.width]);

  React.useEffect(() => {
    const img = new Image();
    img.src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
    shadowImage.current = img;
  }, []);

  return (
    <div ref={ref} className="relative inline-block w-full" style={{ width }}>
      <iframe
        src={`/components/demo/${componentId}/${variantId}`}
        className={cn(
          "w-full rounded-md border border-gray-200",
          { "pointer-events-none": isDragging },
          className,
        )}
        style={{ width }}
      />
      <div
        className="absolute inset-y-0 left-full hidden cursor-ew-resize items-center px-2 sm:flex"
        onDragStart={(e) => {
          setIsDragging(true);
          // @ts-ignore
          offsetX.current = e.clientX - e.target.getBoundingClientRect().left;
          startX.current = e.clientX;
          e.dataTransfer.setDragImage(shadowImage.current!, 0, 0);
        }}
        onDrag={(e) => {
          if (e.clientX !== 0 && lastXDuringDrag.current !== e.clientX) {
            const x = e.clientX - offsetX.current! - bounds.right;
            lastXDuringDrag.current = e.clientX;
            if (width! + x > maxWidth.current!) {
              setWidth(maxWidth.current);
            } else if (width! + x < minWidth) {
              setWidth(minWidth);
            } else {
              setWidth((prev) => prev! + x);
            }
          }
        }}
        onDragEnd={() => {
          setIsDragging(false);
        }}
        draggable
      >
        <div className="h-8 w-1.5 rounded-full bg-gray-400" />
      </div>
    </div>
  );
}

export { ComponentDemo };
