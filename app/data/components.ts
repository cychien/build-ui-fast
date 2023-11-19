interface ComponentVariation {
  id: string;
  name: string;
}

interface Component {
  id: string;
  name: string;
  icon: string;
  variations: ComponentVariation[];
}

interface TransformedComponents {
  [key: string]: {
    icon: string;
    variations: ComponentVariation[];
  };
}

function transformArrayToObject(
  components: Component[]
): TransformedComponents {
  const result: TransformedComponents = {};
  components.forEach((component) => {
    result[component.name] = {
      icon: component.icon,
      variations: component.variations,
    };
  });
  return result;
}

export const componentsArray: Component[] = [
  {
    id: "tabs",
    name: "Tabs",
    icon: "",
    variations: [
      { id: "pill-transition-tabs", name: "背景移動 Tabs" },
      { id: "tabs-2", name: "超級 Tabs" },
      { id: "tabs-3", name: "無敵 Tabs" },
    ],
  },
  {
    id: "avatar",
    name: "Avatar",
    icon: "",
    variations: [],
  },
];

export const componentsObject = transformArrayToObject(componentsArray);
