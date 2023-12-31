import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route, Navigate
} from "react-router-dom";
import { useSelector } from "react-redux";
import SuccessPage from "./pages/SuccessPage";
import CancelPage from "./pages/CancelPage";

const App = () => {

  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={user ? <Navigate replace to="/" /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/successpage" element={<SuccessPage />} />
        <Route path="/cancelpage" element={<CancelPage />} />
      </Routes>
    </Router>
  );
};

export default App;