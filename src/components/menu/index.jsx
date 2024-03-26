import { useNavigate } from "react-router-dom";
import { Body, Link, SessionLinks, Children, Div, Title, Text } from "./style";
import {} from "antd";

const MenuComponent = ({ children }) => {
   const navegate = useNavigate();

   return (
      <>
         <Body>
            <h3>Meu app particular</h3>
            <SessionLinks>
               <Link onClick={() => navegate("/")}>Usúarios</Link>
               <Link onClick={() => navegate("/products")}>Produtos</Link>
            </SessionLinks>
         </Body>
         <Children>
            <Div>
               <Title>Usúarios</Title>
               <Text>listagem de usúarios</Text>
            </Div>

            {children}
         </Children>
      </>
   );
};

export default MenuComponent;
