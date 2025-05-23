import { Nav } from "@/components/nav";
import { Carousel } from "@/components/carousel";

export default function Page() {
  return (
    <>
      <Nav />
      <main className="p-8">
        <Carousel />
        <h2 className="text-2xl font-bold mt-8">Welcome to the Game!</h2>
        <p className="mt-4">
          This is a simple game where you can collect cards and trade them with other players. Use the packs to get started!
        </p>
        <p className="mt-4">
          Click on the packs to see what cards you can get. Each pack contains a random selection of cards, so open them to discover new ones!
        </p>
        <p className="mt-4">
          You can also trade cards with other players. Use the trade button to see what cards they have and make a deal!
        </p>
      </main>
    </>
  );
}
