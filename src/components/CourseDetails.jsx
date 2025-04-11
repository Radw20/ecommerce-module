import React, { useState } from "react";
import "../styles/Checkout.scss";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem("cart");
    setOrderPlaced(true);
    setFormData({
      name: "",
      email: "",
      address: "",
      phone: "",
    });
  };

  return (
    <div className="checkout-page">
      <h2>🧾 Checkout</h2>
      {orderPlaced ? (
        <div className="success-message">
          <p>🎉 Thank you!</p>
          <p>Your order has been placed successfully.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="checkout-form">
          <label>
            Name
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          <label>
            Address
            <input
              type="text"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
            />
          </label>

          <label>
            Phone
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Place Order</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
