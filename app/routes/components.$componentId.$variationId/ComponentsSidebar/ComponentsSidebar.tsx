import { IconPlaceholder } from "~/components/IconPlaceholder";
import { componentsArray } from "~/data/components";
import { cn } from "~/utils/cn";

type ComponentsSidebarProps = {
  defaultActiveComponentID?: string;
  defaultActiveVariationID?: string;
};

function ComponentsSidebar({
  defaultActiveComponentID,
  defaultActiveVariationID,
}: ComponentsSidebarProps) {
  return (
    <div className="space-y-4 text-sm">
      {componentsArray.map((component) => (
        <div key={component.id}>
          <div className="flex items-center space-x-1">
            <IconPlaceholder />
            <div
              className={cn(
                defaultActiveComponentID === component.id
                  ? "font-medium"
                  : "bg-slate-700"
              )}
            >
              {component.name}
            </div>
          </div>

          {component.id === defaultActiveComponentID && (
            <div className="space-y-1 mt-4">
              {component.variations.map((variation) => (
                <div
                  key={variation.id}
                  className={cn(
                    "flex items-center pl-6 py-2 rounded-md",
                    defaultActiveVariationID === variation.id
                      ? "font-bold bg-slate-100"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-700 cursor-pointer"
                  )}
                >
                  {variation.name}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export { ComponentsSidebar };
