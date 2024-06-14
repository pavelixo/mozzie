import Image from "next/image";
import Carrossel from "./carrosel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <h1 className="text-4xl font-bold mb-8">Mozzie Anonymous</h1>
      <Carrossel />
    </main>
  );
}
