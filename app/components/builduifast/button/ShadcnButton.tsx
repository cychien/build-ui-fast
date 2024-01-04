import { Button } from "~/components/shadcn/Button";

function Demo() {
  return (
    <div className="flex h-full flex-wrap items-center justify-center space-x-4 p-6">
      <Button>Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="ghost">Button</Button>
      <Button variant="link">Button</Button>
    </div>
  );
}

export default Demo;
export { Button };
