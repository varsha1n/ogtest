import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import classes from "./Home.module.css";
import model_svg from "../../assets/grid/model.svg";
import dotted from "../../assets/grid/dotted.svg";
import logo from "../../assets/grid/OGlogo.png";
import BestSellling from "./bestSelling/BestSelling";
import Products from "./products/Products";
import Offer from "./offer/Offer";
import Footer from "./footer/Footer";
import Grid from "./grid/Grid";
import { motion } from "framer-motion";

const screen = window.screen.width;

function Home() {
  console.log(screen);
  return (
    <>
      {() => {
        if (screen > 500) {
          return (
            <motion.div
              initial={{ height: "92vh" }}
              animate={{ height: 0, transition: { duration: 1 } }}
              exit={{
                height: "92vh",
                transition: { delay: 0.5, duration: 1, ease: "easeInOut" },
              }}
              // className={classes.stop_motion}
              style={{
                position: "absolute",
                // top: 0,
                bottom: 0,
                width: "100%",
                height: "0vh",
                backgroundColor: "#202020",
                zIndex: 100,
              }}
            >
              {/* <img src={logo} /> */}
            </motion.div>
          );
        }
      }}
      <motion.section
        // exit={{ opacity: 0, transition: { duration: 1 } }}
        style={{ height: "auto" }}
        className={`${classes.mb_homeSection} flex flex-wrap justify-around  mb-12 overflow-hidden`}
      >
        <div className={classes.text_button_container}>
          <div style={{ position: "relative" }}>
            <div style={{ display: "none" }} className={classes.mb_model}>
              <img src={model_svg} />
            </div>
            <div>
              <p className={classes.p1}>Customize Your Clothes and</p>
              <div>
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  freeMode={true}
                  speed={1000}
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    waitForTransition: true,
                    // stopOnLastSlide: true,
                    disableOnInteraction: false,
                  }}
                  navigation={false}
                  modules={[Autoplay]}
                  className={classes.mySwiper}
                >
                  <SwiperSlide>
                    <p style={{ color: "#ff05c8" }} className={classes.p2}>
                      Express Your Style
                    </p>
                  </SwiperSlide>
                  <SwiperSlide>
                    <p style={{ color: "#DA9F3F" }} className={classes.p2}>
                      Wear Your Design
                    </p>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div>
              <p className={classes.mb_pDescription}>
                Discover endless possibilities for your style.
              </p>
            </div>
          </div>
          <div className={classes.explore_button_container}>
            <button className={classes.explore_button}>Explore Now</button>
          </div>
        </div>
        <div className={classes.model_container}>
          <div className={classes.model_img_div}>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              freeMode={true}
              speed={1000}
              loop={true}
              autoplay={{
                delay: 2500,
                waitForTransition: true,
                // stopOnLastSlide: true,
                disableOnInteraction: false,
              }}
              navigation={false}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src={model_svg}
                  style={{ objectFit: "fill" }}
                  className={classes.model_img}
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={model_svg}
                  style={{ objectFit: "fill" }}
                  className={classes.model_img}
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <motion.div
            initial={{ x: 0, y: "4rem" }}
            animate={{
              x: "100%",
              y: ["0rem", "3rem", "0rem"],
              transition: {
                delay: 2.5,
                ease: "easeOut",
                duration: 0.7,
                yoyo: 10,
              },
            }}
            // transition={{
            //   duration: 0.7,
            //   ease: "easeOut",
            //   delay: 2.5,
            //   yoyo: 2,
            //   // repeatType: "loop",
            // }}
          >
            <img src={dotted} className={classes.dotted_bottom} />
          </motion.div>
          <motion.div>
            <motion.img
              initial={{ x: 0, y: 0 }}
              animate={{
                x: "-34vw",
                y: ["0rem", "-3rem", "0rem"],
                transition: {
                  delay: 2.5,
                  ease: "easeOut",
                  duration: 0.7,
                  yoyo: 10,
                },
              }}
              // transition={{
              //   duration: 0.7,
              //   ease: "easeOut",
              //   delay: 2.5,
              //   // repeatType: "loop",
              //   // yoyo: Infinity,
              // }}
              src={dotted}
              className={classes.dotted_up}
            />
          </motion.div>
        </div>
      </motion.section>
      <div
        style={{
          position: "relative",
          width: "100vw",
          backgroundColor: "rgb(0,0,0,0.5)",
          height: "0.1rem",
        }}
      >
        <div>
          <img
            style={{
              width: "4rem",
              backgroundColor: "white",
              position: "absolute",
              top: 0,
              left: "50%",
              translate: "-50% -40%",
            }}
            src={logo}
          />
        </div>
      </div>
      <BestSellling />
      <div
        style={{
          position: "relative",
          width: "100vw",
          backgroundColor: "rgb(0,0,0,0.5)",
          height: "0.1rem",
        }}
      >
        <div>
          <img
            style={{
              width: "4rem",
              backgroundColor: "white",
              position: "absolute",
              top: 0,
              left: "50%",
              translate: "-50% -40%",
            }}
            src={logo}
          />
        </div>
      </div>
      <Products />
      <div
        style={{
          position: "relative",
          width: "100vw",
          backgroundColor: "rgb(0,0,0,0.5)",
          height: "0.1rem",
        }}
      >
        <div>
          <img
            style={{
              width: "4rem",
              backgroundColor: "white",
              position: "absolute",
              top: 0,
              left: "50%",
              translate: "-50% -40%",
            }}
            src={logo}
          />
        </div>
      </div>
      <Offer />
      <div
        style={{
          position: "relative",
          width: "100vw",
          backgroundColor: "rgb(0,0,0,0.5)",
          height: "0.1rem",
        }}
      >
        <div>
          <img
            style={{
              width: "4rem",
              backgroundColor: "white",
              position: "absolute",
              top: 0,
              left: "50%",
              translate: "-50% -40%",
            }}
            src={logo}
          />
        </div>
      </div>
      <Grid />
      <Footer />
    </>
  );
}

export default Home;
