import classes from "./Products.module.css";
import product from "../../../assets/grid/pro1.png";
const data = [
  {
    img: product,
    title: "Spread Collar Shirt",
    price: 38.99,
    rating: 5.0,
  },
  {
    img: product,
    title: "White Solid Formal Shirt",
    price: 38.99,
    rating: 5.0,
  },
  {
    img: product,
    title: "Shine On Me Blouse",
    price: 38.99,
    rating: 5.0,
  },
  {
    img: product,
    title: "Gray Solid Padded Jacket",
    price: 38.99,
    rating: 5.0,
  },
  {
    img: product,
    title: "Printed Loose T-shirt",
    price: 38.99,
    rating: 5.0,
  },
  {
    img: product,
    title: "Summer Wind Crop Shirt",
    price: 38.99,
    rating: 5.0,
  },
  {
    img: product,
    title: "Tailored Jacket",
    price: 38.99,
    rating: 5.0,
  },
  {
    img: product,
    title: "Solid Round Neck T-shirt",
    price: 38.99,
    rating: 5.0,
  },
];

function Products() {
  return (
    <section className="my-16">
      <div style={{ textAlign: "center", fontSize: "3rem", fontWeight: 600 }}>
        Our Products
      </div>
      <div className="flex justify-evenly mt-16 cursor-pointer">
        <div>SALE</div>
        <div style={{ borderBottom: "2px solid black" }}>HOT</div>
        <div>NEW ARRIVALS</div>
        <div>ACCESSORIES</div>
      </div>

      {/* //////// Mobile view ////////// */}

      <div
        className={classes.mb_productOne}
        style={{ display: "none", cursor: "pointer", marginBottom: "5rem" }}
      >
        <div
          style={{
            //   backgroundColor: ls.color,
            width: "20rem",
            height: "25rem",
            overflow: "hidden",
            borderRadius: "1rem",
          }}
          className={classes.model_hover}
        >
          <img src={data[0].img} style={{ objectFit: "fill" }} />
        </div>
        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <div style={{ textAlign: "center", fontWeight: "bold" }}>
            {data[0].title}
          </div>
          <div className="flex justify-center">
            <div style={{ fontWeight: 300 }}>₹{data[0].price}</div>
            <div className="mx-8">|</div>
            <div style={{ fontWeight: 300 }}>{data[0].rating}⭐️</div>
          </div>
        </div>
      </div>

      {/* ////////// */}

      <div
        className={`${classes.ds_productOne} flex flex-wrap justify-evenly my-16`}
      >
        {data.map((ls) => {
          return (
            <div style={{ cursor: "pointer", marginBottom: "5rem" }}>
              <div
                style={{
                  //   backgroundColor: ls.color,
                  width: "20rem",
                  height: "25rem",
                  overflow: "hidden",
                  borderRadius: "1rem",
                }}
                className={classes.model_hover}
              >
                <img src={ls.img} style={{ objectFit: "fill" }} />
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
          );
        })}
      </div>
    </section>
  );
}

export default Products;
