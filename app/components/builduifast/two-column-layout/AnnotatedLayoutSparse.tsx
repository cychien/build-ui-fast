function Layout() {
  return (
    <div className="md:grid md:grid-cols-[220px_1fr] md:gap-x-16 lg:grid-cols-[260px_1fr] lg:gap-x-28 xl:grid-cols-[300px_1fr] xl:gap-x-40 2xl:gap-x-56">
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
