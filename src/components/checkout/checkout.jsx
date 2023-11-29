import React, { useState, useEffect } from "react";

const Checkout = ({ products, onSubmit }) => {
  const [shippingAddress, setShippingAddress] = useState({
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
  });

  const [shippingMethod, setShippingMethod] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("");

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalPrice = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
    setTotal(totalPrice);
  }, [products]);

  const handleSubmit = () => {
    onSubmit({
      shippingAddress,
      shippingMethod,
      paymentMethod,
      total,
    });
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>

      <div className="shipping-address">
        <label htmlFor="shipping-address-1">Dirección de envío</label>
        <input
          type="text"
          id="shipping-address-1"
          name="shipping-address-1"
          value={shippingAddress.address1}
          onChange={(e) => setShippingAddress({ ...shippingAddress, address1: e.target.value })}
        />
        <input
          type="text"
          id="shipping-address-2"
          name="shipping-address-2"
          value={shippingAddress.address2}
          onChange={(e) => setShippingAddress({ ...shippingAddress, address2: e.target.value })}
        />
        <input
          type="text"
          id="shipping-city"
          name="shipping-city"
          value={shippingAddress.city}
          onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
        />
        <input
          type="text"
          id="shipping-state"
          name="shipping-state"
          value={shippingAddress.state}
          onChange={(e) => setShippingAddress({ ...shippingAddress, state: e.target.value })}
        />
        <input
          type="text"
          id="shipping-zip"
          name="shipping-zip"
          value={shippingAddress.zip}
          onChange={(e) => setShippingAddress({ ...shippingAddress, zip: e.target.value })}
        />
        <input
          type="text"
          id="shipping-country"
          name="shipping-country"
          value={shippingAddress.country}
          onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })}
        />
      </div>

      <div className="shipping-method">
        <label htmlFor="shipping-method">Método de envío</label>
        <select
          id="shipping-method"
          name="shipping-method"
          onChange={(e) => setShippingMethod(e.target.value)}
        >
          <option value="">Seleccione un método de envío</option>
          <option value="standard">Envío estándar</option>
          <option value="express">Envío express</option>
        </select>
      </div>

      <div className="payment-method">
        <label htmlFor="payment-method">Método de pago</label>
        <select
          id="payment-method"
          name="payment-method"
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="">Seleccione un método de pago</option>
          <option value="credit-card">Tarjeta de crédito</option>
          <option value="debit-card">Tarjeta de débito</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>

      <div className="total">
        <h2>Total</h2>
        <p>{total}</p>
      </div>

      <button onClick={handleSubmit}>Pagar</button>
      </div>)
}
      export default Checkout