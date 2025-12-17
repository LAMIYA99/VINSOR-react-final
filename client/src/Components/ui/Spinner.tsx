import { Loader2 } from "lucide-react";

const Spinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <Loader2 className="w-12 h-12 text-[#bd9556] animate-spin" />
    </div>
  );
};

export default Spinner;
