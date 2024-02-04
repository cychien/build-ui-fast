import { Button } from "../button/Button";
import { useAnimate, useInView } from "framer-motion";
import { RotateCcw } from "lucide-react";
import * as React from "react";

type StaggeredParagraphProps = {
  text: string;
  whileInView: () => void;
  whileNotInView: () => void;
  stagger: number;
  appearImmediately: boolean;
};

function StaggeredParagraph({
  text,
  whileInView,
  whileNotInView,
  stagger,
  appearImmediately,
}: StaggeredParagraphProps) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const animation = React.useRef<ReturnType<typeof animate>>();

  React.useEffect(() => {
    if (isInView) {
      whileInView();
    } else {
      whileNotInView();
      if (animation.current) {
        animation.current.complete();
      }
    }
  }, [isInView]);

  React.useEffect(() => {
    if (stagger === -1) return;
    const delay = stagger * 0.12;
    animation.current = animate(
      scope.current,
      { opacity: 1, transform: "translateY(0)" },
      { delay, duration: 0.6 },
    );
  }, [stagger]);

  React.useEffect(() => {
    if (appearImmediately) {
      if (animation.current) {
        animation.current.complete();
      } else {
        animate(scope.current, { opacity: 1, transform: "translateY(0)" });
      }
    }
  }, [appearImmediately]);

  return (
    <p className="translate-y-[10px] opacity-0" ref={scope}>
      {text}
    </p>
  );
}

function StaggeredParagraphsContainer() {
  const [visibleIndexes, setVisibleIndexes] = React.useState<number[]>([]);

  const paragraphs = [...Array(20).keys()].map(
    () =>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  );

  return (
    <div className="mx-auto max-w-xl space-y-6">
      {paragraphs.map((p, index) => (
        <StaggeredParagraph
          key={index}
          text={p}
          whileInView={() => {
            setVisibleIndexes((prev) => [...prev, index].sort());
          }}
          whileNotInView={() => {
            setVisibleIndexes((prev) => prev.filter((i) => i !== index));
          }}
          stagger={visibleIndexes.indexOf(index)}
          appearImmediately={index < visibleIndexes[0]}
        />
      ))}
    </div>
  );
}

function Demo() {
  const [renderCount, setRenderCount] = React.useState(1);

  return (
    <div className="p-6" key={renderCount}>
      <StaggeredParagraphsContainer />
      <Button
        variant="secondary"
        iconButton
        className="absolute right-4 top-4"
        onClick={() => {
          setRenderCount((prev) => prev + 1);
        }}
      >
        <RotateCcw className="size-4" />
      </Button>
    </div>
  );
}

const templateCode = `\
  import { useAnimate, useInView } from "framer-motion";
  import { RotateCcw } from "lucide-react";
  import * as React from "react";

  type StaggeredParagraphProps = {
    text: string;
    whileInView: () => void;
    whileNotInView: () => void;
    stagger: number;
    appearImmediately: boolean;
  };

  function StaggeredParagraph({
    text,
    whileInView,
    whileNotInView,
    stagger,
    appearImmediately,
  }: StaggeredParagraphProps) {
    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);
    const animation = React.useRef<ReturnType<typeof animate>>();

    React.useEffect(() => {
      if (isInView) {
        whileInView();
      } else {
        whileNotInView();
        if (animation.current) {
          animation.current.complete();
        }
      }
    }, [isInView]);

    React.useEffect(() => {
      if (stagger === -1) return;
      const delay = stagger * 0.12;
      animation.current = animate(
        scope.current,
        { opacity: 1, transform: "translateY(0)" },
        { delay, duration: 0.6 },
      );
    }, [stagger]);

    React.useEffect(() => {
      if (appearImmediately) {
        if (animation.current) {
          animation.current.complete();
        } else {
          animate(scope.current, { opacity: 1, transform: "translateY(0)" });
        }
      }
    }, [appearImmediately]);

    return (
      <p className="translate-y-[10px] opacity-0" ref={scope}>
        {text}
      </p>
    );
  }

  function StaggeredParagraphsContainer() {
    const [visibleIndexes, setVisibleIndexes] = React.useState<number[]>([]);

    const paragraphs = [...Array(20).keys()].map(
      () =>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    );

    return (
      <div className="mx-auto max-w-xl space-y-6">
        {paragraphs.map((p, index) => (
          <StaggeredParagraph
            key={index}
            text={p}
            whileInView={() => {
              setVisibleIndexes((prev) => [...prev, index].sort());
            }}
            whileNotInView={() => {
              setVisibleIndexes((prev) => prev.filter((i) => i !== index));
            }}
            stagger={visibleIndexes.indexOf(index)}
            appearImmediately={index < visibleIndexes[0]}
          />
        ))}
      </div>
    );
  }
`;

export default Demo;
export { templateCode };
