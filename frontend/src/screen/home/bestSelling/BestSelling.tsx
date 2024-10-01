import classes from "./BestSelling.module.css";
import model1 from "../../../assets/grid/best1.png";
import model2 from "../../../assets/grid/best2.png";
import model3 from "../../../assets/grid/best3.png";
import { BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

const data = [
  {
    img: model1,
    title: "Regular Fit Long Sleeve Top",
    price: 38.99,
    rating: 5.0,
    color: "#BAFFC9",
  },
  {
    img: model2,
    title: "Regular Fit Long Sleeve Top",
    price: 63.56,
    rating: 5.0,
    color: "#FFDFBA",
  },
  {
    img: model3,
    title: "Regular Fit Long Sleeve Top",
    price: 34.45,
    rating: 5.0,
    color: "#BAE1FF",
  },
];

function BestSellling() {
  return (
    <section className="my-16">
      <div
        style={{
          textAlign: "center",
          fontSize: "3rem",
          fontFamily: "Roboto Slab",
          fontWeight: "bolder",
        }}
      >
        Best selling
      </div>
      <div style={{ textAlign: "center", fontWeight: "400" }}>
        Get in on the trend with our curated selection of best-selling styles.
      </div>
      <div
        style={{ display: "none", marginBottom: "2rem" }}
        className={classes.mb_bestSellingSwiper}
      >
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {data.map((ls) => {
            return (
              <SwiperSlide
                style={{
                  backgroundColor: "white",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "1rem",
                }}
              >
                {/* <div style={{ cursor: "pointer" }}> */}
                <div
                  style={{
                    backgroundColor: ls.color,
                    width: "20rem",
                    height: "25rem",
                    overflow: "hidden",
                    borderRadius: "1rem",
                    marginTop: "1rem",
                  }}
                  className={classes.model_hover}
                >
                  <img src={ls.img} style={{ objectFit: "fill" }} />
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    textAlign: "center",
                    marginTop: "1.5rem",
                  }}
                >
                  <div style={{ textAlign: "center", fontWeight: "bold" }}>
                    {ls.title}
                  </div>
                  <div className="flex justify-center">
                    <div style={{ fontWeight: 300 }}>₹{ls.price}</div>
                    <div className="mx-8">|</div>
                    <div style={{ fontWeight: 300 }}>{ls.rating}⭐️</div>
                  </div>
                </div>
                {/* </div> */}
              </SwiperSlide>
            );
          })}
          {/* <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </div>
      <div
        className={`${classes.bestSellingFlex} flex flex-wrap justify-evenly my-16`}
      >
        {data.map((ls) => {
          return (
            <div style={{ cursor: "pointer" }}>
              <div
                style={{
                  backgroundColor: ls.color,
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
      <div style={{ textAlign: "center" }}>
        <button
          style={{
            border: "2px solid black",
            fontFamily: "poppins",
            padding: "0.7rem 2rem 0.7rem 2rem",
            borderRadius: "5px",
            verticalAlign: "bottom",
          }}
          className={classes.all_option}
        >
          See All
          <span
            style={{
              float: "right",
              verticalAlign: "bottom",
            }}
          >
            <BsArrowRight
              style={{
                verticalAlign: "bottom",
                margin: "auto",
                padding: "auto",
              }}
            />
          </span>
        </button>
      </div>
    </section>
  );
}

export default BestSellling;
