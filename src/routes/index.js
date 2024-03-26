import { Route, Routes } from "react-router-dom";
import List from "../pages/user/list";
import Create from "../pages/user/create";
import { Menu } from "../components";
import MenuCreateComponent from "../components/menu/menu";

const RoutesComponents = () => {
   return (
      <Routes>
         <Route
            path="/"
            element={
               <Menu>
                  <List />
               </Menu>
            }
         />
         <Route
            path="/create"
            element={
               <MenuCreateComponent>
                  <Create />
               </MenuCreateComponent>
            }
         />
      </Routes>
   );
};

export default RoutesComponents;
