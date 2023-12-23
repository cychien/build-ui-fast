import * as Accordion from "@radix-ui/react-accordion";
import * as Dialog from "@radix-ui/react-dialog";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Layout,
  Cuboid,
  Sparkles,
  PencilRuler,
  Moon,
} from "lucide-react";
import * as React from "react";
import logoWithNameSrc from "~/assets/logo-with-name.svg";
import logoSrc from "~/assets/logo.svg";
import { Button } from "~/components/site/Button";
import { cn } from "~/utils/cn";

function Header() {
  const [activeNavItem, setActiveNavItem] = React.useState<string>();

  return (
    <header className="isolate z-50">
      <NavigationMenu.Root
        value={activeNavItem}
        onValueChange={(v) => setActiveNavItem(v)}
      >
        <motion.div
          className="relative z-10"
          initial={false}
          animate={{
            backgroundColor: activeNavItem
              ? "rgba(255, 255, 255, 0.8)"
              : "rgba(255, 255, 255, 0)",
          }}
          transition={{ duration: activeNavItem ? 0.25 : 0.15 }}
        >
          <div className="container mx-auto flex h-[80px]">
            <div className="flex space-x-10">
              <a href="#" className="flex items-center">
                <span className="sr-only">Build UI Fast</span>
                <img src={logoWithNameSrc} alt="logo" className="h-8" />
              </a>
              <NavigationMenu.List className="hidden h-full lg:flex lg:space-x-8">
                <NavigationMenu.Item value="product" className="flex">
                  <NavigationMenu.Trigger className="flex items-center space-x-2 font-medium text-gray-600">
                    <span>產品內容</span>
                    <ChevronDown className="h-4 w-4 flex-shrink-0" />
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content forceMount>
                    <AnimatePresence>
                      {activeNavItem === "product" && (
                        <motion.div
                          className="container mx-auto flex gap-6"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{
                            opacity: 0,
                            height: 0,
                            transition: { duration: 0.15 },
                          }}
                          transition={{
                            duration: 0.25,
                            opacity: { delay: 0.1, duration: 0.25 },
                          }}
                        >
                          <div className="flex flex-1 flex-col gap-6 py-8 xl:flex-row">
                            <div className="flex-1 space-y-3">
                              <div className="text-primary-600 text-sm font-semibold">
                                Components
                              </div>
                              <div className="space-y-1">
                                <div className="flex space-x-4 p-3">
                                  <Layout className="text-primary-600 h-6 w-6 flex-shrink-0" />
                                  <div className="space-y-1">
                                    <div className="font-semibold">
                                      佈局用 components
                                    </div>
                                    <div className="text-sm text-gray-600">
                                      Header, Footer, 2 欄式佈局, 3 欄式佈局
                                      (gitbook), Masonry layout...
                                    </div>
                                  </div>
                                </div>
                                <div className="flex space-x-4 p-3">
                                  <Cuboid className="text-primary-600 h-6 w-6 flex-shrink-0" />
                                  <div className="space-y-1">
                                    <div className="font-semibold">
                                      基礎 components
                                    </div>
                                    <div className="text-sm text-gray-600">
                                      Button, Popover, Dialog, Dropdown, Tabs,
                                      Form, Slider, Switch, Command palette...
                                    </div>
                                  </div>
                                </div>
                                <div className="flex space-x-4 p-3">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-primary-600 h-6 w-6 flex-shrink-0"
                                  >
                                    <rect
                                      width="18"
                                      height="18"
                                      x="3"
                                      y="3"
                                      rx="2"
                                    />
                                    <path d="M12 9v6" />
                                    <path d="M16 15v6" />
                                    <path d="M16 3v6" />
                                    <path d="M3 15h18" />
                                    <path d="M3 9h18" />
                                    <path d="M8 15v6" />
                                    <path d="M8 3v6" />
                                  </svg>
                                  <div className="space-y-1">
                                    <div className="font-semibold">
                                      複合 components
                                    </div>
                                    <div className="text-sm text-gray-600">
                                      Hero section, Pricing section, FAQ
                                      section...，節省用基礎 components
                                      拼裝的時間
                                    </div>
                                  </div>
                                </div>
                                <div className="flex space-x-4 p-3">
                                  <Sparkles className="text-primary-600 h-6 w-6 flex-shrink-0" />
                                  <div className="space-y-1">
                                    <div className="font-semibold">
                                      各式效果
                                    </div>
                                    <div className="text-sm text-gray-600">
                                      svg drawing, 聖光背景, 光暈...
                                      各式華麗視覺效果
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex-1 space-y-3">
                              <div className="text-primary-600 text-sm font-semibold">
                                UI 教學
                              </div>
                              <div className="space-y-1">
                                <div className="flex space-x-4 p-3">
                                  <PencilRuler className="text-primary-600 h-6 w-6 flex-shrink-0" />
                                  <div className="space-y-1">
                                    <div className="font-semibold">MDX</div>
                                    <div className="text-sm text-gray-600">
                                      從頭教你如何在 react 中整合 MDX,
                                      和如何客製化 MDX 生出的內容 (remark,
                                      rehype)
                                    </div>
                                  </div>
                                </div>
                                <div className="flex space-x-4 p-3">
                                  <Moon className="text-primary-600 h-6 w-6 flex-shrink-0" />
                                  <div className="space-y-1">
                                    <div className="font-semibold">
                                      Dark Mode
                                    </div>
                                    <div className="text-sm text-gray-600">
                                      從頭教你 dark mode 的最佳實踐方式
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="w-2/5 bg-gray-50 px-5 py-8 lg:w-[560px] lg:flex-shrink-0">
                            {/* <div className="text-primary-600 text-sm font-semibold">
                              如何開始
                            </div> */}
                            <div className="font-medium text-gray-500">
                              🚧
                              <span className="ml-3">
                                產品製作中，加入 waitlist 取得最新更新
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </NavigationMenu.Content>
                </NavigationMenu.Item>
                {/* <NavigationMenu.Item
                  value="pricing"
                  className="flex items-center"
                >
                  <a href="#" className="font-medium text-gray-600">
                    定價
                  </a>
                </NavigationMenu.Item>
                <NavigationMenu.Item value="faq" className="flex items-center">
                  <a href="#" className="font-medium text-gray-600">
                    FAQ
                  </a>
                </NavigationMenu.Item> */}
              </NavigationMenu.List>
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-8">
              {/* <a href="#" className="font-medium text-gray-600">
                登入
              </a> */}
              {/* <Button size="lg">立即購買</Button> */}
            </div>

            <div className="flex flex-1 items-center justify-end space-x-3 lg:hidden">
              {/* <Button>立即購買</Button> */}
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <Button variant="ghost" iconButton>
                    <span className="sr-only">打開主選單</span>
                    <Menu />
                  </Button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="pointer-events-none fixed inset-0 bg-black opacity-50 data-[state=closed]:duration-200 data-[state=open]:duration-300 data-[state=closed]:ease-in-out data-[state=open]:ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                  <Dialog.Content asChild>
                    <NavigationMenu.Root
                      orientation="vertical"
                      className="fixed inset-y-0 right-0 flex w-full max-w-xs flex-col overflow-auto overflow-x-hidden border-l border-gray-200 bg-white px-[15px] shadow outline-none data-[state=closed]:duration-200 data-[state=open]:duration-500 data-[state=closed]:ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right data-[state=open]:ease-slider-in sm:max-w-sm sm:px-6 lg:hidden"
                    >
                      <div className="sticky top-0 z-20 flex items-center justify-between bg-white py-5 sm:block sm:self-end">
                        <a href="#" className="sm:hidden">
                          <span className="sr-only">Build UI Fast</span>
                          <img src={logoSrc} alt="logo" className="h-8" />
                        </a>
                        <Dialog.Close asChild>
                          <Button variant="ghost" iconButton>
                            <span className="sr-only">關閉主選單</span>
                            <X />
                          </Button>
                        </Dialog.Close>
                      </div>
                      <div className="divide-y divide-gray-100">
                        <NavigationMenu.List className="space-y-2 pb-6 pt-1">
                          <NavigationMenu.Item className="-mx-3 block space-y-2">
                            <Accordion.Root type="single" collapsible>
                              <Accordion.Item value="item-1">
                                <Accordion.Trigger className="relative z-10 flex h-full w-full items-center justify-between rounded-lg bg-white px-3 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50">
                                  <span>產品</span>
                                  <ChevronDown className="h-5 w-5 flex-shrink-0" />
                                </Accordion.Trigger>
                                <Accordion.Content className="-mx-3 overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                                  <div className="space-y-6 px-6 py-6">
                                    <div className="space-y-3">
                                      <div className="text-primary-600 text-sm font-semibold">
                                        Components
                                      </div>
                                      <div className="space-y-1">
                                        <div className="flex space-x-4 py-3">
                                          <Layout className="text-primary-600 h-6 w-6 flex-shrink-0" />
                                          <div className="font-semibold">
                                            佈局用 components
                                          </div>
                                        </div>
                                        <div className="flex space-x-4 py-3">
                                          <Cuboid className="text-primary-600 h-6 w-6 flex-shrink-0" />
                                          <div className="font-semibold">
                                            基礎 components
                                          </div>
                                        </div>
                                        <div className="flex space-x-4 py-3">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-primary-600 h-6 w-6 flex-shrink-0"
                                          >
                                            <rect
                                              width="18"
                                              height="18"
                                              x="3"
                                              y="3"
                                              rx="2"
                                            />
                                            <path d="M12 9v6" />
                                            <path d="M16 15v6" />
                                            <path d="M16 3v6" />
                                            <path d="M3 15h18" />
                                            <path d="M3 9h18" />
                                            <path d="M8 15v6" />
                                            <path d="M8 3v6" />
                                          </svg>
                                          <div className="font-semibold">
                                            複合 components
                                          </div>
                                        </div>
                                        <div className="flex space-x-4 py-3">
                                          <Sparkles className="text-primary-600 h-6 w-6 flex-shrink-0" />
                                          <div className="font-semibold">
                                            各式效果
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="space-y-3">
                                      <div className="text-primary-600 text-sm font-semibold">
                                        UI 教學
                                      </div>
                                      <div className="space-y-1">
                                        <div className="flex space-x-4 py-3">
                                          <PencilRuler className="text-primary-600 h-6 w-6 flex-shrink-0" />
                                          <div className="font-semibold">
                                            MDX
                                          </div>
                                        </div>
                                        <div className="flex space-x-4 py-3">
                                          <Moon className="text-primary-600 h-6 w-6 flex-shrink-0" />
                                          <div className="font-semibold">
                                            Dark Mode
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="bg-gray-50 px-6 py-8">
                                    {/* <div className="text-primary-600 text-sm font-semibold">
                                      如何開始
                                    </div> */}
                                    <div className="flex">
                                      🚧
                                      <div className="ml-3 font-medium text-gray-500">
                                        產品製作中，加入 waitlist 取得最新更新
                                      </div>
                                    </div>
                                  </div>
                                </Accordion.Content>
                              </Accordion.Item>
                            </Accordion.Root>
                          </NavigationMenu.Item>
                          {/* <NavigationMenu.Item>
                            <a
                              href="#"
                              className="-mx-3 block h-full rounded-lg px-3 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50"
                            >
                              定價
                            </a>
                          </NavigationMenu.Item>
                          <NavigationMenu.Item>
                            <a
                              href="#"
                              className="-mx-3 block h-full rounded-lg px-3 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50"
                            >
                              FAQ
                            </a>
                          </NavigationMenu.Item> */}
                        </NavigationMenu.List>
                        {/* <div className="py-6">
                          <a
                            href="#"
                            className="-mx-3 block rounded-lg px-3 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50"
                          >
                            登入
                          </a>
                        </div> */}
                      </div>
                    </NavigationMenu.Root>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </div>
          </div>
        </motion.div>

        <div className="hidden lg:absolute lg:left-0 lg:block lg:w-full">
          <MotionViewport
            forceMount
            // className="h-[--radix-navigation-menu-viewport-height] overflow-hidden bg-white shadow-md shadow-gray-200/80"
            className={cn(
              "overflow-hidden bg-white shadow-md transition-shadow duration-200",
              activeNavItem ? "shadow-gray-200/80" : "shadow-gray-200/0",
            )}
          />
        </div>
      </NavigationMenu.Root>
    </header>
  );
}

const MotionViewport = motion(NavigationMenu.Viewport);

export { Header };
