import * as Accordion from "@radix-ui/react-accordion";
import * as Dialog from "@radix-ui/react-dialog";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "~/components/builduifast/assets/Logo";
import { Button } from "~/components/builduifast/button/Button";

function Header() {
  return (
    <header className="isolate bg-white py-5">
      <NavigationMenu.Root className="container mx-auto flex items-center">
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
                  className="fixed inset-y-0 right-0 flex w-full max-w-xs flex-col overflow-auto border-l border-gray-200 bg-white shadow outline-none data-[state=closed]:duration-200 data-[state=open]:duration-500 data-[state=closed]:ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right data-[state=open]:ease-slider-in sm:max-w-sm lg:hidden"
                >
                  <div className="sticky top-0 z-20 flex items-center justify-between bg-white px-[15px] py-5 sm:px-6">
                    <a href="/" className="sm:hidden">
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
                  <div className="divide-y divide-gray-100 px-[15px] pb-5 sm:px-6">
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
                    <div className="py-6">
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
      </NavigationMenu.Root>
    </header>
  );
}

const templateCode = `\
  import * as Accordion from "@radix-ui/react-accordion";  
  import * as Dialog from "@radix-ui/react-dialog";
  import * as NavigationMenu from "@radix-ui/react-navigation-menu";
  import { Menu, X } from "lucide-react";
  import { Logo } from "~/assets/Logo";
  import { Button } from "~/components/ui/Button";

  function Header() {
    return (
      <header className="isolate bg-white py-5">
        <NavigationMenu.Root className="container mx-auto flex items-center">
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
                    className="fixed inset-y-0 right-0 flex w-full max-w-xs flex-col overflow-auto border-l border-gray-200 bg-white shadow outline-none data-[state=closed]:duration-200 data-[state=open]:duration-500 data-[state=closed]:ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right data-[state=open]:ease-slider-in sm:max-w-sm lg:hidden"
                  >
                    <div className="sticky top-0 z-20 flex items-center justify-between bg-white px-[15px] py-5 sm:px-6">
                      <a href="/" className="sm:hidden">
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
                    <div className="divide-y divide-gray-100 px-[15px] pb-5 sm:px-6">
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
                      <div className="py-6">
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
        </NavigationMenu.Root>
      </header>
    );
  }
`;

export default Header;
export { templateCode };
