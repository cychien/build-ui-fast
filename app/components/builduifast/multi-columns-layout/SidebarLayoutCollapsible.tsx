import * as Accordion from "@radix-ui/react-accordion";
import * as Dialog from "@radix-ui/react-dialog";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import {
  ArrowLeftToLine,
  ArrowRightToLine,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import * as React from "react";
import { Logo } from "~/components/builduifast/assets/Logo";
import { Button } from "~/components/builduifast/button/Button";
import { cn } from "~/utils/cn";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  return (
    <div>
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 w-[320px] -translate-x-full border-r border-gray-200 px-6 py-8 transition-transform",
          isSidebarOpen ? "lg:translate-x-0" : "lg:-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between">
          <a href="#">
            <span className="sr-only">Eureka</span>
            <Logo className="h-8" />
          </a>
          <div className="translate-x-2">
            <Button
              className="text-gray-400"
              variant="ghost"
              size="sm"
              iconButton
              onClick={() => {
                setIsSidebarOpen(false);
              }}
            >
              <span className="sr-only">收合主選單</span>
              <ArrowLeftToLine className="size-5" />
            </Button>
          </div>
        </div>
        <NavigationMenu.Root orientation="vertical" className="mt-6">
          <NavigationMenu.List className="space-y-1">
            {/* Item with sub content */}
            <NavigationMenu.Item>
              <Accordion.Root type="single" collapsible>
                <Accordion.Item value="item-1" className="-mx-3">
                  <Accordion.Trigger className="group relative z-10 flex h-full w-full items-center justify-between rounded-lg bg-white px-3 py-2 font-medium text-gray-700 hover:bg-gray-50">
                    <span>產品</span>
                    <ChevronDown className="h-5 w-5 flex-shrink-0 transition duration-200 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                  <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="px-3 py-4">Something cool</div>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </NavigationMenu.Item>
            {/* Simple item */}
            <NavigationMenu.Item>
              <NavigationMenu.Link
                href="#"
                className="-mx-3 block h-full rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-gray-50"
              >
                資源
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link
                href="#"
                className="-mx-3 block h-full rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-gray-50"
              >
                案例分享
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link
                href="#"
                className="-mx-3 block h-full rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-gray-50"
              >
                FAQ
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </aside>

      {/* Main content */}
      <main
        className={cn(
          "pl-0 transition-[padding]",
          isSidebarOpen ? "lg:pl-[320px]" : "lg:pl-0",
        )}
      >
        <div className="px-6 py-5 lg:py-8">
          {!isSidebarOpen && (
            <Button
              className="mb-4 hidden lg:flex"
              variant="outline"
              iconButton
              onClick={() => {
                setIsSidebarOpen(true);
              }}
            >
              <span className="sr-only">展開主選單</span>
              <ArrowRightToLine className="size-[22px]" />
            </Button>
          )}
          <div className="transition-opacity lg:hidden lg:opacity-0">
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <Button variant="outline" iconButton className="mb-4">
                  <span className="sr-only">打開主選單</span>
                  <Menu />
                </Button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="pointer-events-none fixed inset-0 bg-black opacity-50 data-[state=closed]:duration-200 data-[state=open]:duration-300 data-[state=closed]:ease-in-out data-[state=open]:ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                <Dialog.Content asChild>
                  <NavigationMenu.Root
                    orientation="vertical"
                    className="fixed inset-y-0 left-0 flex w-full max-w-xs flex-col overflow-auto border-l border-gray-200 bg-white shadow outline-none data-[state=closed]:duration-200 data-[state=open]:duration-500 data-[state=closed]:ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left data-[state=open]:ease-slider-in lg:hidden"
                  >
                    <div className="sticky top-0 z-20 flex items-center justify-between bg-white px-[15px] py-5 sm:px-6">
                      <a href="#">
                        <span className="sr-only">Eureka</span>
                        <Logo className="h-8" />
                      </a>
                      <Dialog.Close asChild>
                        <Button variant="ghost" iconButton className="ml-auto">
                          <span className="sr-only">關閉主選單</span>
                          <X />
                        </Button>
                      </Dialog.Close>
                    </div>
                    <div className="px-[15px] sm:px-6">
                      <NavigationMenu.List className="space-y-2 pb-6 pt-1">
                        {/* Item with sub content */}
                        <NavigationMenu.Item>
                          <Accordion.Root type="single" collapsible>
                            <Accordion.Item value="item-1" className="-mx-3">
                              <Accordion.Trigger className="group relative z-10 flex h-full w-full items-center justify-between rounded-lg bg-white px-3 py-2 font-medium text-gray-700 hover:bg-gray-50">
                                <span>產品</span>
                                <ChevronDown className="h-5 w-5 flex-shrink-0 transition duration-200 group-data-[state=open]:rotate-180" />
                              </Accordion.Trigger>
                              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                                <div className="px-3 py-4">Something cool</div>
                              </Accordion.Content>
                            </Accordion.Item>
                          </Accordion.Root>
                        </NavigationMenu.Item>
                        {/* Simple item */}
                        <NavigationMenu.Item>
                          <NavigationMenu.Link
                            href="#"
                            className="-mx-3 block h-full rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-gray-50"
                          >
                            資源
                          </NavigationMenu.Link>
                        </NavigationMenu.Item>
                        <NavigationMenu.Item>
                          <NavigationMenu.Link
                            href="#"
                            className="-mx-3 block h-full rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-gray-50"
                          >
                            案例分享
                          </NavigationMenu.Link>
                        </NavigationMenu.Item>
                        <NavigationMenu.Item>
                          <NavigationMenu.Link
                            href="#"
                            className="-mx-3 block h-full rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-gray-50"
                          >
                            FAQ
                          </NavigationMenu.Link>
                        </NavigationMenu.Item>
                      </NavigationMenu.List>
                    </div>
                  </NavigationMenu.Root>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
          <div>Main Content</div>
        </div>
      </main>
    </div>
  );
}

