import { Mails } from "lucide-react";

function TextUpCard() {
  return (
    <div className="group relative h-[300px] w-full rounded-md border border-gray-200 bg-gray-50 p-6 shadow sm:w-[400px]">
      <div className="absolute inset-x-6 bottom-6">
        <Mails className="size-8 text-gray-400 transition-transform duration-300 group-hover:scale-75" />
        <div className="mt-2 text-xl font-semibold">Card Header</div>
        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 group-hover:grid-rows-[1fr] group-hover:opacity-100">
          <p className="mt-2 overflow-hidden text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
}

function Demo() {
  return (
    <div className="flex h-full items-center justify-center p-6">
      <TextUpCard />
    </div>
  );
}

const templateCode = `\
  import { Mails } from "lucide-react";

  function TextUpCard() {
    return (
      <div className="group relative h-[300px] w-full rounded-md border border-gray-200 bg-gray-50 p-6 shadow sm:w-[400px]">
        <div className="absolute inset-x-6 bottom-6">
          <Mails className="size-8 text-gray-400 transition-transform duration-300 group-hover:scale-75" />
          <div className="mt-2 text-xl font-semibold">Card Header</div>
          <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 group-hover:grid-rows-[1fr] group-hover:opacity-100">
            <p className="mt-2 overflow-hidden text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    );
  }
`;

export default Demo;
export { templateCode };
