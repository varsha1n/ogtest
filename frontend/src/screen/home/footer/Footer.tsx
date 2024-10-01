import logo from "../../../assets/grid/ogPNG.png";
import { AiOutlineFacebook } from "react-icons/ai";
import { TfiTwitter } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <section
      className={`${classes.footer_section} mt-32 py-32`}
      style={{ backgroundColor: "#202020" }}
    >
      <div className="flex flex-wrap justify-around">
        <div style={{ width: "50%" }} className="flex flex-wrap justify-around">
          <div>
            <div>
              <img style={{ width: "9rem" }} src={logo} />
            </div>
            <div
              className="flex justify-around"
              style={{ width: "100%", marginTop: "1rem" }}
            >
              <AiOutlineFacebook
                style={{ fill: "white", width: "1.5rem", height: "1.5rem" }}
              />
              <TfiTwitter
                style={{
                  fill: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
              <FaInstagram
                style={{
                  fill: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                }}
              />
            </div>
          </div>
          <div
            style={{ width: "40%", fontFamily: "poppin" }}
            className={`${classes.footer_feature} flex justify-around text-white`}
          >
            <div>
              <p
                style={{ fontWeight: 900, fontFamily: "Roboto Slab" }}
                className="py-1"
              >
                Shop
              </p>
              <div style={{ fontWeight: 400, fontFamily: "poppins" }}>
                <p className="py-1">Products</p>
                <p className="py-1">Overview</p>
                <p className="py-1">Releases</p>
              </div>
            </div>
            <div>
              <p
                className="py-1"
                style={{ fontWeight: 700, fontFamily: "Roboto Slab" }}
              >
                Company
              </p>
              <div style={{ fontWeight: 400, fontFamily: "poppins" }}>
                <p className="py-1">About Us</p>
                <p className="py-1">Contact</p>
                <p className="py-1">News</p>
                <p className="py-1">Support</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p
            style={{ color: "white", fontSize: "1.3rem", marginBottom: "1rem" }}
          >
            Stay Fashionable with Our Newsletter
          </p>
          <div>
            <input
              placeholder="Enter your e-mail"
              style={{
                backgroundColor: "#202020",
                border: "2px white solid",
                borderTopLeftRadius: "3px",
                borderBottomLeftRadius: "3px",
                padding: "6px 0px 6px 6px",
                color: "white",
                width: "75%",
                outline: "none",
              }}
            />
            <span
              style={{
                backgroundColor: "white",
                color: "black",
                padding: "8.5px",
                border: "2px white solid",
                cursor: "pointer",
              }}
              className={classes.submit_footer}
            >
              SUBMIT
            </span>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div
          style={{
            width: "100vw",
            height: "2px",
            backgroundColor: "white",
            position: "relative",
            // zIndex: -1,
          }}
        ></div>
        <div
          className="flex"
          style={{
            backgroundColor: "#202020",
            color: "white",
            position: "absolute",
            right: 0,
            translate: "0% -50%",
          }}
        >
          <p className="ml-12">Terms</p>
          <p className="mx-12">Privacy</p>
          <p className="mr-12">Cookies</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
