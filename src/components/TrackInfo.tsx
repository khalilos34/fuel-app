import { Button } from "./ui/button";

const TrackInfo = () => {
  return (
    <div className=" flex h-[75px] items-center justify-around bg-white p-4 ">
      <h1 className="font-bold">Name: Chaker</h1>
      <h1 className="font-bold">
        Plate Number: <span className="underline">123 tunis 5462 </span>
      </h1>
      <Button className="rounded-md">add new</Button>
    </div>
  );
};

export default TrackInfo;
