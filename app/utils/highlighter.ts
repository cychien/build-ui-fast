import { getHighlighter } from "shikiji";

type Highlighter = Awaited<ReturnType<typeof getHighlighter>>;

let highlighter: Awaited<ReturnType<typeof getHighlighter>>;

export const getHighlighterInstance = async () => {
  if (!highlighter) {
    highlighter = await getHighlighter({
      themes: ["material-theme"],
      langs: ["tsx"],
    });
  }
  return highlighter;
};

export type { Highlighter };
export { getHighlighterInstance as getHighlighter };
