

import trouser from "../../assets/grid/trouser.jpg";
import model4 from "../../assets/grid/customModel.png";

import { NavLink } from "react-router-dom";
import classes from "./CustomizeSelect.module.css";
import dressImage from "../../assets/grid/grid1.png";



const data = [
  {
  img: model4,
  title: "Custom Dress Shirts",
  price: 34.45,
  rating: 5.0,
  color: "#D4A9A9",
  route: "customize/shirt",
},
  
  {
    img: trouser,
    title: "Custom Dress Pants",
    price: 63.56,
    rating: 5.0,
    color: "#FFDFBA",
    route: "customize/pant", // Updated route for CustomPant
  },
  {
    img: dressImage,
    title: "Custom Women Dress",
    price: 34.45,
    rating: 5.0,
    color: "#BAE1FF",
    route: "customize/dress",
  },
  
  
];

function CustomizeSelect() {
  return (
    <>
      {/* Products Section */}
      <section className="my-4">
        <div
          style={{
            marginTop: "2rem",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          <div style={{ display: "inline-block" }}>
            <div
              className={`${classes.access_padd} mx-16`}
              style={{ cursor: "pointer", float: "right" }}
            >
              Accessories
            </div>
            <div
              className={`${classes.access_padd} mx-16`}
              style={{ cursor: "pointer", float: "right" }}
            >
              Mens
            </div>
            <div
              className={`${classes.access_padd} mx-16`}
              style={{ cursor: "pointer", float: "right" }}
            >
              Womens
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-evenly my-16">
          {data.map((ls, index) => (
            <NavLink to={ls.route ? ls.route : "#"} key={index}>
              <div
                style={{ cursor: "pointer", margin: "1rem 1rem 1rem 1rem" }}
                className={classes.model_hover_container}
              >
                <div
                  style={{
                    backgroundColor: ls.color,
                    width: "15rem",
                    height: "20rem",
                    overflow: "hidden",
                    borderRadius: "1rem",
                  }}
                  className={classes.model_hover}
                >
                  <img
                    src={ls.img}
                    style={{ objectFit: "fill" }}
                    alt={ls.title}
                  />
                </div>
                <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
                  <div style={{ textAlign: "center", fontWeight: "bold" }}>
                    {ls.title}
                  </div>
                  <div className="flex justify-center">
                    <div style={{ fontWeight: 300 }}>₹{ls.price}</div>
                    <div className="mx-8">|</div>
                    <div style={{ fontWeight: 300 }}>{ls.rating}⭐️</div>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </section>
    </>
  );
}

export default CustomizeSelect;
