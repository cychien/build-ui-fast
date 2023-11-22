import { cn } from "~/utils/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Area({ className, ...props }: Props) {
  return (
    <div
      className={cn(
        "not-prose bg-slate-100 rounded-lg h-[230px] md:h-[280px] flex justify-center border border-slate-200 overflow-hidden",
        className
      )}
      {...props}
    />
  );
}

function Sheet({ className, ...props }: Props) {
  return (
    <div
      className={cn(
        "bg-white w-11/12 md:w-[550px] shadow-lg h-[300px]",
        className
      )}
      {...props}
    />
  );
}

type PlaceholderProps = {
  className?: string;
  lines?: number;
};

function Title({ className, lines = 1 }: PlaceholderProps) {
  const numbers = Array.from({ length: lines }, (_, index) => index + 1);

  if (lines === 1) {
    return (
      <div className={cn("h-12 bg-slate-100 rounded-md md:w-5/6", className)} />
    );
  }

  return (
    <div className="space-y-2">
      {numbers.map((n) => (
        <div
          key={n}
          className={cn(
            "h-12 bg-slate-100 rounded-md",
            n === lines ? "w-1/3" : "w-5/6",
            className
          )}
        />
      ))}
    </div>
  );
}

function Paragraph({ className, lines = 1 }: PlaceholderProps) {
  const numbers = Array.from({ length: lines }, (_, index) => index + 1);

  if (lines === 1) {
    return (
      <div className={cn("h-4 bg-slate-100 rounded-md md:w-5/6", className)} />
    );
  }

  return (
    <div className="space-y-2">
      {numbers.map((n) => (
        <div
          key={n}
          className={cn(
            "h-4 bg-slate-100 rounded-md",
            n === lines ? "w-1/3" : "w-5/6",
            className
          )}
        />
      ))}
    </div>
  );
}

export { Area, Sheet, Title, Paragraph };
