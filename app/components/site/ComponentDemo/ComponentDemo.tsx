import { Button } from "../Button";
import { Check, Copy } from "lucide-react";
import * as React from "react";
import useMeasure from "react-use-measure";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/builduifast/tabs/Tabs";
import { cn } from "~/utils/cn";
import { Highlighter, getHighlighter } from "~/utils/highlighter";

type ComponentType = {
  variantName: string;
  templateCode: string;
  componentCode: string;
};

type ComponentDemoProps = {
  componentId: string;
  variantId: string;
  height?: number;
};

function ComponentDemo({
  componentId,
  variantId,
  height = 250,
}: ComponentDemoProps) {
  const [highlighter, setHighlighter] = React.useState<Highlighter>();
  const [isDragging, setIsDragging] = React.useState(false);
  const maxWidth = React.useRef<number>();
  const minWidth = 350;
  const [width, setWidth] = React.useState<number>();
  const [ref, bounds] = useMeasure();
  const startX = React.useRef<number>();
  const offsetX = React.useRef<number>();
  const lastXDuringDrag = React.useRef<number>();
  const shadowImage = React.useRef<HTMLImageElement>();

  // TODO: maybe put import.meta.glob in server side
  const component = React.useMemo(() => {
    return import.meta.glob(`../../builduifast/**/*.tsx`, {
      eager: true,
    })[`../../builduifast/${componentId}/${variantId}.tsx`];
  }, [componentId, variantId]) as ComponentType;

  // TODO: should return 404
  if (!component) return null;

  const templateCode = component.templateCode;
  const templateCodeHtml = React.useMemo(() => {
    if (!templateCode) return "";
    return (
      highlighter?.codeToHtml(templateCode, {
        lang: "tsx",
        theme: "material-theme",
      }) ?? ""
    );
  }, [highlighter, templateCode]);
  const componentCode = component.componentCode;
  const componentCodeHtml = React.useMemo(() => {
    if (!componentCode) return "";
    return (
      highlighter?.codeToHtml(componentCode, {
        lang: "tsx",
        theme: "material-theme",
      }) ?? ""
    );
  }, [highlighter, componentCode]);

  React.useEffect(() => {
    getHighlighter().then((highlighter) => {
      setHighlighter(highlighter);
    });
  }, []);

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
    <Tabs defaultValue="preview" className="w-full">
      <TabsList>
        <TabsTrigger value="preview">預覽</TabsTrigger>
        {templateCode && (
          <TabsTrigger value="templateCode">Template Code</TabsTrigger>
        )}
        {componentCode && (
          <TabsTrigger value="componentCode">Component Code</TabsTrigger>
        )}
      </TabsList>
      <TabsContent value="preview" className="w-full">
        <div
          ref={ref}
          className="relative inline-block w-full"
          style={{ width, height }}
        >
          <iframe
            src={`/components/demo/${componentId}/${variantId}`}
            className={cn("h-full w-full rounded-md border border-gray-200", {
              "pointer-events-none": isDragging,
            })}
            style={{ width }}
          />
          <div
            className="group absolute inset-y-0 left-full hidden cursor-ew-resize items-center px-2 sm:flex"
            onDragStart={(e) => {
              setIsDragging(true);
              offsetX.current =
                // @ts-ignore
                e.clientX - e.target.getBoundingClientRect().left;
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
            onDragOver={(e) => {
              e.preventDefault();
              e.dataTransfer.dropEffect = "move";
            }}
            draggable
          >
            <div
              className={cn(
                "h-8 w-1.5 rounded-full bg-gray-400 group-hover:bg-gray-500",
                { "bg-gray-500": isDragging },
              )}
            />
          </div>
        </div>
      </TabsContent>
      {templateCode && (
        <TabsContent value="templateCode" className="w-full">
          <div className="relative">
            <div className="absolute right-4 top-4">
              <CopyButton content={templateCode} />
            </div>
            <div
              // TODO: figure out width issue
              className="prose-code:block prose-code:w-5 prose-pre:mt-0 prose-pre:max-h-[550px] prose-pre:px-1 prose-pre:py-6"
              dangerouslySetInnerHTML={{ __html: templateCodeHtml }}
            />
          </div>
        </TabsContent>
      )}
      {componentCode && (
        <TabsContent value="componentCode" className="w-full">
          <div className="relative">
            <div className="absolute right-4 top-4">
              <CopyButton content={componentCode} />
            </div>
            <div
              // TODO: figure out width issue
              className="prose-code:block prose-code:w-5 prose-pre:mt-0 prose-pre:max-h-[550px] prose-pre:px-1 prose-pre:py-6"
              dangerouslySetInnerHTML={{ __html: componentCodeHtml }}
            />
          </div>
        </TabsContent>
      )}
    </Tabs>
  );
}

type CopyButtonProps = {
  content: string;
};

function CopyButton({ content }: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false);

  return (
    <Button
      className="bg-[#a9b7be]/30 text-gray-200 transition-colors hover:enabled:bg-[#a9b7be]/40"
      iconButton
      onClick={() => {
        navigator.clipboard.writeText(content).then(() => {
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 800);
        });
      }}
    >
      {copied ? <Check className="size-5" /> : <Copy className="size-5" />}
    </Button>
  );
}

export { ComponentDemo };
