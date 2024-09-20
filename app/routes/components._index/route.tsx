import { Link } from "@remix-run/react";

export default function ComponentsPage() {
  return (
    <div className="container mx-auto">
      <div className="py-6 md:py-12">
        <div className="group inline-flex items-center rounded-full border border-gray-300 bg-gray-50 py-1 pl-1 pr-2.5 hover:bg-gray-100">
          <span className="rounded-full bg-gray-800 px-2 py-0.5 text-sm font-medium text-gray-50">
            產品製作中
          </span>
          <span className="ml-2 flex items-center">
            <span className="text-sm font-medium text-gray-600">
              全部 components 免費使用
            </span>
          </span>
        </div>
        <h1 className="mt-4 text-3xl font-semibold">Components</h1>
      </div>

      <div className="divide-y divide-gray-200 md:grid md:grid-cols-[220px_1fr] md:gap-x-16 lg:grid-cols-[260px_1fr] xl:grid-cols-[300px_1fr]">
        <Row
          id="layout"
          name="佈局用 components"
          description="快速拉出整體 layout"
        >
          <ComponentsGrid>
            <ComponentCard
              name="Header"
              componentId="header"
              // imageUrl="https://res.cloudinary.com/dgppby8lr/image/upload/v1703677916/build-ui-fast/Header-03_zlko7x.png"
              variantCount={4}
            />
            <ComponentCard
              name="Hero"
              componentId="hero"
              // imageUrl="https://res.cloudinary.com/dgppby8lr/image/upload/v1703677916/build-ui-fast/Header-03_zlko7x.png"
              variantCount={3}
            />
            <ComponentCard
              name="Footer"
              componentId="footer"
              // imageUrl="https://res.cloudinary.com/dgppby8lr/image/upload/v1703677916/build-ui-fast/Header-03_zlko7x.png"
              variantCount={1}
            />
            <ComponentCard
              name="Grid"
              componentId="grid"
              // imageUrl="https://res.cloudinary.com/dgppby8lr/image/upload/v1703677916/build-ui-fast/Header-03_zlko7x.png"
              variantCount={4}
            />
            <ComponentCard
              name="多欄位排版"
              componentId="multi-columns-layout"
              // imageUrl="https://res.cloudinary.com/dgppby8lr/image/upload/v1703677916/build-ui-fast/Header-03_zlko7x.png"
              variantCount={4}
            />
            <ComponentCard
              name="背景"
              componentId="background"
              // imageUrl="https://res.cloudinary.com/dgppby8lr/image/upload/v1703677916/build-ui-fast/Header-03_zlko7x.png"
              variantCount={4}
            />
          </ComponentsGrid>
        </Row>
        <Row
          id="basic"
          name="基礎 components"
          description="呈現更精緻的個別組件"
        >
          <ComponentsGrid>
            <ComponentCard
              name="Button"
              componentId="button"
              // imageUrl="https://res.cloudinary.com/dgppby8lr/image/upload/v1703677916/build-ui-fast/Header-03_zlko7x.png"
              variantCount={2}
            />
            <ComponentCard
              name="Announcement"
              componentId="announcement"
              // imageUrl="https://res.cloudinary.com/dgppby8lr/image/upload/v1703677359/build-ui-fast/announcement_szelwe.png"
              variantCount={3}
            />
            <ComponentCard
              name="Tabs"
              componentId="tabs"
              // imageUrl="https://res.cloudinary.com/dgppby8lr/image/upload/v1703677359/build-ui-fast/announcement_szelwe.png"
              variantCount={2}
            />
            <ComponentCard
              name="Card"
              componentId="card"
              // imageUrl="https://res.cloudinary.com/dgppby8lr/image/upload/v1703677359/build-ui-fast/announcement_szelwe.png"
              variantCount={1}
            />
            <ComponentCard
              name="可伸縮元素"
              componentId="resizable"
              // imageUrl="https://res.cloudinary.com/dgppby8lr/image/upload/v1703677916/build-ui-fast/Header-03_zlko7x.png"
              variantCount={1}
            />
          </ComponentsGrid>
        </Row>
        <Row
          id="composite"
          name="複合 components"
          description="節省用基礎 components 拼裝的時間"
        ></Row>
        <Row id="effect" name="各式效果" description="讓整體視覺更上層樓">
          <ComponentsGrid>
            <ComponentCard
              name="進場動畫"
              componentId="entry-animation"
              // imageUrl="https://res.cloudinary.com/dgppby8lr/image/upload/v1703677916/build-ui-fast/Header-03_zlko7x.png"
              variantCount={1}
            />
          </ComponentsGrid>
        </Row>
      </div>
    </div>
  );
}

type RowProps = {
  name: string;
  description: string;
  id: string;
  children?: React.ReactNode;
};

function Row({ name, description, id, children }: RowProps) {
  return (
    <div
      id={id}
      className="py-12 first-of-type:pt-6 max-md:space-y-8 md:col-span-2 md:grid md:grid-cols-subgrid xl:first-of-type:pt-12"
    >
      <div className="relative top-1">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="mt-3 text-sm text-gray-600">{description}</p>
      </div>
      <div className="col-start-2">{children}</div>
    </div>
  );
}

type ComponentsGridProps = {
  children?: React.ReactNode;
};

function ComponentsGrid({ children }: ComponentsGridProps) {
  return (
    <div className="grid gap-x-4 gap-y-6 md:grid-cols-[repeat(auto-fill,_minmax(min(200px,_100%),_1fr))] lg:grid-cols-[repeat(auto-fill,_minmax(min(250px,_100%),_1fr))] lg:gap-6">
      {children}
    </div>
  );
}

type ComponentCardProps = {
  name: string;
  componentId: string;
  imageUrl?: string;
  variantCount?: number;
};

function ComponentCard({
  name,
  componentId,
  imageUrl,
  variantCount,
}: ComponentCardProps) {
  return (
    <Link
      to={`/components/${componentId}`}
      className="relative before:absolute before:-inset-2 before:-z-10 before:rounded-xl before:hover:bg-gray-50"
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
        {imageUrl && <img src={imageUrl} alt="" />}
      </div>
      <div className="mt-1 text-sm font-medium md:mt-2">{name}</div>
      {variantCount && (
        <div className="mt-0.5 text-xs text-gray-400">{`${variantCount}樣式`}</div>
      )}
    </Link>
  );
}
