import React from "react";
import EntDecken from "../../../Component/Ui/Share/EntDecken";
import {
  loremipsum,
  newsletter,
  downloadsData,
  footerSecand,
  footerSecandNew,
} from "../../../mock";
import Newsletter from "../component/Newsletter";
import DownloadComponent from "../component/DownloadComponent";
import Footer from "../../../Component/Ui/Share/Footer";

const Downloads = () => {
  return (
    <>
      <EntDecken entDecken={loremipsum} />
      <Newsletter newsletter={newsletter} />
      <DownloadComponent downloadsData={downloadsData} />
      <Footer footerOne={footerSecand} footerSecandNew={footerSecandNew} />
    </>
  );
};

export default Downloads;
