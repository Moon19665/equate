import React from "react";
import { homePageMap } from "./homePageMap";
import homePage from "../../json/homepage.json"; // make sure the path is correct
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div>

      {homePage.filter((block) => block.visible !== false).map((block) => {
        const Component = homePageMap[block.component];
        if (!Component) return null;
        return <Component key={block.id} {...(block.props || {})} />;
      })}

    </div>
  );
};

export default HomePage;
