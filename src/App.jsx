import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import CompanyIntro from "./components/CompanyIntro";
import ProductSection from "./components/ProductSection";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <CompanyIntro />
      <ProductSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Products */}
        <Route
          path="/products"
          element={
            <>
              <Navbar />
              <ProductSection />
              <Footer />
            </>
          }
        />

        {/* Products by Category */}
        <Route
          path="/products/:category"
          element={
            <>
              <Navbar />
              <ProductList />
              <Footer />
            </>
          }
        />

        {/* About Us */}
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />

        {/* Contact Us */}
        <Route
          path="/contact"
          element={
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Product Details */}
        <Route
          path="/product/:id"
          element={
            <>
              <Navbar />
              <ProductDetails />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
