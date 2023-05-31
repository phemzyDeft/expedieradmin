import React from "react";
import { useRouter } from "next/router";
import Sidebar from "@/components/Sidebar";

const Layout = ({ children }) => {
  const route = useRouter();

  const handleRoute = () => {
    route.pathname === "/";
  };

  return (
    <>
      {!handleRoute && (
        <div className={`${style.head}`}>
          <Sidebar />
        </div>
      )}
      <div className={``}>{children}</div>
    </>
  );
};

export default Layout;
