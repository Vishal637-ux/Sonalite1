import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import ProductSection from "./components/ProductSection";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <ProductSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Products Category Page */}
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

        {/* Product List Page */}
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

        {/* Product Details Page */}
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
