import { useParams } from "@remix-run/react";
import * as React from "react";

type Doc = {
  default: React.ComponentType;
};

export default function Route() {
  const { componentId } = useParams();

  // TODO: maybe put import.meta.glob in server side
  const doc = React.useMemo(() => {
    return import.meta.glob(`../../components/builduifast/**/doc.mdx`, {
      eager: true,
    })[`../../components/builduifast/${componentId}/doc.mdx`];
  }, [componentId]) as Doc;

  // TODO: should return 404
  if (!doc) return null;

  const DocComponent = doc.default;

  return (
    <div className="container mx-auto grid grid-cols-[210px,_1fr] gap-16">
      <div></div>
      <div>
        <DocComponent />
      </div>
    </div>
  );
}
