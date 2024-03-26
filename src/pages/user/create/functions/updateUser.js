import { toast } from "react-toastify";
import api from "../../../../services/api";

export const updateUser = async (id, data, setLoading, navegation) => {
   setLoading(true);

   try {
      await api.put(`/user/${id}`, data);
      setLoading(false);
      toast.success("Usuário atualizado com sucesso", {
         position: "top-right",
      });
      navegation("/");
   } catch (error) {
      setLoading(false);
      toast.error("Erro ao atualizar o usuário", {
         position: "top-right",
      });
   }
};
