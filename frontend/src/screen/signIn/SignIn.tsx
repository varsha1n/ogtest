import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NavLink } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { motion } from "framer-motion";
// import classes from "./SignIn.module.css";

const screen = window.screen.width;

function SignIn() {
  const [userType, setUserType] = useState("");
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
      <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
        <div className="w-full m-auto bg-white lg:max-w-lg">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Sign in</CardTitle>
              <CardDescription className="text-center">
                Enter your email and password to login
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <div>
                <Tabs defaultValue="customer" className="w-[400px]">
                  <TabsList>
                    <TabsTrigger
                      onClick={() => setUserType("customer")}
                      value="customer"
                    >
                      Customer
                    </TabsTrigger>
                    <TabsTrigger
                      onClick={() => setUserType("designer")}
                      value="designer"
                    >
                      Designer
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-blue-600 hover:underline">
                  Forgot Password
                </span>
                {/* <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label> */}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col">
              <NavLink to={`/${userType}`}>
                <Button className="w-full">Login</Button>
              </NavLink>
              <p className="mt-2 text-xs text-center text-gray-700">
                {" "}
                Don't have an account?{" "}
                <NavLink to="/signUp">
                  <span className=" text-blue-600 hover:underline">
                    Sign up
                  </span>
                </NavLink>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>{" "}
    </>
  );
}

export default SignIn;
