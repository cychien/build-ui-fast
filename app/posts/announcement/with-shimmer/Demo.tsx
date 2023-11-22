import { Area, Paragraph, Sheet, Title } from "~/components/ComponentShowcase";

function Demo() {
  return (
    <Area>
      <Sheet className="px-8 pt-8 md:pt-16">
        <Annoucement />
        <div className="mt-3 md:mt-4 space-y-4">
          <Title />
          <Paragraph lines={2} />
        </div>
      </Sheet>
    </Area>
  );
}

function Annoucement() {
  return (
    <>
      <style>{`
        @keyframes anno-shimmer-shimmer {
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes anno-shimmer-shine {
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
      <div className="before:animate-[anno-shimmer-shimmer_4s_ease-in-out_infinite] animate-[anno-shimmer-shine_4s_ease-in-out_infinite] relative inline-block overflow-hidden rounded-full bg-slate-900 px-4 py-1.5 before:absolute before:inset-0 before:-translate-x-full before:transform before:bg-gradient-to-r before:from-sky-400/0 before:via-sky-400/40 before:to-sky-400/0 before:filter">
        <p className="relative text-xs font-medium text-sky-200">
          Meet Whimsy AI: your playful, creative coding pal!
        </p>
      </div>
    </>
  );
}

export { Demo };
