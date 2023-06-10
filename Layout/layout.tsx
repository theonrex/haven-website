import React, { ReactNode } from "react";
import Nav from "@/components/Navigation/Nav";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout() {
  return (
    <>
   
      <main>
        <Nav />
        {/* {children} */}
      </main>
    </>
  );
}
