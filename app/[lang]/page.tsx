import React from "react";
import DashBoardLayoutProvider from "@/provider/dashboard.layout.provider";
import { authOptions } from "@/lib/auth";
import { getServerSession, NextAuthOptions } from "next-auth";
import { redirect } from "next/navigation";

const page = async ({
  children,
}: {
  children: React.ReactNode;
}) => {


  return (
    <DashBoardLayoutProvider>{children}</DashBoardLayoutProvider>
  );
};

export default page;
