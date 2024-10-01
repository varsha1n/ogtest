import img1 from "../../../assets/grid/grid1.png";
import img2 from "../../../assets/grid/grid2.png";
import classes from "./Grid.module.css";
import { NavLink } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Grid() {
  const modelPack: any = useRef();
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    const wide = modelPack.current.clientWidth;
    setWidth(wide);
    // Do something with the width
  }, []);

  return (
    <section className="my-16">
      <div
        style={{
          textAlign: "center",
          color: "#224F34",
          fontSize: "3rem",
          fontWeight: 500,
        }}
      >
        Designer Clothes For You
      </div>
      <div style={{ textAlign: "center", color: "#224F34", marginTop: "2rem" }}>
        Immerse yourself in the world of luxury fashion with our meticulously
        crafted designer clothes!
      </div>

      {/* //////// Mobile View //////// */}
      <div style={{ display: "none" }} className={classes.mb_grid_container}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          freeMode={false}
          speed={1000}
          loop={true}
          autoplay={{
            delay: 2500,
            waitForTransition: true,
            // stopOnLastSlide: false,
            // disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay]}
          className={classes.mySwiper}
        >
          <SwiperSlide>
            <div
              style={{
                textAlign: "center",
                backgroundColor: "#E3E3E3",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                borderRadius: "15px",
                margin: "0.5rem 1rem 0.5rem 1rem",
                // marginTop: "0.5rem",
                // marginBottom: "0.5rem",
              }}
            >
              Latest
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                textAlign: "center",
                backgroundColor: "#B6B9B7",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                borderRadius: "15px",
                margin: "0.5rem 1rem 0.5rem 1rem",

                // marginTop: "0.5rem",
                // marginBottom: "0.5rem",
              }}
            >
              Unique
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                textAlign: "center",
                backgroundColor: "#000000",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                color: "white",
                borderRadius: "15px",
                margin: "0.5rem 1rem 0.5rem 1rem",
              }}
            >
              Relatables
            </div>
          </SwiperSlide>
        </Swiper>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          freeMode={false}
          speed={1000}
          loop={true}
          autoplay={{
            delay: 2500,
            waitForTransition: true,
            // stopOnLastSlide: false,
            // disableOnInteraction: false,
          }}
          navigation={false}
          modules={[Autoplay]}
          className={classes.mySwiper}
        >
          <SwiperSlide>
            <NavLink to="/designer">
              <div
                className={classes.card_model}
                // onTouchMove={() =>
                //   setWidth(modelPack.current.getBoundingClientRect().width)
                // }
                ref={modelPack}
                style={{
                  marginBottom: "1rem",
                  position: "relative",
                  padding: "1rem",
                }}
              >
                <div>
                  <img src={img2} />
                </div>

                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    // left: 0,
                    backgroundColor: "#7E7E7E",
                    color: "white",
                    padding: "0.5rem",
                    borderBottomLeftRadius: "15px",
                    borderBottomRightRadius: "15px",
                    // width: "430px",
                    width: `${width - 32}px`,
                    fontFamily: "Roboto slab",
                  }}
                  className={classes.model_detail}
                >
                  <div>Design Clothes Caption</div>
                  <div className="flex items-center justify-end">
                    <div className="mr-2">Profile Name</div>
                    <div>
                      <Avatar>
                        <AvatarImage src={img2} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink to="/designer">
              <div
                className={classes.card_model}
                // onTouchMove={() =>
                //   setWidth(modelPack.current.getBoundingClientRect().width)
                // }
                ref={modelPack}
                style={{
                  marginBottom: "1rem",
                  position: "relative",
                  padding: "1rem",
                }}
              >
                <div>
                  <img src={img1} />
                </div>

                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    // left: 0,
                    backgroundColor: "#7E7E7E",
                    color: "white",
                    padding: "0.5rem",
                    borderBottomLeftRadius: "15px",
                    borderBottomRightRadius: "15px",
                    // width: "430px",
                    width: `${width - 32}px`,
                    fontFamily: "Roboto slab",
                  }}
                  className={classes.model_detail}
                >
                  <div>Design Clothes Caption</div>
                  <div className="flex items-center justify-end">
                    <div className="mr-2">Profile Name</div>
                    <div>
                      <Avatar>
                        <AvatarImage src={img1} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide>
            <NavLink to="/designer">
              <div
                className={classes.card_model}
                // onTouchMove={() =>
                //   setWidth(modelPack.current.getBoundingClientRect().width)
                // }
                ref={modelPack}
                style={{
                  marginBottom: "1rem",
                  position: "relative",
                  padding: "1rem",
                }}
              >
                <div>
                  <img src={img2} />
                </div>

                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    // left: 0,
                    backgroundColor: "#7E7E7E",
                    color: "white",
                    padding: "0.5rem",
                    borderBottomLeftRadius: "15px",
                    borderBottomRightRadius: "15px",
                    // width: "430px",
                    width: `${width - 32}px`,
                    fontFamily: "Roboto slab",
                  }}
                  className={classes.model_detail}
                >
                  <div>Design Clothes Caption</div>
                  <div className="flex items-center justify-end">
                    <div className="mr-2">Profile Name</div>
                    <div>
                      <Avatar>
                        <AvatarImage src={img2} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          </SwiperSlide>
        </Swiper>
        {/* <NavLink to="/designer">
          <div
            className={classes.card_model}
            // onTouchMove={() =>
            //   setWidth(modelPack.current.getBoundingClientRect().width)
            // }
            ref={modelPack}
            style={{
              marginBottom: "1rem",
              position: "relative",
              padding: "1rem",
            }}
          >
            <div>
              <img src={img1} />
            </div>

            <div
              style={{
                position: "absolute",
                bottom: 0,
                // left: 0,
                backgroundColor: "#7E7E7E",
                color: "white",
                padding: "0.5rem",
                borderBottomLeftRadius: "15px",
                borderBottomRightRadius: "15px",
                // width: "430px",
                width: `${width - 32}px`,
                fontFamily: "Roboto slab",
              }}
              className={classes.model_detail}
            >
              <div>Design Clothes Caption</div>
              <div className="flex items-center justify-end">
                <div className="mr-2">Profile Name</div>
                <div>
                  <Avatar>
                    <AvatarImage src={img1} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        </NavLink> */}
      </div>
      {/* //////////////////// */}

      <div className={classes.grid_container}>
        <NavLink to="/designer">
          <div
            className={classes.card_model}
            style={{ marginBottom: "1rem", position: "relative" }}
          >
            <img src={img1} />

            <motion.div
              style={{
                position: "absolute",
                bottom: 0,
                backgroundColor: "#7E7E7E",
                color: "white",
                padding: "0.5rem",
                borderBottomLeftRadius: "15px",
                borderBottomRightRadius: "15px",
                width: "100%",
                fontFamily: "Roboto slab",
              }}
              className={classes.model_detail}
            >
              <div>Design Clothes Caption</div>
              <div className="flex items-center justify-end">
                <div className="mr-2">Profile Name</div>
                <div>
                  <Avatar>
                    <AvatarImage src={img1} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </motion.div>
          </div>
        </NavLink>
        <NavLink to="/designer">
          <div
            className={classes.card_model}
            style={{ marginBottom: "1rem", position: "relative" }}
          >
            <img src={img2} />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                backgroundColor: "#7E7E7E",
                color: "white",
                padding: "0.5rem",
                borderBottomLeftRadius: "15px",
                borderBottomRightRadius: "15px",
                width: "100%",
                fontFamily: "Roboto slab",
              }}
              className={classes.model_detail}
            >
              <div>Design Clothes Caption</div>
              <div className="flex items-center justify-end">
                <div className="mr-2">Profile Name</div>
                <div>
                  <Avatar>
                    <AvatarImage src={img2} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
        <NavLink to="/designer">
          <div
            className={classes.card_model}
            style={{ marginBottom: "1rem", position: "relative" }}
          >
            <img src={img1} />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                backgroundColor: "#7E7E7E",
                color: "white",
                padding: "0.5rem",
                borderBottomLeftRadius: "15px",
                borderBottomRightRadius: "15px",
                width: "100%",
                fontFamily: "Roboto slab",
              }}
              className={classes.model_detail}
            >
              <div>Design Clothes Caption</div>
              <div className="flex items-center justify-end">
                <div className="mr-2">Profile Name</div>
                <div>
                  <Avatar>
                    <AvatarImage src={img1} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
        <div>
          <div
            style={{
              textAlign: "center",
              backgroundColor: "#E3E3E3",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              borderRadius: "15px",
              cursor: "pointer",
            }}
            className={classes.latest}
          >
            Latest
          </div>
          <div
            style={{
              textAlign: "center",
              backgroundColor: "#B6B9B7",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              borderRadius: "15px",
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
              cursor: "pointer",
            }}
            className={classes.unique}
          >
            Unique
          </div>
          <div
            style={{
              textAlign: "center",
              backgroundColor: "#000000",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              color: "white",
              borderRadius: "15px",
              cursor: "pointer",
            }}
            className={classes.relatables}
          >
            Relatables
          </div>
        </div>

        <NavLink to="/designer">
          <div
            className={classes.card_model}
            style={{ marginBottom: "1rem", position: "relative" }}
          >
            <img src={img2} />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                backgroundColor: "#7E7E7E",
                color: "white",
                padding: "0.5rem",
                borderBottomLeftRadius: "15px",
                borderBottomRightRadius: "15px",
                width: "100%",
                fontFamily: "Roboto slab",
              }}
              className={classes.model_detail}
            >
              <div>Design Clothes Caption</div>
              <div className="flex items-center justify-end">
                <div className="mr-2">Profile Name</div>
                <div>
                  <Avatar>
                    <AvatarImage src={img2} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
        <NavLink to="/designer">
          <div
            className={classes.card_model}
            style={{ marginBottom: "1rem", position: "relative" }}
          >
            <img src={img1} />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                backgroundColor: "#7E7E7E",
                color: "white",
                padding: "0.5rem",
                borderBottomLeftRadius: "15px",
                borderBottomRightRadius: "15px",
                width: "100%",
                fontFamily: "Roboto slab",
              }}
              className={classes.model_detail}
            >
              <div>Design Clothes Caption</div>
              <div className="flex items-center justify-end">
                <div className="mr-2">Profile Name</div>
                <div>
                  <Avatar>
                    <AvatarImage src={img1} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
        <NavLink to="/designer">
          <div
            className={classes.card_model}
            style={{ marginBottom: "1rem", position: "relative" }}
          >
            <img src={img2} />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                backgroundColor: "#7E7E7E",
                color: "white",
                padding: "0.5rem",
                borderBottomLeftRadius: "15px",
                borderBottomRightRadius: "15px",
                width: "100%",
                fontFamily: "Roboto slab",
              }}
              className={classes.model_detail}
            >
              <div>Design Clothes Caption</div>
              <div className="flex items-center justify-end">
                <div className="mr-2">Profile Name</div>
                <div>
                  <Avatar>
                    <AvatarImage src={img2} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
        <NavLink to="/designer">
          <div
            className={classes.card_model}
            style={{ marginBottom: "1rem", position: "relative" }}
          >
            <img src={img1} />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                backgroundColor: "#7E7E7E",
                color: "white",
                padding: "0.5rem",
                borderBottomLeftRadius: "15px",
                borderBottomRightRadius: "15px",
                width: "100%",
                fontFamily: "Roboto slab",
              }}
              className={classes.model_detail}
            >
              <div>Design Clothes Caption</div>
              <div className="flex items-center justify-end">
                <div className="mr-2">Profile Name</div>
                <div>
                  <Avatar>
                    <AvatarImage src={img1} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
        <NavLink to="/designer">
          <div
            className={classes.card_model}
            style={{ marginBottom: "1rem", position: "relative" }}
          >
            <img src={img2} />
            {/* <div
              style={{
                position: "absolute",
                bottom: 0,
                backgroundColor: "#7E7E7E",
                color: "white",
                padding: "0.5rem",
                borderRadius: "15px",
                width: "100%",
                fontFamily: "Roboto slab",
              }}
              className={classes.model_detail}
            >
              <div>Design Clothes Caption</div>
              <div className="flex items-center justify-end">
                <div className="mr-2">Profile Name</div>
                <div>
                  <Avatar>
                    <AvatarImage src={img2} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div> */}
          </div>
        </NavLink>
      </div>
      <div
        style={{ backgroundColor: "#D6D6D6", width: "90%", margin: "auto" }}
        className={`${classes.mb_grid_bottom} flex flex-wrap py-2 px-4 `}
      >
        <div
          style={{
            fontSize: "3.5rem",
            fontWeight: 800,
            width: "50%",
            padding: "calc(100% * 0.05)",
            fontFamily: "Roboto Slab",
          }}
        >
          Want to customize your Clothes ?
        </div>
        <div style={{ width: "50%", margin: "auto" }}>
          <div
            style={{
              fontSize: "1.6rem",
              fontWeight: 400,
              padding: "calc(100% * 0.05)",
              margin: "auto",
              fontFamily: "poppins",
            }}
            className={classes.grid_bottom_detail}
          >
            Get clothes customized right for your size and feel, using our
            (customize tool name)
          </div>
          <div style={{ textAlign: "center" }}>
            <button className={classes.explore_button}>Try Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Grid;
