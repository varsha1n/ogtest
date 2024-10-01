import Front from "../front/Front";
import Back from "./Back";
import Side from "../side/Side";
import Aesthetics from "../aesthetics/Aesthetics";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import classes from "./Customize.module.css";

const screen = window.screen.width;

function Customize() {
  const designe = [<Front />, <Back />, <Side />, <Aesthetics />];
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
      <section className="my-16">
        <div
          style={{
            marginTop: "4rem",
            marginBottom: "4rem",
            textAlign: "center",
          }}
        >
          <div
            style={{ borderBottom: "2px solid gray", display: "inline-block" }}
          >
            <div
              className={`${classes.access_padd} mx-16`}
              style={{ float: "right" }}
            >
              Aesthtics
            </div>
            <div
              className={`${classes.access_padd} mx-16`}
              style={{ float: "right" }}
            >
              Back
            </div>
            <div
              className={`${classes.access_padd} mx-16`}
              style={{ float: "right" }}
            >
              Side
            </div>
            <div
              className={`${classes.access_padd} mx-16`}
              style={{ float: "right" }}
            >
              Front
            </div>
          </div>
        </div>
        <Carousel
          className=" max-w-xs"
          style={{
            margin: "auto auto",
            width: "50rem",
            //   height: "100vh",
          }}
        >
          <CarouselPrevious />
          <CarouselContent>
            {designe.map((card, index) => (
              <CarouselItem style={{ display: "flex" }} key={index}>
                {card}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Button
            style={{
              backgroundColor: "#FF5C00",
              color: "black",
              padding: "2rem",
              marginRight: "2rem",
            }}
          >
            CheckOut
          </Button>
          <Button
            style={{
              backgroundColor: "#A3A3A3",
              color: "black",
              padding: "2rem",
              marginLeft: "2rem",
            }}
          >
            Add to Cart
          </Button>
        </div>
      </section>
    </>
  );
}

export default Customize;
