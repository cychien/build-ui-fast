import { HTMLMotionProps, motion } from "framer-motion";
import * as React from "react";

const contentCount = 6;
const contentHeight = 80;
const activeContentWidth = "60%";
const activeContentHeight = 120;
const colsInRow = 2;

function Grid() {
  const [hoveredCardIndex, setHoveredCardIndex] = React.useState<number | null>(
    null,
  );

  const calculateStyle = React.useCallback(
    (index: number) => {
      if (!hoveredCardIndex) return;

      const hoveredCardRow = Math.ceil(hoveredCardIndex / colsInRow);
      const indexRow = Math.ceil(index / colsInRow);
      const totalRow = Math.ceil(contentCount / colsInRow);
      const isInSameRow = hoveredCardRow === indexRow;

      if (index === hoveredCardIndex) {
        return {
          width: activeContentWidth,
          height: activeContentHeight,
        };
      }

      if (isInSameRow) {
        return {
          width: 0,
          height: activeContentHeight,
        };
      }

      if (!isInSameRow) {
        const height =
          (contentHeight * totalRow - activeContentHeight) / (totalRow - 1);
        return {
          height,
        };
      }

      return {};
    },
    [hoveredCardIndex],
  );

  return (
    <div className="mx-auto flex max-w-md flex-wrap gap-3">
      {[...Array(contentCount).keys()].map((_, index) => (
        <GridChild
          key={index}
          text={(index + 1).toString()}
          style={calculateStyle(index + 1)}
          onMouseEnter={() => setHoveredCardIndex(index + 1)}
          onMouseLeave={() => setHoveredCardIndex(null)}
        />
      ))}
    </div>
  );
}

interface GridChildProps extends HTMLMotionProps<"div"> {
  text: string;
}

function GridChild({ text, style, ...props }: GridChildProps) {
  return (
    <motion.div
      layout
      className="flex w-[48%] flex-grow items-center justify-center rounded border-dashed border-gray-300 bg-gray-100 hover:bg-gray-200"
      style={{ borderWidth: 3, height: contentHeight, ...style }}
      {...props}
    >
      <motion.span layout="preserve-aspect">{text}</motion.span>
    </motion.div>
  );
}

function Demo() {
  return (
    <div className="p-6">
      <Grid />
    </div>
  );
}

const templateCode = `\
  import { motion } from "framer-motion";
  import * as React from "react";

  const contentCount = 6;
  const contentHeight = 80;
  const activeContentWidth = "60%";
  const activeContentHeight = 120;
  const colsInRow = 2;

  function Grid() {
    const [hoveredCardIndex, setHoveredCardIndex] = React.useState<number | null>(
      null,
    );

    const calculateStyle = React.useCallback(
      (index: number) => {
        if (!hoveredCardIndex) return;

        const hoveredCardRow = Math.ceil(hoveredCardIndex / colsInRow);
        const indexRow = Math.ceil(index / colsInRow);
        const totalRow = Math.ceil(contentCount / colsInRow);
        const isInSameRow = hoveredCardRow === indexRow;

        if (index === hoveredCardIndex) {
          return {
            width: activeContentWidth,
            height: activeContentHeight,
          };
        }

        if (isInSameRow) {
          return {
            width: 0,
            height: activeContentHeight,
          };
        }

        if (!isInSameRow) {
          const height =
            (contentHeight * totalRow - activeContentHeight) / (totalRow - 1);
          return {
            height,
          };
        }

        return {};
      },
      [hoveredCardIndex],
    );

    return (
      <div className="mx-auto flex max-w-md flex-wrap gap-3">
        {[...Array(contentCount).keys()].map((_, index) => (
          <GridChild
            key={index}
            text={(index + 1).toString()}
            style={calculateStyle(index + 1)}
            onMouseEnter={() => setHoveredCardIndex(index + 1)}
            onMouseLeave={() => setHoveredCardIndex(null)}
          />
        ))}
      </div>
    );
  }

  interface GridChildProps extends HTMLMotionProps<"div"> {
    text: string;
  }

  function GridChild({ text, style, ...props }: GridChildProps) {
    return (
      <motion.div
        layout
        className="flex w-[48%] flex-grow items-center justify-center rounded border-dashed border-gray-300 bg-gray-100 hover:bg-gray-200"
        style={{ borderWidth: 3, height: contentHeight, ...style }}
        {...props}
      >
        <motion.span layout="preserve-aspect">{text}</motion.span>
      </motion.div>
    );
  }
`;

export default Demo;
export { templateCode };
