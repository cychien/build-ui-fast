import { Announcement } from "../announcement/Announcement";
import { Button } from "../button/Button";
import { MonitorPlay } from "lucide-react";

function Hero() {
  return (
    <div className="container mx-auto">
      <div className="md:flex md:justify-center">
        <Announcement />
      </div>
      <div className="mt-8 flex md:justify-center">
        <h1 className="text-4xl font-semibold leading-[44px] md:max-w-screen-sm md:text-center md:text-6xl md:leading-[120%] lg:max-w-screen-md xl:max-w-screen-lg">
          提高生產力的極簡日曆
        </h1>
      </div>
      <div className="mt-6 flex md:mt-8 md:justify-center">
        <p className="text-lg text-gray-600 md:max-w-xl md:text-center md:text-xl md:leading-[150%] lg:max-w-screen-sm xl:max-w-screen-md">
          一款結合極簡風格和強大功能的新世代日曆軟體。內置先進 AI
          技術，讓您的時間管理更加高效，輕鬆完成每一項任務。
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
  import { Announcement } from "~/components/ui/Announcement";
  import { Button } from "~/components/ui/Button";
  import { MonitorPlay } from "lucide-react";

  function Hero() {
    return (
      <div className="container mx-auto">
        <div className="md:flex md:justify-center">
          <Announcement />
        </div>
        <div className="mt-8 flex md:justify-center">
          <h1 className="text-4xl font-semibold leading-[44px] md:max-w-screen-sm md:text-center md:text-6xl md:leading-[120%] lg:max-w-screen-md xl:max-w-screen-lg">
            提高生產力的極簡日曆
          </h1>
        </div>
        <div className="mt-6 flex md:mt-8 md:justify-center">
          <p className="text-lg text-gray-600 md:max-w-xl md:text-center md:text-xl md:leading-[150%] lg:max-w-screen-sm xl:max-w-screen-md">
            一款結合極簡風格和強大功能的新世代日曆軟體。內置先進 AI
            技術，讓您的時間管理更加高效，輕鬆完成每一項任務。
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
