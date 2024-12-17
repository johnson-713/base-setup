import AppLoadSuspense from "../../components/custom/AppLoadSuspense";
import { Dashboard_Page } from "./url";
import { lazy } from "react";

const DashboardPage = AppLoadSuspense(lazy(() => import('../../pages/dashboard/index.jsx')))


const DashboardRoutes = {
      path: Dashboard_Page,
      element: <DashboardPage />,
   
};

export default DashboardRoutes
