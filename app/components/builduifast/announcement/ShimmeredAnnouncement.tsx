import { Sparkles } from "lucide-react";

function Announcement() {
  return (
    <>
      <style>{`
        @keyframes demo-shimmered-announcement-shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes demo-shimmered-announcement-shine {
          0% {
            filter: brightness(100%);
          }
          50% {
            filter: brightness(150%);
          }
          100% {
            filter: brightness(100%);
          }
        }
    `}</style>
      <div className="relative inline-block animate-[demo-shimmered-announcement-shine_4s_ease-in-out_infinite] overflow-hidden rounded-full bg-gray-900 px-4 py-1.5 before:absolute before:inset-0 before:-translate-x-full before:transform before:animate-[demo-shimmered-announcement-shimmer_4s_ease-in-out_infinite] before:bg-[linear-gradient(-65deg,transparent_25%,rgba(249,250,251,.25)_50%,transparent_75%)] before:filter">
        <p className="flex items-center text-sm font-medium text-gray-200">
          <Sparkles className="mr-2 size-4" />
          黑五特價！所有方案一律享 5 折優惠
        </p>
      </div>
    </>
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
  import { Sparkles } from "lucide-react";

  function Announcement() {
    return (
      <div className="relative inline-block animate-[demo-shimmered-announcement-shine_4s_ease-in-out_infinite] overflow-hidden rounded-full bg-gray-900 px-4 py-1.5 before:absolute before:inset-0 before:-translate-x-full before:transform before:animate-[demo-shimmered-announcement-shimmer_4s_ease-in-out_infinite] before:bg-[linear-gradient(-65deg,transparent_25%,rgba(249,250,251,.25)_50%,transparent_75%)] before:filter">
        <p className="flex items-center text-sm font-medium text-gray-200">
          <Sparkles className="mr-2 size-4" />
          黑五特價！所有方案一律享 5 折優惠
        </p>
      </div>
    );
  }

  // CSS, write in the proper place
  @keyframes demo-shimmered-announcement-shimmer {
    100% {
      transform: translateX(100%);
    }
  }

  @keyframes demo-shimmered-announcement-shine {
    0% {
      filter: brightness(100%);
    }
    50% {
      filter: brightness(150%);
    }
    100% {
      filter: brightness(100%);
    }
  }
`;

export default Demo;
export { templateCode };
