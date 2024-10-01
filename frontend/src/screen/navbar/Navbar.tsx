import logo from "../../assets/grid/OGlogo.png";
import cart from "../../assets/grid/cart.svg";
import { NavLink } from "react-router-dom";
import { Command, CommandInput } from "@/components/ui/command";
import classes from "./Navbar.module.css";
// import { useState } from "react";
// import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { forwardRef } from "react";

function Navbar() {
  // const [state, changeState] = useState("block");
  return (
    <nav className="bg-white  w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 relative">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={logo}
            className={`${classes.mb_logoCenter} h-12 ml-8`}
            alt="OG Logo"
          />
        </a>
        <div className="flex items-end md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className={`${classes.mb_navbarSearch}`}>
            <button className="m-auto">
              <Command style={{ border: "1px solid black" }}>
                <CommandInput placeholder="search..." />
              </Command>
            </button>
            <NavLink to="/cart">
              <button
                style={{ marginLeft: "1rem", transform: "translate(10%, 50%)" }}
                className="m-auto"
              >
                <img src={cart} className="w-8 mr-8 m-auto" />
              </button>
            </NavLink>
            <NavLink to="/signIn">
              <button
                type="button"
                className="text-black border-black border-2 bg-white hover:bg-black hover:text-white focus:ring-1 focus:outline-none focus:ring-black font-medium rounded text-sm px-8 py-2 text-center dark:bg-white dark:hover:bg-black dark:focus:ring-black"
              >
                Login
              </button>
            </NavLink>
          </div>
          <Sheet>
            <SheetTrigger>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
                // onClick={() =>
                //   state == "block" ? changeState("none") : changeState("block")
                // }
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent style={{ width: "100vw", height: "50vh" }}>
              <SheetHeader>
                <SheetTitle>
                  <h1>
                    <NavLink to="">Home</NavLink>
                  </h1>
                </SheetTitle>
                <SheetTitle>
                  <h1>
                    <NavLink to="/shop">Shop</NavLink>
                  </h1>
                </SheetTitle>
                <SheetTitle>
                  <h1>
                    <NavLink to="/select">Customize</NavLink>
                  </h1>
                </SheetTitle>
                <SheetTitle>
                  <h1>
                    <NavLink to="/cart">Cart</NavLink>
                  </h1>
                </SheetTitle>
                <SheetTitle>
                  <h1>
                    <NavLink to="/signIn">Login</NavLink>
                  </h1>
                </SheetTitle>
                <SheetTitle>
                  <button className="m-auto">
                    <Command style={{ border: "1px solid black" }}>
                      <CommandInput placeholder="search..." />
                    </Command>
                  </button>
                </SheetTitle>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <div
          // style={{ display: state }}
          className={`${classes.mb_navbar} items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg-white ">
            <li>
              <a
                href="#"
                className=" py-2 px-3 text-black bg-white rounded hover:text-slate-600"
                aria-current="page"
              >
                <NavLink to="">HOME</NavLink>
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" py-2 px-3 text-black bg-white rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black hover:text-slate-600"
              >
                <NavLink to="shop">SHOP</NavLink>
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" py-2 px-3 text-black bg-white rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black hover:text-slate-600"
              >
                <NavLink to="select">CUSTOMIZE</NavLink>
              </a>
            </li>
            {/* <li> */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    style={{ padding: 0, margin: 0 }}
                    className={classes.categories}
                  >
                    CATEGORIES
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            {/* <Icons.logo className="h-6 w-6" /> */}
                            <div className="mb-2 mt-4 text-lg font-medium">
                              OG Style
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed your Style
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/docs" title="Introduction">
                        Re-usable components built using color and thread
                      </ListItem>
                      <ListItem href="/docs/installation" title="Installation">
                        How to use OG and structure your app.
                      </ListItem>
                      <ListItem
                        href="/docs/primitives/typography"
                        title="Typography"
                      >
                        Styles your color, sheet, pants...etc
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            {/* </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

export default Navbar;
