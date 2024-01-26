import * as TabsPrimitive from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/site/Select";

// TODO: no longer depend on bg-white

function Tabs() {
  const [tabValue, setTabValue] = React.useState("member");

  return (
    <div className="bg-white">
      <TabsPrimitive.Root
        value={tabValue}
        onValueChange={(v) => {
          setTabValue(v);
        }}
        className="hidden sm:block"
      >
        <TabsPrimitive.List className="flex space-x-1">
          <TabsPrimitive.Trigger
            value="member"
            className="relative px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-gray-900"
          >
            成員
            {tabValue === "member" && (
              <motion.div
                layoutId="indicator"
                transition={{ type: "spring", duration: 0.6, bounce: 0.1 }}
                className="absolute inset-0 z-10 bg-white mix-blend-difference"
                style={{ borderRadius: 9999 }}
              />
            )}
          </TabsPrimitive.Trigger>
          <TabsPrimitive.Trigger
            value="basic"
            className="relative px-3 py-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-gray-900"
          >
            基本設定
            {tabValue === "basic" && (
              <motion.div
                layoutId="indicator"
                transition={{ type: "spring", duration: 0.6, bounce: 0.1 }}
                className="absolute inset-0 z-10 bg-white mix-blend-difference"
                style={{ borderRadius: 9999 }}
              />
            )}
          </TabsPrimitive.Trigger>
          <TabsPrimitive.Trigger
            value="api-key"
            className="relative px-3 py-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-gray-900"
          >
            API 金鑰
            {tabValue === "api-key" && (
              <motion.div
                layoutId="indicator"
                transition={{ type: "spring", duration: 0.6, bounce: 0.1 }}
                className="absolute inset-0 z-10 bg-white mix-blend-difference"
                style={{ borderRadius: 9999 }}
              />
            )}
          </TabsPrimitive.Trigger>
          <TabsPrimitive.Trigger
            value="billing"
            className="relative px-3 py-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-gray-900"
          >
            付款資訊
            {tabValue === "billing" && (
              <motion.div
                layoutId="indicator"
                transition={{ type: "spring", duration: 0.6, bounce: 0.1 }}
                className="absolute inset-0 z-10 bg-white mix-blend-difference"
                style={{ borderRadius: 9999 }}
              />
            )}
          </TabsPrimitive.Trigger>
        </TabsPrimitive.List>
        <TabsPrimitive.Content value="member"></TabsPrimitive.Content>
        <TabsPrimitive.Content value="basic"></TabsPrimitive.Content>
        <TabsPrimitive.Content value="api-key"></TabsPrimitive.Content>
        <TabsPrimitive.Content value="billing"></TabsPrimitive.Content>
      </TabsPrimitive.Root>

      {/* Display on small screen */}
      <div className="sm:hidden">
        <Select
          value={tabValue}
          onValueChange={(v) => {
            setTabValue(v);
          }}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="member">成員</SelectItem>
            <SelectItem value="basic">基本設定</SelectItem>
            <SelectItem value="api-key">API 金鑰</SelectItem>
            <SelectItem value="billing">付款資訊</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
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
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "~/components/site/Select";

  function Tabs() {
    const [tabValue, setTabValue] = React.useState("member");

    return (
      <div className="bg-white">
        <TabsPrimitive.Root
          value={tabValue}
          onValueChange={(v) => {
            setTabValue(v);
          }}
          className="hidden sm:block"
        >
          <TabsPrimitive.List className="flex space-x-1">
            <TabsPrimitive.Trigger
              value="member"
              className="relative px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-gray-900"
            >
              成員
              {tabValue === "member" && (
                <motion.div
                  layoutId="indicator"
                  transition={{ type: "spring", duration: 0.6, bounce: 0.1 }}
                  className="absolute inset-0 z-10 bg-white mix-blend-difference"
                  style={{ borderRadius: 9999 }}
                />
              )}
            </TabsPrimitive.Trigger>
            <TabsPrimitive.Trigger
              value="basic"
              className="relative px-3 py-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-gray-900"
            >
              基本設定
              {tabValue === "basic" && (
                <motion.div
                  layoutId="indicator"
                  transition={{ type: "spring", duration: 0.6, bounce: 0.1 }}
                  className="absolute inset-0 z-10 bg-white mix-blend-difference"
                  style={{ borderRadius: 9999 }}
                />
              )}
            </TabsPrimitive.Trigger>
            <TabsPrimitive.Trigger
              value="api-key"
              className="relative px-3 py-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-gray-900"
            >
              API 金鑰
              {tabValue === "api-key" && (
                <motion.div
                  layoutId="indicator"
                  transition={{ type: "spring", duration: 0.6, bounce: 0.1 }}
                  className="absolute inset-0 z-10 bg-white mix-blend-difference"
                  style={{ borderRadius: 9999 }}
                />
              )}
            </TabsPrimitive.Trigger>
            <TabsPrimitive.Trigger
              value="billing"
              className="relative px-3 py-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-gray-900"
            >
              付款資訊
              {tabValue === "billing" && (
                <motion.div
                  layoutId="indicator"
                  transition={{ type: "spring", duration: 0.6, bounce: 0.1 }}
                  className="absolute inset-0 z-10 bg-white mix-blend-difference"
                  style={{ borderRadius: 9999 }}
                />
              )}
            </TabsPrimitive.Trigger>
          </TabsPrimitive.List>
          <TabsPrimitive.Content value="member"></TabsPrimitive.Content>
          <TabsPrimitive.Content value="basic"></TabsPrimitive.Content>
          <TabsPrimitive.Content value="api-key"></TabsPrimitive.Content>
          <TabsPrimitive.Content value="billing"></TabsPrimitive.Content>
        </TabsPrimitive.Root>

        {/* Display on small screen */}
        <div className="sm:hidden">
          <Select
            value={tabValue}
            onValueChange={(v) => {
              setTabValue(v);
            }}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="member">成員</SelectItem>
              <SelectItem value="basic">基本設定</SelectItem>
              <SelectItem value="api-key">API 金鑰</SelectItem>
              <SelectItem value="billing">付款資訊</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    );
  }
`;

export default Demo;
export { templateCode };
