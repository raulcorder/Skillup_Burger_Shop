import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";

const MyOrders = () => {
  const arr = [1, 2, 3, 4];

  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Número de pedido</th>
              <th>Estado</th>
              <th>Cantidad</th>
              <th>Importe</th>
              <th>Método de pago</th>
              <th>Ver más</th>
            </tr>
          </thead>

          <tbody>
            {arr.map((i) => (
              <tr key={i}>
                <td>#ON??????</td>
                <td>En curso</td>
                <td>3</td>
                <td>€ {16.0}</td>
                <td>Pago contra entrega</td>
                <td>
                  <Link to="/myOrders/OrderDetails">
                    <AiOutlineEye />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
