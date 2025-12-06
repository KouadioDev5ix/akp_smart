import { createHashRouter, Navigate } from "react-router-dom";

import LoginPage from "../Pages/loginPage/LoginPage";
import AppLayout from "../Layout/AppLayout";
import User from "../Pages/user/User";
import DashBoard from "../Pages/dashBoard/DashBoard";
import Produits from "../Pages/produits/Produits";
import Annonces from "../Pages/annonces/Annonces";
import Transactions from "../Pages/transactions/Transactions";
import Rapports from "../Pages/rapports/Rapports";
import Notification from "../Pages/notifications/Notification";
import Paramètres from "../Pages/paramètres/Paramètres";

export const AppRouter = createHashRouter([
 {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
   {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/dashboard", element: <DashBoard /> },
      {
        path: "/utilisateur",
        element: <User />,
      },
      {
        path: "produits",
        element: <Produits />,
      },
      {
        path: "transactions",
        element: <Transactions />,
      },
      {
        path: "annonces",
        element: <Annonces />,
      },
      {
        path: "rapports",
        element: <Rapports />,
      },
      {
        path: "notifications",
        element: <Notification />,
      },
      {
        path: "parametres",
        element: <Paramètres />,
      },
    ],
  },
]);
