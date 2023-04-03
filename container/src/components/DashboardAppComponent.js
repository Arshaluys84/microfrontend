import React, { useEffect, useRef } from "react";
import { mount } from "dashboard/DashboardApp";

const DashboardAppComponent = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref}></div>;
};

export default DashboardAppComponent;
