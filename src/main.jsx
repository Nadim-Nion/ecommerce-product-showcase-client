import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import BasicRoute from "./routes/BasicRoute";
import "./index.css";
import { CartProvider } from "./context/CartProvider";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <CartProvider>
      <BasicRoute />
    </CartProvider>
  </BrowserRouter>
);
