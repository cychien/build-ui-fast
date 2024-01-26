import * as TabsPrimitive from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import * as React from "react";

// overflow

function Tabs() {
  const [tabValue, setTabValue] = React.useState("member");

  return (
    <TabsPrimitive.Root
      value={tabValue}
      onValueChange={(v) => {
        setTabValue(v);
      }}
    >
      <TabsPrimitive.List className="flex space-x-4 border-b border-gray-200">
        <TabsPrimitive.Trigger
          value="member"
          className="relative px-1 pb-3 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-gray-900"
        >
          成員
          {tabValue === "member" && (
            <motion.div
              layoutId="indicator"
              transition={{ type: "spring", duration: 0.6, bounce: 0.1 }}
              className="absolute inset-x-0 -bottom-px h-0.5 bg-gray-900"
            />
          )}
        </TabsPrimitive.Trigger>
        <TabsPrimitive.Trigger
          value="basic"
          className="relative px-1 pb-3 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-gray-900"
        >
          基本設定
          {tabValue === "basic" && (
            <motion.div
              layoutId="indicator"
              transition={{ type: "spring", duration: 0.6, bounce: 0.1 }}
              className="absolute inset-x-0 -bottom-px h-0.5 bg-gray-900"
            />
          )}
        </TabsPrimitive.Trigger>
        <TabsPrimitive.Trigger
          value="api-key"
          className="relative px-1 pb-3 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-gray-900"
        >
          API 金鑰
          {tabValue === "api-key" && (
            <motion.div
              layoutId="indicator"
              transition={{ type: "spring", duration: 0.6, bounce: 0.1 }}
              className="absolute inset-x-0 -bottom-px h-0.5 bg-gray-900"
            />
          )}
        </TabsPrimitive.Trigger>
        <TabsPrimitive.Trigger
          value="billing"
          className="relative px-1 pb-3 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-gray-900"
        >
          付款資訊
          {tabValue === "billing" && (
            <motion.div
              layoutId="indicator"
              transition={{ type: "spring", duration: 0.6, bounce: 0.1 }}
              className="absolute inset-x-0 -bottom-px h-0.5 bg-gray-900"
            />
          )}
        </TabsPrimitive.Trigger>
      </TabsPrimitive.List>
      <TabsPrimitive.Content value="member"></TabsPrimitive.Content>
      <TabsPrimitive.Content value="basic"></TabsPrimitive.Content>
      <TabsPrimitive.Content value="api-key"></TabsPrimitive.Content>
      <TabsPrimitive.Content value="billing"></TabsPrimitive.Content>
    </TabsPrimitive.Root>
  );
}

function Demo() {
  return (
    <div className="p-6">
      <Tabs />
    </div>
  );
}

const templateCode = `\
  import * as TabsPrimitive from "@radix-ui/react-tabs";
  import { motion } from "framer-motion";
  import * as React from "react";

  function Tabs() {
    const [tabValue, setTabValue] = React.useState("member");

    return (
      <TabsPrimitive.Root
        value={tabValue}
        onValueChange={(v) => {
          setTabValue(v);
        }}
      >
        <TabsPrimitive.List className="flex space-x-4 border-b border-gray-200">
          <TabsPrimitive.Trigger
            value="member"
            className="relative px-1 pb-3 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-gray-900"
          >
            成員
            {tabValue === "member" && (
              <motion.div
                layoutId="indicator"
                transition={{ type: "spring", duration: 0.6, bounce: 0.1 }}
                className="absolute inset-x-0 -bottom-px h-0.5 bg-gray-900"
              />
            )}
          </TabsPrimitive.Trigger>
          <TabsPrimitive.Trigger
            value="basic"
            className="relative px-1 pb-3 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-gray-900"
          >
            基本設定
            {tabValue === "basic" && (
              <motion.div
                layoutId="indicator"
                transition={{ type: "spring", duration: 0.6, bounce: 0.1 }}
                className="absolute inset-x-0 -bottom-px h-0.5 bg-gray-900"
              />
            )}
          </TabsPrimitive.Trigger>
          <TabsPrimitive.Trigger
            value="api-key"
            className="relative px-1 pb-3 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-gray-900"
          >
            API 金鑰
            {tabValue === "api-key" && (
              <motion.div
                layoutId="indicator"
                transition={{ type: "spring", duration: 0.6, bounce: 0.1 }}
                className="absolute inset-x-0 -bottom-px h-0.5 bg-gray-900"
              />
            )}
          </TabsPrimitive.Trigger>
          <TabsPrimitive.Trigger
            value="billing"
            className="relative px-1 pb-3 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-gray-900"
          >
            付款資訊
            {tabValue === "billing" && (
              <motion.div
                layoutId="indicator"
                transition={{ type: "spring", duration: 0.6, bounce: 0.1 }}
                className="absolute inset-x-0 -bottom-px h-0.5 bg-gray-900"
              />
            )}
          </TabsPrimitive.Trigger>
        </TabsPrimitive.List>
        <TabsPrimitive.Content value="member"></TabsPrimitive.Content>
        <TabsPrimitive.Content value="basic"></TabsPrimitive.Content>
        <TabsPrimitive.Content value="api-key"></TabsPrimitive.Content>
        <TabsPrimitive.Content value="billing"></TabsPrimitive.Content>
      </TabsPrimitive.Root>
    );
  }
`;

export default Demo;
export { templateCode };
