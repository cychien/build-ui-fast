import { ArrowRight } from "lucide-react";

function Announcement() {
  return (
    <a
      href="#"
      className="group inline-flex items-center rounded-lg border border-gray-300 bg-white px-3 py-1.5 shadow"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-gray-600" />
      </span>
      <span className="ml-3 flex items-center">
        <span className="text-sm font-medium text-gray-600">
          黑五特價！所有方案一律享 5 折優惠
        </span>
        <ArrowRight className="ml-2 size-4 text-gray-400 transition-[transform,_color] group-hover:translate-x-1 group-hover:text-gray-600" />
      </span>
    </a>
  );
}

function Demo() {
  return (
    <div className="flex h-full items-center justify-center">
      <Announcement />
    </div>
  );
}

const templateCode = `\
  import { ArrowRight } from "lucide-react";

  function Announcement() {
    return (
      <a
        href="#"
        className="group inline-flex items-center rounded-lg border border-gray-300 bg-white px-3 py-1.5 shadow"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gray-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-gray-600" />
        </span>
        <span className="ml-3 flex items-center">
          <span className="text-sm font-medium text-gray-600">
            黑五特價！所有方案一律享 5 折優惠
          </span>
          <ArrowRight className="ml-2 size-4 text-gray-400 transition-[transform,_color] group-hover:translate-x-1 group-hover:text-gray-600" />
        </span>
      </a>
    );
  }
`;

export default Demo;
export { templateCode, Announcement };
