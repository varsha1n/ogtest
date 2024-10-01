import { Suspense, lazy } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Layout = lazy(() => import("./screen/layout/Layout"));
const Home = lazy(() => import("./screen/home/Home"));
const CustomizeShirt = lazy(() => import("./screen/customize/CustomShirt"));
const CustomizePant = lazy(() => import("./screen/customize/CustomPant"));
const CustomizeDress = lazy(() => import("./screen/customize/CustomDress"));
const Collection = lazy(() => import("./screen/collection/Collection"));
const Product = lazy(() => import("./screen/product/Product"));
const SignIn = lazy(() => import("./screen/signIn/SignIn"));
const SignUp = lazy(() => import("./screen/signUp/SignUp"));
const Cart = lazy(() => import("./screen/cart/Cart"));
const CustomerLogin = lazy(() => import("./screen/customerLogin/CustomerLogin"));
const DesignerLogin = lazy(() => import("./screen/designerLogin/DesignerLogin"));
const CustomizeSelect = lazy(() => import("./screen/customizeSelect/CustomizeSelect"));

function App() {
  const location = useLocation();
  return (
    <>
      <Suspense>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route path="" element={<Layout />}>
              <Route index path="" element={<Home />} />
              <Route path="select">
                <Route index path="" element={<CustomizeSelect />} />
                {/* Updated Routes for CustomizeShirt and CustomizePant */}
                <Route path="customize/shirt" element={<CustomizeShirt />} />
                <Route path="customize/pant" element={<CustomizePant />} />
                <Route path="customize/dress" element={<CustomizeDress />} />
        
              </Route>
              <Route path="shop" element={<Collection />} />
              <Route path="productPage" element={<Product />} />
              <Route path="signIn" element={<SignIn />} />
              <Route path="signUp" element={<SignUp />} />
              <Route path="cart" element={<Cart />} />
              <Route path="customer" element={<CustomerLogin />} />
              <Route path="designer" element={<DesignerLogin />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  );
}

export default App;
