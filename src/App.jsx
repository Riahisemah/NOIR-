import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientInstance } from "@/lib/query-client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from "./lib/PageNotFound";
import { CartProvider } from "@/lib/CartContext";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "@/components/noire/Layout";
import Home from "@/pages/Home";
import ProductDetail from "@/pages/ProductDetail";

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <CartProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </CartProvider>
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
