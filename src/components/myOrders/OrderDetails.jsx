// Write all the code here
import React from "react";

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Información del pedido</h1>
        <div>
          <h1>Envío</h1>
          <p>
            <b>Dirección</b>
            {"Pontejos 34"}
          </p>
        </div>
        <div>
          <h1>Contacto</h1>
          <p>
            <b>Nombre</b>
            {"Pelayo"}
          </p>
          <p>
            <b>Teléfono</b>
            {"+34 674 879 234"}
          </p>
        </div>
        <div>
          <h1>Estado</h1>
          <p>
            <b>Estado del pedido</b>
            {"En curso"}
          </p>
          <p>
            <b>Fecha del pedido</b>
            {"23-11-2023"}
          </p>
          <p>
            <b>Fecha de entrega</b>
            {"23-11-2023"}
          </p>
        </div>
        <div>
          <h1>Pago</h1>
          <p>
            <b>Método de pago</b>
            {"Ticket Restaurant"}
          </p>
          <p>
            <b>Referencia de pago</b>#{"JRT489623"}
          </p>
          <p>
            <b>Fecha de pago</b>
            {"23-11-2023"}
          </p>
        </div>
        <div>
          <h1>Total</h1>
          <p>
            <b>Subtotal</b>€ {18.0}
          </p>
          <p>
            <b>Gastos de envío</b>€ {1.9}
          </p>
          <p>
            <b>IVA</b>€ {3.78}
          </p>
          <p>
            <b>Importe total</b>€ {1.9 + 3.78 + 18.0}
          </p>
        </div>
        <article>
          <h1>Artículos</h1>
          <div>
            <h4>Hamburguesa con queso</h4>
            <div>
              <span>{1}</span> x € <span>{5.0}</span>
            </div>
          </div>
          <div>
            <h4>Hamburguesa vegetariana con queso</h4>
            <div>
              <span>{1}</span> x € <span>{6.0}</span>
            </div>
          </div>
          <div>
            <h4>Hamburguesa con queso y patatas fritas</h4>
            <div>
              <span>{1}</span> x € <span>{7.0}</span>
            </div>
          </div>
          <div>
            <h4
              style={{
                fontWeight: 800,
              }}
            >
              Subtotal
            </h4>
            <div
              style={{
                fontWeight: 800,
              }}
            >
              € {18}
            </div>
          </div>
        </article>
      </main>
    </section>
  );
};
export default OrderDetails;
