import { toast } from "sonner";

type ToasterStatus = "success" | "error" | "info" | "warning";

export const handleToaster = (message: string, status: ToasterStatus) => {
  if (status && toast[status]) {
    toast[status](message);
  } else {
    toast(message);
  }
};