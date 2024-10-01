import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import model1 from "../../assets/grid/best1.png";
import model2 from "../../assets/grid/best2.png";
import model3 from "../../assets/grid/best3.png";
import classes from "./DesignerLogin.module.css";
import { motion } from "framer-motion";

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

const screen = window.screen.width;

function DesignerLogin() {
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
      <section
        style={{
          paddingLeft: "calc(100vw * 0.05)",
          paddingRight: "calc(100vw * 0.05)",
        }}
        className="my-16"
      >
        <div>
          <Skeleton className="w-full p-8">
            <Avatar
              className={classes.designer_avatar}
              style={{ width: "10rem", height: "10rem" }}
            >
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Skeleton>
        </div>
        <div className="py-12">
          <div style={{ fontSize: "1.25rem", fontWeight: 600 }}>
            Anjali Dubey
          </div>
          <div
            className={classes.designer_detail}
            style={{ width: "calc(60%)" }}
          >
            Hi, I'm Anjali Dubey, a passionate and imaginative designer weaving
            stories through visuals. With a natural inclination for aesthetics
            and meticulous attention to detail, I bring ideas to life in the
            most visually compelling way possible. My design journey is a fusion
            of creativity and professionalism, embracing graphic design, UX/UI,
            and multimedia. Every project is a canvas for innovation, where I
            seamlessly blend art with functionality. Beyond captivating visuals,
            my designs communicate and resonate, reflecting a commitment to
            crafting meaningful and impactful experiences. In this dynamic world
            of creativity, I'm dedicated to pushing boundaries and shaping
            designs that inspire.
          </div>
          <div>
            <Button
              className="px-12 py-6 mt-8"
              style={{ backgroundColor: "#FFA800" }}
            >
              Hire Me
            </Button>
          </div>
        </div>
        <div>
          <div
            style={{
              position: "relative",
              backgroundColor: "black",
              height: "5px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                transform: "translate(0%, -50%)",
                backgroundColor: "white",
                fontSize: "1.5rem",
                fontWeight: "600",
              }}
              className="pr-8"
            >
              Designs
            </div>
          </div>
          <div className="flex flex-wrap justify-evenly my-16">
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
        </div>
      </section>
    </>
  );
}

export default DesignerLogin;
