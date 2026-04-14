import "./App.css";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="container">
      <h1>🛒 TechMitra Store</h1>

      <h2>Products</h2>
      <div className="products">
        <ProductCard name="Wireless Headphones" price="1999" />
        <ProductCard name="Smart Watch" price="2999" />
        <ProductCard name="Bluetooth Speaker" price="1499" />
      </div>

      <Cart />
      <ContactForm />
    </div>
  );
}

export default App;