import { cn } from "../utils";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { animate } from "motion";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/site/Select";

const tabs = ["member", "basic", "api-key", "billing"];

function Tabs() {
  const [tabValue, setTabValue] = React.useState("member");
  const [rightOffset, setRightOffset] = React.useState(0);
  const [leftOffset, setLeftOffset] = React.useState(0);
  const [showHiddenTabs, setShowHiddenTabs] = React.useState(false);
  const hiddenTabsRef = React.useRef<HTMLDivElement>(null);
  const elements = React.useRef(
    new Map<string, number>(tabs.map((key) => [key, 0])),
  );

  return (
    <div>
      <div className="relative hidden sm:inline-block">
        <TabsPrimitive.Root
          value={tabValue}
          onValueChange={(v) => {
            if (!hiddenTabsRef.current) return;
            let nextRightOffset = 0;
            let nextLeftOffset = 0;
            const tabIndex = tabs.indexOf(v);
            for (let i = 0; i < tabs.length; i++) {
              if (i < tabIndex) {
                nextLeftOffset += elements.current.get(tabs[i]) ?? 0;
              }
              if (i > tabIndex) {
                nextRightOffset += elements.current.get(tabs[i]) ?? 0;
              }
            }
            animate(
              hiddenTabsRef.current,
              {
                clipPath: [
                  showHiddenTabs
                    ? `inset(0px calc(${rightOffset}px) 0px calc(${leftOffset}px) round 9999px)`
                    : `inset(0px calc(100% - ${
                        elements.current.get("member") ?? 0
                      }px) 0px 0px round 9999px)`,
                  `inset(0px calc(${nextRightOffset}px) 0px calc(${nextLeftOffset}px) round 9999px)`,
                ],
              },
              { duration: 0.4 },
            );
            setTabValue(v);
            setShowHiddenTabs(true);
            setRightOffset(nextRightOffset);
            setLeftOffset(nextLeftOffset);
          }}
        >
          <TabsPrimitive.List className="flex">
            <TabsPrimitive.Trigger
              value="member"
              className={cn(
                "relative px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 disabled:pointer-events-none disabled:opacity-50",
                {
                  "data-[state=active]:text-white": !showHiddenTabs,
                },
              )}
              ref={(element) => {
                if (element) {
                  elements.current.set("member", element.offsetWidth);
                } else {
                  elements.current.delete("member");
                }
              }}
            >
              成員
              {!showHiddenTabs && (
                <div
                  className="absolute inset-0 -z-10 bg-gray-900"
                  style={{ borderRadius: 9999 }}
                />
              )}
            </TabsPrimitive.Trigger>
            <TabsPrimitive.Trigger
              value="basic"
              className="relative px-3 py-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 disabled:pointer-events-none disabled:opacity-50"
              ref={(element) => {
                if (element) {
                  elements.current.set("basic", element.offsetWidth);
                } else {
                  elements.current.delete("basic");
                }
              }}
            >
              基本設定
            </TabsPrimitive.Trigger>
            <TabsPrimitive.Trigger
              value="api-key"
              className="relative px-3 py-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 disabled:pointer-events-none disabled:opacity-50"
              ref={(element) => {
                if (element) {
                  elements.current.set("api-key", element.offsetWidth);
                } else {
                  elements.current.delete("api-key");
                }
              }}
            >
              API 金鑰
            </TabsPrimitive.Trigger>
            <TabsPrimitive.Trigger
              value="billing"
              className="relative px-3 py-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 disabled:pointer-events-none disabled:opacity-50"
              ref={(element) => {
                if (element) {
                  elements.current.set("billing", element.offsetWidth);
                } else {
                  elements.current.delete("billing");
                }
              }}
            >
              付款資訊
            </TabsPrimitive.Trigger>
          </TabsPrimitive.List>
          <TabsPrimitive.Content value="member"></TabsPrimitive.Content>
          <TabsPrimitive.Content value="basic"></TabsPrimitive.Content>
          <TabsPrimitive.Content value="api-key"></TabsPrimitive.Content>
          <TabsPrimitive.Content value="billing"></TabsPrimitive.Content>
        </TabsPrimitive.Root>
        <TabsPrimitive.Root
          value={tabValue}
          ref={hiddenTabsRef}
          aria-hidden
          className="absolute inset-0 bg-gray-900 will-change-auto"
          style={
            !showHiddenTabs
              ? {
                  clipPath: "inset(0px 100% 0px 0px round 9999px)",
                }
              : {}
          }
        >
          <TabsPrimitive.List className="flex">
            <TabsPrimitive.Trigger
              value="member"
              className="px-3 py-2 text-sm font-medium text-white"
            >
              成員
            </TabsPrimitive.Trigger>
            <TabsPrimitive.Trigger
              value="basic"
              className="px-3 py-2 text-sm font-medium text-white"
            >
              基本設定
            </TabsPrimitive.Trigger>
            <TabsPrimitive.Trigger
              value="api-key"
              className="px-3 py-2 text-sm font-medium text-white"
            >
              API 金鑰
            </TabsPrimitive.Trigger>
            <TabsPrimitive.Trigger
              value="billing"
              className="px-3 py-2 text-sm font-medium text-white"
            >
              付款資訊
            </TabsPrimitive.Trigger>
          </TabsPrimitive.List>
        </TabsPrimitive.Root>
      </div>

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
  import { cn } from "~/utils";
  import * as TabsPrimitive from "@radix-ui/react-tabs";
  import { animate } from "motion";
  import * as React from "react";
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "~/components/ui/Select";

  const tabs = ["member", "basic", "api-key", "billing"];

  function Tabs() {
    const [tabValue, setTabValue] = React.useState("member");
    const [rightOffset, setRightOffset] = React.useState(0);
    const [leftOffset, setLeftOffset] = React.useState(0);
    const [showHiddenTabs, setShowHiddenTabs] = React.useState(false);
    const hiddenTabsRef = React.useRef<HTMLDivElement>(null);
    const elements = React.useRef(
      new Map<string, number>(tabs.map((key) => [key, 0])),
    );

    return (
      <div>
        <div className="relative hidden sm:inline-block">
          <TabsPrimitive.Root
            value={tabValue}
            onValueChange={(v) => {
              if (!hiddenTabsRef.current) return;
              let nextRightOffset = 0;
              let nextLeftOffset = 0;
              const tabIndex = tabs.indexOf(v);
              for (let i = 0; i < tabs.length; i++) {
                if (i < tabIndex) {
                  nextLeftOffset += elements.current.get(tabs[i]) ?? 0;
                }
                if (i > tabIndex) {
                  nextRightOffset += elements.current.get(tabs[i]) ?? 0;
                }
              }
              animate(
                hiddenTabsRef.current,
                {
                  clipPath: [
                    showHiddenTabs
                      ? \`inset(0px calc(\${rightOffset}px) 0px calc(\${leftOffset}px) round 9999px)\`
                      : \`inset(0px calc(100% - \${
                          elements.current.get("member") ?? 0
                        }px) 0px 0px round 9999px)\`,
                    \`inset(0px calc(\${nextRightOffset}px) 0px calc(\${nextLeftOffset}px) round 9999px)\`,
                  ],
                },
                { duration: 0.4 },
              );
              setTabValue(v);
              setShowHiddenTabs(true);
              setRightOffset(nextRightOffset);
              setLeftOffset(nextLeftOffset);
            }}
          >
            <TabsPrimitive.List className="flex">
              <TabsPrimitive.Trigger
                value="member"
                className={cn(
                  "relative px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 disabled:pointer-events-none disabled:opacity-50",
                  {
                    "data-[state=active]:text-white": !showHiddenTabs,
                  },
                )}
                ref={(element) => {
                  if (element) {
                    elements.current.set("member", element.offsetWidth);
                  } else {
                    elements.current.delete("member");
                  }
                }}
              >
                成員
                {!showHiddenTabs && (
                  <div
                    className="absolute inset-0 -z-10 bg-gray-900"
                    style={{ borderRadius: 9999 }}
                  />
                )}
              </TabsPrimitive.Trigger>
              <TabsPrimitive.Trigger
                value="basic"
                className="relative px-3 py-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 disabled:pointer-events-none disabled:opacity-50"
                ref={(element) => {
                  if (element) {
                    elements.current.set("basic", element.offsetWidth);
                  } else {
                    elements.current.delete("basic");
                  }
                }}
              >
                基本設定
              </TabsPrimitive.Trigger>
              <TabsPrimitive.Trigger
                value="api-key"
                className="relative px-3 py-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 disabled:pointer-events-none disabled:opacity-50"
                ref={(element) => {
                  if (element) {
                    elements.current.set("api-key", element.offsetWidth);
                  } else {
                    elements.current.delete("api-key");
                  }
                }}
              >
                API 金鑰
              </TabsPrimitive.Trigger>
              <TabsPrimitive.Trigger
                value="billing"
                className="relative px-3 py-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 disabled:pointer-events-none disabled:opacity-50"
                ref={(element) => {
                  if (element) {
                    elements.current.set("billing", element.offsetWidth);
                  } else {
                    elements.current.delete("billing");
                  }
                }}
              >
                付款資訊
              </TabsPrimitive.Trigger>
            </TabsPrimitive.List>
            <TabsPrimitive.Content value="member"></TabsPrimitive.Content>
            <TabsPrimitive.Content value="basic"></TabsPrimitive.Content>
            <TabsPrimitive.Content value="api-key"></TabsPrimitive.Content>
            <TabsPrimitive.Content value="billing"></TabsPrimitive.Content>
          </TabsPrimitive.Root>
          <TabsPrimitive.Root
            value={tabValue}
            ref={hiddenTabsRef}
            aria-hidden
            className="absolute inset-0 bg-gray-900 will-change-auto"
            style={
              !showHiddenTabs
                ? {
                    clipPath: "inset(0px 100% 0px 0px round 9999px)",
                  }
                : {}
            }
          >
            <TabsPrimitive.List className="flex">
              <TabsPrimitive.Trigger
                value="member"
                className="px-3 py-2 text-sm font-medium text-white"
              >
                成員
              </TabsPrimitive.Trigger>
              <TabsPrimitive.Trigger
                value="basic"
                className="px-3 py-2 text-sm font-medium text-white"
              >
                基本設定
              </TabsPrimitive.Trigger>
              <TabsPrimitive.Trigger
                value="api-key"
                className="px-3 py-2 text-sm font-medium text-white"
              >
                API 金鑰
              </TabsPrimitive.Trigger>
              <TabsPrimitive.Trigger
                value="billing"
                className="px-3 py-2 text-sm font-medium text-white"
              >
                付款資訊
              </TabsPrimitive.Trigger>
            </TabsPrimitive.List>
          </TabsPrimitive.Root>
        </div>

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
