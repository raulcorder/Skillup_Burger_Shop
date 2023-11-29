import React from "react";
import { Country, State } from "country-state-city";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Link } from "react-router-dom";

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Detalles del pedido</h1>
        <form>
          <div>
            <label>Dirección</label>
            <input type="text" placeholder="Introduce tu dirección" />
          </div>
          <div>
            <label>Ciudad</label>
            <input type="text" placeholder="Introduce tu localidad" />
          </div>
          <div>
            <label>País</label>

            <select>
              <option value="">País</option>
              {Country &&
                Country.getAllCountries().map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>Estado / Provincia</label>
            <select>
              <option value="">Provincia</option>
              {State &&
                State.getStatesOfCountry("ES").map((state) => (
                  <option value={state.isoCode} key={state.isoCode}>
                    {state.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>Código Postal</label>
            <input type="number" placeholder="Escribe tu código postal" />
          </div>
          <div>
            <label>Número de teléfono</label>
            <input type="number" placeholder="Escribe tu número de teléfono" />
          </div>

          <Popup
            trigger={
              <Link to="/myorders">
                <button className="link" type="button">
                  Confirmar pedido
                </button>
              </Link>
            }
            position="right center"
          >
            <div>Pedido realizado.</div>
          </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
