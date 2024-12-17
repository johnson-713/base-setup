import { useRoutes } from "react-router-dom";
import DashboardRoutes from "./dashboard";

export default function Routes() {
  let routes = useRoutes([DashboardRoutes])
  return routes;
}
