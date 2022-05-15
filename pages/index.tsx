import Career from "../components/organism/Career";
import Contact from "../components/organism/Contact";
import Footer from "../components/organism/Footer";
import MainBanner from "../components/organism/MainBanner";
import Navbar from "../components/organism/Navbar";

export default function Home() {
  return (
    <>
      <Navbar activeMenu="Home" />
      <MainBanner />
      <Career />
      <Contact />
      <Footer />
    </>

  );
}
