import { Navbar } from "@/components";

export default function Generalayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <h1>Hello Mundo</h1>
        { children }
      </main>
    </>
  );
}