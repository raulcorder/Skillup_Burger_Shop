import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Cart = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
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

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Hamburguesa con queso"}
          img={burger1}
          value={count}
          increment={() => increment(0)}
          decrement={() => decrement(0)}

          // Add the function for decrementing the order by 1
        />
        <CartItem
          title={"Hamburguesa vegetariana con queso"}
          img={burger2}
          value={count}
          increment={() => increment(1)}
          decrement={() => decrement(1)}

          // Add the function for decrementing the order by 2
        />

        {/* Fill up the code for Cheese Burger similarly */}
        <CartItem
          title={"Hamburguesa con queso y papas fritas"}
          img={burger3}
          value={count}
          increment={() => increment(2)}
          decrement={() => decrement(2)}

          // Add the function for decrementing the order by 1
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>€{2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>€{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>€{200}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>€{2000 + 2000 * 0.18 + 200}</p>
          </div>
          <Link to="/shipping">Hacer pedido</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
