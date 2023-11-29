import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Cart = () => {
  const [burgerQueso, setBurgerQueso] = useState(0);
  const [burgerVeg, setBurgerVeg] = useState(0);
  const [burgerFritas, setBurgerFritas] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [iva, setIva] = useState(0);
  const [total, setTotal] = useState(3);
  const gastosEnvio = useState(1.9);

  const increment = (item) => {
    switch (item) {
      case "burgerQueso":
        setBurgerQueso((prev) => prev + 1);
        break;
      case "burgerVeg":
        setBurgerVeg((prev) => prev + 1);
        break;
      case "burgerFritas":
        setBurgerFritas((prev) => prev + 1);
        break;
      default:
    }
  };

  const decrement = (item) => {
    switch (item) {
      case "burgerQueso":
        if (burgerQueso !== 0) {
          setBurgerQueso((prev) => prev - 1);
        } else {
          setBurgerQueso(0);
        }
        break;
      case "burgerVeg":
        if (burgerVeg !== 0) {
          setBurgerVeg((prev) => prev - 1);
        } else {
          setBurgerVeg(0);
        }
        break;
      case "burgerFritas":
        if (burgerFritas !== 0) {
          setBurgerFritas((prev) => prev - 1);
        } else {
          setBurgerFritas(0);
        }
        break;
      default:
    }
  };

  const CartItem = ({ value, title, img, increment, decrement }) => (
    <div className="cartItem">
      <div>
        <h4>{title}</h4>
        <img src={img} alt="Item" />
      </div>

      <div>
        <button onClick={decrement}>-</button>
        <input type="number" readOnly value={value} />
        <button onClick={increment}>+</button>
      </div>
    </div>
  );

  useEffect(() => {
    setSubTotal(burgerFritas * 7.0 + burgerQueso * 5.0 + burgerVeg * 6.0);
    setIva(() => (subTotal * 0.21).toFixed(2));
    setTotal(() =>
      (
        parseFloat(subTotal) +
        parseFloat(iva) +
        parseFloat(gastosEnvio)
      ).toFixed(2)
    );
  }, [subTotal, burgerFritas, burgerQueso, burgerVeg, gastosEnvio, iva]);

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Hamburguesa con queso"}
          img={burger1}
          value={burgerQueso}
          increment={() => increment("burgerQueso")}
          decrement={() => decrement("burgerQueso")}

          // Add the function for decrementing the order by 1
        />
        <CartItem
          title={"Hamburguesa vegetariana con queso"}
          img={burger2}
          value={burgerVeg}
          increment={() => increment("burgerVeg")}
          decrement={() => decrement("burgerVeg")}

          // Add the function for decrementing the order by 2
        />

        {/* Fill up the code for Cheese Burger similarly */}
        <CartItem
          title={"Hamburguesa con queso y papas fritas"}
          img={burger3}
          value={burgerFritas}
          increment={() => increment("burgerFritas")}
          decrement={() => decrement("burgerFritas")}

          // Add the function for decrementing the order by 1
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>€{subTotal.toFixed(2)}</p>
          </div>
          <div>
            <h4>IVA</h4>
            <p>€{iva}</p>
          </div>
          <div>
            <h4>Gastos de envío</h4>
            <p>€{gastosEnvio}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>€{total}</p>
          </div>
          <Link to="/shipping">Hacer pedido</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
