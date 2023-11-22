const tools = {
  tailwindcss: {
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Tailwind CSS</title>
        <path
          fill="currentColor"
          d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
        />
      </svg>
    ),
    label: "tailwindcss",
  },
};

type ToolsProps = {
  includes: string[];
};

function Tools({ includes }: ToolsProps) {
  return (
    <div className="flex items-center sapce-x-4">
      {includes.map((i) => (
        <div key={i} className="flex items-center space-x-1 text-slate-700">
          {/* FIXME */}
          <span className="flex-shrink-0 h-6 w-6 text-[#06B6D4]">
            {tools[i].icon}
          </span>
          <span>{tools[i].label}</span>
        </div>
      ))}
    </div>
  );
}

export { Tools };
