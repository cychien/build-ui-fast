import { Button } from "../button/Button";
import { MonitorPlay } from "lucide-react";

// TODO: use Announcement component

function Hero() {
  return (
    <div className="container mx-auto">
      <div className="inline-block md:flex md:justify-center">
        <div className="-z-[5] flex items-center rounded-lg border border-gray-300 bg-white px-3 py-1.5 shadow lg:py-1">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-600" />
          </span>
          <span className="ml-3 text-sm font-medium text-gray-600">
            黑五特價！所有方案一律享 5 折優惠
          </span>
        </div>
      </div>
      <div className="mt-8 flex md:justify-center">
        <h1 className="text-4xl font-semibold leading-[44px] md:max-w-screen-sm md:text-center md:text-6xl md:leading-[120%] lg:max-w-screen-md xl:max-w-screen-lg">
          解放生產力的極簡日曆
        </h1>
      </div>
      <div className="mt-6 flex md:mt-8 md:justify-center">
        <p className="text-lg text-gray-600 md:max-w-xl md:text-center md:text-xl md:leading-[150%] lg:max-w-screen-sm xl:max-w-screen-md">
          一款結合極簡風格和強大功能的新世代日曆軟體。內置先進的 AI
          技術，讓您的時間管理更加高效，並引導您輕鬆完成每一項任務。
        </p>
      </div>
      <div className="mt-8 flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0 md:mt-12 md:justify-center">
        <Button variant="outline" size="xl">
          <MonitorPlay className="mr-2.5 size-5" />
          預約 Demo
        </Button>
        <Button size="xl">註冊</Button>
      </div>
    </div>
  );
}

function Demo() {
  return (
    <div className="pb-16 pt-16 md:pt-24">
      <Hero />
    </div>
  );
}

const templateCode = `\
  import { Button } from "~/components/ui/Button";
  import { MonitorPlay } from "lucide-react";

  function Hero() {
    return (
      <div className="container mx-auto">
        <div className="inline-block md:flex md:justify-center">
          <div className="-z-[5] flex items-center rounded-lg border border-gray-300 bg-white px-3 py-1.5 shadow lg:py-1">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-600" />
            </span>
            <span className="ml-3 text-sm font-medium text-gray-600">
              黑五特價！所有方案一律享 5 折優惠
            </span>
          </div>
        </div>
        <div className="mt-8 flex md:justify-center">
          <h1 className="text-4xl font-semibold leading-[44px] md:max-w-screen-sm md:text-center md:text-6xl md:leading-[120%] lg:max-w-screen-md xl:max-w-screen-lg">
            解放生產力的極簡日曆
          </h1>
        </div>
        <div className="mt-6 flex md:mt-8 md:justify-center">
          <p className="text-lg text-gray-600 md:max-w-xl md:text-center md:text-xl md:leading-[150%] lg:max-w-screen-sm xl:max-w-screen-md">
            一款結合極簡風格和強大功能的新世代日曆軟體。內置先進的 AI
            技術，讓您的時間管理更加高效，並引導您輕鬆完成每一項任務。
          </p>
        </div>
        <div className="mt-8 flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0 md:mt-12 md:justify-center">
          <Button variant="outline" size="xl">
            <MonitorPlay className="mr-2.5 size-5" />
            預約 Demo
          </Button>
          <Button size="xl">註冊</Button>
        </div>
      </div>
    );
  }
`;

export default Demo;
export { templateCode };
