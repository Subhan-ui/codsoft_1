import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import "./layout.css";
import Dashboard from "../body/Dashboard";
import Accordian from "../body/Accordian";
import Breadcrumbs from "../body/Breadcrumbs";
import Buttongroups from "../body/Buttongroups";
import Buttons from "../body/Buttons";
import Cards from "../body/Cards";
import Carousal from "../body/Carousal";
import Charts from "../body/Charts";
import ChecksAndRadio from "../body/ChecksAndRadio";
import Collapse from "../body/Collapse";
import Color from "../body/Color";
import CoreUIFlags from "../body/CoreUIFlags";
import CoreUIFree from "../body/CoreUIFree";
import CoreUIMethods from "../body/CoreUIMethods";
import Dropdown from "../body/Dropdown";
import FloatingLabel from "../body/FloatingLabel";
import FormControl from "../body/FormControl";
import InputGroups from "../body/InputGroups";
import Layouts from "../body/Layouts";
import Listgroup from "../body/Listgroup";
import NavsAndTabs from "../body/Navs&Tabs";
import Pagination from "../body/Pagination";
import Placeholders from "../body/Placeholders";
import Popovers from "../body/Popovers";
import Progress from "../body/Progress";
import Range from "../body/Range";
import Select from "../body/Select";
import Spinner from "../body/Spinner";
import Tables from "../body/Tables";
import Tooltips from "../body/Tooltips";
import Typography from "../body/Typography";
import Validation from "../body/Validation";

import { Route, Routes } from "react-router-dom";

export default function Layout() {
  const [width, setWidth] = useState(0);

  const handleSideNav = () => {
    if (width === 0) {
      if (window.screen.width >= 850) {
        setWidth(23);
      }else{
        setWidth(80);
      }
    } else if (width > 0) {
      setWidth(0);
    }
  };
  const navbarWidth = `calc(100vw - ${width}vw)`;
  const bodyWidth = `calc(${navbarWidth}-23)`;
  const style = {
    display: "flex",
    // flexDirection:'column'
  };

  return (
    <>
      <div style={style}>
        <Sidenav width={`${width}vw`} />
        <div className="layout">
          <Navbar handleSideNav={handleSideNav} width={navbarWidth} />
          <div className="component">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/accordian" element={<Accordian />} />
              <Route path="/breadcrumbs" element={<Breadcrumbs />} />
              <Route path="/buttongroups" element={<Buttongroups />} />
              <Route path="/buttons" element={<Buttons />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/carousal" element={<Carousal />} />
              <Route path="/charts" element={<Charts />} />
              <Route path="/checksandradios" element={<ChecksAndRadio />} />
              <Route path="/collapse" element={<Collapse />} />
              <Route path="/color" element={<Color />} />
              <Route path="/coreuiflags" element={<CoreUIFlags />} />
              <Route path="/coreuifree" element={<CoreUIFree />} />
              <Route path="/coreuimethods" element={<CoreUIMethods />} />
              <Route path="/dropdowns" element={<Dropdown />} />
              <Route path="/floatinglabels" element={<FloatingLabel />} />
              <Route path="/formcontrol" element={<FormControl />} />
              <Route path="/inputgroups" element={<InputGroups />} />
              <Route path="/layouts" element={<Layouts />} />
              <Route path="/listgroup" element={<Listgroup />} />
              <Route path="/navsandtabs" element={<NavsAndTabs />} />
              <Route path="/pagination" element={<Pagination />} />
              <Route path="/placeholder" element={<Placeholders />} />
              <Route path="/popovers" element={<Popovers />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/range" element={<Range />} />
              <Route path="/select" element={<Select />} />
              <Route path="/spinners" element={<Spinner />} />
              <Route path="/tables" element={<Tables />} />
              <Route path="/tooltips" element={<Tooltips />} />
              <Route path="/typography" element={<Typography />} />
              <Route path="/validation" element={<Validation />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
