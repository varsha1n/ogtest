import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import ogLogo from "../../assets/grid/OGlogo.png";
import emptyCart from "../../assets/grid/cartGif.gif";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import useRazorpay from "react-razorpay";
import classes from "./Cart.module.css";
import { cartAction } from "@/redux/State";

const screen = window.screen.width;

function Cart() {
  const cart: any = useSelector((state) => state);
  console.log(cart.cartReducer.length);

  const dispatch = useDispatch();
  // Razorpay payment gateway

  const [Razorpay] = useRazorpay();

  const handlePayment = async () => {
    // const order = await createOrder(params); //  Create order on your backend

    const options = {
      key: "rzp_test_aNYoQ5FgTfdEnR", // Enter the Key ID generated from the Dashboard
      amount: "3000",
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: ogLogo,
      order_id: "order_9A33XWu170gUtm",
      handler: (res: any) => {
        console.log(res);
      },
      prefill: {
        name: "Piyush Garg",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new Razorpay(options);

    rzp1.on("payment.failed", function (response: any) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    rzp1.open();
  };

  // const skeletonScreen = () => {
  //   return (
  //     <div className="flex flex-wrap justify-center">
  //       {Array.from({ length: 8 }).map(() => {
  //         return (
  //           <>
  //             <div className="space-y-4 mx-6 my-6">
  //               <Skeleton className="h-64 w-64 " />
  //               <div className="space-y-2">
  //                 <Skeleton className="h-4 w-[250px]" />
  //                 <Skeleton className="h-4 w-[200px]" />
  //               </div>
  //             </div>
  //           </>
  //         );
  //       })}
  //     </div>
  //   );
  // };

  const cartScreen = () => {
    return (
      <div className="flex flex-wrap justify-center">
        {cart.cartReducer?.map((ls: any) => {
          if (ls.title == "" || ls.quantity == 0) {
          } else {
            return (
              <>
                <div
                  style={{
                    cursor: "pointer",
                    margin: "1rem 1rem 1rem 1rem",
                  }}
                  className={classes.model_hover_container}
                  // onClick={() => {
                  //   return <Product data={ls} key="hvjuh" />;
                  // }}
                >
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
                    <div className="flex justify-between">
                      <div style={{ fontWeight: 300, fontSize: "1.5rem" }}>
                        ₹{ls.price}
                      </div>
                      {/* <div className="mx-8">|</div> */}
                      <div style={{ fontWeight: 300 }}>
                        <div>
                          <Button
                            style={{
                              backgroundColor: "white",
                              color: "black",
                              border: "1px solid gray",
                              marginRight: "0.5rem",
                              padding: "0.5rem",
                              height: "2rem",
                            }}
                            onClick={() => {
                              if (ls["quantity"] === 0) {
                                dispatch(cartAction.removeItem(ls.id));
                                console.log(ls);
                              } else {
                                dispatch(cartAction.decrementQuantity(ls.id));
                              }
                            }}
                          >
                            -
                          </Button>{" "}
                          {ls.quantity}
                          <Button
                            onClick={() => {
                              dispatch(cartAction.incrementQuantity(ls.id));
                              console.log(ls["quantity"]);
                            }}
                            style={{
                              backgroundColor: "white",
                              color: "black",
                              border: "1px solid gray",
                              marginLeft: "0.5rem",
                              padding: "0.5rem",
                              height: "2rem",
                            }}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          }
        })}
      </div>
    );
  };

  // const emptyCart = () => {
  //   return (
  //     // <div className=" emptyCartMainParent text-center relative top-20 h-full">
  //     //   <div id="fs">
  //     //     <p className=" text-3xl fof uppercase " id="fs">
  //     //       Cart Is Empty :)
  //     //     </p>
  //     //   </div>

  //     //   <img src={emptyCart} className=" absolute cg" />
  //     // </div>
  //   );
  // };

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
      <section className="my-12">
        <div
          style={{
            fontSize: "2rem",
            fontWeight: 600,
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Cart/Wishlist
        </div>
        <div style={{ textAlign: "center" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        {cart.cartReducer.length > 1 ? (
          cartScreen()
        ) : (
          <div className=" emptyCartMainParent text-center relative top-20 h-full">
            <div id="fs">
              <p className=" text-3xl fof uppercase " id="fs">
                {/* Cart Is Empty :) */}
              </p>
            </div>

            <img
              src={emptyCart as any}
              style={{ left: "50%", transform: "translateX(-50%)" }}
              className="absolute cg"
            />
          </div>
        )}
        {/* {skeletonScreen()} */}
        <div>
          {cart.cartReducer.length > 1 ? (
            <Drawer>
              <div className="mt-16 text-center">
                <DrawerTrigger>
                  <Button className="px-12 py-6">Proceed</Button>
                </DrawerTrigger>
              </div>
              <DrawerContent style={{ maxHeight: "75vh" }}>
                <DrawerHeader style={{ overflow: "scroll" }}>
                  <DrawerTitle>Are you sure absolutely sure?</DrawerTitle>
                  <DrawerDescription>
                    {Array.from({ length: 5 }).map(() => {
                      return (
                        <div className="space-y-4 mx-6 my-6">
                          <Skeleton className="h-64 w-64 " />
                          <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                          </div>
                        </div>
                      );
                    })}
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <Button onClick={handlePayment}>Pay</Button>
                  <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          ) : (
            <div></div>
          )}
        </div>
      </section>
    </>
  );
}

export default Cart;
