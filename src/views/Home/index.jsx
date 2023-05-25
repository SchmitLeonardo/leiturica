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
      <Whatsapp />
    </div>
  );
}

export default Home;
