import React from "react";
import Header from "../components/Header";

const HomepageLayout = (props) => {
  return (
    <div className="bg-gradient-to-b from-sky-50 via-sky-600 to-sky-900">
      <Header {...props} />
      {props.children}
    </div>
  );
};
export default HomepageLayout;
