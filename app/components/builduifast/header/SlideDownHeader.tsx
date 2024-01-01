import * as Dialog from "@radix-ui/react-dialog";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Menu, X } from "lucide-react";
import * as React from "react";
import { Logo } from "~/components/builduifast/assets/Logo";
import { Button } from "~/components/builduifast/button/ClassicButton";

const navItems = [
  { name: "產品", url: "#" },
  { name: "資源", url: "#" },
  { name: "案例分享", url: "#" },
  { name: "FAQ", url: "#" },
];

function Header() {
  const [isMenuPoppedOut, setIsMenuPoppedOut] = React.useState(false);
  const headerRef = React.useRef(null);

  return (
    <div ref={headerRef} className="relative isolate z-10">
      <header className="bg-white py-5">
        <NavigationMenu.Root className="container mx-auto flex items-center">
          <div className="flex items-center space-x-10">
            <a href="/">
              <span className="sr-only">Eureka</span>
              <Logo className="h-8" />
            </a>
            <NavigationMenu.List className="hidden lg:flex lg:space-x-8">
              {navItems.map((item) => (
                <NavigationMenu.Item key={item.name}>
                  <a href={item.url} className="font-medium text-gray-700">
                    {item.name}
                  </a>
                </NavigationMenu.Item>
              ))}
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
              modal={false}
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
              <Dialog.Portal container={headerRef.current}>
                <Dialog.Overlay />
                <Dialog.Content asChild>
                  <div className="absolute right-0 flex w-full flex-col bg-white pb-5 pt-2 shadow outline-none data-[state=closed]:duration-100 data-[state=open]:duration-200 data-[state=closed]:ease-in data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2 data-[state=open]:ease-slider-in lg:hidden">
                    <NavigationMenu.Root
                      orientation="vertical"
                      className="container mx-auto divide-y divide-gray-100"
                    >
                      <NavigationMenu.List className="space-y-2 pb-6">
                        {navItems.map((item) => (
                          <NavigationMenu.Item key={item.name}>
                            <a
                              href={item.url}
                              className="-mx-3 block h-full rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-gray-50"
                            >
                              {item.name}
                            </a>
                          </NavigationMenu.Item>
                        ))}
                      </NavigationMenu.List>
                      <div className="pt-6">
                        <a
                          href="#"
                          className="-mx-3 block rounded-lg px-3 py-2 font-medium text-gray-700 hover:bg-gray-50"
                        >
                          登入
                        </a>
                      </div>
                    </NavigationMenu.Root>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </NavigationMenu.Root>
      </header>
    </div>
  );
}

export default Header;
