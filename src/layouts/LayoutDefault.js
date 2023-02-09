import React from "react";
import Header from "../components/layout/Header";

const LayoutDefault = ({ children }) => (
  <>
    <Header navPosition="left" className="reveal-from-bottom" />
    <main className="site-content">{children}</main>
  </>
);

export default LayoutDefault;
