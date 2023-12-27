function Grid() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(min(150px,_100%),_1fr))] gap-3">
      <div className="h-12 bg-gray-100">1</div>
      <div className="h-12 bg-gray-100">2</div>
      <div className="h-12 bg-gray-100">3</div>
    </div>
  );
}
