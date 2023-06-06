import "../common/index/index.module.css";
import "../components";
import Demo from "../components/demo/Team.js";
import { Navbar, Header, Features, Footer } from "../components";
import React from "react";

function Home() {
  return (
    <>
      <header className={"navbar-bg"}>
        <Navbar />
      </header>
      <header className="navbar-bg">
        <header className="header-bg">
          <Header />
        </header>
      </header>

      <Features />
      <Demo />
      <Footer />
    </>
  );
}

export default Home;
