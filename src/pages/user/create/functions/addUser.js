import { toast } from "react-toastify";
import api from "../../../../services/api";

export const addUser = async (data, setLoading, navegation, setError) => {
   setLoading(true);

   try {
      await api.post("/user", data);
      toast.success("Usuário criado com sucesso", { position: "top-right" });
      setLoading(false);
      navegation("/");
   } catch (error) {
      setLoading(false);
      setError(true);
      toast.error("Erro ao criar o usuário", { position: "top-right" });
   }
};
