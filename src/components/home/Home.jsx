// Write all the code here
import React from "react";
import { motion } from "framer-motion";
import Menu from "./Menu";

const Home = () => {
  return (
    <>
      <section className="home">
        <div>
          <h1>Hamburguesería</h1>
          <p>Regálate una sabrosa hamburguesa.</p>
        </div>

        <a href="#menu">Explorar el menú</a>
      </section>
      <Menu />
    </>
  );
};
export default Home;
