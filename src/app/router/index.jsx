import { createBrowserRouter } from "react-router-dom";

import { baseOne } from "../../mock";

import Base from "../../Component/Ui/Share/Base";
import MainLayout from "../../Component/Ui/Layout/MainLayout";
import Startseite from "../../modules/startSeite/page";
import Aktuelle from "../../modules/startSeite/components/Aktuelle";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <>
            <Base baseOne={baseOne} />
            <Startseite />
          </>
        ),
      },
    ],
  },
]);
