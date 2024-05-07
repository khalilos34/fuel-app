import ContentBlock from "@/components/ContentBlock";
import SearchForm from "@/components/SearchForm";
import TrackDetails from "@/components/TrackDetails";
import TruckLists from "@/components/TruckLists";

export default async function Home() {
  return (
    <div className="container mx-auto flex h-full w-full flex-col py-10">
      <div className="flex items-center justify-between py-8">
        <h1 className=" flex flex-col text-sm">
          FuelSoft <span>Track fuel consumption with ease.</span>
        </h1>
        <h1 className=" flex flex-col items-center text-sm">
          5<span>current trucks</span>
        </h1>
      </div>
      <div className="grid  h-[600px] w-full grid-cols-[210px_1fr_1fr] grid-rows-[45px_1fr] gap-3">
        <div className=" col-span-1 col-start-1 row-span-1 row-start-1">
          <ContentBlock>
            <SearchForm />
          </ContentBlock>
        </div>
        <div className="col-start-1 row-span-full row-start-2 bg-white ">
          <ContentBlock>
            <TruckLists />
          </ContentBlock>
        </div>
        <div className="col-span-full col-start-2 row-span-full row-start-1 bg-white ">
          <ContentBlock>
            <TrackDetails />
          </ContentBlock>
        </div>
      </div>
    </div>
  );
}
