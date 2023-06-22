import React from "react";
import styles from "./styles.module.scss";
import {
  Banner,
  About,
  Benefits,
  How,
  Creator,
  Buy,
  Whatsapp,
  Footer,
} from "./components";
import { Element } from "react-scroll";

function Home() {
  return (
    <div className={styles.container}>
      <Banner />
      <About />
      <Benefits />
      <How />
      <Creator />
      <Element id="buy" name="buy">
        <Buy />
      </Element>
      <Footer />
      <Whatsapp />
    </div>
  );
}

export default Home;
