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
              <th>Amount</th>
              <th>Importe</th>
              <th>Método de pago</th>
              <th>Ver más</th>
            </tr>
          </thead>

          <tbody></tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
