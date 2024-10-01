import { NavLink } from "react-router-dom";
import model1 from "../../assets/grid/best1.png";
import model2 from "../../assets/grid/best2.png";
import model3 from "../../assets/grid/best3.png";
import model4 from "../../assets/grid/customModel.png";
import classes from "./Collection.module.css";
import Marquee from "react-fast-marquee";
import Product from "../product/Product";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const data = [
  {
    id: 1,
    img: model1,
    title: "Regular Fit Long Sleeve Top",
    price: 38.99,
    rating: 5.0,
    color: "#BAFFC9",
  },
  {
    id: 2,
    img: model2,
    title: "Regular Fit Long Sleeve Top",
    price: 63.56,
    rating: 5.0,
    color: "#FFDFBA",
  },
  {
    id: 3,
    img: model3,
    title: "Regular Fit Long Sleeve Top",
    price: 34.45,
    rating: 5.0,
    color: "#BAE1FF",
  },
  {
    id: 4,
    img: model4,
    title: "Regular Fit Long Sleeve Top",
    price: 34.45,
    rating: 5.0,
    color: "#D4A9A9",
  },
];

const screen = window.screen.width;

function Collection(): any {
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
      <section className="my-4">
        <div
          style={{
            fontSize: "2rem",
            paddingLeft: "calc(100% * 0.1)",
            fontFamily: "Rufina",
          }}
        >
          Collection
        </div>
        <div
          style={{
            marginTop: "2rem",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          {/* <div style={{ display: "inline-block" }}>
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
          </div> */}
        </div>

        <Sheet key="left">
          <SheetTrigger>
            <div
              style={{
                // fontSize: "2rem",
                paddingLeft: "calc(100% * 0.7)",
                // fontFamily: "Rufina",
              }}
            >
              <Button
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "1px solid black",
                }}
              >
                Filter
              </Button>
            </div>
          </SheetTrigger>
          <SheetContent side={"left"} style={{ overflow: "scroll" }}>
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
              <SheetDescription
                className={classes.filter}
                style={{ paddingLeft: "1rem" }}
              >
                <div>All</div>
                <div>Category One</div>
                <div>Category two</div>
                <div>Category three</div>
                <Separator
                  style={{
                    backgroundColor: "black",
                    margin: "1rem 0 1rem 0",
                  }}
                />
                <h2
                  style={{
                    fontWeight: 500,
                    color: "black",
                    marginBottom: "1rem",
                  }}
                >
                  Filter One
                </h2>
                <div className="flex items-center space-x-2">
                  <Checkbox id="one" />
                  <label htmlFor="one">Category One</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="two" />
                  <label htmlFor="two">Category two</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="three" />
                  <label htmlFor="three">Category three</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="four" />
                  <label htmlFor="four">Category four</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="five" />
                  <label htmlFor="five">Category five</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="six" />
                  <label htmlFor="six">Category six</label>
                </div>
                <Separator
                  style={{
                    backgroundColor: "black",
                    margin: "1rem 0 1rem 0",
                  }}
                />
                <h2
                  style={{
                    fontWeight: 500,
                    color: "black",
                    marginBottom: "1rem",
                  }}
                >
                  Filter Two
                </h2>
                <div></div>
                <RadioGroup defaultValue="comfortable">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="r1">Default</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Primary" id="r2" />
                    <Label htmlFor="r2">Primary</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Secondary" id="r3" />
                    <Label htmlFor="r3">Secondary</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Tertiary" id="r4" />
                    <Label htmlFor="r4">Tertiary</Label>
                  </div>
                </RadioGroup>

                {/* Filter Three */}
                <Separator
                  style={{
                    backgroundColor: "black",
                    margin: "1rem 0 1rem 0",
                  }}
                />
                <h2
                  style={{
                    fontWeight: 500,
                    color: "black",
                    marginBottom: "1rem",
                  }}
                >
                  Filter Three
                </h2>
                <ToggleGroup type="single">
                  <ToggleGroupItem value="a">Option One</ToggleGroupItem>
                  <ToggleGroupItem value="b">Option two</ToggleGroupItem>
                  {/* <ToggleGroupItem value="c">Option three</ToggleGroupItem>
                  <ToggleGroupItem value="d">Option four</ToggleGroupItem>
                  <ToggleGroupItem value="e">Option five</ToggleGroupItem> */}
                </ToggleGroup>
                {/* Filter four */}
                <Separator
                  style={{
                    backgroundColor: "black",
                    margin: "1rem 0 1rem 0",
                  }}
                />
                <h2
                  style={{
                    fontWeight: 500,
                    color: "black",
                    marginBottom: "1rem",
                  }}
                >
                  Filter Four
                </h2>
                <Input placeholder="Keyword" />

                {/* Filter five */}
                <Separator
                  style={{
                    backgroundColor: "black",
                    margin: "1rem 0 1rem 0",
                  }}
                />
                <h2
                  style={{
                    fontWeight: 500,
                    color: "black",
                    marginBottom: "1rem",
                  }}
                >
                  Filter Five
                </h2>
                <div>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent side="left">
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                {/* Filter six */}
                <Separator
                  style={{
                    backgroundColor: "black",
                    margin: "1rem 0 1rem 0",
                  }}
                />
                <h2
                  style={{
                    fontWeight: 500,
                    color: "black",
                    marginBottom: "1rem",
                  }}
                >
                  Filter Six
                </h2>
                <div>
                  <Slider defaultValue={[38]} max={100} step={1} />
                </div>

                {/* Filter seven */}
                <Separator
                  style={{
                    backgroundColor: "black",
                    margin: "1rem 0 1rem 0",
                  }}
                />
                <h2
                  style={{
                    fontWeight: 500,
                    color: "black",
                    marginBottom: "1rem",
                  }}
                >
                  Filter Seven
                </h2>
                <div className="flex items-center space-x-2">
                  <Switch id="switch" />
                  <Label htmlFor="switch">Switch</Label>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <div className="flex flex-wrap justify-evenly shrink-0 basis-auto my-16">
          {/* <div className={`${classes.product_container} my-16`}> */}
          {data.map((ls) => {
            return (
              <div
                style={{
                  cursor: "pointer",
                  margin: "1rem 1rem 1rem 1rem",
                }}
                className={classes.model_hover_container}
                onClick={() => {
                  return <Product data={ls} key="hvjuh" />;
                }}
              >
                <NavLink to="/productPage" state={ls}>
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
                </NavLink>
              </div>
            );
          })}
        </div>
        <div>
          <Marquee style={{ backgroundColor: "black" }} autoFill={true}>
            <div
              style={{
                marginLeft: "1rem",
                marginRight: "1rem",
                color: "white",
              }}
            >
              EXCLUSIVE
            </div>
          </Marquee>
        </div>
      </section>
    </>
  );
}

export default Collection;
