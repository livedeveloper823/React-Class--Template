import React, { Fragment } from "react";
// import Tabs from "react-responsive-tabs";
import { useEffect, useState } from "react";
// import PageTitle from "../../../Layout/AppMain/PageTitle";

// Examples
// import SalesDashboard1 from "./Examples/Variation1";

export default function ManageUSer() {
  const [height, setHeight] = useState(800);

  useEffect(() => {
    const onChange = (e) => {
      if (
        e.data.event === "grafana:dimensions" &&
        e.data.name === "MyGrafanaIframe"
      ) {
        setHeight(e.data.height);
      }
    };
    window.addEventListener("message", onChange);
    return () => window.removeEventListener("message", onChange);
  }, []);

  return (
    <Fragment>
      <iframe
      title="Users"
        name="MyGrafanaIframe"
        width="100%"
        height={height}
        src="https://grafana.com/users/laihaoqiang34/settings"
      ></iframe>
    </Fragment>
  );
}