const templateCode = `\
  import * as Accordion from "@radix-ui/react-accordion";
  import * as Dialog from "@radix-ui/react-dialog";
  import * as NavigationMenu from "@radix-ui/react-navigation-menu";
  import {
    ArrowLeftToLine,
    ArrowRightToLine,
    ChevronDown,
    Menu,
    X,
  } from "lucide-react";
  import * as React from "react";
  import { Logo } from "~/assets/Logo";
  import { Button } from "~/components/ui/Button";
  import { cn } from "~/utils/cn";

  function Layout() {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

    return (
      <div>
        {/* Sidebar */}
        <aside
          className={cn(
            "fixed inset-y-0 left-0 w-[320px] -translate-x-full border-r border-gray-200 px-6 py-8 transition-transform",
            isSidebarOpen ? "lg:translate-x-0" : "lg:-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <a href="#">
              <span className="sr-only">Eureka</span>
              <Logo className="h-8" />
            </a>
            <div className="translate-x-2">
              <Button
                className="text-gray-400"
                variant="ghost"
                size="sm"
                iconButton
                onClick={() => {
                  setIsSidebarOpen(false);
                }}
              >
                <span className="sr-only">收合主選單</span>
                <ArrowLeftToLine className="size-5" />
              </Button>
            </div>
          </div>
          <NavigationMenu.Root orientation="vertical" className="mt-6">
            <NavigationMenu.List className="space-y-1">
              {/* Item with sub content */}
              <NavigationMenu.Item>
                <Accordion.Root type="single" collapsible>
                  <Accordion.Item value="item-1" className="-mx-3">
                    <Accordion.Trigger className="group relative z-10 flex h-full w-full items-center justify-between rounded-lg bg-white px-3 py-2 font-medium text-gray-700 hover:bg-gray-50">
                      <span>產品</span>
                      <ChevronDown className="h-5 w-5 flex-shrink-0 transition duration-200 group-data-[state=open]:rotate-180" />
                    </Accordion.Trigger>
                    <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <div className="px-3 py-4">Something cool</div>
                    </Accordion.Content>
                  </Accordion.Item>
                </Accordion.Root>
              </NavigationMenu.Item>
              {/* Simple item */}
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  href="#"
                  className="-mx-3 block h-full rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-gray-50"
                >
                  資源
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  href="#"
                  className="-mx-3 block h-full rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-gray-50"
                >
                  案例分享
                </NavigationMenu.Link>
              </NavigationMenu.Item>
              <NavigationMenu.Item>
                <NavigationMenu.Link
                  href="#"
                  className="-mx-3 block h-full rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-gray-50"
                >
                  FAQ
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            </NavigationMenu.List>
          </NavigationMenu.Root>
        </aside>

        {/* Main content */}
        <main
          className={cn(
            "pl-0 transition-[padding]",
            isSidebarOpen ? "lg:pl-[320px]" : "lg:pl-0",
          )}
        >
          <div className="px-6 py-5 lg:py-8">
            {!isSidebarOpen && (
              <Button
                className="mb-4 hidden lg:flex"
                variant="outline"
                iconButton
                onClick={() => {
                  setIsSidebarOpen(true);
                }}
              >
                <span className="sr-only">展開主選單</span>
                <ArrowRightToLine className="size-[22px]" />
              </Button>
            )}
            <div className="transition-opacity lg:hidden lg:opacity-0">
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <Button variant="outline" iconButton className="mb-4">
                    <span className="sr-only">打開主選單</span>
                    <Menu />
                  </Button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="pointer-events-none fixed inset-0 bg-black opacity-50 data-[state=closed]:duration-200 data-[state=open]:duration-300 data-[state=closed]:ease-in-out data-[state=open]:ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                  <Dialog.Content asChild>
                    <NavigationMenu.Root
                      orientation="vertical"
                      className="fixed inset-y-0 left-0 flex w-full max-w-xs flex-col overflow-auto border-l border-gray-200 bg-white shadow outline-none data-[state=closed]:duration-200 data-[state=open]:duration-500 data-[state=closed]:ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left data-[state=open]:ease-slider-in lg:hidden"
                    >
                      <div className="sticky top-0 z-20 flex items-center justify-between bg-white px-[15px] py-5 sm:px-6">
                        <a href="#">
                          <span className="sr-only">Eureka</span>
                          <Logo className="h-8" />
                        </a>
                        <Dialog.Close asChild>
                          <Button variant="ghost" iconButton className="ml-auto">
                            <span className="sr-only">關閉主選單</span>
                            <X />
                          </Button>
                        </Dialog.Close>
                      </div>
                      <div className="px-[15px] sm:px-6">
                        <NavigationMenu.List className="space-y-2 pb-6 pt-1">
                          {/* Item with sub content */}
                          <NavigationMenu.Item>
                            <Accordion.Root type="single" collapsible>
                              <Accordion.Item value="item-1" className="-mx-3">
                                <Accordion.Trigger className="group relative z-10 flex h-full w-full items-center justify-between rounded-lg bg-white px-3 py-2 font-medium text-gray-700 hover:bg-gray-50">
                                  <span>產品</span>
                                  <ChevronDown className="h-5 w-5 flex-shrink-0 transition duration-200 group-data-[state=open]:rotate-180" />
                                </Accordion.Trigger>
                                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                                  <div className="px-3 py-4">Something cool</div>
                                </Accordion.Content>
                              </Accordion.Item>
                            </Accordion.Root>
                          </NavigationMenu.Item>
                          {/* Simple item */}
                          <NavigationMenu.Item>
                            <NavigationMenu.Link
                              href="#"
                              className="-mx-3 block h-full rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-gray-50"
                            >
                              資源
                            </NavigationMenu.Link>
                          </NavigationMenu.Item>
                          <NavigationMenu.Item>
                            <NavigationMenu.Link
                              href="#"
                              className="-mx-3 block h-full rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-gray-50"
                            >
                              案例分享
                            </NavigationMenu.Link>
                          </NavigationMenu.Item>
                          <NavigationMenu.Item>
                            <NavigationMenu.Link
                              href="#"
                              className="-mx-3 block h-full rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-gray-50"
                            >
                              FAQ
                            </NavigationMenu.Link>
                          </NavigationMenu.Item>
                        </NavigationMenu.List>
                      </div>
                    </NavigationMenu.Root>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </div>
            <div>Main Content</div>
          </div>
        </main>
      </div>
    );
  }
`;

export default Layout;
export { templateCode };
