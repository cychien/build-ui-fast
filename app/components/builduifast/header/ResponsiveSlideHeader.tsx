import { useIsMobile } from "../utils";
import * as Accordion from "@radix-ui/react-accordion";
import * as Dialog from "@radix-ui/react-dialog";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import * as React from "react";
import { Logo } from "~/components/builduifast/assets/Logo";
import { Button } from "~/components/builduifast/button/Button";

function Header() {
  const [isMenuPoppedOut, setIsMenuPoppedOut] = React.useState(false);
  const headerRef = React.useRef(null);
  const isMobile = useIsMobile();

  return (
    <header className="isolate" ref={headerRef}>
      <NavigationMenu.Root>
        <div className="relative z-10 bg-white">
          <div className="container mx-auto flex items-center py-5">
            <div className="flex items-center space-x-10">
              <a href="/">
                <span className="sr-only">Eureka</span>
                <Logo className="h-8" />
              </a>
              <NavigationMenu.List className="hidden lg:flex lg:space-x-8">
                {/* Item with sub content */}
                <NavigationMenu.Item className="relative">
                  <NavigationMenu.Trigger className="group flex items-center space-x-2 font-medium text-gray-700">
                    <span>產品</span>
                    <ChevronDown className="h-4 w-4 flex-shrink-0 transition duration-150 group-data-[state=open]:rotate-180" />
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="absolute top-[120%] rounded border border-gray-200 px-6 py-4 shadow data-[state=open]:animate-in data-[state=close]:animate-out data-[state=close]:fade-out data-[state=open]:fade-in">
                    Something cool
                  </NavigationMenu.Content>
                </NavigationMenu.Item>
                {/* Simple item */}
                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    href="#"
                    className="font-medium text-gray-700"
                  >
                    資源
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    href="#"
                    className="font-medium text-gray-700"
                  >
                    案例分享
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
                <NavigationMenu.Item>
                  <NavigationMenu.Link
                    href="#"
                    className="font-medium text-gray-700"
                  >
                    FAQ
                  </NavigationMenu.Link>
                </NavigationMenu.Item>
              </NavigationMenu.List>
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-8">
              <a href="#" className="font-medium text-gray-700">
                登入
              </a>
              <Button size="lg">免費試用</Button>
            </div>

            {/* Mobile menu */}
            <div className="flex flex-1 justify-end space-x-3 lg:hidden">
              <Button>免費試用</Button>
              <Dialog.Root
                open={isMenuPoppedOut}
                onOpenChange={(open) => {
                  setIsMenuPoppedOut(open);
                }}
                modal={!isMobile}
              >
                <Dialog.Trigger asChild>
                  <Button
                    variant="ghost"
                    iconButton
                    onClick={() => {
                      setIsMenuPoppedOut((prev) => !prev);
                    }}
                  >
                    {!isMenuPoppedOut ? (
                      <>
                        <span className="sr-only">打開主選單</span>
                        <Menu />
                      </>
                    ) : (
                      <>
                        <span className="sr-only">關閉主選單</span>
                        <X />
                      </>
                    )}
                  </Button>
                </Dialog.Trigger>

                <Dialog.Portal
                  container={isMobile ? headerRef.current : undefined}
                >
                  <Dialog.Overlay className="sm:pointer-events-none sm:fixed sm:inset-0 sm:bg-black sm:opacity-50 sm:data-[state=closed]:duration-200 sm:data-[state=open]:duration-300 sm:data-[state=closed]:ease-in-out sm:data-[state=open]:ease-out sm:data-[state=open]:animate-in sm:data-[state=closed]:animate-out sm:data-[state=closed]:fade-out-0 sm:data-[state=open]:fade-in-0" />
                  <Dialog.Content asChild>
                    <NavigationMenu.Root
                      orientation="vertical"
                      className="absolute right-0 flex w-full flex-col overflow-auto bg-white shadow outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:ease-slider-in max-sm:data-[state=closed]:duration-100 max-sm:data-[state=open]:duration-200 max-sm:data-[state=closed]:ease-in max-sm:data-[state=closed]:fade-in-0 max-sm:data-[state=closed]:fade-out-0 max-sm:data-[state=closed]:slide-out-to-top-2 max-sm:data-[state=open]:slide-in-from-top-2 sm:fixed sm:inset-y-0 sm:max-w-sm sm:border-l sm:border-gray-200 sm:data-[state=closed]:duration-200 sm:data-[state=open]:duration-500 sm:data-[state=closed]:ease-in-out sm:data-[state=closed]:slide-out-to-right sm:data-[state=open]:slide-in-from-right lg:hidden"
                    >
                      <div className="sticky top-0 z-20 hidden items-center justify-between bg-white px-[15px] py-5 sm:flex sm:px-6">
                        <a href="/" className="sm:hidden">
                          <span className="sr-only">Eureka</span>
                          <Logo className="h-8" />
                        </a>
                        <Button
                          variant="ghost"
                          iconButton
                          className="ml-auto"
                          onClick={() => {
                            setIsMenuPoppedOut(false);
                          }}
                        >
                          <span className="sr-only">關閉主選單</span>
                          <X />
                        </Button>
                      </div>
                      <div className="divide-y divide-gray-100 px-[15px] pb-5 sm:px-6">
                        <NavigationMenu.List className="space-y-2 pb-6 pt-2 sm:pt-1">
                          {/* Item with sub content */}
                          <NavigationMenu.Item>
                            <Accordion.Root type="single" collapsible>
                              <Accordion.Item value="item-1" className="-mx-3">
                                <Accordion.Trigger className="group relative z-10 flex h-full w-full items-center justify-between rounded-lg bg-white px-3 py-2 font-medium text-gray-700 hover:bg-gray-50">
                                  <span>產品</span>
                                  <ChevronDown className="h-5 w-5 flex-shrink-0 transition duration-200 group-data-[state=open]:rotate-180" />
                                </Accordion.Trigger>
                                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                                  <div className="px-3 py-4">
                                    Something cool
                                  </div>
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
                        <div className="pt-6 sm:py-6">
                          <a
                            href="#"
                            className="-mx-3 block rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-gray-50"
                          >
                            登入
                          </a>
                        </div>
                      </div>
                    </NavigationMenu.Root>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </div>
          </div>
        </div>
      </NavigationMenu.Root>
    </header>
  );
}

