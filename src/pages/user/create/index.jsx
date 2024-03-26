import { Input, ErrorMessage, Loading } from "../../../components";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Row, Col, Button } from "antd";
import { SessionButtons } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { addUser } from "./functions/addUser";
import { useEffect, useState } from "react";
import { getUserById } from "./functions/getUserById";
import { updateUser } from "./functions/updateUser";

const Create = () => {
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(false);

   const navegation = useNavigate();
   const location = useLocation();

   const schema = yup.object({
      name: yup.string().required("Nome obrigatório"),
      email: yup.string().required("Email obrigatório").email(),
      password: yup
         .string()
         .required("Senha obrigatória")
         .min(8, "Minimo 8 caracteres"),
      phone: yup.string(),
   });

   const schemaUpdate = yup.object({
      name: yup.string().required("Nome obrigatório"),
      email: yup.string().required("Email obrigatório").email(),
      password: yup.string(),
      phone: yup.string(),
   });

   const {
      control,
      handleSubmit,
      setValue,
      formState: { errors },
   } = useForm({
      resolver: yupResolver(!location?.state?.id ? schema : schemaUpdate),
   });

   const getUser = async () => {
      const user = await getUserById(location?.state?.id, setLoading, setError);

      setValue("name", user?.name);
      setValue("email", user?.email);
      setValue("phone", user?.phone);
   };

   useEffect(() => {
      if (location?.state?.id) {
         getUser();
      }
   }, [location]);

   const save = (data) => {
      if (!location?.state?.id) {
         addUser(data, setLoading, navegation, setError);
      } else {
         if (!data.password) delete data.password;
         updateUser(location?.state?.id, data, setLoading, navegation);
      }
   };

   return (
      <>
         {loading && <Loading />}
         {!loading && (
            <form style={{ marginTop: 20 }} onSubmit={handleSubmit(save)}>
               <Row gutter={[20, 20]}>
                  <Col className="gutter-row" span={12}>
                     <Controller
                        name="name"
                        control={control}
                        render={({ field: { onChange, value, ref } }) => (
                           <Input
                              style={{ borderRadius: "0px" }}
                              value={value}
                              onChange={onChange}
                              ref={ref}
                              label="Nome"
                              placeholder="Digite o nome de Usúario"
                           />
                        )}
                     />
                     {errors.name && (
                        <ErrorMessage>{errors?.name?.message}</ErrorMessage>
                     )}
                  </Col>

                  <Col className="gutter-row" span={12}>
                     <Controller
                        name="email"
                        type="email"
                        control={control}
                        render={({ field: { onChange, value, ref } }) => (
                           <Input
                              style={{ borderRadius: "0px" }}
                              value={value}
                              onChange={onChange}
                              ref={ref}
                              label="Email"
                              placeholder="Digite um Email"
                           />
                        )}
                     />
                     {errors.email && (
                        <ErrorMessage>{errors?.email?.message}</ErrorMessage>
                     )}
                  </Col>

                  <Col className="gutter-row" span={12}>
                     <Controller
                        name="password"
                        control={control}
                        render={({ field: { onChange, value, ref } }) => (
                           <Input
                              style={{ borderRadius: "0px" }}
                              value={value}
                              onChange={onChange}
                              ref={ref}
                              label="Senha"
                              placeholder="Digite uma Senha"
                              type="password"
                           />
                        )}
                     />
                     {errors.password && (
                        <ErrorMessage>{errors?.password?.message}</ErrorMessage>
                     )}
                  </Col>

                  <Col className="gutter-row" span={12}>
                     <Controller
                        name="phone"
                        control={control}
                        render={({ field: { onChange, value, ref } }) => (
                           <Input
                              style={{ borderRadius: "0px" }}
                              value={value}
                              onChange={onChange}
                              ref={ref}
                              label="Telefone"
                              placeholder="Digite o seu número de telefone"
                           />
                        )}
                     />
                  </Col>

                  <Col span={24}>
                     <SessionButtons>
                        <Button
                           onClick={() => navegation("/")}
                           style={{ borderRadius: "0px" }}
                        >
                           Cancelar
                        </Button>
                        <Button
                           style={{ borderRadius: "0px" }}
                           type="primary"
                           htmlType="submit"
                        >
                           Cadastrar
                        </Button>
                     </SessionButtons>
                  </Col>
               </Row>
            </form>
         )}
      </>
   );
};

export default Create;
