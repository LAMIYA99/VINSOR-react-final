import {
  createContext,
  useContext,
  useState,
  type ReactNode,
  useCallback,
} from "react";
import { X, CheckCircle, AlertCircle, Info } from "lucide-react";

type ToastType = "success" | "error" | "info";

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback(
    (message: string, type: ToastType = "success") => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, message, type }]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
      }, 3000);
    },
    []
  );

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed top-5 right-5 z-9999 flex flex-col gap-3">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`
              min-w-[300px] p-4 rounded-lg shadow-lg flex items-center justify-between gap-3 animate-in slide-in-from-right-full transition-all duration-300
              ${
                toast.type === "success"
                  ? "bg-white border-l-4 border-green-500 text-gray-800"
                  : ""
              }
              ${
                toast.type === "error"
                  ? "bg-white border-l-4 border-red-500 text-gray-800"
                  : ""
              }
              ${
                toast.type === "info"
                  ? "bg-white border-l-4 border-blue-500 text-gray-800"
                  : ""
              }
            `}
          >
            <div className="flex items-center gap-3">
              {toast.type === "success" && (
                <CheckCircle className="text-green-500 w-5 h-5" />
              )}
              {toast.type === "error" && (
                <AlertCircle className="text-red-500 w-5 h-5" />
              )}
              {toast.type === "info" && (
                <Info className="text-blue-500 w-5 h-5" />
              )}
              <span className="font-medium text-sm">{toast.message}</span>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
