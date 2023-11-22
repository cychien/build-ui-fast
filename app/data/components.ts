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
    id: "announcement",
    name: "Announcement",
    icon: "",
    variations: [
      {
        id: "with-shimmer",
        name: "帶有光澤",
      },
    ],
  },
];

export const componentsObject = transformArrayToObject(componentsArray);
