import { Button } from "../button/Button";
import { RotateCcw } from "lucide-react";
import * as React from "react";

function EntryAnimation() {
  return (
    <>
      <style>{`
        @keyframes demo-stagger-enter {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: none;
          }
        }
        
        .stagger-enter * {
          --stagger: 0;

          animation: demo-stagger-enter 0.6s both;
          animation-delay: calc(var(--stagger) * 120ms);
        }
    `}</style>
      <div className="stagger-enter mx-auto max-w-xl space-y-6">
        <p>This is an example:</p>
        <p style={{ "--stagger": 1 } as React.CSSProperties}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p style={{ "--stagger": 2 } as React.CSSProperties}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <p style={{ "--stagger": 3 } as React.CSSProperties}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <p style={{ "--stagger": 4 } as React.CSSProperties}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </div>
    </>
  );
}

const templateCode = `\
  <div className="stagger-enter space-y-6">
    <p>This is an example:</p>
    <p style={{ "--stagger": 1 } as React.CSSProperties}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <p style={{ "--stagger": 2 } as React.CSSProperties}>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.
    </p>
    <p style={{ "--stagger": 3 } as React.CSSProperties}>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.
    </p>
    <p style={{ "--stagger": 4 } as React.CSSProperties}>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
      accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
      ab illo inventore veritatis et quasi architecto beatae vitae dicta
      sunt explicabo.
    </p>
  </div>

  // CSS, write in the proper place
  @keyframes demo-stagger-enter {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  
  .stagger-enter * {
    --stagger: 0;

    animation: demo-stagger-enter 0.6s both;
    animation-delay: calc(var(--stagger) * 120ms);
  }
`;

function Demo() {
  const [renderCount, setRenderCount] = React.useState(1);

  return (
    <div className="p-6" key={renderCount}>
      <EntryAnimation />
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

export default Demo;
export { templateCode };
