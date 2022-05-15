import Navbar from "../components/organism/Navbar";
import Content from "../components/organism/Portfolio";

export default function portfolio() {
  return (
    <>
      <Navbar activeMenu="Portfolio" />
      <Content />
    </>
  );
}
