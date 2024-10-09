
import { getDictionary } from "@/app/dictionaries";
import EmployeesManagementPageView from "./page-view";

interface DashboardProps {
  params: {
    lang: any;
  };
}
const EcommercePage = async ({ params: { lang } }: DashboardProps) => {
  return <EmployeesManagementPageView />;
};

export default EcommercePage;
