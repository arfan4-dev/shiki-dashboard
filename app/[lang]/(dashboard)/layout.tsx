"use client";
import DashBoardLayoutProvider from "@/provider/dashboard.layout.provider";

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import GlobalModal from "@/components/common/GlobalModal";
const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <DashBoardLayoutProvider>
      <Provider store={store}>
        {children}
        <GlobalModal />
      </Provider>
    </DashBoardLayoutProvider>
  );
};

export default layout;
