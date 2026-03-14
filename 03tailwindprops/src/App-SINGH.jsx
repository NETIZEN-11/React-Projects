import Card from "./components/card";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center gap-4">
      <h1 className="bg-green-40 text-black px-5 py-2 rounded-xl text-xl font-bold">
        Tailwind test
      </h1>

      <Card
        title="Delba"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
        img="https://images.unsplash.com/photo-1546961329-78bef0414d7c?auto=format&fit=crop&w=800&q=60"
        btnText="View Profile →"
      />
    </div>
  );
}












