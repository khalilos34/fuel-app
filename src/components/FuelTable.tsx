import { Payment, columns } from "./payments/columns";
import { DataTable } from "./payments/data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      date: "12 jan 2014",
      index_debut: 100,
      index_finale: 150,
      kilometrage: 50,
      litrage: 150,
      consomation: 3,
      remarque: "none",
    },
    {
      date: "12 jan 2014",
      index_debut: 150,
      index_finale: 400,
      kilometrage: 250,
      litrage: 1000,
      consomation: 4,
      remarque: "none",
    },
    {
      date: "12 jan 2014",
      index_debut: 100,
      index_finale: 150,
      kilometrage: 50,
      litrage: 150,
      consomation: 3,
      remarque: "none",
    },
    {
      date: "12 jan 2014",
      index_debut: 100,
      index_finale: 150,
      kilometrage: 50,
      litrage: 150,
      consomation: 3,
      remarque: "none",
    },
  ];
}

export default async function FuelTable() {
  const data = await getData();

  return (
    <div className="container mx-auto my-4 bg-white py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
