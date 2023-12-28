import { useParams } from "@remix-run/react";
import * as React from "react";

type ComponentType = {
  default: React.ComponentType;
};

export default function Route() {
  const { componentId, variantId } = useParams();

  // TODO: maybe put import.meta.glob in server side
  const component = React.useMemo(() => {
    return import.meta.glob(`../../components/builduifast/**/*.tsx`, {
      eager: true,
    })[`../../components/builduifast/${componentId}/${variantId}.tsx`];
  }, [componentId]) as ComponentType;

  // TODO: should return 404
  if (!component) return null;

  const Component = component.default;

  return <Component />;
}
