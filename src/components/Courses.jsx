import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Courses.scss";

const handleAddToCart = (course) => {
  const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
  const isAlreadyInCart = existingCart.some((item) => item.id === course.id);

  if (!isAlreadyInCart) {
    const updatedCart = [...existingCart, course];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("Course added to cart!");
  } else {
    alert("Course is already in the cart.");
  }
};

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    axios
      .get("https://api.npoint.io/983f88db4d99fec8edd9")
      .then((res) => setCourses(res.data.Courses || []))
      .catch((err) => console.error("Courses error:", err));

    axios
      .get("https://api.npoint.io/8378472d08789a9cb165")
      .then((res) => {
        const data = res.data;
        const clean = Array.isArray(data)
          ? data
          : Array.isArray(data.Categories)
          ? data.Categories
          : [];
        const filtered = clean.filter(
          (cat) => cat.name.toLowerCase() !== "all"
        );
        setCategories(filtered);
      })
      .catch((err) => console.error("Categories error:", err));
  }, []);

  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter(
          (course) => String(course.categoryID) === String(selectedCategory)
        );

  return (
    <div className="courses-section">
      <h2>Courses Section </h2>

      <div className="tabs">
        <button
          className={selectedCategory === "All" ? "active" : ""}
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={selectedCategory === cat.id ? "active" : ""}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <ul className="courses-list">
        {filteredCourses.map((course) => (
          <li key={course.id} className="course-card">
            <img src={course.image} alt={course.title} />
            <div className="course-info">
              <h3>{course.title}</h3>
              <p className="price">${course.price}</p>

              <div className="course-actions">
                <Link to={`/course/${course.id}`} className="btn view-details">
                  View Details
                </Link>
                <button
                  className={`btn course-btn ${
                    !course.addToCart ? "disabled" : ""
                  }`}
                  disabled={!course.addToCart}
                  onClick={() => handleAddToCart(course)}
                >
                  {course.addToCart ? "Add to Cart" : "Coming Soon"}
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
