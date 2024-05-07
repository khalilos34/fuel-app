import FuelTable from "./FuelTable";
import TrackInfo from "./TrackInfo";

const TrackDetails = () => {
  return (
    <section className="flex size-full flex-col">
      <div>
        <TrackInfo />
      </div>
      <div>
        <FuelTable />
      </div>
    </section>
  );
};

export default TrackDetails;
