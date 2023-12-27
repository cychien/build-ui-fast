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
      <div className="col-start-2 h-12 overflow-auto bg-gray-100">
        Main Content
      </div>
    </div>
  );
}
