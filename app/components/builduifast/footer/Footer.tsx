import { Logo } from "../assets/Logo";
import { Dribbble, Github, Youtube } from "lucide-react";

function Footer() {
  return (
    <div>
      <div className="container mx-auto py-12 sm:pb-12 sm:pt-16 xl:flex xl:justify-between">
        <div className="max-w-xs">
          <a href="#">
            <span className="sr-only">Eureka</span>
            <Logo className="h-8" />
          </a>
          <p className="mt-4 text-gray-600 xl:mt-8">
            一個極簡設計的日曆，加上 AI 輔助規劃行程
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 xl:mt-0 xl:grid-cols-[repeat(3,_minmax(150px,_1fr))]">
          <div>
            <div className="text-sm font-semibold text-gray-400">產品</div>
            <ul className="mt-4 space-y-3">
              <li className="font-medium text-gray-600 hover:text-gray-600/80">
                <a href="/">功能</a>
              </li>
              <li className="font-medium text-gray-600 hover:text-gray-600/80">
                <a href="/">Release Note</a>
              </li>
              <li className="font-medium text-gray-600 hover:text-gray-600/80">
                <a href="/">Roadmap</a>
              </li>
              <li className="font-medium text-gray-600 hover:text-gray-600/80">
                <a href="/">定價</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-400">資源</div>
            <ul className="mt-4 space-y-3">
              <li className="font-medium text-gray-600 hover:text-gray-600/80">
                <a href="/">使用教學</a>
              </li>
              <li className="font-medium text-gray-600 hover:text-gray-600/80">
                <a href="/">使用場景</a>
              </li>
              <li className="font-medium text-gray-600 hover:text-gray-600/80">
                <a href="/">自訂主題庫</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-400">
              開發者專區
            </div>
            <ul className="mt-4 space-y-3">
              <li className="font-medium text-gray-600 hover:text-gray-600/80">
                <a href="/">API 文件</a>
              </li>
              <li className="font-medium text-gray-600 hover:text-gray-600/80">
                <a href="/">Changelog</a>
              </li>
              <li className="font-medium text-gray-600 hover:text-gray-600/80">
                <a href="/">RSS</a>
              </li>
              <li className="font-medium text-gray-600 hover:text-gray-600/80">
                <a href="/">開發者 Discord</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto flex flex-col sm:flex-row sm:justify-between">
          <p className="text-gray-500 max-sm:order-last max-sm:mt-3">
            © 2024 Eureka. All rights reserved.
          </p>
          <div className="flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-gray-500">
              <Dribbble />
            </a>
            <a href="#" className="hover:text-gray-500">
              <Github />
            </a>
            <a href="#" className="hover:text-gray-500">
              <Youtube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Demo() {
  return (
    <div className="">
      <Footer />
    </div>
  );
}

const templateCode = `\
  import { Logo } from "~/assets/Logo";
  import { Dribbble, Github, Youtube } from "lucide-react";

  function Footer() {
    return (
      <div>
        <div className="container mx-auto py-12 sm:pb-12 sm:pt-16 xl:flex xl:justify-between">
          <div className="max-w-xs">
            <a href="#">
              <span className="sr-only">Eureka</span>
              <Logo className="h-8" />
            </a>
            <p className="mt-4 text-gray-600 xl:mt-8">
              一個極簡設計的日曆，加上 AI 輔助規劃行程
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 xl:mt-0 xl:grid-cols-[repeat(3,_minmax(150px,_1fr))]">
            <div>
              <div className="text-sm font-semibold text-gray-400">產品</div>
              <ul className="mt-4 space-y-3">
                <li className="font-medium text-gray-600 hover:text-gray-600/80">
                  <a href="/">功能</a>
                </li>
                <li className="font-medium text-gray-600 hover:text-gray-600/80">
                  <a href="/">Release Note</a>
                </li>
                <li className="font-medium text-gray-600 hover:text-gray-600/80">
                  <a href="/">Roadmap</a>
                </li>
                <li className="font-medium text-gray-600 hover:text-gray-600/80">
                  <a href="/">定價</a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-400">資源</div>
              <ul className="mt-4 space-y-3">
                <li className="font-medium text-gray-600 hover:text-gray-600/80">
                  <a href="/">使用教學</a>
                </li>
                <li className="font-medium text-gray-600 hover:text-gray-600/80">
                  <a href="/">使用場景</a>
                </li>
                <li className="font-medium text-gray-600 hover:text-gray-600/80">
                  <a href="/">自訂主題庫</a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-400">
                開發者專區
              </div>
              <ul className="mt-4 space-y-3">
                <li className="font-medium text-gray-600 hover:text-gray-600/80">
                  <a href="/">API 文件</a>
                </li>
                <li className="font-medium text-gray-600 hover:text-gray-600/80">
                  <a href="/">Changelog</a>
                </li>
                <li className="font-medium text-gray-600 hover:text-gray-600/80">
                  <a href="/">RSS</a>
                </li>
                <li className="font-medium text-gray-600 hover:text-gray-600/80">
                  <a href="/">開發者 Discord</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 py-8">
          <div className="container mx-auto flex flex-col sm:flex-row sm:justify-between">
            <p className="text-gray-500 max-sm:order-last max-sm:mt-3">
              © 2024 Eureka. All rights reserved.
            </p>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-gray-500">
                <Dribbble />
              </a>
              <a href="#" className="hover:text-gray-500">
                <Github />
              </a>
              <a href="#" className="hover:text-gray-500">
                <Youtube />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  } 
`;

export default Demo;
export { templateCode };
