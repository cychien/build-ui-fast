type GridProps = {
  children: React.ReactNode;
};

function Grid({ children }: GridProps) {
  return <div className="flex flex-wrap gap-3">{children}</div>;
}

type DemoGridChildProps = {
  children: React.ReactNode;
};

function DemoGridChild({ children }: DemoGridChildProps) {
  return (
    <div className="flex h-20 min-w-[150px] flex-1 items-center justify-center rounded border-[3px] border-dashed border-gray-300 bg-gray-100">
      {children}
    </div>
  );
}

function Demo() {
  return (
    <div className="p-6">
      <Grid>
        <DemoGridChild>1</DemoGridChild>
        <DemoGridChild>2</DemoGridChild>
        <DemoGridChild>3</DemoGridChild>
        <DemoGridChild>4</DemoGridChild>
        <DemoGridChild>5</DemoGridChild>
        <DemoGridChild>6</DemoGridChild>
        <DemoGridChild>7</DemoGridChild>
        <DemoGridChild>8</DemoGridChild>
        <DemoGridChild>9</DemoGridChild>
      </Grid>
    </div>
  );
}

const templateCode = `\
  <div className="flex flex-wrap gap-3">
    <div className="flex-1">1</div>
    <div className="flex-1">2</div>
    <div className="flex-1">3</div>
  </div>
`;

export default Demo;
export { templateCode };
