import { Button } from "antd";
import { Loading } from "../../../components";
import { Header } from "./style";
import { Table, Popconfirm } from "antd";
import { getUsers } from "./functions/getUser";
import { useEffect, useState } from "react";
import { removerUser } from "./functions/removerUser";
import { useNavigate } from "react-router-dom";

const List = () => {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);
   const [success, setSuccess] = useState(false);

   const navegate = useNavigate();

   useEffect(() => {
      getUsers(setLoading, setData, setError);
   }, [success]);

   const columns = [
      {
         title: "#",
         dataIndex: "id",
         key: "id",
      },
      {
         title: "Nome",
         dataIndex: "name",
         key: "name",
      },
      {
         title: "Email",
         dataIndex: "email",
         key: "email",
      },
      {
         title: "Ações",
         align: "center",
         render: (text, record) => (
            <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
               <Button
                  className="btn-edit"
                  style={{
                     backgroundColor: "white",
                     color: "black",
                     border: "1px solid black",
                     borderRadius: "0px",
                  }}
                  type="primary"
                  onClick={() =>
                     navegate(`/create`, { state: { id: record.id } })
                  }
               >
                  Editar
               </Button>
               <Popconfirm
                  title="Tem certeza que deseja excluir?"
                  onConfirm={() =>
                     removerUser(record.id, setLoading, setSuccess, setError)
                  }
                  okText="Sim"
                  cancelText="Não"
               >
                  <Button style={{ borderRadius: "0px" }} type="primary" danger>
                     Excluir
                  </Button>
               </Popconfirm>
            </div>
         ),
      },
   ];

   return (
      <>
         <Header>
            <Button
               style={{ borderRadius: "0px" }}
               type="primary"
               onClick={() => {
                  navegate("/create");
               }}
            >
               Adicionar Usúario
            </Button>
         </Header>
         {loading && <Loading />}
         {!loading && <Table columns={columns} dataSource={data} />}
      </>
   );
};

export default List;
