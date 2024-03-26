import { ArrowLeft } from "lucide-react";
import {
   Body,
   Link,
   SessionLinks,
   Children,
   Div,
   Title,
   Text,
   Button2,
} from "./style";
import {} from "antd";
import { useNavigate } from "react-router-dom";

const MenuCreateComponent = ({ children }) => {
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
               <Button2
                  onClick={() => {
                     navegate("/");
                  }}
               >
                  <ArrowLeft style={{ height: 20, width: 20 }} />
               </Button2>
               <Title>Usúarios</Title>
               <Text>Criar novo usúario</Text>
            </Div>

            {children}
         </Children>
      </>
   );
};

export default MenuCreateComponent;
