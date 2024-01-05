import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ErrorPage = React.lazy(() => import("pages/ErrorPage"));
const FAQs = React.lazy(() => import("pages/FAQs"));
const Settings = React.lazy(() => import("pages/Settings"));
const OrderDetails = React.lazy(() => import("pages/OrderDetails"));
const OrderHistory = React.lazy(() => import("pages/OrderHistory"));
const UserDashboard = React.lazy(() => import("pages/UserDashboard"));
const CreateAccount = React.lazy(() => import("pages/CreateAccount"));
const SignIn = React.lazy(() => import("pages/SignIn"));
const Contact = React.lazy(() => import("pages/Contact"));
const About = React.lazy(() => import("pages/About"));
const SingleBlog = React.lazy(() => import("pages/SingleBlog"));
const BlogList = React.lazy(() => import("pages/BlogList"));
const Checkout = React.lazy(() => import("pages/Checkout"));
const ShoppingCart = React.lazy(() => import("pages/ShoppingCart"));
const Wishlist = React.lazy(() => import("pages/Wishlist"));
const ProductDetailCustomerFeedback = React.lazy(
  () => import("pages/ProductDetailCustomerFeedback"),
);
const ProductsDetailsAdditionalInfo = React.lazy(
  () => import("pages/ProductsDetailsAdditionalInfo"),
);
const ProductsDetailsDescription = React.lazy(
  () => import("pages/ProductsDetailsDescription"),
);
const ShopTwo = React.lazy(() => import("pages/ShopTwo"));
const ShopOne = React.lazy(() => import("pages/ShopOne"));
const Homepage3 = React.lazy(() => import("pages/Homepage3"));
const Homepage2 = React.lazy(() => import("pages/Homepage2"));
const Homepage1 = React.lazy(() => import("pages/Homepage1"));
const HomepageBoxLayout = React.lazy(() => import("pages/HomepageBoxLayout"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const Thumbnail = React.lazy(() => import("pages/Thumbnail"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/thumbnail" element={<Thumbnail />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/homepageboxlayout" element={<HomepageBoxLayout />} />
          <Route path="/homepage1" element={<Homepage1 />} />
          <Route path="/homepage2" element={<Homepage2 />} />
          <Route path="/homepage3" element={<Homepage3 />} />
          <Route path="/shopone" element={<ShopOne />} />
          <Route path="/shoptwo" element={<ShopTwo />} />
          <Route
            path="/productsdetailsdescription"
            element={<ProductsDetailsDescription />}
          />
          <Route
            path="/productsdetailsadditionalinfo"
            element={<ProductsDetailsAdditionalInfo />}
          />
          <Route
            path="/productdetailcustomerfeedback"
            element={<ProductDetailCustomerFeedback />}
          />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/bloglist" element={<BlogList />} />
          <Route path="/singleblog" element={<SingleBlog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/orderhistory" element={<OrderHistory />} />
          <Route path="/orderdetails" element={<OrderDetails />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/errorpage" element={<ErrorPage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
