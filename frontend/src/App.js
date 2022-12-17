import {BrowserRouter, Routes, Route} from "react-router-dom";
import AddCategory from "./components/category/AddCategory";
import CategoryList from "./components/category/CategoryList";
import EditCategory from "./components/category/EditCategory";
import Header from "./components/Header";
import AddProduct from "./components/product/AddProduct";
import EditProduct from "./components/product/EditProduct";
import ProductList from "./components/product/ProductList";
import AddType from "./components/type/AddType";
import EditType from "./components/type/EditType";
import TypeList from "./components/type/TypeList";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/type" element={<TypeList />} />
        <Route path="/type/add" element={<AddType />} />
        <Route path="/type/edit/:id" element={<EditType />} />
        <Route path="/category" element={<CategoryList />} />
        <Route path="/category/add" element={<AddCategory />} />
        <Route path="/category/edit/:id" element={<EditCategory />} />
        <Route path="/product" element={<ProductList />} />
        <Route path="/product/add" element={<AddProduct />} />
        <Route path="/product/edit/:id" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
