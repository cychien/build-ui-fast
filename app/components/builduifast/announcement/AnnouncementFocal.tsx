import { ArrowRight } from "lucide-react";

function Announcement() {
  return (
    <a
      href="#"
      className="group inline-flex items-center rounded-full border border-gray-300 bg-gray-50 py-1 pl-1 pr-2.5 hover:bg-gray-100"
    >
      <span className="rounded-full bg-gray-800 px-2 py-0.5 text-sm font-medium text-gray-50">
        版本 3.0
      </span>

      <span className="ml-2 flex items-center">
        <span className="text-sm font-medium text-gray-600">
          看看新增了哪些酷東西
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
        className="group inline-flex items-center rounded-full border border-gray-300 bg-gray-50 py-1 pl-1 pr-2.5 hover:bg-gray-100"
      >
        <span className="rounded-full bg-gray-800 px-2 py-0.5 text-sm font-medium text-gray-50">
          版本 3.0
        </span>

        <span className="ml-2 flex items-center">
          <span className="text-sm font-medium text-gray-600">
            看看新增了哪些酷東西
          </span>
          <ArrowRight className="ml-2 size-4 text-gray-400 transition-[transform,_color] group-hover:translate-x-1 group-hover:text-gray-600" />
        </span>
      </a>
    );
  }
`;

export default Demo;
export { templateCode };
