function Layout() {
  return (
    <div className="md:grid md:grid-cols-[220px_1fr] md:gap-x-16 lg:grid-cols-[260px_1fr] xl:grid-cols-[300px_1fr]">
      <Row />
      <Row />
      <Row />
    </div>
  );
}

function Row() {
  return (
    <div className="py-8 first-of-type:pt-0 max-md:space-y-8 md:col-span-2 md:grid md:grid-cols-subgrid">
      <div>Annotation</div>
      <div className="col-start-2 overflow-auto">Main Content</div>
    </div>
  );
}

function Demo() {
  return (
    <div className="p-6">
      <div className="md:grid md:grid-cols-[220px_1fr] md:gap-x-16 lg:grid-cols-[260px_1fr] xl:grid-cols-[300px_1fr]">
        <div className="py-4 first-of-type:pt-0 max-md:space-y-4 md:col-span-2 md:grid md:grid-cols-subgrid">
          <div className="flex h-20 items-center justify-center rounded border-[3px] border-dashed border-gray-300 bg-white">
            Annotation
          </div>
          <div className="col-start-2 flex h-36 items-center justify-center overflow-auto rounded border-[3px] border-dashed border-gray-300 bg-gray-100">
            Main Content
          </div>
        </div>
        <div className="py-4 first-of-type:pt-0 max-md:space-y-4 md:col-span-2 md:grid md:grid-cols-subgrid">
          <div className="flex h-20 items-center justify-center rounded border-[3px] border-dashed border-gray-300 bg-white">
            Annotation
          </div>
          <div className="col-start-2 flex h-36 items-center justify-center overflow-auto rounded border-[3px] border-dashed border-gray-300 bg-gray-100">
            Main Content
          </div>
        </div>
        <div className="py-4 first-of-type:pt-0 max-md:space-y-4 md:col-span-2 md:grid md:grid-cols-subgrid ">
          <div className="flex h-20 items-center justify-center rounded border-[3px] border-dashed border-gray-300 bg-white">
            Annotation
          </div>
          <div className="col-start-2 flex h-36 items-center justify-center overflow-auto rounded border-[3px] border-dashed border-gray-300 bg-gray-100">
            Main Content
          </div>
        </div>
      </div>
    </div>
  );
}

const templateCode = `\
  <div className="md:grid md:grid-cols-[220px_1fr] md:gap-x-16 lg:grid-cols-[260px_1fr] xl:grid-cols-[300px_1fr]">
    <div className="py-8 first-of-type:pt-0 max-md:space-y-8 md:col-span-2 md:grid md:grid-cols-subgrid">
      <div>Annotation</div>
      <div className="col-start-2 overflow-auto">Main Content</div>
    </div>    
  </div>
`;

export default Demo;
export { templateCode };
