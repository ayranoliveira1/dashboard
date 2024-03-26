import { toast } from "react-toastify";
import api from "../../../../services/api";

export const removerUser = async (id, setLoading, setSuccess, setError) => {
   setLoading(true);

   try {
      await api.delete(`/user/${id}`);
      toast.success("Usuário excluido com sucesso", { position: "top-right" });
      setSuccess(true);
      setLoading(false);
   } catch (error) {
      setLoading(false);
      setError(true);
      toast.error("Erro ao excluir o usuário", { position: "top-right" });
   }
};
