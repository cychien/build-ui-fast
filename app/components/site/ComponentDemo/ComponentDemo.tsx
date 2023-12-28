type ComponentDemoProps = {
  componentId: string;
  variantId: string;
};

function ComponentDemo({ componentId, variantId }: ComponentDemoProps) {
  return (
    <iframe
      src={`/components/demo/${componentId}/${variantId}`}
      className="w-full border border-gray-100"
    />
  );
}

export { ComponentDemo };
