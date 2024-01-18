import { motion, useMotionValue, useTransform } from "framer-motion";
import * as React from "react";

const RESIZABLE_DEFAULT_WIDTH = 200;
const RESIZABLE_DEFAULT_HEIGHT = 200;

function Resizable() {
  const x = useMotionValue(0);
  const width = useTransform(x, (x) => `${RESIZABLE_DEFAULT_WIDTH + x}px`);
  const [startOffset, setStartOffset] = React.useState(0);

  return (
    <div className="relative inline-block">
      <motion.div className="h-[200px] bg-gray-100" style={{ width }}>
        123
      </motion.div>
      <motion.div
        onPan={(_, info) => x.set(startOffset + info.offset.x)}
        onPanEnd={(_, info) => setStartOffset(startOffset + info.offset.x)}
        className="absolute inset-y-0 left-full flex cursor-col-resize items-center px-2"
      >
        <div className="h-8 w-1.5 rounded-full bg-gray-200" />
      </motion.div>
    </div>
  );
}

function Demo() {
  const x = useMotionValue(0);
  const width = useTransform(x, (x) => `${RESIZABLE_DEFAULT_WIDTH + x}px`);
  const height = useTransform(x, (x) => `${RESIZABLE_DEFAULT_HEIGHT + x}px`);
  const [startOffset, setStartOffset] = React.useState(0);

  return (
    <div className="p-6">
      <div className="relative inline-block">
        <motion.img
          src="https://res.cloudinary.com/dgppby8lr/image/upload/v1704124379/build-ui-fast/demo_hjwkqa.avif"
          alt=""
          className="aspect-square rounded-lg object-cover"
          style={{ width, height }}
        ></motion.img>
        <motion.div
          onPan={(_, info) => x.set(startOffset + info.offset.x)}
          onPanEnd={(_, info) => setStartOffset(startOffset + info.offset.x)}
          className="group absolute inset-y-0 left-full flex cursor-col-resize items-center px-2"
        >
          <div className="h-8 w-1.5 rounded-full bg-gray-400 group-hover:bg-gray-500 group-active:bg-gray-600" />
        </motion.div>
      </div>
      <p>Image caption</p>
    </div>
  );
}

const templateCode = `\
  import { motion, useMotionValue, useTransform } from "framer-motion";
  import * as React from "react";

  const RESIZABLE_DEFAULT_WIDTH = 200;
  const RESIZABLE_DEFAULT_HEIGHT = 200;

  function Resizable() {
    const x = useMotionValue(0);
    const width = useTransform(x, (x) => \`\${RESIZABLE_DEFAULT_WIDTH + x}px\`);
    const height = useTransform(x, (x) => \`\${RESIZABLE_DEFAULT_HEIGHT + x}px\`);
    const [startOffset, setStartOffset] = React.useState(0);

    return (
      <div>
        <div className="relative inline-block">
          <motion.img
            src="https://res.cloudinary.com/dgppby8lr/image/upload/v1704124379/build-ui-fast/demo_hjwkqa.avif"
            alt=""
            className="aspect-square rounded-lg object-cover"
            style={{ width, height }}
          />
          <motion.div
            onPan={(_, info) => x.set(startOffset + info.offset.x)}
            onPanEnd={(_, info) => setStartOffset(startOffset + info.offset.x)}
            className="group absolute inset-y-0 left-full flex cursor-col-resize items-center px-2"
          >
            <div className="h-8 w-1.5 rounded-full bg-gray-400 group-hover:bg-gray-500 group-active:bg-gray-600" />
          </motion.div>
        </div>
        <p>Image caption</p>
      </div>
    );
  }
`;

export default Demo;
export { templateCode };
