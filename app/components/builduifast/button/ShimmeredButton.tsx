function Button() {
  return (
    <>
      <style>{`
        @keyframes demo-shimmered-button {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
      <button className="relative inline-flex h-10 items-center justify-center overflow-hidden rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white shadow transition-colors before:absolute before:inset-0 before:-translate-x-full before:transform before:animate-[demo-shimmered-button_2s_ease-in-out_infinite] before:bg-[linear-gradient(-65deg,transparent_25%,rgba(249,250,251,.3)_50%,transparent_75%)] hover:enabled:bg-gray-900/80 disabled:pointer-events-none disabled:opacity-50">
        Button
      </button>
    </>
  );
}

function HoveredButton() {
  return (
    <button className="relative inline-flex h-10 items-center justify-center overflow-hidden rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white shadow transition-colors before:absolute before:inset-0 before:-translate-x-full before:transform before:duration-1000 hover:enabled:before:translate-x-full hover:enabled:before:bg-[linear-gradient(-65deg,transparent_25%,rgba(249,250,251,.3)_50%,transparent_75%)] disabled:pointer-events-none disabled:opacity-50">
      Button
    </button>
  );
}

function Demo() {
  return (
    <div className="flex h-full items-center justify-center space-x-4">
      <Button />
      <HoveredButton />
    </div>
  );
}

const templateCode = `\
  // Shimmer automatically
  <button className="relative inline-flex h-10 items-center justify-center overflow-hidden rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white shadow transition-colors before:absolute before:inset-0 before:-translate-x-full before:transform before:animate-[demo-shimmered-button_2s_ease-in-out_infinite] before:bg-[linear-gradient(-65deg,transparent_25%,rgba(249,250,251,.3)_50%,transparent_75%)] hover:enabled:bg-gray-900/80 disabled:pointer-events-none disabled:opacity-50">
    Button
  </button>

  // CSS, write in the proper place
  @keyframes demo-shimmered-button {
    100% {
      transform: translateX(100%);
    }
  }

  // Shimmer on hover
  <button className="relative inline-flex h-10 items-center justify-center overflow-hidden rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white shadow transition-colors before:absolute before:inset-0 before:-translate-x-full before:transform before:duration-1000 hover:enabled:before:translate-x-full hover:enabled:before:bg-[linear-gradient(-65deg,transparent_25%,rgba(249,250,251,.3)_50%,transparent_75%)] disabled:pointer-events-none disabled:opacity-50">
    Button
  </button>
`;

export default Demo;
export { templateCode };
