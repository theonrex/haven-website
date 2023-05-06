import React, { ReactNode } from "react";
import Nav from "@/components/Navigation/Nav";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
   
      <main>
        <Nav />
        {children}
      </main>
    </>
  );
}
