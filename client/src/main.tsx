import { StrictMode } from "react";
import "./i18n";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import TanstackQueryProvider from "./Provider/TanstackQueryProvider.tsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { ToastProvider } from "./Provider/ToastContext.tsx";
import { CartProvider } from "./Provider/CartContext.tsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}

import Spinner from "./Components/ui/Spinner.tsx";
import { Suspense } from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <TanstackQueryProvider>
        <ToastProvider>
          <CartProvider>
            <Suspense fallback={<Spinner />}>
              <App />
            </Suspense>
          </CartProvider>
        </ToastProvider>
      </TanstackQueryProvider>
    </ClerkProvider>
  </StrictMode>
);
