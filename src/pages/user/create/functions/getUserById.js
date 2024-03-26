import { toast } from "react-toastify";
import api from "../../../../services/api";

export const getUserById = async (id, setLoading, setError) => {
   setLoading(true);

   try {
      const response = await api.get(`/user/${id}`);
      setLoading(false);
      return response.data;
   } catch (error) {
      setLoading(false);
      setError(true);
      toast.error("Erro ao carregar o usuário", { position: "top-right" });
   }
};
