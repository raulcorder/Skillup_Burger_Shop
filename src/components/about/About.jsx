// Write all the code here
import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import avataro from "../../assets/skj.jpg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>Quiénes somos</h1>

        <article>
          <h3>Hamburguesería</h3>
          <p>
            Nuestra hamburguesería es el lugar con las hamburguesas más sabrosas
            del universo.
          </p>
          <p>
            Échale un ojo a la variedad de nuestros platos y hamburguesas
            clickando en el botón inferior para ver el menú
          </p>
          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>CEO</h2>
          <article>
            <div>
              <img src={avataro} alt="Imagen del dueño" />
              <h3>El Nelson</h3>
            </div>
            <p>
              Soy el Nelson, el CEO de Burguer Hop. <br />
              Adicto al Saboreo
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
