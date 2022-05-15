import React from "react";
import Menu from "./Menu";

interface NavbarProps {
  activeMenu: string;
}
export default function Navbar(props: NavbarProps) {
  const { activeMenu } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mainNav">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <Menu title="Home" href="/" active={activeMenu === "Home"} />
            <Menu title="About Me" href="/about" active={activeMenu === "About"} />
            <Menu title="Portfolio" href="/portfolio" active={activeMenu === "Portfolio"} />
            <Menu title="Profile" href="/profile" active={activeMenu === "Profile"} />
          </ul>
        </div>
      </div>
    </nav>
  );
}
