import toast from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";



export const useToast = () => {
    
  const showSuccess = (msg) => toast.success(msg, { position: "top-left" });
  const showError = (msg) => toast.error(msg, { position: "top-right" });
  const showInfo = (msg) => toast.info(msg, { position: "top-right" });
  return { showSuccess, showError, showInfo };
};