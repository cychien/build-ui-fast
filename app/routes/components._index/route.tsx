export default function ComponentsPage() {
  return (
    <div className="container mx-auto">
      <h1 className="py-6 text-3xl font-semibold md:py-12">Components</h1>

      <div className="divide-y divide-gray-100 md:grid md:grid-cols-[220px_1fr] md:gap-x-16 lg:grid-cols-[260px_1fr] xl:grid-cols-[300px_1fr]">
        <Row
          name="佈局用 components"
          description="玉山山貌高峻，最高峰玉山主峰四面皆是陡壁危崖，南北兩側是千仞峭壁，西側絕壑深"
        >
          {/* <ComponentsGrid>
            <ComponentCard
              name="Header"
              imageUrl="https://res.cloudinary.com/dgppby8lr/image/upload/v1703677916/build-ui-fast/Header-03_zlko7x.png"
            />
          </ComponentsGrid> */}
        </Row>
        <Row
          name="基礎 components"
          description="玉山山貌高峻，最高峰玉山主峰四面皆是陡壁危崖，南北兩側是千仞峭壁，西側絕壑深"
        >
          <ComponentsGrid>
            <ComponentCard
              name="Announcement"
              imageUrl="https://res.cloudinary.com/dgppby8lr/image/upload/v1703677359/build-ui-fast/announcement_szelwe.png"
            />
          </ComponentsGrid>
        </Row>
        <Row
          name="複合 components"
          description="玉山山貌高峻，最高峰玉山主峰四面皆是陡壁危崖，南北兩側是千仞峭壁，西側絕壑深"
        ></Row>
        <Row
          name="各式效果"
          description="玉山山貌高峻，最高峰玉山主峰四面皆是陡壁危崖，南北兩側是千仞峭壁，西側絕壑深"
        ></Row>
      </div>
    </div>
  );
}

type RowProps = {
  name: string;
  description: string;
  children?: React.ReactNode;
};

function Row({ name, description, children }: RowProps) {
  return (
    <div className="py-12 first-of-type:pt-6 max-md:space-y-8 md:col-span-2 md:grid md:grid-cols-subgrid xl:first-of-type:pt-12">
      <div>
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="mt-3 text-sm text-gray-600">{description}</p>
      </div>
      <div className="col-start-2 overflow-auto">{children}</div>
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
  imageUrl: string;
};

function ComponentCard({ name, imageUrl }: ComponentCardProps) {
  return (
    <div>
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-100">
        <img src={imageUrl} alt="" />
      </div>
      <div className="mt-1 text-sm font-medium md:mt-2">{name}</div>
    </div>
  );
}
