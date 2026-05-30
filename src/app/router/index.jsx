import { createBrowserRouter } from "react-router-dom";

import { baseOne, baseTwo, baseThree, baseFour, baseFive } from "../../mock";

import Base from "../../Component/Ui/Share/Base";
import MainLayout from "../../Component/Ui/Layout/MainLayout";
import Startseite from "../../modules/startSeite/page";
import Aktuelle from "../../modules/startSeite/components/Aktuelle";
import Region from "../../modules/region/page";
import Projekte from "../../modules/ projekte/page";
import Leader from "../../modules/leader/page";
import Regionale from "../../modules/regionale/page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <>
            <Base base={baseOne} />
            <Startseite />
          </>
        ),
      },
    ],
  },
  {
    path: "/region-ziele",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <>
            <Base base={baseTwo} />
            <Region />
          </>
        ),
      },
    ],
  },
  {
    path: "/projekte",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <>
            <Base base={baseThree} />
            <Projekte />
          </>
        ),
      },
    ],
  },
  {
    path: "/leader",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <>
            <Base base={baseFour} />
            <Leader />
          </>
        ),
      },
    ],
  },
  {
    path: "/regionale",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <>
            <Base base={baseFive} />
            <Regionale />
          </>
        ),
      },
    ],
  },
]);