const templateCode = `\
  import { useIsMobile } from "~/utils";
  import * as Accordion from "@radix-ui/react-accordion";
  import * as Dialog from "@radix-ui/react-dialog";
  import * as NavigationMenu from "@radix-ui/react-navigation-menu";
  import { ChevronDown, Menu, X } from "lucide-react";
  import * as React from "react";
  import { Logo } from "~/assets/Logo";
  import { Button } from "~/components/ui/Button";

  function Header() {
    const [isMenuPoppedOut, setIsMenuPoppedOut] = React.useState(false);
    const headerRef = React.useRef(null);
    const isMobile = useIsMobile();

    return (
      <header className="isolate" ref={headerRef}>
        <NavigationMenu.Root>
          <div className="relative z-10 bg-white">
            <div className="container mx-auto flex items-center py-5">
              <div className="flex items-center space-x-10">
                <a href="/">
                  <span className="sr-only">Eureka</span>
                  <Logo className="h-8" />
                </a>
                <NavigationMenu.List className="hidden lg:flex lg:space-x-8">
                  {/* Item with sub content */}
                  <NavigationMenu.Item className="relative">
                    <NavigationMenu.Trigger className="group flex items-center space-x-2 font-medium text-gray-700">
                      <span>產品</span>
                      <ChevronDown className="h-4 w-4 flex-shrink-0 transition duration-150 group-data-[state=open]:rotate-180" />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="absolute top-[120%] rounded border border-gray-200 px-6 py-4 shadow data-[state=open]:animate-in data-[state=close]:animate-out data-[state=close]:fade-out data-[state=open]:fade-in">
                      Something cool
                    </NavigationMenu.Content>
                  </NavigationMenu.Item>
                  {/* Simple item */}
                  <NavigationMenu.Item>
                    <NavigationMenu.Link
                      href="#"
                      className="font-medium text-gray-700"
                    >
                      資源
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                    <NavigationMenu.Link
                      href="#"
                      className="font-medium text-gray-700"
                    >
                      案例分享
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                    <NavigationMenu.Link
                      href="#"
                      className="font-medium text-gray-700"
                    >
                      FAQ
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                </NavigationMenu.List>
              </div>

              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-8">
                <a href="#" className="font-medium text-gray-700">
                  登入
                </a>
                <Button size="lg">免費試用</Button>
              </div>

              {/* Mobile menu */}
              <div className="flex flex-1 justify-end space-x-3 lg:hidden">
                <Button>免費試用</Button>
                <Dialog.Root
                  open={isMenuPoppedOut}
                  onOpenChange={(open) => {
                    setIsMenuPoppedOut(open);
                  }}
                  modal={!isMobile}
                >
                  <Dialog.Trigger asChild>
                    <Button
                      variant="ghost"
                      iconButton
                      onClick={() => {
                        setIsMenuPoppedOut((prev) => !prev);
                      }}
                    >
                      {!isMenuPoppedOut ? (
                        <>
                          <span className="sr-only">打開主選單</span>
                          <Menu />
                        </>
                      ) : (
                        <>
                          <span className="sr-only">關閉主選單</span>
                          <X />
                        </>
                      )}
                    </Button>
                  </Dialog.Trigger>

                  <Dialog.Portal
                    container={isMobile ? headerRef.current : undefined}
                  >
                    <Dialog.Overlay className="sm:pointer-events-none sm:fixed sm:inset-0 sm:bg-black sm:opacity-50 sm:data-[state=closed]:duration-200 sm:data-[state=open]:duration-300 sm:data-[state=closed]:ease-in-out sm:data-[state=open]:ease-out sm:data-[state=open]:animate-in sm:data-[state=closed]:animate-out sm:data-[state=closed]:fade-out-0 sm:data-[state=open]:fade-in-0" />
                    <Dialog.Content asChild>
                      <NavigationMenu.Root
                        orientation="vertical"
                        className="absolute right-0 flex w-full flex-col overflow-auto bg-white shadow outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:ease-slider-in max-sm:data-[state=closed]:duration-100 max-sm:data-[state=open]:duration-200 max-sm:data-[state=closed]:ease-in max-sm:data-[state=closed]:fade-in-0 max-sm:data-[state=closed]:fade-out-0 max-sm:data-[state=closed]:slide-out-to-top-2 max-sm:data-[state=open]:slide-in-from-top-2 sm:fixed sm:inset-y-0 sm:max-w-sm sm:border-l sm:border-gray-200 sm:data-[state=closed]:duration-200 sm:data-[state=open]:duration-500 sm:data-[state=closed]:ease-in-out sm:data-[state=closed]:slide-out-to-right sm:data-[state=open]:slide-in-from-right lg:hidden"
                      >
                        <div className="sticky top-0 z-20 hidden items-center justify-between bg-white px-[15px] py-5 sm:flex sm:px-6">
                          <a href="/" className="sm:hidden">
                            <span className="sr-only">Eureka</span>
                            <Logo className="h-8" />
                          </a>
                          <Button
                            variant="ghost"
                            iconButton
                            className="ml-auto"
                            onClick={() => {
                              setIsMenuPoppedOut(false);
                            }}
                          >
                            <span className="sr-only">關閉主選單</span>
                            <X />
                          </Button>
                        </div>
                        <div className="divide-y divide-gray-100 px-[15px] pb-5 sm:px-6">
                          <NavigationMenu.List className="space-y-2 pb-6 pt-2 sm:pt-1">
                            {/* Item with sub content */}
                            <NavigationMenu.Item>
                              <Accordion.Root type="single" collapsible>
                                <Accordion.Item value="item-1" className="-mx-3">
                                  <Accordion.Trigger className="group relative z-10 flex h-full w-full items-center justify-between rounded-lg bg-white px-3 py-2 font-medium text-gray-700 hover:bg-gray-50">
                                    <span>產品</span>
                                    <ChevronDown className="h-5 w-5 flex-shrink-0 transition duration-200 group-data-[state=open]:rotate-180" />
                                  </Accordion.Trigger>
                                  <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                                    <div className="px-3 py-4">
                                      Something cool
                                    </div>
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
                          <div className="pt-6 sm:py-6">
                            <a
                              href="#"
                              className="-mx-3 block rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-gray-50"
                            >
                              登入
                            </a>
                          </div>
                        </div>
                      </NavigationMenu.Root>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
              </div>
            </div>
          </div>
        </NavigationMenu.Root>
      </header>
    );
  }
`;

export default Header;
export { templateCode };
