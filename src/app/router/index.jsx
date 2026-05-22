import { createBrowserRouter } from "react-router-dom";
import Base from "../../Component/Ui/Share/Base";
import MainLayout from "../../Component/Ui/Layout/MainLayout";
import Nav from "../../Component/Ui/Share/Nav";
import BaseOne from "../../modules/startSeite/components/BaseOne";
import { bannnerone } from "../../mock";
import { banner1 } from "../../mock";
import { banner2 } from "../../mock";
import { banner3 } from "../../mock";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Base
            lineOne={"DEINE"}
            lineTwo={"REGION"}
            lineThree={"OBEN AN DER VOLME"}
            bannnerone={bannnerone}
            banner1={banner1}
            banner2={banner2}
            banner3={banner3}
          />
        ),
      },
    ],
  },
]);
