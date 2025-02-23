// components/CardContainer.jsx
import React from "react";
import Card from "./Card";

export default function CardContainer() {
  const cardList = [1, 2, 3, 4, 5];
  return (
    <div className="w-full  relative">
      <h2 className="text-4xl font-bold  px-4">Similar Events You Might Like</h2>
      <ul className="flex flex-col md:flex-row justify-start items-center my-4 gap-9 px-4 overflow-x-auto no-scrollbar border py-4">
        {cardList.map((l, i) => (
          <li key={i} className="first:ml-0">
            <Card />
          </li>
        ))}
      </ul>
    </div>
  );
}