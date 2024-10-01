import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NavLink } from "react-router-dom";
import { ImGoogle2 } from "react-icons/im";
import { motion } from "framer-motion";
// import classes from "./SignUp.module.css";

const screen = window.screen.width;

function SignUp() {
  console.log(screen);
  return (
    <>
      {() => {
        if (screen > 500) {
          console.log(screen);
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
              <CardTitle className="text-2xl text-center">
                Create an account
              </CardTitle>
              <CardDescription className="text-center">
                Enter your email and password to sign up
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" />
              </div>
              <span className=" text-blue-600 hover:underline text-sm">
                Forget password ?
              </span>
            </CardContent>
            <CardFooter className="flex flex-col">
              <Button className="w-full">Sign Up</Button>
            </CardFooter>
            <div className="relative mb-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <div className="grid justify-center  gap-6 m-2">
              <Button className="px-12" variant="outline">
                Google
                <ImGoogle2 style={{ marginLeft: "1rem" }} />
              </Button>
            </div>
            <p className="mt-2 text-xs text-center text-gray-700 mb-2">
              {" "}
              Already have an account?{" "}
              <NavLink to="/signIn">
                <span className=" text-blue-600 hover:underline">Sign In</span>
              </NavLink>
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}

export default SignUp;
