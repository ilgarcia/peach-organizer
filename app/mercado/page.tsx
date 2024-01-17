import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      qtd: 1,
      product: "Maça",
    },
    {
      id: "m5gr84i9",
      qtd: 2,
      product: "Banana",
    },
    {
      id: "3u1reuv4",
      qtd: 1,
      product: "Pêra",
    },
    {
      id: "derv1ws0",
      qtd: 1,
      product: "Macarrão",
    },
    {
      id: "5kma53ae",
      qtd: 1,
      product: "Tomate",
    },
    {
      id: "bhqecj4p",
      qtd: 1,
      product: "Caramelo",
    },
    // ...
  ];
}

export default async function Mercado() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient mb-8">Financeiro</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
