import { useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Spinner from "./ui/Spinner";

const GlobalSpinner = () => {
  const [show, setShow] = useState(false);
  const location = useRouterState({ select: (s) => s.location });

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);
  if (!show) return null;

  return <Spinner />;
};

export default GlobalSpinner;
