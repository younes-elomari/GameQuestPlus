import Footer from "./_components/main/Footer";
import Games from "./_components/main/Games";
import Hero from "./_components/main/Hero";
import Subscribe from "./_components/main/Subscribe";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Games />
        <Subscribe />
        <Footer />
      </div>
    </main>
  );
}
