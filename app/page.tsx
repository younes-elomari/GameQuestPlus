import Games from "./_components/main/Games";
import Hero from "./_components/main/Hero";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Games />
      </div>
    </main>
  );
}
