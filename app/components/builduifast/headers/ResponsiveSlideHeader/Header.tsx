import { useIsMobile } from "../../utils";
import * as Dialog from "@radix-ui/react-dialog";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Menu, X } from "lucide-react";
import * as React from "react";
import { Logo } from "~/components/builduifast/assets/Logo";
import { Button } from "~/components/builduifast/buttons/ClassicButton";

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
                  <Dialog.Overlay className="sm:bg-black sm:data-[state=open]:animate-in sm:data-[state=open]:fade-in-0 sm:data-[state=closed]:animate-out sm:data-[state=closed]:fade-out-0 sm:pointer-events-none sm:fixed sm:inset-0 sm:opacity-50 sm:data-[state=closed]:duration-200 sm:data-[state=open]:duration-300 sm:data-[state=closed]:ease-in-out sm:data-[state=open]:ease-out" />
                  <Dialog.Content asChild>
                    <NavigationMenu.Root
                      orientation="vertical"
                      className="data-[state=open]:ease-slider-in data-[state=open]:animate-in data-[state=closed]:animate-out max-sm:data-[state=closed]:slide-out-to-top max-sm:data-[state=open]:slide-in-from-top-4 max-sm:data-[state=closed]:fade-out-0 sm:data-[state=open]:slide-in-from-right sm:data-[state=closed]:slide-out-to-right absolute right-0 flex w-full flex-col border-l border-gray-200 bg-white px-[15px] pb-5 pt-2 shadow outline-none max-sm:data-[state=closed]:duration-150 max-sm:data-[state=open]:duration-300 max-sm:data-[state=closed]:ease-in sm:fixed sm:inset-y-0 sm:max-w-sm sm:px-6 sm:py-5 sm:data-[state=closed]:duration-200 sm:data-[state=open]:duration-500 sm:data-[state=closed]:ease-in-out lg:hidden"
                    >
                      <div className="hidden sm:block sm:self-end">
                        <a href="#" className="sm:hidden">
                          <span className="sr-only">Eureka</span>
                          <Logo className="h-8" />
                        </a>
                        <Button
                          variant="ghost"
                          iconButton
                          onClick={() => {
                            setIsMenuPoppedOut(false);
                          }}
                        >
                          <span className="sr-only">關閉主選單</span>
                          <X />
                        </Button>
                      </div>
                      <div className="divide-y divide-gray-100">
                        <NavigationMenu.List className="space-y-2 pb-6 sm:py-6">
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
                        <div className="pt-6 sm:py-6">
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
          </div>
        </div>
      </NavigationMenu.Root>
    </header>
  );
}

export { Header };
