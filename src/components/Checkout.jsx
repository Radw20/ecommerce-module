import React, { useState } from "react";
import "../styles/Checkout.scss";
import { Link } from "react-router-dom";

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
    setFormData((prevData) => ({
      ...prevData,
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
      <h2>Checkout</h2>

      {orderPlaced ? (
        <div className="success-section">
          <p className="my-success-msg">Your order is confirmed.</p>
          <Link to="/" className="back-home-btn">Back to Home</Link>
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
              placeholder="Enter your name"
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
              placeholder="Enter your email"
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
              placeholder="Enter your address"
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
              placeholder="Enter your phone number"
            />
          </label>

          <button type="submit">Place Order</button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
