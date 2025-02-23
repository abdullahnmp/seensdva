import React from "react";
import SideBar from "./components/SideBar";
import MainBar from "./components/MainBar";
import CardContainer from "./components/CardContainer";

export default function EventDetails() {
  return (
    <div className="w-[90%] m-auto my-9">
      <div className="md:grid grid-cols-[1fr_400px] gap-20 items-start my-3">
        <MainBar />
        <SideBar />
      </div>
        <CardContainer/>
    </div>
  );
}
