import Script from "next/script";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Journey from "@/components/Journey";
import Expertise from "@/components/Expertise";
import Store from "@/components/Store";
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
        <Store />
        <Connect />
      </main>
      <Script src="/js/main.js" strategy="afterInteractive" />
    </>
  );
}