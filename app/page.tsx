import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Journey from "@/components/Journey";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Connect from "@/components/Connect";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <div className="grid-bg" />
      <Nav />
      <main>
        <Hero />
        <Story />
        <Journey />
        <Expertise />
        <Projects />
        <Connect />
      </main>
      <script src="/js/main.js"></script>
    </>
  );
}