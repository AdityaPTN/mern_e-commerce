import {BrowserRouter, Routes, Route} from "react-router-dom";
// import { AddUser } from "./components/AddUser";
import Header from "./components/Header";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
