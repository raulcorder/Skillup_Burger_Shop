import React from "react";
import { Country, State } from "country-state-city";
import Popup from "reactjs-popup";

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
            {/* Compelte the code for the COUNTRY DROPDOWN*/}
            <label>País</label>

            <select>
              <option value="">País</option>
              // Enter the code here for country dropdown
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
            trigger={<button type="button">Confirmar pedido</button>}
            position="right center"
          >
            <div
              style={{
                color: "red",
                position: "absolute",
                top: "50%",
                right: "100%",
                transform: "translateY(-50%)",
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              Pedido realizado.
            </div>
          </Popup>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
