import { Nav } from "./components/nav";
import { Hero, Ticker } from "./components/hero";
import { Services } from "./components/services";
import { System } from "./components/system";
import { Faq } from "./components/faq";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Ticker />
        <Services />
        <System />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
