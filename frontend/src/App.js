import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCategory from "./components/category/AddCategory";
import CategoryList from "./components/category/CategoryList";
import EditCategory from "./components/category/EditCategory";
import Client from "./components/client/Client";
import DetailProductClient from "./components/client/DetailProductClient";
import ProductClient from "./components/client/ProductClient";
import Cart from './components/client/Cart'
import Dashboard from "./components/Dashboard";
import AddProduct from "./components/product/AddProduct";
import EditProduct from "./components/product/EditProduct";
import ProductList from "./components/product/ProductList";
import AddType from "./components/type/AddType";
import EditType from "./components/type/EditType";
import TypeList from "./components/type/TypeList";
import OrderList from "./components/order/OrderList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Client />} />
        <Route path="/product" element={<ProductClient />} />
        <Route path="/product/:id" element={<DetailProductClient />} />
        <Route path="/cart" element={<Cart />} />


        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/type" element={<TypeList />} />
        <Route path="/admin/type/add" element={<AddType />} />
        <Route path="/admin/type/edit/:id" element={<EditType />} />
        <Route path="/admin/category" element={<CategoryList />} />
        <Route path="/admin/category/add" element={<AddCategory />} />
        <Route path="/admin/category/edit/:id" element={<EditCategory />} />
        <Route path="/admin/product" element={<ProductList />} />
        <Route path="/admin/product/add" element={<AddProduct />} />
        <Route path="/admin/product/edit/:id" element={<EditProduct />} />
        <Route path="/admin/order" element={<OrderList />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
