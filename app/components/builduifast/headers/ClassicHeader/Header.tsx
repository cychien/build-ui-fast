import * as Dialog from "@radix-ui/react-dialog";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Menu, X } from "lucide-react";
import { Logo } from "~/components/builduifast/assets/Logo";
import { Button } from "~/components/builduifast/buttons/ClassicButton";

function Header() {
  return (
    <header className="bg-white py-5">
      <NavigationMenu.Root className="container mx-auto flex items-center">
        <div className="flex items-center space-x-10">
          <a href="#">
            <span className="sr-only">Eureka</span>
            <Logo className="h-8" />
          </a>
          <NavigationMenu.List className="hidden lg:flex lg:space-x-8">
            <NavigationMenu.Item>
              <a href="#" className="font-medium text-gray-700">
                產品
              </a>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <a href="#" className="font-medium text-gray-700">
                資源
              </a>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <a href="#" className="font-medium text-gray-700">
                案例分享
              </a>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <a href="#" className="font-medium text-gray-700">
                FAQ
              </a>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-8">
          <a href="#" className="font-medium text-gray-700">
            登入
          </a>
          <Button size="lg">免費試用</Button>
        </div>

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
              <Dialog.Overlay className="bg-black data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 pointer-events-none fixed inset-0 opacity-50 data-[state=closed]:duration-200 data-[state=open]:duration-300 data-[state=closed]:ease-in-out data-[state=open]:ease-out" />
              <Dialog.Content asChild>
                <NavigationMenu.Root
                  orientation="vertical"
                  className="data-[state=open]:ease-slider-in data-[state=open]:animate-in data-[state=open]:slide-in-from-right data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right fixed inset-y-0 right-0 flex w-full max-w-xs flex-col border-l border-gray-200 bg-white px-[15px] py-5 shadow outline-none data-[state=closed]:duration-200 data-[state=open]:duration-500 data-[state=closed]:ease-in-out sm:max-w-sm sm:px-6 lg:hidden"
                >
                  <div className="flex items-center justify-between sm:block sm:self-end">
                    <a href="#" className="sm:hidden">
                      <span className="sr-only">Eureka</span>
                      <Logo className="h-8" />
                    </a>
                    <Dialog.Close asChild>
                      <Button variant="ghost" iconButton>
                        <span className="sr-only">關閉主選單</span>
                        <X />
                      </Button>
                    </Dialog.Close>
                  </div>
                  <div className="divide-y divide-gray-100">
                    <NavigationMenu.List className="space-y-2 py-6">
                      <NavigationMenu.Item>
                        <a
                          href="#"
                          className="-mx-3 block h-full rounded-lg px-3 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50"
                        >
                          產品
                        </a>
                      </NavigationMenu.Item>
                      <NavigationMenu.Item>
                        <a
                          href="#"
                          className="-mx-3 block h-full rounded-lg px-3 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50"
                        >
                          資源
                        </a>
                      </NavigationMenu.Item>
                      <NavigationMenu.Item>
                        <a
                          href="#"
                          className="-mx-3 block h-full rounded-lg px-3 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50"
                        >
                          案例分享
                        </a>
                      </NavigationMenu.Item>
                      <NavigationMenu.Item>
                        <a
                          href="#"
                          className="-mx-3 block h-full rounded-lg px-3 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50"
                        >
                          FAQ
                        </a>
                      </NavigationMenu.Item>
                    </NavigationMenu.List>
                    <div className="py-6">
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-50"
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

export { Header };
