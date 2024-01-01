import { Link, useParams } from "@remix-run/react";
import { ArrowLeft } from "lucide-react";
import * as React from "react";
import { componentNames } from "~/data/component";
import { cn } from "~/utils/cn";

type Doc = {
  default: React.ComponentType;
  tableOfContents: Array<{ value: string; children: Array<{ value: string }> }>;
};

export default function Route() {
  const { componentId } = useParams();

  if (!componentId) return null;

  // TODO: maybe put import.meta.glob in server side
  const doc = React.useMemo(() => {
    return import.meta.glob(`../../components/builduifast/**/doc.mdx`, {
      eager: true,
    })[`../../components/builduifast/${componentId}/doc.mdx`];
  }, [componentId]) as Doc;

  // TODO: should return 404
  if (!doc) return null;

  const DocComponent = doc.default;
  const docToc = doc.tableOfContents;

  return (
    <div className="container mx-auto">
      <div className="border-b border-gray-200 pb-8 pt-4 md:pb-12 md:pt-8">
        <Link to={`/components`} className="flex text-primary-600">
          <ArrowLeft className="size-5" />
          <span className="ml-1.5 text-sm font-medium">回到 components</span>
        </Link>
        <h1 className="mt-3 text-3xl font-semibold md:mt-4">
          {componentNames[componentId]}
        </h1>
      </div>

      <div className="grid grid-cols-1 items-start gap-16 py-8 lg:grid-cols-[210px,_1fr]">
        <ul className="sticky top-8 hidden space-y-1 lg:block">
          {docToc.map((h2, index) => (
            <li
              key={index}
              className={cn(
                "rounded-md text-gray-500",
                index === 0
                  ? "bg-gray-100 text-gray-700"
                  : "hover:bg-gray-50 hover:text-gray-600",
              )}
            >
              <Link to="#" className="block px-3 py-2 text-sm font-medium">
                {h2.value}
              </Link>
            </li>
          ))}
        </ul>

        <main className="prose max-w-none prose-h2:mb-3 prose-h2:text-base prose-h2:font-medium">
          <DocComponent />
        </main>
      </div>
    </div>
  );
}
