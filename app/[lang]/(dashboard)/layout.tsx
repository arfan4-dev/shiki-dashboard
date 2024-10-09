"use client";
import DashBoardLayoutProvider from "@/provider/dashboard.layout.provider";
import { authOptions } from "@/lib/auth";
import { getServerSession, NextAuthOptions } from "next-auth";
import { redirect } from "next/navigation";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
const layout = async ({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: any };
}) => {
  // const session = await getServerSession(authOptions as NextAuthOptions);

  // if (!session?.user?.email) {
  //   redirect("/auth/login");
  // }

  // const trans = await getDictionary(lang);

  return (
    <DashBoardLayoutProvider>
      <Provider store={store}> {children}</Provider>
    </DashBoardLayoutProvider>
  );
};

export default layout;
