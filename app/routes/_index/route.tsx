import { Spinner } from "./Spinner";
import type { ActionFunction, MetaFunction } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import {
  Blocks,
  CheckCircle,
  Globe,
  HeartHandshake,
  Layers,
  Zap,
} from "lucide-react";
import * as React from "react";
import bgMobileSrc from "~/assets/bg-mobile.png";
import bgSrc from "~/assets/bg.png";
import { Button } from "~/components/site/Button";
import { CreateContactResult, createContact } from "~/services/loops";
import { cn } from "~/utils/cn";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  return await createContact({ email, subscribed: true });
};

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const actionData = useActionData<CreateContactResult>();
  const navigation = useNavigation();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const state =
    navigation.state === "submitting" || navigation.state === "loading"
      ? "submitting"
      : actionData?.success
        ? "success"
        : actionData?.success === false
          ? "error"
          : "idle";

  React.useEffect(() => {
    if (inputRef.current && state === "error") {
      inputRef.current.focus();
    }
  }, [state]);

  return (
    <div>
      <img
        src={bgSrc}
        className="absolute left-1/2 top-0 -z-10 hidden max-h-[1360px] max-w-full -translate-x-1/2 object-cover opacity-70 lg:block"
        width="1440"
        height="1440"
      />
      <img
        src={bgMobileSrc}
        className="absolute left-1/2 top-0 -z-10 min-h-[960px] max-w-full -translate-x-1/2 object-cover opacity-70 lg:hidden"
        width="960"
        height="960"
      />

      <section className="container mx-auto pt-12 md:pt-16 lg:pb-16 lg:pt-24">
        <div className="inline-block md:flex md:justify-center">
          <div className="-z-[5] flex items-center rounded-lg border border-gray-300 bg-white px-3 py-1.5 shadow lg:py-1">
            <span className="relative flex h-2 w-2">
              <span className="bg-primary-400 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
              <span className="bg-primary-600 relative inline-flex h-2 w-2 rounded-full" />
            </span>
            <span className="ml-3 text-sm font-medium text-gray-600">
              加入 waitlist 取得最新發布消息
            </span>
            <HeartHandshake className="ml-2 h-4 w-4 flex-shrink-0 text-gray-500" />
          </div>
        </div>
        <h1 className="mt-8 text-4xl font-semibold leading-[44px] md:mt-8 md:text-center md:text-6xl md:leading-[72px]">
          以前所未有的速度打造 UI
        </h1>
        <p className="mt-6 text-lg text-gray-600 md:mx-auto md:mt-8 md:max-w-3xl md:text-center md:text-xl md:leading-[150%]">
          一套全面、精心製作、易於修改的 components 組合包 + 多份大型 UI
          構建指南，幫助你高速開發應用，快速實現創意想法
        </p>
        <div className="mt-8 md:mt-20 md:flex md:justify-center">
          {state === "success" ? (
            <div className="flex min-h-[48px] space-x-2 ease-out animate-in fade-in-0 zoom-in">
              <CheckCircle className="text-success-600 h-6 w-6 flex-shrink-0 " />
              <span>成功加入 waitlist!</span>
            </div>
          ) : (
            <Form
              method="post"
              replace
              className="flex flex-col gap-4 md:flex-row"
            >
              <div className="relative">
                <input
                  ref={inputRef}
                  type="email"
                  name="email"
                  aria-label="Email address"
                  placeholder="tony@gmail.com"
                  className={cn(
                    "form-input focus:ring-primary-200 focus:border-primary-500 min-h-[48px] w-full rounded-lg border border-gray-300 p-2 px-[14px] shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 md:w-[345px]",
                    {
                      "ring-error-200 border-error-600 focus:ring-error-200 focus:border-error-600 peer":
                        state === "error",
                    },
                  )}
                />
                {state === "error" && (
                  <p className="text-error-600 absolute bottom-0 translate-y-[calc(100%_+_4px)] text-sm">
                    {actionData?.message}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                className="relative flex-shrink-0"
                size="xl"
              >
                <span className={cn({ invisible: state === "submitting" })}>
                  加入 waitlist
                </span>
                {state === "submitting" && (
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Spinner className="h-5 w-5" />
                  </div>
                )}
              </Button>
            </Form>
          )}
        </div>
      </section>

      <section className="container mx-auto py-24">
        <div className="text-primary-700 font-semibold md:text-center">
          特點
        </div>
        <h2 className="mt-3 text-2xl font-semibold text-gray-700 md:text-center">
          4 個 Build UI Fast 的特別之處
        </h2>
        <div className="mt-12 flex flex-wrap gap-6">
          <div className="min-w-[286px] flex-1 rounded border border-gray-100 bg-[#F9FAFB] p-6">
            <div className="bg-primary-600 flex h-12 w-12 items-center justify-center rounded-lg text-white">
              <Blocks className="h-6 w-6" />
            </div>
            <div className="mt-12 text-xl font-semibold leading-normal lg:mt-16">
              開發效率高且易於修改
            </div>
            <div className="mt-4 leading-relaxed text-gray-500">
              用過了市面上大部分的 component library，有些內帶 style，有些是
              headless，但這些工具要不太原始，要不封裝太好難以修改，因此 build
              ui fast 的 component 只把最難 implement 的地方實作完
              (通常是動畫)，而其他 style 都是用 tailwindcss，隨便你怎麼改
            </div>
          </div>
          <div className="min-w-[286px] flex-1 rounded border border-gray-100 bg-[#F9FAFB] p-6">
            <div className="bg-primary-600 flex h-12 w-12 items-center justify-center rounded-lg text-white">
              <Layers className="h-6 w-6" />
            </div>
            <div className="mt-12 text-xl font-semibold leading-normal lg:mt-16">
              樣式繁多
            </div>
            <div className="mt-4 leading-relaxed text-gray-500">
              每個 component
              都有數種不一樣的樣式，這些樣式靈感來自世界各個網站及各地的 design
              engineer 和 ui designer，沒事也可以學學這些效果怎麼實現
            </div>
          </div>
          <div className="min-w-[286px] flex-1 rounded border border-gray-100 bg-[#F9FAFB] p-6">
            <div className="bg-primary-600 flex h-12 w-12 items-center justify-center rounded-lg text-white">
              <Zap className="h-6 w-6" />
            </div>
            <div className="mt-12 text-xl font-semibold leading-normal lg:mt-16">
              更新快速
            </div>
            <div className="mt-4 leading-relaxed text-gray-500">
              這套 components 是我平時開發 side project
              會用的工具箱，所以你可以預期 component 數量及品質都會持續成長
            </div>
          </div>
          <div className="min-w-[286px] flex-1 rounded border border-gray-100 bg-[#F9FAFB] p-6">
            <div className="bg-primary-600 flex h-12 w-12 items-center justify-center rounded-lg text-white">
              <Globe className="h-6 w-6" />
            </div>
            <div className="mt-12 text-xl font-semibold leading-normal lg:mt-16">
              為中文而生
            </div>
            <div className="mt-4 leading-relaxed text-gray-500">
              裡頭很多 components
              的樣式、間距，都有特別考量中文字體，即使做的是中文網站，也能換字即用
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
