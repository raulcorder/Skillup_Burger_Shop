import React from "react";
import Popup from "reactjs-popup";

const MenuCard = ({ itemNum, burgerSrc, price, title, handler, delay = 0 }) => {
  return (
    <div className="menuCard">
      <div>
        <h2>Menú {itemNum}</h2>
      </div>
      <main>
        <img src={burgerSrc} alt={itemNum} />

        <h5>{price} €</h5>

        <p>{title}</p>
        <Popup
          trigger={
            <button onClick={() => handler(itemNum)}>Añadir al carrito</button>
          }
        >
          <div
            style={{
              color: "red",
              transform: "translate(0%,00%)",
              backgroundColor: "#fff",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            ¡Añadido al carrito!
          </div>
        </Popup>
      </main>
    </div>
  );
};

export default MenuCard;
