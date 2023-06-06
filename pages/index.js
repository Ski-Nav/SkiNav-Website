import "../common/index/index.module.css";
import "../components";
import Demo from "../components/demo/Team.js";
import { Navbar, Header, Features, Footer } from "../components";
import React from "react";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <Demo />
      <Footer />
    </>
  );
}

export default Home;
