import * as React from "react";
import { ComponentsSidebar } from "./ComponentsSidebar";
import { useParams } from "@remix-run/react";

type Post = {
  default: React.ComponentType;
  tableOfContents: Array<{ value: string; children: Array<{ value: string }> }>;
};

export default function Route() {
  const { componentId, variationId } = useParams();

  const post = React.useMemo(() => {
    return import.meta.glob(`../../posts/**/*.mdx`, {
      eager: true,
    })[`../../posts/${componentId}/${variationId}/index.mdx`];
  }, [componentId, variationId]) as Post;

  const PostComponent = post.default;
  const postTOC = post.tableOfContents;

  return (
    <div className="pt-8 container mx-auto flex h-full">
      <aside className="w-[200px] hidden xl:block pr-6 border-r border-slate-200">
        <div className="sticky top-12">
          <ComponentsSidebar
            defaultActiveComponentID={componentId}
            defaultActiveVariationID={variationId}
          />
        </div>
      </aside>
      <main className="flex-1 pr-0 pl-0 xl:pl-10 lg:pr-10">
        <article className="prose prose-slate max-w-none prose-h1:mt-7 prose-h1:text-2xl prose-h2:text-lg prose-h2:mt-8 prose-h2:mb-5 first-of-type:prose-h2:mt-10 prose-pre:px-0 prose-pre:rounded-lg prose-code:leading-loose prose-pre:bg-slate-800">
          <PostComponent />
        </article>
      </main>
      <aside className="w-[200px] hidden lg:block pl-6 border-l border-slate-200">
        <div className="text-sm sticky top-12">
          <div className="text-slate-400">段落</div>
          <div className="text-slate-500 mt-4 space-y-3">
            {postTOC[0].children.map((h1) => (
              // text-slate-900 font-medium
              // TODO
              <div key={h1.value}>{h1.value}</div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
